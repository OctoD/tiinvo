import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';

/**
 * A number type alias
 *
 * @since 4.0.0
 */
export type T = number;

//#region guards

/**
 * Checks (at compile and runtime) if a given parameter `x` is a `number`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo'
 * 
 * const or0 = (x: unknown): t => Num.guard(x) ? x : 0;
 * 
 * or0(10)                  // 10
 * or0(20)                  // 20
 * or0(-1)                  // -1
 * or0(4e12)                // 4e12
 * or0('hello world')       // 0          
 * or0(true)                // 0  
 * or0(false)               // 0  
 * or0({})                  // 0
 * ```
 * 
 * @param x the value to check
 * @group Guardables
 * @since 4.0.0
 */
export const guard: Functors.Guardable<T> = (x): x is T => typeof (x) === 'number';

//#endregion

//#region comparables

/**
 * Compares two numbers `a` and `b`.
 * 
 * Returns:
 * 
 *    - 1 if `a` is greater than `b`
 *    - 0 if `a` is same of `b`
 *    - -1 if `b` is greater than `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.cmp(1, 1)  // 0
 * Num.cmp(1, 0)  // 1
 * Num.cmp(0, 1)  // -1
 * ```
 *  
 * @param a the left compared number
 * @param b the right compared number
 * @returns the comparison result
 *  - 0 if a equals to b
 *  - 1 if a is greater than b
 *  - -1 if a is lesser than b
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T, b: T): Functors.ComparableResult;
/**
 * Compares two numbers `a` and `b`.
 * 
 * Returns:
 * 
 *    - 1 if `a` is greater than `b`
 *    - 0 if `a` is same of `b`
 *    - -1 if `b` is greater than `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const cmp0 = Num.cmp(0)
 * 
 * cmp0(2)   // 1
 * cmp0(0)   // 0
 * cmp0(-2)  // -1
 * ```
 *  
 * @param a the right number to compare
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function cmp(a: T, b?: T): any
{
  const _cmp = (x: T, y: T) => x > y ? 1 : x < y ? -1 : 0;

  if (guard(a) && guard(b))
  {
    return _cmp(a, b);
  }

  return (b: T) => _cmp(b, a);
}
;

/**
 * Returns `true` if two numbers are the same
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.eq(1, 1)  // true
 * Num.eq(1, 0)  // false
 * Num.eq(0, 1)  // false
 * ```
 *  
 * @param a the first number
 * @param b the last number
 * @returns true if a equals to b
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T, b: T): boolean;
/**
 * Returns `true` if two numbers are the same
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const eq1 = Num.eq(1);
 * 
 * eq1(1)  // true
 * eq1(0)  // false
 * ```
 *  
 * @param a the first number
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T): Fn.Unary<T, boolean>;
export function eq(a: T, b?: T): any
{
  return guard(a) && guard(b) ? a === b : (c: T) => eq(a, c);
};

/**
 * Returns true if `a` is greater than `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.gt(5, -2)             // true
 * Num.gt(5, 12)             // false
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns true if `a` is greater than `b`
 * @group Comparables
 * @since 4.0.0
 */
export function gt(a: T, b: T): boolean;
/**
 * Returns a unarty function which once called returns true if `b` is greater than `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const gt5 = Num.gt(5) 
 * 
 * gt5(10)                   // true
 * gt5(-2)                   // false
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function gt(a: T): Fn.Unary<number, boolean>;
export function gt(a: T, b?: any): any
{
  if (guard(b))
  {
    return a > b;
  }

  return (b: any) => b > a;
}

/**
 * Returns true if `a` is lesser than `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.lt(5, -2)             // false
 * Num.lt(5, 12)             // true
 * ```
 * 
 * @param a left number
 * @param b right number
 * @returns true if a is less than b
 * @group Comparables
 * @since 4.0.0
 */
export function lt(a: T, b: T): boolean;
/**
 * Returns a function which once called returns true if `b` is less than `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const lt5 = Num.lt(5) 
 * 
 * lt5(10)                   // true
 * lt5(-2)                   // false
 * ```
 * 
 * @group Comparables
 * @since 4.0.0
 */
export function lt(a: T): Fn.Unary<number, boolean>;
export function lt(a: T, b?: any): any
{
  if (guard(b))
  {
    return a < b;
  }

  return (b: any) => b < a;
}

/**
 * Returns true if `a` is great or equal to `b`.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.gte(5, -2)             // true
 * Num.gte(5, 12)             // false
 * Num.gte(10, 10)            // true
 * ```
 * 
 * @returns true if a is greater or equal to b
 * @group Comparables
 * @since 4.0.0
 */
export function gte(a: T, b: T): boolean;
/**
 * Returns a function which once called returns true if `b` is great or equal to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const gte5 = Num.gte(5) 
 * 
 * gte5(10)                   // false
 * gte5(5)                    // false
 * gte5(-2)                   // true
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function gte(a: T): Fn.Unary<number, boolean>;
export function gte(a: T, b?: any): any
{
  if (guard(b))
  {
    return a >= b;
  }

  return (c: any) => c >= a;
}

/**
 * Returns true if `a` is less or equal to `b`.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.lte(5, -2)             // false
 * Num.lte(5, 12)             // true
 * Num.lte(5, 5)              // true
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns true if a is less or equal than b
 * @group Comparables
 * @since 4.0.0
 */
export function lte(a: T, b: T): boolean;
/**
 * Returns a function which once called returns true if `b` is less or equal to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const lte5 = Num.lte(5) 
 * 
 * lte5(5)                    // true
 * lte5(10)                   // false
 * lte5(-2)                   // true
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function lte(a: T): Fn.Unary<number, boolean>;
export function lte(a: T, b?: any): any
{
  if (guard(b))
  {
    return a <= b;
  }

  return (b: any) => b <= a;
}

/**
 * Returns true if `a` not equal to `b`.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.ne(5, -2)             // true
 * Num.ne(5, 12)             // true
 * Num.ne(5, 5)              // false
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns true if a is not equal to b
 * @group Comparables
 * @since 4.0.0
 */
export function ne(a: T, b: T): boolean;
/**
 * Returns a unary function which once called returns true if `b` not equal to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const ne5 = Num.ne(5) 
 * 
 * ne5(5)                    // false
 * ne5(10)                   // true
 * ne5(-2)                   // true
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function ne(a: T): Fn.Unary<number, boolean>;
export function ne(a: T, b?: any): any
{
  if (guard(b))
  {
    return a !== b;
  }

  return (b: any) => b !== a;
}

//#endregion

//#region mappables

/**
 * Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `Err`.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const toHex = Num.map(x => '0x' + x.toString(16))
 * 
 * toHex(10)      // 0xa
 * toHex("a")     // Error("a is not a number")
 * ``` 
 * 
 * @group Mappables
 * @since 4.0.0
 */
export const map = <b>(m: Functors.Mappable<T, b>) => (a: T) => guard(a) ? m(a) : new Error("a is not a number");

/**
 * Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `b`.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const toHex = Num.mapOr(x => '0x' + x.toString(16), "0x0")
 * 
 * toHex(10)      // 0xa
 * toHex("a")     // 0x0
 * ``` 
 * 
 * @group Mappables
 * @since 4.0.0
 */
export const mapOr = <b>(m: Functors.Mappable<T, b>, b: b) => (a: T) => guard(a) ? m(a) : b;

//#endregion

//#region predicates

/**
 * Returns true if a number `x` is even.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.isEven(10)   // true
 * Num.isEven(91)   // false
 * ```
 * 
 * @group Predicates
 * @since 4.0.0
 */
export const isEven: Functors.Filterable<T> = x => x % 2 === 0;

/**
 * Returns true if a number `x` is odd.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.isOdd(10)   // false
 * Num.isOdd(91)   // true
 * ```
 * 
 * @group Predicates
 * @since 4.0.0
 */
export const isOdd: Functors.Filterable<T> = x => x % 2 !== 0;

/**
 * Returns true if a number `x` is positive.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.isNegative(-1)   // true
 * Num.isNegative(10)   // false
 * ```
 * 
 * @group Predicates
 * @since 4.0.0
 */
export const isNegative: Functors.Filterable<T> = x => x < 0;

/**
 * Returns true if a number `x` is positive.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.isPositive(-1)   // false
 * Num.isPositive(10)   // true
 * ```
 * 
 * @group Predicates
 * @since 4.0.0
 */
export const isPositive: Functors.Filterable<T> = x => x >= 0;

//#endregion

//#region native methods

/**
 * Returns a string containing a number represented in exponential notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toExponential(10, 2)        // "1.00e+1"
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toExponential(a: T, b: T): string;
/**
 * Returns a unary function which returns a string containing a number represented in exponential notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toExponential(10)(2)        // "2.0000000000e+0" 
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toExponential(a: T): Fn.Unary<T, string>;
export function toExponential(a: T, b?: any): any
{
  if (guard(b))
  {
    return a.toExponential(b);
  }

  return (b: T) => b.toExponential(a);
}

/**
 * Returns a string representing a number in fixed-point notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toFixed(10.505, 2)        // "10.51"
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toFixed(a: T, b: T): string;
/**
 * Returns a unary function which returns string representing a number in fixed-point notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toFixed(10.505)(2)        // "2.0000000000"
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toFixed(a: T): Fn.Unary<T, string>;
export function toFixed(a: T, b?: any): any
{
  if (guard(b))
  {
    return a.toFixed(b);
  }

  return (b: T) => b.toFixed(a);
}

/**
 * Returns a string representing a number in fixed-point notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toPrecision(10, 2)        // "10"
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toPrecision(a: T, b: T): string;
/**
 * Returns a unary function which returns a string representing a number in fixed-point notation.
 * 
 * If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toPrecision(10)(2)        // "2.000000000"
 * ```
 * 
 * @group Natives
 * @since 4.0.0
 */
export function toPrecision(a: T): Fn.Unary<T, string>;
export function toPrecision(a: T, b?: any): any
{
  if (guard(b))
  {
    return a.toPrecision(b);
  }

  return (b: T) => b.toPrecision(a);
}

//#endregion

//#region operables

/**
 * Adds `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.add(5, -2)             // 3
 * Num.add(5, 12)             // 17
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the sum
 * @group Operables
 * @since 4.0.0
 */
export function add(a: T, b: T): T;
/**
 * Returns a unary function which adds `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const add5 = Num.add(5) 
 * 
 * add5(5)                    // 10
 * add5(10)                   // 15
 * ```
 * 
 * @param a the right number
 * @retuns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function add(a: T): Fn.Unary<T, T>;
export function add(a: T, b?: T): any
{
  if (guard(b))
  {
    return a + b;
  }

  return (c: T) => c + a;
}

/**
 * Divides `a` by `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.div(4, 2)              // 2
 * Num.div(12, 3)             // 4
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the division
 * @group Operables
 * @since 4.0.0
 */
export function div(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once called divides `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const div2 = Num.div(2) 
 * 
 * div2(4)                    // 2
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function div(a: T): Fn.Unary<T, T>;
export function div(a: T, b?: T): any
{
  if (guard(b))
  {
    return a / b;
  }

  return (c: T) => c / a;
}

/**
 * Returns the modulus of `a % b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.mod(2, 2)             // 0
 * Num.mod(3, 2)             // 1
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the modulus
 * @group Operables
 * @since 4.0.0
 */
export function mod(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once 
 * called returns the modulus of `b % a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const mod2 = Num.mod(2) 
 * 
 * mod2(10)                   // 0
 * mod2(15)                   // 1
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function mod(a: T): Fn.Unary<T, T>;
export function mod(a: T, b?: T): any
{
  if (guard(b))
  {
    return a % b;
  }

  return (c: T) => c % a;
}

/**
 * Multiplies `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.mul(5, -2)             // -10
 * Num.mul(5, 12)             // 60
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the multiplication
 * @group Operables
 * @since 4.0.0
 */
export function mul(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once called multiplies `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const mul5 = Num.mul(5) 
 * 
 * mul5(10)                   // 50
 * ```
 * 
 * @param a the right number
 * @group Operables
 * @since 4.0.0
 */
export function mul(a: T): Fn.Unary<T, T>;
export function mul(a: T, b?: T): any
{
  if (guard(b))
  {
    return a * b;
  }

  return (c: T) => c * a;
}

/**
 * Elevates `a` by `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.pow(2, 3)             // 8
 * Num.pow(3, 2)             // 9
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function pow(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once called elevates `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const pow5 = Num.pow(5) 
 * 
 * pow5(10)                   // 100_000
 * ```
 * 
 * @param a the exponent
 * @group Operables
 * @since 4.0.0
 */
export function pow(a: T): Fn.Unary<T, T>;
export function pow(a: T, b?: T): any
{
  if (guard(b))
  {
    return a ** b;
  }

  return (c: T) => c ** a;
}

/**
 * Root of `a` under `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.root(4, 2)             // 2
 * Num.root(9, 2)             // 3
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function root(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once called returns the root of `b` under `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.root(4, 2)             // 2
 * Num.root(9, 2)             // 3
 * 
 * const root2 = Num.root(2) 
 * 
 * root2(4)                   // 2
 * root2(9)                   // 3
 * ```
 * 
 * @param a the root
 * @group Operables
 * @since 4.0.0
 */
export function root(a: T): Fn.Unary<T, T>;
export function root(a: T, b?: T): any
{
  if (guard(b))
  {
    return a ** (1 / b);
  }

  return (c: T) => c ** (1 / a);
}

/**
 * Subtracts `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.sub(5, -2)             // 7
 * Num.sub(5, 12)             // -7
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function sub(a: T, b: T): T;
/**
 * Returns a `Unary<number, number>` function which once called subtracts `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const sub5 = Num.sub(5) 
 * 
 * sub5(10)                   // 5
 * sub5(-2)                   // -7
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function sub(a: T): Fn.Unary<T, T>;
export function sub(a: T, b?: T): any
{
  if (guard(b))
  {
    return a - b;
  }

  return (c: T) => c - a;
}

//#endregion

//#region sortables

/**
 * Compares two numbers `a` and `b`
 * 
 * Great to sort a numeric array in ASC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const collection = [10, 5, 6, 4, 12, 22, 3];
 * 
 * collection.sort(Num.asc)     // [3, 4, 5, 6, 10, 12, 22]
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the comparison result
 * @group Sortables
 * @since 4.0.0
 */
export function asc(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a `Unary<number, number>` function which once called compares `b` and `a`
 * 
 * Great to sort a numeric array in ASC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const collection = [10, 5, 6, 4, 12, 22, 3];
 * 
 * collection.sort(Num.asc)     // [3, 4, 5, 6, 10, 12, 22]
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Sortables
 * @since 4.0.0
 */
export function asc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function asc(a: T, b?: any): any
{
  if (guard(b))
  {
    return cmp(a, b);
  }

  return (c: T) => cmp(c, a);
}

/**
 * Compares two numbers `b` and `a`
 * 
 * Great to sort a numeric array in DESC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const collection = [10, 5, 6, 4, 12, 22, 3];
 * 
 * collection.sort(Num.desc)     // [22, 12, 10, 6, 5, 4, 3]
 * ```
 * 
 * @param a the left number
 * @param b the right number
 * @returns the comparison result
 * @group Sortables
 * @since 4.0.0
 */
export function desc(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a `Unary<number, number>` function which once called compares `a` and `b`
 * 
 * Great to sort a numeric array in DESC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const collection = [10, 5, 6, 4, 12, 22, 3];
 * 
 * collection.sort(Num.desc)     // [22, 12, 10, 6, 5, 4, 3]
 * ```
 * 
 * @param a the right number
 * @returns the unary function
 * @group Sortables
 * @since 4.0.0
 */
export function desc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function desc(a: T, b?: any): any
{
  if (guard(b))
  {
    return cmp(b, a);
  }

  return (c: T) => cmp(a, c);
}

//#endregion

//#region serializables

/**
 * Returns a number in binary notation.
 * 
 * If the passed argument at runtime is not a number, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toBin(10)        // "0b1010"
 * ```
 * 
 * @param a the number to convert to binary
 * @returns the binary string
 * @group Serializables
 * @since 4.0.0
 */
export const toBin = map(x => '0b' + x.toString(2));

/**
 * Returns a number in hexadecimal notation
 * 
 * If the passed argument at runtime is not a number, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toHex(10)        // "0xa"
 * ```
 * 
 * @param a the number to convert to hexadecimal
 * @returns the hexadecimal string
 * @group Serializables
 * @since 4.0.0
 */
export const toHex = map(x => '0x' + x.toString(16));

/**
 * Returns a number in octal notation
 * 
 * If the passed argument at runtime is not a number, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toOct(10)        // "0o12"
 * ```
 * 
 * @param a the number to convert to octal
 * @returns the octal string
 * @group Serializables
 * @since 4.0.0
 */
export const toOct = map(x => '0o' + x.toString(8));

/**
 * Returns a number in json notation.
 * 
 * If the passed argument at runtime is not a number, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toJSON(10)       // "10"
 * ```
 * 
 * @param a the number to convert to json value
 * @returns the string
 * @group Serializables
 * @since 4.0.0
 */
export const toJSON = map(JSON.stringify);

/**
 * Returns a stringified number.
 * 
 * If the passed argument at runtime is not a number, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.toString(10)       // "10"
 * ```
 * 
 * @param a the number to convert to string
 * @returns the string
 * @group Serializables
 * @since 4.0.0
 */
export const toString = map(String);

//#endregion
