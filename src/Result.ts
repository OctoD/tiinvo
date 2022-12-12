import { make as makecatch } from './Catch.js';
import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';

/**
 * Represents an error
 */
export type Err = Error;
/**
 * Represents the successful result of an operation
 */
export type Ok<A> = A extends Error ? never : A;
/**
 * Could represent both an Error `Err` or a successful result of an operation `Ok<a>`
 */
export type T<A> = Ok<A> | Err;

/**
 * Returns an `Err`
 * 
 * @example
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.err(10)                    instanceof Error // true
 * Result.err(new TypeError('aaaa')) instanceof Error // true
 * Result.err({})                    instanceof Error // true
 * Result.err(10n)                   instanceof Error // true
 * Result.err([10, 20, 30])          instanceof Error // true
 * ```
 * 
 * @param a 
 * @returns
 * @group Factories
 * @since 3.8.0 
 */
export const err = (a: unknown): Err => {
  if (a instanceof Error) {
    return a;
  } else if (typeof a === 'object' && a) {
    const err = new Error();
    for (const [key, value] of Object.entries(a)) {
      (err as any)[key] = value;
    }
    return err;
  }

  return new Error(String(a));
};

//#region guards

/**
 * Checks if a value is `Err`
 * 
 * @example
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 *
 * Result.isErr(10)                    // false
 * Result.isErr(new TypeError('aaaa')) // true
 * ```
 * 
 * @param x the value to check
 * @returns true if `x` is `Err`, false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const isErr = (x: unknown): x is Err => x instanceof Error || (typeof x === 'object' && x !== null && 'message' in x && 'name' in x && 'cause' in x);

/**
 * Checks if a value is `Ok`
 * 
 * @example
 * 
 * ```ts
 * import { Result } from 'tiinvo';
 * 
 * Result.isOk(10)                    // true
 * Result.isOk(new TypeError('aaaa')) // false
 * ```
 * 
 * @param x 
 * @returns true if `x` is `Ok<A>`, false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const isOk = <A>(x: T<A>): x is Ok<A> => !isErr(x);

/**
 * Checks if a value is `Ok<A>`
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const guard = Result.isOkOf(Num.guard);
 * 
 * guard(10)                    // true
 * guard("hello")               // false
 * guard(new TypeError('aaaa')) // false
 * ```
 * 
 * @template A the type
 * @param g the type guard
 * @returns the Guard
 * @group Guardables
 * @since 4.0.0
 */
export const isOkOf = <A>(g: Functors.Guardable<A>) => (x: T<unknown>): x is A => isErr(x) ? false : g(x);

//#endregion

//#region comparables

/**
 * Compares two results `T<A>` by a given `Comparable<A>`.
 * 
  * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * Result.cmp(Str.cmp, "a", "a")                    // 0
 * Result.cmp(Str.cmp, "a", "b")                    // -1
 * Result.cmp(Str.cmp, "b", "a")                    // 1
 * Result.cmp(Str.cmp, new Error(), new Error())    // 0
 * Result.cmp(Str.cmp, new Error(), "a")            // -1
 * Result.cmp(Str.cmp, "a", new Error())            // 1
 * ```
 * 
 * @template A the type
 * @param cmp the comparer function
 * @param a first value
 * @param b last value
 * @returns 
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Compares two results `T<A>` by a given `ComparableModule<A>`.
 * 
  * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * Result.cmp(Str, "a", "a")                    // 0
 * Result.cmp(Str, "a", "b")                    // -1
 * Result.cmp(Str, "b", "a")                    // 1
 * Result.cmp(Str, new Error(), new Error())    // 0
 * Result.cmp(Str, new Error(), "a")            // -1
 * Result.cmp(Str, "a", new Error())            // 1
 * ```
 * 
 * @template A the type
 * @param cmp the comparer function
 * @param a first value
 * @returns 
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @param b last value
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Returns a unary function which compares two results `T<A>` by a given `Comparable<A>`.
 * 
 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const cmp = Result.cmp(Str.cmp, "a");
 * 
 * cmp("a")                    // 0
 * cmp("b")                    // -1
 * cmp("a")                    // 1
 * cmp(new Error())            // 1
 * ```
 * 
 * @template A the type
 * @param cmp the comparer function
 * @param a first value
 * @returns the unary function which returns 
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>, a: T<A>): Fn.Unary<T<A>, Functors.ComparableResult>;
/**
 * Returns a unary function which compares two results `T<A>` by a given `ComparableModule<A>`.
 * 
 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const cmp = Result.cmp(Str, "a");
 * 
 * cmp("a")                    // 0
 * cmp("b")                    // -1
 * cmp("a")                    // 1
 * cmp(new Error())            // 1
 * ```
 * 
 * @template A the type
 * @param cmp the comparer module
 * @param a first value
 * @returns the unary function which returns
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>, a: T<A>): Fn.Unary<T<A>, Functors.ComparableResult>;
/**
 * Returns a binary function which compares two results `T<A>` by a given `Comparable<A>`.
 * 
 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const cmp = Result.cmp(Str.cmp);
 * 
 * cmp("a", "a")                    // 0
 * cmp("a", "b")                    // -1
 * cmp("b", "a")                    // 1
 * cmp("a", new Error())            // 1
 * cmp(new Error(), "a")            // -1
 * cmp(new Error(), new Error())    // 0
 * ```
 * 
 * @template A the type
 * @param cmp the comparer function
 * @returns the binary function which returns
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>): Fn.Binary<T<A>, T<A>, Functors.ComparableResult>;
/**
 * Returns a binary function which compares two results `T<A>` by a given `ComparableModule<A>`.
 * 
 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const cmp = Result.cmp(Str);
 * 
 * cmp("a", "a")                    // 0
 * cmp("a", "b")                    // -1
 * cmp("b", "a")                    // 1
 * cmp("a", new Error())            // 1
 * cmp(new Error(), "a")            // -1
 * cmp(new Error(), new Error())    // 0
 * ```
 * 
 * @template A the type
 * @param cmp the comparer module
 * @returns the binary function which returns
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is same of `b` 
 *  - 1 if `a` is greater than `b`.
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>): Fn.Binary<T<A>, T<A>, Functors.ComparableResult>;
export function cmp<A>(cmp: Functors.Comparable<A> | Functors.ComparableModule<A>, a?: T<A>, b?: T<A>): any {
  const _cmp = (x: T<A>, y: T<A>) => {
    if (isErr(x) && isErr(y)) {
      return 0;
    }

    if (isErr(x)) {
      return -1;
    }

    if (isErr(y)) {
      return 1;
    }

    return typeof cmp === 'function' ? cmp(x, y) : cmp.cmp(x, y);
  };

  switch (arguments.length) {
    case 3: return _cmp(a as T<A>, b as T<A>);
    case 2: return (b: T<A>) => _cmp(b, a as T<A>);
    case 1: return (a: T<A>, b: T<A>) => _cmp(a, b);
  }
};

/**
 * Returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * Result.eq(Num.eq, 0, 0)                         // true
 * Result.eq(Num.eq, new Error(), new TypeError()) // true
 * Result.eq(Num.eq, new Error(), 0)               // false
 * Result.eq(Num.eq, 0, new Error())               // false
 * Result.eq(Num.eq, 1_000_000, 0)                 // false
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable functor 
 * @param a the left compared value
 * @param b the right compared value
 * @returns true if `a` equals to `b` 
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(eq: Functors.Equatable<A>, a: T<A>, b: T<A>): boolean;
/**
 * Returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * Result.eq(Num, 0, 0)                         // true
 * Result.eq(Num, new Error(), new TypeError()) // true
 * Result.eq(Num, new Error(), 0)               // false
 * Result.eq(Num, 0, new Error())               // false
 * Result.eq(Num, 1_000_000, 0)                 // false
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable module 
 * @param a the left compared value
 * @param b the right compared value
 * @returns true if `a` equals to `b` 
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(eq: Functors.EquatableModule<A>, a: T<A>, b: T<A>): boolean;
/**
 * Returns a unary function which returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const is0 = Result.eq(Num.eq, 0)
 * 
 * Result.eq(0)                         // true
 * Result.eq(new TypeError())           // false
 * Result.eq(new Error())               // false
 * Result.eq(1_000_000)                 // false
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable functor 
 * @param a the left compared value
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(eq: Functors.Equatable<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Returns a unary function which returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const is0 = Result.eq(Num, 0)
 * 
 * Result.eq(0)                         // true
 * Result.eq(new TypeError())           // false
 * Result.eq(new Error())               // false
 * Result.eq(1_000_000)                 // false
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable functor 
 * @param a the left compared value
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(eq: Functors.EquatableModule<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Returns a binary function which returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const is0 = Result.eq(Num.eq)
 * 
 * Result.eq(0, 0)                         // true
 * Result.eq(new TypeError(), new Error()) // true
 * Result.eq(0, new Error())               // false
 * Result.eq(1_000, 1_000)                 // true
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable functor 
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<a>(eq: Functors.Equatable<a>): Fn.Binary<T<a>, T<a>, boolean>;
/**
 * Returns a binary function which returns true if two results are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const is0 = Result.eq(Num)
 * 
 * Result.eq(0, 0)                         // true
 * Result.eq(new TypeError(), new Error()) // true
 * Result.eq(0, new Error())               // false
 * Result.eq(1_000, 1_000)                 // true
 * ```
 * 
 * @template A the value type
 * @param eq the Equatable module
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<a>(eq: Functors.EquatableModule<a>): Fn.Binary<T<a>, T<a>, boolean>;
export function eq<a>(eq: Functors.Equatable<a> | Functors.EquatableModule<a>, a?: T<a>, b?: T<a>): any {
  const _eq = (x: T<a>, y: T<a>) => {
    if (isErr(x) && isErr(y)) {
      return true;
    }

    if (isErr(x) || isErr(y)) {
      return false;
    }

    return typeof eq === 'function' ? eq(x, y) : eq.eq(x, y);
  };

  switch (arguments.length) {
    case 3: return _eq(a as T<a>, b as T<a>);
    case 2: return (b: T<a>) => _eq(a as T<a>, b);
    case 1: return (a: T<a>, b: T<a>) => _eq(a, b);
  }
};

//#endregion

//#region filterables

/**
 * Returns `Ok<A>` if the value `a` is `Ok<A>` and the predicate is satisfied, otherwise returns `Err`.
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * Result.filter(Num.gt(1), 1)               // Error("Value did not pass filter")
 * Result.filter(Num.gt(1), 2)               // 2
 * Result.filter(Num.gt(1), new TypeError()) // Error("Value did not pass filter")
 * ```
 * 
 * @template A the value type
 * @param f the Filterable functor
 * @param a the value to filter
 * @returns `T<A>` if the Filterable has been satisfied
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(f: Functors.Filterable<A>, a: T<A>): T<A>;
/**
 * Returns a unary function which checks if `Result.T<A>` is `Ok<A>` and the predicate is satisfied, otherwise returns `Err`.
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const f = Result.filter(Num.gt(1));
 * 
 * f(1)               // Error("Value did not pass filter")
 * f(2)               // 2
 * f(new TypeError()) // Error("Value did not pass filter")
 * ```
 * 
 * @template A the value type
 * @param f the Filterable functor
 * @returns the unary function
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(f: Functors.Filterable<A>): Fn.Unary<T<A>, T<A>>;
export function filter<A>(f: Functors.Filterable<A>, a?: T<A>): any {
  const _err = Error("Value did not pass filter");
  if (arguments.length === 2) {
    return isErr(a) ? _err : f(a as A) ? a : _err;
  }

  return (c: T<A>) => isErr(c) ? _err : f(c) ? c : _err;
}

//#endregion

//#region mappables

/**
 * Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `err`
 * 
 * ```ts
 * import { Num, Result } from 'tiinvo';
 * 
 * const m = Result.map(Num.add(10))
 * 
 * m(10)                   // 20
 * m(new Error('foobar!')) // Error('foobar!')
 * ```
 * 
 * @param m the Mappable functor
 * @returns 
 * @since 4.0.0
 */
export const map = <A, B>(m: Functors.Mappable<A, B>) => (a: T<A>): T<B> => isOk(a) ? m(a) : a as any;
/**
 * Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `b`
 * 
 * ```ts
 * import { Str, Result } from 'tiinvo';
 * 
 * const map = Result.mapOr(Str.length, 0);
 * 
 * map('hello')        // 5
 * map(new Error())    // 0
 * ```
 * 
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const mapOr = <a, b>(m: Functors.Mappable<a, b>, b: b) => (a: T<a>): b => isOk(a) ? m(a) : b;

//#endregion

//#region catchables

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const fn = async (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Result.tryAsync(fn);
 * 
 * await safe(2) // 4
 * await safe(3) // Error("3 is not even")
 * 
 * Result.isOk(await safe(2))  // true
 * Result.isErr(await safe(3)) // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 4.0.0
 */
export const tryAsync = <f extends Fn.AnyAsyncFn>(f: f) => {
  return makecatch<(...args: Parameters<f>) => Promise<T<ReturnType<f>>>>({
    [catchableAsync]() {
      return {
        catch: async (error) => error,
        func: f
      };
    }
  });
};

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Result, Num } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Result.trySync(fn);
 * 
 * safe(2) // 4
 * safe(3) // Error("3 is not even")
 * 
 * Result.isOk(safe(2))  // true
 * Result.isErr(safe(3)) // true
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 4.0.0
 */
export const trySync = <f extends Fn.AnyFn>(f: f) => {
  return makecatch<(...args: Parameters<f>) => T<ReturnType<f>>>({
    [catchableSync]() {
      return {
        catch: (error) => error,
        func: f
      };
    }
  });
};

//#endregion
