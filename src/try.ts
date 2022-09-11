import type * as fn from './fn';
import type * as m from './maybe';
import type * as o from './option';
import { type result as _result, type ok, type err } from './result';

const _err = (a: unknown): err => {
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

/**
 * Calls a function `fn` with it's arguments and returns a `maybe<returnTypeOf<fn>>`
 * 
 * ```typescript
 * import { Try, Maybe, Number } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Number.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Try.maybe(fn);
 * 
 * console.log(safe(2)); // 4
 * console.log(safe(3)); // null
 * 
 * console.log(Maybe.isJust(safe(2))); // true
 * console.log(Maybe.isNothing(safe(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const maybe = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): m.maybe<fn.returnTypeOf<fn>> => {
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
export const maybeAsync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<m.maybe<fn.asyncFnReturnType<fn>>> => {
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
 * import { Try, Option, Number } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Number.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Try.option(fn);
 * 
 * console.log(safe(2)); // 4
 * console.log(safe(3)); // null
 * 
 * console.log(Option.isSome(safe(2))); // true
 * console.log(Option.isNone(safe(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const option = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): o.option<fn.returnTypeOf<fn>> => {
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
export const optionAsync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<o.option<fn.asyncFnReturnType<fn>>> => {
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
 * import { Try, Option, Number } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Number.isEven(arg)) {
 *     return arg * 2;
 *   }
 * 
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Try.result(fn);
 * 
 * console.log(safe(2)); // 4
 * console.log(safe(3)); // Error: 3 is not even
 * 
 * console.log(r.isOk(safe(2))); // true
 * console.log(r.isErr(safe(3))); // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const result = <fn extends (... a: any[]) => any | never>(fn: fn) => (... args: fn.argsOf<fn>): _result<fn.returnTypeOf<fn>> => {
  try {
    return fn(... args) as ok<fn.returnTypeOf<fn>>;
  } catch (error) {
    return _err(error) as err;
  }
}

/**
 * The async version of `tryresult`
 * 
 * @param fn 
 * @returns 
 * @since 3.0.0
 */
export const resultAsync = <fn extends (... a: any[]) => any | Promise<any> | never>(fn: fn) => async (... args: fn.argsOf<fn>): Promise<_result<fn.asyncFnReturnType<fn>>> => {
  try {
    return await fn(... args) as ok<fn.returnTypeOf<fn>>;
  } catch (error) {
    return _err(error) as err;
  }
}
