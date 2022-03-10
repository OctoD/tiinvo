import * as f from './functors';

export enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

/**
 * Compares two dates.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, 0, 1);
 * const d2 = Date.make(2018, 0, 2);
 * 
 * d.cmp(d1, d2); // -1
 * d.cmp(d2, d1); // 1
 * d.cmp(d1, d1); // 0
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparableE<Date, Date> = (a, b) => a > b ? 1 : a < b ? -1 : 0;
/**
 * Checks if a value `a` is a date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * d.guard(Date.make(2018, 1, 1)); // true
 * d.guard(Date.fromstring(`2018-01-01`)); // true
 * d.guard({}); // false
 * ```
 * 
 * @param a
 * @since 3.0.0
 * 
 */
export const guard = (a => Object.prototype.toString.call(a) === '[object Date]') as f.guard<Date>;
/**
 * Checks if two dates are equal.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.Jan, 1);
 * const d2 = Date.make(2018, Date.Month.Jan, 1);
 * const d3 = Date.make(2018, Date.Month.Feb, 1);
 * 
 * d.eq(d1, d2); // true
 * d.eq(d1, d3); // false
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatableE<Date> = (a, b) => cmp(a, b) === 0;
/**
 * Makes a date from a year, month and day.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * Date.make(2018, Date.Month.Jan, 1); // 2018-01-01T00:00:00.000Z
 * ```
 * 
 * @param year 
 * @param month 
 * @param day 
 * @returns 
 * @since 3.0.0
 */
export const make = (year: number, month: Month, day: number) => new Date(year, month - 1, day, 0, 0, 0, 0);

/**
 * Makes a date from a string
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * Date.fromstr('2018-01-01'); // 2018-01-01T00:00:00.000Z
 * ```
 * @param datestr 
 * @returns 
 * 
 * @since 3.0.10
 */
export const fromstr = (datestr: `${string}-${string}-${string}`) => {
  const [year, month, day] = datestr.split('T')[0].split('-');
  return make(Number(year), Number(month), Number(day));
}

//#region predicates

/**
 * Checks if a date `c` is between two dates `a` and `b` included.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, 0, 1);
 * const d2 = Date.make(2018, 0, 2);
 * const d3 = Date.make(2018, 0, 3);
 * 
 * Date.inrange(d1, d3)(d2); // true
 * Date.inrange(d1, d3)(d1); // true
 * Date.inrange(d1, d3)(d3); // true
 * Date.inrange(d1, d2)(d3); // false
 * ```
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const inrange = (a: Date, b: Date) => (c: Date) => cmp(c, a) >= 0 && cmp(c, b) <= 0;
/**
 * Checks if a date is invalid
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * d.invalid(new Date()); // false
 * d.invalid(new Date(2018, 0, 1)); // false
 * d.invalid(new Date(2018, 0, 1, 12, 0, 0)); // false
 * d.invalid(new Date(`a`)); // true
 * ```
 * 
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const invalid = (date: Date) => isNaN(date.getTime());
/**
 * Checks if a date is in a leap year.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * console.log(Date.isleap(Date.make(2018, 0, 1))); // false
 * console.log(Date.isleap(Date.make(2016, 0, 1))); // true
 * ```
 * 
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const isleap = (date: Date) => {
  const year = date.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
/**
 * Checks if a date `c` is not in a range between `a` and `b` included.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, 0, 1);
 * const d2 = Date.make(2018, 0, 2);
 * const d3 = Date.make(2018, 0, 3);
 * 
 * Date.notinrange(d1, d3)(d2); // false
 * Date.notinrange(d1, d3)(d1); // false
 * Date.notinrange(d1, d3)(d3); // false
 * Date.notinrange(d1, d2)(d3); // true
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const notinrange = (a: Date, b: Date) => (c: Date) => cmp(c, a) < 0 || cmp(c, b) > 0;
/**
 * Checks if a date is valid
 * 
 * ```typescript
 * import { Date as d } from 'tiinvo/date';
 * 
 * d.valid(new Date()); // true
 * d.valid(new Date(2018, 0, 1)); // true
 * d.valid(new Date(2018, 0, 1, 12, 0, 0)); // true
 * d.valid(new Date('a')); // false
 * ```
 * 
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const valid = (date: Date) => !invalid(date);

//#endregion

//#region mutators

/**
 * Adds a number of years, months and days to a date without mutating the original date.
 * All parameters are optional.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.add(1, 1, 1)(d1); // 2019-02-02T00:00:00.000Z
 * ```
 * 
 * @param year 
 * @param month 
 * @param day 
 * @returns 
 * @since 3.0.0
 */
export const add = (year: number = 0, month: number = 0, day: number = 0) => (date: Date) => new Date(date.getFullYear() + year, date.getMonth() + month, date.getDate() + day);
/**
 * Adds a number of years to a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.addYears(1)(d1); // 2019-01-01T00:00:00.000Z
 * ```
 * 
 * @param years
 * @returns
 * @since 3.0.0
 */
export const addYears = (years: number) => add(years, 0, 0);
/**
 * Adds a number of months to a date without mutating the original date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.addMonths(1)(d1); // 2018-02-01T00:00:00.000Z
 * ```
 * 
 * @param months 
 * @returns 
 * @since 3.0.0
 */
export const addMonths = (months: number) => add(0, months, 0);
/**
 * Adds a number of days to a date without mutating the original date.
 * 
 * ```typescript
 * import * as Date from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.addDays(1)(d1); // 2018-01-02T00:00:00.000Z
 * ```
 * @param days 
 * @returns 
 * @since 3.0.0
 */
export const addDays = (days: number) => add(0, 0, days);
/**
 * Subtracts a number of years, months and days from a date without mutating the original date.
 * All parameters are optional.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.sub(1, 1, 1)(d1); // 2017-11-30T00:00:00.000Z
 * ```
 * 
 * @param year 
 * @param month 
 * @param day 
 * @returns 
 */
export const sub = (year: number = 0, month: number = 0, day: number = 0) => add(-Math.abs(year), -Math.abs(month), -Math.abs(day));
/**
 * Subtracts a number of years from a date without mutating the original date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.subYears(1)(d1); // 2017-01-01T00:00:00.000Z
 * ```
 * 
 * @param years 
 * @returns 
 * @since 3.0.0
 */
export const subYears = (years: number) => sub(years, 0, 0);
/**
 * Subtracts a number of months from a date without mutating the original date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.subMonths(1)(d1); // 2017-12-01T00:00:00.000Z
 * ```
 * 
 * @param months 
 * @returns 
 * @since 3.0.0
 */
export const subMonths = (months: number) => sub(0, months, 0);
/**
 * Subtracts a number of days from a date without mutating the original date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.subDays(1)(d1); // 2017-12-31T00:00:00.000Z
 * ```
 * 
 * @param days 
 * @returns 
 * @since 3.0.0
 */
export const subDays = (days: number) => sub(0, 0, days);
/**
 * Adds one year to a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.addYear(d1); // 2019-01-01T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const addYear = addYears(1);
/**
 * Adds one month to a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.addMonth(d1); // 2018-02-01T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const addMonth = addMonths(1);
/**
 * Adds one day to a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.addDay(d1); // 2018-01-02T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const addDay = addDays(1);
/**
 * Subtracts one year from a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.subYear(d1); // 2017-01-01T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const subYear = subYears(1);
/**
 * Subtracts one month from a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.subMonth(d1); // 2017-12-01T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const subMonth = subMonths(1);
/**
 * Subtracts one day from a date without mutating the original date.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.subDay(d1); // 2017-01-01T00:00:00.000Z
 * ```
 * 
 * @param date
 * @returns
 * @since 3.0.0
 */
export const subDay = subDays(1);

//#endregion

//#region getters

/**
 * Gets the year of a date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = d.make(2018, d.Month.January, 1);
 * 
 * d.year(d1); // 2018
 * ```
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const getYear = (date: Date) => date.getFullYear();
/**
 * Gets the month of a date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * 
 * Date.month(d1); // 1
 * ```
 * 
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const getMonth = (date: Date): Month => date.getMonth() + 1;
/**
 * Gets the day of a date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * 
 * Date.day(d1); // 1
 * ```
 * 
 * @param date 
 * @returns 
 */
export const getDay = (date: Date) => date.getDay();

//#endregion

//#region sortables

/**
 * Used to sort dates in ascending order.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * const d2 = Date.make(2018, Date.Month.January, 2);
 * Date.asc(d1, d2); // -1
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const asc = (a: Date, b: Date) => {
  const c = cmp(a, b);
  return c === 1 ? -1 : c === -1 ? 1 : 0;
}

/**
 * Used to sort dates in descending order.
 * 
 * ```typescript
 * import * as d from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * const d2 = Date.make(2018, Date.Month.January, 2);
 * Date.desc(d1, d2); // 1
 * ```
 * 
 * @param a
 * @param b
 * @returns
 * @since 3.0.0
 */
export const desc = (a: Date, b: Date) => cmp(a, b);

//#endregion

/**
 * Stringifies a date.
 * 
 * ```typescript
 * import { Date } from 'tiinvo/date';
 * 
 * const d1 = Date.make(2018, Date.Month.January, 1);
 * Date.toString(d1); // 2018-01-01
 * ```
 * 
 * @param date 
 * @returns 
 * @since 3.0.0
 */
export const toString = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;
