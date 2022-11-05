import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';

/**
 * Handles a `Functors.Catchable<f>`
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
 * @since 4.0.0
 */
export const make = <f extends Fn.AnyFn>(catchable: Functors.CatchableModule<f>): f extends Fn.AnyAsyncFn ? ((...args: Parameters<f>) => Promise<Awaited<ReturnType<f>>>) : ((...args: Parameters<f>) => ReturnType<f>) => {
  type args = Parameters<f>;

  const modAsync = (catchable as Functors.CatchableAsyncModule<f>)[catchableAsync]?.();
  const modSync = (catchable as Functors.CatchableSyncModule<f>)[catchableSync]?.();

  if (modAsync) {
    return (async (...args: args): Promise<Awaited<ReturnType<f>>> => {
      try {
        return await modAsync.func.apply(null, args);
      } catch (error: unknown) {
        return await modAsync.catch(error as Error, args) as any;
      }
    }) as any;
  } else if (modSync) {
    return ((...args: args): ReturnType<f> => {
      try {
        return modSync.func.apply(null, args);
      } catch (error: unknown) {
        return modSync.catch(error as Error, args);
      }
    }) as any;
  }

  throw new Error(`Invalid Catchable passed`);
};