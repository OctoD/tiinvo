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

  public map<K>(f: (value: R) => K): ResultLike<K, E> {
    if (typeof f !== "function") {
      throw new TypeError(`map arg must be a function`);
    }

    return new ResultLike<K, E>(f(this.value), this.error);
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
