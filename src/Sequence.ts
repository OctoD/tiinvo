import { cmp as arrCmp, eq as arrEq } from './Arr.js';
import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Option from './Option.js';
import type * as Result from './Result.js';
import { isErr } from './Result.js';

const indexer = Symbol("indexer");

/**
 * A `Sequence.t<a>` is an iterable list of elements `a` in a particular order.
 * 
 * It's immutable by design.
 */
export type t<a> = Iterable<a> & {
  [indexer](): Readonly<Record<number, a>>;
  [Symbol.iterator](): Iterator<a>;
};

//#region factories

/**
 * Makes a new `Sequence.t<a>` from a list of arguments `a`.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.make(10, 20, 30)    // Sequence.t<number>
 * Sequence.make([10, 20, 30])    // Sequence.t<number>
 * ```
 *
 * @since 4.0.0
 */
export const make = <a>(...v: a[]): t<a> => {
  const values: Record<number, a> = {};

  if (v.length === 1 && Array.isArray(v[0])) {
    v = v[0];
  }

  for (let i = 0; i < v.length; i++) {
    values[i] = v[i];
  }

  const _t = {
    [indexer]() {
      return Object.freeze({ ...values });
    },
  } as t<a>;

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
 * Checks if a value `x` is a `Sequence.t<unknown>`.
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
 * @since 4.0.0
 */
export const guard = (x: unknown): x is t<unknown> => typeof x === 'object' && x !== null && indexer in x;

/**
 * Checks if the parameter `x` is a `Sequence.t<a>`
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
 * @since 4.0.0
 */
export const guardOf = <a>(g: Functors.Guardable<a>) => (x: unknown): x is t<a> => guard(x) && toArray(x).every(g);

//#endregion

//#region comparables

/**
 * Returns 0 if two sequences are the same, -1 if a is less than b or 1 if a is more than b
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
 * @since 4.0.0
 */
export function cmp<a>(mod: Functors.ComparableModule<a>, a: t<a>, b: t<a>): Functors.ComparableResult;
export function cmp<a>(mod: Functors.ComparableModule<a>, a: t<a>): Fn.Unary<t<a>, Functors.ComparableResult>;
export function cmp<a>(mod: Functors.ComparableModule<a>): Fn.Binary<t<a>, t<a>, Functors.ComparableResult>;
export function cmp<a>(mod: Functors.ComparableModule<a>, a?: t<a>, b?: t<a>): any {
  const c = arrCmp(mod.cmp);

  if (guard(a) && guard(b)) {
    return c(toArray(a), toArray(b));
  } else if (guard(a) && !guard(b)) {
    return (d: t<a>) => c(toArray(a), toArray(d));
  } else {
    return (d: t<a>, e: t<a>) => c(toArray(d), toArray(e));
  }
}

/**
 * Returns true if two sequences are the same
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
 * Sequence.eq(Num, s0)(s1)      // true
 * Sequence.eq(Num)(s0, s1)      // true
 * 
 * Sequence.eq(Num, s0, s2)      // false
 * Sequence.eq(Num, s0)(s2)      // false
 * Sequence.eq(Num)(s0, s2)      // false
 * ```
 *
 * @since 4.0.0
 */
export function eq<a>(mod: Functors.EquatableModule<a>, a: t<a>, b: t<a>): boolean;
export function eq<a>(mod: Functors.EquatableModule<a>, a: t<a>): Fn.Unary<t<a>, boolean>;
export function eq<a>(mod: Functors.EquatableModule<a>): Fn.Binary<t<a>, t<a>, boolean>;
export function eq<a>(mod: Functors.EquatableModule<a>, a?: t<a>, b?: t<a>): any {
  const eqfn = arrEq(mod.eq);

  if (guard(a) && guard(b)) {
    return eqfn(toArray(a), toArray(b));
  } else if (guard(a) && !guard(b)) {
    return (d: t<a>) => eqfn(toArray(a), toArray(d));
  } else {
    return (d: t<a>, e: t<a>) => eqfn(toArray(d), toArray(e));
  }
}

//#endregion

//#region mappables

/**
 * Maps a `Sequence.t<a>` to a `Sequence.t<b>` using the functor `Functors.Mappable<a, b>`.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(1, 2, 3)
 * 
 * Sequence.map(s, Num.mul(2))        // Sequence.t(2, 4, 6)
 * Sequence.map(Num.mul(2))(s)        // Sequence.t(2, 4, 6)
 * ```
 *
 * @since 4.0.0
 */
export function map<a, b>(a: t<a>, m: Functors.Mappable<a, b>): t<b>;
export function map<a, b>(a: Functors.Mappable<a, b>): Fn.Unary<t<a>, t<b>>;
export function map<a, b>(a: t<a> | Functors.Mappable<a, b>, m?: any): any {
  if (guard(a) && typeof m === 'function') {
    return make.apply(null, toArray(a).map(m));
  }

  return (b: t<a>) => {
    return make.apply(null, toArray(b).map(a as Functors.Mappable<a, b>));
  };
}

/**
 * Reduces all elements `a` to `b` of a `Sequence.t<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30)
 * 
 * Sequence.reduce(s, Num.add, 0)  // 60
 * Sequence.reduce<number, number>(Num.add, 0)(s)  // 60
 * ```
 *
 * @since 4.0.0
 */
export function reduce<a, b>(a: t<a>, mod: Functors.Reduceable<a, b>, s: b): b;
export function reduce<a, b>(a: Functors.Reduceable<a, b>, mod: b): Fn.Unary<t<a>, b>;
export function reduce<a, b>(a: t<a> | Functors.Reduceable<a, b>, mod?: b | Functors.Reduceable<a, b>, s?: b): any {
  if (guard(a) && typeof mod === 'function') {
    return Array.from(a).reduce((x, c) => (mod as Functors.Reduceable<a, b>)(x, c), s as b);
  }

  return (b: t<a>) => Array.from(b).reduce((x, c) => (a as Functors.Reduceable<a, b>)(x, c), mod as b);
}

//#endregion

//#region filterables

/**
 * Filters a `Sequence.t<a>` with a specified `Filterable<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const s = Sequence.make(10, 20, 30, 40)
 * 
 * Sequence.filter(s, Num.gt(20))   // Sequence.make(30, 40)
 * Sequence.filter(Num.gt(20))(s)   // Sequence.make(30, 40)
 * ```
 *
 * @since 4.0.0
 */
export function filter<a>(a: t<a>, f: Functors.Filterable<a>): t<a>;
export function filter<a>(a: Functors.Filterable<a>): Fn.Unary<t<a>, t<a>>;
export function filter<a>(a: t<a> | Functors.Filterable<a>, f?: Functors.Filterable<a>): any {
  if (guard(a) && typeof f === 'function') {
    return make.apply(null, Array.from(a).filter(f));
  }

  return (c: t<a>) => make.apply(null, Array.from(c).filter(a as Functors.Filterable<a>));
}

/**
 * Filters and reduce a `Sequence.t<a>` to `b`
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
 * Sequence.filterReduce(f)(s)      // 6
 * ```
 *
 * @since 4.0.0
 */
export function filterReduce<a, b>(a: t<a>, mod: Functors.FilterReduceableModule<a, b>): b;
export function filterReduce<a, b>(mod: Functors.FilterReduceableModule<a, b>): Fn.Unary<t<a>, b>;
export function filterReduce<a, b>(a: t<a> | Functors.FilterReduceableModule<a, b>, mod?: Functors.FilterReduceableModule<a, b>): any {
  const impl = (x: t<a>, y: Functors.FilterReduceableModule<a, b>): b => {
    let out: b = y.default;

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

  return (b: t<a>) => impl(b, a);
}


/**
 * Filters and maps a `Sequence.t<a>` to a `Sequence.t<b>` using the `FilterMappableModule<a, b>` functor.
 * 
 * **Important** The filter is applied before the map.
 *
 * @example
 *
 * ```ts
 * import { Functors, Sequence, Num, Range } from 'tiinvo'
 * 
 * const f: Functors.FilterMappableModule<number, string | Error> = {
 *   filter: Num.isOdd,
 *   map: Num.toBin,
 * }
 * const s = Sequence.make(... Range.make(0, 10));
 * const m = Sequence.filterMap(f);
 * 
 * Sequence.filterMap(s, f)   // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
 * m(s)                       // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
 * 
 * ```
 *
 * @since 4.0.0
 */
export function filterMap<a, b>(a: t<a>, f: Functors.FilterMappableModule<a, b>): t<b>;
export function filterMap<a, b>(a: Functors.FilterMappableModule<a, b>): Fn.Unary<t<a>, t<b>>;
export function filterMap<a, b>(a: t<a> | Functors.FilterMappableModule<a, b>, f?: Functors.FilterMappableModule<a, b>): any {
  const handle = (a: t<a>, mod: Functors.FilterMappableModule<a, b>) => {
    const outvalues: b[] = [];

    for (const v of a) {
      if (mod.filter(v)) {
        outvalues.push(mod.map(v));
      }
    }

    return make.apply(null, outvalues);
  };

  if (guard(a) && typeof f === 'object') {
    return handle(a, f);
  }

  return (b: t<a>) => handle(b, a as Functors.FilterMappableModule<a, b>);
}

//#endregion

//#region operators

/**
 * Adds an element to the end of the `Sequence.t<a>` without mutating the original one.
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s0 = Sequence.make(10, 20)
 * 
 * Sequence.append(s0, 30)       // Sequence(10, 20, 30)
 * Sequence.append(30)(s0)       // Sequence(10, 20, 30)
 * ```
 *
 * @since 4.0.0
 */
export function append<a>(a: t<a>, b: a): t<a>;
export function append<a>(a: a): Fn.Unary<t<a>, t<a>>;
export function append<a>(a: any, b?: any): any {
  if (guard(a)) {
    return make.apply(null, Object.values(a[indexer]()).concat(b));
  }

  return (b: t<a>) => make.apply(null, Object.values(b[indexer]()).concat(a));
}

/**
 * Concatenates two `Sequence.t<a>` and `Sequence.t<b>` and return a new `Sequence.t<a>`.
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
 * Sequence.concat(s1)(s0)       // Sequence(10, 20, 30, 40)
 * ```
 *
 * @since 4.0.0
 */
export function concat<a, b>(a: t<a>, b: t<b>): t<a & b>;
export function concat<a, b>(a: t<a>): Fn.Unary<t<b>, t<a & b>>;
export function concat<a, b>(a: t<a>, b?: t<b>): any {
  if (guard(a) && guard(b)) {
    return make.apply(null, [...a, ...b]);
  }

  return (b: t<a>) => make.apply(null, [...b, ...a]);
}

/**
 * Adds an element to the start of the `Sequence.t<a>` without mutating the original one.
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
 * @since 4.0.0
 */
export function prepend<a>(a: t<a>, b: a): t<a>;
export function prepend<a>(a: a): Fn.Unary<t<a>, t<a>>;
export function prepend<a>(a: any, b?: any): any {
  if (guard(a)) {
    return make.apply(null, [b].concat([...a]));
  }

  return (b: t<a>) => make.apply(null, [a].concat([...b]));
}

//#endregion

//#region getters

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
 * Sequence.count(Num.gt(10))(s)   // 2
 * ```
 *
 * @since 4.0.0
 */
export function count<a>(a: t<a>, p: Functors.Filterable<a>): number;
export function count<a>(a: Functors.Filterable<a>): Fn.Unary<t<a>, number>;
export function count<a>(a: t<a> | Functors.Filterable<a>, p?: Functors.Filterable<a>): any {
  if (guard(a) && typeof p === 'function') {
    return length(filter(a, p));
  }

  return (c: t<a>) => length(filter(c, a as Functors.Filterable<a>));
}

/**
 * Gets a `Sequence.t<a>`'s first element.
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
 * @since 4.0.0
 */
export const first = <a>(a: t<a>): Option.T<a> => {
  const f = get(a, 0);
  return isErr(f) ? null : f as unknown as Option.T<a>;
};

/**
 * Gets an element at a specific index. 
 * 
 * If the index is out of bounds, `Option.None` is returned, otherwise it returns `a` 
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const s = Sequence.make('hello', 'world')
 * 
 * Sequence.get(s, 0)       // 'hello'
 * Sequence.get(s, 9)       // null
 * ```
 *
 * @since 4.0.0
 */
export function get<a>(a: t<a>, i: number): Result.t<a>;
export function get<a>(a: number): Fn.Unary<t<a>, Result.t<a>>;
export function get<a>(a: any, i?: any): any {
  if (guard(a)) {
    const s = length(a);

    if (i < 0 || i > s - 1) {
      return new RangeError(`Index out of bounds ${i} for length ${s}`);
    }

    return values(a)[i];
  }

  return (b: t<a>) => {
    const s = length(b);

    if (a < 0 || a > s - 1) {
      return new RangeError(`Index out of bounds ${a} for length ${s}`);
    }

    return values(b)[a];
  };
}

/**
 * Gets a `Sequence.t<a>`'s last element.
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
 * Sequence.last(s0)       // 30
 * Sequence.last(s1)       // null
 * ```
 *
 * @since 4.0.0
 */
export const last = <a>(a: t<a>): Option.T<a> => {
  const f = get(a, length(a) - 1);
  return isErr(f) ? null : f as any;
};

/**
 * Gets the length of a `Sequence.t<a>`
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
 * @since 4.0.0
 */
export const length = <a>(t: t<a>): number => Object.values(t[indexer]()).length;

/**
 * Gets values of a `Sequence.t<a>` as an immutable indexed object. 
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
 * @since 4.0.0
 */
export const values = <a>(t: t<a>) => t[indexer]();

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
 * @since 4.0.0
 */
export const empty = <a>(t: t<a>) => length(t) === 0;

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
 * @since 4.0.0
 */
export const populated = <a>(t: t<a>) => length(t) !== 0;

//#endregion

//#region sortables

/**
 * Sorts and returns a new `Sequence.t<a>` values with a `Comparable<a>` or `ComparableModule<a>` functor.
 *
 * @example
 *
 * ```ts
 * import { Sequence, Num } from 'tiinvo'
 * 
 * const a = Sequence.make(5, 3, 1, 4, 2)
 * const b = Sequence.sort(a, Num)
 * 
 * b          // Sequence.make(1, 2, 3, 4, 5)
 * ```
 *
 * @since 4.0.0
 */
export function sort<a>(a: t<a>, mod: Functors.Comparable<a> | Functors.ComparableModule<a>): t<a>;
export function sort<a>(a: Functors.Comparable<a> | Functors.ComparableModule<a>): Fn.Unary<t<a>, t<a>>;
export function sort<a>(a: t<a> | Functors.Comparable<a> | Functors.ComparableModule<a>, mod?: Functors.Comparable<a> | Functors.ComparableModule<a>): any {
  const getcmp = (x: Functors.Comparable<a> | Functors.ComparableModule<a>) => typeof x === 'function' ? x : x.cmp;

  if (arguments.length === 2 && guard(a)) {
    return make.apply(null, Array.from(a).sort(getcmp(mod!)));
  }

  return (x: t<a>) => make.apply(null, Array.from(x).sort(getcmp(a as Functors.Comparable<a> | Functors.ComparableModule<a>)));
}

//#endregion

//#region serializables

/**
 * Try to convert a `string` to a `Sequence.t<a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * const x  = Sequence.fromString<number>(`10,20,30`)
 * const t1 = Sequence.make(10, 20, 30)
 * const t2 = Sequence.make(10, 30, 20)
 * 
 * Sequence.eq(x as any, t1)        // true
 * Sequence.eq(x as any, t2)        // false
 * ```
 *
 * @since 4.0.0
 */
export const fromString = <c = unknown>(x: string): Result.t<t<c>> => {
  try {
    return make.apply(null, JSON.parse(`[${x}]`)) as t<c>;
  } catch (err) {
    return err as Error;
  }
};

/**
 * Converts a `Sequence.t<a>` to an array `a[]`
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
 * @since 4.0.0
 */
export const toArray = <a>(a: t<a>): a[] => Array.from(a);

/**
 * Serializes a `Sequence.t<a>` to json
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.toJSON(Sequence.make(1, 2))     // { 0: 1, 1: 2 }
 * ```
 *
 * @since 4.0.0
 */
export const toJSON = <a>(a: t<a>) => Array.from(a);

/**
 * Serializes a `Sequence.t<a>` to a `Map<number, a>`
 *
 * @example
 *
 * ```ts
 * import { Sequence } from 'tiinvo'
 * 
 * Sequence.toMap(Sequence.make(1, 2))     // Map([0, 1], [1, 2])
 * ```
 *
 * @since 4.0.0
 */
export const toMap = <a>(a: t<a>) => new Map(Object.entries(a[indexer]()));

/**
 * Converts a `Sequence.t<a>` to a Set `Set<a>`
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
 * @since 4.0.0
 */
export const toSet = <a>(a: t<a>): Set<a> => new Set(a);

/**
 * Stringifies a `Sequence.t<a>`  
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
 * @since 4.0.0
 */
export const toString = <a>(a: t<a>) => Array.from(a).toString();

//#endregion