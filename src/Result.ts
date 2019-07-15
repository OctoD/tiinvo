import { Option, None, Some } from "./Option";

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
   * Returns true if the result is `Error`.
   * @returns {boolean}
   * @memberof Result
   */
  public isError(): boolean {
    return instanceOfError<R, E>(this.value);
  }

  /**
   * Returns true if the result is `Ok`.
   * @returns {Option<R>}
   * @memberof Result
   */
  public isOk(): Option<R> {
    return instanceOfError<R, E>(this.value) ? None() : Some(this.value);
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
    if (typeof f !== "function") {
      throw new TypeError(`map arg must be a function`);
    }

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
    return Some(this.value as R);
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
 * Returns an `Error`
 * @export
 * @param {string} [message]
 * @returns {Err}
 */
export function Err(message?: string): Err {
  return new Result<any, Error>(new Error(message));
}

/**
 * Returns `Ok`
 * @export
 * @template T
 * @param {T} value
 * @returns {Ok<T>}
 */
export function Ok<T>(value: T): Ok<T> {
  return new Result<T, null>(value);
}
