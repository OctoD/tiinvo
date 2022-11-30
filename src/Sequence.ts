import { cmp as arrCmp, eq as arrEq } from './Arr.js';
import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Option from './Option.js';
import type * as Result from './Result.js';
import { isErr } from './Result.js';

const indexer = Symbol("indexer");

/**
 * A `Sequence.T<A>` is an iterable list of elements `a` in a particular order.
 * 
 * It's immutable by design.
 */
export type T<A> = Iterable<A> & {
  [indexer](): Readonly<Record<number, A>>;
  [Symbol.iterator](): Iterator<A>;
};

//#region factories

/**
 * Try to deserialize a `string` to a `Sequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const x  = Sequence.fromString<number>(`10,20,30`) as Sequence.T<number>;
 * const t1 = Sequence.make(10, 20, 30)
 * const t2 = Sequence.make(10, 30, 20)
 * 
 * Sequence.eq(x, t1)        // true
 * Sequence.eq(x, t2)        // false
 * ```
 *
 * @template A the Sequence's expected element type
 * @param x the string
 * @returns 
 *  - `Result.Ok<Sequence.T<A>>` if the deserialization is successful
 *  - `Result.Err` otherwise
 * @group Factories
 * @since 4.0.0
 */
export const fromString = <A = unknown>(x: string): Result.T<T<A>> => {
  try {
    return make(JSON.parse(`[${x}]`)) as T<A>;
  } catch (err) {
    return err as Error;
  }
};

/**
 * Makes a new `Sequence.T<A>` from an array of `A`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.make([10, 20, 30])      // Sequence.T<number>
 * Sequence.make([1, 2], [3, 4])    // Sequence.T<number[]>
 * ```
 *
 * @template A the type
 * @param v the array of initial values
 * @returns the `Sequence.T<A>`
 * @group Factories
 * @since 4.0.0
 */
export function make<A>(v: A[]): T<A>;
/**
 * Makes a new `Sequence.T<A>` from a list of arguments `a`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.make(10, 20, 30)        // Sequence.T<number>
 * ```
 *
 * @template A the type
 * @param v the list of initial values
 * @returns the `Sequence.T<A>`
 * @group Factories
 * @since 4.0.0
 */
export function make<A>(...v: A[]): T<A>;
export function make<A>(...v: A[]): T<A> {
  const values: Record<number, A> = {};

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    v = arguments[0];
  }

  for (let i = 0; i < v.length; i++) {
    values[i] = v[i];
  }

  const _t = {
    [indexer]() {
      return Object.freeze({ ...values });
    },
  } as T<A>;

  Object.defineProperty(_t, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
      let i = 0;
      let keys = Object.keys(values) as unknown as number[];

      return {
        next: () => {
          return {
            value: values[keys[i++]],
            done: (i > keys.length)
          };
        }
      };
    }
  });

  return _t;
};

//#endregion

//#region guardables

/**
 * Checks if a value `x` is a `Sequence.T<unknown>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.guard(10)                 // false
 * Sequence.guard([10, 20, 30])       // false
 * Sequence.guard(Sequence.make())    // true
 * ```
 *
 * @param x the value to guard
 * @returns
 *  - `true` if `x` is `Sequence.T<unknown>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T<unknown> => typeof x === 'object' && x !== null && indexer in x;

/**
 * Checks if the parameter `x` is a `Sequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num, Str } from 'tiinvo'
 * 
 * const s0 = Sequence.make<number | string>(1, 'hello', 2)
 * const s1 = Sequence.make('hello', 'world')
 * const isStrSequence = Sequence.guardOf(Str.guard);
 * 
 * isStrSequence(s0)      // false
 * isStrSequence(s1)      // true
 * ```
 *
 * @template a the type
 * @param g the guard
 * @returns the new guard which returns
 *  - `true` if `x` is a `Sequence.T<A>`
 *  - `false` otherwise 
 * @group Guardables
 * @since 4.0.0
 */
export const guardOf = <A>(g: Functors.Guardable<A>) => (x: unknown): x is T<A> => guard(x) && toArray(x).every(g);

//#endregion

//#region comparables

/**
 * Compares two sequences.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num, s0, s1)      // 0
 * Sequence.cmp(Num, s0)(s1)      // 0
 * Sequence.cmp(Num)(s0, s1)      // 0
 * 
 * Sequence.cmp(Num, s0, s2)      // -1
 * Sequence.cmp(Num, s0)(s2)      // -1
 * Sequence.cmp(Num)(s0, s2)      // -1
 * 
 * Sequence.cmp(Num, s2, s0)      // 1
 * Sequence.cmp(Num, s2)(s0)      // 1
 * Sequence.cmp(Num)(s2, s0)      // 1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor module
 * @param a the first sequence
 * @param b the last sequence
 * @returns the comparison result `Functors.ComparableResult`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.ComparableModule<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Compares two sequences.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num.cmp, s0, s1)      // 0
 * Sequence.cmp(Num.cmp, s0)(s1)      // 0
 * Sequence.cmp(Num.cmp)(s0, s1)      // 0
 * 
 * Sequence.cmp(Num.cmp, s0, s2)      // -1
 * Sequence.cmp(Num.cmp, s0)(s2)      // -1
 * Sequence.cmp(Num.cmp)(s0, s2)      // -1
 * 
 * Sequence.cmp(Num.cmp, s2, s0)      // 1
 * Sequence.cmp(Num.cmp, s2)(s0)      // 1
 * Sequence.cmp(Num.cmp)(s2, s0)      // 1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor
 * @param a the first sequence
 * @param b the last sequence
 * @returns the comparison result `Functors.ComparableResult`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.Comparable<A>, a: T<A>, b: T<A>): Functors.ComparableResult;
/**
 * Returns a unary function which compares two Sequence
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num, s0)(s1)      // 0
 * Sequence.cmp(Num, s0)(s2)      // -1
 * Sequence.cmp(Num, s2)(s0)      // 1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor module
 * @param a the first sequence
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.ComparableModule<A>, a: T<A>): Fn.Unary<T<A>, Functors.ComparableResult>;
/**
 * Returns a unary function which compares two Sequence
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num.cmp, s0)(s1)      // 0
 * Sequence.cmp(Num.cmp, s0)(s2)      // 1
 * Sequence.cmp(Num.cmp, s2)(s0)      // -1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor
 * @param a the first sequence
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.Comparable<A>, a: T<A>): Fn.Unary<T<A>, Functors.ComparableResult>;
/**
 * Returns a binary function which compares two Sequence
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num)(s0, s1)      // 0
 * Sequence.cmp(Num)(s0, s2)      // -1
 * Sequence.cmp(Num)(s2, s0)      // 1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor module
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.ComparableModule<A>): Fn.Binary<T<A>, T<A>, Functors.ComparableResult>;
/**
 * Returns a binary function which compares two Sequence
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.cmp(Num.cmp)(s0, s1)      // 0
 * Sequence.cmp(Num.cmp)(s0, s2)      // -1
 * Sequence.cmp(Num.cmp)(s2, s0)      // 1
 * ```
 *
 * @template A the Sequence's element type 
 * @param mod the comparable functor
 * @returns the binary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<A>(mod: Functors.Comparable<A>): Fn.Binary<T<A>, T<A>, Functors.ComparableResult>;
export function cmp<A>(mod: Functors.ComparableModule<A> | Functors.Comparable<A>, a?: T<A>, b?: T<A>): any {
  const c = arrCmp(typeof mod === 'function' ? mod : mod.cmp);

  if (guard(a) && guard(b)) {
    return c(toArray(a), toArray(b));
  } else if (guard(a) && !guard(b)) {
    return (d: T<A>) => c(toArray(d), toArray(a));
  } else {
    return (d: T<A>, e: T<A>) => c(toArray(d), toArray(e));
  }
}

/**
 * Checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.eq(Num, s0, s1)      // true
 * Sequence.eq(Num, s0, s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable module functor
 * @param a the first Sequence
 * @param b the last Sequence
 * @returns 
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.EquatableModule<A>, a: T<A>, b: T<A>): boolean;
/**
 * Checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * Sequence.eq(Num.cmp, s0, s1)      // true
 * Sequence.eq(Num.cmp, s0, s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable functor
 * @param a the first Sequence
 * @param b the last Sequence
 * @returns 
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.Equatable<A>, a: T<A>, b: T<A>): boolean;
/**
 * Returns a unary function which checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * const eqs0 = Sequence.eq(Num, s0)
 * 
 * eqs0(s1)      // true
 * eqs0(s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable module functor
 * @param a the first Sequence
 * @returns the unary function which checks and returns
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.EquatableModule<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Returns a unary function which checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * const eqs0 = Sequence.eq(Num.cmp, s0)
 * 
 * eqs0(s1)      // true
 * eqs0(s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable functor
 * @param a the first Sequence
 * @returns the unary function which checks and returns
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.Equatable<A>, a: T<A>): Fn.Unary<T<A>, boolean>;
/**
 * Returns a binary function which checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * const eq = Sequence.eq(Num);
 * 
 * eq(s0, s1)      // true
 * eq(s0, s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable module functor
 * @returns the binary function which checks and returns
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.EquatableModule<A>): Fn.Binary<T<A>, T<A>, boolean>;
/**
 * Returns a binary function which checks if two sequences are equal
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s0 = Sequence.make(0, 1, 2)
 * const s1 = Sequence.make(0, 1, 2)
 * const s2 = Sequence.make(0, 1, 2, 3)
 * 
 * const eq = Sequence.eq(Num.cmp);
 * 
 * eq(s0, s1)      // true
 * eq(s0, s2)      // false
 * ```
 * 
 * @template A the Sequence's element type
 * @param mod the equatable functor
 * @returns the binary function which checks and returns
 *  - `true` if `a` and `b` are equal
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<A>(mod: Functors.Equatable<A>): Fn.Binary<T<A>, T<A>, boolean>;
export function eq<A>(mod: Functors.EquatableModule<A> | Functors.Equatable<A>, a?: T<A>, b?: T<A>): any {
  const eqfn = arrEq(typeof mod === 'function' ? mod : mod.eq);

  if (guard(a) && guard(b)) {
    return eqfn(toArray(a), toArray(b));
  } else if (guard(a) && !guard(b)) {
    return (d: T<A>) => eqfn(toArray(a), toArray(d));
  } else {
    return (d: T<A>, e: T<A>) => eqfn(toArray(d), toArray(e));
  }
}

//#endregion

//#region mappables

/**
 * Maps a `Sequence.T<A>` to a `Sequence.T<B>` using the functor `Functors.Mappable<a, b>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(1, 2, 3)
 * 
 * Sequence.map(s, Num.mul(2))        // Sequence.t(2, 4, 6)
 * ```
 * 
 * @template A the sequence's element type
 * @template B the mapped sequence's element type
 * @param a the sequence
 * @param m the mappable functor
 * @returns the mapped sequence
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(a: T<A>, m: Functors.Mappable<A, B>): T<B>;
/**
 * Returns a unary function which maps a `Sequence.T<A>` to a `Sequence.T<B>` using the functor `Functors.Mappable<a, b>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(1, 2, 3)
 * 
 * Sequence.map(Num.mul(2))(s)        // Sequence.t(2, 4, 6)
 * ```
 * 
 * @template A the sequence's element type
 * @template B the mapped sequence's element type
 * @param a the sequence
 * @returns the unary function which maps Sequence.T<A> to `Sequence.T<B>`
 * @group Mappables
 * @since 4.0.0
 */
export function map<A, B>(a: Functors.Mappable<A, B>): Fn.Unary<T<A>, T<B>>;
export function map<A, B>(a: T<A> | Functors.Mappable<A, B>, m?: any): any {
  if (guard(a) && typeof m === 'function') {
    return make(toArray(a).map(m));
  }

  return (b: T<A>) => {
    return make(toArray(b).map(a as Functors.Mappable<A, B>));
  };
}

/**
 * Reduces all elements `a` to `b` of a `Sequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.reduce(s, Num.add, 0)  // 60
 * ```
 * 
 * @template A the sequence's element type
 * @template B the reduced value type
 * @param a the sequence
 * @param mod the reducer functor
 * @param s the starting reduced value
 * @returns the reduced value
 * @group Mappables
 * @since 4.0.0
 */
export function reduce<A, B>(a: T<A>, mod: Functors.Reduceable<A, B>, s: B): B;
/**
 * Returns a unary function which reduces all elements `a` to `b` of a `Sequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.reduce<number, number>(Num.add, 0)(s)  // 60
 * ```
 * 
 * @template A the sequence's element type
 * @template B the reduced value type
 * @param a the reducer
 * @param mod the starting reduced value
 * @returns the unary function. This function takes a `Sequence.T<A>` and reduces it to `B`
 * @group Mappables
 * @since 4.0.0
 */
export function reduce<A, B>(a: Functors.Reduceable<A, B>, mod: B): Fn.Unary<T<A>, B>;
export function reduce<A, B>(a: T<A> | Functors.Reduceable<A, B>, mod?: B | Functors.Reduceable<A, B>, s?: B): any {
  if (guard(a) && typeof mod === 'function') {
    return Array.from(a).reduce((x, c) => (mod as Functors.Reduceable<A, B>)(x, c), s as B);
  }

  return (b: T<A>) => Array.from(b).reduce((x, c) => (a as Functors.Reduceable<A, B>)(x, c), mod as B);
}

//#endregion

//#region filterables

/**
 * Filters a `Sequence.T<A>` with a specified `Filterable<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30, 40)
 * 
 * Sequence.filter(s, Num.gt(20))   // Sequence.make(30, 40)
 * ```
 *  
 * @template A the Sequence's element type
 * @param a the sequence
 * @param f the filterable functor 
 * @returns the filtered sequence
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(a: T<A>, f: Functors.Filterable<A>): T<A>;
/**
 * Returns a unary function which filters a `Sequence.T<A>` with a specified `Filterable<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30, 40)
 * 
 * Sequence.filter(Num.gt(20))(s)   // Sequence.make(30, 40)
 * ```
 *  
 * @template A the Sequence's element type
 * @param a the filterable functor
 * @returns the unary function which takes a sequence and filters it with `a`
 * @group Filterables
 * @since 4.0.0
 */
export function filter<A>(a: Functors.Filterable<A>): Fn.Unary<T<A>, T<A>>;
export function filter<A>(a: T<A> | Functors.Filterable<A>, f?: Functors.Filterable<A>): any {
  if (guard(a) && typeof f === 'function') {
    return make(Array.from(a).filter(f));
  }

  return (c: T<A>) => make(Array.from(c).filter(a as Functors.Filterable<A>));
}

/**
 * Filters and reduce a `Sequence.T<A>` to `B`
 * 
 * **Important** The filter is applied before the reduce.
 *
 * @example
 *
 * ```ts
 * import { Functors, Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(1, 2, 3, 4, 5)
 * const f: Functors.FilterReduceableModule<number, number> = {
 *    default: 0,
 *    filter: Num.isEven,
 *    reduce: Num.add,
 * }
 * 
 * Sequence.filterReduce(s, f)      // 6
 * ```
 *
 * @template A the sequence's element type
 * @template B the reduced value type
 * @param a the sequence
 * @param mod the filter and reduce module functor
 * @returns the reduced value
 * @group Filterables
 * @group Mappables
 * @since 4.0.0
 */
export function filterReduce<A, B>(a: T<A>, mod: Functors.FilterReduceableModule<A, B>): B;
/**
 * Returns a unary function which filters and reduce a `Sequence.T<A>` to `B`
 *
 * **Important** The filter is applied before the reduce.
 *
 * @example
 *
 * ```ts
 * import { Functors, Sequence, Num } from 'tiinvo'
 * 
 * const fr = Sequence.filterReduce({
 *    default: 0,
 *    filter: Num.isEven,
 *    reduce: Num.add,
 * })
 * 
 * fr(Sequence.make(1, 2, 3, 4, 5))      // 6
 * ```
 *
 * @template A the sequence's element type
 * @template B the reduced value type
 * @param a the filter and reduce module functor
 * @returns the unary function which takes a sequence the filters and reduce it to `B`
 * @group Filterables
 * @group Mappables
 * @since 4.0.0
 */
export function filterReduce<A, B>(a: Functors.FilterReduceableModule<A, B>): Fn.Unary<T<A>, B>;
export function filterReduce<A, B>(a: T<A> | Functors.FilterReduceableModule<A, B>, mod?: Functors.FilterReduceableModule<A, B>): any {
  const impl = (x: T<A>, y: Functors.FilterReduceableModule<A, B>): B => {
    let out: B = y.default;

    for (const e of x) {
      if (y.filter(e)) {
        out = y.reduce(out, e);
      }
    }

    return out;
  };

  if (guard(a)) {
    return impl(a, mod!);
  }

  return (b: T<A>) => impl(b, a);
}


/**
 * Filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` using the `FilterMappableModule<A, B>` functor.
 * 
 * **Important** The filter is applied before the map.
 *
 * @example
 *
 * ```ts
 * import { Functors, Sequence, Num } from 'tiinvo'
 * 
 * const f: Functors.FilterMappableModule<number, string | Error> = {
 *   filter: Num.isOdd,
 *   map: Num.toBin,
 * }
 * const s = Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 * const m = Sequence.filterMap(f);
 * 
 * Sequence.filterMap(s, f)   // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
 * ```
 *
 * @template A the sequence's element type
 * @template B the mapped sequence's element type
 * @param a the sequence
 * @param f the filterable and mappable functor
 * @returns the filtered and mapped sequence
 * @group Filterables
 * @group Mappables
 * @since 4.0.0
 */
export function filterMap<A, B>(a: T<A>, f: Functors.FilterMappableModule<A, B>): T<B>;
/**
 * Returns a unary function which filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` 
 * using the `FilterMappableModule<A, B>` functor.
 * 
 * **Important** The filter is applied before the map.
 *
 * @example
 *
 * ```ts
 * import { Functors, Sequence, Num } from 'tiinvo'
 * 
 * const m = Sequence.filterMap({
 *   filter: Num.isOdd,
 *   map: Num.toBin,
 * });
 * 
 * m(Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))  // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
 * ```
 *
 * @template A the sequence's element type
 * @template B the mapped sequence's element type
 * @param a the filterable and mappable functor
 * @returns the unary function which filters and maps the input sequence `T<A>` to `T<B>`
 * @group Filterables
 * @group Mappables
 * @since 4.0.0
 */
export function filterMap<A, B>(a: Functors.FilterMappableModule<A, B>): Fn.Unary<T<A>, T<B>>;
export function filterMap<A, B>(a: T<A> | Functors.FilterMappableModule<A, B>, f?: Functors.FilterMappableModule<A, B>): any {
  const handle = (a: T<A>, mod: Functors.FilterMappableModule<A, B>) => {
    const outvalues: B[] = [];

    for (const v of a) {
      if (mod.filter(v)) {
        outvalues.push(mod.map(v));
      }
    }

    return make(outvalues);
  };

  if (guard(a) && typeof f === 'object') {
    return handle(a, f);
  }

  return (b: T<A>) => handle(b, a as Functors.FilterMappableModule<A, B>);
}

//#endregion

//#region operators

/**
 * Adds an element to the end of the `Sequence.T<A>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * 
 * Sequence.append(s0, 30)       // Sequence(10, 20, 30)
 * ```
 *
 * @template A the Sequence's element type
 * @param a the sequence
 * @param b the element to append
 * @returns the new sequence
 * @group Operators
 * @since 4.0.0
 */
export function append<A>(a: T<A>, b: A): T<A>;
/**
 * Returns a unary function which adds an element to the end of the `Sequence.T<A>` 
 * without mutating it.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * 
 * Sequence.append(30)(s0)       // Sequence(10, 20, 30)
 * ```
 *
 * @template A the Sequence's element type
 * @param a the element to append
 * @returns the unary function which appends `a` to an existing sequence
 * @group Operators
 * @since 4.0.0
 */
export function append<A>(a: A): Fn.Unary<T<A>, T<A>>;
export function append<A>(a: any, b?: any): any {
  if (guard(a)) {
    return make(Object.values(a[indexer]()).concat(b));
  }

  return (b: T<A>) => make(Object.values(b[indexer]()).concat(a));
}

/**
 * Concatenates two `Sequence.T<A>` and `Sequence.T<B>` and return a new `Sequence.T<A & B>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * const s1 = Sequence.make(30, 40)
 * 
 * Sequence.concat(s0, s1)       // Sequence(10, 20, 30, 40)
 * ```
 * 
 * @template A the first Sequence's element type
 * @template B the second Sequence's element type
 * @param a the first sequence
 * @param b the second sequence
 * @returns the concatated sequence  
 * @group Operators
 * @since 4.0.0
 */
export function concat<A, B>(a: T<A>, b: T<B>): T<A & B>;
/**
 * Returns a unary function which concatenates two `Sequence.T<A>` and `Sequence.T<B>` 
 * and return a new `Sequence.T<A & B>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * const s1 = Sequence.make(30, 40)
 * 
 * Sequence.concat(s1)(s0)       // Sequence(10, 20, 30, 40)
 * ```
 * 
 * @template A the first Sequence's element type
 * @template B the second Sequence's element type
 * @param a the first sequence
 * @returns the unary function which concatenates `b` to `a`
 * @group Operators
 * @since 4.0.0
 */
export function concat<A, B>(a: T<A>): Fn.Unary<T<B>, T<A & B>>;
export function concat<A, B>(a: T<A>, b?: T<B>): any {
  if (guard(a) && guard(b)) {
    return make([...a, ...b]);
  }

  return (b: T<A>) => make([...b, ...a]);
}

/**
 * Adds an element to the start of the `Sequence.T<A>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * 
 * Sequence.prepend(s0, 30)       // Sequence(30, 10, 20)
 * Sequence.prepend(30)(s0)       // Sequence(30, 10, 20)
 * ```
 * 
 * @template A the Sequence's element type
 * @param a the sequence
 * @param b the element to prepend
 * @returns the new sequence with `b` prepended to `a`
 * @group Operators
 * @since 4.0.0
 */
export function prepend<A>(a: T<A>, b: A): T<A>;
/**
 * Returns a unary function which adds an element to the start of the `Sequence.T<A>` 
 * without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * 
 * Sequence.prepend(30)(s0)       // Sequence(30, 10, 20)
 * ```
 * 
 * @template A the Sequence's element type
 * @param a the element to prepend
 * @returns the unary function which prepends `a` to `b`
 * @group Operators
 * @since 4.0.0
 */
export function prepend<A>(a: A): Fn.Unary<T<A>, T<A>>;
export function prepend<A>(a: any, b?: any): any {
  if (guard(a)) {
    return make([b].concat([...a]));
  }

  return (b: T<A>) => make([a].concat([...b]));
}

//#endregion

//#region accessors

/**
 * Counts the number of elements that satisfy a given predicate 
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.count(s, Num.gt(10))   // 2
 * Sequence.count(s, Num.gt(20))   // 1
 * Sequence.count(s, Num.gt(50))   // 0
 * ```
 *
 * @template A the Sequence's element type
 * @param a the sequence
 * @param p the Filterable functor
 * @returns the number of elements which satisfy the predicate `p`
 * @group Accessors
 * @since 4.0.0
 */
export function count<A>(a: T<A>, p: Functors.Filterable<A>): number;
/**
 * Returns a unary function which counts the number of elements that 
 * satisfy a given predicate 
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const gt10 = Sequence.count(Num.gt(10));
 * 
 * gt10(Sequence.make(10, 20, 30))   // 2
 * gt10(Sequence.make(5, 7, 9))      // 0
 * ```
 *
 * @template A the Sequence's element type
 * @param a the Filterable functor
 * @returns the unary function which counts how many elements in `b` satisfy the predicate `p`
 * @group Accessors
 * @since 4.0.0
 */
export function count<A>(a: Functors.Filterable<A>): Fn.Unary<T<A>, number>;
export function count<A>(a: T<A> | Functors.Filterable<A>, p?: Functors.Filterable<A>): any {
  if (guard(a) && typeof p === 'function') {
    return length(filter(a, p));
  }

  return (b: T<A>) => length(filter(b, a as Functors.Filterable<A>));
}

/**
 * Gets a `Sequence.T<A>`'s first element.
 * 
 * Returns `Option.None` if none is found.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20, 30)
 * const s1 = Sequence.make()
 * 
 * Sequence.first(s0)       // 10
 * Sequence.first(s1)       // null
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
export const first = <A>(t: T<A>): Option.T<A> => {
  const f = get(t, 0);
  return isErr(f) ? null : f as unknown as Option.T<A>;
};

/**
 * Gets an element at a specific index. 
 * 
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make('hello', 'world')
 * 
 * Sequence.get(s, 0)       // 'hello'
 * Sequence.get(s, 9)       // RangeError(`Index out of bounds 9 for length 2`);
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
export function get<A>(a: T<A>, i: number): Result.T<A>;
/**
 * Returns a unary function which gets an element at a specific index. 
 * 
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make('hello', 'world')
 * const get0 = Sequence.get(0);
 * const get9 = Sequence.get(9);
 * 
 * get0(s)       // 'hello'
 * get9(s)       // RangeError(`Index out of bounds 9 for length 2`);
 * ```
 *
 * @template A the Sequence's element type
 * @param a the index of the element
 * @returns the unary function which accepts a `Sequence.T<A>` and returns
 *  - `Result.Ok<A>` if `i` is in bound
 *  - `Result.Err` if `i` is out of bound or negative
 * @group Accessors
 * @since 4.0.0
 */
export function get<A>(a: number): Fn.Unary<T<A>, Result.T<A>>;
export function get<A>(a: any, i?: any): any {
  const _get = <B>(x: T<B>, y: number) => {
    const s = length(x);

    if (y < 0 || y > s - 1) {
      return new RangeError(`Index out of bounds ${y} for length ${s}`);
    }

    return values(x)[y];
  };

  if (guard(a)) {
    return _get(a, i);
  }

  return (b: T<A>) => _get(b, a);
}

/**
 * Gets a `Sequence.T<A>`'s last element if any.
 * 
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20, 30)
 * const s1 = Sequence.make()
 * 
 * Sequence.last(s0)       // 30
 * Sequence.last(s1)       // null
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
export const last = <A>(t: T<A>): Option.T<A> => {
  const r = get(t, length(t) - 1);
  return isErr(r) ? null as Option.None : r as Option.Some<A>;
};

/**
 * Gets the length of a `Sequence.T<A>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make(1, 2, 3)
 * 
 * Sequence.length(s)           // 3
 * ```
 * 
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the Sequence's length
 * @group Accessors
 * @since 4.0.0
 */
export const length = <A>(t: T<A>): number => Object.values(t[indexer]()).length;

/**
 * Gets values of a `Sequence.T<A>` as an immutable indexed object. 
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make('hello', 'world')
 * 
 * Sequence.values(s)       // { 0: 'hello', 1: 'world' }
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the sequence values as an immutable dictionary
 * @group Accessors
 * @since 4.0.0
 */
export const values = <A>(t: T<A>) => t[indexer]();

//#endregion

//#region predicates

/**
 * Returns `true` if the sequence is empty.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make()
 * const s1 = Sequence.make(10)
 * 
 * Sequence.empty(s)                // true
 * Sequence.empty(s1)               // false
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
export const empty = <A>(t: T<A>) => length(t) === 0;

/**
 * Returns `true` if the sequence is populated.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.populated(s)                // true
 * Sequence.populated(Sequence.make())  // false
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
export const populated = <a>(t: T<a>) => length(t) !== 0;

//#endregion

//#region sortables

/**
 * Sorts and returns a new `Sequence.T<A>` values with a `Comparable<a>` or `ComparableModule<a>` functor.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const a = Sequence.make(5, 3, 1, 4, 2)
 * const b = Sequence.sort(a, Num)
 * 
 * Sequence.sort(a, Num) // Sequence.make(1, 2, 3, 4, 5)
 * Sequence.sort(b, Num.desc)   // Sequence.make(5, 3, 1, 4, 2)
 * ```
 *
 * @template A the Sequence's element type
 * @param a the sequence
 * @param mod the Comparable functor or the Comparable module functor
 * @returns the sorted sequence
 * @group Sortables
 * @since 4.0.0
 */
export function sort<A>(a: T<A>, mod: Functors.Comparable<A> | Functors.ComparableModule<A>): T<A>;
/**
 * Returns a unary function which sorts and returns a new `Sequence.T<A>` values 
 * with a `Comparable<a>` or `ComparableModule<a>` functor.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const asc = Sequence.sort(Num.asc)
 * const desc = Sequence.sort(Num.desc)
 * 
 * const s0 = Sequence.make(1, 2, 3)
 * const s1 = Sequence.make(6, 5, 4)
 * 
 * asc(s1)      // Sequence.make(4, 5, 6)
 * desc(s0)     // Sequence.make(3, 2, 1)
 * ```
 *
 * @template A the Sequence's element type
 * @param a the Comparable functor or the Comparable module functor
 * @returns the unary function which sorts the passed sequence
 * @group Sortables
 * @since 4.0.0
 */
export function sort<A>(a: Functors.Comparable<A> | Functors.ComparableModule<A>): Fn.Unary<T<A>, T<A>>;
export function sort<A>(a: T<A> | Functors.Comparable<A> | Functors.ComparableModule<A>, mod?: Functors.Comparable<A> | Functors.ComparableModule<A>): any {
  const getcmp = (x: Functors.Comparable<A> | Functors.ComparableModule<A>) => typeof x === 'function' ? x : x.cmp;

  if (arguments.length === 2 && guard(a)) {
    return make(Array.from(a).sort(getcmp(mod!)));
  }

  return (x: T<A>) => make(Array.from(x).sort(getcmp(a as Functors.Comparable<A> | Functors.ComparableModule<A>)));
}

//#endregion

//#region serializables

/**
 * Converts a `Sequence.T<A>` to an array `a[]`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.toArray(s) // [10, 20, 30]
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the array
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = <A>(t: T<A>): A[] => Array.from(t);

/**
 * Serializes a `Sequence.T<A>` to json
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.toJSON(Sequence.make(1, 2))     // { 0: 1, 1: 2 }
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the JSONised value
 * @group Serializables
 * @since 4.0.0
 */
export const toJSON = <a>(t: T<a>) => Array.from(t);

/**
 * Serializes a `Sequence.T<A>` to a `Map<number, a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.toMap(Sequence.make(1, 2))     // Map([0, 1], [1, 2])
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the Map
 * @group Serializables
 * @since 4.0.0
 * @since 4.0.0
 */
export const toMap = <A>(t: T<A>) => new Map(Object.entries(t[indexer]()));

/**
 * Converts a `Sequence.T<A>` to a Set `Set<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.toSet(s) // Set(10, 20, 30)
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the Set
 * @group Serializables
 * @since 4.0.0
 */
export const toSet = <A>(t: T<A>): Set<A> => new Set(t);

/**
 * Stringifies a `Sequence.T<A>`  
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.toString(s)     // '10,20,30'
 * ```
 *
 * @template A the Sequence's element type
 * @param t the sequence
 * @returns the string
 * @group Serializables
 * @since 4.0.0
 */
export const toString = <A>(t: T<A>) => Array.from(t).toString();

//#endregion