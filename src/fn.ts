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
 */
export type Unary<a, r> = (a: a) => r;

/**
 * Represents any binary function
 */
export type Binary<a, b, r> = (a: a, b: b) => r;

/**
 * Represents any ternary function
 */
export type Ternary<a, b, c, r> = (a: a, b: b, c: c) => r;

/**
 * Represents any quaternary function
 */
export type Quaternary<a, b, c, d, r> = (a: a, b: b, c: c, d: d) => r;

/**
 * Represents any quinary function
 */
export type Quinary<a, b, c, d, e, r> = (a: a, b: b, c: c, d: d, e: e) => r;

/**
 * Represents any senary function
 */
export type Senary<a, b, c, d, e, f, r> = (a: a, b: b, c: c, d: d, e: e, f: f) => r;

/**
 * Represents any septenary function
 */
export type Septenary<a, b, c, d, e, f, g, r> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g) => r;

/**
 * Represents any octonary function
 */
export type Octonary<a, b, c, d, e, f, g, h, r> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h) => r;

/**
 * Represents any nonary function
 */
export type Nonary<a, b, c, d, e, f, g, h, i, r> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i) => r;

/**
 * Represents any decenary function
 */
export type Decenary<a, b, c, d, e, f, g, h, i, l, r> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, l: l) => r;

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
export const pass = <a>(a: a) => a;

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
 * @since 4.0.0
 */
export function cmp(a: T, b: T): Functors.ComparableResult;
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
 *    - the address in memory
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
 * @since 4.0.0
 */
export const map = <a, b>(...ml: Functors.Mappable<a, b>[]) => (a: a) => ml.map(f => f(a));

//#endregion
