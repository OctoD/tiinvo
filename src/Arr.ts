import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Option from './Option.js';
import type * as Predicate from './Predicate.js';
import { guard as predicateguard } from './Predicate.js';
import type * as Result from './Result.js';

/**
 * Represents an array of elements `A`
 * 
 * @template A the array's elements' type
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * let foo: Arr.T<string> = ['hello']
 * ```
 * 
 * @since 4.0.0
 */
export type T<A = unknown> = A[];

/**
 * Represents a reducer function for arrays
 * 
 * @template A the reduced value type
 * @template B the array type
 */
export type Reducer<A, B> = {
  /**
   * @example
   * 
   * ```ts
   * import { Arr } from 'tiinvo';
   * 
   * let r: Arr.Reducer<string, number> = (a, b) => a + b.length;
   * 
   * ['hello', 'world'].reduce(r, 0)    // 10
   * ```
   * 
   * @param {B} p the accumulated value
   * @param {A} c the current value
   * @returns {B}
   */
  (p: B, c: A): B;
  /**
   * @example
   * 
   * ```ts
   * import { Arr } from 'tiinvo';
   * 
   * let r: Arr.Reducer<string, number> = (a, b, i) => a + b.length + i;
   * 
   * ['hello', 'world'].reduce(r, 0)    // 11
   * ```
   * 
   * @param {B} p the accumulated value
   * @param {A} c the current value
   * @param {number} i the current index
   * @returns {B}
   */
  (p: B, c: A, i: number): B;
  /**
   * @example
   * 
   * ```ts
   * import { Arr } from 'tiinvo';
   * 
   * let r: Arr.Reducer<string, number> = (a, b, i, t) => a + b.length + i + t.length;
   * 
   * ['hello', 'world'].reduce(r, 0)    // 13
   * ```
   * 
   * @param {B} p the accumulated value
   * @param {A} c the current value
   * @param {number} i the current index
   * @param {T<A>} t the original array `T<A>`
   * @returns {B}
   */
  (p: B, c: A, i: number, t: T<A>): B;
};

//#region accessors


/**
 * Returns the element `Result.t<a>` at index `i` of an array `T<A>`. 
 * 
 * If the index `i` is out of range, a `Err` will be returned.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.get([10, 20], 1)   // 20
 * Arr.get([10, 20], 3)   // Error("Index out of bounds 3 for length 2")
 * ```
 * 
 * @template A the type of the array `A` elements
 * @param a is the array to search 
 * @param i is the element index
 * @returns 
 * @group Accessors
 * @since 4.0.0
 */
export function get<A>(a: T<A>, i: number): Result.T<A>;
/**
 * Returns a `Fn.Unary<t<a>, Result.t<a>>` to get the element `Result.t<a>` at index `i` of an array `T<A>`. 
 * 
 * If the index `i` is out of range, a `Err` will be returned.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.get(1)([10, 20])   // 20
 * Arr.get(3)([10, 20])   // Error("Index out of bounds 3 for length 2")
 * ```
 * 
 * @template A the type of the array `A` elements
 * @param a is the element index
 * @returns the unary function
 * @group Accessors
 * @since 4.0.0
 */
export function get<A>(a: number): Fn.Unary<T<A>, Result.T<A>>;
export function get<A>(a: T<A> | number, i?: number): any
{
  if (guard(a) && typeof i === 'number')
  {
    if (i >= 0 && i < a.length)
    {
      return a[i] as Result.T<A>;
    }

    return new RangeError(`Index out of bounds ${i} for length ${a.length}`);
  }

  return (b: T<A>) =>
  {
    if (a >= 0 && a < b.length)
    {
      return b[a as number] as Result.T<A>;
    }

    return new RangeError(`Index out of bounds ${a} for length ${b.length}`);
  };
};


/**
 * Returns the element `Option.T<A>` at index `i` of an array `T<A>`.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.getOr([10, 20], 0, 1)   // 20
 * Arr.getOr([10, 20], 0, 3)   // 0
 * ```
 * 
 * @template A the type of the array `A` elements
 * 
 * @param a is the array to search
 * @param b is the default value
 * @param i is the element index
 *
 * @group Accessors
 * @since 4.0.0
 */
export function getOr<A>(a: T<A>, b: A, i: number): A;
/**
 * Returns a `Fn.Binary<T<A>, number, A>` to get the element `Option.T<A>` at index `i` of an array `T<A>`.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.getOr(0)([10, 20])   // 20
 * Arr.getOr(0)([10, 20])   // 0
 * ```
 * 
 * @template A the type of the array `A` elements
 *
 * @param a is the default value
 * @returns the binary function
 * 
 * @group Accessors
 * @since 4.0.0
 */
export function getOr<A>(a: A): Fn.Binary<T<A>, number, A>;
export function getOr<A>(a: T<A> | number, b?: A, i?: number): any
{
  if (arguments.length === 3 && Array.isArray(a) && typeof i === 'number')
  {
    if (i >= 0 && i < a.length)
    {
      return a[i] as A;
    }

    return b;
  }

  return (b: T<A>, d: number) =>
  {
    if (d >= 0 && d < b.length)
    {
      return b[d] as A;
    }

    return a;
  };
};


/**
 * Returns the first element of an array `A`. If the array is empty, returns `Option.None`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.first(['a', 'b']) // 'a';
 * Arr.first([])         // null;
 * ```
 * 
 * @template A array's type
 * @param t the array
 * @returns 
 *  - `Option.Some<A>` if some
 *  - `Option.None` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export const first = <A>(t: T<A>): Option.T<A> => t.length > 0 ? t[0] as Option.T<A> : null as Option.T<A>;

/**
 * Returns the first element of an array `A` or `b` if the array is empty.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.firstOr([10, 20], 0)        // 10
 * Arr.firstOr([], 0)              // 0
 * ```
 * 
 * @template A the inferred type from argument `t`
 * @param t the array
 * @param b the fallback value
 * @returns the first element of the array or `b` as fallback
 * @group Accessors
 * @since 4.0.0
 */
export function firstOr<A>(t: T<A>, b: A): A;
/**
 * Returns a unary function which gets an array's first element or returns the fallback `t`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const firstOr0 = Arr.firstOr(0);
 * 
 * firstOr0([10, 20])        // 10
 * firstOr0([])              // 0
 * ```
 * 
 * @template A array's type
 * @param t the fallback value
 * @returns the unary function
 * @group Accessors
 * @since 4.0.0
 */
export function firstOr<A>(t: A): Fn.Unary<T<A>, A>;
export function firstOr<A>(t: T<A> | A, b?: any): any
{
  if (guard(t))
  {
    return t.length > 0 ? t[0] : b;
  }

  return (b: T<A>) => b.length > 0 ? b[0] : t;
}

/**
 * Returns the last element of an array `A`. 
 * 
 * @example
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.last(['a', 'b']) // 'b';
 * Arr.last([])         // null;
 * ```
 * 
 * @template A array's type
 * @param t the array
 * @returns 
 *  - `Option.Some<A>` if has a last element
 *  - `Option.None` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export const last = <A>(t: T<A>): Option.T<A> => (t[t.length - 1] ?? null) as Option.T<A>;

/**
 * Returns the last element of an array `A` or the fallback `b` if the array is empty.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.lastOr([10, 20], 0)        // 20
 * Arr.lastOr([], 0)              // 0
 * ```
 * 
 * @template A array's type
 * @param t the array
 * @param b the fallback
 * @returns The last element of the array `t` or `b` if `t` is empty.
 * @group Accessors
 * @since 4.0.0
 */

export function lastOr<A>(t: T<A>, b: A): A;
/**
 * After setting the fallback value `t`, returns a `Unary<t<a>, a>` function.
 * 
 * If the array has a length greater than 0, it will return it's last element, otherwise it will return the fallback `t`
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.lastOr(0)([10, 20])        // 20
 * Arr.lastOr(0)([])              // 0
 * ```
 * 
 * @template A array's type
 * @param t the index
 * @returns the unary function
 * @group Accessors
 * @since 4.0.0
 */
export function lastOr<A>(t: A): Fn.Unary<T<A>, A>;
export function lastOr<a>(t: T<a> | a, b?: a): any
{
  if (guard(t))
  {
    return t[t.length - 1] ?? b;
  }

  return (b: T<a>) => b[b.length - 1] ?? t;
}

//#endregion

//#region guardables

/**
 * Returns true if `a` is an array.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.guard([])          // true
 * Arr.guard(null)        // false
 * Arr.guard(undefined)   // false
 * Arr.guard(0)           // false
 * Arr.guard('')          // false
 * ```
 * 
 * @param x the value to check
 * @returns
 *  - true if x is an array
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T<unknown> => Array.isArray(x);

/**
 * Returns true if `b` is an array of `a`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.guardOf(Str.guard, [])                 // true
 * Arr.guardOf(Str.guard, ['a'])              // true
 * Arr.guardOf(Str.guard, ['a', 'b'])         // true
 * Arr.guardOf(Str.guard, ['a', 'b', 'c'])    // true
 * Arr.guardOf(Str.guard, ['a', 'b', 'c', 1]) // false
 * ````
 * 
 * @template A array's type
 * @param g the Guard to match
 * @param x the value to match
 * @returns 
 *  - true if x is an array of `A`
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.Guardable<A>, x: unknown): x is T<A>;
/**
 * Returns a `Functors.Guardable<t<a>>` which returns true if `x` is of type `T<A>`
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const isStrArr = Arr.guardOf(Str.guard);
 * 
 * isStrArr([])                 // true
 * isStrArr(['a'])              // true
 * isStrArr(['a', 'b'])         // true
 * isStrArr(['a', 'b', 'c'])    // true
 * isStrArr(['a', 'b', 'c', 1]) // false
 * ```
 * 
 * @param g The functor
 * @returns the new guard to check if `x` is an array of `A`
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.Guardable<A>): (x: unknown) => x is T<A>;
export function guardOf<A>(g: Functors.Guardable<A>, x?: unknown): any
{
  const c = (g: Functors.Guardable<A>, x: unknown): x is T<A> =>
  {
    if (!guard(x))
    {
      return false;
    }

    for (let i = 0; i < x.length; i++)
    {
      if (!g(x[i]))
      {
        return false;
      }
    }

    return true;
  };

  if (arguments.length === 2)
  {
    return c(g, x);
  }

  return (x: unknown): x is T<A> => c(g, x);
};

//#endregion

//#region comparables

/**
 * Compares two arrays `T<A>` with a given `Comparable<A>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.cmp(Str.cmp, ['a'], ['a']) // 0
 * Arr.cmp(Str.cmp, ['a'], ['b']) // -1
 * Arr.cmp(Str.cmp, ['b'], ['a']) // 1
 * Arr.cmp(Str.cmp, ['a'], ['a', 'b']) // -1
 * Arr.cmp(Str.cmp, ['a', 'b'], ['a']) // 1
 * Arr.cmp(Str.cmp, ['a', 'b'], ['a', 'b']) // 0
 * Arr.cmp(Str.cmp, ['a', 'b', 'c'], ['a', 'b']) // 1
 * Arr.cmp(Str.cmp, ['a', 'b', 'c'], ['a', 'b', 'c']) // 0
 * ```
 * 
 * @template A the array's type
 * @param cmp the comparator
 * @param a the first array to compare
 * @param b the second array to compare
 * @returns 
 *  - 1 if `a` is greater then `b`
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Compares two arrays `T<A>` with a given `ComparableModule<A>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.cmp(Str, ['a'], ['a']) // 0
 * Arr.cmp(Str, ['a'], ['b']) // -1
 * Arr.cmp(Str, ['b'], ['a']) // 1
 * Arr.cmp(Str, ['a'], ['a', 'b']) // -1
 * Arr.cmp(Str, ['a', 'b'], ['a']) // 1
 * Arr.cmp(Str, ['a', 'b'], ['a', 'b']) // 0
 * Arr.cmp(Str, ['a', 'b', 'c'], ['a', 'b']) // 1
 * Arr.cmp(Str, ['a', 'b', 'c'], ['a', 'b', 'c']) // 0
 * ```
 * 
 * @template A the array's type
 * @param cmp the comparator module
 * @param a the first array to compare
 * @param b the second array to compare
 * @returns 
 *  - 1 if `a` is greater then `b`
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Compares two arrays `T<A>` with a given `Comparable<a>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.cmp(Str.cmp, ['a'])(['a']) // 0
 * Arr.cmp(Str.cmp, ['a'])(['b']) // -1
 * Arr.cmp(Str.cmp, ['b'])(['a']) // 1
 * Arr.cmp(Str.cmp, ['a'])(['a', 'b']) // -1
 * Arr.cmp(Str.cmp, ['a', 'b'])(['a']) // 1
 * Arr.cmp(Str.cmp, ['a', 'b'])(['a', 'b']) // 0
 * Arr.cmp(Str.cmp, ['a', 'b', 'c'])(['a', 'b']) // 1
 * Arr.cmp(Str.cmp, ['a', 'b', 'c'])(['a', 'b', 'c']) // 0
 * ```
 * 
 * @param cmp the comparator
 * @param a the first array to compare
 * @returns the unary function which returns 
 *  - 1 if `b` is greater then `a`
 *  - -1 if `b` is less than `a`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>, a: T<A>): (b: T<A>) => Functors.ComparableResult;
/**
 * Compares two arrays `T<A>` with a given `ComparableModule<A>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.cmp(Str, ['a'])(['a']) // 0
 * Arr.cmp(Str, ['a'])(['b']) // -1
 * Arr.cmp(Str, ['b'])(['a']) // 1
 * Arr.cmp(Str, ['a'])(['a', 'b']) // -1
 * Arr.cmp(Str, ['a', 'b'])(['a']) // 1
 * Arr.cmp(Str, ['a', 'b'])(['a', 'b']) // 0
 * Arr.cmp(Str, ['a', 'b', 'c'])(['a', 'b']) // 1
 * Arr.cmp(Str, ['a', 'b', 'c'])(['a', 'b', 'c']) // 0
 * ```
 * 
 * @param cmp the comparator module
 * @param a the first array to compare
 * @returns the unary function which returns 
 *  - 1 if `b` is greater then `a`
 *  - -1 if `b` is less than `a`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>, a: T<A>): (b: T<A>) => Functors.ComparableResult;
/**
 * Compares two arrays `T<A>` with a given `Comparable<A>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const cmpstr = Arr.cmp(Str.cmp);
 * 
 * cmpstr(['a'], ['a']) // 0
 * cmpstr(['a'], ['b']) // -1
 * cmpstr(['b'], ['a']) // 1
 * cmpstr(['a'], ['a', 'b']) // -1
 * cmpstr(['a', 'b'], ['a']) // 1
 * cmpstr(['a', 'b'], ['a', 'b']) // 0
 * cmpstr(['a', 'b', 'c'], ['a', 'b']) // 1
 * cmpstr(['a', 'b', 'c'], ['a', 'b', 'c']) // 0
 * ```
 * 
 * @param cmp the comparator
 * @returns the binary function which returns 
 *  - 1 if `a` is greater then `b`
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.Comparable<A>): (a: T<A>, b: T<A>) => Functors.ComparableResult;
/**
 * Compares two arrays `T<A>` with a given `ComparableModule<A>`.
 * 
 * @example 
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const cmpstr = Arr.cmp(Str);
 * 
 * cmpstr(['a'], ['a']) // 0
 * cmpstr(['a'], ['b']) // -1
 * cmpstr(['b'], ['a']) // 1
 * cmpstr(['a'], ['a', 'b']) // -1
 * cmpstr(['a', 'b'], ['a']) // 1
 * cmpstr(['a', 'b'], ['a', 'b']) // 0
 * cmpstr(['a', 'b', 'c'], ['a', 'b']) // 1
 * cmpstr(['a', 'b', 'c'], ['a', 'b', 'c']) // 0
 * ```
 * 
 * @param cmp the comparator module
 * @returns the binary function which returns 
 *  - 1 if `a` is greater then `b`
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` and `b` are equal
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(cmp: Functors.ComparableModule<A>): (a: T<A>, b: T<A>) => Functors.ComparableResult;
export function cmp<A>(cmp: Functors.Comparable<A> | Functors.ComparableModule<A>, a?: T<A>, b?: T<A>): any
{
  const _cmp = (x: T<A>, y: T<A>) =>
  {
    const c = typeof cmp === 'function' ? cmp : cmp.cmp;

    if (x.length > y.length)
    {
      return 1;
    } else if (x.length < y.length)
    {
      return -1;
    }

    let s = 0;

    for (let i = 0; i < x.length; i++)
    {
      s += c(x[i], y[i]);
    }

    if (s === 0)
    {
      return s;
    } else if (s >= 1)
    {
      return 1;
    } else
    {
      return -1;
    }
  };

  if (arguments.length === 3 && guard(a) && guard(b))
  {
    return _cmp(a, b);
  } else if (arguments.length === 2 && guard(a))
  {
    return (b: T<A>) => _cmp(a, b);
  } else if (arguments.length === 1)
  {
    return (a: T<A>, b: T<A>) => _cmp(a, b);
  }
};

/**
 * Compares two arrays `T<A>` with a given `Equatable<a>` and returns true if are identical.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.eq(Str.eq, ['a'], ['a'])            // true
 * Arr.eq(Str.eq, ['a'], ['b'])            // false
 * Arr.eq(Str.eq, ['b'], ['a'])            // false
 * Arr.eq(Str.eq, ['a'], ['a', 'b'])       // false
 * Arr.eq(Str.eq, ['a', 'b'], ['a'])       // false
 * Arr.eq(Str.eq, ['a', 'b'], ['b', 'a'])  // false
 * Arr.eq(Str.eq, ['a', 'b'], ['a', 'b'])  // true
 * ```
 * 
 * @template A the array's type
 * @param e the equatable functor
 * @param a the first array
 * @param b the second array
 * @returns 
 *  -  true if `a` and `b` are the equal
 *  -  false otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>, a: T<A>, b: T<A>): boolean;
/**
 * Compares two arrays `T<A>` with a given `EquatableModule<a>` and returns true if are identical.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.eq(Str, ['a'], ['a'])            // true
 * Arr.eq(Str, ['a'], ['b'])            // false
 * Arr.eq(Str, ['b'], ['a'])            // false
 * Arr.eq(Str, ['a'], ['a', 'b'])       // false
 * Arr.eq(Str, ['a', 'b'], ['a'])       // false
 * Arr.eq(Str, ['a', 'b'], ['b', 'a'])  // false
 * Arr.eq(Str, ['a', 'b'], ['a', 'b'])  // true
 * ```
 * 
 * @template A the array's type
 * @param e the equatable functor module
 * @param a the first array
 * @param b the second array
 * @returns 
 *  -  true if `a` and `b` are the equal
 *  -  false otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.EquatableModule<A>, a: T<A>, b: T<A>): boolean;
/**
 * Given an `Equatable<A>` and an array `T<A>`, returns a `Fn.Unary<T<A>, boolean>` function to compare `a` and `b`.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const eq = Arr.eq(Str.eq);
 * 
 * Arr.eq(Str.eq, ['a'])(['a'])            // true
 * Arr.eq(Str.eq, ['a'])(['b'])            // false
 * Arr.eq(Str.eq, ['b'])(['a'])            // false
 * Arr.eq(Str.eq, ['a'])(['a', 'b'])       // false
 * Arr.eq(Str.eq, ['a', 'b'])(['a'])       // false
 * Arr.eq(Str.eq, ['a', 'b'])(['b', 'a'])  // false
 * Arr.eq(Str.eq, ['a', 'b'])(['a', 'b'])  // true
 * ```
 * 
 * @param e the equatable functor
 * @param a the array
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Given an `EquatableModule<A>` and an array `T<A>`, returns a `Fn.Unary<T<A>, boolean>` function to compare `a` and `b`.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * Arr.eq(Str, ['a'])(['a'])            // true
 * Arr.eq(Str, ['a'])(['b'])            // false
 * Arr.eq(Str, ['b'])(['a'])            // false
 * Arr.eq(Str, ['a'])(['a', 'b'])       // false
 * Arr.eq(Str, ['a', 'b'])(['a'])       // false
 * Arr.eq(Str, ['a', 'b'])(['b', 'a'])  // false
 * Arr.eq(Str, ['a', 'b'])(['a', 'b'])  // true
 * ```
 * 
 * @param e the equatable functor module
 * @param a the array
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.EquatableModule<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Given an `Equatable<a>`, returns a `Fn.Binary<t<a>, t<a>, boolean>` function to compare `a` and `b`.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const eq = Arr.eq(Str.eq);
 * 
 * eq(['a'], ['a'])            // true
 * eq(['a'], ['b'])            // false
 * eq(['b'], ['a'])            // false
 * eq(['a'], ['a', 'b'])       // false
 * eq(['a', 'b'], ['a'])       // false
 * eq(['a', 'b'], ['b', 'a'])  // false
 * eq(['a', 'b'], ['a', 'b'])  // true
 * ```
 * 
 * @param e the equatable functor
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.Equatable<A>): Fn.Binary<T<A>, T<A>, boolean>;
/**
 * Given an `EquatableModule<a>`, returns a `Fn.Binary<t<a>, t<a>, boolean>` function to compare `a` and `b`.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const eq = Arr.eq(Str);
 * 
 * eq(['a'], ['a'])            // true
 * eq(['a'], ['b'])            // false
 * eq(['b'], ['a'])            // false
 * eq(['a'], ['a', 'b'])       // false
 * eq(['a', 'b'], ['a'])       // false
 * eq(['a', 'b'], ['b', 'a'])  // false
 * eq(['a', 'b'], ['a', 'b'])  // true
 * ```
 * 
 * @param e the equatable functor module
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(e: Functors.EquatableModule<A>): Fn.Binary<T<A>, T<A>, boolean>;
export function eq<A>(e: Functors.Equatable<A> | Functors.EquatableModule<A>, a?: T<A>, b?: T<A>): any
{
  const _eq = (x: T<A>, y: T<A>) =>
  {
    const _e = typeof e === 'function' ? e : e.eq;

    if (x.length !== y.length)
    {
      return false;
    }

    let s = 0;

    for (let i = 0; i < x.length; i++)
    {
      if (_e(x[i], y[i]))
      {
        continue;
      } else
      {
        return false;
      }
    }

    return true;
  };

  if (guard(a) && guard(b))
  {
    return _eq(a, b);
  } else if (guard(a) && !guard(b))
  {
    return (c: T<A>) => _eq(a, c);
  } else
  {
    return (c: T<A>, d: T<A>) => _eq(c, d);
  }
};

//#endregion

//#region native methods

/**
 * Concates `b` and `a` without modifying the original arrays.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.concat([10], [20])           // [10, 20]
 * ```
 * @param a the first array 
 * @param b the second array
 * @returns the concatenated array
 * @group Native methods
 * @since 4.0.0
 */
export function concat<A extends T<any>>(a: A, b: A): A;
/**
 * Returns a `Unary<a, a>` which concatenates `b` and `a` without modifying the original arrays.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.concat([10])([20])           // [20, 10]
 * ```
 * @param a the second array
 * @returns the unary function
 * @group Native methods
 * @since 4.0.0
 */
export function concat<A extends T<any>>(a: A): Fn.Unary<A, A>;
export function concat<A extends T<any>>(a: any, b?: any): any
{
  if (guard(b) && guard(a))
  {
    return a.concat(b);
  }

  return (b: A) => b.concat(a);
}

/**
 * Returns `true` if an array `A` contains `b`.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.contains(['a'], 'a') // true
 * Arr.contains(['a'], 'b') // false
 * ```
 * 
 * @template A the array's type
 * @param a 
 * @returns 
 *  - true if `b` is into `a`
 *  - false otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function contains<A>(a: T<A>, b: A): boolean;
/**
 * Checks if the given argument `b` is contained by the array passed to the `Fn.Unary<t<a>, boolean>` function.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.contains('a')(['a']) // true
 * Arr.contains('a')(['b']) // false
 * ```
 * 
 * @template A the array's type
 * @param a the value which should be checked
 * @returns the unary function
 * @group Native methods
 * @since 4.0.0
 */
export function contains<A>(a: A): Fn.Unary<T<A>, boolean>;
export function contains<A>(a: any, b?: any): any
{
  if (guard(a))
  {
    return a.indexOf(b) >= 0;
  }

  return (b: T<A>) => guard(b) && b.indexOf(a) >= 0;
}

/**
 * Determines whether all the members of an array `A` satisfy the specified predicate `p`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * Arr.every([10, 20], Num.isEven)      // true 
 * Arr.every([10, 21], Num.isEven)      // false 
 * ```
 * 
 * @template A the array's type
 * @param p 
 * @returns 
 *  - true if every element of `a` satisfies `p`
 *  - false otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function every<A>(a: T<A>, p: Predicate.T<A>): boolean;
/**
 * Returns a `Fn.Unary<t<a>, boolean>` which checks if the every element of the array `T<A>` satisfy the predicate `a`
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * Arr.every(Num.isEven)([10, 20])      // true 
 * Arr.every(Num.isEven)([10, 21])      // false 
 * ```
 * 
 * @template A the array's type
 * @param a the predicate 
 * @returns the unary function
 * @group Native methods
 * @since 4.0.0
 */
export function every<A>(a: Predicate.T<A>): Fn.Unary<T<A>, boolean>;
export function every<A>(a: any, p?: any): any
{
  if (guard(a) && typeof p === 'function')
  {
    return a.every(p);
  }

  return (b: T<A>) => b.every(a as Predicate.T<A>);
}

/**
 * Creates an array from an array-like object.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.from([1, 2, 3]) // [1, 2, 3]
 * Arr.from(new Set([1, 2, 3])) // [1, 2, 3]
 * ```
 * 
 * @param a an array-like object to convert to an array.
 * @returns the array
 * @group Native methods
 * @since 4.0.0
 */
export const from = Array.from;

/**
 * Fills an array `T<A>` with `a` from index `start` to `end`.
 * This does not modify the original array.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const x = Arr.make(4)
 * 
 * Arr.fill(x, 10, 0, 3)           // [10, 10, 10, 10]
 * Arr.fill(x, 10)                 // [10, 10, 10, 10]
 * ```
 * 
 * @template A the array's type
 * @param a the array
 * @param start 
 * @param end 
 * @returns 
 * @group Native methods
 * @since 4.0.0
 */
export function fill<A>(a: T<any>, b: A, start?: number, end?: number): T<A>;
/**
 * Fills an array `T<A>` with `a` from index `start` to `end`.
 * This does not modify the original array.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const x = Arr.make(4)
 * 
 * Arr.fill(10, 0, 3)(x)           // [10, 10, 10, 10]
 * Arr.fill(10)(x)                 // [10, 10, 10, 10]
 * ```
 * 
 * @template A the array's type
 * @param a the value to fill the array
 * @param b the start index
 * @param start the end index 
 * @returns 
 * @group Native methods
 * @since 4.0.0
 */
export function fill<A>(a: A, b?: number, start?: number): (a: T<any>, start2?: number, end2?: number) => T<A>;
export function fill<A>(a: T<any> | A, b?: any, start?: any, end?: any): any
{
  if (guard(a))
  {
    return a.fill(b, start, end);
  }

  return (c: T<A>, start2?: number, end2?: number) => c.fill(b, b ?? start2, start ?? end2);
}

/**
 * Returns the elements of an array `A` that meet the condition specified in a predicate `p`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * const x = [10, 20, 30];
 * 
 * Arr.filter(x, Num.gt(10))    // [20, 30]
 * Arr.filter(Num.gt(10))(x)    // [20, 30]
 * ```
 * 
 * @template A array's type
 * @param a the array to filter 
 * @param p the predicate to satisfy
 * @returns {T<A>}
 * @group Native methods
 * @since 4.0.0
 */
export function filter<A>(a: T<A>, p: Predicate.T<A>): T<A>;
/**
 * Returns a `Unary<t<a>, t<a>>`. Calling this function will filter the array passed as argument with the predicate `a`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * const x = [10, 20, 30];
 * 
 * Arr.filter(x, Num.gt(10))    // [20, 30]
 * Arr.filter(Num.gt(10))(x)    // [20, 30]
 * ```
 * 
 * @template A array's type
 * @param a the `Predicate.t<a>` 
 * @returns {Fn.Unary<T<A>, T<A>>}
 * @group Native methods
 * @since 4.0.0
 */
export function filter<A>(a: Predicate.T<A>): Fn.Unary<T<A>, T<A>>;
export function filter<A>(a: T<any> | Predicate.T<A>, p?: Predicate.T<A>): any
{
  if (guard(a) && predicateguard(p))
  {
    return a.filter(p);
  }

  return (b: T<A>) => b.filter(a as Predicate.T<A>);
}

/**
 * Finds the first value `a` with a given predicate `p` and returns `Option.some<a>` if found, otherwise returns `Option.none`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * const x = [10, 20, 30];
 * 
 * Arr.find(x, Num.gt(10))    // 20
 * Arr.find(x, Num.gt(30))    // null
 * ```
 * 
 * @template A array's type
 * @param p 
 * @returns 
 * @group Native methods
 * @since 4.0.0
 */
export function find<A>(a: T<A>, p: Predicate.T<A>): Option.T<A>;
/**
 * Finds the first value `a` with a given predicate `p` and returns `Option.some<a>` if found, otherwise returns `Option.none`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * const x = [10, 20, 30];
 * 
 * Arr.find(Num.gt(10))(x)    // 20
 * Arr.find(Num.gt(30))(x)    // null
 * ```
 * 
 * @template A array's type
 * @param a the search predicate
 * @returns 
 * @group Native methods
 * @since 4.0.0
 */
export function find<A>(a: Predicate.T<A>): Fn.Unary<T<A>, Option.T<A>>;
export function find<A>(a: T<A> | Predicate.T<A>, p?: Predicate.T<A>): any
{
  if (guard(a) && predicateguard(p))
  {
    return a.find(p) ?? null;
  }

  return (b: T<A>) => b.find(a as Predicate.T<A>) ?? null;
}

/**
 * Maps with the `mod.map` function an array `T<A>` by removing all elements that do not satisfy the predicate `mod.filter`.
 * The filter occurs before mapping the elements.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Functors, Num } from 'tiinvo';
 * 
 * const x = [-10, 10]
 * const mod: Functors.FilterMappableModule<number, number> = {
 *    filter: Num.gt(0),
 *    map: Num.add(10),
 * };
 * 
 * Arr.filterMap(x, mod)     // [20]
 * ```
 * 
 * @template A array's type
 * @template B returning array's type
 * @group Compound native methods
 * @since 4.0.0
 */
export function filterMap<A, B>(a: T<A>, mod: Functors.FilterMappableModule<A, B>): T<B>;
/**
 * Maps with the `mod.map` function an array `T<A>` by removing all elements that do not satisfy the predicate `mod.filter`.
 * The filter occurs before mapping the elements.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Functors, Num } from 'tiinvo';
 * 
 * const x = [-10, 10]
 * const mod: Functors.FilterMappableModule<number, number> = {
 *    filter: Num.gt(0),
 *    map: Num.add(10),
 * };
 * 
 * Arr.filterMap(mod)(x)     // [20]
 * ```
 * 
 * @template A array's type
 * @template B returning array's type
 * @param a the filter mappable functor
 * @returns the unary function
 * @group Compound native methods
 * @since 4.0.0
 */
export function filterMap<A, B>(a: Functors.FilterMappableModule<A, B>): Fn.Unary<T<A>, T<B>>;
export function filterMap<A, B>(a: T<A> | Functors.FilterMappableModule<A, B>, mod?: Functors.FilterMappableModule<A, B>): any
{
  const gmod = (x: unknown): x is Functors.FilterMappableModule<A, B> => typeof x === 'object' && x !== null && 'filter' in x && 'map' in x;

  if (guard(a) && gmod(mod))
  {
    const r = [] as B[];

    for (let i = 0; i < a.length; i++)
    {
      const v = a[i];

      if (mod.filter(v))
      {
        r.push(mod.map(v));
      }
    }

    return r;
  } else if (gmod(a) && !Array.isArray(a))
  {
    return (b: T<A>) =>
    {
      const r = [] as B[];

      for (let i = 0; i < b.length; i++)
      {
        if (a.filter(b[i]))
        {
          r.push(a.map(b[i]));
        }
      }

      return r;
    };
  }

  throw new Error('Invalid functor passed, required Functors.FilterReduceable<a, b>');
}

/**
 * Like a normal array reduce, but after a filter has been applied on each iteration.
 * 
 * If the filter is satisfied, then the reduce occurs for the current element, otherwise it skips.
 * 
 * @example
 *
 * ```ts
 * import { Arr, Functors, Num } from 'tiinvo'
 * 
 * const mod: Functors.FilterReduceableModule<number, number> = {
 *    default: 0,
 *    filter: Num.isPositive,
 *    reduce: Num.add,
 * }
 * 
 * const x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
 * 
 * Arr.filterReduce(x, mod)         // 15
 * Arr.filterReduce(mod)(x)         // 15
 * ```
 *
 * @template A array's type
 * @template B returning reduced type
 * @param a the array to filter and reduce
 * @param mod the functor
 * @returns the filtered and reduced output
 * @group Compound native methods
 * @since 4.0.0
 */
export function filterReduce<A, B>(a: T<A>, mod: Functors.FilterReduceableModule<A, B>): B;
/**
 * Like a normal array reduce, but after a filter has been applied on each iteration.
 * 
 * If the filter is satisfied, then the reduce occurs for the current element, otherwise it skips.
 * 
 * @example
 *
 * ```ts
 * import { Arr, Functors, Num } from 'tiinvo'
 * 
 * const mod: Functors.FilterReduceableModule<number, number> = {
 *    default: 0,
 *    filter: Num.isPositive,
 *    reduce: Num.add,
 * }
 * 
 * const x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
 * 
 * Arr.filterReduce(x, mod)         // 15
 * Arr.filterReduce(mod)(x)         // 15
 * ```
 *
 * @template A array's type
 * @template B returning value type
 * @param a the functor module type
 * @returns the unary function
 * @group Compound native methods
 * @since 4.0.0
 */
export function filterReduce<A, B>(a: Functors.FilterReduceableModule<A, B>): Fn.Unary<T<A>, B>;
export function filterReduce<a, b>(a: any, mod?: Functors.FilterReduceableModule<a, b>): any
{
  if (guard(a) && typeof mod === 'object' && mod !== null && 'filter' in mod && 'reduce' in mod && 'default' in mod)
  {
    let out = mod.default;

    for (let i = 0; i < a.length; i++)
    {
      if (mod.filter(a[i] as a))
      {
        out = mod.reduce(out, a[i] as a);
      }
    }

    return out;
  } else if (typeof a === 'object' && a !== null && 'filter' in a && 'reduce' in a && 'default' in a)
  {
    return (b: T<a>) =>
    {
      let out = a.default;

      for (let i = 0; i < b.length; i++)
      {
        if (a.filter(b[i]))
        {
          out = a.reduce(out, b[i]);
        }
      }

      return out;
    };
  } else
  {
    throw new Error('Invalid functor passed, required Functors.FilterReduceable<a, b>');
  }
}

/**
 * Flatterns an array.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const x = [[10, 20], [['hello', 'world']]]
 * 
 * Arr.flat(x)      // [10, 20, ['hello', 'world']]
 * Arr.flat(x, 2)   // [10, 20, 'hello', 'world']
 * ```
 * 
 * @template A array's type
 * @template D flattern depth
 * @param a the array to flattern
 * @param d the depth (optional)
 * @returns the flattened array
 * @group Native methods
 * @since 4.0.0
 */
export function flat<A extends T<any>, D extends number = 1>(a: A, d?: D): FlatArray<A, D>;
/**
 * Returns a `Unary<a, FlatArray<a, d>>` which flatterns an array `b` with the depth `a`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const x = [[10, 20], [['hello', 'world']]]
 * 
 * Arr.flat()(x)    // [10, 20, ['hello', 'world']]
 * Arr.flat(2)(x)   // [10, 20, 'hello', 'world']
 * ```
 * 
 * @template A array's type
 * @template D flattern depth type
 * @param a the depth (optional)
 * @returns the unary function
 * @group Native methods
 * @since 4.0.0
 */
export function flat<A extends T<any>, D extends number = 1>(a?: D): Fn.Unary<A, FlatArray<A, D>>;
export function flat<a extends T<any>, d extends number = 1>(a: a | d, d?: d): any
{
  if (guard(a))
  {
    return a.flat(d) as FlatArray<a, d>;
  }

  return (b: a) => b.flat(a) as FlatArray<a, d>;
}

/**
 * Maps a matrix `t<t<a>>` to a `t<b>` using the mapping function `m`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo';
 * 
 * const x = [[2, 3], [4, 5]]
 * 
 * Arr.flatMap(x, Num.add(1))         // [3, 4, 5, 6]
 * ```
 * 
 * @template A the matrix elements' type
 * @template B the flatterned mapped array type
 * @param a the matrix
 * @param m the mappable functor
 * @returns the flatmapped array
 * @group Compound native methods
 * @since 4.0.0
 */
export function flatMap<A, B>(a: T<T<A>>, m: Functors.Mappable<A, B>): T<B>;
/**
 * Returns a `Fn.Unary<a[][]>, b[]>` which aps a matrix `T<A>[]` to a `b[]` using the mapping function `a`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo';
 * 
 * const x = [[2, 3], [4, 5]]
 * 
 * Arr.flatMap(Num.add(1))(x)         // [3, 4, 5, 6]
 * ```
 * 
 * @template A the matrix elements' type
 * @template B the flatterned mapped array type
 * @param a the mappable functor
 * @returns the unary function
 * @group Compound native methods
 * @since 4.0.0
 */
export function flatMap<A, B>(a: Functors.Mappable<A, B>): Fn.Unary<T<T<A>>, T<B>>;
export function flatMap<A, B>(a: T<T<A>> | Functors.Mappable<A, B>, m?: any): any
{
  if (guard(a) && typeof m === 'function')
  {
    return flat((a as T<T<A>>).map(b => b.map(m)), 1);
  }

  return (b: T<T<A>>) => flat(b.map(c => c.map(a as Functors.Mappable<A, B>)), 1);
}

/**
 * Determines whether an array includes a certain element, returning `true` or `false` as appropriate.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.includes(x, 30)        // true
 * Arr.includes(30)(x)        // true
 * Arr.includes(x, 40)        // false
 * Arr.includes(40)(x)        // false
 * ```
 * 
 * @template A array's type
 * @param a the array
 * @param b the value to look up for
 * @returns 
 *  - true if `b` has been found
 *  - false otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function includes<A>(a: T<A>, b: A): boolean;
/**
 * Determines whether an array includes a certain element, returning `true` or `false` as appropriate.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.includes(x, 30)        // true
 * Arr.includes(30)(x)        // true
 * Arr.includes(x, 40)        // false
 * Arr.includes(40)(x)        // false
 * ```
 * 
 * @template A array's type
 * @param a the value to look for
 * @returns the unary function which returns 
 *  - `true` if `a` has been found in the passed array
 *  - `false` otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function includes<A>(a: A): Fn.Unary<T<A>, boolean>;
export function includes<A>(a: T<A> | A, b?: A): any
{
  if (guard(a) && arguments.length === 2)
  {
    return a.includes(b as A);
  }

  return (b: T<A>) => b.includes(a as A);
}

/**
 * Gets the length of the array. This is a number one higher than the highest index in the array.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.length([])         // 0
 * Arr.length([1])        // 1
 * Arr.length([1, 2, 3])  // 3
 * ```
 * 
 * @template a array's type
 * @param t the array
 * @returns the length of the array
 * @group Native methods
 * @since 4.0.0
 */
export const length = <A>(t: T<A>): number => t.length;

/**
 * Adds all the elements of an array into a string, separated by the specified separator string.
 * 
 * **Important**, despites native JavaScript implementation, the default separator is an empty string if not specified
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo' 
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.join(x, '-')     // '10-20-30'
 * Arr.join(x)          // '102030'
 * ```
 * 
 * @template A array's type
 * @template B the string type to use as divider
 * @param a the array
 * @param b the string used as divider
 * @returns the concatenated string
 * @group Native methods
 * @since 4.0.0
 */
export function join<A extends any[], B extends string>(a: A, b?: B): string;
/**
 * Returns a `Unary<t<a>, string>` function which adds all the elements of an array into a string, separated by the specified separator string `a`.
 * 
 * **Important**, despites native JavaScript implementation, the default separator is an empty string if not specified
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo' 
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.join('-')(x)     // '10-20-30'
 * Arr.join()(x)        // '102030'
 * ```
 * 
 * @template A array's type
 * @template B the string type to use as divider
 * @param a the string used as divider
 * @returns the concatenated string
 * @group Native methods
 * @since 4.0.0
 */
export function join<A extends any[], B extends string>(a?: B): Fn.Unary<A, string>;
export function join<A extends any[], B extends string>(a: A | B, b?: B): any
{
  if (guard(a))
  {
    return a.join(b ?? '');
  }

  return (b: A) => b.join(a ?? '');
}

/**
 * Creates a new array `t<Option.None>` of a given size.
 * 
 * If a default value `d` is specified, then the returning array will be `t<typeof d>`
 * 
 * The default value could be either an arbitrary type or a `Fn.Unary<number, a>` type.
 * 
 * If a unary function is passed as `d`, the returning array will be `t<ReturnType<d>>`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * Arr.make(3)                              // [undefined, undefined, undefined]
 * Arr.make(3, 'hello')                     // ['hello', 'hello', 'hello']
 * ```
 * 
 * @template A the array's type
 * @param size the size of the array
 * @param d this is the value used to fill the array
 * @returns the array
 * @group Factories
 * @since 4.0.0
 */
export function make<A = undefined>(size: number, d?: A): A extends Option.None ? T<Option.None> : T<A>;
/**
 * Creates a new array `t<Option.None>` of a given size.
 * 
 * If a default value `d` is specified, then the returning array will be `t<typeof d>`
 * 
 * The default value could be either an arbitrary type or a `Fn.Unary<number, a>` type.
 * 
 * If a unary function is passed as `d`, the returning array will be `t<ReturnType<d>>`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * Arr.make(3, x => ((x + 1) * 10).toString(16))  // ['a', '14', '1e']
 * ```
 * 
 * @template A the array's type
 * @param size the size of the array
 * @param d a function used to return a value for every index of an array
 * @returns the array
 * @group Factories
 * @since 4.0.0
 */
export function make<A = undefined>(size: number, d?: Fn.Unary<number, A>): A extends Option.None ? T<Option.None> : T<A>;
export function make<A = undefined>(size: number, d?: A | Fn.Unary<number, A>): A extends Option.None ? T<Option.None> : T<A>
{
  type b = A extends Option.None ? T<Option.T<A>> : T<A>;
  const a = [] as b;

  for (let i = 0; i < size; i++)
  {
    if (typeof d === 'function')
    {
      a.push((d as Fn.Unary<number, A>)(i) as any);
    } else
    {
      a.push(d as any);
    }
  }

  return a;
};

/**
 * Maps an array of elements `a` to an array of elements `b` using the mapping function `m`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo';
 * 
 * const x = [1, 2, 3];
 * const m = Num.mul(2);
 * 
 * Arr.map(x, m)      // [2, 4, 6]
 * ```
 * 
 * @template A the array's type 
 * @template B the return type of the mappable functor
 * @param a the array
 * @param m the functors used to map the array
 * @returns the mapped array
 * @group Native methods
 * @since 4.0.0
 */
export function map<A, B>(a: T<A>, m: Functors.Mappable<A, B>): T<B>;
/**
 * Maps an array of elements `a` to an array of elements `b` using the mapping function `m`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo';
 * 
 * const x = [1, 2, 3];
 * const m = Num.mul(2);
 * 
 * Arr.map(m)(x)      // [2, 4, 6]
 * ```
 * 
 * @template A the array's type 
 * @template B the return type of the mappable functor
 * @param a the functors used to map the array
 * @returns the unary function which takes an array `b` and returns an array `c` with type `T<B>`
 * @group Native methods
 * @since 4.0.0
 */
export function map<A, B>(a: Functors.Mappable<A, B>): Fn.Unary<T<A>, T<B>>;
export function map<A, B>(a: T<A> | Functors.Mappable<A, B>, m?: any): any
{
  if (guard(a))
  {
    return a.map(m);
  }

  return (b: T<A>) => b.map(a);
}

/**
 * Returns true if all elements of `a` do not meet the condition specified in the predicate `m`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 3, 5]
 * const p = Num.isEven
 * 
 * Arr.none(x, p)       // true
 * Arr.none(p)(x)       // true
 * ```
 * 
 * @template A array's type
 * @param a the array
 * @param m the predicate `Predicate.t<a>`
 * @returns 
 *  - true if none of the elements satisfy `m`
 *  - false otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function none<A>(a: T<A>, m: Predicate.T<A>): boolean;
/**
 * Returns a `Unary<t<a>, boolean> which once called returns true if all elements of `b` do not meet the condition specified in the predicate `a`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 3, 5]
 * const p = Num.isEven
 * 
 * Arr.none(x, p)       // true
 * Arr.none(p)(x)       // true
 * ```
 * 
 * @template A array's type
 * @param a the predicate `Predicate.t<a>`
 * @returns the unary function which takes an array `T<A>` and returns
 *  - `true` if every element does not satisfy the predicate `a`
 *  - `false` otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function none<A>(a: Predicate.T<A>): Fn.Unary<T<A>, boolean>;
export function none<A>(a: T<A> | Predicate.T<A>, m?: Predicate.T<A>): any
{
  if (guard(a) && predicateguard(m))
  {
    return !a.some(m);
  }

  return (b: T<A>) => !b.some(a as Predicate.T<A>);
}

/**
 * Returns a new array from a set of elements.
 * 
 * ```typescript
 * import { Arr } 'tiinvo';
 * 
 * Arr.of(1, 2, 3) // [1, 2, 3]
 * ```
 * 
 * @param a
 * 
 * @template T
 * @param items A set of elements to include in the new array object.
 * @returns the new array
 * @group Native methods
 * @since 4.0.0
 */
export const of = Array.of;

/**
 * Split an array `T<A>` into a tuple `[T<A>, T<A>]` based on predicate `f`; 
 * 
 * If the element `a` of `T<A>` satisfies the predicate `f`, then it will be pushed to 
 * the first element of the tuple, otherwise to the second.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const a = [1, 2, 3, 4, 5]
 * 
 * Arr.partition(a, Num.isEven)     // [[2, 4], [1, 3, 5]]
 * ```
 *
 * @template A array's type
 * @param a the array
 * @param f the filterable functor
 * @returns the partitioned array
 * @group Misc
 * @since 4.0.0
 */
export function partition<A>(a: T<A>, f: Functors.Filterable<A>): [T<A>, T<A>];
/**
 * Returns a `Fn.Unary<T<A>, [T<A>, T<A>]>` which splits an array `T<A>` into a tuple `[T<A>, T<A>]` based on predicate `f`; 
 * 
 * If the element `a` of `T<A>` satisfies the predicate `f`, then it will be pushed to 
 * the first element of the tuple, otherwise to the second.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const a = [1, 2, 3, 4, 5]
 * 
 * Arr.partition(Num.isEven)(a)     // [[2, 4], [1, 3, 5]]
 * ```
 *
 * @template A array's type
 * @param a the filterable functor
 * @returns the unary function which takes an array `T<A>` as an argument and returns
 *    a tuple `[T<A>, T<A>]`
 * @group Misc
 * @since 4.0.0
 */
export function partition<A>(a: Functors.Filterable<A>): Fn.Unary<T<A>, [T<A>, T<A>]>;
export function partition<A>(a: T<A> | Functors.Filterable<A>, f?: Functors.Filterable<A>): any
{
  const _part = (_x: T<A>, _f: Functors.Filterable<A>): [T<A>, T<A>] =>
  {
    const _o: [T<A>, T<A>] = [[], []];

    for (let i = 0; i < _x.length; i++)
    {
      if (_f(_x[i]))
      {
        _o[0].push(_x[i]);
      } else
      {
        _o[1].push(_x[i]);
      }
    }

    return _o;
  };

  if (guard(a) && typeof f === 'function')
  {
    return _part(a, f);
  } else if (typeof a === 'function')
  {
    return (c: T<A>) => _part(c, a);
  }
}

/**
 * Returns a random element of an array `A`.
 * 
 * If the array is empty, returns `Option.None`
 * 
 * ```typescript
 * import { Arr } 'tiinvo';
 * 
 * Arr.random(['a', 'b', 'c']) // 'a' or 'b' or 'c'
 * ```
 * 
 * @template A array's type
 * @param a the array
 * @returns a random element of the array
 *  - `Option.Some<A>` if the array is not empty
 *  - `Option.None` if the array is empty
 * @group Misc
 * @since 4.0.0
 */
export const random = <A>(a: A[]): Option.T<A> => (a[Math.floor(Math.random() * a.length)]) as Option.T<A> ?? null;

/**
 * Calls the specified callback function for all the elements in an array. 
 * 
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduce(x, Num.add, 0)       // 15
 * ```
 * 
 * @template A array's type
 * @template B returned value type
 * @param a the array
 * @param r the reducer
 * @returns the reduced value
 * @group Native methods
 * @since 4.0.0
 */
export function reduce<A, B>(a: T<A>, r: Reducer<A, B>, b: B): B;
/**
 * Sets a callback function for all the elements in an array 
 * passed to the returned `Unary<t<a>, b>`. 
 * 
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduce(Num.add, 0)(x)       // 15
 * ```
 * 
 * @template A array's type
 * @template B returned value type
 * @param a the array
 * @param r the reducer
 * @returns the reduced value
 * @group Native methods
 * @since 4.0.0
 */
export function reduce<A, B>(a: Reducer<A, B>, r: B): (b: T<A>) => B;
export function reduce<A, B>(a: T<A> | Reducer<A, B>, r: any, b?: any): any
{
  if (guard(a))
  {
    return a.reduce(r, b);
  }

  return (c: T<A>) => c.reduce(a, r);
}

/**
 * Calls the specified callback function for all the elements in an array, 
 * in descending order. 
 * 
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduceRight(x, Num.sub, 0)       // -15
 * ```
 * 
 * @template A array's type
 * @template B returned value type
 * @param a the array
 * @param r the reducer
 * @returns the reduced value
 * @group Native methods
 * @since 4.0.0
 */
export function reduceRight<A, B>(a: T<A>, r: Reducer<A, B>, b: B): B;
/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * Sets a callback function for all the elements in an array, in descending order. 
 * 
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduceRight(Num.sub, 0)(x)       // -15
 * ```
 * 
 * @template A array's type
 * @template B returned value type
 * @param a the array
 * @param r the reducer
 * @returns the reducer unary function
 * @group Native methods
 * @since 4.0.0
 */
export function reduceRight<A, B>(a: Reducer<A, B>, r: B): Fn.Unary<T<A>, B>;
export function reduceRight<A, B>(a: T<A> | Reducer<A, B>, r: any, b?: any): any
{
  if (guard(a))
  {
    return a.reduceRight(r, b);
  }

  return (c: T<A>) => c.reduceRight(a, r);
}

/**
 * Reverses the elements in an array in place without mutating the original array.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.reverse([10, 20, 30])      // [30, 20, 10]
 * ```
 * 
 * @template A the array's type
 * @param a the array
 * @returns the reversed array
 * @group Native methods
 * @since 4.0.0
 */
export const reverse = <A>(a: T<A>): T<A> => a.reverse();

/**
 * Shuffles an array
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * Arr.shuffle([10, 20, 30])  // could be [10, 30, 20] or [20, 30, 10] or [30, 20, 10] or ...
 * ```
 * 
 * @template A the array's type
 * @param a the array
 * @returns the shuffled array
 * @group Misc
 * @since 4.0.0
 */
export const shuffle = <A>(a: T<A>): T<A> =>
{
  const b: A[] = [].slice.call(a);

  for (let i = b.length - 1; i > 0; i--)
  {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
};

/**
 * Returns a copy of a section of an array. 
 * 
 * For both start and end, a negative index can be used to indicate an offset 
 * from the end of the array. 
 * 
 * For example, -2 refers to the second to last element of the array.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.slice(x)         // [10, 20, 30]
 * Arr.slice(x, 2)      // [30]
 * Arr.slice(x, 1, 2)   // [20]
 * ```
 *
 * @template A the array type
 * @param a the array
 * @param s the optional start index
 * @param s the optional end index
 * @returns the sliced array
 * @group Native methods
 * @since 4.0.0
 */
export function slice<A extends T<any>>(a: A, s?: number, e?: number): A;
/**
 * Returns a `Fn.Unary<a, a>` which copies a section of an array. 
 * 
 * For both start and end, a negative index can be used to indicate an offset 
 * from the end of the array. 
 * 
 * For example, -2 refers to the second to last element of the array.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const x = [10, 20, 30]
 * 
 * Arr.slice()(x)       // [10, 20, 30]
 * Arr.slice(2)(x)      // [30]
 * Arr.slice(1, 2)(x)   // [20]
 * ```
 *
 * @template A the array type
 * @param a the array
 * @param s the optional start index
 * @param s the optional end index
 * @returns the unary function which slices the array
 * @group Native methods
 * @since 4.0.0
 */
export function slice<A extends T<any>>(a?: number, s?: number): Fn.Unary<A, A>;
export function slice<A extends T<any>>(a: A | number, s?: number, e?: number): any
{
  if (guard(a))
  {
    return a.slice(s, e);
  }

  return (b: A) => b.slice(a, s);
}

/**
 * Determines whether some members of an array `A` satisfy the specified predicate `p`.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * Arr.some([1, 2, 3], Num.isEven)       // true
 * ```
 *
 * @template A the array's type
 * @param a the array
 * @param p the predicate
 * @returns return true if some values satisfy the predicate
 * @group Native methods
 * @since 4.0.0
 */
export function some<A>(a: T<A>, p: Predicate.T<A>): boolean;
/**
 * Returns a `Unary<t<a>, boolean>` function which determines whether some members of an array `b` satisfy the specified predicate `a`.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * Arr.some(Num.isEven)([1, 2, 3])       // true
 * ```
 *
 * @template A the array's type
 * @param a the predicate
 * @returns the unary function which returns 
 *  - `true` if some values satisfy the predicate
 *  - `false` otherwise
 * @group Native methods
 * @since 4.0.0
 */
export function some<A>(a: Predicate.T<A>): Fn.Unary<T<A>, boolean>;
export function some<A>(a: T<A> | Predicate.T<A>, p?: Predicate.T<A>): any
{
  if (guard(a) && predicateguard(p))
  {
    return a.some(p);
  }

  return (b: T<A>) => b.some(a as Predicate.T<A>);
}

/**
 * Sorts an array of elements `a` using the specified comparator `cmp`.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [3, 1, 2, 5, 4]
 * const s = Num.asc;
 * 
 * Arr.sort(x, s)     // [1, 2, 3, 4, 5]
 * ```
 *
 * @template A the array's type
 * @param a the array
 * @param cmp the comparable functor
 * @returns the sorted array
 * @group Native methods
 * @since 4.0.0
 */
export function sort<A>(a: T<A>, cmp: Functors.Comparable<A>): T<A>;
/**
 * Returns a `Unary<t<a>, t<a>>` function which sorts an array of elements `b` using the specified comparator `a`.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const s = Arr.sort(Num.asc);
 * 
 * s([3, 1, 2, 5, 4])     // [1, 2, 3, 4, 5]
 * ```
 *
 * @template A the array's type
 * @param a the comparable functor
 * @returns the unary function which sorts the array
 * @group Native methods
 * @since 4.0.0
 */
export function sort<A>(a: Functors.Comparable<A>): Fn.Unary<T<A>, T<A>>;
export function sort<A>(a: T<A> | Functors.Comparable<A>, cmp?: Functors.Comparable<A>): any
{
  if (guard(a))
  {
    return a.sort(cmp);
  }

  return (b: T<A>) => b.sort(a);
}

/**
 * Returns an array of pairs from the two arrays with the length of the shorter one.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const a0 = [1, 2]
 * const a1 = [3, 4, 5]
 * 
 * Arr.zip(a0, a1)    // [[1, 3], [2, 4]]
 * ```
 *
 * @template A the array's type
 * @param a the first array
 * @param b the second array
 * @returns the zipped array
 * @group Misc
 * @since 4.0.0
 */
export function zip<A extends any[]>(a: A, b: A): T<A>;
/**
 * Returns a `Fn.Unary<a, t<a>>` which once called returns an array of pairs 
 * from the two arrays with the length of the shorter one.
 *
 * @example
 *
 * ```ts
 * import { Arr } from 'tiinvo'
 * 
 * const a0 = [1, 2]
 * const a1 = [3, 4, 5]
 * 
 * Arr.zip(a1)(a0)    // [[1, 3], [2, 4]]
 * ```
 *
 * @template A the array's type
 * @param a the second array
 * @returns the unary function which zips the array
 * @group Misc
 * @since 4.0.0
 */
export function zip<A extends any[]>(a: A): Fn.Unary<A, T<A>>;
export function zip<A extends any[]>(a: A, b?: A): any
{
  const _zip = (x: A, y: A): T<A> =>
  {
    const _o = new Array(Math.min(x.length, y.length)) as unknown as T<A>;

    for (let i = 0; i < _o.length; i++)
    {
      _o[i] = [
        x[i],
        y[i]
      ] as A;
    }

    return _o;
  };

  if (guard(a) && guard(b))
  {
    return _zip(a, b);
  }

  return (c: A) => _zip(c, a);
}


//#endregion

//#region predicates

/**
 * Returns `true` if the array `t<any>` is empty.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.empty([])     // true
 * Arr.empty(['a'])  // false
 * ```
 * 
 * @param t the array
 * @returns
 *  - `true` if is empty
 *  - `false` otherwise 
 * @group Predicates
 * @since 4.0.0
 */
export const empty = (t: T<any>): boolean => t.length === 0;

/**
 * Returns `true` if the array `t<any>` is populated.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.populated([])     // false
 * Arr.populated(['a'])  // true
 * ```
 * 
 * @param t the array 
 * @returns 
 *  - `true` if the array is populated
 *  - `false` otherwise
 * @group Predicates
 * @since 4.0.0
 */
export const populated = (t: T<any>): boolean => t.length > 0;

//#endregion