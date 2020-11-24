import { check } from "./applicative";
import { createExpect } from "./assertables";
import { createFilter, createFilterOr } from "./filterables";
import { createfold } from "./foldables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import { Predicate } from "./predicate";
import { tagged, isTagged, isTaggedWith, Tagged } from "./tagged-type";
import { anyof, combine } from "./typeguards";
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
 *
 */
export interface Nothing extends Tagged<unknown, NothingTag> {}
/**
 *
 */
export interface Just<T = unknown> extends Tagged<T, JustTag> {}

/**
 *
 */
export type Maybe<T = unknown> = Nothing | Just<T>;

/**
 *
 */
export type NothingFactory = () => Nothing;
/**
 *
 */
export type JustFactory = <T>(value: T) => Just<T>;

//#endregion

//#region typeguards

const hasnothingtag = isTaggedWith(NOTHINGTAG);
const hasjusttag = isTaggedWith(JUSTTAG);

/**
 *
 */
export const isMaybe = combine<Maybe>(
  isTagged,
  anyof(hasnothingtag, hasjusttag)
);

/**
 *
 */
export const isJust = combine<Just>(isTagged, hasjusttag);

/**
 *
 */
export const isNothing = combine<Nothing>(isTagged, hasnothingtag);

//#endregion

//#region factories

/**
 *
 */
export const nothing = (): Nothing => tagged(undefined, NOTHINGTAG);

/**
 *
 */
export const just = <T>(value: T) =>
  check(!!value, "Just value must be truthy")(tagged(value, JUSTTAG));

/**
 *
 */
export const maybe = <T>(arg?: T) => (arg ? just(arg) : nothing());

//#endregion

//#region assertable

/**
 *
 */
export const expect = createExpect<Just>(isJust);

/**
 *
 */
export const unexpect = createExpect<Nothing>(isNothing);

//#endregion

//#region filterables

/**
 *
 */

export const filter = createFilter(isJust, just, nothing as any);
/**
 *
 */
export const filterOr = createFilterOr(isJust, just);

//#endregion

//#region foldables

/**
 *
 */
export const fold = createfold<MaybeTag>(isNothing);

//#endregion

//#region mappables

/**
 *
 */
export const map = createMap<Maybe, MaybeTag>(isJust, maybe as any);

/**
 *
 */
export const mapOr = createMapOr<Maybe, MaybeTag>(isJust, maybe as any);

/**
 *
 */
export const mapOrElse = createMapOrElse<Maybe, MaybeTag>(isJust, maybe as any);

//#endregion

//#region unwrappables

/**
 *
 */
export const unwrap = createUnwrap<MaybeTag>(
  isJust,
  "Expected Just, got Nothing"
);

/**
 *
 */
export const unwrapOr = createUnwrapOr<MaybeTag>(isJust);

/**
 *
 */
export const unwrapOrElse = createUnwrapOrElse<MaybeTag>(isJust);

//#endregion

/**
 *
 */
export const frompredicate = <T>(predicate: Predicate<T>) => (arg: T) =>
  predicate(arg) ? just(arg) : nothing();
