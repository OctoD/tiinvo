import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';
import type * as Result from './Result.js';

/**
 * Represents a very large integer.
 * 
 * @since 4.0.0
 */
export type T = bigint;

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
 * @param x the parameter to check
 * @returns returns true if is a bigint, false otherwise
 * @group Guards
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T => typeof x === 'bigint';

//#endregion

//#region comparables

/**
 * Compares two `BigInt` `a` and `b`
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
 * @param a the first bigint
 * @param a the second bigint
 * @returns 
 * - -1 if `a` is less than `b`
 * - 0 if `a` is equal to `b`
 * - 1 if `a` is more than `b`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a unary function which compares two `BigInt` `b` and `a`
 * 
 * @example
 *
 * ```ts
 * import { BigInt } from 'tiinvo'
 * 
 * const cmp0 = BigInt.cmp(0n)
 * 
 * cmp0(0n)      // 0
 * cmp0(1n)      // -1
 * cmp0(-1n)     // 1
 * ```
 * 
 * @param a the first bigint
 * @param a the second bigint
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function cmp(a: T, b?: T): any {
  if (guard(a) && guard(b)) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  return (b: T) => a < b ? -1 : a > b ? 1 : 0;
}

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
 * ```
 *
 * @param a the first bigint
 * @param b the second bigint
 * @returns true if two bigints are equal
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T, b: T): boolean;
/**
 * Returns a unary function which checks if `b` and `a` are equal
 *
 * @example
 *
 * ```ts
 * import { BigInt } from 'tiinvo'
 * 
 * BigInt.eq(10n)(10n)              // true
 * BigInt.eq(10n)(5n)               // false
 * BigInt.eq(10n)(10 as any)        // false
 * ```
 *
 * @param a the first bigint
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T): Fn.Unary<T, boolean>;
export function eq(a: T, b?: T): any {
  if (arguments.length === 2) {
    return guard(a) && guard(b) && a === b;
  }

  return (x: T) => guard(a) && guard(x) && x === a;
}

//#endregion

//#region mappables

/**
 * Maps a bigint `a` to a value `Result.Ok<b>` if a is `bigint`, 
 * otherwise returns `Result.Err`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.map(x => '0x' + x.toString(16))
 * 
 * BigInt.map(10n, x => '0x' + x.toString(16))       // "0xa"
 * BigInt.map("a", x => '0x' + x.toString(16))       // TypeError("a is not a bigint")
 * ``` 
 * 
 * @template B the mapped value
 * @param a the bigint
 * @param m the mappable functor
 * @returns the mapped value or TypeError if a is not a bigint
 * @group Mappables
 * @since 4.0.0
 */
export function map<B>(a: T, m: Functors.Mappable<T, B>): Result.t<B>;
/**
 * Returns a unary function which maps a bigint `a` to 
 * a value `Result.Ok<b>` if a is `bigint`, otherwise returns `Result.Err`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.map(x => '0x' + x.toString(16))
 * 
 * toHex(10n)       // "0xa"
 * toHex("a")       // TypeError("a is not a bigint")
 * ``` 
 * 
 * @template B the mapped value
 * @param a the mappable functor
 * @returns the unary function
 * @group Mappables
 * @since 4.0.0
 */
export function map<B>(a: Functors.Mappable<T, B>): Fn.Unary<T, Result.t<B>>;
export function map<B>(a: T | Functors.Mappable<T, B>, m?: Functors.Mappable<T, B>): any {
  if (guard(a) && typeof m === 'function') {
    return m(a);
  } else if (typeof a === 'function') {
    return (b: T) => guard(b) ? a(b) : new TypeError("a is not a bigint");
  }

  return new TypeError("a is not a bigint and m is not a Mappable functor");
};

/**
 * Maps a bigint `a` to a value of type `B` if a is `bigint`, otherwise returns `b`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0")
 * 
 * toHex(10n)      // "0xa"
 * toHex("a")      // "0x0"
 * ``` 
 * 
 * @template B the mapped value type
 * @param a the bigint
 * @param m the mappable functor
 * @param b the fallback value
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<B>(a: T, m: Functors.Mappable<T, B>, b: B): B;
/**
 * Returns a unary function which maps a bigint `b` to a value of type `B` if a is `bigint`, otherwise returns `m`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0")
 * 
 * toHex(10n)      // "0xa"
 * toHex("a")      // "0x0"
 * ``` 
 * 
 * @template B the mapped value type
 * @param a the bigint
 * @param m the mappable functor
 * @returns the unary function
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<B>(a: Functors.Mappable<T, B>, m: B): Fn.Unary<T, B>;
export function mapOr<B>(a: T | Functors.Mappable<T, B>, m: any, b?: B): any {
  if (typeof m === 'function') {
    return guard(a) ? m(a) : b;
  } else if (typeof a === 'function') {
    return (c: T) => guard(c) ? a(c) : m;
  }

  return b;
}

//#endregion

//#region operables

/**
 * Adds `a` to `b` 
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
 * 
 * @param a - the first bigint
 * @param b - the second bigint
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function add(a: T, b: T): T;
/**
 * Returns a unary function which adds `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const add5 = BigInt.add(5n) 
 * 
 * add5(10n)                   // 15n
 * ```
 * 
 * @param a - the first bigint
 * @returns {Unary.t<T, T>}
 * @group Operables
 * @since 4.0.0
 */
export function add(a: T): Fn.Unary<T, T>;
export function add(a: T, b?: T): any {
  if (guard(b)) {
    return a + b;
  }

  return (c: T) => c + a;
}

/**
 * Divides `a` by `b`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.div(4n, 2n)              // 2n
 * BigInt.div(12n, 3n)             // 4n
 * ```
 * 
 * @param a first value (top of division)
 * @param b second value (bottom of division)
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function div(a: T, b: T): T;
/**
 * Returns a unary function which divides `a` by `b`.
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.div(4n, 2n)              // 2n
 * BigInt.div(12n, 3n)             // 4n
 * ```
 * 
 * @param a second value (bottom of division)
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function div(a: T): Fn.Unary<T, T>;
export function div(a: T, b?: T): any {
  if (guard(b)) {
    return a / b;
  }

  return (c: T) => c / a;
}

/**
 * Returns the remainder of the division of `a` by `b`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.mod(2n, 2n)             // 0n
 * BigInt.mod(3n, 2n)             // 1n
 * ```
 * 
 * @param a the value
 * @param b the modulus
 * @returns the remainder
 * @group Operables
 * @since 4.0.0
 */
export function mod(a: T, b: T): T;
/**
 * Returns a unary function which returns the remainder of the division of `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const mod2 = BigInt.mod(2n) 
 * 
 * mod2(10n)                   // 0n
 * mod2(15n)                   // 1n
 * ```
 * 
 * @param a the value
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function mod(a: T): Fn.Unary<T, T>;
export function mod(a: T, b?: T): any {
  if (guard(a) && guard(b)) {
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
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.mul(5n, -2n)             // -10n
 * BigInt.mul(5n, 12n)             // 60n
 * ```
 * 
 * @param a the first bigint
 * @param b the second bigint
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function mul(a: T, b: T): T;
/**
 * Returns a `Unary<T, T>` function which once called multiplies `b` to `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const mul5 = BigInt.mul(5n) 
 * 
 * mul5(10n)                   // 50n
 * ```
 * 
 * @param a the first bigint
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function mul(a: T): Fn.Unary<T, T>;
export function mul(a: T, b?: T): any {
  if (guard(b)) {
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
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.pow(2n, 3n)             // 8n
 * BigInt.pow(3n, 2n)             // 9n
 * ```
 * 
 * @param a the first bigint
 * @param b the second bigint
 * @returns the result
 * @group Operables
 * @since 4.0.0
 */
export function pow(a: T, b: T): T;
/**
 * Returns a `Unary<T, T>` function which once called elevates `b` by `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const pow5 = BigInt.pow(5n) 
 * 
 * pow5(10n)                   // 100_000n
 * ```
 * 
 * @group Operables
 * @since 4.0.0
 */
export function pow(a: T): Fn.Unary<T, T>;
export function pow(a: T, b?: T): any {
  if (guard(a) && guard(b)) {
    return a ** b;
  }

  return (c: T) => c ** a;
}

/**
 * Root of `a` under `b` if both specified, otherwise returns a `Unary<T, T>` 
 * function which once called returns the root of `b` under `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.root(4n, 2n)             // 2n
 * BigInt.root(9n, 2n)             // 3n
 * ```
 * 
 * @param a the bigint
 * @param b the root
 * @group Operables
 * @since 4.0.0
 */
export function root(a: T, b: T): T;
/**
 * Returns a `Unary<T, T>` function which once called returns the root of `b` under `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const root2 = BigInt.root(2n) 
 * 
 * root2(4n)                   // 2n
 * root2(9n)                   // 3n
 * ```
 * 
 * @param a the root
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function root(a: T): Fn.Unary<T, T>;
export function root(a: T, b?: T): any {
  const _r = (base: T, root: T) => {
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

  return (c: T) => _r(c, a);
}

/**
 * Subtracts `b` to `a` 
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.sub(5n, -2n)             // 7n
 * BigInt.sub(5n, 12n)             // -7n
 * ```
 * 
 * @param a the first bigint
 * @param b the second bigint
 * @returns a - b
 * @group Operables
 * @since 4.0.0
 */
export function sub(a: T, b: T): T;
/**
 * Returns a `Unary<T, T>` function which once called subtracts `a` to `b`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * const sub5 = BigInt.sub(5n) 
 * 
 * sub5(10n)                   // 5n
 * sub5(-2n)                   // -7n
 * ```
 * 
 * @param a 
 * @returns the unary function (b - a)
 * @group Operables
 * @since 4.0.0
 */
export function sub(a: T): Fn.Unary<T, T>;
export function sub(a: T, b?: T): any {
  if (guard(b)) {
    return a - b;
  }

  return (c: T) => c - a;
}

//#endregion

//#region sortables

/**
 * Compares two bigints `a` and `b` if `b`
 * 
 * Great to sort a bigint array in ASC direction.
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
 * @param a the first comparison bigint
 * @param b the second comparison bigint
 * @returns the result:
 *  - -1 if a is less than b
 *  - 0 if a is equal to b
 *  - 1 if a is greater than b
 * @group Sortables
 * @since 4.0.0
 */
export function asc(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a `Unary<T, T>` function which once called compares `b` and `a`
 * 
 * @example
 * 
 * ```ts
 * import { BigInt } from 'tiinvo';
 * 
 * BigInt.asc(1n)(2n) // 1
 * BigInt.asc(1n)(1n) // 0
 * BigInt.asc(1n)(0n) // -1
 * ```
 * 
 * @param a the bigint
 * @returns the comparator unary function
 * @group Sortables
 * @since 4.0.0
 */
export function asc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function asc(a: T, b?: any): any {
  if (guard(b)) {
    return cmp(a, b);
  }

  return (c: T) => cmp(c, a);
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
 * @param a the first comparison bigint
 * @param b the second comparison bigint
 * @returns the result:
 *  - -1 if a is more than b
 *  - 0 if a is equal to b
 *  - 1 if a is less than b
 * @group Sortables
 * @since 4.0.0
 */
export function desc(a: T, b: T): Functors.ComparableResult;
export function desc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function desc(a: T, b?: any): any {
  if (guard(b)) {
    return cmp(b, a);
  }

  return (c: T) => cmp(a, c);
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
 * @group Serializables
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
 * @group Serializables
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
 * @group Serializables
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
 * @group Serializables
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
 * @group Serializables
 * @since 4.0.0
 */
export const toString = map(String);

 //#endregion
