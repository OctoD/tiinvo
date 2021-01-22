import { check } from "./applicative";
import { createExpect } from "./assertables";
import { totaggedFn } from "./cast";
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
 *
 */
export const unwrap = createUnwrap<Optiontag>(
  isSome,
  "option.unwrap argument must be some"
);

/**
 *
 */
export const unwrapOr = createUnwrapOr<Optiontag>(isSome);

/**
 *
 */
export const unwrapOrElse = createUnwrapOrElse<Optiontag>(isSome);

//#endregion
