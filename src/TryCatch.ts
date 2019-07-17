import { Ok, Err, Result } from "./Result";

export type Fn = () => any;
export type FnAsync = () => Promise<any>;

/**
 * Handle sync try/catch.
 *
 * ```ts
 * import { TryCatch, TryCatchAsync } from 'tiinvo';
 *
 * TryCatch(
 *   (a: number, b: number) => a + b,
 *   10,
 *   20,
 * ) // returns Ok(30)
 * ```
 *
 * @export
 * @template FnTry
 * @template K
 * @param {FnTry} fnTry
 * @param {...K} args
 * @returns {(Ok<ReturnType<FnTry>> | Err)}
 */
export function TryCatch<FnTry extends (...args: K) => any, K extends any[]>(
  fnTry: FnTry,
  ...args: K
): Result<ReturnType<FnTry>, Error> {
  try {
    return Ok(fnTry.apply(null, args));
  } catch (error) {
    return Err(error.message);
  }
}

/**
 * Handle sync try/catch.
 *
 * ```ts
 * TryCatchAsync(
 *   (url: string) => fetch(url).then(r => r.json()),
 *   'https://reqres.in/api/users?page=2'
 * ) // returns Ok({ some json data here })
 *
 * ```
 *
 * @export
 * @template FnTry
 * @template K
 * @param {FnTry} fnTry
 * @param {...K} args
 * @returns {(Promise<Ok<ReturnType<FnTry>> | Err>)}
 */
export async function TryCatchAsync<
  FnTry extends (...args: K) => Promise<any>,
  K extends any[]
>(fnTry: FnTry, ...args: K): Promise<Result<ReturnType<FnTry>, Error>> {
  try {
    return Ok(await fnTry.apply(null, args));
  } catch (error) {
    return Err(error.message);
  }
}
