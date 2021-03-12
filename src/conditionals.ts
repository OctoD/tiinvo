import { ArgsOf, FnBase, FnUnary } from './applicative';
import { Predicate } from './predicate';

/**
 * Given a condition, returns T or F if the condition is true or false
 *
 * @example
 * ```ts
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