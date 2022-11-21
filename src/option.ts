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
 * Some<a> represents a value which could have been a possible nullable or undefined
 * @since 4.0.0
 */
export type Some<a> = a extends None ? never : a;
/**
 * The type `Option.T<a>` represents a value that could be both `a` or `null` or `undefined`.
 * @since 4.0.0
 */
export type T<a> = Some<a> | None;

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
 * @param value 
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
 * @param value 
 * @returns 
 * @since 4.0.0
 */
export const isSome: Functors.Guardable<Some<unknown>> = (x): x is Some<unknown> => x !== undefined && x !== null;
/**
 * Returns `true` if the option is `Some<a>` and the value type is satisfied by the guard, otherwise `false`.
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
export const guardOf = <a>(f: Functors.Guardable<a>): Functors.Guardable<T<a>> => (x): x is T<a> => isNone(x) ? true : f(x);

//#region comparables

/**
 * Compares two options `T<a>` by a given `Comparable<a>`.
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
export function cmp<a>(c: Functors.Comparable<a>, a: T<a>, b: T<a>): Functors.ComparableResult;
/**
 * Compares two options `T<a>` by a given `Comparable<a>`.
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
export function cmp<a>(c: Functors.Comparable<a>, a: T<a>): Fn.Unary<T<a>, Functors.ComparableResult>;
/**
 * Compares two options `T<a>` by a given `Comparable<a>`.
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
export function cmp<a>(c: Functors.Comparable<a>): Fn.Binary<T<a>, T<a>, Functors.ComparableResult>;
export function cmp<a>(c: Functors.Comparable<a>, a?: T<a>, b?: T<a>): any {
  const _cmp = (x: T<a>, y: T<a>) => {
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
    case 2: return (b: T<a>) => _cmp(b, a);
    case 1: return (a: T<a>, b: T<a>) => _cmp(a, b);
  }
};

/**
 * Returns true if two options `T<a>` are equal, false otherwise.
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
export function eq<a>(e: Functors.Equatable<a>, a: T<a>, b: T<a>): boolean;
/**
 * Returns true if two options `T<a>` are equal, false otherwise.
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
export function eq<a>(e: Functors.Equatable<a>, a: T<a>): Fn.Unary<T<a>, boolean>;
/**
 * Returns true if two options `T<a>` are equal, false otherwise.
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
export function eq<a>(e: Functors.Equatable<a>): Fn.Binary<T<a>, T<a>, boolean>;
export function eq<a>(e: Functors.Equatable<a>, a?: T<a>, b?: T<a>): any {
  const _eq = (x: T<a>, y: T<a>): boolean => {
    if (isSome(x) && isSome(y)) {
      return e(x as a, y as a);
    } else if (isNone(x) && isNone(y)) {
      return true;
    }

    return false;
  };

  switch (arguments.length) {
    case 3: return _eq(a, b);
    case 2: return (b: T<a>) => _eq(b, a);
    case 1: return (a: T<a>, b: T<a>) => _eq(a, b);
  }
};

//#endregion

//#region filterables

/**
 * Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * Option.filter(Num.gt(1), 1)    // null
 * Option.filter(Num.gt(1), 2)    // 2
 * Option.filter(Num.gt(1), null) // null
 * ```
 * 
 * @since 4.0.0
 */
export function filter<a>(a: Functors.Mappable<a, boolean>, b: T<a>): T<a>;
/**
 * Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.
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
 * @since 4.0.0
 */
export function filter<a>(a: Functors.Mappable<a, boolean>): Fn.Unary<T<a>, T<a>>;
export function filter<a>(a: Functors.Mappable<a, boolean>, b?: T<a>): any {
  if (arguments.length === 2) {
    return isNone(b) ? null : a(b) ? b : null;
  }

  return (c: T<a>) => isNone(c) ? null : a(c) ? c : null;
}

//#endregion

//#region mappables

/**
 * Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `None`.
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
 * @group Mappables
 * @since 4.0.0
 */
export function map<a, b>(m: Functors.Mappable<a, b>, a: T<a>): T<b>;
/**
 * Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `None`.
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
 * @group Mappables
 * @since 4.0.0
 */
export function map<a, b>(m: Functors.Mappable<a, b>): Fn.Unary<T<a>, T<b>>;
export function map<a, b>(m: Functors.Mappable<a, b>, a?: T<a>): any {
  const _map = (x: T<a>) => isNone(x) ? null : m(x) as T<b>;

  if (typeof m === 'function' && arguments.length === 2) {
    return _map(a);
  }

  return _map;
};

/**
 * Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `b`.
 * 
 * ```typescript
 * import { Option, Num } from 'tiinvo';
 * 
 * Option.mapOr(Num.add(2), 1, 0)    // 3
 * Option.mapOr(Num.add(2), null, 0) // 0
 * ```
 * 
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<a, b>(m: Functors.Mappable<a, b>, a: T<a>, b: b): b;
/**
 * Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `b`.
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
 * @group Mappables
 * @since 4.0.0
 */
export function mapOr<a, b>(m: Functors.Mappable<a, b>, a: b): Fn.Unary<T<a>, b>;
export function mapOr<a, b>(m: Functors.Mappable<a, b>, a: T<a> | b, b?: b): any {
  const _mor = (x: T<a>, or: b) => isNone(x) ? or : m(x);

  if (arguments.length === 3) {
    return _mor(a as T<a>, b as b);
  }

  return (c: T<a>) => _mor(c, a as b);
}

//#endregion

//#region catchable

/**
 * Calls a function `f` with it's arguments and returns a `Promise<Option.T<ReturnType<f>>>`
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
 * const safe = Option.TryAsync(fn);
 * 
 * await safe(2) // 4
 * await safe(3) // null
 * 
 * Option.isSome(await safe(2)) // true
 * Option.isNone(await safe(3)) // true
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
        catch: async (_err, _args) => null as any,
        func: f
      };
    }
  });
};

/**
 * Calls a function `f` with it's arguments and returns a `Option.T<ReturnType<f>>`
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
 * const safe = Option.TrySync(fn);
 * 
 * safe(2) // 4
 * safe(3) // null
 * 
 * Option.isSome(safe(2)) // true
 * Option.isNone(safe(3)) // true
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
        catch: () => null,
        func: f
      };
    }
  });
};

//#endregion
