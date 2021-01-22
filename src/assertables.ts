import { check } from "./applicative";
import { Predicate } from "./predicate";

export type Expect<T> = (errormessage: string) => (arg: T) => T;

/**
 * Creates an expect function. This function checks if a given argument satisfies the given predicate.
 * If the condition is not satisfied, it throws
 *
 * @example
 * ```ts
 * const isstring = (arg: unknown): arg is string => typeof arg === 'string';
 * const expectstring = createExpect(isstring);
 *
 * const foocheck = expectstring('myfn foo argument must be a string');
 * const barcheck = expectstring('myfn bar argument must be a string');
 *
 * const myfn = (foo: unknown, bar: unknown) => [
 *    foocheck(foo),
 *    barcheck(bar)
 * ].join('--');
 *
 * myfn('hello', 'world'); // 'hello--world';
 * myfn('hello', 123);     // Uncaught Error: myfn bar argument must be a string
 * ```
 *
 * @template T
 * @param {Predicate<T>} predicate
 * @returns {Expect<T>}
 */
export const createExpect = <T>(predicate: Predicate<T>): Expect<T> => (
  errormessage: string
) => (arg: T): T => check(predicate(arg), errormessage)(arg) as T;
