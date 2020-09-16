import { check } from "./applicative";
import { createExpect } from "./assertables";
import { createFilter, createFilterOr } from "./filterables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import {
  tagged,
  isTagged,
  isTaggedWith,
  Tagged,
  TaggedFactory,
} from "./tagged-type";
import * as tg from "./typeguards";
import {
  createUnwrap,
  createUnwrapOr,
  createUnwrapOrElse,
} from "./unwrappables";

//#region types

const ERRTAG = "err";
const OKTAG = "ok";
const RESULTTAG = "result";

/**
 *
 */
export type Errtag = typeof ERRTAG;

/**
 *
 */
export type Oktag = typeof OKTAG;

/**
 *
 */
export type ResultTag = Errtag | Oktag;

/**
 *
 */
export interface Err extends Tagged<Error, Errtag> {}

/**
 *
 */
export interface Ok<T = unknown> extends Tagged<T, Oktag> {}

/**
 *
 */
export type Result<T = unknown> = Ok<T> | Err;

/**
 *
 */
export type ErrFactory = (message: string | Error) => Err;
/**
 *
 */
export type OkFactory = <T>(arg: T) => Ok<T>;
/**
 *
 */
export type ResultFactory = <T>(arg: T) => Result<T>;

//#endregion

//#region typeguards

const hasoktag = isTaggedWith(OKTAG);
const haserrtag = isTaggedWith(ERRTAG);
const hasresulttag = tg.anyof(hasoktag, haserrtag);

/**
 *
 */
export const isResult = tg.combine(isTagged, hasresulttag) as tg.Typeguard<
  Result
>;
/**
 *
 */
export const isErr = tg.combine(isTagged, haserrtag) as tg.Typeguard<Err>;
/**
 *
 */
export const isOk = tg.combine(isTagged, hasoktag) as tg.Typeguard<Ok>;

//#endregion

//#region factories

/**
 *
 */
export const err = (message: string | Error): Err =>
  tagged(message instanceof Error ? message : new Error(message), ERRTAG);

/**
 *
 */
export const ok = <T>(value: T): Ok<T> =>
  tagged(
    check(!tg.iserror(value), "An error cannot be a value of Ok")(value),
    OKTAG
  );

/**
 *
 */
export const result = <T>(value: T): Result<T> =>
  tg.iserror(value) ? err(value) : ok(value);

//#endregion

//#region assertables

/**
 *
 */
export const expect = createExpect<Result>(isOk);
/**
 *
 */
export const unexpect = createExpect<Result>(isErr);

//#endregion

//#region filterables

/**
 *
 */
export const filter = createFilter<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>,
  () => err("filter error") as any
);

/**
 *
 */
export const filterOr = createFilterOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

//#endregion

//#region mappables

/**
 *
 */
export const map = createMap<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

/**
 *
 */
export const mapOr = createMapOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

/**
 *
 */
export const mapOrElse = createMapOrElse<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

//#endregion

//#region unwrappable

/**
 *
 */
export const unwrap = createUnwrap<ResultTag>(isOk, "cannot unwrapp Err");
/**
 *
 */
export const unwrapOr = createUnwrapOr<ResultTag>(isOk);
/**
 *
 */
export const unwrapOrElse = createUnwrapOrElse<ResultTag>(isOk);

//#endregion
