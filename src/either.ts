import { ArgsOf, FnBase } from './applicative';
import { totaggedFn } from "./cast";
import { createderivefromfunction } from "./derivables";
import { createFilter, createFilterOr } from "./filterables";
import { createfold, createSwap } from "./foldables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import { Predicate } from "./predicate";
import { tagged, isTagged, isTaggedWith, Tagged } from "./tagged-type";
import { anyof, combine, haskeyoftype, Typeguard } from "./typeguards";
import {
  createUnwrap,
  createUnwrapOr,
  createUnwrapOrElse,
} from "./unwrappables";

//#region types

const LEFTTAG = "left";
const RIGHTTAG = "right";

/**
 * Left tagtype
 */
export type LeftTagname = typeof LEFTTAG;
/**
 * Right tagtype
 */
export type RightTagname = typeof RIGHTTAG;
/**
 * Left or Right tagtypes
 */
export type EitherTagname = LeftTagname | RightTagname;

/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export interface Left<T = unknown> extends Tagged<T, LeftTagname> {}
/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export interface Right<T = unknown> extends Tagged<T, RightTagname> {}

/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export type Either<TLeft = unknown, TRight = unknown> =
  | Left<TLeft>
  | Right<TRight>;

//#endregion

//#region typeguards

const hasleftag = isTaggedWith(LEFTTAG) as Typeguard<Left>;
const hasrighttag = isTaggedWith(RIGHTTAG) as Typeguard<Right>;
const haseithertag = anyof<Left | Right>(hasleftag, hasrighttag);

/**
 * Checks if a variable is Either
 */
export const isEither = combine<Either>(isTagged, haseithertag);

/**
 * Checks if a variable is Left
 */
export const isLeft = combine<Left>(isTagged, hasleftag);

/**
 * Checks if a variable is Right
 */
export const isRight = combine<Right>(isTagged, hasrighttag);

/**
 * Checks if a variable is Either with a value of a given type
 *
 * @example
 * ```ts
 * const test1 = left(10);
 * const test2 = right(10);
 * const iseitherofstring = isEitherOf(isstring);
 * const iseitherofnumber = isEitherOf(isnumber);
 *
 * iseitherofstring(test) // false
 * iseitherofnumber(test) // true
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const isEitherOf = <T>(typeguard: Typeguard<T>) =>
  combine(isEither, haskeyoftype("value", typeguard));

/**
 * Checks if a variable is Left with a value of a given type
 *
 * @example
 * ```ts
 * const test1 = left(10);
 * const test2 = right(10);
 * const isleftofstring = isLeftOf(isstring);
 * const isleftofnumber = isLeftOf(isnumber);
 *
 * isleftofstring(test1) // false
 * isleftofstring(test2) // false
 * isleftofnumber(test1) // true
 * isleftofnumber(test2) // false
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const isLeftOf = <T>(typeguard: Typeguard<T>) =>
  combine(isLeft, haskeyoftype("value", typeguard));

/**
 * Checks if a variable is Right with a value of a given type
 *
 * @example
 * ```ts
 * const test1 = left(10);
 * const test2 = right(10);
 * const isrightofstring = isRightOf(isstring);
 * const isrightofnumber = isRightOf(isnumber);
 *
 * isrightofstring(test1) // false
 * isrightofstring(test2) // false
 * isrightofnumber(test1) // false
 * isrightofnumber(test2) // true
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const isRightOf = <T>(typeguard: Typeguard<T>) =>
  combine(isRight, haskeyoftype("value", typeguard));

//#endregion

//#region factories

/**
 * Creates a Left<T> type
 */
export const left = <T>(value: T): Left<T> => tagged(value, LEFTTAG);

/**
 * Creates a Right<T> type
 */
export const right = <T>(value: T): Right<T> => tagged(value, RIGHTTAG);

/**
 * Creates a Left<K> factory from a function (arg: T) => K
 */
export const leftfromfn = totaggedFn(left);

/**
 * Creates a Right<K> factory from a function (arg: T) => K
 */
export const rightfromfn = totaggedFn(right);

//#endregion

//#region filterables

/**
 * Filters only `Left<T>` values by a given `Predicate<T>`. 
 * 
 * If `Either<T>` is `Left<T>` and the `Predicate<T>` is not satisfied, 
 * it will return `Right<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const filter = either.filterLeft(num.iseven);
 * 
 * filter(either.left(10))   // Right<10>;
 * filter(either.left(9))    // Left<9>;
 * filter(either.right(5))   // Right<5>;
 * ```
 */
export const filterLeft = createFilter<Either, EitherTagname>(
  isLeft,
  left,
  right
);

/**
 * Similar to `filterLeft`, but it will return the fallback `or` if filtered.
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const filter = either.filterLeftOr(either.left(10), num.lessthan(10));
 * 
 * filter(either.left(10))   // Left<10>
 * filter(either.left(11))   // Left<11>
 * filter(either.right(1))   // Right<1>
 * ```
 */
export const filterLeftOr = createFilterOr<Either, EitherTagname>(isLeft, left);

/**
 * Filters only `Right<T>` values by a given `Predicate<T>`. 
 * 
 * If `Either<T>` is `Right<T>` and the `Predicate<T>` is not satisfied, 
 * it will return `Left<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const filter = either.filterRight(num.iseven);
 * 
 * filter(either.right(10))   // Left<10>;
 * filter(either.right(9))    // Right<9>;
 * filter(either.left(5))     // Left<5>;
 * ```
 * 
 */
export const filterRight = createFilter<Either, EitherTagname>(
  isRight,
  right,
  left
);

/**
 * Similar to `filterRight`, but it will return the fallback `or` if filtered.
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const filter = either.filterRightOr(either.right(10), num.lessthan(10));
 * 
 * filter(either.right(50))   // Right<10>
 * filter(either.right(11))   // Right<10>
 * filter(either.left(1))     // Left<1>
 * ```
 */
export const filterRightOr = createFilterOr<Either, EitherTagname>(
  isRight,
  right
);

//#endregion

//#region foldables

/**
 * Folds current `Either<T>`. It accepts two arguments `L` or `FnUnary<T, L>` and `R` or `FnUnary<T, R>`.
 * 
 * If `Either<T>` is `Left<T>`, it will return `L` or call `FnUnary<T, L>`.
 * 
 * If `Either<T>` is `Right<T>`, it will return `R` or call `FnUnary<T, R>`.
 * 
 * @example
 * 
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * const unfold1 = either.fold('is left', 'is right');
 * const unfold2 = either.fold(() => 'is left', 'is right');
 * const unfold3 = either.fold('is left', () => 'is right');
 * const unfold4 = either.fold(() => 'is left', () => 'is right');
 * 
 * const test1 = either.left(10)
 * const test2 = either.right(10)
 * unfold1(test1) // 'is left'
 * unfold2(test1) // 'is left'
 * unfold3(test1) // 'is left'
 * unfold4(test1) // 'is left'
 * unfold1(test2) // 'is right'
 * unfold2(test2) // 'is right'
 * unfold3(test2) // 'is right'
 * unfold4(test2) // 'is right'
 * ```
 * 
 */
export const fold = createfold<EitherTagname>(isLeft);

/**
 * Swaps `Left<T>` to `Right<T>` is `Either<T>` is `Left`, otherwise swaps `Right<T>` to `Left<T>` is `Either<T>` is `Right`
 * 
 * @example
 * 
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.swap(either.left(10))  // Right<10>
 * either.swap(either.right(10)) // Left<10>
 * ```
 */
export const swap = createSwap<LeftTagname, RightTagname>(isLeft, left, right);

//#endregion

//#region mappables

/**
 * Maps `Either<T>` to `Left<R>` if is `Left`, otherwise returns `Right<T>`.
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const mapleft = either.mapLeft(num.umultiply(2));
 * 
 * mapleft(either.left(5))   // Left<10>
 * mapleft(either.right(5))  // Right<5>
 * ```
 */
export const mapLeft = createMap<Either, EitherTagname>(isLeft, left);

/**
 * Maps `Either<T>` to `Right<R>` if is `Right`, otherwise returns `Left<T>`.
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const mapright = either.mapRight(num.umultiply(2));
 * 
 * mapright(either.left(5))   // Left<5>
 * mapright(either.right(5))  // Right<10>
 * ```
 */
export const mapRight = createMap<Either, EitherTagname>(isRight, right);

/**
 * Maps `Either<T>` to `Left<R>` if is `Left`, otherwise returns `or` as `Left<T>`.
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const mapleftor = either.mapLeftOr(either.left(0), num.udivide(2));
 * 
 * mapleftor(either.left(10))    //  Left<5>
 * mapleftor(either.right(20))   //  Left<0>
 * ```
 */
export const mapLeftOr = createMapOr<Either, EitherTagname>(isLeft, left);

/**
 * Maps `Either<T>` to `Right<R>` if is `Right`, otherwise returns `or` as `Right<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const maprightor = either.mapRightOr(either.right(0), num.udivide(2));
 * 
 * maprightor(either.left(10))    //  Right<0>
 * maprightor(either.right(20))   //  Right<10>
 * ```
 */
export const mapRightOr = createMapOr<Either, EitherTagname>(isRight, right);

/**
 * Maps `Either<T>` to `Left<R>` if is `Left`, otherwise calls `orfn` and returns `Left<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num, fallback, predicate } from 'tiinvo';
 * 
 * const m = either.mapLeftOrElse(
 *   fallback(false), 
 *   predicate.and(
 *     num.greaterthan(0), 
 *     num.lessthan(10)
 *   )
 * );
 * 
 * m(either.right(5))    // Left<false>
 * m(either.left(5))     // Left<true>
 * ```
 */
export const mapLeftOrElse = createMapOrElse<Either, EitherTagname>(
  isLeft,
  left
);

/**
 * Maps `Either<T>` to `Right<R>` if is `Right`, otherwise calls `orfn` and returns `Right<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num, fallback, predicate } from 'tiinvo';
 * 
 * const m = either.mapRightOrElse(
 *   fallback(false), 
 *   predicate.and(
 *     num.greaterthan(0), 
 *     num.lessthan(10)
 *   )
 * );
 * 
 * m(either.right(5))    // Right<true>
 * m(either.left(5))     // Right<false>
 * ```
 */
export const mapRigthOrElse = createMapOrElse<Either, EitherTagname>(
  isRight,
  right
);

//#region unwrappables

/**
 * Unwraps either `Left` or `Right`.
 *
 * @example
 * 
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapEither(either.left(10)) // 10
 * either.unwrapEither(either.right(1)) // 1
 * ```
 */
export const unwrapEither = createUnwrap(isEither, "");

/**
 * Unwraps value if `Either` is `Left`, otherwise throws an error.
 *
 * @example
 * 
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapLeft(left(10)) // 10
 * either.unwrapLeft(right(1)) // throws
 * ```
 */
export const unwrapLeft = createUnwrap(
  isLeft,
  "Cannot unwrap Right, expected to be Left"
);

/**
 * Unwraps value if `Either` is `Right`, otherwise throws an error.
 *
 * @example
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapRight(left(10)) // throws
 * either.unwrapRight(right(1)) // 1
 *
 * ```
 */
export const unwrapRight = createUnwrap(
  isRight,
  "Cannot unwrap Left, expected to be Right"
);

/**
 * Unwraps `Left<T>` value `T` if `Either<T>` is `Left`, otherwise returns the fallback `T`.
 *
 * @example
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapLeftOr(20)(left(10)) // 10
 * either.unwrapLeftOr(20)(right(1)) // 20
 * ```
 */
export const unwrapLeftOr = createUnwrapOr(isLeft);

/**
 * Unwraps `Right<T>` value `T` if `Either<T>` is `Right`, otherwise returns the fallback `T`.
 *
 * @example
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapRightOr(20)(left(10)) // 20
 * either.unwrapRightOr(20)(right(1)) // 1
 * ```
 */
export const unwrapRightOr = createUnwrapOr(isRight);

/**
 * Unwraps `Left<T>` value `T` if `Either<T>` is `Left`, otherwise calls the fallback `FnNullary<T>`.
 *
 * @example
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapLeftOrElse(fallback(20))(left(10)) // 10
 * either.unwrapLeftOrElse(fallback(30))(right(1)) // 30
 * ```
 */
export const unwrapLeftOrElse = createUnwrapOrElse(isLeft);

/**
 * Unwraps `Right<T>` value `T` if `Either<T>` is `Right`, otherwise calls the fallback `FnNullary<T>`.
 *
 * @example
 * ```ts
 * import { either } from 'tiinvo';
 * 
 * either.unwrapRightOrElse(fallback(20))(left(10)) // 20
 * either.unwrapRightOrElse(fallback(30))(right(1)) // 1
 * ```
 */
export const unwrapRightOrElse = createUnwrapOrElse(isRight);

//#endregion

/**
 * Creates a new `Either<T>` from a given `Predicate<T>`. 
 * If the predicate is satisfied, it returns `Right<T>`, otherwise returns `Left<T>`
 *
 * @example
 * ```ts
 * import { either, num } from 'tiinvo';
 *
 * either.frompredicate(num.iseven)(20) // Right<20>
 * either.frompredicate(num.iseven)(11) // Left<11>
 * ```
 *
 * @template T
 * @param {Predicate<T>} predicate
 */
export const frompredicate = <T>(predicate: Predicate<T>) => (arg: T) =>
  predicate(arg) ? right(arg) : left(arg);

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Left<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const fn = either.leftfromfunction(num.uadd(5));
 * 
 * fn(10) // Left<15>
 * ```
 */
export const leftfromfunction = createderivefromfunction(left);

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Right<T>`
 * 
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const fn = either.rightfromfunction(num.uadd(5));
 * 
 * fn(10) // Right<15>
 * ```
 */
export const rightfromfunction = createderivefromfunction(right);

/**
 * Wraps a function `FnUnary<A, T>` and if the given `Predicate<T>` is satisfied, returns `Right<T>`. Otherwise returns `Left<T>`.
 * 
 * @since 2.13.0
 * @example
 * 
 * ```ts
 * import { either, num } from 'tiinvo';
 * 
 * const fn = either.fromfunction(num.usubtract(1), num.iseven);
 * 
 * fn(10) // Left<9>
 * fn(11) // Right<10>
 * ```
 * 
 * @param fn 
 * @param predicate 
 * @returns 
 */
export const fromfunction = <Fn extends FnBase>(fn: Fn, predicate: Predicate<ReturnType<Fn>>) => (... args: ArgsOf<Fn>) => {
  const value = fn(...args);
  return predicate(value) ? right(value) : left(value);
}
  