import { ArgsOf, check, FnUnary } from "./applicative";
import { createExpect } from "./assertables";
import { totaggedFn } from "./cast";
import { createderivefromfunction } from "./derivables";
import { createFilter, createFilterOr } from "./filterables";
import { createMap, createMapOr, createMapOrElse } from "./mappables";
import {
  isTagged,
  isTaggedOf,
  isTaggedWith, tagged, Tagged,
  TaggedFactory
} from "./tagged-type";
import * as tg from "./typeguards";
import {
  createUnwrap,
  createUnwrapOr,
  createUnwrapOrElse
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
export interface Err extends Tagged<Error, Errtag> { }

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
 * Returns true if something is `Result<unknown>`;
 * @since 2.0.0
 * @example 
 * 
 * ```ts
 * import { result } from 'tiinvo';
 * 
 * result.isResult(0)                   // false
 * result.isResult(result.ok(10))       // true
 * result.isResult(result.err('foo'))   // true
 * ```
 */
export const isResult = tg.combine(
  isTagged,
  hasresulttag
) as tg.Typeguard<Result>;
/**
 * Returns true if a variable is `Err`
 * @since 2.0.0
 * @example 
 * 
 * ```ts
 * import { result } from 'tiinvo';
 * 
 * result.isErr(0)                   // false
 * result.isErr(result.ok(10))       // false
 * result.isErr(result.err('foo'))   // true
 * ```
 */
export const isErr = tg.combine(isTagged, haserrtag) as tg.Typeguard<Err>;
/**
 * Returns true if a variable is `Ok`
 * @since 2.0.0
 * @example 
 * 
 * ```ts
 * import { result } from 'tiinvo';
 * 
 * result.isOk(0)                   // false
 * result.isOk(result.ok(10))       // true
 * result.isOk(result.err('foo'))   // false
 * ```
 */
export const isOk = tg.combine(isTagged, hasoktag) as tg.Typeguard<Ok>;

/**
 * Checks if a value is `Ok<T>`.
 * 
 * @since 2.14.0
 * 
 * @example
 * 
 * ```ts
 * import { result, isnumber } from 'tiinvo';
 * 
 * const isnumok = result.isOkOf(isnumber);
 * 
 * isnumok(result.err(`nope`))  // false
 * isnumok(result.ok(`nope2`))  // false
 * isnumok(result.ok(1000000))  // true
 * ```
 * 
 * @param type 
 * @returns 
 */
export const isOkOf = <T>(type: tg.Typeguard<T>) => isTaggedOf(OKTAG, type) as tg.Typeguard<Ok<T>>;

//#endregion

//#region factories

/**
 * Creates a `Err` type
 * @since 2.0.0
 */
export const err = (message: string | Error): Err =>
  tagged(message instanceof Error ? message : new Error(message), ERRTAG);

/**
 * Creates a `Ok<T>` type. Throws if `T` is an instance of `Error`.
 * @since 2.0.0
 */
export const ok = <T>(value: T): Ok<T> =>
  tagged(
    check(!tg.iserror(value), "An error cannot be a value of Ok")(value),
    OKTAG
  ) as Ok<T>;

/**
 * Creates a `Result<T>` type. If the given value is an instance of `Error`, 
 * returns `Err`, otherwise returns `Ok<T>`
 * @since 2.0.0
 */
export const result = <T>(value: T): Result<T> =>
  (tg.iserror(value) ? err(value) : ok(value)) as Result<T>;

/**
 * Creates a Err<K> factory from a function (arg: T) => K
 * @since 2.0.0
 * @deprecated
 */
export const errfromfn = (totaggedFn(err as any) as unknown) as FnUnary<
  string | Error,
  Err
>;

/**
 * Creates a Ok<K> factory from a function (arg: T) => K
 * @since 2.0.0
 * @deprecated
 */
export const okfromfn = totaggedFn(ok);

/**
 * Creates a Result<K> factory from a function (arg: T) => K
 * @since 2.0.0
 * @deprecated
 */
export const fromfn = (totaggedFn(result as any) as unknown) as <T>(
  arg: T
) => Result<T>;

//#endregion

//#region assertables

/**
 * Throws an error if `Result<T>` is `Err`
 * @since 2.0.0
 * 
 * @example
 * 
 * ```ts
 * import { result } from 'tiinvo';
 * 
 * result.expect(result.ok(10))    // Ok<10>
 * result.expect(result.err(''))   // throws
 * ```
 */
export const expect = createExpect<Result>(isOk);
/**
 * Throws an error if `Result<T>` is `Ok<T>`
 * @since 2.0.0
 * 
 * @example
 * 
 * ```ts
 * import { result } from 'tiinvo';
 * 
 * result.unexpect(result.ok(10))    // throws
 * result.unexpect(result.err(''))   // Err<''>
 * ```
 */
export const unexpect = createExpect<Result>(isErr);

//#endregion

//#region filterables

/**
 * Filters an `Ok<T>` with a given predicate. If the check
 * does not satisfy the predicate, it maps the `Ok<T>` to
 * an `Err`.
 *
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import { result, num } from 'tiinvo';
 *
 * result.filter(num.iseven)(4) // Ok<4>
 * result.filter(num.iseven)(3) // Err
 * ```
 */
export const filter = createFilter<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>,
  () => err("filter error") as any
);

/**
 * Filters an `Ok<T>` with a given predicate. If the check
 * does not satisfy the predicate, it returns the fallback
 * `Result<T>`.
 *
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import { result, pipe } from 'tiinvo';
 *
 * const filter = result.filterOr(result.ok(0), num.iseven);
 *
 * filter(4) // Ok<4>
 * filter(3) // Ok<0>
 * ```
 */
export const filterOr = createFilterOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
);

//#endregion

//#region mappables

/**
 * Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise returns `Err`
 *
 * @since 2.0.0
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
 * Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise returns fallback `Ok<R>`
 *
 * @since 2.0.0
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
 * Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise calls `FnNullary<R>` and returns `Ok<R>`
 *
 * @since 2.0.0
 * @example
 * 
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
 * Unwraps a `Result<T>` value `T` is `Ok<T>`, otherwise throws
 *
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { result } from 'tiinvo';
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
 * Unwraps a `Result<T>` value `T` if `Ok<T>`, otherwise returns the fallback value `T`
 *
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { result } from 'tiinvo';
 *
 * const test1 = result.ok(10);
 * const test2 = result.ok(new Error());
 * const unwrapfn = result.unwrapOr(0);
 * 
 * unwrapfn(test1) // 10
 * unwrapfn(test2) // 0
 * ```
 */

export const unwrapOr = createUnwrapOr<ResultTag>(isOk);
/**
 * Unwraps a `Result<T>` value `T` if `Ok<T>`, otherwise calls fallback function `FnNullary<T>`
 *
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { result, fallback } from 'tiinvo';
 *
 * const test1 = result.ok(10);
 * const test2 = result.ok(new Error());
 * const unwrapfn = result.unwrapOrElse(fallback(0));
 * 
 * unwrapfn(test1) // 10
 * unwrapfn(test2) // 0
 * ```
 */
export const unwrapOrElse = createUnwrapOrElse<ResultTag>(isOk);

//#endregion

/**
 * Wraps a function `FnUnary<A, T>`, and once called it returns a `Result<T>`
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { result, num } from 'tiinvo';
 * 
 * const couldthrow = () => {
 *   const a = num.brandomint(0, 10);
 *   if (num.iseven(a)) {
 *     return new Error('number is even')
 *   }
 *   return a;
 * }
 * const unsaferandomInt = result.fromfunction(couldthrow);
 * unsaferandomInt() // could be either Err<'number is even'> or Ok<number>
 * ```
 */
export const fromfunction = createderivefromfunction(
  result as TaggedFactory<ResultTag>
) as <Fn extends (...args: any[]) => any>(
    fn: Fn
  ) => (
      ...args: ArgsOf<Fn>
    ) => ReturnType<Fn> extends Error ? Err : Ok<ReturnType<Fn>>;
