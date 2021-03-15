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
 *
 */
export const isOption = typeguardsTs.combine<Option>(isTagged, hasoptiontag);
/**
 *
 */
export const isNone = typeguardsTs.combine<None>(isTagged, hasnonetag);
/**
 *
 */
export const isSome = typeguardsTs.combine<Some>(isTagged, hassometag);
/**
 *
 */
export const isOptionOf = <T>(typeguard: typeguardsTs.Typeguard<T>) =>
  typeguardsTs.combine<Option<T>>(
    isOption,
    typeguardsTs.haskeyoftype("value", typeguard)
  );

//#endregion

//#region assertables

/**
 *
 */
export const expect = createExpect<Option>(isSome);
/**
 *
 */
export const unexpect = createExpect<Option>(isNone);

//#endregion

//#region factories

/**
 *
 */
export const none = (): None => tagged(void 0, NONETAG);

/**
 *
 */
export const some = <T>(value: T): Some<NonNullable<T>> =>
  check(
    !typeguardsTs.isnullOrUndefined(value),
    "some value cannot be undefined nor null"
  )(tagged(value as any, SOMETAG));

/**
 *
 */
export const option = <T>(value: T): Option<NonNullable<T>> =>
  typeguardsTs.isnullOrUndefined(value) ? none() : some(value);

/**
 * Creates a Option<K> factory from a function (arg: T) => K
 */
export const fromfn = totaggedFn(option);

//#endregion

//#region filterables

/**
 *
 */
export const filter = createFilter<Option, Optiontag>(isSome, some, none);
/**
 *
 */
export const filterOr = createFilterOr<Option, Optiontag>(isSome, some);

//#endregion

//#region mappables

/**
 *
 */
export const map = createMap<Option, Optiontag>(isSome, option);
/**
 *
 */
export const mapOr = createMapOr<Option, Optiontag>(isSome, option);
/**
 *
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
 * const unwrapfn = option.unwrap;
 *
 * unwrapfn(option.option(10))  // 10
 * unwrapfn(option.none())      // throws error
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
 * Wraps a function `(... args: any[]) => T`, and once called it returns a `Option<T>`
 */
export const fromfunction = createderivefromfunction(option) as <T extends FnUnary<any, any>>(arg: T) => (... args: ArgsOf<T>) => Option<NonNullable<ReturnType<T>>>;
