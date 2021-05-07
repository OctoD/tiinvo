import { ArgsOf, check, FnUnary } from "./applicative";
import { createExpect } from "./assertables";
import { totaggedFn } from "./cast";
import { createderivefromfunction } from "./derivables";
import { createFilter, createFilterOr } from "./filterables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import { isTagged, isTaggedWith, tagged, Tagged } from "./tagged-type";
import * as typeguardsTs from "./typeguards";
import {
  createUnwrap,
  createUnwrapOr,
  createUnwrapOrElse,
} from "./unwrappables";

//#region types

const NONETAG = "none";
const SOMETAG = "some";

/**
 *
 */
export type Nonetag = typeof NONETAG;
/**
 *
 */
export type Sometag = typeof SOMETAG;
/**
 *
 */
export type Optiontag = Nonetag | Sometag;

/**
 *
 */
export interface None extends Tagged<any, Nonetag> {}

/**
 *
 */
export interface Some<T = unknown> extends Tagged<NonNullable<T>, Sometag> {}

/**
 *
 */
export type Option<T = unknown> = None | Some<T>;

/**
 *
 */
export type NoneFactory = () => None;
/**
 *
 */
export type SomeFactory = <T>(value: T) => Some;
/**
 *
 */
export type OptionFactory = <T>(value: T) => Option<T>;

//#endregion

//#region typeguards

const hasnonetag = isTaggedWith(NONETAG) as typeguardsTs.Typeguard<None>;
const hassometag = isTaggedWith(SOMETAG) as typeguardsTs.Typeguard<Some>;
const hasoptiontag = typeguardsTs.anyof<Option>(hasnonetag, hassometag);

/**
 * Checks if a value is `Option<unknown>`
 * 
 * @example
 * 
 * ```ts
 * import { option } from 'tiinvo';
 * 
 * option.isOption(option.option(10))  // true
 * option.isOption(option.some(10))    // true
 * option.isOption(option.none())      // true
 * option.isOption(10)                 // false
 * option.isOption({ __tag: 'foo' })   // false
 * ```
 */
export const isOption = typeguardsTs.combine<Option>(isTagged, hasoptiontag);
/**
 * Checks if a value is `None`
 * 
 * @example
 * 
 * ```ts
 * import { option } from 'tiinvo';
 * 
 * option.isNone(option.option(10))          // false
 * option.isNone(option.option(undefined))   // true
 * option.isNone(option.some(10))            // false
 * option.isNone(option.none())              // true
 * option.isNone(10)                         // false
 * option.isNone({ __tag: 'foo' })           // false
 * ```
 */
export const isNone = typeguardsTs.combine<None>(isTagged, hasnonetag);
/**
 * Checks if a value is `Some<unknown>`
 * 
 * @example
 * 
 * ```ts
 * import { option } from 'tiinvo';
 * 
 * option.isSome(option.option(10))          // true
 * option.isSome(option.option(undefined))   // false
 * option.isSome(option.some(10))            // true
 * option.isSome(option.none())              // false
 * option.isSome(10)                         // false
 * option.isSome({ __tag: 'foo' })           // false
 * ```
 */
export const isSome = typeguardsTs.combine<Some>(isTagged, hassometag);
/**
 * Checks if a value is `Option<T>`
 * 
 * @example
 * 
 * ```ts
 * import { option, isstring } from 'tiinvo';
 * 
 * const isstringoption = option.isOptionOf(isstring);
 * 
 * isstringoption(option.option(10))           // false
 * isstringoption(option.option('foo'))        // true
 * isstringoption(option.option({ }))          // false
 * isstringoption(option.option(undefined))    // false
 * ```
 */
export const isOptionOf = <T>(typeguard: typeguardsTs.Typeguard<T>) =>
  typeguardsTs.combine<Option<T>>(
    isOption,
    typeguardsTs.haskeyoftype("value", typeguard)
  );

//#endregion

//#region assertables

/**
 * Returns `Some<T>` if `Option<T>` is `Some`, otherwise throws an error.
 * 
 * @example
 * 
 * ```ts
 * import { option } from 'tiinvo';
 * 
 * option.expect(option.option(10))        // Option<10>
 * option.expect(option.option(undefined)) // throws
 * ```
 */
export const expect = createExpect<Option>(isSome);
/**
 * Returns `None` if `Option<T>` is `Nothing`, otherwise throws an error.
 * 
 * @example
 * 
 * ```ts
 * import { option } from 'tiinvo';
 * 
 * option.unexpect(option.option(10))        // throws
 * option.unexpect(option.option(undefined)) // None
 * ```
 */
export const unexpect = createExpect<Option>(isNone);

//#endregion

//#region factories

/**
 * Returns `None`
 */
export const none = (): None => tagged(void 0, NONETAG);

/**
 * Returns `Some<T>`. Throws an error if the passed value is `undefined` or `null`.
 */
export const some = <T>(value: T): Some<NonNullable<T>> =>
  check(
    !typeguardsTs.isnullOrUndefined(value),
    "some value cannot be undefined nor null"
  )(tagged(value as any, SOMETAG));

/**
 * Returns `Option<T>`. If the passed value is `undefined` or `null` returns `None`, otherwise `Some<T>`
 */
export const option = <T>(value: T): Option<NonNullable<T>> =>
  typeguardsTs.isnullOrUndefined(value) ? none() : some(value);

/**
 * Creates a Option<K> factory from a function (arg: T) => K
 * @deprecated
 */
export const fromfn = totaggedFn(option);

//#endregion

//#region filterables

/**
 * Returns `Option<T>` if the `Predicate<T>` is satisfied, otherwise returns `None`.
 * 
 * @example
 * 
 * ```ts
 * import { option, num } from 'tiinvo';
 * 
 * const filter = option.filter(num.iseven);
 * 
 * filter(option.some(10))   // Option<10>
 * filter(option.some(0))    // None
 * ```
 */
export const filter = createFilter<Option, Optiontag>(isSome, some, none);
/**
 * Returns `Some<T>` if `Predicate<T>` is satisfied, otherwise returns the fallback `Option<T>`
 * 
 * @example
 * 
 * ```ts
 * import { option, num } from 'tiinvo';
 * 
 * const filter = option.filterOr(option.some(0), num.inrange(0, 10));
 * 
 * filter(option.some(10))   // Option<10>
 * filter(option.some(10))   // Option<0>
 * ```
 */
export const filterOr = createFilterOr<Option, Optiontag>(isSome, some);

//#endregion

//#region mappables

/**
 * Maps an `Option<T>` to `Some<R>` if `Some`, otherwise returns `None`
 * 
 * @example
 * 
 * ```ts
 * import { option, str } from 'tiinvo';
 * 
 * const maplength = option.map(str.length);
 * 
 * maplength(option.option('hello'))   // Some<5>
 * maplength(option.none())            // Nothing
 * ```
 */
export const map = createMap<Option, Optiontag>(isSome, option);
/**
 * Maps an `Option<T>` to `Some<R>` if `Some`, otherwise returns fallback `Option<R>` and returns `Option<R>`
 * 
 * @example
 * 
 * ```ts
 * import { option, str } from 'tiinvo';
 * 
 * const maplength = option.mapOr(option.some(0), str.length);
 * 
 * maplength(option.option('hello'))   // Some<5>
 * maplength(option.none())            // Some<0>
 * ```
 */
export const mapOr = createMapOr<Option, Optiontag>(isSome, option);
/**
 * Maps an `Option<T>` to `Some<R>` if `Some`, otherwise calls fallback `FnNullary<R>` and returns `Some<R>`
 * 
 * @example
 * 
 * ```ts
 * import { option, str, fallback } from 'tiinvo';
 * 
 * const maplength = option.mapOrElse(fallback(0), str.length);
 * 
 * maplength(option.option('hello'))   // Some<5>
 * maplength(option.none())            // Some<0>
 * ```
 */
export const mapOrElse = createMapOrElse<Option, Optiontag>(isSome, option);

//#endregion

//#region unwrappables

/**
 * Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise throws
 *
 * @example
 * ```ts
 * import { option } from 'tiinvo';
 *
 * option.unwrap(option.option(10))  // 10
 * option.unwrap(option.none())      // throws error
 * ```
 */
export const unwrap = createUnwrap<Optiontag>(
  isSome,
  "option.unwrap argument must be some"
);

/**
 * Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns fallback `T` value
 *
 * @example
 * ```ts
 * import { option } from 'tiinvo';
 *
 * const unwrapfn = option.unwrapOr(0);
 *
 * unwrapfn(option.option(10))  // 10
 * unwrapfn(option.none())      // 0
 * ```
 */
export const unwrapOr = createUnwrapOr<Optiontag>(isSome);

/**
 * Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns `Fallback<T>` value
 *
 * @example
 * ```ts
 * import { option } from 'tiinvo';
 *
 * const elsefn = () => 0;
 * const unwrapfn = option.unwrapOrElse(elsefn);
 *
 * unwrapfn(option.option(10))  // 10
 * unwrapfn(option.none())      // 0
 * ```
 */
export const unwrapOrElse = createUnwrapOrElse<Optiontag>(isSome);

//#endregion

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Option<T>`
 * 
 * @example
 * 
 * ```ts
 * import { option, num } from 'tiinvo';
 * 
 * const multiplyopt = option.fromfunction(num.uadd(10));
 * multiplyopt(10)   // Option<number>
 * ```
 */
export const fromfunction = createderivefromfunction(option) as <T extends FnUnary<any, any>>(arg: T) => (... args: ArgsOf<T>) => Option<NonNullable<ReturnType<T>>>;
