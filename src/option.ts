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
 * import { Option } from 'tiinvo';
 * 
 * Option.isNone(1); // false
 * Option.isNone(null); // true
 * Option.isNone(undefined); // true
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
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * Option.isSome(1); // true
 * Option.isSome(null); // false
 * Option.isSome(undefined); // false
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
 * import { Option } from 'tiinvo';
 * import * as num from 'tiinvo/num';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * const w = `a`
 * 
 * const isnumsome = Option.isOptionOf(num.guard);
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
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * Option.cmp(x, y); // 1
 * Option.cmp(x, z); // 1
 * Option.cmp(y, z); // 0
 * Option.cmp(x, x); // 0
 * ```
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparable = <a, b>(a: a, b: b): -1 | 0 | 1 => {
  if (isNone(a) && isNone(b)) {
    return 0;
  } else if (isNone(a)) {
    return -1;
  } else if (isNone(b)) {
    return 1;
  } else {
    return a as any > b ? 1 : a as any < b ? -1 : 0;
  }
}
/**
 * Returns true if two options are equal.
 * 
 * ```typescript
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * Option.eq(x, y); // false
 * Option.eq(x, z); // false
 * Option.eq(y, z); // true
 * Option.eq(x, x); // true
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
 * import { Option, Number } from 'tiinvo';
 * 
 * const p = Number.gt(1);
 * const f = Option.filter(p);
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
 * import { Option, Number } from 'tiinvo';
 * 
 * const m = Option.map(Number.uadd(1));
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
 * import { Option, Number } from 'tiinvo';
 * 
 * const m = Option.mapOr(0, Number.uadd(2));
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
 * import { Option, Number } from 'tiinvo';
 * 
 * const m = Option.mapOrElse(() => 0, Number.uadd(2));
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
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * Option.unwrap(x); // 1
 * Option.unwrap(y); // throws Error
 * Option.unwrap(z); // throws Error
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
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * const f = Option.unwrapOr(0);
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
 * import { Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * 
 * const f = Option.unwrapOrElse(() => 0);
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
