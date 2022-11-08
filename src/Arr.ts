import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import { defaultsymbol } from './Functors.js';
import type * as Option from './Option.js';
import type * as Predicate from './Predicate.js';
import { guard as predicateguard } from './Predicate.js';
import type * as Result from './Result.js';

export type t<a> = a[];

export type Reducer<a, b> = {
  (p: b, c: a): b;
  (p: b, c: a, i: number): b;
  (p: b, c: a, i: number, t: t<a>): b;
};

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
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t<unknown> => Array.isArray(x);

/**
 * Returns true if `b` is an array of `a`.
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
 * ````
 * 
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export function guardOf<a>(g: Functors.Guardable<a>, x: unknown): x is t<a>;
export function guardOf<a>(g: Functors.Guardable<a>): (x: unknown) => x is t<a>;
export function guardOf<a>(g: Functors.Guardable<a>, x?: unknown): any {
  const c = (g: Functors.Guardable<a>, x: unknown): x is t<a> => {
    if (!guard(x)) {
      return false;
    }

    for (let i = 0; i < x.length; i++) {
      if (!g(x[i])) {
        return false;
      }
    }

    return true;
  };

  if (arguments.length === 2) {
    return c(g, x);
  }

  return (x: unknown): x is t<a> => c(g, x);
};

//#endregion

//#region comparables

/**
 * Compares two arrays `a[]` with a given `Comparable<a>`.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const cmp = Arr.cmp(Str.cmp);
 * 
 * console.log(cmp(['a'], ['a'])) // 0
 * console.log(cmp(['a'], ['b'])) // -1
 * console.log(cmp(['b'], ['a'])) // 1
 * console.log(cmp(['a'], ['a', 'b'])) // -1
 * console.log(cmp(['a', 'b'], ['a'])) // 1
 * console.log(cmp(['a', 'b'], ['a', 'b'])) // 0
 * console.log(cmp(['a', 'b', 'c'], ['a', 'b'])) // 1
 * console.log(cmp(['a', 'b', 'c'], ['a', 'b', 'c'])) // 0
 * ```
 * 
 * @returns 
 * @since 4.0.0
 */
export const cmp = <a>(cmp: Functors.Comparable<a>) => (a: t<a>, b: t<a>): Functors.ComparableResult => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }

  let s = 0;

  for (let i = 0; i < a.length; i++) {
    s += cmp(a[i], b[i]);
  }

  if (s === 0) {
    return s;
  } else if (s >= 1) {
    return 1;
  } else {
    return -1;
  }
};

/**
 * Compares two arrays `a[]` with a given `Equatable<a>` and returns true if are identical.
 * 
 * ```ts
 * import { Arr, Str } from 'tiinvo';
 * 
 * const eq = Arr.eq(Str.eq);
 * 
 * console.log(eq(['a'], ['a']))            // true
 * console.log(eq(['a'], ['b']))            // false
 * console.log(eq(['b'], ['a']))            // false
 * console.log(eq(['a'], ['a', 'b']))       // false
 * console.log(eq(['a', 'b'], ['a']))       // false
 * console.log(eq(['a', 'b'], ['b', 'a']))  // false
 * console.log(eq(['a', 'b'], ['a', 'b']))  // true
 * ```
 * 
 * @returns 
 * @since 4.0.0
 */
export const eq = <a>(e: Functors.Equatable<a>): Functors.Equatable<t<a>> => (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  let s = 0;

  for (let i = 0; i < a.length; i++) {
    s += e(a[i], b[i]) ? 0 : 1;
  }

  return s === 0;
};;

//#endregion

//#region native methods

/**
 * Concates `b` and `a` without modifying the original arrays.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.concat([10], [20])           // [10, 20]
 * Arr.concat([10])([20])           // [20, 10]
 * ```
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export function concat<a extends t<any>>(a: a, b: a): a;
export function concat<a extends t<any>>(a: a): Fn.Unary<a, a>;
export function concat<a extends t<any>>(a: any, b?: any): any {
  if (guard(b) && guard(a)) {
    return a.concat(b);
  }

  return (b: a) => b.concat(a);
}

/**
 * Returns `true` if an array `a` contains `b`.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.contains(['a'], 'a') // true
 * Arr.contains(['a'], 'b') // false
 * Arr.contains('a')(['a']) // true
 * Arr.contains('a')(['b']) // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export function contains<a>(a: t<a>, b: a): boolean;
export function contains<a>(b: a): Fn.Unary<a[], boolean>;
export function contains<a>(a: any, b?: any): any {
  if (guard(a)) {
    return a.indexOf(b) >= 0;
  }

  return (b: t<a>) => guard(b) && b.indexOf(a) >= 0;
}

/**
 * Determines whether all the members of an array `a` satisfy the specified predicate `p`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * Arr.every([10, 20], Num.isEven)      // true 
 * Arr.every([10, 21], Num.isEven)      // false 
 * Arr.every(Num.isEven)([10, 20])      // true 
 * Arr.every(Num.isEven)([10, 21])      // false 
 * ```
 * 
 * @param p 
 * @returns 
 * @since 4.0.0
 */
export function every<a>(a: t<a>, p: Predicate.t<a>): boolean;
export function every<a>(a: Predicate.t<a>): Fn.Unary<t<a>, boolean>;
export function every<a>(a: t<any> | Predicate.t<a>, p?: Predicate.t<a>): any {
  if (guard(a) && !!p) {
    return a.every(p);
  }

  return (b: t<a>) => b.every(a as Predicate.t<a>);
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
 * @param a
 * @returns
 * @since 4.0.0
 */
export const from = Array.from;

/**
 * Returns the element `Result.t<a>` at index `i` of an array `a[]`. 
 * 
 * If the index `i` is out of range, a `Err` will be returned.
 * 
 * ```ts
 * import { Arr } 'tiinvo';
 * 
 * Arr.get([10, 20], 1)   // 20
 * Arr.get([10, 20], 3)   // Error("Index out of bounds 3 for length 2")
 * Arr.get(1)([10, 20])   // 20
 * Arr.get(3)([10, 20])   // Error("Index out of bounds 3 for length 2")
 * ```
 * 
 * @param i 
 * @returns 
 * @since 4.0.0
 */
export function get<a>(a: t<a>, i: number): Result.t<a>;
export function get<a>(a: number): Fn.Unary<t<a>, Result.t<a>>;
export function get<a>(a: t<a> | number, i?: number): any {
  if (guard(a) && typeof i === 'number') {
    if (i >= 0 && i < a.length) {
      return a[i] as Result.t<a>;
    }

    return new RangeError(`Index out of bounds ${i} for length ${a.length}`);
  }

  return (b: t<a>) => {
    if (a >= 0 && a < b.length) {
      return b[a as number] as Result.t<a>;
    }

    return new RangeError(`Index out of bounds ${a} for length ${b.length}`);
  };
};

/**
 * Fills an array `a[]` with `a` from index `start` to `end`.
 * This do not modify the original array.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * const x = Arr.make(4)
 * 
 * Arr.fill(x, 10, 0, 3)           // [10, 10, 10, 10]
 * Arr.fill(10, 0, 3)(x)           // [10, 10, 10, 10]
 * Arr.fill(x, 10)                 // [10, 10, 10, 10]
 * Arr.fill(10)(x)                 // [10, 10, 10, 10]
 * 
 * ```
 * 
 * @param a 
 * @param start 
 * @param end 
 * @returns 
 * @since 4.0.0
 */
export function fill<a>(a: t<any>, b: a, start?: number, end?: number): t<a>;
export function fill<a>(a: a, b?: number, start?: number): (a: t<any>, start2?: number, end2?: number) => t<a>;
export function fill<a>(a: t<any> | a, b?: any, start?: any, end?: any): any {
  if (guard(a)) {
    return a.fill(b, start, end);
  }

  return (c: t<a>, start2?: number, end2?: number) => c.fill(b, b ?? start2, start ?? end2);
}

/**
 * Returns the elements of an array `a` that meet the condition specified in a predicate `p`.
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
 * @param p 
 * @returns 
 * @since 4.0.0
 */
export function filter<a>(a: t<a>, p: Predicate.t<a>): t<a>;
export function filter<a>(a: Predicate.t<a>): Fn.Unary<t<a>, t<a>>;
export function filter<a>(a: t<any> | Predicate.t<a>, p?: Predicate.t<a>): any {
  if (guard(a) && predicateguard(p)) {
    return a.filter(p);
  }

  return (b: t<a>) => b.filter(a as Predicate.t<a>);
}

/**
 * Finds the first value `a` with a given predicate `p` and returns `Option.some<a>` if found, otherwise returns `Option.none`.
 * 
 * ```ts
 * import { Arr, Num } 'tiinvo';
 * 
 * const x = [10, 20, 30];
 * const gt10 = Num.gt(10);
 * const gt30 = Num.gt(30);
 * 
 * Arr.find(x, gt10)    // 20
 * Arr.find(x, gt30)    // null
 * Arr.find(gt10)(x)    // 20
 * Arr.find(gt30)(x)    // null
 * ```
 * 
 * @param p 
 * @returns 
 * @since 4.0.0
 */
export function find<a>(a: t<a>, p: Predicate.t<a>): Option.t<a>;
export function find<a>(a: Predicate.t<a>): Fn.Unary<t<a>, Option.t<a>>;
export function find<a>(a: t<a> | Predicate.t<a>, p?: Predicate.t<a>): any {
  if (guard(a) && predicateguard(p)) {
    return a.find(p) ?? null;
  }

  return (b: t<a>) => b.find(a as Predicate.t<a>) ?? null;
}

/**
 * Returns the first element of an array `a`. If the array is empty, returns `none`.
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
 * @returns 
 * @since 4.0.0
 */
export const first = <a>(t: t<a>): Option.t<a> => t[0] ?? null as Option.t<a>;

/**
 * Returns the first element of an array `a` or `b` if the array is empty.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.firstOr([10, 20], 0)        // 10
 * Arr.firstOr(0)([10, 20])        // 10
 * Arr.firstOr([], 0)              // 0
 * Arr.firstOr(0)([])              // 0
 * ```
 * 
 * @since 4.0.0
 */
export function firstOr<a>(t: t<a>, b: a): Option.t<a>;
export function firstOr<a>(t: a): Fn.Unary<t<a>, Option.t<a>>;
export function firstOr<a>(t: t<a> | a, b?: any): any {
  if (guard(t)) {
    return t[0] ?? b;
  }

  return (b: t<a>) => b[0] ?? t;
}

/**
 * Maps with the `mod.map` function an array `a[]` by removing all elements that do not satisfy the predicate `mod.filter`.
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
 * Arr.filterMap(mod)(x)     // [20]
 * ```
 * 
 * @since 4.0.0
 */
export function filterMap<a, b>(a: t<a>, mod: Functors.FilterMappableModule<a, b>): t<a>;
export function filterMap<a, b>(a: Functors.FilterMappableModule<a, b>): Fn.Unary<t<a>, t<a>>;
export function filterMap<a, b>(a: t<a> | Functors.FilterMappableModule<a, b>, mod?: Functors.FilterMappableModule<a, b>): any {
  const gmod = (x: unknown): x is Functors.FilterMappableModule<a, b> => typeof x === 'object' && x !== null && 'filter' in x && 'map' in x;

  if (guard(a) && gmod(mod)) {
    const r = [] as b[];

    for (let i = 0; i < a.length; i++) {
      const v = a[i];

      if (mod.filter(v)) {
        r.push(mod.map(v));
      }
    }

    return r;
  } else if (gmod(a) && !Array.isArray(a)) {
    return (b: t<a>) => {
      const r = [] as b[];

      for (let i = 0; i < b.length; i++) {
        if (a.filter(b[i])) {
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
 *    [Functors.defaultsymbol]: 0,
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
 * @since 4.0.0
 */
export function filterReduce<a, b>(a: t<a>, mod: Functors.FilterReduceableModule<a, b>): b;
export function filterReduce<a, b>(a: Functors.FilterReduceableModule<a, b>): Fn.Unary<t<a>, b>;
export function filterReduce<a, b>(a: any, mod?: Functors.FilterReduceableModule<a, b>): any {
  if (guard(a) && typeof mod === 'object' && mod !== null && 'filter' in mod && 'reduce' in mod && defaultsymbol in mod) {
    let out = mod[defaultsymbol];

    for (let i = 0; i < a.length; i++) {
      if (mod.filter(a[i] as a)) {
        out = mod.reduce(out, a[i] as a);
      }
    }

    return out;
  } else if (typeof a === 'object' && a !== null && 'filter' in a && 'reduce' in a && defaultsymbol in a) {
    return (b: t<a>) => {
      let out = a[defaultsymbol];

      for (let i = 0; i < b.length; i++) {
        if (a.filter(b[i])) {
          out = a.reduce(out, b[i]);
        }
      }

      return out;
    };
  } else {
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
 * Arr.flat()(x)    // [10, 20, ['hello', 'world']]
 * Arr.flat(2)(x)   // [10, 20, 'hello', 'world']
 * ```
 * 
 * @since 4.0.0
 */
export function flat<a extends t<any>, d extends number = 1>(a: a, d?: d): FlatArray<a, d>;
export function flat<a extends t<any>, d extends number = 1>(a?: d): Fn.Unary<a, FlatArray<a, d>>;
export function flat<a extends t<any>, d extends number = 1>(a: a | d, d?: d): any {
  if (guard(a)) {
    return a.flat(d) as FlatArray<a, d>;
  }

  return (b: a) => b.flat(a) as FlatArray<a, d>;
}

/**
 * Maps a matrix `a[][]` to a `b[]` using the mapping function `m`.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo';
 * 
 * const x = [[2, 3], [4, 5]]
 * 
 * Arr.flatMap(x, Num.add(1))         // [3, 4, 5, 6]
 * Arr.flatMap(Num.add(1))(x)         // [3, 4, 5, 6]
 * ```
 * 
 * @since 4.0.0
 */
export function flatMap<a, b>(a: t<t<a>>, m: Functors.Mappable<a, b>): t<a>;
export function flatMap<a, b>(a: Functors.Mappable<a, b>): (a: t<t<a>>) => t<a>;
export function flatMap<a, b>(a: t<t<a>> | Functors.Mappable<a, b>, m?: any): any {
  if (guard(a) && typeof m === 'function') {
    return flat((a as t<t<a>>).map(b => b.map(m)), 1);
  }

  return (b: t<t<a>>) => flat(b.map(c => c.map(a as Functors.Mappable<a, b>)), 1);
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
 * @since 4.0.0
 */
export function includes<a>(a: t<a>, b: a): boolean;
export function includes<a>(a: a): Fn.Unary<t<a>, boolean>;
export function includes<a>(a: t<a> | a, b?: a): any {
  if (guard(a) && arguments.length === 2) {
    return a.includes(b as a);
  }

  return (b: t<a>) => b.includes(a as a);
}

/**
 * Returns the last element of an array `a`. If the array is empty, returns `none`.
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
 * @returns 
 * @since 4.0.0
 */
export const last = <a>(t: t<a>): Option.t<a> => t[t.length - 1] ?? null as Option.t<a>;

/**
 * Returns the last element of an array `a` or `b` if the array is empty.
 * 
 * @example
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.lastOr([10, 20], 0)        // 20
 * Arr.lastOr(0)([10, 20])        // 20
 * Arr.lastOr([], 0)              // 0
 * Arr.lastOr(0)([])              // 0
 * ```
 * 
 * @since 4.0.0
 */
export function lastOr<a>(t: t<a>, b: a): Option.t<a>;
export function lastOr<a>(t: a): Fn.Unary<t<a>, Option.t<a>>;
export function lastOr<a>(t: t<a> | a, b?: a): any {
  if (guard(t)) {
    return t[t.length - 1] ?? b;
  }

  return (b: t<a>) => b[b.length - 1] ?? t;
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
 * @since 4.0.0
 */
export const length = <a>(t: t<a>): number => t.length;

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
 * Arr.join('-')(x)     // '10-20-30'
 * Arr.join(x)          // '102030'
 * Arr.join()(x)        // '102030'
 * ```
 * 
 * @since 4.0.0
 */
export function join<a extends any[], b extends string>(a: a, b?: b): string;
export function join<a extends any[], b extends string>(a?: b): Fn.Unary<a, string>;
export function join<a extends any[], b extends string>(a: any, b?: any): any {
  if (guard(a)) {
    return a.join(b ?? '');
  }

  return (b: a) => b.join(a ?? '');
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
 * Arr.make(3, x => ((x + 1) * 10).toString(16))  // ['a', '14', '1e']
 * ```
 * 
 * @since 4.0.0
 */
export const make = <a = undefined>(size: number, d?: a | Fn.Unary<number, a>): a extends Option.None ? t<Option.None> : t<a> => {
  type b = a extends Option.None ? t<Option.t<a>> : t<a>;
  const a = [] as b;

  for (let i = 0; i < size; i++) {
    if (typeof d === 'function') {
      a.push((d as Fn.Unary<number, a>)(i) as any);
    } else {
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
 * Arr.map(m)(x)      // [2, 4, 6]
 * ```
 * 
 * @since 4.0.0
 */
export function map<a, b>(a: t<a>, m: Functors.Mappable<a, b>): t<b>;
export function map<a, b>(a: Functors.Mappable<a, b>): Fn.Unary<t<a>, t<b>>;
export function map<a, b>(a: t<a> | Functors.Mappable<a, b>, m?: any): any {
  if (guard(a)) {
    return a.map(m);
  }

  return (b: t<a>) => b.map(a);
}

/**
 * Returns true if all elements of `a` do not meet the condition specified in the predicate `p`.
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
 * @since 4.0.0
 */
export function none<a>(a: t<a>, m: Predicate.t<a>): boolean;
export function none<a>(a: Predicate.t<a>): Fn.Unary<t<a>, boolean>;
export function none<a>(a: t<a> | Predicate.t<a>, m?: Predicate.t<a>): any {
  if (guard(a) && predicateguard(m)) {
    return !a.some(m);
  }

  return (b: t<a>) => !b.some(a as Predicate.t<a>);
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
 * @returns
 * @since 4.0.0
 */
export const of = Array.of;
/**
 * Returns a random element of an array `a`.
 * 
 * ```typescript
 * import { Arr } 'tiinvo';
 * 
 * Arr.random(['a', 'b', 'c']) // 'a' or 'b' or 'c'
 * ```
 * 
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export const random = <a>(a: a[]) => a[Math.floor(Math.random() * a.length)];

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduce(x, Num.add, 0)       // 15
 * Arr.reduce(Num.add, 0)(x)       // 15
 * ```
 * 
 * @since 4.0.0
 */
export function reduce<a, b>(a: t<a>, r: Reducer<a, b>, b: b): b;
export function reduce<a, b>(a: Reducer<a, b>, r: b): (b: t<a>) => b;
export function reduce<a, b>(a: t<a> | Reducer<a, b>, r: any, b?: any): any {
  if (guard(a)) {
    return a.reduce(r, b);
  }

  return (c: t<a>) => c.reduce(a, r);
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * 
 * @example
 * 
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3, 4, 5]
 * 
 * Arr.reduceRight(x, Num.sub, 0)       // -15
 * Arr.reduceRight(Num.sub, 0)(x)       // -15
 * ```
 * 
 * @since 4.0.0
 */
export function reduceRight<a, b>(a: t<a>, r: Reducer<a, b>, b: b): b;
export function reduceRight<a, b>(a: Reducer<a, b>, r: b): (b: t<a>) => b;
export function reduceRight<a, b>(a: t<a> | Reducer<a, b>, r: any, b?: any): any {
  if (guard(a)) {
    return a.reduceRight(r, b);
  }

  return (c: t<a>) => c.reduceRight(a, r);
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
 * @since 4.0.0
 */
export const reverse = <a>(a: t<a>): t<a> => a.reverse();

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
 * @since 4.0.0
 */
export const shuffle = <a>(a: t<a>): t<a> => {
  const b: a[] = [].slice.call(a);

  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
};

/**
 * Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
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
 * Arr.slice()(x)       // [10, 20, 30]
 * Arr.slice(2)(x)      // [30]
 * Arr.slice(1, 2)(x)   // [20]
 * ```
 *
 * @since 4.0.0
 */
export function slice<a extends t<any>>(a: a, s?: number, e?: number): a;
export function slice<a extends t<any>>(a?: number, s?: number): Fn.Unary<a, a>;
export function slice<a extends t<any>>(a: a | number, s?: number, e?: number): any {
  if (guard(a)) {
    return a.slice(s, e);
  }

  return (b: a) => b.slice(a, s);
}

/**
 * Determines whether some members of an array `a` satisfy the specified predicate `p`.
 *
 * @example
 *
 * ```ts
 * import { Arr, Num } from 'tiinvo'
 * 
 * const x = [1, 2, 3]
 * const p = Num.isEven
 * 
 * Arr.some(x, p)       // true
 * Arr.some(p)(x)       // true
 * ```
 *
 * @since 4.0.0
 */
export function some<a>(a: t<a>, p: Predicate.t<a>): boolean;
export function some<a>(a: Predicate.t<a>): Fn.Unary<t<a>, boolean>;
export function some<a>(a: t<a> | Predicate.t<a>, p?: Predicate.t<a>): any {
  if (guard(a) && predicateguard(p)) {
    return a.some(p);
  }

  return (b: t<a>) => b.some(a as Predicate.t<a>);
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
 * Arr.sort(s)(x)     // [1, 2, 3, 4, 5]
 * ```
 *
 * @since 4.0.0
 */
export function sort<a>(a: t<a>, cmp: Functors.Comparable<a>): t<a>;
export function sort<a>(a: Functors.Comparable<a>): Fn.Unary<t<a>, t<a>>;
export function sort<a>(a: t<a> | Functors.Comparable<a>, cmp?: Functors.Comparable<a>): any {
  if (guard(a)) {
    return a.sort(cmp);
  }

  return (b: t<a>) => b.sort(a);
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
 * Arr.zip(a1)(a0)    // [[1, 3], [2, 4]]
 * ```
 *
 * @since 4.0.0
 */
export function zip<a extends any[]>(a: a, b: a): t<a>;
export function zip<a extends any[]>(a: a): Fn.Unary<a, t<a>>;
export function zip<a extends any[]>(a: a, b?: a): any {
  const _zip = (x: a, y: a): t<a> => {
    const _o = new Array(Math.min(x.length, y.length)) as unknown as t<a>;

    for (let i = 0; i < _o.length; i++) {
      _o[i] = [
        x[i],
        y[i]
      ] as a;
    }

    return _o;
  };

  if (guard(a) && guard(b)) {
    return _zip(a, b);
  }

  return (c: a) => _zip(c, a);
}


//#endregion

//#region predicates

/**
 * Returns `true` if the array `a[]` is empty.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.empty([])     // true
 * Arr.empty(['a'])  // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export const empty = <a>(t: t<a>): boolean => t.length === 0;

/**
 * Returns `true` if the array `a[]` is populated.
 * 
 * ```ts
 * import { Arr } from 'tiinvo';
 * 
 * Arr.populated([])     // false
 * Arr.populated(['a'])  // true
 * ```
 * 
 * @param a 
 * @returns 
 * @since 4.0.0
 */
export const populated = <a>(t: t<a>): boolean => t.length > 0;

//#endregion