import type * as f from './functors';

/**
 * Compares two `booleans`.
 * 
 * ```typescript
 * import * as b from 'bool'
 * 
 * console.log(b.cmp(true, true)) // 0
 * console.log(b.cmp(true, false)) // 1
 * console.log(b.cmp(false, true)) // -1
 * ```
 * 
 * @param a 
 * @param b 
 * @returns
 * @since 3.0.0 
 */
export const cmp: f.comparableE<boolean, boolean> = (a, b) => a > b ? 1 : a < b ? -1 : 0;

/**
 * Returns `true` if two booleans are equal, otherwise `false`.
 * 
 * ```typescript
 * import * as b from 'bool'
 * 
 * console.log(b.eq(true, true)) // true
 * console.log(b.eq(true, false)) // false
 * console.log(b.eq(false, true)) // false
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatableE<boolean> = (a, b) => a === b;

/**
 * Flips a boolean.
 * 
 * ```typescript
 * import * as b from 'bool'
 * 
 * console.log(b.flip(true)) // false
 * console.log(b.flip(false)) // true
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const flip = (a: boolean): boolean => !a;

/**
 * Returns `true` if the given value is a `boolean`.
 * 
 * ```typescript
 * import * as t from 'tuple'
 * 
 * console.log(t.guard(true)) // true
 * console.log(t.guard(false)) // true
 * console.log(t.guard(1)) // false
 * console.log(t.guard(null)) // false
 * ```
 * 
 * @param a
 * @returns
 * @since 3.0.0
 */
export const guard = (a => typeof a === 'boolean') as f.guard<boolean>;

/**
 * Converts a `boolean` to a number `0 | 1`.
 * 
 * ```typescript
 * import * as b from 'bool'
 * 
 * console.log(b.toBit(true)) // 1
 * console.log(b.toBit(false)) // 0
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const toBit = (a: boolean) => a ? 1 : 0;
