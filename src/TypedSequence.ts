import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import * as Sequence from './Sequence.js';

const guardsymbol = Symbol('sequence.guard');

/**
 * The typed version of a `Sequence.t<a>`.
 */
export type t<a> = Sequence.t<a> & {
  [guardsymbol]: Functors.Guardable<a>;
};

//#region factories

/**
 * Creates a `TypedSequence.t<a>` starting from a `Guardable<a>` or a `GuardableModule<a>`
 * 
 * You can add initial values as arguments.
 * 
 * If an argument does pass the guard check, the function will throw a TypeError
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const ts0 = TypedSequence.make(Num, 1, 2, 3)
 * const ts1 = TypedSequence.make(Num.guard, 1, 2, 3)
 * 
 * ts0 === ts1      // true
 * ```
 *
 * @since 4.0.0
 */
export function make<a>(g: Functors.Guardable<a>, ...values: a[]): t<a>;
export function make<a>(g: Functors.GuardableModule<a>, ...values: a[]): t<a>;
export function make<a>(g: Functors.Guardable<a> | Functors.GuardableModule<a>, ...values: a[]): t<a> {
  if (typeof g === 'function' || ('guard' in g && typeof g.guard === 'function')) {
    const _t = Sequence.make.apply(null, values) as t<a>;

    if (typeof g === 'function') {
      if (values.every(g)) {
        _t[guardsymbol] = g;

        return _t;
      }
    } else {
      if (values.every(g.guard)) {
        _t[guardsymbol] = g.guard;

        return _t;
      }
    }

    throw new TypeError("Non homogeneous arguments");
  } else {
    throw new TypeError("Invalid guard argument, must be a Guardable or GuardableModule functor");
  }
}

//#endregion

//#region guards

/**
 * Checks if the parameter `x` is a `TypedSequence.t<unknown>`
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Sequence, Num } from 'tiinvo'
 * 
 * const a = TypedSequence.make(Num)
 * const b = Sequence.make()
 * 
 * TypedSequence.guard(a)     // true
 * TypedSequence.guard(b)     // false
 * ```
 *
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t<unknown> => Sequence.guard(x) && guardsymbol in x;

//#endregion

//#region operators

/**
 * Adds an element to the end of the `Sequence.t<a>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * 
 * TypedSequence.append(s0, 30)       // TypedSequence(10, 20, 30)
 * TypedSequence.append(30)(s0)       // TypedSequence(10, 20, 30)
 * ```
 *
 * @since 4.0.0
 */
export function append<a>(a: t<a>, b: a): t<a>;
export function append<a>(a: a): Fn.Unary<t<a>, t<a>>;
export function append<a>(a: t<a> | a, b?: any): any {
  if (guard(a) && arguments.length === 2) {
    const p = [{ guard: a[guardsymbol] }, ...a, b] as Parameters<typeof make>;
    return make.apply(null, p);
  }

  return (b: t<a>) => {
    const p = [{ guard: b[guardsymbol] }, ...b, a] as Parameters<typeof make>;
    return make.apply(null, p);
  };
}

/**
 * Concatenates two `TypedSequence.t<a>` and `TypedSequence.t<b>` and return a new `TypedSequence.t<a>`.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * const s1 = TypedSequence.make(Num, 30, 40)
 * 
 * TypedSequence.concat(s0, s1)       // TypedSequence(10, 20, 30, 40)
 * TypedSequence.concat(s1)(s0)       // TypedSequence(10, 20, 30, 40)
 * ```
 *
 * @since 4.0.0
 */
export function concat<a extends t<any>>(a: a, b: a): a;
export function concat<a extends t<any>>(a: a): Fn.Unary<a, a>;
export function concat<a extends t<any>>(a: a, b?: a): any {
  if (guard(a) && guard(b)) {
    return make.apply(null, [{ guard: a[guardsymbol] }, ...a, ...b]);
  }

  return (b: a) => make.apply(null, [{ guard: b[guardsymbol] }, ...b, ...a]);
}

/**
 * Adds an element to the start of the `TypedSequence.t<a>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * 
 * TypedSequence.prepend(s0, 30)       // TypedSequence.make(Num, 30, 10, 20)
 * TypedSequence.prepend(30)(s0)       // TypedSequence.make(Num, 30, 10, 20)
 * ```
 *
 * @since 4.0.0
 */
export function prepend<a>(a: t<a>, b: a): t<a>;
export function prepend<a>(a: a): Fn.Unary<t<a>, t<a>>;
export function prepend<a>(a: any, b?: any): any {
  if (guard(a)) {
    const x = [{ guard: a[guardsymbol] }, b, ...a] as Parameters<typeof make>;

    return make.apply(null, x);
  }

  return (b: t<a>) => {
    const p = [{ guard: b[guardsymbol] }, a, ...b] as Parameters<typeof make>;
    return make.apply(null, p);
  };
}

/**
 * Sorts and returns a new `TypedSequence.t<a>` values with a `Comparable<a>` or `ComparableModule<a>` functor.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const a = TypedSequence.make(Num, 5, 3, 1, 4, 2)
 * const b = TypedSequence.sort(a, Num)
 * 
 * b          // TypedSequence.make(Num, 1, 2, 3, 4, 5)
 * ```
 *
 * @since 4.0.0
 */
export function sort<a>(a: t<a>, mod: Functors.Comparable<a> | Functors.ComparableModule<a>): t<a>;
export function sort<a>(a: Functors.Comparable<a> | Functors.ComparableModule<a>): Fn.Unary<t<a>, t<a>>;
export function sort<a>(a: t<a> | Functors.Comparable<a> | Functors.ComparableModule<a>, mod?: Functors.Comparable<a> | Functors.ComparableModule<a>): any {
  const getcmp = (x: Functors.Comparable<a> | Functors.ComparableModule<a>) => typeof x === 'function' ? x : x.cmp;

  if (arguments.length === 2 && guard(a)) {
    const p = [{ guard: a[guardsymbol] }, ... Array.from(a).sort(getcmp(mod!))] as Parameters<typeof make>;
    return make.apply(null, p);
  }

  return (x: t<a>) => {
    const p = [{ guard: x[guardsymbol] }, ... Array.from(x).sort(getcmp(a as Functors.Comparable<a> | Functors.ComparableModule<a>))] as Parameters<typeof make>;
    return make.apply(null, p)
  };
}

//#endregion

//#region getters

/**
 * Counts the number of elements that satisfy a given predicate 
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s = TypedSequence.make(Num, 10, 20, 30)
 * 
 * TypedSequence.count(s, Num.gt(10))   // 2
 * TypedSequence.count(Num.gt(10))(s)   // 2
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
  * import { TypedSequence, Str } from 'tiinvo'
  * 
  * const s = TypedSequence.make(Str, 'hello', 'world')
  * 
  * TypedSequence.get(s, 0)       // 'hello'
  * TypedSequence.get(s, 9)       // throws RangeError
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
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const s0 = TypedSequence.make(Num, 10, 20, 30)
  * const s1 = TypedSequence.make(Num)
  * 
  * TypedSequence.first(s0)       // 10
  * TypedSequence.first(s1)       // null
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
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const s0 = TypedSequence.make(Num, 10, 20, 30)
  * const s1 = TypedSequence.make(Num)
  * 
  * TypedSequence.last(s0)       // 30
  * TypedSequence.last(s1)       // null
  * ```
  * ```
  *
  * @since 4.0.0
  */
 export const last = Sequence.last;
 
 /**
  * Gets the length of a `TypedSequence.t<a>`
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const s = TypedSequence.make(Num, 1, 2, 3)
  * 
  * TypedSequence.length(s)           // 3
  * ```
  *
  * @since 4.0.0
  */
 export const length = Sequence.length;
 
 /**
  * Gets values of a `TypedSequence.t<a>` as an immutable indexed object. 
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Str } from 'tiinvo'
  * 
  * const s = TypedSequence.make(Str, 'hello', 'world')
  * 
  * TypedSequence.values(s)       // { 0: 'hello', 1: 'world' }
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
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const s = TypedSequence.make(Num)
  * const s1 = TypedSequence.make(Num, 10)
  * 
  * TypedSequence.empty(s)                // true
  * TypedSequence.empty(s1)               // false
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
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const s = TypedSequence.make(Num, 10, 20, 30)
  * 
  * TypedSequence.populated(s)                      // true
  * TypedSequence.populated(TypedSequence.make(Num))   // false
  * ```
  *
  * @since 4.0.0
  */
 export const populated = Sequence.populated;
 
 //#endregion
 
 //#region serializables
 
 /**
  * Converts a `TypedSequence.t<a>` to an array of `a[]`
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const sl = TypedSequence.make(Num, 3, 2, 1)
  * 
  * TypedSequence.toArray(sl)       // [3, 2, 1]
  * ```
  *
  * @since 4.0.0
  */
 export const toArray = Sequence.toArray;
 
 /**
  * Converts a `TypedSequence.t<a>` to a jsonizable value
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const sl = TypedSequence.make(Num, 3, 2, 1)
  * 
  * TypedSequence.toJSON(sl)       // [3, 2, 1]
  * ```
  *
  * @since 4.0.0
  */
 export const toJSON = Sequence.toJSON;
 
 /**
  * Converts a `TypedSequence.t<a>` to a set of `Set<a>`
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const sl = TypedSequence.make(Num, 3, 2, 1)
  * 
  * TypedSequence.toMap(sl)      // Map([0, 3], [1, 2], [2, 1])
  * ```
  *
  * @since 4.0.0
  */
 export const toMap = Sequence.toMap;
 
 /**
  * Converts a `TypedSequence.t<a>` to a set of `Set<a>`
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const sl = TypedSequence.make(Num, 3, 2, 1)
  * 
  * TypedSequence.toSet(sl)      // Set(3, 2, 1)
  * ```
  *
  * @since 4.0.0
  */
 export const toSet = Sequence.toSet;
 
 /**
  * Converts a `TypedSequence.t<a>` to a string
  *
  * @example
  *
  * ```ts
  * import { TypedSequence, Num } from 'tiinvo'
  * 
  * const sl = TypedSequence.make(Num, 3, 2, 1)
  * 
  * TypedSequence.toString(sl)       // "3,2,1"
  * ```
  *
  * @since 4.0.0
  */
 export const toString = Sequence.toString;
 
 //#endregion
 