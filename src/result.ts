import type * as f from './functors';

export type ok<a> = a;

export type err = Error;

export type result<a> = ok<a> | err;

/**
 * Checks if a value is `err`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 *
 * Result.isErr(10)                    // false
 * Result.isErr(new TypeError('aaaa')) // true
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const isErr = <a>(value: result<a>): value is err => typeof value === 'object' && 'message' in value && 'stack' in value;

/**
 * Checks if a value is `ok`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.isOk(10)                    // true
 * Result.isOk(new TypeError('aaaa')) // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const isOk = <a>(value: result<a>): value is ok<a> => !isErr(value);

/**
 * Checks if a value is `ok` and satisfies the type `guard`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const isnumok = Result.isResultOf(Number.guard);
 * 
 * isnumok(new Error(10)) // false
 * isnumok(1_000_000_000) // true
 * isnumok("lorem ipsum") // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const isResultOf = <a>(guard: f.guard<a>) => (value: unknown): value is result<a> => isOk(value) ? guard(value) : true;

/**
 * Compares two `result`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.cmp(10, 0)                     // 1
 * Result.cmp(0, 10)                     // -1
 * Result.cmp(0, 0)                      // 0
 * Result.cmp(new Error(), 0)            // 0
 * Result.cmp(new Error(), new Error())  // 0
 * Result.cmp(0, new Error())            // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparable = <a, b>(a: a, b: b): -1 | 0 | 1 => isErr(a) && isErr(b) ? 0 : a as any > b ? 1 : a as any < b ? -1 : 0;

/**
 * Filters `ok` with a predicate `p` if `ok`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const o = Result.filter(Number.isOdd)
 * 
 * o(10)               // Error("10 is not ok")
 * o(11)               // 11
 * o(new Error())      // Error()
 * ```
 * 
 * If the predicate is satisfied, returns `ok` otherwise `err`
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const filter = <a>(predicate: f.predicateE<a>) => (value: result<a>) => isOk(value) && predicate(value) ? value : isErr(value) ? value : new Error(`${value} is not ok`);

/**
 * Returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.eq(0, 0)                         // true
 * Result.eq(new Error(), new TypeError()) // true
 * Result.eq(new Error(), 0)               // false
 * Result.eq(1_000_000, 0)                 // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatable = <a>(a1: a, a2: a) => isErr(a1) && isErr(a2) ? true : a1 === a2;

/**
 * Maps `result<a>` to `result<b>` if ok, otherwise returns `err`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const m = Result.map(Number.uadd(10))
 * 
 * m(10)                   // 20
 * m(new Error('foobar!')) // Error('foobar!')
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const map = <a, b>(map: f.map<a, b>) => (value: result<a>): result<b> => isErr(value) ? value : map(value);

/**
 * Maps `result<a>` to `result<b>` if ok, otherwise returns `or`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const map = Result.mapOr(0, String.length);
 * 
 * map('hello')        // 5
 * map(new Error())    // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const mapOr = <a, b>(or: b, map: f.map<a, b>) => (value: result<a>): result<b> => isErr(value) ? or : map(value);

/**
 * Maps `result<a>` to `result<b>` if ok, otherwise calls and returns `or`
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const map = Result.mapOrElse(() => 0, Boolean.toBit)
 * 
 * map(true)           //  1
 * map(false)          //  0
 * map(new Error())    //  0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const mapOrElse = <a, b>(or: f.map<void, b>, map: f.map<a, b>) => (value: result<a>): result<b> => isErr(value) ? or() : map(value);

/**
 * Unwraps value if ok, otherwise throws
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.unwrap(10)           // 10
 * Result.unwrap(new Error())  // throws
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const unwrap: f.unwrappable = value => isErr(value) ? (() => {throw value})() : value;

/**
 * Unwraps value if ok, otherwise returns or
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const u = Result.unwrapOr(0);
 * 
 * u(10)           // 10
 * u(new Error())  // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const unwrapOr: f.unwrappableOr = or => value => isErr(value) ? or : value;

/**
 * Unwraps value if ok, otherwise calls and returns or
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * const u = Result.unwrapOrElse(() => 0);
 * 
 * u(10)           // 10
 * u(new Error())  // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const unwrapOrElse: f.unwrappableOrElse = or => value => isErr(value) ? or() : value;
