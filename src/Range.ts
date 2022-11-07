import type * as Functors from './Functors.js';

/**
 * Represents a numeric range from a starting value `start` to an ending value `end`.
 */
export type t = {
  readonly start: number;
  readonly end: number;
  readonly step: number;
  [Symbol.iterator](): Iterator<number>;
};

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
          if (current <= last) {
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
