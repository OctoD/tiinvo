import { check, FnBinary, FnUnary, PrimitiveMethodMapper } from './applicative';

const map: PrimitiveMethodMapper<number> = key => (...args) => value => (Number.prototype[key] as any).apply(value, args);

//#region natives methods mapping

/**
 * Returns a string containing a number represented in exponential notation.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { num } from 'tiinvo';
 * ```
 */
export const toExponential = map(`toExponential`);
/**
 * Returns a string representing a number in fixed-point notation.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { num } from 'tiinvo';
 * ```
 */
export const toFixed = map(`toFixed`);
/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { num } from 'tiinvo';
 * ```
 */
export const toPrecision = map(`toPrecision`);
/**
 * Converts a numeric to a string type
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { num } from 'tiinvo';
 * ```
 */
export const toString = map(`toString`);

//#endregion

//#region predicates

export const equals = (comparator: number) => (arg: number) => arg === comparator;
export const greaterthan = (comparator: number) => (arg: number) => arg > comparator;
export const greaterequalthan = (comparator: number) => (arg: number) => arg >= comparator;
export const lessthan = (comparator: number) => (arg: number) => arg < comparator;
export const lessequalthan = (comparator: number) => (arg: number) => arg <= comparator;

export const inrange = (min: number, max: number) => (arg: number) => min <= arg && max >= arg;
export const outofrange = (min: number, max: number) => (arg: number) => min > arg || max < arg;

export const iseven = (arg: number) => arg % 2 === 0;
export const isodd = (arg: number) => arg % 2 !== 0;

//#region 

//#region unary functions

export type NumberUnaryFn = FnUnary<number, FnUnary<number, number>>;

export const uadd: NumberUnaryFn = a => b => a + b;
export const udivide: NumberUnaryFn = a => b => b / a;
export const umax: NumberUnaryFn = a => b => Math.max(a, b);
export const umin: NumberUnaryFn = a => b => Math.min(a, b);
export const umultiply: NumberUnaryFn = a => b => a * b;
export const upow: NumberUnaryFn = a => b => b ** a;
export const uremainder: NumberUnaryFn = a => b => b % a;
export const uroot: NumberUnaryFn = a => b => b ** (1 / a);
export const usubtract: NumberUnaryFn = a => b => b - a;

export const urandomint: NumberUnaryFn = min => max => Math.floor(Math.random() * (max - min + 1)) + min;
export const urandomfloat: NumberUnaryFn = min => max => (Math.random() * (max - min + 1)) + min;

//#endregion

//#region binary functions

export type NumberBinaryFn = FnBinary<number, number, number>;

export const badd: NumberBinaryFn = (a, b) => a + b;
export const bdivide: NumberBinaryFn = (a, b) => a / b;
export const bmultiply: NumberBinaryFn = (a, b) => a * b;
export const bmax: NumberBinaryFn = (a, b) => Math.max(a, b)
export const bmin: NumberBinaryFn = (a, b) => Math.min(a, b)
export const bpow: NumberBinaryFn = (a, b) => a ** b;
export const bremainder: NumberBinaryFn = (a, b) => a % b;
export const broot: NumberBinaryFn = (a, b) => a ** (1 / b);
export const bsubtract: NumberBinaryFn = (a, b) => a - b;

export const brandomint: NumberBinaryFn = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const brandomfloat: NumberBinaryFn = (min, max) => (Math.random() * (max - min + 1)) + min;

//#endregion

//#region ranges

export type NumberRangeUnaryFn = FnUnary<number, FnUnary<number, number[]>>
export type NumberRangeBinaryFn = FnBinary<number, number, number[]>

/**
 * Returns an array for the given numeric range. Each number in range is integer.
 * It throws if `min` is greater than `max`.
 * Note: the range is always inclusive, so if you set the min to `0` and max to `5`, you
 * will get all integer numbers between `0` and `5 `included.
 * 
 * @since 2.13.0
 * @example
 * 
 * ```ts
 * import { num } from 'tiinvo';
 * 
 * num.brangeint(0, 5) // [0, 1, 2, 3, 4, 5];
 * ```
 * 
 * @param min 
 * @param max 
 * @returns {number[]}
 */
export const brangeint: NumberRangeBinaryFn = (min, max) => {
  const count = check(min < max, 'urangeint min must be less than max')(max - min);
  const range: number[] = [];
  while (range.length <= count) range.push(min + range.length);
  return range;
}

/**
 * The unary version for `num.brangeint`.
 * First function accepts the `min`, returned function accepts `max`.
 * 
 * @since 2.13.0
 * @param min 
 * @returns {(arg: number) => number[]}
 */
export const urangeint: NumberRangeUnaryFn = min => max => brangeint(min, max);

/**
 * The reversed unary version for `num.brangeint`.
 * First function accepts the `max`, returned function accepts `min`.
 * 
 * @since 2.13.0
 * @param min 
 * @returns {(arg: number) => number[]}
 */
export const urangeint2: NumberRangeUnaryFn = max => min => brangeint(min, max);

//#endregion

//#region sortables

/**
 * Sorts numbers ascending
 * @param a 
 * @param b 
 * @returns 
 */
export const sortasc = (a: number, b: number) => a - b;

/**
 * Sorts numbers descending
 * @param a 
 * @param b 
 * @returns 
 */
export const sortdesc = (a: number, b: number) => b - a;

//#endregion