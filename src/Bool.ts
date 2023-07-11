import type * as Functors from './Functors.js';

/**
 * Represents a boolean value
 * 
 * @example
 * 
 * ```ts
 * import { Bool } from 'tiinvo'
 * 
 * let x: Bool.T = true;
 * 
 * ```
 * 
 * @since 4.0.0
 */
export type T = boolean;

//#region guards

/**
 * Checks if parameter `x` is `boolean`
 *
 * @example
 *
 * ```ts
 * import { Bool } from 'tiinvo'
 * 
 * Bool.guard(true)     // true
 * Bool.guard(1000)     // false
 * ```
 * 
 * @param x the value to check if is a boolean
 * @returns 
 *  - `true` if `x` is a `boolean`
 *  - `false` otherwise
 * @since 4.0.0
 */
export const guard: Functors.Guardable<boolean> = (x: unknown): x is boolean => typeof x === 'boolean';;

//#endregion

/**
 * Flips a boolean value  
 *
 * @example
 *
 * ```ts
 * import { Bool } from 'tiinvo'
 * 
 * Bool.flip(true)      // false
 * ```
 *
 * @param x the bool to flip
 * @returns 
 *  - `false` if `x` is `true`
 *  - `true` if `x` is `false`
 * @since 4.0.0
 */
export const flip: Functors.Mappable<T, T> = x => !x;

//#region serializables

/**
 * Returns 1 if true, 0 otherwise
 *
 * @example
 *
 * ```ts
 * import { Bool } from 'tiinvo'
 * 
 * Bool.toNumber(true)  // 1
 * Bool.toNumber(false) // 0
 * ```
 *
 * @param t the bool
 * @returns 
 *  - `1` if `t` is `false`
 *  - `0` if `t` is `true`
 * @group Serializables
 * @since 4.0.0
 */
export const toNumber = (t: T) => t ? 1 : 0;

//#endregion