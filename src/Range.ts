import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';

/**
 * Represents a numeric range from a starting value `start` to an ending value `end`.
 */
export type T = {
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
 * @param start range's starting value
 * @param end range's ending value
 * @param step range's increment value
 * @group Factories
 * @since 4.0.0
 */
export const make = (start: number, end: number, step = 1): T => {
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
 * Checks if a parameter `x` is of `Range.T` type
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
 * @param x the value to check
 * @returns true if `x` is a `T`, false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T => typeof x === 'object' && !!x && 'start' in x && 'end' in x && 'step' in x && Symbol.iterator in x;

//#endregion

//#region predicates

/**
 * Checks whenever a number is within in a `Range.T`
 *
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * const r = Range.make(3, 8)
 * 
 * Range.inRange(r, 10)   // false
 * Range.inRange(r, 6)    // true
 * ```
 *
 * @param t the range
 * @param a the value to check
 * @group Predicates
 * @since 4.0.0
 */
export function inRange(t: T, a: number): boolean;
/**
 * Returns a unary function which checks whenever a `Range.T` contains a value `t`
 *
 * @example
 *
 * ```ts
 * import { Range } from 'tiinvo'
 * 
 * const r = Range.make(3, 8)
 * 
 * Range.inRange(10)(r)   // false
 * Range.inRange(6)(r)    // true
 * ```
 *
 * @param t the value to check
 * @returns the unary function `Fn.Unary<T, boolean>`
 * @group Predicates
 * @since 4.0.0
 */
export function inRange(t: number): Fn.Unary<T, boolean>;
export function inRange(t: T | number, a?: number): any {
  if (guard(t) && typeof a === 'number') {
    const { start, end } = t;
    return start < end ? (end >= a && a >= start) : (end <= a && a <= start);
  }

  return (b: T) => {
    const { start, end } = b;
    return start < end ? (end >= t && t >= start) : (end <= t && t <= start);
  };
}

//#endregion

//#region mappables

/**
 * Maps a functor `Mappable<number, A>` over a `Range.T`
 *
 * @example
 *
 * ```ts
 * import { Range, Num } from 'tiinvo'
 * 
 * const r = Range.make(20, 30)
 * 
 * Range.map(r, Num.toHex)   // ['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']
 * ```
 * 
 * @template A the mapped value type
 * @param t the Range
 * @param m the Mappable functor
 * @returns A[] if `t` is `Range.T`
 * @group Mappables
 * @since 4.0.0
 */
export function map<A>(t: T, m: Functors.Mappable<number, A>): A[];
/**
 * Returns a unary function which maps a functor `Mappable<number, A>` over a `Range.T`
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
 * @template A the mapped value type
 * @param t the Range
 * @returns the unary function
 * @group Mappables
 * @since 4.0.0
 */
export function map<A>(t: Functors.Mappable<number, A>): Fn.Unary<T, A[]>;
export function map<A>(t: T | Functors.Mappable<number, A>, m?: Functors.Mappable<number, A>): any {
  const _map = (_t: T, _m: Functors.Mappable<number, A>) => {
    const out: A[] = [];

    for (const x of _t) {
      out.push(_m(x));
    }

    return out;
  };

  if (guard(t) && !!m) {
    return _map(t, m)
  } else if (!guard(t)) {
    return (b: T) => _map(b, t);
  }
};

//#endregion

//#region serializables

/**
 * Converts a `Range.T` to a `number[]` array
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
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = Array.from;

//#endregion
