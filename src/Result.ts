import { Option, None, Some } from "./Option";

class ResultLike<R, E> {
  public constructor(protected value: R, protected error: E | null) {}

  /**
   * Converts from `Result<T, E>` to `OptionLike<E>`.
   * @returns {Option<E>}
   * @memberof ResultLike
   */
  public err(): Option<E> {
    return instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  /**
   * Returns true if the result is `Error`.
   * @returns {boolean}
   * @memberof ResultLike
   */
  public isError(): boolean {
    return instanceOfError<R, E>(this.value);
  }

  /**
   * Returns true if the result is `Ok`.
   * @returns {Option<R>}
   * @memberof ResultLike
   */
  public isOk(): Option<R> {
    return instanceOfError<R, E>(this.value) ? None() : Some(this.value);
  }

  /**
   * Maps a `ResultLike<T, E>` to `ResultLike<U, E>` by applying a function
   * to a contained `Ok` value, leaving an `Err` value untouched.
   *
   * This function can be used to compose the results of two functions.
   * @template K
   * @param {(value: R) => K} f
   * @returns {ResultLike<K, E>}
   * @memberof ResultLike
   */
  public map<K>(f: (value: R) => K): ResultLike<K, E> {
    if (typeof f !== "function") {
      throw new TypeError(`map arg must be a function`);
    }

    return new ResultLike<K, E>(f(this.value), this.error);
  }

  /**
   * Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value.
   *
   * This function can be used to unpack a successful result while handling an error.
   * @template F
   * @param {F} fallback
   * @param {(value: R) => F} f
   * @returns {F}
   * @memberof ResultLike
   */
  public mapOrElse<F>(fallback: (error: Error) => F, f: (value: R) => F): F {
    return this.isError()
      ? fallback((this.error as unknown) as Error)
      : f(this.value);
  }

  /**
   * Converts from Result<T, E> to Option<T>.
   * @returns {Option<R>}
   * @memberof ResultLike
   */
  public ok(): Option<R> {
    return Some(this.value as R);
  }
}

/**
 * @template T
 * @template E
 * @param {(T | E)} value
 * @returns {value is E}
 */
function instanceOfError<T, E>(value: T | E): value is E {
  return (
    value instanceof Err ||
    ("name" in value && "message" in value && "stack" in value)
  );
}

export type Err = ResultLike<null, Error>;
export type Ok<T> = ResultLike<T, null>;

/**
 * Returns an `Error`
 * @export
 * @param {string} [message]
 * @returns {Err}
 */
export function Err(message?: string): Err {
  return new ResultLike<null, Error>(null, new Error(message));
}

/**
 * Returns `Ok`
 * @export
 * @template T
 * @param {T} value
 * @returns {Ok<T>}
 */
export function Ok<T>(value: T): Ok<T> {
  return (new ResultLike<T, Err>(value, null) as unknown) as Ok<T>;
}
