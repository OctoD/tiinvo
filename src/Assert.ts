import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Predicate from './Predicate.js';
import { guard as pGuard } from './Predicate.js';
import type * as Result from './Result.js';
import { guard as strGuard } from './Str.js';

/**
 * Asserts that a specified condition is true, otherwise throws 
 * an error with the given message
 *
 * @example
 *
 * ```ts
 * import { Assert } from 'tiinvo'
 * 
 * Assert.check(true, 'will not throw')     // does not throw
 * Assert.check(false, 'yup it throws')     // throws
 * ```
 *
 * @param a if true it throws
 * @param m the error message
 * @returns 
 *  - void if ok
 *  - throws otherwise
 * @since 4.0.0
 */
export function check(a: boolean, m: string): void;
/**
 * Returns a unary function which accepts a boolean
 * which asserts that the argument is true, otherwise throws 
 * an error with the given message
 *
 * @example
 *
 * ```ts
 * import { Assert } from 'tiinvo'
 * 
 * const somecheck = Assert.check(`It's not true!`);
 * 
 * somecheck(true)      // undefined
 * somecheck(false)     // throws new Error(`It's not true!`)
 * ```
 *
 * @param a the error message
 * @returns the unary function which returns
 *  - void if passed
 *  - throws otherwise
 * @since 4.0.0
 */
export function check(a: string): Fn.Unary<boolean, void>;
export function check(a: boolean | string, m?: any): any {
  if (typeof a === 'boolean' && !a && strGuard(m)) {
    throw new Error(m);
  }

  if (typeof a === 'string') {
    return (b: boolean) => {
      if (!b) {
        throw new Error(a);
      }
    };
  }
};

/**
 * Asserts that a specified `condition` is true and returns it, otherwise returns `Result.Err` with the given `errorMessage`
 *
 * @example
 *
 * ```ts
 * import { Assert } from 'tiinvo'
 * 
 * Assert.checkResult(true, 'will not throw')     // true
 * Assert.checkResult(false, 'yup it throws')     // Error("yup it throws")
 * Assert.checkResult('will not throw')(true)     // true
 * Assert.checkResult('yup it throws')(false)     // Error("yup it throws")
 * ```
 *
 * @param a the condition
 * @param b the error message
 * @returns 
 *  - `Result.Ok<true>` if `a` is `true`
 *  - `Result.Err` otherwise
 * @since 4.0.0
 */
export function checkResult(a: boolean, b: string): Result.T<boolean>;
/**
 * Returns a unary function which asserts that a specified condition is true 
 * returning it, otherwise returns `Result.Err` with the given error message `a`
 *
 * @example
 *
 * ```ts
 * import { Assert } from 'tiinvo'
 * 
 * Assert.checkResult('will not throw')(true)     // true
 * Assert.checkResult('yup it throws')(false)     // Error("yup it throws")
 * ```
 *
 * @param a the error message
 * @returns the unary function which returns
 *  - `Result.Ok<true>` if `a` is `true`
 *  - `Result.Err` otherwise
 * @since 4.0.0
 */
export function checkResult(a: string): Fn.Unary<boolean, Result.T<boolean>>;
export function checkResult(a: boolean | string, b?: any): any {
  if (typeof a === 'boolean' && strGuard(b)) {
    return !a ? new Error(b) : true;
  }

  if (typeof a === 'string') {
    return (b: boolean) => {
      if (!b) {
        return new Error(a);
      }

      return true;
    };
  }
};

/**
 * Creates a check function starting from a `Predicate.t<a>` and a message.
 *
 * @example
 *
 * ```ts
 * import { Assert, Num } from 'tiinvo'
 * 
 * const check0 = Assert.make(Num.isEven, 'number is not even')
 * 
 * check0(10)              // does not throw
 * check0(11)              // throws "number is not even"
 * check1(10)              // does not throw
 * check1(11)              // throws "number 11 is not even"
 * ```
 *
 * @template a the type passed to the predicate and to the mappable functor (if any)
 * @param p the predicate
 * @param m the error message or the mappable functor
 * @returns the asserting unary function which returns
 *  - `void` if it's ok
 *  - throws otherwise
 * @since 4.0.0
 */
export function make<a>(p: Predicate.T<a>, m: string | Functors.Mappable<a, string>): Fn.Unary<a, void>;
/**
 * Creates a check function starting from a `Predicate.t<a>` and a message.
 *
 * @example
 *
 * ```ts
 * import { Assert, Num } from 'tiinvo'
 * 
 * const check1 = Assert.make(Num.isEven, x => `number ${x} is not even`)
 * 
 * check0(10)              // does not throw
 * check0(11)              // throws "number is not even"
 * check1(10)              // does not throw
 * check1(11)              // throws "number 11 is not even"
 * ```
 *
 * @template a the type passed to the predicate and to the mappable functor (if any)
 * @param p the error message or the mappable functor
 * @returns the asserting unary function which returns 
 *  - `Result.Ok<true>` if `a` is `true`
 *  - `Result.Err` otherwise
 * @since 4.0.0
 */
export function make<a>(p: string | Functors.Mappable<a, string>): Fn.Unary<Predicate.T<a>, Fn.Unary<a, void>>;
export function make<a>(p: string | Functors.Mappable<a, string> | Predicate.T<a>, m?: any): any {
  if (pGuard(p) && arguments.length === 2) {
    return (a: a) => check(p(a), typeof m === 'function' ? m(a) : m);
  }

  return (y: Predicate.T<a>) => (a: a) => check(y(a), typeof p === 'function' ? String(p(a)) : p as string);
}

/**
 * Creates a check function starting from a `Predicate.t<a>` and a message.
 *
 * @example
 *
 * ```ts
 * import { Assert, Num } from 'tiinvo'
 * 
 * const check0 = Assert.makeResult(Num.isEven, 'number is not even')
 * const check1 = Assert.makeResult(Num.isEven, x => `number ${x} is not even`)
 * 
 * check0(10)              // true
 * check0(11)              // Error("number is not even")
 * check1(10)              // true
 * check1(11)              // Error("number 11 is not even")
 * ```
 *
 * @template A the type passed to the predicate and to the mappable functor (if any)
 * @param p the asserting predicate
 * @param m the error message or the mappable functor
 * @returns the asserting function which returns
 *  - `Result.Ok<A>` if `a` is `true`
 *  - `Result.Err` otherwise
 * @since 4.0.0
 */
export function makeResult<A>(p: Predicate.T<A>, m: string | Functors.Mappable<A, string>): Fn.Unary<A, Result.T<boolean>>;
/**
 * Creates a check function starting from a a message or a mappable functor.
 *
 * @example
 *
 * ```ts
 * import { Assert, Num } from 'tiinvo'
 * 
 * const check1 = Assert.makeResult(Num.isEven, x => `number ${x} is not even`)
 * 
 * check0(10)              // true
 * check0(11)              // Error("number is not even")
 * check1(10)              // true
 * check1(11)              // Error("number 11 is not even")
 * ```
 *
 * @template A the type passed to the predicate and to the mappable functor (if any)
 * @param p the error message or the mappable functor
 * @returns the asserting unary function which returns 
 *  - `Result.Ok<true>` if `a` is `true`
 *  - `Result.Err` otherwise
 * @since 4.0.0
 */
export function makeResult<A>(p: string | Functors.Mappable<A, string>): Fn.Unary<Predicate.T<A>, Fn.Unary<A, Result.T<boolean>>>;
export function makeResult<A>(p: any, m?: any): any {
  if (pGuard(p) && m) {
    return (a: A) => checkResult(p(a), typeof m === 'function' ? m(a) : m);
  }

  return (y: Predicate.T<A>) => (a: A) => checkResult(y(a), typeof p === 'function' ? p(a) : p);
}
