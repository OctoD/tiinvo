import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';

export type t<a> = Functors.Filterable<a>;

/**
 * Combines two or more predicates in one.
 * If all predicates are satisfied returns `true`, otherwise return `false`.
 * 
 * ```ts
 * import { Predicate, Num } from 'tiinvo';
 * 
 * const and = Predicate.and(Num.gt(3), Num.lt(10));
 * 
 * and(5) // true
 * and(2) // false
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 4.0.0 
 */
 export const and = <pl extends t<any>[]>(...predicates: pl) => <a extends any>(value: a) => {
  switch (predicates.length) {
    case 0: return true;
    case 1: return predicates[0](value);
    case 2: return predicates[0](value) && predicates[1](value);
    case 3: return predicates[0](value) && predicates[1](value) && predicates[2](value);
    case 4: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value);
    case 5: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value);
    case 6: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value) && predicates[5](value);
    case 7: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value) && predicates[5](value) && predicates[6](value);
    case 8: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value) && predicates[5](value) && predicates[6](value) && predicates[7](value);
    case 9: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value) && predicates[5](value) && predicates[6](value) && predicates[7](value) && predicates[8](value);
    case 10: return predicates[0](value) && predicates[1](value) && predicates[2](value) && predicates[3](value) && predicates[4](value) && predicates[5](value) && predicates[6](value) && predicates[7](value) && predicates[8](value) && predicates[9](value);
    default: return predicates.every(p => p(value));
  }
};

/**
 * Returns true if `b` strictly equals to `a`
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * const eq0 = Predicate.eq(0)
 * 
 * eq0(10)                  // false
 * eq0(0)                   // true
 * Predicate.eq(0, 10)      // false
 * Predicate.eq(0, 0)       // true
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export function eq<a>(a: a, b: a): boolean;
export function eq<a>(a: a): Fn.Unary<a, boolean>;
export function eq<a>(a: a, b?: any): any {
  if (arguments.length === 1) {
    return (b: a) => a === b;
  }

  return a === b;
}

/**
 * Checks if a function could be a predicate
 * 
 * **Important**: the guard will check only if is a unary function (has only one argument), but will not check it's returning type
 * 
 * @example
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * Predicate.guard((x: number, b: number) => x + b)     // false
 * Predicate.guard((x: number) => x > 0)                // true
 * ```
 * 
 * @since 4.0.0
 */
export const guard: Functors.Guardable<t<unknown>> = (x: unknown): x is t<any> => typeof(x) === 'function' && x.length === 1;

/**
 * Inverts the result of a Predicate
 * 
 * ```ts
 * import { Predicate, Num } from 'tiinvo';
 * 
 * const i = Predicate.invert(Num.gt(0))
 * 
 * i(10) // false
 * i(-1) // true
 * ```
 * 
 * @param predicate 
 * @returns 
 * @since 4.0.0
 */
export const invert = <a>(p: t<a>): t<a> => (x: a) => !p(x);

/**
 * Returns true if `b` is not stricly equal to `a`
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * const neq = Predicate.neq(0)
 * 
 * neq(10)                    // true
 * neq(0)                     // false
 * Predicate.neq(0, 10)       // true
 * Predicate.neq(0, 0)        // false
 * ```
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export function neq<a>(a: a, b: a): boolean;
export function neq<a>(a: a): Fn.Unary<a, boolean>;
export function neq<a>(a: a, b?: any): any {
  if (arguments.length === 1) {
    return (b: a) => a !== b;
  }

  return a !== b;
}

/**
 * Combines two or more predicates in one.
 * Returns true if none of them is satisfied, otherwise returns false
 * 
 * ```ts
 * import { Predicate, Num } from 'tiinvo';
 * 
 * const n = Predicate.none(Num.gt(0), Num.isEven);
 * 
 * n(4)  // false
 * n(5)  // false
 * n(-4) // false
 * n(-5) // true
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 4.0.0
 */
 export const none = <pl extends t<any>[]>(...predicates: pl) => <a extends any>(value: a) => {
  switch (predicates.length) {
    case 0: return true;
    case 1: return !predicates[0](value);
    case 2: return !predicates[0](value) && !predicates[1](value);
    case 3: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value);
    case 4: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value);
    case 5: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value);
    case 6: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value) && !predicates[5](value);
    case 7: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value) && !predicates[5](value) && !predicates[6](value);
    case 8: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value) && !predicates[5](value) && !predicates[6](value) && !predicates[7](value);
    case 9: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value) && !predicates[5](value) && !predicates[6](value) && !predicates[7](value) && !predicates[8](value);
    case 10: return !predicates[0](value) && !predicates[1](value) && !predicates[2](value) && !predicates[3](value) && !predicates[4](value) && !predicates[5](value) && !predicates[6](value) && !predicates[7](value) && !predicates[8](value) && !predicates[9](value);
    default: return predicates.every(p => !p(value));
  }
}

/**
 * Combines two or more predicates in one.
 * Returns true if at least one predicate is satisfied, otherwise returns false
 * 
 * ```ts
 * import { Predicate, Num } from 'tiinvo';
 * 
 * const or = Predicate.or(Num.gt(0), Num.isEven);
 * 
 * or(-1) // false
 * or(1)  // true
 * or(2)  // true
 * ```
 * 
 * @param predicates 
 * @returns 
 * @since 4.0.0
 */
 export const or = <pl extends t<any>[]>(...predicates: pl) => <a extends any>(value: a) => {
  switch (predicates.length) {
    case 0: return true;
    case 1: return predicates[0](value);
    case 2: return predicates[0](value) || predicates[1](value);
    case 3: return predicates[0](value) || predicates[1](value) || predicates[2](value);
    case 4: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value);
    case 5: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value);
    case 6: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value) || predicates[5](value);
    case 7: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value) || predicates[5](value) || predicates[6](value);
    case 8: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value) || predicates[5](value) || predicates[6](value) || predicates[7](value);
    case 9: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value) || predicates[5](value) || predicates[6](value) || predicates[7](value) || predicates[8](value);
    case 10: return predicates[0](value) || predicates[1](value) || predicates[2](value) || predicates[3](value) || predicates[4](value) || predicates[5](value) || predicates[6](value) || predicates[7](value) || predicates[8](value) || predicates[9](value);
    default: return predicates.some(p => p(value));
  }
}