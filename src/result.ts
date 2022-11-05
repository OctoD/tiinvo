import { make as makecatch } from './Catch.js';
import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';

/**
 * Represents an error
 */
export type Err = Error;
/**
 * Represents a successful result of an operation
 */
export type Ok<a> = a extends Error ? never : a;
/**
 * Could represent both an Error `Err` or a successful result of an operation `Ok<a>`
 */
export type t<a> = Ok<a> | Err;

/**
 * Returns an `err`
 * @param a 
 * @returns
 * @since 3.8.0 
 * @example
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.err(10)                    instanceof Error // true
 * Result.err(new TypeError('aaaa')) instanceof Error // true
 * Result.err({})                    instanceof Error // true
 * Result.err(10n)                   instanceof Error // true
 * Result.err([10, 20, 30])          instanceof Error // true
 * ```
 * 
 */
export const err = (a: unknown): Err => {
  if (a instanceof Error) {
    return a;
  } else if (typeof a === 'object' && a) {
    const err = new Error();
    for (const [key, value] of Object.entries(a)) {
      (err as any)[key] = value;
    }
    return err;
  }

  return new Error(String(a));
};

//#region guards

/**
 * Checks if a value is `err`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 *
 * Result.isErr(10)                    // false
 * Result.isErr(new TypeError('aaaa')) // true
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isErr = (value: unknown): value is Err => value instanceof Error || (typeof value === 'object' && value !== null && 'message' in value && 'name' in value && 'cause' in value);

/**
 * Checks if a value is `Ok`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.isOk(10)                    // true
 * Result.isOk(new TypeError('aaaa')) // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isOk = <a>(value: t<a>): value is Ok<a> => !isErr(value);

/**
 * Checks if a value is `Ok<a>`
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const guard = Result.isOkOf(Num.guard);
 * 
 * guard(10)                    // true
 * guard("hello")               // false
 * guard(new TypeError('aaaa')) // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isOkOf = <a>(g: Functors.Guardable<a>) => (x: t<unknown>): x is a => isErr(x) ? false : g(x);

//#endregion

//#region comparables

/**
 * Compares two results `t<a>` by a given `Comparable<a>`.
 * 
 * Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.
 * 
  * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const cmp = Result.cmp(Str.cmp);
 * 
 * cmp("a", "a")                    // 0
 * cmp("a", "b")                    // -1
 * cmp("b", "a")                    // 1
 * cmp(new Error(), new Error())    // 0
 * cmp(new Error(), "a")            // -1
 * cmp("a", new Error())            // 1
 * ```
 * 
 * @since 4.0.0
 */
export const cmp = <a>(cmp: Functors.Comparable<a>): Functors.Comparable<t<a>> => (a, b) => {
  if (isErr(a) && isErr(b)) {
    return 0;
  }

  if (isErr(a)) {
    return -1;
  }

  if (isErr(b)) {
    return 1;
  }

  return cmp(a, b);
};

/**
 * Returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const eq = Result.eq(Num.eq);
 * 
 * eq(0, 0)                         // true
 * eq(new Error(), new TypeError()) // true
 * eq(new Error(), 0)               // false
 * eq(0, new Error())               // false
 * eq(1_000_000, 0)                 // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const eq = <a>(eq: Functors.Equatable<a>): Functors.Equatable<t<a>> => (a, b) => {
  if (isErr(a) && isErr(b)) {
    return true;
  }

  if (isErr(a) || isErr(b)) {
    return false;
  }

  return eq(a, b);
};

//#endregion

//#region filterables

/**
 * Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const f = Result.filter(Num.gt(1));
 * 
 * f(1)               // Error("Value did not pass filter")
 * f(2)               // 2
 * f(new TypeError()) // Error("Value did not pass filter")
 * ```
 * @param f 
 * @returns 
 * @since 4.0.0
 */
export function filter<a>(f: Functors.Filterable<a>, a: t<a>): t<a>;
export function filter<a>(f: Functors.Filterable<a>): Fn.Unary<t<a>, t<a>>;
export function filter<a>(f: Functors.Filterable<a>, a?: t<a>): any {
  const _err = Error("Value did not pass filter");
  if (arguments.length === 2) {
    return isErr(a) ? _err : f(a as a) ? a : _err;
  }

  return (c: t<a>) => isErr(c) ? _err : f(c) ? c : _err;
}

//#endregion

//#region mappables

/**
 * Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `err`
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const m = Result.map(Num.add(10))
 * 
 * m(10)                   // 20
 * m(new Error('foobar!')) // Error('foobar!')
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const map = <a, b>(m: Functors.Mappable<a, b>) => (a: t<a>): t<b> => isOk(a) ? m(a) : a as any;
/**
 * Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `b`
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const map = Result.mapOr(Str.length, 0);
 * 
 * map('hello')        // 5
 * map(new Error())    // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const mapOr = <a, b>(m: Functors.Mappable<a, b>, b: b) => (a: t<a>): b => isOk(a) ? m(a) : b;

//#endregion

//#region catchables

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const fn = async (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Result.tryAsync(fn);
 * 
 * await safe(2) // 4
 * await safe(3) // Error("3 is not even")
 * 
 * Result.isOk(await safe(2))  // true
 * Result.isErr(await safe(3)) // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 4.0.0
 */
export const tryAsync = <f extends Fn.AnyAsyncFn>(f: f) => {
  return makecatch<(...args: Parameters<f>) => Promise<t<ReturnType<f>>>>({
    [catchableAsync]() {
      return {
        catch: async (error) => error,
        func: f
      };
    }
  });
};

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Result.trySync(fn);
 * 
 * safe(2) // 4
 * safe(3) // Error("3 is not even")
 * 
 * Result.isOk(safe(2))  // true
 * Result.isErr(safe(3)) // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 4.0.0
 */
export const trySync = <f extends Fn.AnyFn>(f: f) => {
  return makecatch<(...args: Parameters<f>) => t<ReturnType<f>>>({
    [catchableSync]() {
      return {
        catch: (error) => error,
        func: f
      };
    }
  });
};

//#endregion
