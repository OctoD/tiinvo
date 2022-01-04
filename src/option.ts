import type * as f from './functors';

export type some<a = unknown> = a extends null | undefined ? none : a;
/**
 * none represents a value that is not present.
 * Unfortunately in javascript, null and undefined are not the same thing, 
 * but we can use them interchangeably within the option type.
 * @since 3.0.0
 */
export type none = null | undefined;
/**
 * The type `option<a>` represents a value that could be both `a` or `null` or `undefined`.
 * @since 3.0.0
 */
export type option<a = unknown> = some<a> | none;

/**
 * Returns `true` if the option is `none`, `false` otherwise.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * o.isNone(x); // false
 * o.isNone(y); // true
 * o.isNone(z); // true
 * ```
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const isNone = (value: unknown): value is none => value === null || value === undefined;
/**
 * Returns `true` if the option is `some`, `false` otherwise.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * o.isSome(x); // true
 * o.isSome(y); // false
 * o.isSome(z); // false
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const isSome = (value: unknown): value is some<unknown> => value !== null && value !== undefined;
/**
 * Returns `true` if the option is `some` and the value type is satisfied by the guard, otherwise `false`.
 * 
 * If the option is `none`, it will always return `true`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * const w = `a`
 * 
 * const isnumsome = o.isOptionOf(num.guard);
 * 
 * isnumsome(x); // true
 * isnumsome(y); // true
 * isnumsome(z); // true
 * isnumsome(w); // false
 * 
 * ```
 * @param guard 
 * @returns 
 * @since 3.0.0
 */
export const isOptionOf = <a>(guard: f.guard<a>) => (value: unknown): value is option<a> => isSome(value) ? guard(value) : true;
/**
 * Compares two options for equality.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * o.eq(x, y); // false
 * o.eq(x, z); // false
 * o.eq(y, z); // true
 * o.eq(x, x); // true
 * ```
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparable = <a, b>(a: a, b: b): -1 | 0 | 1 => ((a === null || a === undefined) && (b === null || b === undefined)) ? 0 : a as any > b as any ? 1 : a as any < b as any ? -1 : 0;
/**
 * Returns true if two options are equal.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * o.eq(x, y); // false
 * o.eq(x, z); // false
 * o.eq(y, z); // true
 * o.eq(x, x); // true
 * ```
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatable = <a>(a: a, b: a): boolean => isNone(a) && isNone(b) ? true : a === b;
/**
 * Returns some if the value is some and the predicate returns true, otherwise returns none.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const p = num.gt(1);
 * const f = o.filter(p);
 * 
 * f(1);    // null
 * f(2);    // 2
 * f(null); // null
 * ```
 * @param f 
 * @returns 
 * @since 3.0.0
 */
export const filter = <a>(f: f.predicateE<a>) => (value: a) => (isSome(value) && f(value)) ? value : null;
/**
 * Maps an `option<a>` to another `option<b>` if is `some<a>`, otherwise returns none.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const m = o.map(num.uadd(1));
 * 
 * m(1);    // 2
 * m(null); // null
 * ```
 * @param map 
 * @returns 
 * @since 3.0.0
 */
export const map = <a, b>(map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : value;
/**
 * Maps an `option<a>` to another `option<b>` if is `some<a>`, otherwise returns `or`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const m = o.mapOr(0, num.uadd(2));
 * 
 * m(1);    // 3
 * m(null); // 0
 * ```
 * 
 * @param or 
 * @param map 
 * @returns 
 * @since 3.0.0
 */
export const mapOr = <a, b>(or: option<b>, map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : or;
/**
 * Maps an `option<a>` to another `option<b>` if is `some<a>`, otherwise calls `orElse`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * import * as num from 'tiinvo/num';
 * 
 * const m = o.mapOrElse(() => 0, num.uadd(2));
 * 
 * m(1);    // 3
 * m(null); // 0
 * ```
 * 
 * @param or 
 * @param map 
 * @returns 
 * @since 3.0.0
 */
export const mapOrElse = <a, b>(or: f.map<void, b>, map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : or();
/**
 * Returns the boxed value if the option is `some`, otherwise throws an `Error`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * o.unwrap(x); // 1
 * o.unwrap(y); // throws Error
 * o.unwrap(z); // throws Error
 * ```
 * 
 * @param value 
 * @returns 
 * @since 3.0.0
 */
export const unwrap: f.unwrappable = value => isSome(value) ? value as any : (() => { throw new Error('unwrappable: value is none'); })();
/**
 * Returns the boxed value if the option is `some`, otherwise returns `or`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * const f = o.unwrapOr(0);
 * 
 * f(x);    // 1
 * f(y);    // 0
 * f(z);    // 0
 * ```
 * 
 * @param or 
 * @returns 
 * @since 3.0.0
 */
export const unwrapOr: f.unwrappableOr = or => value => isSome(value) ? value : or;
/**
 * Returns the boxed value if the option is `some`, otherwise calls `orElse`.
 * 
 * ```typescript
 * import * as o from 'tiinvo/option';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * const f = o.unwrapOrElse(() => 0);
 * 
 * f(x);    // 1
 * f(y);    // 0
 * f(z);    // 0
 * ```
 * 
 * @param or 
 * @returns 
 * @since 3.0.0
 */
export const unwrapOrElse: f.unwrappableOrElse = (or) => (value) => isSome(value) ? value : or();
