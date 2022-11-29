import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';

/**
 * A `Predicate.T<A>` is a unary function which accepts an argument `A` and returns a boolean
 * in order to tell other functions if some conditions are met by `A`.
 *
 * @example
 *
 * ```ts
 * import { Predicate } from 'tiinvo'
 * 
 * const gt10: Predicate.T<number> = x => x > 10;
 * ```
 *
 * @template A the type of the passed argument
 * @since 4.0.0
 */
export type T<A> = Functors.Filterable<A>;

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
 * @template L the list of predicates
 * @param predicates 
 * @returns 
 * @since 4.0.0 
 */
export const and = <L extends T<any>[]>(...predicates: L) => <A extends any>(value: A) => {
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
 * Predicate.eq(0, 10)      // false
 * Predicate.eq(0, 0)       // true
 * ```
 * 
 * @template A the value type
 * @param a the first value 
 * @param b the second value
 * @returns 
 * @since 4.0.0
 */
export function eq<A>(a: A, b: A): boolean;
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
 * ```
 * 
 * @template A the value type
 * @param a the first value 
 * @returns 
 * @since 4.0.0
 */
export function eq<A>(a: A): Fn.Unary<A, boolean>;
export function eq<A>(a: A, b?: any): any {
  if (arguments.length === 1) {
    return (b: A) => a === b;
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
 * @param x the value to check
 * @returns true if a function signature is comparable to a `T<any>`, false otherwise
 * @since 4.0.0
 */
export const guard: Functors.Guardable<T<unknown>> = (x: unknown): x is T<any> => typeof (x) === 'function' && x.length === 1;

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
 * @template A the predicate's argument type
 * @param p the predicate to invert 
 * @returns the inverted predicate
 * @since 4.0.0
 */
export const invert = <A>(p: T<A>): T<A> => (x: A) => !p(x);

/**
 * Returns true if `b` is not stricly equal to `a`
 * 
 * ```ts
 * import { Predicate } from 'tiinvo';
 * 
 * Predicate.neq(0, 10)       // true
 * Predicate.neq(0, 0)        // false
 * ```
 * 
 * @template A the value type
 * @param a the first value 
 * @param a the second value 
 * @returns 
 * @since 4.0.0
 */
export function neq<A>(a: A, b: A): boolean;
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
 * ```
 * 
 * @template A the value type
 * @param a the first value 
 * @param a the second value 
 * @returns 
 * @since 4.0.0
 */
export function neq<A>(a: A): Fn.Unary<A, boolean>;
export function neq<A>(a: A, b?: any): any {
  if (arguments.length === 1) {
    return (b: A) => a !== b;
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
 * @template L the predicates types
 * @param predicates 
 * @returns 
 * @since 4.0.0
 */
export const none = <L extends T<any>[]>(...predicates: L) => <a extends any>(value: a) => {
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
};

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
 * @template L the predicates types
 * @param predicates 
 * @returns 
 * @since 4.0.0
 */
export const or = <L extends T<any>[]>(...predicates: L) => <a extends any>(value: a) => {
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
};
