import type * as fn from './fn';
import type * as m from './maybe';
import type * as o from './option';
import type * as r from './result';

/**
 * Calls a function `fn` with it's arguments and returns a `maybe<returnTypeOf<fn>>`
 * 
 * ```typescript
 * import { trymaybe } from 'tiinvo/try';
 * import * as m from 'tiinvo/maybe';
 * import * as num from 'tiinvo/num';
 * 
 * const fn = (arg: number) => {
 *   if (num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * console.log(trymaybe(fn)(2)); // 4
 * console.log(trymaybe(fn)(3)); // null
 * 
 * console.log(m.isjust(trymaybe(fn)(2))); // true
 * console.log(m.isnothing(trymaybe(fn)(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const trymaybe = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): m.maybe<fn.returnTypeOf<fn>> => {
  try {
    return fn(... args) as m.just<fn.returnTypeOf<fn>>;
  } catch (e) {
    return null as m.nothing;
  }
};

/**
 * The async version of `trymaybe`
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const trymaybeasync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<m.maybe<fn.asyncFnReturnType<fn>>> => {
  try {
    return await fn(... args) as m.just<fn.returnTypeOf<fn>>;
  } catch (e) {
    return null as m.nothing;
  }
};

/**
 * Calls a function `fn` with it's arguments and returns a `option<returnTypeOf<fn>>`
 * 
 * ```typescript
 * import { tryoption } from 'tiinvo/try';
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const fn = (arg: number) => {
 *   if (num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * console.log(tryoption(fn)(2)); // 4
 * console.log(tryoption(fn)(3)); // null
 * 
 * console.log(o.isSome(tryoption(fn)(2))); // true
 * console.log(o.isNone(tryoption(fn)(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const tryoption = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): o.option<fn.returnTypeOf<fn>> => {
  try {
    return fn(... args) as o.some<fn.returnTypeOf<fn>>;
  } catch (e) {
    return null as o.none;
  }
};

/**
 * The async version of `tryoption`
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const tryoptionasync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<o.option<fn.asyncFnReturnType<fn>>> => {
  try {
    return await fn(... args) as o.some<fn.returnTypeOf<fn>>;
  } catch (e) {
    return null as o.none;
  }
};

/**
 * Calls a function `fn` with it's arguments and returns a `result<returnTypeOf<fn>>`
 * 
 * ```typescript
 * import { tryresult } from 'tiinvo/try';
 * import * as r from 'tiinvo/result';
 * import * as num from 'tiinvo/num';
 * 
 * const fn = (arg: number) => {
 *   if (num.isEven(arg)) {
 *     return arg * 2;
 *   }
 * 
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * console.log(tryresult(fn)(2)); // 4
 * console.log(tryresult(fn)(3)); // Error: 3 is not even
 * 
 * console.log(r.isOk(tryresult(fn)(2))); // true
 * console.log(r.isErr(tryresult(fn)(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const tryresult = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): r.result<fn.returnTypeOf<fn>> => {
  try {
    return fn(... args) as r.ok<fn.returnTypeOf<fn>>;
  } catch (error) {
    return error as r.err;
  }
}

/**
 * The async version of `tryresult`
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const tryresultasync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<r.result<fn.asyncFnReturnType<fn>>> => {
  try {
    return await fn(... args) as r.ok<fn.returnTypeOf<fn>>;
  } catch (error) {
    return error as r.err;
  }
}
