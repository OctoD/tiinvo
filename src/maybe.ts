import { check } from "./applicative";
import { createExpect } from "./assertables";
import { totaggedFn } from "./cast";
import { createderivefromfunction } from "./derivables";
import { createFilter, createFilterOr } from "./filterables";
import { createfold } from "./foldables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import { Predicate } from "./predicate";
import {
  isTagged,
  isTaggedOf,
  isTaggedWith,
  tagged,
  Tagged,
  TaggedFactory,
} from "./tagged-type";
import { anyof, combine, Typeguard } from "./typeguards";
import {
  createUnwrap,
  createUnwrapOr,
  createUnwrapOrElse,
} from "./unwrappables";

//#region types

const JUSTTAG = "just";
const NOTHINGTAG = "nothing";

export type JustTag = typeof JUSTTAG;
export type NothingTag = typeof NOTHINGTAG;
export type MaybeTag = JustTag | NothingTag;

/**
 * Represents a value which is falsy
 */
export interface Nothing extends Tagged<unknown, NothingTag> {}
/**
 * Represents a value which is truthy
 */
export interface Just<T = unknown> extends Tagged<T, JustTag> {}

/**
 * It could be a truthy or falsy value
 */
export type Maybe<T = unknown> = Nothing | Just<T>;

/**
 * Creates `Nothing`
 */
export type NothingFactory = () => Nothing;
/**
 * Creates `Just`
 */
export type JustFactory = <T>(value: T) => Just<T>;

//#endregion

//#region typeguards

const hasnothingtag = isTaggedWith(NOTHINGTAG);
const hasjusttag = isTaggedWith(JUSTTAG);

/**
 * Checks if a value is `Maybe<unknown>`
 * 
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.isMaybe(10)                   // false
 * maybe.isMaybe(maybe.just(20))       // true
 * maybe.isMaybe(maybe.nothing())      // true
 * maybe.isMaybe({ __tag: 'a' })       // false
 * ```
 * 
 */
export const isMaybe = combine<Maybe>(
  isTagged,
  anyof(hasnothingtag, hasjusttag)
);

/**
 * Checks if a type is `Just<unknown>`
 * @since 2.0.0
 * 
 * @example
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.isJust(10)               // false
 * maybe.isJust(maybe.just(10))   // true
 * maybe.isJust(maybe.nothing())  // false
 * ```
 */
export const isJust = combine<Just>(isTagged, hasjusttag);

/**
 * Checks if a type is `Just<T>`
 * @since 2.14.0
 * 
 * @example
 * ```ts
 * import { maybe, isstring } from 'tiinvo';
 * 
 * const isjustStr = maybe.isJustOf(isstring);
 * 
 * isjustStr(10)                  // false
 * isjustStr(maybe.just(10))      // false
 * isjustStr(maybe.just('abc'))   // true
 * isjustStr(maybe.nothing())     // false
 * ```
 */
export const isJustOf = <T>(type: Typeguard<T>) => isTaggedOf(JUSTTAG, type);

/**
 * Checks if a type if `Nothing`
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.isnothing(10)                 // false
 * maybe.isnothing(maybe.just(20))     // false
 * maybe.isnothing(maybe.maybe(!0))    // true
 * maybe.isnothing(maybe.nothing())    // true
 * ```
 */
export const isNothing = combine<Nothing>(isTagged, hasnothingtag);

//#endregion

//#region factories

/**
 * Creates a `Nothing`
 */
export const nothing = (): Nothing => tagged(undefined, NOTHINGTAG);

/**
 * Creates a `Just<T>`.
 * Throws an error if the given value is falsy.
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.just(10)          // Just<10>
 * maybe.just('hi')        // Just<'hi'>
 * maybe.just('')          // throws
 * maybe.just(0)           // throws
 * maybe.just(false)       // throws
 * ```
 * 
 */
export const just = <T>(value: T) =>
  check(!!value, "Just value must be truthy")(tagged(value, JUSTTAG));

/**
 * Creates a `Maybe<T>` tagged type. If the value is truthy, it
 * will be a `Just<T>`, otherwise it will be `Nothing`
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.maybe(0)    // Nothing
 * maybe.maybe(1)    // Just<1>
 * ```
 * 
 */
export const maybe = <T>(arg?: T) => (arg ? just(arg) : nothing());

/**
 * Creates a Just<K> factory from a function (arg: T) => K
 * @deprecated
 */
export const justfromfn = totaggedFn(just);

/**
 * Creates a Maybe<K> factory from a function (arg: T) => K
 * @deprecated
 */
export const fromfn = (totaggedFn(maybe as any) as unknown) as <T>(
  arg: T
) => Maybe<T>;

//#endregion

//#region assertable

/**
 * Throws if the tagged type is not `Just`
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.expect(maybe.maybe(0))  // throws
 * maybe.expect(maybe.maybe(1))  // `Just<1>`
 * ```
 */
export const expect = createExpect<Just>(isJust);

/**
 * Throws if the tagged type is not `Nothing`
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * maybe.unexpect(maybe.maybe(0))  // Nothing
 * maybe.unexpect(maybe.maybe(1))  // throws
 * ```
 */
export const unexpect = createExpect<Nothing>(isNothing);

//#endregion

//#region filterables

/**
 * If the predicate is satisfied, returns previous `Just<T>`, otherwise
 * returns `Nothing`
 * 
 * @example
 * 
 * ```ts
 * import { maybe, num } from 'tiinvo';
 * 
 * const f = maybe.filter(num.iseven);
 * 
 * f(either.just(10))  // Just<10>
 * f(either.just(9))   // Nothing
 * ```
 */
export const filter = createFilter(isJust, just, nothing as any);
/**
 * If the predicate is satisfied, returns previous `Just<T>`, otherwise
 * returns the given fallback `Just<T>`
 * 
 * @example
 * 
 * ```ts
 * import { maybe, num } from 'tiinvo';
 * 
 * const maybeinrange = maybe.filterOr(maybe.just(0), num.inrange(0, 10));
 * 
 * maybeinrange(either.just(10))  // Just<10>
 * maybeinrange(either.just(11))  // Just<0>
 * ```
 */
export const filterOr = createFilterOr(isJust, just);

//#endregion

//#region foldables

/**
 * If `Maybe<T>` is `Just<T>`, returns `B` or calls `FnUnary<B>`, otherwise returns `A` or calls `FnUnary<A>`
 * 
 * @example
 * 
 * ```ts
 * import { maybe } from 'tiinvo';
 * 
 * const unfold = maybe.fold('does not exists', 'exists');
 * unfold(maybe.maybe({ user: `foobar` }))   // 'exists'
 * unfold(maybe.maybe(undefined))            // 'does not exists'
 * ```
 */
export const fold = createfold<MaybeTag>(isNothing);

//#endregion

//#region mappables

/**
 * Maps a `T` to `K` if the value is `Just<T>`
 */
export const map = createMap<Maybe, MaybeTag>(isJust, maybe as any);

/**
 * Maps a `T` to `K` if the value is `Just<T>`, or maps it to the given fallback
 */
export const mapOr = createMapOr<Maybe, MaybeTag>(isJust, maybe as any);

/**
 * Maps a `T` to `K` if the value is `Just<T>`, or calls the fallback function and maps to the
 * returned value
 */
export const mapOrElse = createMapOrElse<Maybe, MaybeTag>(isJust, maybe as any);

//#endregion

//#region unwrappables

/**
 * Unwraps a `Just<T>` value `T`. Otherwise throws.
 */
export const unwrap = createUnwrap<MaybeTag>(
  isJust,
  "Expected Just, got Nothing"
);

/**
 * Unwraps a `Just<T>` value `T`. Otherwise returns the `or` value.
 */
export const unwrapOr = createUnwrapOr<MaybeTag>(isJust);

/**
 * Unwraps a `Just<T>` value `T`. Otherwise calls the `or` function and returns it's return value.
 */
export const unwrapOrElse = createUnwrapOrElse<MaybeTag>(isJust);

//#endregion

/**
 * Creates a `Maybe<T>` from a function.
 *
 * @example
 * ```ts
 * import { maybe, num } from 'tiinvo';
 *
 * const maybeodd = maybe.frompredicate(num.isodd);
 *
 * maybeodd(10)    // Nothing
 * maybeodd(11)    // Just<11>
 * ```
 */
export const frompredicate = <T>(predicate: Predicate<T>) => (arg: T) =>
  predicate(arg) ? just(arg) : nothing();

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Just<T>`
 *
 * @example
 *
 * ```ts
 * import { maybe } from 'tiinvo';
 *
 * const myobject = { foo: 10, bar: 20, baz: undefined };
 * const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];
 *
 * maybe.justfromfunction(mapmyobjectkey)('foo') // Just<number>
 * maybe.justfromfunction(mapmyobjectkey)('bar') // Just<number>
 * maybe.justfromfunction(mapmyobjectkey)('baz') // Throws error
 * ```
 */
export const justfromfunction = createderivefromfunction(just);

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Maybe<T>`
 *
 * @example
 *
 * ```ts
 * import { maybe } from 'tiinvo';
 *
 * const myobject = { foo: 10, bar: 20, baz: undefined };
 * const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];
 *
 * maybe.maybefromfunction(mapmyobjectkey)('foo') // Just<number>
 * maybe.maybefromfunction(mapmyobjectkey)('bar') // Just<number>
 * maybe.maybefromfunction(mapmyobjectkey)('baz') // Nothing
 * ```
 */
export const maybefromfunction = createderivefromfunction(
  maybe as TaggedFactory<MaybeTag>
);
