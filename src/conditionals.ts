import { FnNullary, FnUnary } from './applicative';
import { Predicate } from './predicate';

/**
 * Given a condition, returns T or F if the condition is true or false
 *
 * @example
 * ```ts
 * import { fi } from 'tiinvo';
 *
 * const printEvenOrOdd = (arg: number) => fi(arg % 2 === 0, 'Even', 'Odd');
 *
 * printEvenOrOdd(1) // 'Odd'
 * printEvenOrOdd(2) // 'Even'
 * printEvenOrOdd(4) // 'Even'
 *
 * ```
 *
 * @template T
 * @template F
 * @deprecated
 * @param {boolean} condition
 * @param {T} truthyresult
 * @param {F} falsyresult
 */
export const fi = <T, F>(condition: boolean, truthyresult: T, falsyresult: F) =>
  condition ? truthyresult : falsyresult;

/**
 * The same of `fi`, but accepts two functions `A` and `B` with zero parameters and calls.
 * Calls `A` if the condition is `true` or `B` if false.
 *
 * @example
 * ```ts
 * const printeven = () => 'Even';
 * const printodd = () => 'Odd'
 * const printEvenOrOdd = (arg: number) => fifn(arg % 2 === 0, printeven, printodd);
 *
 * printEvenOrOdd(1) // 'Odd'
 * printEvenOrOdd(2) // 'Even'
 * printEvenOrOdd(4) // 'Even'
 * ```
 *
 * @deprecated
 * @template T
 * @template F
 * @template A
 * @template B
 * @param {boolean} condition
 * @param {T} truthyfn
 * @param {F} falsyfn
 */
export const fifn = <T extends () => A, F extends () => B, A, B>(
  condition: boolean,
  truthyfn: T,
  falsyfn: F
) => (condition ? truthyfn() : falsyfn());

/**
 * Creates a branching function. If the predicate is satisfied, calls Positive fn, otherwise calls Negative fn.
 * Note: Both Predicate, Positive and Negative fns are unaries.
 * 
 * @since 2.12.0
 * 
 * @example
 * ```ts
 * import { branch, num } from 'tiinvo';
 * 
 * const tostring = (label: 'even' | 'odd') => (arg: number) => `${arg} is ${label}`
 * const evenstostring = tostring('even');
 * const oddstostring = tostring('odd');
 * 
 * const dosomething = const dosomething = branch(num.iseven, evenstostring, oddstostring);
 * 
 * dosomething(10) // "10 is even"
 * dosomething(11) // "11 is odd"
 * 
 * ```
 * 
 * @param condition 
 * @param positive 
 * @param negative 
 * @returns 
 */
export const branch = <U, R>(
  condition: Predicate<U>,
  positive: FnUnary<U, R>,
  negative: FnUnary<U, R>,
) => (arg: U): R => condition(arg) ? positive(arg) : negative(arg);

/**
 * Like a Switch statement.
 * 
 * It accepts the default case `R` as first argument, then an indefinite number of tuples made
 * by a `Predicate<T>` as first argument, and a `R` or `FnUnary<T, R>` function as resolver.
 * 
 * @since 2.13.0
 * @example
 * 
 * ```ts
 * import { multi, fallback, num, pipe, str } from 'tiinvo';
 * 
 * const switchcase = pipe(
 *    str.length,
 *    multi(
 *      `Not valid`,
 *      [num.equals(0), `Required`],
 *      [num.lessthan(10), `Too short`],
 *      [num.greaterthan(20), `Too long`],
 *      [num.greaterthan(8), `Valid`],
 *    )
 * );
 * 
 * switchcase('hello world')                    // `Valid`
 * switchcase('foo')                            // `Too short`
 * switchcase('123456789012345678901234567890') // `Too long`
 * switchcase('')                               // `Required`
 * switchcase(11 as any)                        // `Not valid`
 * ```
 * 
 * @param defaultcase 
 * @param cases 
 * @returns 
 */
export const multi = <U, R>(
  defaultcase: R | FnNullary<R>,
  ... cases: [... [Predicate<U>, R | FnNullary<R>]][]
) => (arg: U): R => {
  for (let i = 0; i < cases.length; i++) {
    const current = cases[i];

    if (current[0](arg)) {
      return typeof current[1] === 'function' ? (current[1] as any)() : current[1];
    }
  }

  return typeof defaultcase === 'function' ? (defaultcase as any)() : defaultcase;
}