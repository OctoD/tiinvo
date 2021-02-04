import { ArgsOf, check, Fn1 } from "./applicative";
import { createExpect } from "./assertables";
import { totaggedFn } from "./cast";
import { createderivefromfunction } from "./derivables";
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
export type Ok<T = unknown> = T extends Error ? never : Tagged<T, Oktag>;

/**
 *
 */
export type Result<T = unknown> = T extends Error ? Err : Ok<T>;

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

export type InferredResultFactory<T> = (arg: T) => Result<T>;

//#endregion

//#region typeguards

const hasoktag = isTaggedWith(OKTAG);
const haserrtag = isTaggedWith(ERRTAG);
const hasresulttag = tg.anyof(hasoktag, haserrtag);

/**
 *
 */
export const isResult = tg.combine(
  isTagged,
  hasresulttag
) as tg.Typeguard<Result>;
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
  ) as Ok<T>;

/**
 *
 */
export const result = <T>(value: T): Result<T> =>
  (tg.iserror(value) ? err(value) : ok(value)) as Result<T>;

/**
 * Creates a Err<K> factory from a function (arg: T) => K
 */
export const errfromfn = (totaggedFn(err as any) as unknown) as Fn1<
  string | Error,
  Err
>;

/**
 * Creates a Ok<K> factory from a function (arg: T) => K
 */
export const okfromfn = totaggedFn(ok);

/**
 * Creates a Result<K> factory from a function (arg: T) => K
 */
export const fromfn = (totaggedFn(result as any) as unknown) as <T>(
  arg: T
) => Result<T>;

//#endregion

//#region assertables

/**
 * Throws an error if `Result<T>` is `Err`
 */
export const expect = createExpect<Result>(isOk);
/**
 * Throws an error if `Result<T>` is `Ok<T>`
 */
export const unexpect = createExpect<Result>(isErr);

//#endregion

//#region filterables

/**
 * Filters an `Ok<T>` with a given predicate. If the check
 * does not satisfy the predicate, it will map the `Ok<T>` to
 * an `Err`.
 *
 * @example
 *
 * ```ts
 * import { result, pipe } from 'tiinvo';
 *
 * const iseven = (arg: number) => arg % 2 === 0;
 *
 * const filterfn = pipe(
 *    result.result as result.InferredResultFactory<number>,
 *    result.filter(iseven),
 *    result.isOk
 * );
 *
 * filterfn(4) // true
 * filterfn(3) // false
 * ```
 */
export const filter = createFilter<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>,
  () => err("filter error") as any
);

/**
 * Filters an `Ok<T>` with a given predicate. If the check
 * does not satisfy the predicate, it will return the fallback
 * `Result<T>`.
 *
 * @example
 *
 * ```ts
 * import { result, pipe } from 'tiinvo';
 *
 * const iseven = (arg: number) => arg % 2 === 0;
 *
 * const filterfn = pipe(
 *    result.result as result.InferredResultFactory<number>,
 *    result.filterOr(result.ok(0), iseven),
 *    result.unwrap
 * );
 *
 * filterfn(4) // 4
 * filterfn(3) // 0
 * ```
 */
export const filterOr = createFilterOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

//#endregion

//#region mappables

/**
 * Maps a value `T` if `Ok`
 *
 * @example
 *
 * ```ts
 * import { result, pipe } from 'tiinvo';
 *
 * const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
 * const double = (arg: number) => arg * 2;
 *
 * const handleerror = pipe(
 *  result.fromfunction(evenorerror),
 *  result.map(double),
 *  result.unwrapOr(0)
 * );
 *
 * handleerror(2) // 4
 * handleerror(1) // 0
 * ```
 */
export const map = createMap<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

/**
 * Maps a value `T` if `Ok`, otherwise maps `Err` to `fallback`
 *
 * @example
 *
 * ```ts
 * import { result, pipe } from 'tiinvo';
 *
 * const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
 * const double = (arg: number) => arg * 2;
 *
 * const handleerror = pipe(
 *  result.fromfunction(evenorerror),
 *  result.mapOr(result.ok(0), double),
 *  result.unwrap
 * );
 *
 * handleerror(2) // 4
 * handleerror(1) // 0
 * ```
 */
export const mapOr = createMapOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

/**
 * Maps a value `T` if `Ok`, otherwise calls `Fn` and maps `Err` to `ReturnValue<Fn>`
 *
 * @example
 * ```ts
 * import { result, pipe, fallback } from 'tiinvo';
 *
 * const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
 * const double = (arg: number) => arg * 2;
 * const elsefn = fallback(0);
 *
 * const handleerror = pipe(
 *  result.fromfunction(evenorerror),
 *  result.mapOrElse(elsefn, double),
 *  result.unwrap
 * );
 *
 * handleerror(2) // 4
 * handleerror(1) // 0
 * ```
 */
export const mapOrElse = createMapOrElse<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

//#endregion

//#region unwrappable

/**
 * Unwraps a `Result<T>` `value` or throws
 *
 * @example
 * ```ts
 * import { result, fallback } from 'tiinvo';
 *
 * const test1 = result.ok(10);
 * const test2 = result.ok(new Error());
 * const unwrapfn = result.unwrap;
 *
 * unwrapfn(test1) // 10
 * unwrapfn(test2) // throws the error
 * ```
 */
export const unwrap = createUnwrap<ResultTag>(isOk, "cannot unwrapp Err");

/**
 * Unwraps a `Result<T>` `value` or returns the `fallback` `value`
 *
 * @example
 * ```ts
 * import { result, fallback } from 'tiinvo';
 *
 * const test1 = result.ok(10);
 * const test2 = result.ok(new Error());
 * const unwrapfn = result.unwrapOr('error');
 *
 * unwrapfn(test1) // 10
 * unwrapfn(test2) // 'error'
 * ```
 */

export const unwrapOr = createUnwrapOr<ResultTag>(isOk);
/**
 * Unwraps a `Result<T>` `value` or returns the `fallback` function `value`
 *
 * @example
 * ```ts
 * import { result, fallback } from 'tiinvo';
 *
 * const test1 = result.ok(10);
 * const test2 = result.ok(new Error());
 * const unwrapfn = result.unwrapOrElse(fallback('error'));
 *
 * unwrapfn(test1) // 10
 * unwrapfn(test2) // 'error'
 * ```
 */
export const unwrapOrElse = createUnwrapOrElse<ResultTag>(isOk);

//#endregion

/**
 * Wraps a function `(... args: any[]) => T`, and once called it returns a `Result<T>`
 */
export const fromfunction = createderivefromfunction(
  result as TaggedFactory<ResultTag>
) as <Fn extends (...args: any[]) => any>(
  fn: Fn
) => (
  ...args: ArgsOf<Fn>
) => ReturnType<Fn> extends Error ? Err : Ok<ReturnType<Fn>>;
