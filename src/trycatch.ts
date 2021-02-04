import * as result from "./result";

/**
 *
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
 *
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
