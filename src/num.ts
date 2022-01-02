import type * as f from './functors';
import type * as fn from './fn';

/**
 * Checks if the given value is a number.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.guard(10)) // true
 * console.log(n.guard('')) // false
 * ```
 * 
 * @since 3.0.0
 */
export const guard = (value => typeof value === 'number') as f.guard<number>;

/**
 * Compares two numbers.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.compare(10, 5)) // 1
 * console.log(n.compare(5, 10)) // -1
 * console.log(n.compare(5, 5)) // 0
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const cmp: f.comparableE<number, number> = (a, b): -1 | 0 | 1 => a === b ? 0 : a < b ? -1 : 1;

/**
 * Returns true if is even
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.isEven(10)) // true
 * console.log(n.isEven(11)) // false
 * ```
 * 
 * @param n 
 * @returns 
 */
export const isEven: f.predicateE<number> = n => n % 2 === 0;

/**
 * Returns true if is odd
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.isOdd(10)) // false
 * console.log(n.isOdd(11)) // true
 * ```
 * 
 * @param n 
 * @returns 
 */
export const isOdd: f.predicateE<number> = n => n % 2 !== 0;

//#region sortables

/**
 * Used to sort numbers asceding.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * const array = [10, 5, 3, 1];
 * 
 * console.log(array.sort(n.asc)) // [1, 3, 5, 10]
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const asc: f.comparableE<number, number> = (a, b) => cmp(a, b);

/**
 * Used to sort numbers descending.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * const array = [1, 5, 3, 10];
 * 
 * console.log(array.sort(n.desc)) // [10, 5, 3, 1]
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const desc: f.comparableE<number, number> = (a, b) => cmp(b, a);

//#endregion

//#region comparators

export type unarypredicate = fn.unary<number, f.predicateE<number>>;

/**
 * Returns true if two numbers are equal
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.eq(10, 10)) // true
 * console.log(n.eq(10, 11)) // false
 * ```
 * 
 * @param a 
 * @returns 
 */
export const eq: unarypredicate = a => b => cmp(a, b) === 0;
/**
 * Returns true if b is greater or equal to a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.gte(10)(10)) // true
 * console.log(n.gte(10)(11)) // true
 * console.log(n.gte(10)(9)) // false
 * ```
 * @param a 
 * @returns 
 */
export const ge: unarypredicate = a => b => cmp(a, b) <= 0;
/**
 * Returns true if b is greater than a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.gt(10)(10)) // false
 * console.log(n.gt(10)(11)) // true
 * console.log(n.gt(10)(9)) // false
 * ```
 * 
 * @param a 
 * @returns 
 */
export const gt: unarypredicate = a => b => cmp(a, b) === -1;
/**
 * Returns true if b is less or equal to a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.lt(5)(10)) // false
 * console.log(n.lt(10)(10)) // true
 * console.log(n.lt(10)(5)) // true
 * ```
 * 
 * @param a 
 * @returns 
 */
export const le: unarypredicate = a => b => cmp(a, b) >= 0;
/**
 * Returns true if b is less than a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.lt(5)(10)) // false
 * console.log(n.lt(10)(10)) // false
 * console.log(n.lt(10)(5)) // true
 * ```
 * 
 * @param a 
 * @returns 
 */
export const lt: unarypredicate = a => b => cmp(a, b) === 1;
/**
 * Returns true if b is not equal to a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.ne(10)(10)) // false
 * console.log(n.ne(10)(11)) // true
 * ```
 * 
 * @param a 
 * @returns 
 */
export const ne: unarypredicate = a => b => cmp(a, b) !== 0;

//#endregion

//#region native methods

/**
 * Returns a string containing a number represented in exponential notation.
 * @param n 
 * @returns 
 */
export const toExponential = (n: number) => n.toExponential(0);
/**
 * Returns a string containing a number represented in exponential notation.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toExponential(10)(1)) // '1.0000000000e+1'
 * ```
 * 
 * @param fractionDigits 
 * @returns 
 */
export const toExponentialF = (fractionDigits: number) => (n: number) => n.toExponential(fractionDigits);

/**
 * Returns a string representing a number in fixed-point notation.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toFixed(1)) // '1.00'
 * ```
 * 
 * @param n 
 * @returns 
 */
export const toFixed = (n: number) => n.toFixed(2);
/**
 * Returns a string representing a number in fixed-point notation.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toFixed(10)(1)) // '1.0000000000'
 * ```
 * @param fractionDigits 
 * @returns 
 */
export const toFixedF = (fractionDigits: number) => (n: number) => n.toFixed(fractionDigits);
/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toPrecision(1)) // '1.0'
 * ```
 * @param n 
 * @returns 
 */
export const toPrecision = (n: number) => n.toPrecision(2);
/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toPrecision(10)(1)) // '1.0000000000'
 * ```
 * @param precision 
 * @returns 
 */
export const toPrecisionP = (precision: number) => (n: number) => n.toPrecision(precision);
/**
 * Returns a string representation of a number.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toString()) // '1'
 * ```
 * @param n 
 * @returns 
 */
export const toString = (n: number) => n.toString();
/**
 * Returns a string representation of a number.
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.toString(16)(4bc)) // '4bc'
 * ```
 * @param radix 
 * @returns 
 */
export const toStringR = (radix: number) => (n: number) => n.toString(radix);


//#endregion

//#region unary

export type unaryop = fn.unary<number, fn.unary<number, number>>;
/**
 * Adds b to a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.uadd(10)(5)) // 15
 * ```
 * @param a 
 * @returns 
 */
export const uadd: unaryop = a => b => a + b;
/**
 * Divides b by a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.udiv(10)(5)) // 2
 * ```
 * @param a 
 * @returns 
 */
export const udiv: unaryop = a => b => b / a;
/**
 * Returns the modulus of b by a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.umod(10)(5)) // 5
 * ```
 * @param a 
 * @returns 
 */
export const umod: unaryop = a => b => b % a;
/**
 * Multiplies b by a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.umul(10)(5)) // 50
 * ```
 * @param a 
 * @returns 
 */
export const umul: unaryop = a => b => a * b;
/**
 * Exponentiates b by a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.upow(3)(5)) // 125
 * ```
 * @param a 
 * @returns 
 */
export const upow: unaryop = a => b => Math.pow(b, a);
/**
 * Returns a random number between b and a (inclusive)
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.urand(10)(5)) // 5
 * ```
 * @param a 
 * @returns 
 */
export const urand: unaryop = a => b => Math.random() * (a - b) + b;
/**
 * Returns the root of b by a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.uroot(2)(25)) // 5
 * ```
 * @param a 
 * @returns 
 */
export const uroot: unaryop = a => b => Math.pow(b, 1 / a);
/**
 * Subtracts a from b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.usub(10)(5)) // -5
 * ```
 * @param a 
 * @returns 
 */
export const usub: unaryop = a => b => b - a;


//#endregion

//#region binary

export type binaryop = fn.binary<number, number, number>
/**
 * Adds a and b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.badd(10, 5)) // 15
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const badd: binaryop = (a, b) => a + b;
/**
 * Divides a by b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.bdiv(10, 5)) // 2
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bdiv: binaryop = (a, b) => a / b;
/**
 * Returns the modulus of a by b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.bmod(10, 5)) // 0
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bmod: binaryop = (a, b) => a % b;
/**
 * Multiplies a by b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.bmul(10, 5)) // 50
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bmul: binaryop = (a, b) => a * b;
/**
 * Elevates a to the power of b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.bpow(3, 5)) // 125
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bpow: binaryop = (a, b) => Math.pow(a, b);
/**
 * Returns a random number between a and b (inclusive)
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.brand(10, 5)) // 5
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const brand: binaryop = (a, b) => Math.random() * (b - a) + a;
/**
 * Returns the root of a by b
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.broot(25, 2)) // 5
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const broot: binaryop = (a, b) => Math.pow(a, 1 / b);
/**
 * Subtracts b from a
 * 
 * ```typescript
 * import * as n from 'tiinvo/num';
 * 
 * console.log(n.bsub(10, 5)) // 5
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bsub: binaryop = (a, b) => a - b;

//#endregion
