import { Option, None, Some } from "./Option";
import { ensureFunction } from "./common";

class ResultLike<R, E> {
  public constructor(protected value: R | E) {}

  /**
   * Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
   *
   * ```ts
   * Ok(10).and(Ok(20)) // Ok(20)
   * Err('meh').and(Ok(30)) // Err('meh')
   * ```
   *
   * @template U
   * @param {ResultLike<U, E>} res
   * @returns {(ResultLike<U, E> | Err)}
   * @memberof Result
   */
  public and<U>(res: ResultLike<U, E>): ResultLike<U, E> | Err {
    if (instanceOfError<R, E>(this.value)) {
      return new ResultLike(this.value as any);
    }

    return res;
  }

  /**
   * Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
   *
   * ```ts
   * Ok(20).andThen(a => a * 2) // Ok(40)
   * Err('aaa').andThen(a => a * 2) // Err('aaa')
   * ```
   *
   * @template U
   * @param {(arg: R) => ResultLike<U, E>} op
   * @returns {ResultLike<U, E>}
   * @memberof Result
   */
  public andThen<U>(op: (arg: R) => ResultLike<U, E>): ResultLike<U, E> {
    ensureFunction("andThen argument must be a function", op);

    if (instanceOfError<R, E>(this.value)) {
      return new ResultLike(this.value as any);
    }

    return op(this.value);
  }

  /**
   * Converts from `Result<T, E>` to `OptionLike<E>`.
   *
   * ```ts
   * Err('foo').err() // OptionLike(new Error('foo'))
   * ```
   *
   * @returns {Option<E>}
   * @memberof Result
   */
  public err(): Option<E> {
    return instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  /**
   * Unwraps a result, yielding the content of an `Ok`.
   *
   * ```ts
   * Ok(10).expect('does not explode') // 10
   * Err('argh').expect('will explode') // throws Error('will explode')
   * ```
   *
   * @param {string} message
   * @returns {(R | never)}
   * @memberof Result
   */
  public expect(message: string): R | never {
    if (instanceOfError<R, E>(this.value)) {
      throw new Error(message);
    }

    return this.value;
  }

  /**
   * Unwraps a result, yielding the content of an `Err`.
   *
   * ```ts
   * Ok(10).expectErr('explosions?') // throws Error('explosions?')
   * Err('🦄').expectErr('explosions?') // returns Error('🦄')
   * ```
   *
   * @param {string} message
   * @returns {(E | never)}
   * @memberof Result
   */
  public expectErr(message: string): E | never {
    if (instanceOfError<R, E>(this.value)) {
      return this.value;
    }

    throw new ReferenceError(message);
  }

  /**
   * Returns true if the result is `Error`.
   *
   * ```ts
   * Ok(10).isError() // false
   * Err('aaa').isError() // true
   * ```
   *
   * @returns {boolean}
   * @memberof Result
   */
  public isError(): boolean {
    return instanceOfError<R, E>(this.value);
  }

  /**
   * Returns true if the result is `Ok`.
   *
   * ```ts
   * Ok(10).isOk() // true
   * Err('aaa').isOk() // false
   * ```
   *
   * @returns {boolean}
   * @memberof Result
   */
  public isOk(): boolean {
    return !instanceOfError<R, E>(this.value);
  }

  /**
   * Maps a `Result<T, E>` to `Result<U, E>` by applying a function
   * to a contained `Ok` value, leaving an `Err` value untouched.
   *
   * This function can be used to compose the results of two functions.
   *
   * ```ts
   * Ok('asd').map(a => a.length) // Ok(3)
   * ```
   *
   * @template K
   * @param {(value: R) => K} f
   * @returns {ResultLike<K, E>}
   * @memberof Result
   */
  public map<K>(f: (value: R) => K): ResultLike<K, E> {
    ensureFunction("map argument must be a function", f);

    return new ResultLike<K, E>(f(this.value as R));
  }

  /**
   * Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value.
   *
   * This function can be used to unpack a successful result while handling an error.
   *
   * ```ts
   * Ok('asd').mapOrElse(a => a.repeat(2), b => b.message) // 'asdasd'
   * Err('ohmybad').mapOrElse(a => a.repeat(2), b => b.message) // 'ohmybad'
   * ```
   *
   * @template F
   * @param {F} fallback
   * @param {(value: R) => F} f
   * @returns {F}
   * @memberof Result
   */
  public mapOrElse<F>(fallback: (error: Error) => F, f: (value: R) => F): F {
    ensureFunction("mapOrElse first argument must be a function", fallback);
    ensureFunction("mapOrElse second argument must be a function", f);

    return this.isError()
      ? fallback((this.value as unknown) as Error)
      : f(this.value as R);
  }

  /**
   * Converts from Result<T, E> to Option<T>.
   *
   * ```ts
   * Ok(10).ok() // OptionLike(10)
   * Err('ahrrrrr').ok() // None()
   * ```
   *
   * @returns {Option<R>}
   * @memberof Result
   */
  public ok(): Option<R> {
    return !instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  /**
   * Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
   *
   * ```ts
   * Ok(10).or(Ok(20)) // Ok(10)
   * Err('').or(Ok(20)) // Ok(20)
   * ```
   *
   * @template U
   * @param {ResultLike<U, E>} res
   * @returns {(ResultLike<U, E> | Ok<R>)}
   * @memberof Result
   */
  public or<U>(res: ResultLike<U, E>): ResultLike<U, E> | Ok<R> {
    if (instanceOfError<R, E>(this.value)) {
      return res;
    }

    return this;
  }

  /**
   * Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
   *
   * This function can be used for control flow based on result values.
   *
   * ```ts
   * Ok('unicorn!').orElse(a => a.message) // Ok('unicorn!')
   * Err('darn!').orElse(a => a.message) // Ok('darn!')
   * ```
   *
   * @template U
   * @param {(arg: E) => ResultLike<U, E>} op
   * @returns {(ResultLike<U, E> | Ok<R>)}
   * @memberof Result
   */
  public orElse<U>(op: (arg: E) => ResultLike<U, E>): ResultLike<U, E> | Ok<R> {
    ensureFunction("orElse argument must be a function", op);

    if (instanceOfError<R, E>(this.value)) {
      return op(this.value);
    }

    return this;
  }

  /**
   * Returns wrapped value or throws an `Error`
   *
   * ```ts
   * Ok(10).unwrap() // 10
   * Err('err').unwrap() // throws a ReferenceError
   * ```
   *
   * @returns {(R | never)}
   * @memberof Result
   */
  public unwrap(): R | never {
    if (instanceOfError<R, E>(this.value)) {
      throw this.value;
    }

    return this.value;
  }

  /**
   * Unwraps a result, yielding the content of an `Err`.
   * Throws if the value is not an `Err`.
   *
   * ```ts
   * Ok(10).unwrap() // throws a ReferenceError
   * Err('err').unwrap() // Error('err')
   * ```
   *
   * @returns {(E | never)}
   * @memberof Result
   */
  public unwrapErr(): E | never {
    if (instanceOfError<R, E>(this.value)) {
      return this.value;
    }

    throw new ReferenceError(`wrapped value is not an Error`);
  }

  /**
   * Unwraps a result, yielding the content of an `Ok`. Else, it returns `optb`.
   *
   * ```ts
   * Ok(10).unwrapOr(20) // 10
   * Err('foo').unwrapOr(30) // 30
   * ```
   *
   * @template U
   * @param {U} optb
   * @returns {(R | U)}
   * @memberof Result
   */
  public unwrapOr<U>(optb: U): R | U {
    if (instanceOfError<R, E>(this.value)) {
      return optb;
    }

    return this.value;
  }

  /**
   * Unwraps a result, yielding the content of an `Ok`. If the value is an `Err` then it calls op with its value.
   *
   * ```ts
   * Ok('pizza').unwrapOrElse(err => err.message) // 'pizza'
   * Err('pizza with ananas').unwrapOrElse(err => err.message) // 'pizza with ananas'
   * ```
   *
   * @template U
   * @param {(error: E) => U} op
   * @returns {(R | U)}
   * @memberof Result
   */
  public unwrapOrElse<U>(op: (error: E) => U): R | U {
    ensureFunction("unwrapOrElse argument must be a function", op);

    if (instanceOfError<R, E>(this.value)) {
      return op(this.value);
    }

    return this.value;
  }
}

/**
 * @template T
 * @template E
 * @param {(T | E)} value
 * @returns {value is E}
 */
function instanceOfError<T, E>(value: T | E): value is E {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    value instanceof Err ||
    ("name" in value && "message" in value && "stack" in value)
  );
}

/**
 * `Result<T, E>` is the type used for returning and propagating errors.
 * It is an enum with the variants, `Ok(T)`, representing success and
 * containing a value, and `Err(E)`, representing error and containing
 * an error value.
 */
export type Err = ResultLike<any, Error>;
/**
 * `Result<T, E>` is the type used for returning and propagating errors.
 * It is an enum with the variants, `Ok(T)`, representing success and
 * containing a value, and `Err(E)`, representing error and containing
 * an error value.
 */
export type Ok<T> = ResultLike<T, any>;
/**
 * `Result<T, E>` is the type used for returning and propagating errors.
 * It is an enum with the variants, `Ok(T)`, representing success and
 * containing a value, and `Err(E)`, representing error and containing
 * an error value.
 */
export type Result<T, E> = ResultLike<T, E>;

/**
 * `Result<T, E>` is the type used for returning and propagating errors.
 * It is an enum with the variants, `Ok(T)`, representing success and
 * containing a value, and `Err(E)`, representing error and containing
 * an error value.
 *
 * Returns an `Error`
 * @export
 * @param {string} [message]
 * @returns {Err}
 */
export function Err(message?: string): Err {
  return new ResultLike<any, Error>(new Error(message));
}

/**
 * `Result<T, E>` is the type used for returning and propagating errors.
 * It is an enum with the variants, `Ok(T)`, representing success and
 * containing a value, and `Err(E)`, representing error and containing
 * an error value.
 *
 * Returns `Ok`
 * @export
 * @template T
 * @param {T} value
 * @returns {Ok<T>}
 */
export function Ok<T>(value: T): Ok<T> {
  return new ResultLike<T, null>(value);
}
