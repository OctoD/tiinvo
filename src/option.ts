import type * as Functors from './Functors.js';
import { catchableAsync, catchableSync } from './Functors.js';
import type * as Fn from './Fn.js';
import { make as makecatch } from './Catch.js';

/**
 * None represents a value that is not present.
 * Unfortunately in javascript, null and undefined are not the same thing, 
 * but we can use them interchangeably within the option type.
 * @since 4.0.0
 */
export type None = null | undefined;

/**
 * Some<A> represents a value which could have been a possible nullable or undefined
 * @since 4.0.0
 */
export type Some<A> = A extends None ? never : A;
/**
 * The type `Option.T<A>` represents a value that could be both `a` or `null` or `undefined`.
 * @since 4.0.0
 */
export type T<A> = Some<A> | None;

/**
 * Returns `true` if the option is `None`, `false` otherwise.
 * 
 * ```typescript
 * import { Option } from 'tiinvo';
 * 
 * Option.isNone(1);          // false
 * Option.isNone(null);       // true
 * Option.isNone(undefined);  // true
 * ```
 * @param x 
 * @returns 
 * @since 4.0.0
 */
export const isNone: Functors.Guardable<None> = (x): x is None => x === undefined || x === null;
/**
 * Returns `true` if the option is `Some<unknown>`, `false` otherwise.
 * 
 * ```typescript
 * import { Option } from 'tiinvo';
 * 
 * Option.isSome(1)         // true
 * Option.isSome(null)      // false
 * Option.isSome(undefined) // false
 * ```
 * 
 * @param x 
 * @returns 
 * @since 4.0.0
 */
export const isSome: Functors.Guardable<Some<unknown>> = (x): x is Some<unknown> => x !== undefined && x !== null;
/**
 * Returns `true` if the option is `Some<A>` and the value type is satisfied by the guard, otherwise `false`.
 * 
 * If the option is `None`, it will always return `true`.
 * 
 * ```typescript
 * import { Num, Option } from 'tiinvo';
 * 
 * const x = 1
 * const y = null
 * const z = undefined
 * const w = `a`
 * 
 * const isnumsome = Option.guardOf(Num.guard);
 * 
 * isnumsome(x) // true
 * isnumsome(y) // true
 * isnumsome(z) // true
 * isnumsome(w) // false
 * 
 * ```
 * @param guard 
 * @returns 
 * @since 4.0.0
 */
export const guardOf = <A>(f: Functors.Guardable<A>): Functors.Guardable<T<A>> => (x): x is T<A> => isNone(x) ? true : f(x);

//#region comparables

/**
 * Compares two options `T<A>` by a given `Comparable<A>`.
 * 
 * Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.
 * 
 * If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Option } from 'tiinvo';
 * 
 * Option.cmp(Str.cmp, "a", "a")                    // 0
 * Option.cmp(Str.cmp, "a", "b")                    // -1
 * Option.cmp(Str.cmp, "b", "a")                    // 1
 * Option.cmp(Str.cmp, null, undefined)             // 0
 * Option.cmp(Str.cmp, null, "a")                   // -1
 * Option.cmp(Str.cmp, "a", undefined)              // 1
 * ```
 * 
 * @since 4.0.0
 */
export function cmp<A>(c: Functors.Comparable<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Compares two options `T<A>` by a given `Comparable<A>`.
 * 
 * Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.
 * 
 * If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Option } from 'tiinvo';
 * 
 * Option.cmp(Str.cmp, "a")("a")                    // 0
 * Option.cmp(Str.cmp, "a")("b")                    // 1
 * Option.cmp(Str.cmp, "b")("a")                    // -1
 * Option.cmp(Str.cmp, null)(undefined)             // 0
 * Option.cmp(Str.cmp, null)("a")                   // 1
 * Option.cmp(Str.cmp, "a")(undefined)              // -1
 * ```
 * 
 * @since 4.0.0
 */
export function cmp<A>(c: Functors.Comparable<A>, a: T<A>): Fn.Unary<T<A>, Functors.ComparableResult>;
/**
 * Compares two options `T<A>` by a given `Comparable<A>`.
 * 
 * Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.
 * 
 * If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1
 * 
 * @example
 * 
 * ```ts
 * import { Str, Option } from 'tiinvo';
 * 
 * const cmp = Option.cmp(Str.cmp)
 * 
 * cmp("a", "a")                    // 0
 * cmp("a", "b")                    // -1
 * cmp("b", "a")                    // 1
 * cmp(null,  undefined)            // 0
 * cmp(null,  "a")                  // -1
 * cmp("a", undefined)              // 1
 * ```
 * 
 * @since 4.0.0
 */
export function cmp<A>(c: Functors.Comparable<A>): Fn.Binary<T<A>, T<A>, Functors.ComparableResult>;
export function cmp<A>(c: Functors.Comparable<A>, a?: T<A>, b?: T<A>): any {
  const _cmp = (x: T<A>, y: T<A>) => {
    if (isNone(x) && isNone(y)) {
      return 0;
    }

    if (isNone(x)) {
      return -1;
    }

    if (isNone(y)) {
      return 1;
    }

    return c(x, y);
  };

  switch (arguments.length) {
    case 3: return _cmp(a, b);
    case 2: return (b: T<A>) => _cmp(b, a);
    case 1: return (a: T<A>, b: T<A>) => _cmp(a, b);
  }
};

/**
 * Returns true if two options `T<A>` are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Option } from 'tiinvo';
 * 
 * const eq = Option.eq(Num.eq);
 * 
 * Option.eq(Num.eq, 0, 0)              // true
 * Option.eq(Num.eq, 1, 0)              // false
 * Option.eq(Num.eq, 0, 1)              // false
 * Option.eq(Num.eq, null, 1)           // false
 * Option.eq(Num.eq, null, undefined)   // true
 * ```
 * 
 * @param e 
 * @returns 
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>, a: T<A>, b: T<A>): boolean;
/**
 * Returns true if two options `T<A>` are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Option } from 'tiinvo';
 * 
 * Option.eq(Num.eq, 0)(0)                      // true
 * Option.eq(Num.eq, 0)(1)                      // false
 * Option.eq(Num.eq, null)(undefined)           // true
 * Option.eq(Num.eq, null)(100000000)           // false
 * ```
 * 
 * @param e 
 * @returns 
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Returns true if two options `T<A>` are equal, false otherwise.
 * 
 * ```ts
 * import { Num, Option } from 'tiinvo';
 * 
 * const eq = Option.eq(Num.eq);
 * 
 * eq(0, 0)                         // true
 * eq(null, undefined)              // true
 * eq(null, 0)                      // false
 * eq(0, null)                      // false
 * eq(1_000_000, 0)                 // false
 * ```
 * 
 * @param e 
 * @returns 
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>): Fn.Binary<T<A>, T<A>, boolean>;
export function eq<A>(e: Functors.Equatable<A>, a?: T<A>, b?: T<A>): any {
  const _eq = (x: T<A>, y: T<A>): boolean => {
    if (isSome(x) && isSome(y)) {
      return e(x as A, y as A);
    } else if (isNone(x) && isNone(y)) {
      return true;
    }

    return false;
  };

  switch (arguments.length) {
    case 3: return _eq(a, b);
    case 2: return (b: T<A>) => _eq(b, a);
    case 1: return (a: T<A>, b: T<A>) => _eq(a, b);
  }
};

//#endregion

//#region filterables

/**
 * Returns `Some<A>` if the value is `Some<A>` and the predicate returns true, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * Option.filter(Num.gt(1), 1)    // null
 * Option.filter(Num.gt(1), 2)    // 2
 * Option.filter(Num.gt(1), null) // null
 * ```
 * 
 * @template A the type to filter
 * @param a the predicate
 * @param b the value to filter
 * @returns 
 *  - `T<A>` if the predicate is satisfied
 *  - `None` if the predicate is not satisfied
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(a: Functors.Mappable<A, boolean>, b: T<A>): T<A>;
/**
 * Returns `Some<A>` if the value is `Some<A>` and the predicate returns true, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const f = Option.filter(Num.gt(1));
 * 
 * f(1)    // null
 * f(2)    // 2
 * f(null) // null
 * ```
 * 
 * @template A the type to filter
 * @param a the predicate
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(a: Functors.Mappable<A, boolean>): Fn.Unary<T<A>, T<A>>;
export function filter<A>(a: Functors.Mappable<A, boolean>, b?: T<A>): any {
  if (arguments.length === 2) {
    return isNone(b) ? null : a(b) ? b : null;
  }

  return (c: T<A>) => isNone(c) ? null : a(c) ? c : null;
}

//#endregion

//#region mappables

/**
 * Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const m = Option.map(Num.add(1));
 * 
 * Option.map(Num.add(1), 1)    // 2
 * Option.map(Num.add(1), null) // null
 * ```
 * 
 * @template A the starting type
 * @template B the mapped type
 * @param m the mappable
 * @param a the value to map
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(m: Functors.Mappable<A, B>, a: T<A>): T<B>;
/**
 * Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const m = Option.map(Num.add(1));
 * 
 * m(1)    // 2
 * m(null) // null
 * ```
 * 
 * @template A the starting type
 * @template B the mapped type
 * @param m the mappable
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(m: Functors.Mappable<A, B>): Fn.Unary<T<A>, T<B>>;
export function map<A, B>(m: Functors.Mappable<A, B>, a?: T<A>): any {
  const _map = (x: T<A>) => isNone(x) ? null : m(x) as T<B>;

  if (typeof m === 'function' && arguments.length === 2) {
    return _map(a);
  }

  return _map;
};

/**
 * Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `b`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * Option.mapOr(Num.add(2), 1, 0)    // 3
 * Option.mapOr(Num.add(2), null, 0) // 0
 * ```
 * 
 * @template A the starting type
 * @template B the mapped type
 * @param m the mappable
 * @param a the value to map
 * @param b the fallback value
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<A, B>(m: Functors.Mappable<A, B>, a: T<A>, b: B): B;
/**
 * Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `b`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const m = Option.mapOr(Num.add(2), 0);
 * 
 * m(1)    // 3
 * m(null) // 0
 * ```
 * 
 * @template A the starting type
 * @template B the mapped type
 * @param m the mappable
 * @param a the fallback value
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<A, B>(m: Functors.Mappable<A, B>, a: B): Fn.Unary<T<A>, B>;
export function mapOr<A, B>(m: Functors.Mappable<A, B>, a: T<A> | B, b?: B): any {
  const _mor = (x: T<A>, or: B) => isNone(x) ? or : m(x);

  if (arguments.length === 3) {
    return _mor(a as T<A>, b as B);
  }

  return (c: T<A>) => _mor(c, a as B);
}

//#endregion

//#region catchable

/**
 * Calls a function `F` with it's arguments and returns a `Promise<Option.T<ReturnType<f>>>`
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const fn = async (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Option.tryAsync(fn);
 * 
 * await safe(2) // 4
 * await safe(3) // null
 * 
 * Option.isSome(await safe(2)) // true
 * Option.isNone(await safe(3)) // true
 * ```
 * 
 * @template F the function type
 * @param f the function to wrap
 * @returns the wrapped function
 * @since 4.0.0
 */
export const tryAsync = <F extends Fn.AnyAsyncFn>(f: F) => {
  return makecatch<(...args: Parameters<F>) => Promise<T<ReturnType<F>>>>({
    [catchableAsync]() {
      return {
        catch: async (_err, _args) => null as any,
        func: f
      };
    }
  });
};

/**
 * Calls a function `F` with it's arguments and returns a `Option.T<ReturnType<f>>`
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * const fn = (arg: number) => {
 *   if (Num.isEven(arg)) {  
 *     return arg * 2;  
 *   }
 *  
 *   throw new Error(`${arg} is not even`);
 * }
 * 
 * const safe = Option.trySync(fn);
 * 
 * safe(2) // 4
 * safe(3) // null
 * 
 * Option.isSome(safe(2)) // true
 * Option.isNone(safe(3)) // true
 * ```
 * 
 * @template F the function type
 * @param f the function to wrap
 * @returns the wrapped function
 * @since 4.0.0
 */
export const trySync = <F extends Fn.AnyFn>(f: F) => {
  return makecatch<(...args: Parameters<F>) => T<ReturnType<F>>>({
    [catchableSync]() {
      return {
        catch: () => null,
        func: f
      };
    }
  });
};

//#endregion
