import type { predicateA, predicateE } from './functors';

/**
 * Combines two or more predicates in one.
 * If all predicates are satisfied returns `true`, otherwise return `false`.
 * 
 * ```ts
 * import { Predicate, Number } from 'tiinvo';
 * 
 * const and = Predicate.and(Number.gt(3), Number.lt(10));
 * 
 * and(5) // true
 * and(2) // false
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 3.0.0 
 */
export const and = (... predicates: predicateA[]) => <a>(value: a) => predicates.every(p => p(value));
/**
 * Returns true if `b` strictly equals to `a`
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * const eq = Predicate.eq(0)
 * 
 * eq(10)  // false
 * eq(0)   // true
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const eq = <a>(value: a) => (value2: a) => value === value2;
/**
 * Inverts the result of a Predicate
 * 
 * ```ts
 * import { Predicate, Number } from 'tiinvo';
 * 
 * const i = Predicate.invert(Number.gt(0))
 * 
 * i(10) // false
 * i(-1) // true
 * ```
 * 
 * @param predicate 
 * @returns 
 * @since 3.0.0
 */
export const invert = <a>(predicate: predicateE<a>) => (value: a) => !predicate(value);
/**
 * Returns true if `b` is not stricly equal to `a`
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * const neq = Predicate.neq(0)
 * 
 * neq(10) // true
 * neq(0)  // false
 * ```
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const neq = <a>(value: a) => (value2: a) => value !== value2;
/**
 * Combines two or more predicates in one.
 * Returns true if none of them is satisfied, otherwise returns false
 * 
 * ```ts
 * import { Predicate, Number } from 'tiinvo';
 * 
 * const n = Predicate.noneof(Number.gt(0), Number.isEven);
 * 
 * n(4)  // false
 * n(5)  // false
 * n(-4) // false
 * n(-5) // true
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 3.0.0
 */
export const noneof = (... predicates: predicateA[]) => <a>(value: a) => predicates.every(p => !p(value));
/**
 * Combines two or more predicates in one.
 * Returns true if at least one predicate is satisfied, otherwise returns false
 * 
 * ```ts
 * import { Predicate, Number } from 'tiinvo';
 * 
 * const or = Predicate.or(Number.gt(0), Number.isEven);
 * 
 * or(0) // false
 * or(1) // false
 * or(2) // true
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 3.0.0
 */
export const or = (... predicates: predicateA[]) => <a>(value: a) => predicates.some(p => p(value));
