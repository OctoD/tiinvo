import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import * as Sequence from './Sequence.js';

const sortsymbol = Symbol('Sequence.sorted');

/**
 * A sorted list is a `Sequence.t<a>` which all elements stored in it are sorted by a `Comparable<a>` functor.
 */
export type t<a> = Sequence.t<a> & {
  [sortsymbol]: Functors.Comparable<a>;
};

//#region factories

/**
 * Makes an immutable `SortedSequence.t<a>` from a `ComparableModule<a>` and (optionally) a list of arguments as initial values
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 10, 20, 30)         
 * const s1 = SortedSequence.make(Str, 'hello', 'world')
 * 
 * SortedSequence.guardOf(Num.guard)(s0)    // true
 * SortedSequence.guardOf(Num.guard)(s1)    // false
 * SortedSequence.guardOf(Str.guard)(s0)    // false
 * SortedSequence.guardOf(Str.guard)(s1)    // true
 * ```
 *
 * @since 4.0.0
 */
export function make<a>(mod: Functors.Comparable<a>, ...args: a[]): t<a>
export function make<a>(mod: Functors.ComparableModule<a>, ...args: a[]): t<a>
export function make<a>(mod: Functors.Comparable<a> | Functors.ComparableModule<a>, ...args: a[]): t<a>
{
  const cmp = typeof mod === 'function' ? mod : mod.cmp;
  const seq = Sequence.make.apply(null, args.sort(cmp)) as t<a>;

  seq[sortsymbol] = cmp;
  
  return seq;
};

//#endregion

//#region guardables

/**
 * Checks if the parameter `x` is a `SortedSequence.t<unknown>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Str } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Str)
 * 
 * SortedSequence.guard(s)         // true
 * SortedSequence.guard([])        // false
 * ```
 *
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t<unknown> => Sequence.guard(x) && sortsymbol in x;

/**
 * Checks if the parameter `x` is a `SortedSequence.t<a>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 1, 2)
 * const s1 = SortedSequence.make(Str, 'hello', 'world')
 * const isStrSortedList = SortedSequence.guardOf(Str.guard);
 * 
 * isStrSortedList(s0)      // false
 * isStrSortedList(s1)      // true
 * ```
 *
 * @since 4.0.0
 */
export const guardOf = <a>(g: Functors.Guardable<a>) => (x: unknown): x is t<a> => guard(x) && toArray(x).every(g);

//#endregion

//#region comparables

/**
 * Returns 0 if two sorted lists are the same, -1 if a is less than b or 1 if a is more than b
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)
 * 
 * SortedSequence.cmp(s0, s1)      // 0
 * SortedSequence.cmp(s0)(s1)      // 0
 * 
 * SortedSequence.cmp(s0, s2)      // -1
 * SortedSequence.cmp(s0)(s2)      // -1
 * 
 * SortedSequence.cmp(s2, s0)      // 1
 * SortedSequence.cmp(s2)(s0)      // 1
 * ```
 *
 * @since 4.0.0
 */
export function cmp<a extends t<any>>(a: a, b: a): Functors.ComparableResult;
export function cmp<a extends t<any>>(a: a): Fn.Unary<a, Functors.ComparableResult>;
export function cmp<a extends t<any>>(a: a, b?: a): any {
  if (guard(a) && guard(b)) {
    return Sequence.cmp({ cmp: a[sortsymbol] }, a, b);
  }

  return (c: a) => Sequence.cmp({ cmp: a[sortsymbol] }, a, c);
}

/**
 * Returns true if two sorted lists are the same
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)
 * 
 * SortedSequence.eq(s0, s1)      // true
 * SortedSequence.eq(s0)(s1)      // true
 * 
 * SortedSequence.eq(s0, s2)      // false
 * SortedSequence.eq(s0)(s2)      // false
 * ```
 *
 * @since 4.0.0
 */
export function eq<a extends t<any>>(a: a, b: a): boolean;
export function eq<a extends t<any>>(a: a): Fn.Unary<a, boolean>;
export function eq<a extends t<any>>(a: a, b?: a): any {
  if (guard(a) && guard(b)) {
    return Sequence.cmp({ cmp: a[sortsymbol] }, a, b) === 0;
  }

  return (b: a) => Sequence.cmp({ cmp: a[sortsymbol] }, a, b) === 0;
}

//#endregion

//#region mappables

/**
 * Maps a `SortedSequence.t<a>` to a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make<number>(Num, 3, 1, 2)
 * const m = Num.mul(2)
 * 
 * SortedSequence.map(s, m)        // SortedSequence.t(2, 4, 6)
 * SortedSequence.map(m)(s)        // SortedSequence.t(2, 4, 6)
 * ```
 *
 * @since 4.0.0
 */
export function map<a, b>(a: t<a>, m: Functors.Mappable<a, b>): t<b>;
export function map<a, b>(a: Functors.Mappable<a, b>): Fn.Unary<t<a>, t<b>>;
export function map<a, b>(a: t<a> | Functors.Mappable<a, b>, m?: any): any {
  if (guard(a) && typeof m === 'function') {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ... [... a].map(m)]);
  }

  return (c: t<a>) => {
    return make.apply(null, [{ cmp: c[sortsymbol] as any }, ... [... c].map(a as Functors.Mappable<a, b>)]);
  };
}

//#endregion

//#region operators

/**
 * Adds an element to the end of the `Sequence.t<a>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 10, 20)
 * 
 * SortedSequence.add(s0, 30)       // SortedSequence(10, 20, 30)
 * SortedSequence.add(30)(s0)       // SortedSequence(10, 20, 30)
 * ```
 *
 * @since 4.0.0
 */
export function add<a extends t<any>, b>(a: a, b: b): t<b>;
export function add<a extends t<any>, b>(a: b): Fn.Unary<a, t<b>>;
export function add<a extends t<any>, b>(a: a | b, b?: b): any {
  if (guard(a) && arguments.length === 2) {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ...a, b]);
  }

  return (c: a) => make.apply(null, [{ cmp: c[sortsymbol] as any }, ...c, a]);
}

/**
 * Concatenates two `SortedSequence.t<a>` and `SortedSequence.t<b>` and return a new `SortedSequence.t<a>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 10, 20)
 * const s1 = SortedSequence.make(Num, 30, 40)
 * 
 * SortedSequence.concat(s0, s1)       // SortedSequence(10, 20, 30, 40)
 * SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
 * ```
 *
 * @since 4.0.0
 */
export function concat<a, b>(a: t<a>, b: t<b>): t<a & b>;
export function concat<a, b>(a: t<b>): <a>(x: t<a>) => t<a & b>;
export function concat<a, b>(a: t<a> | t<b>, b?: t<b>): any {
  if (guard(a) && guard(b)) {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ...a, ...b!]);
  }

  return (x: t<b>) => make.apply(null, [{ cmp: x[sortsymbol] as any }, ...a, ...x]);
}

//#endregion

//#region getters

/**
 * Counts the number of elements that satisfy a given predicate 
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Num, 10, 20, 30)
 * 
 * SortedSequence.count(s, Num.gt(10))   // 2
 * SortedSequence.count(Num.gt(10))(s)   // 2
 * ```
 *
 * @since 4.0.0
 */
export const count = Sequence.count;

/**
 * 
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Num, 'hello', 'world')
 * 
 * SortedSequence.get(s, 0)       // 'hello'
 * SortedSequence.get(s, 9)       // null
 * ```
 *
 * @since 4.0.0
 */
export const get = Sequence.get;

/**
 * 
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 10, 20, 30)
 * const s1 = SortedSequence.make(Num)
 * 
 * SortedSequence.first(s0)       // 10
 * SortedSequence.first(s1)       // null
 * ```
 *
 * @since 4.0.0
 */
export const first = Sequence.first;

/**
 * Gets a Sequence.t<a>'s last element.
 *
 * Returns Option.None if none is found.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 10, 20, 30)
 * const s1 = SortedSequence.make(Num)
 * 
 * SortedSequence.last(s0)       // 30
 * SortedSequence.last(s1)       // null
 * ```
 * ```
 *
 * @since 4.0.0
 */
export const last = Sequence.last;

/**
 * Gets the length of a `SortedSequence.t<a>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Num, 1, 2, 3)
 * 
 * SortedSequence.length(s)           // 3
 * ```
 *
 * @since 4.0.0
 */
export const length = Sequence.length;

/**
 * Gets values of a `SortedSequence.t<a>` as an immutable indexed object. 
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Str } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Str, 'hello', 'world')
 * 
 * SortedSequence.values(s)       // { 0: 'hello', 1: 'world' }
 * ```
 *
 * @since 4.0.0
 */
export const values = Sequence.values;

//#endregion

//#region predicates

/**
 * Returns `true` if the sorted list is empty.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Num)
 * const s1 = SortedSequence.make(Num, 10)
 * 
 * SortedSequence.empty(s)                // true
 * SortedSequence.empty(s1)               // false
 * ```
 *
 * @since 4.0.0
 */
export const empty = Sequence.empty;

/**
 * Returns `true` if the sorted list is populated.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s = SortedSequence.make(Num, 10, 20, 30)
 * 
 * SortedSequence.populated(s)                      // true
 * SortedSequence.populated(SortedSequence.make(Num))   // false
 * ```
 *
 * @since 4.0.0
 */
export const populated = Sequence.populated;

//#endregion

//#region serializables

/**
 * Converts a `SortedSequence.t<a>` to an array of `a[]`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const sl = SortedSequence.make(Num, 3, 2, 1)
 * 
 * SortedSequence.toArray(sl)       // [1, 2, 3]
 * ```
 *
 * @since 4.0.0
 */
export const toArray = Sequence.toArray;

/**
 * Converts a `SortedSequence.t<a>` to a jsonizable value
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const sl = SortedSequence.make(Num, 3, 2, 1)
 * 
 * SortedSequence.toJSON(sl)       // [1, 2, 3]
 * ```
 *
 * @since 4.0.0
 */
export const toJSON = Sequence.toJSON;

/**
 * Converts a `SortedSequence.t<a>` to a set of `Set<a>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const sl = SortedSequence.make(Num, 3, 2, 1)
 * 
 * SortedSequence.toMap(sl)      // Map([0, 1], [1, 2], [2, 3])
 * ```
 *
 * @since 4.0.0
 */
export const toMap = Sequence.toMap;

/**
 * Converts a `SortedSequence.t<a>` to a set of `Set<a>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const sl = SortedSequence.make(Num, 3, 2, 1)
 * 
 * SortedSequence.toSet(sl)      // Set(1, 2, 3)
 * ```
 *
 * @since 4.0.0
 */
export const toSet = Sequence.toSet;

/**
 * Converts a `SortedSequence.t<a>` to a string
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const sl = SortedSequence.make(Num, 3, 2, 1)
 * 
 * SortedSequence.toString(sl)       // "1,2,3"
 * ```
 *
 * @since 4.0.0
 */
export const toString = Sequence.toString;

//#endregion
