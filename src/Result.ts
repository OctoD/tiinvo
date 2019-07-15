import { Option, None, Some } from "./Option";
import { ensureFunction } from "./common";

class Result<R, E> {
  public constructor(protected value: R | E) {}

  /**
   * Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
   * @template U
   * @param {Result<U, E>} res
   * @returns {(Result<U, E> | Err)}
   * @memberof Result
   */
  public and<U>(res: Result<U, E>): Result<U, E> | Err {
    if (instanceOfError<R, E>(this.value)) {
      return new Result(this.value as any);
    }

    return res;
  }

  /**
   * Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
   * @template U
   * @param {(arg: R) => Result<U, E>} op
   * @returns {Result<U, E>}
   * @memberof Result
   */
  public andThen<U>(op: (arg: R) => Result<U, E>): Result<U, E> {
    ensureFunction("andThen argument must be a function", op);

    if (instanceOfError<R, E>(this.value)) {
      return new Result(this.value as any);
    }

    return op(this.value);
  }

  /**
   * Converts from `Result<T, E>` to `OptionLike<E>`.
   * @returns {Option<E>}
   * @memberof Result
   */
  public err(): Option<E> {
    return instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  /**
   * Unwraps a result, yielding the content of an `Ok`.
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
   * @returns {boolean}
   * @memberof Result
   */
  public isError(): boolean {
    return instanceOfError<R, E>(this.value);
  }

  /**
   * Returns true if the result is `Ok`.
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
   * @template K
   * @param {(value: R) => K} f
   * @returns {Result<K, E>}
   * @memberof Result
   */
  public map<K>(f: (value: R) => K): Result<K, E> {
    ensureFunction("map argument must be a function", f);

    return new Result<K, E>(f(this.value as R));
  }

  /**
   * Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value.
   *
   * This function can be used to unpack a successful result while handling an error.
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
   * @returns {Option<R>}
   * @memberof Result
   */
  public ok(): Option<R> {
    return !instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  /**
   * Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
   * @template U
   * @param {Result<U, E>} res
   * @returns {(Result<U, E> | Ok<R>)}
   * @memberof Result
   */
  public or<U>(res: Result<U, E>): Result<U, E> | Ok<R> {
    if (instanceOfError<R, E>(this.value)) {
      return res;
    }

    return this;
  }

  /**
   * Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
   *
   * This function can be used for control flow based on result values.
   * @template U
   * @param {(arg: E) => Result<U, E>} op
   * @returns {(Result<U, E> | Ok<R>)}
   * @memberof Result
   */
  public orElse<U>(op: (arg: E) => Result<U, E>): Result<U, E> | Ok<R> {
    ensureFunction("orElse argument must be a function", op);

    if (instanceOfError<R, E>(this.value)) {
      return op(this.value);
    }

    return this;
  }

  /**
   * Returns wrapped value or throws an `Error`
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

export type Err = Result<any, Error>;
export type Ok<T> = Result<T, any>;

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
  return new Result<any, Error>(new Error(message));
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
  return new Result<T, null>(value);
}
