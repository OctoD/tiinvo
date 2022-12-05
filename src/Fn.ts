import type * as Functors from './Functors.js';

//#region types

/**
 * Represents any async function
 */
export type AnyAsyncFn = (...args: any[]) => Promise<any>;

/**
 * Represents any function
 */
export type AnyFn = (...args: any[]) => any;

/**
 * Represents any unary function
 * 
 * @template A the first value type
 * @template R the return type
 * @since 4.0.0
 */
export type Unary<A, R> = (a: A) => R;

/**
 * Represents any binary function
 * 
 * @template A the first value type
 * @template B the second value type
 * @template R the return type
 * @since 4.0.0
 */
export type Binary<A, B, R> = (a: A, b: B) => R;

/**
 * Represents any ternary function
 * 
 * @template A the first value type
 * @template B the second value type
 * @template C the third value type
 * @template R the return type
 * @since 4.0.0
 */
export type Ternary<A, B, C, R> = (a: A, b: B, c: C) => R;

/**
 * Represents any quaternary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Quaternary<A, B, C, D, R> = (a: A, b: B, c: C, d: D) => R;

/**
 * Represents any quinary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Quinary<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E) => R;

/**
 * Represents any senary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template F the 6th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Senary<A, B, C, D, E, F, R> = (a: A, b: B, c: C, d: D, e: E, f: F) => R;

/**
 * Represents any septenary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template F the 6th value type
 * @template G the 7th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Septenary<A, B, C, D, E, F, G, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R;

/**
 * Represents any octonary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template F the 6th value type
 * @template G the 7th value type
 * @template H the 8th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Octonary<A, B, C, D, E, F, G, H, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R;

/**
 * Represents any nonary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template F the 6th value type
 * @template G the 7th value type
 * @template H the 8th value type
 * @template I the 9th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Nonary<A, B, C, D, E, F, G, H, I, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R;

/**
 * Represents any decenary function
 * 
 * @template A the 1th value type
 * @template B the 2th value type
 * @template C the 3th value type
 * @template D the 4th value type
 * @template E the 5th value type
 * @template F the 6th value type
 * @template G the 7th value type
 * @template H the 8th value type
 * @template I the 9th value type
 * @template L the 10th value type
 * @template R the return type
 * @since 4.0.0
 */
export type Decenary<A, B, C, D, E, F, G, H, I, L, R> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, l: L) => R;

/**
 * Represents a generic function T with any arguments and any return value type.
 */
export type T = AnyFn;

//#endregion

/**
 * A function which returns it's first argument.
 * 
 * Use it only as a placeholder
 *
 * @example
 *
 * ```ts
 * import { Fn } from 'tiinvo'
 * 
 * Fn.pass(10)      // 10
 * Fn.pass(20)      // 20
 * ```
 *
 * @since 4.0.0
 */
export const pass = <A>(a: A) => a;

//#region comparables

/**
 * Compares two function signatures and names.
 *
 * @example
 *
 * ```ts
 * import { Fn, Num } from 'tiinvo'
 * 
 * Fn.cmp(Num.add, Num.add) // 0
 * Fn.cmp(Num.add, Num.sub) // -1
 * Fn.cmp(Num.sub, Num.add) // 1
 * ```
 *
 * @param a the first function
 * @param b the second function
 * @returns 
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` equals to `b`
 *  - 1 if `a` is more than `b`
 * @since 4.0.0
 */
export function cmp(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a unary function which compares two function signatures and names.
 *
 * @example
 *
 * ```ts
 * import { Fn, Num } from 'tiinvo'
 * 
 * const cmpMul = Fn.cmp(Num.mul);
 * 
 * cmpMul(Num.mul) // 0
 * cmpMul(Num.sub) // 1
 * cmpMul(Num.add) // -1
 * ```
 *
 * @param a the second function
 * @returns the unary function which checks
 *  - -1 if `b` is less than `a`
 *  - 0 if `b` equals to `a`
 *  - 1 if `b` is more than `a`
 * @since 4.0.0
 */
export function cmp(a: T): Unary<T, Functors.ComparableResult>;
export function cmp(a: T, b?: T): any {
  const _cmp = (x: T, y: T) => {
    const namea = x.name.toLowerCase();
    const nameb = y.name.toLowerCase();

    return Math.min(
      Math.max(
        (x.length > y.length ? 1 : x.length < y.length ? -1 : 0) +
        (namea > nameb ? 1 : namea < nameb ? -1 : 0),
        -1),
      1
    ) as Functors.ComparableResult;
  };

  if (guard(a) && guard(b)) {
    return _cmp(a, b);
  }
  
  return (b: T) => _cmp(b, a);
};

/**
 * Checks if two functions are the same.
 * 
 * It will check that both function have:
 * 
 *    - the same list of arguments
 *    - the same name
 *
 * @example
 *
 * ```ts
 * import { Fn, Num } from 'tiinvo'
 * 
 * Fn.eq(Num.add, Num.add) // true
 * Fn.eq(Num.add, Num.sub) // false
 * Fn.eq(Num.sub, Num.add) // false
 * ```
 *
 * @param a the first function
 * @param b the second function
 * @returns 
 *  - `true` if a equals to `b`
 *  - `false` otherwise
 * @since 4.0.0
 */
export function eq(a: T, b: T): boolean;
/**
 * Returns a unary function which checks if two functions are the same.
 * 
 * It will check that both function have:
 * 
 *    - the same list of arguments
 *    - the same name
 *    - the address in memory
 *
 * @example
 *
 * ```ts
 * import { Fn, Num } from 'tiinvo'
 * 
 * const isadd = Fn.eq(Num.add)
 * 
 * isadd(Num.add) // true
 * isadd(Num.sub) // false
 * isadd(Num.add) // false
 * ```
 *
 * @param a the first function
 * @returns the unary function which accepts a second function and returns
 *  - `true` if `a` equals to `b`
 *  - `false` otherwise
 * @since 4.0.0
 */
export function eq(a: T): Unary<T, boolean>;
export function eq(a: T, b?: T): any {
  if (guard(a) && guard(b)) {
    return a === b && cmp(a, b) === 0;
  }

  return (b: T) => b === a && cmp(b, a) === 0;
}

//#endregion

//#region accessors

/**
 * Returns a function arguments length
 *
 * @example
 *
 * ```ts
 * import { Fn } from 'tiinvo'
 * 
 * Fn.length(Fn.cmp)        // 2
 * Fn.length(Fn.length)     // 1
 * ```
 * 
 * @param x the function
 * @returns arguments count
 * @since 4.0.0
 */
export const length: Functors.Mappable<AnyFn, number> = x => x.length;

/**
 * Returns a function's name
 *
 * @example
 *
 * ```ts
 * import { Fn } from 'tiinvo'
 * 
 * Fn.name(Fn.cmp)        // 'cmp'
 * Fn.name(Fn.name)       // 'name'
 * ```
 *
 * @param x the function
 * @returns the name
 * @since 4.0.0
 */
export const name: Functors.Mappable<AnyFn, string> = x => x.name;

//#region guardables

/**
 * Checks if an argument `x` is `AnyFn`
 *
 * @example
 *
 * ```ts
 * import { Fn } from 'tiinvo'
 * 
 * Fn.guard(10)         // false
 * Fn.guard(() => {})   // true
 * ```
 *
 * @param x the value to guard
 * @returns
 *  - `true` if `x` is a function
 *  - `false` otherwise
 * @since 4.0.0
 */
export const guard = (x: unknown): x is AnyFn => typeof x === 'function';

//#endregion

//#region mappables

/**
 * Maps a value `a` over a list of `Functors.Mappable<a, b>` and returns an array of the returning values
 *
 * @example
 *
 * ```ts
 * import { Fn, Num } from 'tiinvo'
 * 
 * const m = Fn.map(
 *    Num.add(1), 
 *    Num.mul(2), 
 *    Num.sub(3), 
 *    Num.pow(4),
 * )
 * 
 * m(2)   // [3, 4, -1, 16]
 * ```
 *
 * @param ml a list of unary functions which accept the same argument
 * @return an array of the returning values of `ml`
 * @since 4.0.0
 */
export const map = <a, b>(...ml: Functors.Mappable<a, b>[]) => (a: a) => ml.map(f => f(a));

//#endregion
