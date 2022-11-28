import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';

/**
 * Represents a DateRange.
 * 
 * @example
 * 
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const start = new Date("2022-01-01")
 * const end = new Date("2022-12-31")
 * 
 * const dr = DateRange.make(start, end, 'month')
 * 
 * for (const month of dr) {
 *    console.log(month.toJSON())
 * }
 * ```
 * 
 * @since 4.0.0
 */
export type T = {
  readonly start: Date;
  readonly end: Date;
  readonly step: 'year' | 'month' | 'day';
  [Symbol.iterator](): Iterator<Date>;
};

//#region factories

/**
 * Creates a `DateRange.t` between a starting date `start` and an ending date `end` (included).
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');
 * 
 * Array.from(dr) // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
 * ```
 *
 * @param start the starting date
 * @param end the ending date
 * @step the step to increment. It can be:
 *  - `"year"` (default), increments by year
 *  - `"month"`, increments by month
 *  - `"day"`, increments by day
 * @group Factories
 * @since 4.0.0
 */
export const make = (start: Date, end: Date, step: T['step'] = 'year'): T => {
  const direction = start > end ? -1 : 1;

  start = new Date(start);
  end = new Date(end);

  start.setHours(0);
  start.setMinutes(0);
  start.setSeconds(0);
  start.setMilliseconds(0);
  end.setHours(0);
  end.setMinutes(0);
  end.setSeconds(0);
  end.setMilliseconds(0);

  return {
    start,
    end,
    step,
    [Symbol.iterator]: () => {
      let current = new Date(start);
      let last = new Date(end);

      return {
        current,
        last,
        next() {
          if (direction > 0 ? current.getTime() <= last.getTime() : current.getTime() >= last.getTime()) {
            const value = new Date(current);

            switch (step) {
              case 'day': current.setDate(current.getDate() + direction); break;
              case 'month': current.setMonth(current.getMonth() + direction); break;
              case 'year': current.setFullYear(current.getFullYear() + direction); break;
            }

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
 * Checks if a parameter `x` is a `DateRange.t`.
 * 
 * Start and end are included in check.
 *
 * @example
 *
 * ```ts
 * import { DateRange, Range } from 'tiinvo'
 * 
 * DateRange.guard(0)                                         // false
 * DateRange.guard(Range.make(0, 2))                          // false
 * DateRange.guard(DateRange.make(new Date(), new Date()))    // true
 * ```
 *
 * @param x the value to check
 * @returns returns true if x is DateRange, false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T => typeof x === 'object' && x !== null && 'start' in x && 'end' in x && 'step' in x && typeof (x as T).step === 'string' && (x as T).start instanceof Date && (x as T).end instanceof Date;

//#endregion

//#region predicates

/**
 * Checks if a date `b` is in range of a `DateRange.t` `a`
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');
 * 
 * DateRange.inRange(dr, new Date('2020-01-02'))    // true
 * DateRange.inRange(dr, new Date('2020-01-03'))    // true
 * DateRange.inRange(dr, new Date('2020-01-04'))    // false
 * ```
 *
 * @param a the DateRange
 * @param b the Date 
 * @returns true if b is in range of a
 * @group Predicates
 * @since 4.0.0
 */
export function inRange(a: T, b: Date): boolean;
/**
 * Returns a `Unary<T, boolean>` function which checks if a date `a` is in range of a `DateRange.t` `b`
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');
 * 
 * DateRange.inRange(new Date('2020-01-02'))(dr)    // true
 * DateRange.inRange(new Date('2020-01-03'))(dr)    // true
 * DateRange.inRange(new Date('2020-01-04'))(dr)    // false
 * ```
 *
 * @param a the DateRange
 * @returns the unary function which accepts a `DateRange.T` and returns true if a is in `DateRage.T`
 * @group Predicates
 * @since 4.0.0
 */
export function inRange(a: Date): Fn.Unary<T, boolean>;
export function inRange(a: T | Date, b?: Date): any {
  if (guard(a) && !!b) {
    const c = new Date(b);
    c.setMilliseconds(0);
    c.setMinutes(0);
    c.setHours(0);
    return c >= a.start && c <= a.end;
  }

  return (b: T) => {
    const c = new Date(a as Date);
    c.setMilliseconds(0);
    c.setMinutes(0);
    c.setHours(0);
    return c >= b.start && c <= b.end;
  };
}

//#endregion

//#region mappables

/**
 * Maps a `DateRange.t` to `a[]` using a `Mappable<Date, a>`
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const f = (x: Date) => x.getFullYear();
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');
 * 
 * DateRange.map(dr, f)     // [2020, 2021, 2022, 2023]
 * ```
 * 
 * @param t the DateRange
 * @param m the mappable functor
 * @return the mapped value
 * @group Mappables
 * @since 4.0.0
 */
export function map<a>(t: T, m: Functors.Mappable<Date, a>): a[];
/**
 * Returns a `Unary<T, a[]>` function which maps a `DateRange.t` 
 * to `a[]` using a `Mappable<Date, a>`
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const f = (x: Date) => x.getFullYear();
 * const m = DateRange.map(f)
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');
 * 
 * m(dr)                    // [2020, 2021, 2022, 2023]
 * ```
 * 
 * @param t the DateRange
 * @return the unary function
 * @group Mappables
 * @since 4.0.0
 */
export function map<a>(t: Functors.Mappable<Date, a>): Fn.Unary<T, a[]>;
export function map<a>(t: T | Functors.Mappable<Date, a>, m?: Functors.Mappable<Date, a>): any {
  const _map = (y: T, f: Functors.Mappable<Date, a>) => {
    const out: a[] = [];

    for (const x of y) {
      out.push(f(x));
    }

    return out;
  };

  if (guard(t) && !!m) {
    return _map(t, m);
  } else if (!guard(t)) {
    return (b: T) => _map(b, t);
  }
}

//#endregion

//#region serializables

/**
 * Converts a `DateRange.t` to a `Date[]` array
 *
 * @example
 *
 * ```ts
 * import { DateRange } from 'tiinvo'
 * 
 * const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');
 * 
 * DateRange.toArray(dr)      // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
 * ```
 *
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = Array.from;

//#endregion