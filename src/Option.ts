class OptionLike<T> {
  public constructor(protected value: T) {}

  protected foldReturn<U>(value: U): U {
    if (this.isNone()) {
      return None() as any;
    }

    return value;
  }

  /**
   * Returns `None` if the option is `None`,
   * otherwise returns `optb`
   * @template U
   * @param {OptionLike<U>} optb
   * @returns {OptionLike<U>}
   * @memberof OptionLike
   */
  public and<U>(optb: OptionLike<U>): OptionLike<U> {
    return this.foldReturn(optb);
  }

  /**
   * Returns `callback` result if `OptionLike<T>` is `Some`,
   * otherwise returns `None`
   * @param {<R>(arg: T) => OptionLike<R>} callback
   * @returns {ReturnType<typeof callback>}
   * @memberof OptionLike
   */
  public andThen<K>(
    callback: (arg: T) => OptionLike<K>
  ): Some<T> | ReturnType<typeof callback> {
    return this.foldReturn(callback(this.value));
  }

  /**
   * Throws if the value is a `None` with a custom error message provided by msg.
   *
   * @param {string} msg
   * @returns {(Some<T> | never)}
   * @memberof OptionLike
   */
  public expect(msg: string): Some<T> | never {
    if (this.isNone()) {
      throw new ReferenceError(msg);
    }

    return this;
  }

  /**
   * Returns the `Option` if it's value passes
   * the `predicate` function. Otherwise returns
   * None
   *
   * @param {(arg: T) => boolean} predicate
   * @returns {ReturnType<typeof predicate> extends true ? Some<T> : None}
   * @memberof OptionLike
   */
  public filter(
    predicate: (arg: T) => boolean
  ): ReturnType<typeof predicate> extends true ? Some<T> : None {
    const predicateresult = predicate(this.value);
    return predicateresult ? this : (None() as any);
  }

  /**
   * Returns if has not a value
   * @returns {boolean}
   * @memberof OptionLike
   */
  public isNone(): boolean {
    return this.value === null || this.value === undefined;
  }

  /**
   * Returns if has a value
   * @returns {boolean}
   * @memberof OptionLike
   */
  public isSome(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  /**
   * Maps an `OptionLike<T>` to `OptionLike<U>` by applying a function to a contained value.
   * @template K
   * @param {(arg: T) => K} f
   * @returns {K}
   * @memberof OptionLike
   */
  public map<K>(f: (arg: T) => K): OptionLike<K> {
    if (typeof f !== "function") {
      throw new TypeError(`map argument must be a function`);
    }

    return Option(f(this.value));
  }

  /**
   * Applies a function to the contained value (if any), or returns the provided default (if not).
   * @template K
   * @param {K} def
   * @param {(arg: T) => K} f
   * @returns {K}
   * @memberof OptionLike
   */
  public mapOr<K>(def: K, f: (arg: T) => K): K {
    if (typeof f !== "function") {
      throw new TypeError(`map argument must be a function`);
    }

    if (this.isNone()) {
      return def;
    }

    return f(this.value);
  }

  /**
   * Returns the option if it contains a value,
   * otherwise returns `optb`
   *
   * ```ts
   * expect(None().or(Some(100))).toEqual(Some(100))
   * ```
   *
   * @template U
   * @param {OptionLike<U>} optb
   * @returns {(OptionLike<T> | OptionLike<U>)}
   * @memberof OptionLike
   */
  public or<U>(optb: OptionLike<U>): OptionLike<T> | OptionLike<U> {
    return this.isSome() ? this : optb;
  }

  /**
   * Returns the option if it contains a value, otherwise calls
   * `f` and returns the result.
   * @template U
   * @param {() => OptionLike<U>} f
   * @returns {(Some<T> | OptionLike<U>)}
   * @memberof OptionLike
   */
  public orElse<U>(f: () => OptionLike<U>): Some<T> | OptionLike<U> {
    return this.isSome() ? this : f();
  }

  /**
   * Returns Some if exactly one of self,
   * optb is Some,
   * otherwise returns None.
   * @template U
   * @param {OptionLike<U>} optb
   * @returns {(Some<T> | Some<U> | None)}
   * @memberof OptionLike
   */
  public xor<U>(optb: OptionLike<U>): Some<T> | Some<U> | None {
    if (optb.isNone() && this.isSome()) {
      return this;
    } else if (optb.isSome() && this.isNone()) {
      return optb;
    }

    return (optb.value as any) === (this.value as any) ? None() : this;
  }

  /**
   * Returns wrapped value or throws if is None
   * @returns {(T | never)}
   * @memberof OptionLike
   */
  public unwrap(): T | never {
    if (this.isNone()) {
      throw new ReferenceError();
    }

    return this.value;
  }

  /**
   * Returns the contained value or a default.
   * @param {K} value
   * @returns {K}
   * @memberof OptionLike
   */
  public unwrapOr<K>(value: K): K {
    return this.isNone() ? value : (this.value as any);
  }
}

export type Option<T> = OptionLike<T | null>;
export type Some<T> = OptionLike<T>;
export type None = OptionLike<null>;

/**
 * Returns `None`
 * @export
 * @returns {None}
 */
export function None(): None {
  return Option(null);
}

/**
 * Returns `Some<T>`
 * @export
 * @template T
 * @param {T} value
 * @returns {Some<T>}
 */
export function Some<T>(value: T): Some<T> {
  return Option(value === undefined ? ((null as unknown) as T) : value);
}

/**
 * Returns an `Option<T>`
 * @export
 * @template T
 * @param {T} value
 * @returns {OptionLike<T>}
 */
export function Option<T>(value: T): OptionLike<T> {
  return new OptionLike(value);
}
