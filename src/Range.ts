import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';

/**
 * Represents a numeric range from a starting value `start` to an ending value `end`.
 */
export type t = {
  readonly start: number;
  readonly end: number;
  readonly step: number;
  [Symbol.iterator](): Iterator<number>;
};

//#region factories

/**
 * Makes a new range from a start to an end (inclusive)
 *
 * If the third parameter `step` is passed, the range will increment by that step
 * 
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * for (const n of Range.make(0, 10)) {
 *    console.log(n)
 * }
 * 
 * // will log 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 * 
 * for (const n of Range.make(0, 10, 2)) {
 *    console.log(n)
 * }
 * 
 * // will log 0, 2, 4, 6, 8, 10
 * ```
 *
 * @since 4.0.0
 */
export const make = (start: number, end: number, step = 1): t => {
  step = end > start ? Math.abs(step) : -1 * Math.abs(step);
  
  return {
    start,
    end,
    step,
    [Symbol.iterator]: () => {
      let current = start;
      let last = end;

      return {
        current,
        last,
        next() {
          if (step > 0 ? current <= last : current >= last) {
            const value = current;
            current += step;
            return { done: false, value };
          } else {
            return { done: true, value: last };
          }
        }
      };
    }
  };
};

//#endregion

//#region guards

/**
 * Checks if a parameter `x` is of `Range.t` type
 *
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * Range.guard(10)                                // false
 * Range.guard([])                                // false
 * Range.guard({})                                // false
 * Range.guard({ start: 10, end: 20 })            // false
 * Range.guard({ start: 10, end: 20, step: 12 })  // false
 * Range.guard(Range.make(1, 2))                  // true
 * ```
 *
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t => typeof x === 'object' && !!x && 'start' in x && 'end' in x && 'step' in x && Symbol.iterator in x;

//#endregion

//#region predicates

/**
 * Checks whenever a number is in a `Range.t`
 *
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * const r = Range.make(3, 8)
 * 
 * Range.inRange(r, 10)   // false
 * Range.inRange(10)(r)   // false
 * Range.inRange(r, 6)    // true
 * Range.inRange(6)(r)    // true
 * ```
 *
 * @since 4.0.0
 */
export function inRange(t: t, a: number): boolean
export function inRange(t: number): Fn.Unary<t, boolean>
export function inRange(t: t | number, a?: number): any
{
  if (guard(t) && typeof a === 'number') {
    const { start, end } = t;
    return start < end ? (end >= a && a >= start) : (end <= a && a <= start)
  }

  return (b: t) => {
    const { start, end } = b;
    return start < end ? (end >= t && t >= start) : (end <= t && t <= start)
  }
}

//#endregion

//#region mappables

/**
 * Maps a functor `Mappable<number, a>` over a `Range.t`
 *
 * @example
 *
 * ```ts
 * import { Range, Num } from 'tiinvo'
 * 
 * const r = Range.make(20, 30)
 * const m = Range.map(Num.toHex)
 * 
 * m(r)   // ['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']
 * ```
 *
 * @since 4.0.0
 */
export const map = <a>(m: Functors.Mappable<number, a>) => (t: t) => {
  const out: a[] = [];

  for (const x of t) {
    out.push(m(x));
  }

  return out;
};

//#endregion

//#region serializables

/**
 * Converts a `Range.t` to a `number[]` array
 *
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * const r = Range.make(0, 10)
 * 
 * Range.toArray(r)   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * ```
 *
 * @since 4.0.0
 */
export const toArray = Array.from;

//#endregion
