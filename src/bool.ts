import type * as f from './functors';

/**
 * Compares two `booleans`.
 * 
 * ```typescript
 * import { Boolean } from 'bool'
 * 
 * console.log(Boolean.cmp(true, true)) // 0
 * console.log(Boolean.cmp(true, false)) // 1
 * console.log(Boolean.cmp(false, true)) // -1
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
 * import { Boolean } 'tiinvo';
 * 
 * console.log(Boolean.eq(true, true)) // true
 * console.log(Boolean.eq(true, false)) // false
 * console.log(Boolean.eq(false, true)) // false
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
 * import { Boolean } 'tiinvo';
 * 
 * console.log(Boolean.flip(true)) // false
 * console.log(Boolean.flip(false)) // true
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
 * import { Boolean } from 'tiinvo'
 * 
 * console.log(Boolean.guard(true)) // true
 * console.log(Boolean.guard(false)) // true
 * console.log(Boolean.guard(1)) // false
 * console.log(Boolean.guard(null)) // false
 * ```
 * 
 * @param a
 * @returns
 * @since 3.0.0
 */
export const guard = (a => typeof a === 'boolean') as f.guard<boolean>;

/**
 * Converts a `boolean` to a bit (`0 | 1`).
 * 
 * ```typescript
 * import { Boolean } from 'tiinvo'
 * 
 * console.log(Boolean.toBit(true)) // 1
 * console.log(Boolean.toBit(false)) // 0
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const toBit = (a: boolean) => a ? 1 : 0;
