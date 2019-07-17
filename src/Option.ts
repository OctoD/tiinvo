import { ensureFunction } from "./common";
import { Err, Ok } from "./Result";

class OptionLike<T> {
  public constructor(protected value: T) {}

  protected foldReturn<U>(value: U): U {
    return this.isNone() ? (None() as any) : value;
  }

  /**
   * Returns `None` if the option is `None`,
   * otherwise returns `optb`
   *
   * ```ts
   * import { Option } from 'tiinvo';
   *
   * Option(10).and(Option(20)).isSome() // true
   * Option(null).and(Option(20)).isSome() // false
   * ```
   *
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
    ensureFunction("andThen argument must be a function", callback);
    return this.foldReturn(callback(this.value));
  }

  /**
   * Throws if the value is a `None` with a custom error message provided by msg.
   *
   * ```ts
   * import { Option } from 'tiinvo';
   *
   * Option(1).expect('ok') // Option(1)
   * Option(null).expect('myerror') // throws ReferenceError('myerror')
   * ```
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
   * ```ts
   * Option(1).filter(a => a > 0).isSome() // true
   * Option(1).filter(a => a > 10).isSome() // false
   * ```
   *
   * @param {(arg: T) => boolean} predicate
   * @returns {ReturnType<typeof predicate> extends true ? Some<T> : None}
   * @memberof OptionLike
   */
  public filter(
    predicate: (arg: T) => boolean
  ): ReturnType<typeof predicate> extends true ? Some<T> : None<T> {
    const predicateresult = predicate(this.value);
    return predicateresult ? this : (None() as any);
  }

  /**
   * Converts from `Option<Option<T>>` to `Option<T>`
   *
   * ```ts
   * Option(Some(100)).flattern() // Some(100)
   * ```
   *
   * @returns {OptionLike<T>}
   * @memberof OptionLike
   */
  public flattern(): OptionLike<T> {
    return this.value instanceof OptionLike ? this.value : this;
  }

  /**
   * Returns if has not a value
   *
   * ```ts
   * None().isNone() // true
   * None().isSome() // false
   * ```
   *
   * @returns {boolean}
   * @memberof OptionLike
   */
  public isNone(): boolean {
    return this.value === null || this.value === undefined;
  }

  /**
   * Returns if has a value
   *
   * ```ts
   * Some().isSome() // true
   * Some().isNone() // false
   * ```
   *
   * @returns {boolean}
   * @memberof OptionLike
   */
  public isSome(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  /**
   * Maps an `OptionLike<T>` to `OptionLike<U>` by applying a function to a contained value.
   *
   * ```ts
   * Option('foobar').map(val => val.length) // Option(6)
   * ```
   *
   * @template K
   * @param {(arg: T) => K} f
   * @returns {K}
   * @memberof OptionLike
   */
  public map<K>(f: (arg: T) => K): OptionLike<K> {
    ensureFunction("map argument must be a function", f);

    return Option(f(this.value));
  }

  /**
   * Applies a function to the contained value (if any), or returns the provided default (if not).
   *
   * ```ts
   * Option('foobar').mapOr('abc', arg => arg.length) // Option(6)
   * None().mapOr('abc', arg => arg.length) // Option('abc')
   * ```
   *
   * @template K
   * @param {K} def
   * @param {(arg: T) => K} f
   * @returns {K}
   * @memberof OptionLike
   */
  public mapOr<K>(def: K, f: (arg: T) => K): K {
    ensureFunction("mapOr argument must be a function", f);

    return this.isNone() ? def : f(this.value);
  }

  /**
   * Applies a function to the contained value (if any), or computes a default (if not).
   *
   * ```ts
   * Option('helloworld').mapOrElse(() => 0, arg => arg.length) // 10
   * None().mapOrElse(() => 1000, arg => arg.length) // 1000
   * ```
   *
   * @template K
   * @param {() => K} defFn
   * @param {(arg: T) => K} f
   * @returns {K}
   * @memberof OptionLike
   */
  public mapOrElse<K>(
    defFn: () => K,
    f: (arg: T extends null ? any : T) => K
  ): K {
    ensureFunction("mapOrElse argument must be a function", f);

    return this.isSome() ? f(this.value as any) : defFn();
  }

  /**
   * Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err)`.
   *
   * ```ts
   * Some(100).okOr(Err('foo')) // Ok(100)
   * None().okOr(Err('foo')) // Err('foo')
   * ```
   *
   * @param {Err} err
   * @returns {(Ok<T> | Err)}
   * @memberof OptionLike
   */
  public okOr(err: Err): Ok<T> | Err {
    return this.isSome() ? Ok(this.value) : err;
  }

  /**
   * Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.
   *
   * ```ts
   * Some(100).okOrElse(() => Err("foo")); // Ok(100)
   * None().okOrElse(() => Err("foo")); // Err('foo)
   * ```
   *
   * @param {() => Err} fn
   * @returns {(Ok<T> | Err)}
   * @memberof OptionLike
   */
  public okOrElse(err: () => Err): Ok<T> | Err {
    return this.isSome() ? Ok(this.value) : err();
  }

  /**
   * Returns the option if it contains a value,
   * otherwise returns `optb`
   *
   * ```ts
   * None().or(Some(100)) // Some(100)
   * Some(10).or(Some(100)) // Some(10)
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
   *
   * ```ts
   * Some(10).orElse(() => 1000) // Some(10)
   * None().orElse(() => 1000) // Some(1000)
   * ```
   *
   * @template U
   * @param {() => OptionLike<U>} f
   * @returns {(Some<T> | OptionLike<U>)}
   * @memberof OptionLike
   */
  public orElse<U>(f: () => OptionLike<U>): Some<T> | OptionLike<U> {
    ensureFunction("orElse argument must be a function", f);

    return this.isSome() ? this : f();
  }

  /**
   * Transposes an `Option` of a `Result` into a `Result` of an `Option`.
   *
   * ```ts
   * Option(100).transpose() // Ok(Some(100))
   * ```
   *
   * @returns {(Ok<Some<T>> | Ok<None>)}
   * @memberof OptionLike
   */
  public transpose(): Ok<Some<T>> | Ok<None<T>> {
    return this.isSome() ? Ok(Some(this.value)) : Ok(None());
  }

  /**
   * Returns Some if exactly one of self,
   * optb is Some,
   * otherwise returns None.
   *
   * ```ts
   * Some(10).xor(Some(10)) // None()
   * Some(10).xor(Some(11)) // Some(10)
   * None().xor(Some(11)) // Some(11)
   * None().xor(None()) // None()
   * ```
   *
   * @template U
   * @param {OptionLike<U>} optb
   * @returns {(Some<T> | Some<U> | None)}
   * @memberof OptionLike
   */
  public xor<U>(optb: OptionLike<U>): Some<T> | Some<U> | None<T> {
    if (optb.isNone() && this.isSome()) {
      return this;
    } else if (optb.isSome() && this.isNone()) {
      return optb;
    }

    return (optb.value as any) === (this.value as any) ? None<T>() : this;
  }

  /**
   * Returns wrapped value or throws if is None
   *
   * ```ts
   * Some(10).unwrap() // 10
   * None().unwrap() // throw ReferenceError
   * ```
   *
   * @returns {(T | never)}
   * @memberof OptionLike
   */
  public unwrap(): T | never {
    if (this.isNone()) {
      throw new ReferenceError("cannot unwrap null value");
    }

    return this.value;
  }

  /**
   * Returns the contained value or a default.
   *
   * ```ts
   * None().unwrapOr(10) // 10
   * Some(20).unwrapOr(10) // 20
   * ```
   *
   * @param {K} value
   * @returns {K}
   * @memberof OptionLike
   */
  public unwrapOr<K>(value: K): K {
    return this.isNone() ? value : (this.value as any);
  }
}

/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 */
export type Option<T> = OptionLike<T | null>;
/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 */
export type Some<T> = OptionLike<T>;
/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 */
export type None<T> = OptionLike<T>;

/**
 * Forces NaN to be considered as null
 * @param {unknown} value
 * @returns
 */
function coerceNull(value: unknown) {
  if (value === undefined) {
    return null;
  }

  if (typeof value !== "number") {
    return value;
  }

  return isNaN(value) ? null : value;
}

/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 *
 * Returns `None`
 * @export
 * @returns {None}
 */
export function None<T = null>(): None<T> {
  return Option<T>((null as unknown) as T);
}

/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 *
 * Returns `Some<T>`
 * @export
 * @template T
 * @param {T} value
 * @returns {Some<T>}
 */
export function Some<T>(value: T): Some<T> {
  return Option(coerceNull(value) as T);
}

/**
 * Type `Option` represents an optional value: every `Option` is either
 * `Some` and contains a value, or `None`, and does not.
 *
 * Returns an `Option<T>`
 * @export
 * @template T
 * @param {T} value
 * @returns {OptionLike<T>}
 */
export function Option<T>(value: T): OptionLike<T> {
  return new OptionLike(coerceNull(value) as T);
}
