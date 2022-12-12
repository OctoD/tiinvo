import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import * as Sequence from './Sequence.js';

const sortsymbol = Symbol('Sequence.sorted');

/**
 * A sorted sequence is a `Sequence.t<a>` which all elements stored in it are sorted by a `Comparable<a>` functor.
 */
export type T<a> = Sequence.T<a> & {
  [sortsymbol]: Functors.Comparable<a>;
};

//#region factories

/**
 * Makes an immutable `SortedSequence.T<A>` from a `Comparable<a>` and (optionally) a list of arguments as initial values
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num.cmp, 10, 20, 30)         
 * const s1 = SortedSequence.make(Str.cmp, 'hello', 'world')
 * 
 * SortedSequence.guardOf(Num.guard)(s0)    // true
 * SortedSequence.guardOf(Num.guard)(s1)    // false
 * SortedSequence.guardOf(Str.guard)(s0)    // false
 * SortedSequence.guardOf(Str.guard)(s1)    // true
 * ```
 *
 * @template A element's type
 * @param mod the Comparable functor
 * @param args a list of initial values
 * @returns the SortedSequence
 * @group Factories
 * @since 4.0.0
 */
export function make<A>(mod: Functors.Comparable<A>, ...args: A[]): T<A>;
/**
 * Makes an immutable `SortedSequence.T<A>` from a `ComparableModule<a>` and (optionally) a list of arguments as initial values
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
 * @template A element's type
 * @param mod the Comparable module functor
 * @param args a list of initial values
 * @returns the SortedSequence
 * @group Factories
 * @since 4.0.0
 */
export function make<A>(mod: Functors.ComparableModule<A>, ...args: A[]): T<A>;
export function make<A>(mod: Functors.Comparable<A> | Functors.ComparableModule<A>, ...args: A[]): T<A> {
  const cmp = typeof mod === 'function' ? mod : mod.cmp;
  const seq = Sequence.make.apply(null, args.sort(cmp)) as T<A>;

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
 * @param x the value to guard
 * @returns
 *  - `true` if x is a `SortedSequence.T<unknown>`
 *  - `false` otherwise
 * @group Guards
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T<unknown> => Sequence.guard(x) && sortsymbol in x;

/**
 * Checks if the parameter `x` is a `SortedSequence.T<A>` using a `Guardable<A>` functor.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 1, 2)
 * const s1 = SortedSequence.make(Str, 'hello', 'world')
 * 
 * SortedSequence.guardOf(Str.guard, s0)      // false
 * SortedSequence.guardOf(Str.guard, s1)      // true
 * ```
 *
 * @template A the expected sequence elements type
 * @param g the elements guard
 * @param x the value to check
 * @returns
 *  - `true` if `x` is a `SortedSequence.T<A>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.Guardable<A>, x: unknown): x is T<A>
/**
 * Checks if the parameter `x` is a `SortedSequence.T<A>` using a `GuardableModule<A>` functor.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 1, 2)
 * const s1 = SortedSequence.make(Str, 'hello', 'world')
 * 
 * SortedSequence.guardOf(Str, s0)      // false
 * SortedSequence.guardOf(Str, s1)      // true
 * ```
 *
 * @template A the expected sequence elements type
 * @param g the elements guard module
 * @param x the value to check
 * @returns
 *  - `true` if `x` is a `SortedSequence.T<A>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.GuardableModule<A>, x: unknown): x is T<A>
/**
 * Returns a guard which checks if the parameter `x` is a `SortedSequence.T<A>`
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
 * @template A the expected sequence elements type
 * @param g the elements guard
 * @returns the guard which takes an argument `y` and returns
 *  - `true` if `y` is a `SortedSequence.T<A>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.Guardable<A>): (x: unknown) => x is T<A>
/**
 * Returns a guard which checks if the parameter `x` is a `SortedSequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make(Num, 1, 2)
 * const s1 = SortedSequence.make(Str, 'hello', 'world')
 * const isStrSortedList = SortedSequence.guardOf(Str);
 * 
 * isStrSortedList(s0)      // false
 * isStrSortedList(s1)      // true
 * ```
 *
 * @template A the expected sequence elements type
 * @param g the elements guard
 * @returns the guard which takes an argument `y` and returns
 *  - `true` if `y` is a `SortedSequence.T<A>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<A>(g: Functors.GuardableModule<A>): (x: unknown) => x is T<A>
export function guardOf<A>(g: Functors.Guardable<A> | Functors.GuardableModule<A>, x?: unknown): any
{
  const _g = (z: unknown): z is T<A> => {
    return guard(z) && toArray(z).every(typeof g === 'function' ? g : g.guard)
  }
  
  return arguments.length === 2 ? _g(x) : _g;
};

//#endregion

//#region comparables

/**
 * Compares two `SortedSequence.T<A>`.
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
 * @template A SortedSequence element's type
 * @param a the first sequence
 * @param b the last sequence
 * @returns
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` equals `b`
 *  - 1 if `a` is greater than `b`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A extends T<any>>(a: A, b: A): Functors.ComparableResult;
/**
 * Returns a unary function which compares two `SortedSequence.T<A>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
 * const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)
 * const s3 = SortedSequence.make<number>(Num, 0, 1)
 * 
 * const cmp0 = SortedSequence.cmp(s0);
 * 
 * cmp0(s1)                         // 0
 * cmp0(s2)                         // 1
 * cmp0(s3)                         // -1
 * ```
 *
 * @template A `SortedSequence.T` type
 * @param a the first sequence
 * @returns the unary function which returns
 *  - -1 if `b` is less than `a`
 *  - 0 if `b` equals `a`
 *  - 1 if `b` is greater than `a`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A extends T<any>>(a: A): Fn.Unary<A, Functors.ComparableResult>;
export function cmp<A extends T<any>>(a: A, b?: A): any {
  if (guard(a) && guard(b)) {
    return Sequence.cmp({ cmp: a[sortsymbol] }, a, b);
  }

  return (c: A) => Sequence.cmp({ cmp: a[sortsymbol] }, c, a);
}

/**
 * Checks if two sorted lists are equal
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
 * @template A `SortedSequence.T` type
 * @param a the first sequence
 * @param b the second sequence
 * @returns
 *  - `true` if `b` equals `a`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A extends T<any>>(a: A, b: A): boolean;
/**
 * Returns a unary function which checks if two sorted lists are equal
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
 * @template A `SortedSequence.T` type
 * @param a the first sequence
 * @returns the unary function which returns
 *  - `true` if `b` equals `a`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A extends T<any>>(a: A): Fn.Unary<A, boolean>;
export function eq<A extends T<any>>(a: A, b?: A): any {
  if (guard(a) && guard(b)) {
    return Sequence.cmp({ cmp: a[sortsymbol] }, a, b) === 0;
  }

  return (b: A) => Sequence.cmp({ cmp: a[sortsymbol] }, a, b) === 0;
}

//#endregion

//#region mappables

/**
 * Maps a `SortedSequence.T<A>` to a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.
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
 * @template A the SortedSequence element's type
 * @template B the mapped SortedSequence element's type
 * @param a the SortedSequence
 * @param m the Mappable functor
 * @returns the mapped `SortedSequence.T<B>`
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(a: T<A>, m: Functors.Mappable<A, B>): T<B>;
/**
 * Returns a unary function which maps a `SortedSequence.T<A>` to 
 * a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const m = SortedSequence.map(Num.mul(2))
 * 
 * m(SortedSequence.make<number>(Num, 3, 1, 2))        // SortedSequence.t(2, 4, 6)
 * m(SortedSequence.make<number>(Num, 9, 4, 8))        // SortedSequence.t(8, 16, 18)
 * ```
 *
 * @template A the SortedSequence element's type
 * @template B the mapped SortedSequence element's type
 * @param a the SortedSequence
 * @returns the unary function which maps `SortedSequence.T<A>` to `SortedSequence.T<B>`
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(a: Functors.Mappable<A, B>): Fn.Unary<T<A>, T<B>>;
export function map<A, B>(a: T<A> | Functors.Mappable<A, B>, m?: any): any {
  if (guard(a) && typeof m === 'function') {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ...[...a].map(m)]);
  }

  return (c: T<A>) => {
    return make.apply(null, [{ cmp: c[sortsymbol] as any }, ...[...c].map(a as Functors.Mappable<A, B>)]);
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
 * @template A the SortedSequence type
 * @template B the added value type
 * @param a the SortedSequence
 * @param b the added value
 * @returns the new SortedSequence
 * @group Operables
 * @since 4.0.0
 */
export function add<A extends T<any>, B>(a: A, b: B): T<A & B>;
/**
 * Returns a unary function which adds an element to the end of the `Sequence.t<a>` without mutating the original one.
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
 * @template A the SortedSequence type
 * @template B the added value type
 * @param a the added value type
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function add<A extends T<any>, B>(a: B): Fn.Unary<A, T<A & B>>;
export function add<A extends T<any>, B>(a: A | B, b?: B): any {
  if (guard(a) && arguments.length === 2) {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ...a, b]);
  }

  return (c: A) => make.apply(null, [{ cmp: c[sortsymbol] as any }, ...c, a]);
}

/**
 * Concatenates two `SortedSequence.T<A>` and `SortedSequence.T<A>` 
 * and return a new `SortedSequence.T<A>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make<number>(Num, 10, 20)
 * const s1 = SortedSequence.make<number>(Num, 30, 40)
 * 
 * SortedSequence.concat(s0, s1)       // SortedSequence(10, 20, 30, 40)
 * SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
 * ```
 *
 * @template A the SortedSequence type
 * @param a the first SortedSequence
 * @param b the second SortedSequence
 * @returns the concatenated SortedSequence
 * @group Operables
 * @since 4.0.0
 */
export function concat<A>(a: T<A>, b: T<A>): T<A>;
/**
 * Returns a unary function which concatenates two `SortedSequence.T<A>` 
 * and `SortedSequence.T<A>` and return a new `SortedSequence.T<A>`.
 *
 * @example
 *
 * ```ts
 * import { SortedSequence, Num } from 'tiinvo'
 * 
 * const s0 = SortedSequence.make<number>(Num, 10, 20)
 * const s1 = SortedSequence.make<number>(Num, 30, 40)
 * 
 * SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
 * ```
 *
 * @template A the SortedSequence type
 * @param a the second SortedSequence
 * @returns the unary function
 * @group Operables
 * @since 4.0.0
 */
export function concat<A>(a: T<A>): <A>(x: T<A>) => T<A>;
export function concat<A>(a: T<A>, b?: T<A>): any {
  if (guard(a) && guard(b)) {
    return make.apply(null, [{ cmp: a[sortsymbol] }, ...a, ...b!]);
  }

  return (x: T<A>) => make.apply(null, [{ cmp: x[sortsymbol] as any }, ...a, ...x]);
}

//#endregion

//#region accessors

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
 * @template A the Sequence's element type
 * @param a the sequence
 * @param p the Filterable functor
 * @returns the number of elements which satisfy the predicate `p`
 * @group Accessors
 * @since 4.0.0
 */
export const count = Sequence.count;

/**
 * Gets an element at a specific index.
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
 * @template A the Sequence's element type
 * @param a the sequence
 * @param i the index of the element
 * @returns 
 *  - `Result.Ok<A>` if `i` is in bound
 *  - `Result.Err` if `i` is out of bound or negative
 * @group Accessors
 * @since 4.0.0
 */
export const get = Sequence.get;

/**
 * Gets first element if any 
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the first element of the sequence:
 *  - `Option.Some<A>` if the sequence has at least one element
 *  - `Option.None` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export const first = Sequence.first;

/**
 * Gets last element if any.
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
 * 
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns 
 *  - `Option.Some<A>` if the sequence is not empty
 *  - `Option.None` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export const last = Sequence.last;

/**
 * Gets the length of a `SortedSequence.T<A>`
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
 * Gets values of a `SortedSequence.T<A>` as an immutable indexed object. 
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the sequence values as an immutable dictionary
 * @group Accessors
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns
 *  - 'true' if the sequence is empty
 *  - 'false' otherwise
 * @group Predicates
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns
 *  - 'true' if the sequence is populated
 *  - 'false' otherwise
 * @group Predicates
 * @since 4.0.0
 */
export const populated = Sequence.populated;

//#endregion

//#region serializables

/**
 * Converts a `SortedSequence.T<A>` to an array of `a[]`
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the output
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = Sequence.toArray;

/**
 * Converts a `SortedSequence.T<A>` to a jsonizable value
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the output
 * @group Serializables
 * @since 4.0.0
 */
export const toJSON = Sequence.toJSON;

/**
 * Converts a `SortedSequence.T<A>` to a set of `Set<a>`
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the output
 * @group Serializables
 * @since 4.0.0
 */
export const toMap = Sequence.toMap;

/**
 * Converts a `SortedSequence.T<A>` to a set of `Set<a>`
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the output
 * @group Serializables
 * @since 4.0.0
 */
export const toSet = Sequence.toSet;

/**
 * Converts a `SortedSequence.T<A>` to a string
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
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the output
 * @group Serializables
 * @since 4.0.0
 */
export const toString = Sequence.toString;

//#endregion
