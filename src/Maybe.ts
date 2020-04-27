import { ensureFunction, ensureIsObject, ensureHasKey } from "./common";
import { Left, Right } from "./Either";
import { None, Some } from "./Option";

export interface MaybeCataMap<T, U> {
  Nothing(value: T): U;
  Just(value: T): U;
}

export class MaybeLike<T, IsJustLike extends boolean> {
  public constructor(protected value: T, protected isJustLike: IsJustLike) {}

  /**
   * Returns `Nothing<T>` if the value is `Nothing<T>`, otherwise returns `maybeb`
   *
   * ```ts
   * Just(10).and(Just(3)) // Just(3)
   * Nothing(10).and(Just(3)) // Nothing(10)
   * ```
   *
   * @template U
   * @param {MaybeLike<U, boolean>} maybeb
   * @returns {(MaybeLike<U, boolean> | MaybeLike<T, IsJustLike>)}
   * @memberof MaybeLike
   */
  public and<U>(
    maybeb: MaybeLike<U, boolean>
  ): MaybeLike<U, boolean> | MaybeLike<T, IsJustLike> {
    return this.isJust() ? maybeb : this;
  }

  /**
   * Returns `fn` result if `Maybe<T>` is `Just<T>`, otherwise returns `Nothing<T>`
   *
   * ```ts
   * Just(10).andThen(arg => Maybe(arg ** 2)) // Just(100)
   * Nothing(10).andThen(arg => Maybe(arg ** 2)) // Nothing(10)
   * ```
   *
   * @template U
   * @memberof MaybeLike
   */
  public andThen<Fn extends (fn: T) => Maybe<U>, U>(
    fn: Fn
  ): Maybe<U> | MaybeLike<T, IsJustLike> {
    ensureFunction("andThen argument must be a function", fn);
    return this.isJust() ? fn(this.value) : this;
  }

  /**
   * Calls Just fn if is `Just<T>`, otherwise calls Nothing fn if is `Nothing<T>`
   *
   * ```ts
   * function safeLength(arg: unknown) {
   *    return Maybe(arg).andThen(arg => typeof arg === 'string')
   *      .cata({
   *          Just: arg => arg.length,
   *          Nothing: arg => 0,
   *      })
   * }
   *
   * safeLength(10) // 0
   * safeLength('hello world') // 11
   *
   * ```
   *
   * @template U
   * @param {MaybeCataMap<T, U>} map
   * @returns
   * @memberof MaybeLike
   */
  public cata<U>(map: MaybeCataMap<T, U>) {
    ensureIsObject("cata argument must be an object", map);
    ensureHasKey("map must have a Just key", map, "Just");
    ensureHasKey("map must have a Nothing key", map, "Nothing");
    ensureFunction("Just must be a function", map.Just);
    ensureFunction("Nothing must be a function", map.Nothing);
    return this.isJust() ? map.Just(this.value) : map.Nothing(this.value);
  }

  /**
   * Returns a `Left<T>` if the value is `Nothing<T>`, otherwise returns `Right<T>` if the value is `Just<T>`
   *
   * ```ts
   * Just(10).either().isLeft() // false
   * Just(10).either().isRight() // true
   * ```
   *
   * @returns {IsJustLike extends false ? Left<T> : Right<T>}
   * @memberof MaybeLike
   */
  public either(): IsJustLike extends false ? Left<T> : Right<T> {
    return (this.isJust() ? Right(this.value) : Left(this.value)) as any;
  }

  /**
   * Returns if `value` is `Just<T>`
   *
   * ```ts
   * Just(10).isJust() // true
   * Nothing(10).isJust() // false
   * ```
   *
   * @returns {boolean}
   * @memberof MaybeLike
   */
  public isJust(): boolean {
    return this.isJustLike;
  }

  /**
   * Returns if `value` is `Nothing<T>`
   *
   * ```ts
   * Just(10).isNothing() // false
   * Nothing(10).isNothing() // true
   * ```
   *
   * @returns {boolean}
   * @memberof MaybeLike
   */
  public isNothing(): boolean {
    return !this.isJustLike;
  }

  /**
   * Maps an `Maybe<T>` to `Maybe<U>` by applying a function to a contained value.
   *
   * ```ts
   * Just('lorem ipsum')
   *  .map(arg => arg.replace(/\s/g, ''))
   *  .map(arg => arg.length)
   *  .unwrap() // 10
   * ```
   *
   * @template Fn
   * @template U
   * @param {Fn} fn
   * @returns {MaybeLike<U>}
   * @memberof MaybeLike
   */
  public map<Fn extends (arg: T) => any>(fn: Fn): Maybe<ReturnType<Fn>> {
    ensureFunction("Map argument must be a function", fn);
    return this.isJust() ? Just(fn(this.value)) : Nothing(this.value as any);
  }

  /**
   * Applies a function to the contained value (if any), or computes a default (if not), returning a Maybe.
   *
   * ```ts
   * Just('foobar').mapOrElse(arg => 0, arg => arg.length) // Just(6)
   * Nothing('foobar').mapOrElse(arg => 0, arg => arg.length) // Nothing(0)
   * ```
   *
   * @template FnJust
   * @param {FnNothing} fnNothing
   * @param {FnJust} fnJust
   * @returns {MaybeLike<ReturnType<FnJust>, IsJustLike>}
   * @memberof MaybeLike
   */
  public mapOrElse<
    FnNothing extends (arg: T) => any,
    FnJust extends (arg: T) => any
  >(fnNothing: FnNothing, fnJust: FnJust): Maybe<ReturnType<FnJust>> {
    return this.isJust()
      ? Just(fnJust(this.value))
      : Nothing(fnNothing(this.value));
  }

  /**
   * Returns `Some<T>` if is `Just<T>`, otherwise returns `None<T>` if is `Nothing<T>`
   *
   * ```ts
   * Just(10).option() // Some(10)
   * Nothing(10).option() // None()
   * ```
   *
   * @returns {IsJustLike extends true ? Some<T> : None<T>}
   * @memberof MaybeLike
   */
  public option(): IsJustLike extends true ? Some<T> : None<T> {
    return (this.isJust() ? Some<T>(this.value) : None<T>()) as any;
  }

  /**
   * If T is Nothing, then returns maybeValue
   *
   * ```ts
   * Maybe(undefined).or(Maybe(null)).or(Maybe(10)).unwrap() // 10;
   * ```
   *
   * @param {MaybeLike<Z>} maybeValue
   * @returns {MaybeLike<unknown, IsJustLike>}
   * @memberof MaybeLike
   */
  public or<Z>(
    maybeValue: MaybeLike<Z, IsJustLike>
  ): MaybeLike<unknown, IsJustLike> {
    return this.isJust() ? this : (maybeValue as any);
  }

  /**
   * Unwraps `value`
   *
   * ```ts
   * Just(10).unwrap() // 10
   * Nothing('else matter').unwrap() // 'else matter'
   * ```
   *
   * @returns {T}
   * @memberof MaybeLike
   */
  public unwrap(): T {
    return this.value;
  }
}

export type Maybe<T> = MaybeLike<T, boolean>;

export type Just<T> = MaybeLike<T, true>;

export type Nothing<T> = MaybeLike<T, false>;

/**
 * `Just<T>` represent a value that has returned
 *
 * ```ts
 * import { Just } from 'tiinvo';
 *
 * Just(10)
 * ```
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {Just<T>}
 */
export function Just<T>(value: T): Just<T> {
  return new MaybeLike<T, true>(value, true);
}

/**
 * The Maybe monad represents computations which might "go wrong" by not returning a value.
 *
 * Every falsy value is considered as `Nothing`
 *
 * ```ts
 * import { Maybe } from 'tiinvo';
 *
 * function foo() {
 *    return Math.floor(Math.random() * 1000) ? 'exists' : null
 * }
 *
 * const value = Maybe(foo()) // could be both Just<string> or Nothing<string | null>
 *
 * value
 *    .map(arg => arg % 2 === 0)
 *    .map(arg => arg ? 'even' : 'odd')
 *    .cata({
 *        Nothing: () => 'Not a number',
 *        Just: arg => `Value is ${arg}`
 *    })
 * ```
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {Maybe<T>}
 */
export function Maybe<T>(value: T): Maybe<T> {
  return new MaybeLike<T, boolean>(value, !!value);
}

/**
 * `Nothing<T>` represent a value that has not returned
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {Nothing<T>}
 */
export function Nothing<T>(value: T): Nothing<T> {
  return new MaybeLike<T, false>(value, false);
}
