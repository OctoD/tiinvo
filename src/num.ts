import { FnBinary, FnUnary, PrimitiveMethodMapper } from './applicative';

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

//#endregion