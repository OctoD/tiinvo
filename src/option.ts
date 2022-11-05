import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';
import type * as Fn from './Fn.js';
import { make as makecatch } from './Catch.js';

/**
 * None represents a value that is not present.
 * Unfortunately in javascript, null and undefined are not the same thing, 
 * but we can use them interchangeably within the option type.
 * @since 4.0.0
 */
export type None = null | undefined;

export type Some<a> = a extends None ? never : a;
/**
 * The type `Option.t<a>` represents a value that could be both `a` or `null` or `undefined`.
 * @since 4.0.0
 */
export type t<a> = Some<a> | None;

/**
 * Returns `true` if the option is `None`, `false` otherwise.
 * 
 * ```typescript
 * import { Option } from 'tiinvo';
 * 
 * Option.isNone(1);          // false
 * Option.isNone(null);       // true
 * Option.isNone(undefined);  // true
 * ```
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isNone: Functors.Guardable<None> = (x): x is None => x === undefined || x === null;
/**
 * Returns `true` if the option is `Some<unknown>`, `false` otherwise.
 * 
 * ```typescript
 * import { Option } from 'tiinvo';
 * 
 * Option.isSome(1)         // true
 * Option.isSome(null)      // false
 * Option.isSome(undefined) // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isSome: Functors.Guardable<Some<unknown>> = (x): x is Some<unknown> => x !== undefined && x !== null;
/**
 * Returns `true` if the option is `Some<a>` and the value type is satisfied by the guard, otherwise `false`.
 * 
 * If the option is `None`, it will always return `true`.
 * 
 * ```typescript
 * import { Num, Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * const w = `a`
 * 
 * const isnumsome = Option.guardOf(Num.guard);
 * 
 * isnumsome(x) // true
 * isnumsome(y) // true
 * isnumsome(z) // true
 * isnumsome(w) // false
 * 
 * ```
 * @param guard 
 * @returns 
 * @since 4.0.0
 */
export const guardOf = <a>(f: Functors.Guardable<a>): Functors.Guardable<t<a>> => (x): x is t<a> => isNone(x) ? true : f(x);

//#region comparables

/**
 * Compares two optinos `t<a>` by a given `Comparable<a>`.
 * 
 * Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.
 * 
 * If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Option } from 'tiinvo';
 * 
 * const cmp = Option.cmp(Str.cmp);
 * 
 * cmp("a", "a")                    // 0
 * cmp("a", "b")                    // -1
 * cmp("b", "a")                    // 1
 * cmp(null, undefined)             // 0
 * cmp(null, "a")                   // -1
 * cmp("a", undefined)              // 1
 * ```
 * 
 * @since 4.0.0
 */
export const cmp = <a>(c: Functors.Comparable<a>): Functors.Comparable<t<a>> => (a: t<a>, b: t<a>) => {
  if (isNone(a) && isNone(b)) {
    return 0;
  }

  if (isNone(a)) {
    return -1;
  }

  if (isNone(b)) {
    return 1;
  }

  return c(a, b);
};

/**
 * Returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Option } from 'tiinvo';
 * 
 * const eq = Option.eq(Num.eq);
 * 
 * eq(0, 0)                         // true
 * eq(null, undefined)              // true
 * eq(null, 0)                      // false
 * eq(0, null)                      // false
 * eq(1_000_000, 0)                 // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const eq = <a>(e: Functors.Equatable<a>): Functors.Equatable<t<a>> => (a, b) => {
  if (isNone(a) && isNone(b)) {
    return true;
  }

  if (isNone(a) || isNone(b)) {
    return false;
  }

  return e(a, b);
};

//#endregion

//#region filterables

/**
 * Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const f = Option.filter(Num.gt(1));
 * 
 * f(1)    // null
 * f(2)    // 2
 * f(null) // null
 * ```
 * 
 * @since 4.0.0
 */
export function filter<a>(f: Functors.Mappable<a, boolean>, a: t<a>): t<a>;
export function filter<a>(f: Functors.Mappable<a, boolean>): Fn.Unary<t<a>, t<a>>;
export function filter<a>(f: Functors.Mappable<a, boolean>, a?: t<a>): any {
  if (arguments.length === 2) {
    return isNone(a) ? null : f(a) ? a : null;
  }

  return (c: t<a>) => isNone(c) ? null : f(c) ? c : null;
}

//#endregion

//#region mappables

/**
 * Maps an `Option.t<a>` to another `Option.t<b>` if is `Some<a>`, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const m = Option.map(Num.add(1));
 * 
 * m(1)    // 2
 * m(null) // null
 * ```
 * 
 * @since 4.0.0
 */
export const map = <a, b>(m: Functors.Mappable<a, b>) => (a: t<a>): t<b> => isNone(a) ? null : m(a) as t<b>;

/**
 * Maps an `Option.t<a>` to another `Option.t<b>` if is `Some<a>`, otherwise returns `b`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const m = Option.mapOr(Num.add(2), 0);
 * 
 * m(1)    // 3
 * m(null) // 0
 * ```
 * 
 * @since 4.0.0
 */
export const mapOr = <a, b>(m: Functors.Mappable<a, b>, b: b) => (a: t<a>): b => isNone(a) ? b : m(a);

//#endregion

//#region catchable

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Option.t<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const fn = async (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Option.tryAsync(fn);
 * 
 * await safe(2) // 4
 * await safe(3) // null
 * 
 * Option.isSome(await safe(2)) // true
 * Option.isNone(await safe(3)) // true
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
        catch: async (_err, _args) => null as any,
        func: f
      };
    }
  });
};

/**
 * Calls a function `f` with it's arguments and returns a `Option.t<ReturnType<f>>`
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Option.trySync(fn);
 * 
 * safe(2) // 4
 * safe(3) // null
 * 
 * Option.isSome(safe(2)) // true
 * Option.isNone(safe(3)) // true
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
        catch: () => null,
        func: f
      };
    }
  });
};

//#endregion
