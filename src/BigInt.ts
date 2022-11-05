import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';

export type t = bigint;

//#region guards

/**
 * Checks if a parameter `x` is a `BigInt`
 *
 * @example
 *
 * ```ts
 * import { BigInt } from 'tiinvo'
 * 
 * BigInt.guard(10)     // false
 * BigInt.guard(10n)    // true
 * ```
 *
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t => typeof x === 'bigint';

//#endregion

//#region comparables

/**
 * Compares two `BigInt` `a` and `b`
 * 
 * returns
 * 
 * - -1 if `a` is less than `b`
 * - 0 if `a` is equal to `b`
 * - 1 if `a` is more than `b`
 *
 * @example
 *
 * ```ts
 * import { BigInt } from 'tiinvo'
 * 
 * BigInt.cmp(1n, 0n)       // 1
 * BigInt.cmp(0n, 0n)       // 0
 * BigInt.cmp(0n, 1n)       // -1
 * ```
 *
 * @since 4.0.0
 */
export const cmp: Functors.Comparable<t> = (a, b) => a < b ? -1 : a > b ? 1 : 0;

/**
 * Checks if `a` and `b` are equal
 *
 * @example
 *
 * ```ts
 * import { BigInt } from 'tiinvo'
 * 
 * BigInt.eq(10n, 10n)              // true
 * BigInt.eq(10n, 5n)               // false
 * BigInt.eq(10n, 10 as any)        // false
 * BigInt.eq(10n)(10n)              // true
 * BigInt.eq(10n)(5n)               // false
 * BigInt.eq(10n)(10 as any)        // false
 * ```
 *
 * @since 4.0.0
 */
export function eq(a: t, b: t): boolean;
export function eq(a: t): Fn.Unary<t, boolean>;
export function eq(a: t, b?: t): any {
  if (arguments.length === 2) {
    return guard(a) && guard(b) && a === b;
  }

  return (x: t) => guard(a) && guard(x) && x === a;
}

//#endregion

//#region mappables

/**
 * Maps a bigint `a` to a value `Result.t<b>` if a is `bigint`, otherwise returns `Err`.
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.map(x => '0x' + x.toString(16))
 * 
 * toHex(10n)       // "0xa"
 * toHex("a")       // Error("a is not a bigint")
 * ``` 
 */
export const map = <b>(m: Functors.Mappable<t, b>) => (a: t) => guard(a) ? m(a) : new Error("a is not a bigint");

/**
 * Maps a bigint `a` to a value `Result.t<b>` if a is `number`, otherwise returns `b`.
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0")
 * 
 * toHex(10n)      // "0xa"
 * toHex("a")      // "0x0"
 * ``` 
 */
export const mapOr = <b>(m: Functors.Mappable<t, b>, b: b) => (a: t) => guard(a) ? m(a) : b;

//#endregion

//#region operables

/**
 * Adds `a` to `b` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called adds `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.add(5n, -2n)             // 3n
 * BigInt.add(5n, 12n)             // 17n
 * 
 * const add5 = BigInt.add(5n) 
 * 
 * add5(10n)                   // 15n
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
 * Divides `a` by `b` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called divides `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.div(4n, 2n)              // 2n
 * BigInt.div(12n, 3n)             // 4n
 * 
 * const div2 = BigInt.div(2n) 
 * 
 * div2(4n)                    // 2n
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
 * otherwise returns a `Unary<t, t>` 
 * function which once called returns the modulus of `b % a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.mod(2n, 2n)             // 0n
 * BigInt.mod(3n, 2n)             // 1n
 * 
 * const mod2 = BigInt.mod(2n) 
 * 
 * mod2(10n)                   // 0n
 * mod2(15n)                   // 1n
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
 * Multiplies `a` to `b` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called multiplies `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.mul(5n, -2n)             // -10n
 * BigInt.mul(5n, 12n)             // 60n
 * 
 * const mul5 = BigInt.mul(5n) 
 * 
 * mul5(10n)                   // 50n
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
 * Elevates `a` by `b` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called elevates `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.pow(2n, 3n)             // 8n
 * BigInt.pow(3n, 2n)             // 9n
 * 
 * const pow5 = BigInt.pow(5n) 
 * 
 * pow5(10n)                   // 100_000n
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
 * Square root of `a` under `b` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called returns the root of `b` under `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.root(4n, 2n)             // 2n
 * BigInt.root(9n, 2n)             // 3n
 * 
 * const root2 = BigInt.root(2n) 
 * 
 * root2(4n)                   // 2n
 * root2(9n)                   // 3n
 * ```
 */
export function root(a: t, b: t): t;
export function root(a: t): Fn.Unary<t, t>;
export function root(a: t, b?: t): any {
  const _r = (base: t, root: t) => {
    let s = base + 1n;
    let k1 = root - 1n;
    let u = base;
    while (u < s) {
      s = u;
      u = ((u * k1) + base / (u ** k1)) / root;
    }
    return s;
  };

  if (guard(b) && guard(a)) {
    return _r(a, b);
  }

  return (c: t) => _r(c, a);
}

/**
 * Subtracts `b` to `a` if both specified, otherwise returns a `Unary<t, t>` 
 * function which once called subtracts `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.sub(5n, -2n)             // 7n
 * BigInt.sub(5n, 12n)             // -7n
 * 
 * const sub5 = BigInt.sub(5n) 
 * 
 * sub5(10n)                   // 5n
 * sub5(-2n)                   // -7n
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
 * import { BigInt } from 'tiinvo';
 * 
 * const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];
 * 
 * collection.sort(BigInt.asc)     // [3n, 4n, 5n, 6n, 10n, 12n, 22n]
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
 * import { BigInt } from 'tiinvo';
 * 
 * const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];
 * 
 * collection.sort(BigInt.desc)     // [22n, 12n, 10n, 6n, 5n, 4n, 3n]
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
 * Returns a bigint in binary notation.
 * 
 * If the passed argument at runtime is not a bigint, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.toBin(10n)        // "0b1010"
 * ```
 * 
 * @since 4.0.0
 */
export const toBin = map(x => '0b' + x.toString(2));

/**
 * Returns a bigint in hexadecimal notation
 * 
 * If the passed argument at runtime is not a bigint, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.toHex(10n)        // "0xa"
 * ```
 * 
 * @since 4.0.0
 */
export const toHex = map(x => '0x' + x.toString(16));

/**
 * Returns a bigint in octal notation
 * 
 * If the passed argument at runtime is not a bigint, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.toOct(10n)        // "0o12"
 * ```
 * 
 * @since 4.0.0
 */
export const toOct = map(x => '0o' + x.toString(8));

/**
 * Returns a bigint in json notation.
 * 
 * If the passed argument at runtime is not a bigint, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.toJSON(10n)       // "10"
 * ```
 * 
 * @since 4.0.0
 */
export const toJSON = map(x => JSON.stringify(Number(x)));

/**
 * Returns a stringified number.
 * 
 * If the passed argument at runtime is not a bigint, an Error will be returned.
 * 
 * @example 
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.toString(10n)       // "10"
 * ```
 * 
 * @since 4.0.0
 */
export const toString = map(String);

 //#endregion
