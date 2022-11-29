import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import * as Sequence from './Sequence.js';

const guardsymbol = Symbol('sequence.guard');

/**
 * The typed version of a `Sequence.t<A>`.
 */
export type T<A> = Sequence.t<A> & {
  [guardsymbol]: Functors.Guardable<A>;
};

//#region factories

/**
 * Creates a `TypedSequence.t<A>` starting from a `Guardable<A>` functor
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
 * for (const x of TypedSequence.make(Num.guard, 10, 20, 30)) {
 *    console.log(x)
 * }
 * // 10
 * // 20
 * // 30
 * ```
 *
 * @since 4.0.0
 */
export function make<A>(g: Functors.Guardable<A>, ...values: A[]): T<A>;
/**
 * Creates a `TypedSequence.t<A>` starting from a `GuardableModule<A>`
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
 * for (const x of TypedSequence.make(Num, 10, 20, 30)) {
 *    console.log(x)
 * }
 * // 10
 * // 20
 * // 30
 * ```
 *
 * @since 4.0.0
 */
export function make<A>(g: Functors.GuardableModule<A>, ...values: A[]): T<A>;
export function make<A>(g: Functors.Guardable<A> | Functors.GuardableModule<A>, ...values: A[]): T<A> {
  if (typeof g === 'function' || ('guard' in g && typeof g.guard === 'function')) {
    const _t = Sequence.make.apply(null, values) as T<A>;

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
 * @param x the guarded value
 * @returns 
 *  - true if x is a TypedSequence
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T<unknown> => Sequence.guard(x) && guardsymbol in x;

//#endregion

//#region operators

/**
 * Adds an element to the end of the `Sequence.t<A>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * 
 * TypedSequence.append(s0, 30)       // TypedSequence(10, 20, 30)
 * ```
 *
 * @param a the TypedSequence
 * @param b the value to append
 * @since 4.0.0
 */
export function append<A>(a: T<A>, b: A): T<A>;
/**
 * Returns a unary function which adds an element `a` to the end of the 
 * `Sequence.t<A>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * 
 * TypedSequence.append(30)(s0)       // TypedSequence(10, 20, 30)
 * ```
 *
 * @param a the value to append
 * @returns the unary function
 * @since 4.0.0
 */
export function append<A>(a: A): Fn.Unary<T<A>, T<A>>;
export function append<A>(a: T<A> | A, b?: any): any {
  if (guard(a) && arguments.length === 2) {
    const p = [{ guard: a[guardsymbol] }, ...a, b] as Parameters<typeof make>;
    return make.apply(null, p);
  }

  return (b: T<A>) => {
    const p = [{ guard: b[guardsymbol] }, ...b, a] as Parameters<typeof make>;
    return make.apply(null, p);
  };
}

/**
 * Concatenates two `TypedSequence.t<A>` and `TypedSequence.t<b>` and return a new `TypedSequence.t<A>`.
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
 * ```
 *
 * @param a the first TypedSequence
 * @param a the last TypedSequence
 * @returns the concatenated TypedSequence
 * @since 4.0.0
 */
export function concat<a extends T<any>>(a: a, b: a): a;
/**
 * Returns a unary function which concatenates two `TypedSequence.t<A>` 
 * and `TypedSequence.t<b>` and return a new `TypedSequence.t<A>`.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * const s1 = TypedSequence.make(Num, 30, 40)
 * 
 * TypedSequence.concat(s1)(s0)       // TypedSequence(10, 20, 30, 40)
 * ```
 *
 * @param a the first TypedSequence
 * @param a the last TypedSequence
 * @returns the concatenated TypedSequence
 * @since 4.0.0
 */
export function concat<a extends T<any>>(a: a): Fn.Unary<a, a>;
export function concat<a extends T<any>>(a: a, b?: a): any {
  if (guard(a) && guard(b)) {
    return make.apply(null, [{ guard: a[guardsymbol] }, ...a, ...b]);
  }

  return (b: a) => make.apply(null, [{ guard: b[guardsymbol] }, ...b, ...a]);
}

/**
 * Adds an element to the start of the `TypedSequence.t<A>` without mutating the original one.
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
 * @param a the TypedSequence
 * @param b the value to prepend
 * @returns the new TypedSequence
 * @since 4.0.0
 */
export function prepend<A>(a: T<A>, b: A): T<A>;
/**
 * Returns a unary function which adds an element to the start of 
 * the `TypedSequence.t<A>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const s0 = TypedSequence.make(Num, 10, 20)
 * 
 * TypedSequence.prepend(30)(s0)       // TypedSequence.make(Num, 30, 10, 20)
 * ```
 *
 * @param a the value
 * @returns the unary function
 * @since 4.0.0
 */
export function prepend<A>(a: A): Fn.Unary<T<A>, T<A>>;
export function prepend<A>(a: any, b?: any): any {
  if (guard(a)) {
    const x = [{ guard: a[guardsymbol] }, b, ...a] as Parameters<typeof make>;

    return make.apply(null, x);
  }

  return (b: T<A>) => {
    const p = [{ guard: b[guardsymbol] }, a, ...b] as Parameters<typeof make>;
    return make.apply(null, p);
  };
}

/**
 * Sorts and returns a new `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.
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
 * @template A the sequence type
 * @param a the sequence
 * @param mod the Comparable used to sort the sequence
 * @returns the sorted sequence
 * @group Sortables
 * @since 4.0.0
 */
export function sort<A>(a: T<A>, mod: Functors.Comparable<A> | Functors.ComparableModule<A>): T<A>;
/**
 * Returns a unary function which sorts and returns a new 
 * `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.
 *
 * @example
 *
 * ```ts
 * import { TypedSequence, Num } from 'tiinvo'
 * 
 * const sort = TypedSequence.sort(Num)
 * 
 * const a = TypedSequence.make(Num, 5, 3, 1, 4, 2)
 * const b = sort(a)
 * 
 * b          // TypedSequence.make(Num, 1, 2, 3, 4, 5)
 * ```
 *
 * @template A the sequence type
 * @param a the sequence
 * @returns the sorting unary function
 * @group Sortables
 * @since 4.0.0
 */
export function sort<A>(a: Functors.Comparable<A> | Functors.ComparableModule<A>): Fn.Unary<T<A>, T<A>>;
export function sort<A>(a: T<A> | Functors.Comparable<A> | Functors.ComparableModule<A>, mod?: Functors.Comparable<A> | Functors.ComparableModule<A>): any {
  const getcmp = (x: Functors.Comparable<A> | Functors.ComparableModule<A>) => typeof x === 'function' ? x : x.cmp;

  if (arguments.length === 2 && guard(a)) {
    const p = [{ guard: a[guardsymbol] }, ...Array.from(a).sort(getcmp(mod!))] as Parameters<typeof make>;
    return make.apply(null, p);
  }

  return (x: T<A>) => {
    const p = [{ guard: x[guardsymbol] }, ...Array.from(x).sort(getcmp(a as Functors.Comparable<A> | Functors.ComparableModule<A>))] as Parameters<typeof make>;
    return make.apply(null, p);
  };
}

//#endregion

//#region accessors

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
 * @param a the sequence
 * @returns the counted elements
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
 * Gets the first element of a TypedSequence.
 * 
 * Returns `Option.None` if none is found.
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
 * Gets a Sequence.t<A>'s last element.
 *
 * Returns `Option.None` if none is found.
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
 * Gets the length of a `TypedSequence.t<A>`
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
 * Gets values of a `TypedSequence.t<A>` as an immutable indexed object. 
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
 * Converts a `TypedSequence.t<A>` to an array of `a[]`
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
 * @param a the TypedSequence
 * @returns the array
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = Sequence.toArray;

/**
 * Converts a `TypedSequence.t<A>` to a jsonizable value
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
 * @param a the TypedSequence
 * @returns the JSON
 * @group Serializables
 * @since 4.0.0
 */
export const toJSON = Sequence.toJSON;

/**
 * Converts a `TypedSequence.t<A>` to a set of `Set<A>`
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
 * @param a the TypedSequence
 * @returns the Map
 * @group Serializables
 * @since 4.0.0
 */
export const toMap = Sequence.toMap;

/**
 * Converts a `TypedSequence.t<A>` to a set of `Set<A>`
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
 * @param a the TypedSequence
 * @returns the Set
 * @group Serializables
 * @since 4.0.0
 */
export const toSet = Sequence.toSet;

/**
 * Converts a `TypedSequence.t<A>` to a string
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
 * @param a the TypedSequence
 * @group Serializables
 * @since 4.0.0
 */
export const toString = Sequence.toString;

 //#endregion
