import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';

export type t = number;

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
 * @since 4.0.0
 */
export const guard: Functors.Guardable<t> = (x): x is t => typeof (x) === 'number';

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
 * Num.cmp(1)(1)  // 0
 * Num.cmp(1)(0)  // -1
 * Num.cmp(0)(1)  // 1
 * ```
 *  
 * @since 4.0.0
 */
export function cmp(a: t, b: t): Functors.ComparableResult;
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
 * Num.cmp(1)(1)  // 0
 * Num.cmp(1)(0)  // -1
 * Num.cmp(0)(1)  // 1
 * ```
 *  
 * @since 4.0.0
 */
export function cmp(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function cmp(a: t, b?: t): any {
  const _cmp = (x: t, y: t) => x > y ? 1 : x < y ? -1 : 0;

  if (guard(a) && guard(b)) {
    return _cmp(a, b);
  }

  return (b: t) => _cmp(b, a);
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
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: t, b: t): boolean;
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
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: t): Fn.Unary<t, boolean>;
export function eq(a: t, b?: t): any {
  return guard(a) && guard(b) ? a === b : (c: t) => eq(a, c);
};

/**
 * Returns true if `a` is greater than `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is greater than `a`
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
 * @group Comparables
 * @since 4.0.0
 */
export function gt(a: t, b: t): boolean;
/**
 * Returns true if `a` is greater than `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is greater than `a`
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
 * @group Comparables
 * @since 4.0.0
 */
export function gt(a: t): Fn.Unary<number, boolean>;
export function gt(a: t, b?: any): any {
  if (guard(b)) {
    return a > b;
  }

  return (b: any) => b > a;
}

/**
 * Returns true if `a` is lesser than `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is lesser than `a`
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
 * @group Comparables
 * @since 4.0.0
 */
export function lt(a: t, b: t): boolean;
/**
 * Returns true if `a` is lesser than `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is lesser than `a`
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
export function lt(a: t): Fn.Unary<number, boolean>;
export function lt(a: t, b?: any): any {
  if (guard(b)) {
    return a < b;
  }

  return (b: any) => b < a;
}

/**
 * Returns true if `a` is great or equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is great or equal to `a`
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
 */
export function gte(a: t, b: t): boolean;
/**
 * Returns true if `a` is great or equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is great or equal to `a`
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
 */
export function gte(a: t): Fn.Unary<number, boolean>;
export function gte(a: t, b?: any): any {
  if (guard(b)) {
    return a >= b;
  }

  return (c: any) => c >= a;
}

/**
 * Returns true if `a` is less or equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is less or equal to `a`
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
 */
export function lte(a: t, b: t): boolean;
/**
 * Returns true if `a` is less or equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` is less or equal to `a`
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
 */
export function lte(a: t): Fn.Unary<number, boolean>;
export function lte(a: t, b?: any): any {
  if (guard(b)) {
    return a <= b;
  }

  return (b: any) => b <= a;
}

/**
 * Returns true if `a` not equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` not equal to `a`
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
 */
export function ne(a: t, b: t): boolean;
/**
 * Returns true if `a` not equal to `b` if `b` is specified, otherwise returns a
 * function which once called returns true if `b` not equal to `a`
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
 */
export function ne(a: t): Fn.Unary<number, boolean>;
export function ne(a: t, b?: any): any {
  if (guard(b)) {
    return a !== b;
  }

  return (b: any) => b !== a;
}

//#endregion

//#region mappables

/**
 * Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `Err`.
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const toHex = Num.map(x => '0x' + x.toString(16))
 * 
 * toHex(10)      // 0xa
 * toHex("a")     // Error("a is not a number")
 * ``` 
 */
export const map = <b>(m: Functors.Mappable<t, b>) => (a: t) => guard(a) ? m(a) : new Error("a is not a number");

/**
 * Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `b`.
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * const toHex = Num.mapOr(x => '0x' + x.toString(16), "0x0")
 * 
 * toHex(10)      // 0xa
 * toHex("a")     // 0x0
 * ``` 
 */
export const mapOr = <b>(m: Functors.Mappable<t, b>, b: b) => (a: t) => guard(a) ? m(a) : b;

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
 * @since 4.0.0
 */
export const isEven: Functors.Filterable<t> = x => x % 2 === 0;

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
 * @since 4.0.0
 */
export const isOdd: Functors.Filterable<t> = x => x % 2 !== 0;

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
 * @since 4.0.0
 */
export const isNegative: Functors.Filterable<t> = x => x < 0;

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
 * @since 4.0.0
 */
export const isPositive: Functors.Filterable<t> = x => x >= 0;

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
 * Num.toExponential(10)(2)        // "2.0000000000e+0" 
 * ```
 * 
 * @since 4.0.0
 */
export function toExponential(a: t, b: t): string;
export function toExponential(a: t): Fn.Unary<t, string>;
export function toExponential(a: t, b?: any): any {
  if (guard(b)) {
    return a.toExponential(b);
  }

  return (b: t) => b.toExponential(a);
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
 * Num.toFixed(10.505)(2)        // "2.0000000000"
 * ```
 * 
 * @since 4.0.0
 */
export function toFixed(a: t, b: t): string;
export function toFixed(a: t): Fn.Unary<t, string>;
export function toFixed(a: t, b?: any): any {
  if (guard(b)) {
    return a.toFixed(b);
  }

  return (b: t) => b.toFixed(a);
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
 * Num.toPrecision(10)(2)        // "2.000000000"
 * ```
 * 
 * @since 4.0.0
 */
export function toPrecision(a: t, b: t): string;
export function toPrecision(a: t): Fn.Unary<t, string>;
export function toPrecision(a: t, b?: any): any {
  if (guard(b)) {
    return a.toPrecision(b);
  }

  return (b: t) => b.toPrecision(a);
}

//#endregion

//#region operables

/**
 * Adds `a` to `b` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called adds `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.add(5, -2)             // 3
 * Num.add(5, 12)             // 17
 * 
 * const add5 = Num.add(5) 
 * 
 * add5(10)                   // 15
 * ```
 */
export function add(a: t, b: t): t;
export function add(a: t): Fn.Unary<t, t>;
export function add(a: t, b?: t): any {
  if (guard(b)) {
    return a + b;
  }

  return (c: t) => c + a;
}

/**
 * Divides `a` by `b` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called divides `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.div(4, 2)              // 2
 * Num.div(12, 3)             // 4
 * 
 * const div2 = Num.div(2) 
 * 
 * div2(4)                    // 2
 * ```
 */
export function div(a: t, b: t): t;
export function div(a: t): Fn.Unary<t, t>;
export function div(a: t, b?: t): any {
  if (guard(b)) {
    return a / b;
  }

  return (c: t) => c / a;
}

/**
 * Returns the modulus of `a % b` if `b` parameter is passed, 
 * otherwise returns a `Unary<number, number>` 
 * function which once called returns the modulus of `b % a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.mod(2, 2)             // 0
 * Num.mod(3, 2)             // 1
 * 
 * const mod2 = Num.mod(2) 
 * 
 * mod2(10)                   // 0
 * mod2(15)                   // 1
 * ```
 */
export function mod(a: t, b: t): t;
export function mod(a: t): Fn.Unary<t, t>;
export function mod(a: t, b?: t): any {
  if (guard(b)) {
    return a % b;
  }

  return (c: t) => c % a;
}

/**
 * Multiplies `a` to `b` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called multiplies `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.mul(5, -2)             // -10
 * Num.mul(5, 12)             // 60
 * 
 * const mul5 = Num.mul(5) 
 * 
 * mul5(10)                   // 50
 * ```
 */
export function mul(a: t, b: t): t;
export function mul(a: t): Fn.Unary<t, t>;
export function mul(a: t, b?: t): any {
  if (guard(b)) {
    return a * b;
  }

  return (c: t) => c * a;
}

/**
 * Elevates `a` by `b` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called elevates `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.pow(2, 3)             // 8
 * Num.pow(3, 2)             // 9
 * 
 * const pow5 = Num.pow(5) 
 * 
 * pow5(10)                   // 100_000
 * ```
 */
export function pow(a: t, b: t): t;
export function pow(a: t): Fn.Unary<t, t>;
export function pow(a: t, b?: t): any {
  if (guard(b)) {
    return a ** b;
  }

  return (c: t) => c ** a;
}

/**
 * Square root of `a` under `b` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called returns the root of `b` under `a`
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
 */
export function root(a: t, b: t): t;
export function root(a: t): Fn.Unary<t, t>;
export function root(a: t, b?: t): any {
  if (guard(b)) {
    return a ** (1 / b);
  }

  return (c: t) => c ** (1 / a);
}

/**
 * Subtracts `b` to `a` if both specified, otherwise returns a `Unary<number, number>` 
 * function which once called subtracts `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { Num } from 'tiinvo';
 * 
 * Num.sub(5, -2)             // 7
 * Num.sub(5, 12)             // -7
 * 
 * const sub5 = Num.sub(5) 
 * 
 * sub5(10)                   // 5
 * sub5(-2)                   // -7
 * ```
 */
export function sub(a: t, b: t): t;
export function sub(a: t): Fn.Unary<t, t>;
export function sub(a: t, b?: t): any {
  if (guard(b)) {
    return a - b;
  }

  return (c: t) => c - a;
}

//#endregion

//#region sortables

/**
 * Compares two numbers `a` and `b` if `b` is defined, otherwise returns a 
 * `Unary<number, number>` function which once called compares `b` and `a`
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
 * @since 4.0.0
 */
export function asc(a: t, b: t): Functors.ComparableResult;
export function asc(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function asc(a: t, b?: any): any {
  if (guard(b)) {
    return cmp(a, b);
  }

  return (c: t) => cmp(c, a);
}

/**
 * Compares two numbers `b` and `a` if `b` is defined, otherwise returns a 
 * `Unary<number, number>` function which once called compares `a` and `b`
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
 * @since 4.0.0
 */
export function desc(a: t, b: t): Functors.ComparableResult;
export function desc(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function desc(a: t, b?: any): any {
  if (guard(b)) {
    return cmp(b, a);
  }

  return (c: t) => cmp(a, c);
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
 * @since 4.0.0
 */
export const toString = map(String);

//#endregion
