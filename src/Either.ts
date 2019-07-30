import { Option } from "./Option";
import { Result, Err, Ok } from "./Result";
import { ensureFunction } from "./common";

class EitherLike<T> {
  public constructor(protected value: T, protected isLeftType: boolean) {}

  /**
   * Returns `Either<U>` if is `Right`, otherwise returns `Either<T>`
   *
   * ```ts
   * Left(100).and(Right(200)) // Left(100)
   * Right(100).and(Right(200)) // Right(200)
   * Right(100).and(Left(200)) // Left(200)
   * ```
   *
   * @template U
   * @param {EitherLike<U>} either
   * @returns {(EitherLike<U> | EitherLike<T>)}
   * @memberof EitherLike
   */
  public and<U>(either: EitherLike<U>): EitherLike<U> | EitherLike<T> {
    return this.isRight() ? either : this;
  }

  /**
   * Returns `Fn` result if is `Right`, otherwise returns `Either<T>`
   *
   * ```ts
   * Right(100).andThen(value => Right(value + 1)) // Right(101)
   * Left(100).andThen(value => Right(value + 1)) // Left(100)
   * ```
   *
   * @template Fn
   * @template U
   * @param {Fn} fn
   * @returns {(EitherLike<U> | EitherLike<T>)}
   * @memberof Either
   */
  public andThen<Fn extends (value: T) => EitherLike<U>, U>(
    fn: Fn
  ): EitherLike<U> | EitherLike<T> {
    ensureFunction("andThen", fn);
    return this.isRight() ? fn(this.value) : this;
  }

  /**
   * Returns `true` if is `Left`
   *
   * ```ts
   * Left().isLeft(); // true
   * Right().isLeft(); // false
   * ```
   *
   * @returns {boolean}
   * @memberof Either
   */
  public isLeft(): boolean {
    return this.isLeftType;
  }

  /**
   * Returns `true` if is `Right`
   *
   * ```ts
   * Left().isRight(); // false
   * Right().isRight(); // true
   * ```
   *
   * @returns {boolean}
   * @memberof Either
   */
  public isRight(): boolean {
    return !this.isLeftType;
  }

  /**
   * Returns `leftFn` result if is `Left`, otherwise returns `rightFn` if is `Right`
   *
   * ```ts
   * Left(100).fold(a => a / 2, b => b * 2) // 50
   * Right(100).fold(a => a / 2, b => b * 2) // 200
   * ```
   *
   * @template A
   * @param {A} leftFn
   * @param {A} rightFn
   * @returns
   * @memberof Either
   */
  public fold<A extends (value: T) => any>(leftFn: A, rightFn: A) {
    ensureFunction("fold", leftFn);
    ensureFunction("fold", rightFn);
    return this.isLeft() ? leftFn(this.value) : rightFn(this.value);
  }

  /**
   * Returns `Some<T>` if is `Right`, otherwise returns `None`
   *
   * ```ts
   * Left(100).option() // None()
   * Right(100).option() // Some(100)
   * ```
   *
   * @returns {Option<T>}
   * @memberof Either
   */
  public option(): Option<T> {
    return Option(this.isLeft() ? null : this.value);
  }

  /**
   * Returns `Ok<T>` if is `Right`, otherwise returns `Err` if is `Left`
   *
   * ```ts
   * Left(100).result() // Err()
   * Right(20).result() // Ok(20)
   * ```
   *
   * @returns {Result<T, Error>}
   * @memberof Either
   */
  public result(): Result<T, Error> {
    return this.isLeft()
      ? Err(`Value ${this.value} is not right.`)
      : Ok(this.value);
  }

  /**
   * Swaps `Right<T>` to `Left<T>` if is `Right<T>`, otherwise swaps `Left<T>` to `Right<T>` if is `Left<T>`
   *
   * ```ts
   * Left(100).swap() // Right(100)
   * Right(20).swap() // Left(20)
   * ```
   *
   * @returns {EitherLike<T>}
   * @memberof Either
   */
  public swap(): EitherLike<T> {
    return new EitherLike(this.value, !this.isLeftType);
  }

  /**
   * Unwraps value `T`
   *
   * ```ts
   * Left(10).unwrap() // 10
   * Right(`hello world`).unwrap() // 'hello world'
   * ```
   *
   * @returns {T}
   * @memberof Either
   */
  public unwrap(): T {
    return this.value;
  }
}

export type Left<T> = EitherLike<T>;

export type Right<T> = EitherLike<T>;

/**
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {EitherLike<T>}
 */
export function Left<T>(value?: T): EitherLike<T> {
  return new EitherLike<T>(value as any, true);
}

/**
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {EitherLike<T>}
 */
export function Right<T>(value?: T): EitherLike<T> {
  return new EitherLike<T>(value as any, false);
}
