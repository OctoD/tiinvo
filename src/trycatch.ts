import * as result from "./result";

/**
 * Calls a function safely and returns a `Result<T>` where `T` is the return type of that function.
 * @since 2.0.0
 * @example
 * 
 * ```ts
 * import { trycatch, result } from 'tiinvo';
 * 
 * const thisthrows = () => { throw new Error(`This is Sparta`) }
 * const thisisok = (what: string) => `we love ${what}`
 * 
 * const test1 = trycatch(thisthrows);
 * const test2 = trycatch(thisisok, 'kittens');
 * 
 * result.isErr(test1)  // true
 * result.isOk(test2)   // true
 * 
 * ```
 *
 * @template FnTry
 * @template K
 * @param {FnTry} fn
 * @param {...K} args
 * @returns {result.Result<ReturnType<FnTry>>}
 */
export const trycatch = <FnTry extends (...args: K) => any, K extends any[]>(
  fn: FnTry,
  ...args: K
): result.Result<ReturnType<FnTry>> => {
  try {
    return result.ok(fn.apply(null, args)) as any;
  } catch (error) {
    return result.err(error) as any;
  }
};

/**
 * Calls a function safely and returns a `Promise<Result<T>>` where `T` is the return type of that function.
 * @since 2.0.0
 *
 * ```ts
 * import { trycatchAsync, result } from 'tiinvo';
 * 
 * const fail = async () => { throw new Error('oops I did it again') }
 * const success = async (num: number) => num;
 * 
 * trycatchAsync(fail).then(result.isErr)       // Promise<true>
 * trycatchAsync(success, 10).then(result.isOk) // Promise<true>
 * 
 * ```
 * 
 * @template FnTry
 * @template K
 * @param {FnTry} fn
 * @param {...K} args
 * @returns {Promise<ReturnType<FnTry> extends Promise<infer U> ? result.Result<U> : never>}
 */
export const trycatchAsync = async <
  FnTry extends (...args: K) => Promise<any>,
  K extends any[]
>(
  fn: FnTry,
  ...args: K
): Promise<
  ReturnType<FnTry> extends Promise<infer U> ? result.Result<U> : never
> => {
  try {
    const returnvalue = await fn.apply(null, args);
    return result.ok(returnvalue) as any;
  } catch (error) {
    return result.err(error) as any;
  }
};
