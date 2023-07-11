import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';

/**
 * Uses the `Functors.Catchable<f>` to return a wrapped function `f`.
 * 
 * If the function `f` throws internally, then the functors' catch function is called, otherwise returns `f` output
 *
 * @example
 *
 * ```ts
 * import { Catch, Functors, Num } from 'tiinvo'
 * 
 * function catchy(arg: number) {
 *    if (Num.isEven(arg)) {
 *      throw new TypeError("I expected an odd number :(")
 *    }
 * 
 *    return arg;
 * }
 * 
 * const c: Functors.CatchableModule<typeof catchy> = {
 *    [Functors.catchableSync]() {
 *      return {
 *        catch: (_error, args) => args[0] - 1,
 *        func: catchy,
 *      }
 *    }
 * }
 * 
 * const catched = Catch.make(c);
 * 
 * catched(10)                    // 9
 * catched(7)                     // 7
 * ```
 * 
 * @template F the function to catch
 * @param catchable the CatchableModule<F>
 * @returns a unary function 
 * @since 4.0.0
 */
export const make = <F extends Fn.AnyFn>(catchable: Functors.CatchableModule<F>): F extends Fn.AnyAsyncFn ? ((...args: Parameters<F>) => Promise<Awaited<ReturnType<F>>>) : ((...args: Parameters<F>) => ReturnType<F>) =>
{
  type args = Parameters<F>;

  const modAsync = (catchable as Functors.CatchableAsyncModule<F>)[catchableAsync]?.();
  const modSync = (catchable as Functors.CatchableSyncModule<F>)[catchableSync]?.();

  if (modAsync)
  {
    return (async (...args: args): Promise<Awaited<ReturnType<F>>> =>
    {
      try
      {
        return await modAsync.func.apply(null, args);
      } catch (error: unknown)
      {
        return await modAsync.catch(error as Error, args) as any;
      }
    }) as any;
  } else if (modSync)
  {
    return ((...args: args): ReturnType<F> =>
    {
      try
      {
        return modSync.func.apply(null, args);
      } catch (error: unknown)
      {
        return modSync.catch(error as Error, args);
      }
    }) as any;
  }

  throw new Error(`Invalid Catchable passed`);
};