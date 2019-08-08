import { Option } from "./Option";
import { Result, Err, Ok } from "./Result";
import { ensureFunction } from "./common";

export class EitherLike<LeftValue, RightValue> {
  public constructor(
    protected value: LeftValue | RightValue,
    protected isLeftType: boolean
  ) {}

  /**
   * Returns `Either<U, X>` if is `Right`, otherwise returns `Either<LeftValue, RightValue>`
   *
   * ```ts
   * Left(100).and(Right(200)) // Left(100)
   * Right(100).and(Right(200)) // Right(200)
   * Right(100).and(Left(200)) // Left(200)
   * ```
   *
   * @template U
   * @param {EitherLike<U>} either
   * @returns {(EitherLike<U> | EitherLike<LeftValue>)}
   * @memberof EitherLike
   */
  public and<U, X>(
    either: EitherLike<U, X>
  ): EitherLike<U, X> | EitherLike<LeftValue, RightValue> {
    return this.isRight() ? either : this;
  }

  /**
   * Returns `Fn` result if is `Right`, otherwise returns `Either<LeftValue>`
   *
   * ```ts
   * Right(100).andThen(value => Right(value + 1)) // Right(101)
   * Left(100).andThen(value => Right(value + 1)) // Left(100)
   * ```
   *
   * @template Fn
   * @template U
   * @param {Fn} fn
   * @returns {(EitherLike<U> | EitherLike<LeftValue>)}
   * @memberof Either
   */
  public andThen<Fn extends (value: RightValue) => EitherLike<LeftValue, U>, U>(
    fn: Fn
  ): EitherLike<LeftValue, U> | EitherLike<LeftValue, RightValue> {
    ensureFunction("andThen", fn);
    return this.isRight() ? fn(this.value as any) : this;
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
   * @param {FnLeft} leftFn
   * @param {FnRight} rightFn
   * @returns
   * @memberof Either
   */
  public fold<
    FnLeft extends (value: LeftValue) => any,
    FnRight extends (value: RightValue) => any
  >(leftFn: FnLeft, rightFn: FnRight) {
    ensureFunction("fold", leftFn);
    ensureFunction("fold", rightFn);
    return this.isLeft()
      ? leftFn(this.value as LeftValue)
      : rightFn(this.value as RightValue);
  }

  /**
   * Returns `Some<RightValue>` if is `Right`, otherwise returns `None`
   *
   * ```ts
   * Left(100).option() // None()
   * Right(100).option() // Some(100)
   * ```
   *
   * @returns {Option<RightValue>}
   * @memberof Either
   */
  public option(): Option<RightValue> {
    return Option(this.isLeft() ? null : (this.value as RightValue));
  }

  /**
   * Returns `Ok<RightValue>` if is `Right`, otherwise returns `Err` if is `Left`
   *
   * ```ts
   * Left(100).result() // Err()
   * Right(20).result() // Ok(20)
   * ```
   *
   * @returns {Result<RightValue, Error>}
   * @memberof Either
   */
  public result(): Result<RightValue, Error> {
    return this.isLeft()
      ? Err(`Value ${this.value} is not right.`)
      : Ok(this.value as RightValue);
  }

  /**
   * Swaps `Right<LeftValue, RightValue>` to `Left<RightValue, LeftValue>` if is `Right<RightValue>`, otherwise swaps `Left<LeftValue, RightValue>` to `Right<RightValue, LeftValue>` if is `Left<LeftValue>`
   *
   * ```ts
   * Left(100).swap() // Right(100)
   * Right(20).swap() // Left(20)
   * ```
   *
   * @returns {EitherLike<RightValue, LeftValue>}
   * @memberof Either
   */
  public swap(): EitherLike<RightValue, LeftValue> {
    return new EitherLike(this.value as any, !this.isLeftType);
  }

  /**
   * Unwraps value `LeftValue | RightValue`
   *
   * ```ts
   * Left(10).unwrap() // 10
   * Right(`hello world`).unwrap() // 'hello world'
   * ```
   *
   * @returns {LeftValue}
   * @memberof Either
   */
  public unwrap(): LeftValue | RightValue {
    return this.value;
  }
}

export type Left<LeftValue, RightValue = LeftValue> = EitherLike<
  LeftValue,
  RightValue
>;

export type Right<RightValue, LeftValue = RightValue> = EitherLike<
  LeftValue,
  RightValue
>;

/**
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {EitherLike<T>}
 */
export function Left<T>(value?: T): Left<T> {
  return new EitherLike(value as any, true);
}

/**
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {Right<T>}
 */
export function Right<T>(value?: T): Right<T> {
  return new EitherLike(value as any, false);
}
