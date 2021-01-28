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
 *
 */
export const filterLeft = createFilter<Either, EitherTagname>(
  isLeft,
  left,
  right
);

/**
 *
 */
export const filterLeftOr = createFilterOr<Either, EitherTagname>(isLeft, left);

/**
 *
 */
export const filterRight = createFilter<Either, EitherTagname>(
  isRight,
  right,
  left
);

/**
 *
 */
export const filterRightOr = createFilterOr<Either, EitherTagname>(
  isRight,
  right
);

//#endregion

//#region foldables

/**
 *
 */
export const fold = createfold<EitherTagname>(isLeft);

/**
 *
 */
export const swap = createSwap<LeftTagname, RightTagname>(isLeft, left, right);

//#endregion

//#region mappables

/**
 *
 */
export const mapLeft = createMap<Either, EitherTagname>(isLeft, left);

/**
 *
 */
export const mapRight = createMap<Either, EitherTagname>(isRight, right);

/**
 *
 */
export const mapLeftOr = createMapOr<Either, EitherTagname>(isLeft, left);

/**
 *
 */
export const mapRightOr = createMapOr<Either, EitherTagname>(isRight, right);

/**
 *
 */
export const mapLeftOrElse = createMapOrElse<Either, EitherTagname>(
  isLeft,
  left
);

/**
 *
 */
export const mapRigthOrElse = createMapOrElse<Either, EitherTagname>(
  isRight,
  right
);

//#region unwrappables

/**
 * Unwraps Either Left or Right
 *
 * @example
 * unwrapEither(left(10)) // 10
 * unwrapEither(right(1)) // 1
 */
export const unwrapEither = createUnwrap(isEither, "");

/**
 * Unwraps value if Left or throws
 *
 * @example
 * unwrapLeft(left(10)) // 10
 * unwrapLeft(right(1)) // throws
 */
export const unwrapLeft = createUnwrap(
  isLeft,
  "Cannot unwrap Right, expected to be Left"
);

/**
 * Unwraps value if Right or throws
 *
 * @example
 * ```ts
 * unwrapRight(left(10)) // throws
 * unwrapRight(right(1)) // 1
 *
 * ```
 */
export const unwrapRight = createUnwrap(
  isRight,
  "Cannot unwrap Left, expected to be Right"
);

/**
 * Unwraps Left value if Left or returns the fallback
 *
 * @example
 * ```ts
 * unwrapLeftOr(20)(left(10)) // 10
 * unwrapLeftOr(20)(right(1)) // 20
 * ```
 */
export const unwrapLeftOr = createUnwrapOr(isLeft);

/**
 * Unwraps Right value if Right or returns the fallback
 *
 * @example
 * ```ts
 * unwrapRightOr(20)(left(10)) // 20
 * unwrapRightOr(20)(right(1)) // 1
 * ```
 */
export const unwrapRightOr = createUnwrapOr(isRight);

/**
 * Unwraps Left value if Left or returns the fallback
 *
 * @example
 * ```ts
 * unwrapLeftOrElse(fallback(20))(left(10)) // 10
 * unwrapLeftOrElse(fallback(30))(right(1)) // 30
 * ```
 */
export const unwrapLeftOrElse = createUnwrapOrElse(isLeft);

/**
 * Unwraps Right value if Right or returns the fallback
 *
 * @example
 * ```ts
 * unwrapRightOrElse(fallback(20))(left(10)) // 20
 * unwrapRightOrElse(fallback(30))(right(1)) // 1
 * ```
 */
export const unwrapRightOrElse = createUnwrapOrElse(isRight);

//#endregion

/**
 * Creates a new either from a given predicate.
 *
 * @example
 * ```ts
 * const iseven = (arg: number) => arg % 2 === 0;
 *
 * frompredicate(iseven)(20) // Right<20>
 * frompredicate(iseven)(11) // Left<11>
 * ```
 *
 * @template T
 * @param {Predicate<T>} predicate
 */
export const frompredicate = <T>(predicate: Predicate<T>) => (arg: T) =>
  predicate(arg) ? right(arg) : left(arg);

/**
 * Wraps a function `(... args: any[]) => T`, and once called it returns a `Left<T>`
 */
export const leftfromfunction = createderivefromfunction(left);

/**
 * Wraps a function `(... args: any[]) => T`, and once called it returns a `Right<T>`
 */
export const rightfromfunction = createderivefromfunction(right);
