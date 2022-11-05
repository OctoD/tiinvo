import type * as Functors from './Functors.js';

export type t = boolean;

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
 * @since 4.0.0
 */
export const flip: Functors.Mappable<t, t> = x => !x