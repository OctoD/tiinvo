import type * as f from './functors';
import type * as r from './result';

/**
 * Checks if a condition is true, otherwise throws an error.
 * 
 * ```typescript
 * import { Assert } from 'tiinvo';
 * 
 * Assert.check(true, 'This will not throw an error'); // undefined
 * Assert.check(false, 'This will throw an error');    // throws an error
 * ```
 * 
 * @param condition 
 * @param message 
 * @since 3.3.0
 */
export const check = (condition: boolean, message?: string): void | never => {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Checks if a condition is true, otherwise returns a err.
 * 
 * ```typescript
 * import { Assert } from 'tiinvo';
 * 
 * Assert.checkr(true, 'This will not throw an error'); // undefined
 * Assert.checkr(false, 'This will throw an error');    // Error('This will throw an error')
 * ```
 * 
 * @param condition 
 * @param message 
 * @returns 
 * @since 3.3.0
 */
export const checkr = (condition: boolean, message?: string): r.result<void> => {
  if (!condition) {
    return new Error(message);
  }
}
/**
 * Returns a function that checks if a predicate is satisfied, otherwise throws an error.
 * 
 * ```typescript
 * import { Assert, Number } from 'tiinvo';
 * 
 * const check = Assert.checkr(Number.isEven, 'number is not even');
 * 
 * check(2); // undefined
 * check(3); // throws Error('number is not even')
 * ```
 * 
 * @param predicate 
 * @param message 
 * @returns 
 * @since 3.3.0
 */
export const make = <a>(predicate: f.predicateE<a>, message?: string | ((a: a) => string)): (a: a) => void | never => {
  return (a: a) => {
    if (!predicate(a)) {
      throw new Error(typeof message === 'function' ? message(a) : message);
    }
  }
}

/**
 * Returns a function that checks if a predicate is satisfied, otherwise returns a err.
 * 
 * ```typescript
 * import { Assert, Number } from 'tiinvo';
 * 
 * const check = Assert.checkr(Number.isEven, 'number is not even');
 * 
 * check(2); // undefined
 * check(3); // Error('number is not even')
 * ```
 * 
 * @param predicate 
 * @param message 
 * @returns 
 * @since 3.3.0
 */
export const maker = <a>(predicate: f.predicateE<a>, message?: string | ((a: a) => string)): (a: a) => r.result<void> => {
  return (a: a) => {
    if (!predicate(a)) {
      return new Error(typeof message === 'function' ? message(a) : message);
    } else {
      return;
    }
  }
}
