import { cmp as arrcmp } from './Arr.js';
import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';
import type * as Option from './Option.js';

const guardsymbolKey = Symbol('guard');
const guardsymbolValue = Symbol('guard');
const valuessymbol = Symbol('values');

/**
 * Represents a `TypedMap<K, V>`.
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Num, Str } from 'tiinvo'
 * 
 * const tm0 = TypedMap.make(Num, Str)
 * const tm1 = TypedMap.make(Num, Str, [[10, "hello"], [20, "world"]])
 * ```
 *
 * @template K the key type of the TypedMap
 * @template V the value type of the TypedMap
 * @since 4.0.0
 */
export type T<K, V> = {
  readonly [guardsymbolKey]: Functors.Guardable<K>;
  readonly [guardsymbolValue]: Functors.Guardable<V>;
  readonly [valuessymbol]: Map<K, V>;
  [Symbol.iterator](): Iterator<readonly [K, V]>;
};

//#region factories

/**
 * Creates a new `TypedMap.T<K, V>`.
 *
 * @example
 *
 * ```ts
 * import { Str, Num, TypedMap } from 'tiinvo'
 * 
 * const m = new Map<string, number>([['hello', 100], ['world', 200]])
 * 
 * TypedMap.make(Str, Num)
 * TypedMap.make(Str, Num, m)
 * TypedMap.make(Str.guard, Num)
 * TypedMap.make(Str.guard, Num, m)
 * TypedMap.make(Str, Num.guard)
 * TypedMap.make(Str, Num.guard, m)
 * TypedMap.make(Str.guard, Num.guard)
 * TypedMap.make(Str.guard, Num.guard, m)
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @returns the `TypedMap.T<K, V>`
 * @group Factories
 * @since 4.0.0
 */
export function make<K, V>(kg: Functors.Guardable<K> | Functors.GuardableModule<K>, vg: Functors.Guardable<V> | Functors.GuardableModule<V>, entries: Iterable<readonly [K, V]> = []): T<K, V> {
  const _kg = typeof kg === 'function' ? kg : kg.guard;
  const _vg = typeof vg === 'function' ? vg : vg.guard;

  for (const [k, v] of entries) {
    if (!_kg(k)) {
      throw new TypeError(`Key ${k} is not of a valid type`);
    }
    if (!_vg(v)) {
      throw new TypeError(`Value ${v} is not of a valid type`);
    }
  }

  const map = new Map<K, V>(entries);

  const _t = {
    get [guardsymbolKey]() {
      return typeof kg === 'function' ? kg : kg.guard;
    },
    get [guardsymbolValue]() {
      return typeof vg === 'function' ? vg : vg.guard;
    },
    get [valuessymbol]() {
      return new Map(map);
    },
  } as T<K, V>;

  Object.defineProperty(_t, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
      let i = 0;
      let keys = Array.from(map.keys()) as K[];

      return {
        next: () => {
          return {
            value: map.get(keys[i++] as K),
            done: (i > keys.length)
          };
        }
      };
    }
  });

  return _t;
}

//#endregion

//#region guards

/**
 * Checks if `x` is a `TypedMap.T<unknown, unknown>`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Num, Str } from 'tiinvo'
 * 
 * TypedMap.guard(10)                           // false
 * TypedMap.guard({})                           // false
 * TypedMap.guard(TypedMap.make(Num, Str))   // true
 * ```
 *
 * @param x the value to check
 * @returns
 *  - `true` if `x` is a `TypedMap.T<unknown, unknown>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard = (x: unknown): x is T<unknown, unknown> => typeof x === 'object' && x !== null && guardsymbolKey in x && guardsymbolValue in x && valuessymbol in x;

/**
 * Checks if `x` is of type `T<K, V>`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * TypedMap.guardOf(Str, Num, 10)                                               // false
 * TypedMap.guardOf(Str, Num, TypedMap.make(Str, Num, [["hello", 10]]))         // true
 * TypedMap.guardOf(Num, Num, TypedMap.make(Str, Num, [["hello", 10]]))         // false
 * ```
 *
 * @returns
 *  - `true` if `x` is a `TypedMap.T<K, V>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<K, V>(kg: Functors.Guardable<K> | Functors.GuardableModule<K>, vg: Functors.Guardable<V> | Functors.GuardableModule<V>, x: unknown): x is T<K, V>;
/**
 * Returns a unary function which checks if `x` is of type `T<K, V>`
 * 
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const guard0 = TypedMap.guardOf(Str, Num);
 * const guard1 = TypedMap.guardOf(Str.guard, Num);
 * const guard2 = TypedMap.guardOf(Str, Num.guard);
 * const guard3 = TypedMap.guardOf(Str.guard, Num.guard);
 * const m1 = TypedMap.make(Str, Num, [["hello", 10]]);
 * const m2 = TypedMap.make(Num, Str, [[10, "hello"]]);
 * 
 * guard0(10)         // false
 * guard0(m1)         // true
 * guard0(m2)         // false
 * guard1(10)         // false
 * guard1(m1)         // true
 * guard1(m2)         // false
 * guard2(10)         // false
 * guard2(m1)         // true
 * guard2(m2)         // false
 * guard3(10)         // false
 * guard3(m1)         // true
 * guard3(m2)         // false
 * ```
 *
 * @returns the unary function which returns
 *  - `true` if `x` is a `TypedMap.T<K, V>`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function guardOf<K, V>(kg: Functors.Guardable<K> | Functors.GuardableModule<K>, vg: Functors.Guardable<V> | Functors.GuardableModule<V>): (x: unknown) => x is T<K, V>;
export function guardOf<K, V>(kg: Functors.Guardable<K> | Functors.GuardableModule<K>, vg: Functors.Guardable<V> | Functors.GuardableModule<V>, x?: unknown): any {
  const _kg = typeof kg === 'function' ? kg : kg.guard;
  const _vg = typeof vg === 'function' ? vg : vg.guard;
  const _g = (_x: unknown): _x is T<K, V> => {
    if (guard(_x)) {
      for (const [k, v] of _x[valuessymbol]) {
        if (!_kg(k)) {
          return false;
        }
        if (!_vg(v)) {
          return false;
        }
      }

      return true;
    }

    return false;
  };

  if (arguments.length === 3) {
    return _g(x);
  } else {
    return (y: unknown): y is T<K, V> => _g(y);
  }
}

//#endregion

//#region comparables

/**
 * Compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * TypedMap.cmp(Str, Num, m0, m1)   // 1
 * TypedMap.cmp(Str, Num, m0, m2)   // 0
 * TypedMap.cmp(Str, Num, m0, m3)   // -1
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @param a the first TypedMap
 * @param b the second TypedMap
 * @returns 
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is equal to `b`
 *  - 1 if `a` is greater than `b`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a: T<K, V>, b: T<K, V>): Functors.ComparableResult;
/**
 * Returns a unary function which compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const cmp = TypedMap.cmp(Str, Num, TypedMap.make(Str, Num, [["a", 1], ["b", 2]]))
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * cmp(m1)   // -1
 * cmp(m2)   // 0
 * cmp(m3)   // 1
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @param a the first TypedMap
 * @returns the unary function which returns
 *  - -1 if `b` is less than `a`
 *  - 0 if `b` is equal to `a`
 *  - 1 if `b` is greater than `a`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a: T<K, V>): Fn.Unary<T<K, V>, Functors.ComparableResult>;
/**
 * Returns a binary function which compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const cmp = TypedMap.cmp(Str, Num)
 * const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * cmp(m0, m1)   // 1
 * cmp(m0, m2)   // 0
 * cmp(m0, m3)   // -1
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @returns the binary function which returns
 *  - -1 if `a` is less than `b`
 *  - 0 if `a` is equal to `b`
 *  - 1 if `a` is greater than `b`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>): Fn.Binary<T<K, V>, T<K, V>, Functors.ComparableResult>;
export function cmp<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a?: T<K, V>, b?: T<K, V>): any {
  const _kmod = typeof kmod === 'function' ? kmod : kmod.cmp;
  const _vmod = typeof vmod === 'function' ? vmod : vmod.cmp;

  const _cmp = (_kmod: Functors.Comparable<K>, _vmod: Functors.Comparable<V>, _a: T<K, V>, _b: T<K, V>): Functors.ComparableResult => {
    const keysresult = arrcmp(_kmod, Array.from(keys(_a)), Array.from(keys(_b)));
    const valuessresult = arrcmp(_vmod, Array.from(values(_a)), Array.from(values(_b)));

    return keysresult !== 0 ? keysresult : valuessresult;
  };

  if (arguments.length === 4 && guard(a) && guard(b)) {
    return _cmp(_kmod, _vmod, a, b);
  } else if (arguments.length === 3 && guard(a)) {
    return (c: T<K, V>) => _cmp(_kmod, _vmod, c, a);
  } else {
    return (c: T<K, V>, d: T<K, V>) => _cmp(_kmod, _vmod, c, d);
  }
}

/**
 * Compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * TypedMap.eq(Str, Num, m0, m1)   // false
 * TypedMap.eq(Str, Num, m0, m2)   // true
 * TypedMap.eq(Str, Num, m0, m3)   // false
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @param a the first TypedMap
 * @param b the second TypedMap
 * @returns 
 *  - `true` if `a` is equal to `b`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a: T<K, V>, b: T<K, V>): boolean;
/**
 * Returns a unary function which compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const eq = TypedMap.eq(Str, Num, TypedMap.make(Str, Num, [["a", 1], ["b", 2]]))
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * eq(m1)   // false
 * eq(m2)   // true
 * eq(m3)   // false
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @param a the first TypedMap
 * @returns the unary function which returns
 *  - `true` if `a` is equal to `b`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a: T<K, V>): Fn.Unary<T<K, V>, boolean>;
/**
 * Returns a binary function which compares two `TypedMap`s with a key comparer and a value comparer
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const eq = TypedMap.eq(Str, Num)
 * const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
 * const m1 = TypedMap.make(Str, Num, [["a", 1]])
 * const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])
 * 
 * eq(m0, m1)   // false
 * eq(m0, m2)   // true
 * eq(m0, m3)   // false
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param kmod the key comparer
 * @param vmod the value comparer
 * @returns the binary function which returns
 *  - `true` if `a` is equal to `b`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>): Fn.Binary<T<K, V>, T<K, V>, boolean>;
export function eq<K, V>(kmod: Functors.Comparable<K> | Functors.ComparableModule<K>, vmod: Functors.Comparable<V> | Functors.ComparableModule<V>, a?: T<K, V>, b?: T<K, V>): any {
  if (arguments.length === 4 && guard(a) && guard(b)) {
    return cmp(kmod, vmod, a, b) === 0;
  } else if (arguments.length === 3 && guard(a)) {
    return (c: T<K, V>) => cmp(kmod, vmod, a, c) === 0;
  } else {
    return (c: T<K, V>, d: T<K, V>) => cmp(kmod, vmod, c, d) === 0;
  }
}

//#endregion

//#region accessors

/**
 * Returns an iterable of key, value pairs for every entry in the map.
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [['a', 100], ['b', 200]])
 * 
 * for (const [k, v] of TypedMap.entries(m)) {
 *    console.log(k, v)
 * }
 * // logs
 * // 'a' 100
 * // 'b' 200
 * ```
 * 
 * @template K the key type
 * @template V the value type
 * @param t the TypedMap
 * @returns t entries
 * @group Accessors
 * @since 4.0.0
 */
export const entries = <K, V>(t: T<K, V>) => t[valuessymbol].entries();

/**
 * Gets a value `Option.T<V>` stored with a key `K`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const foo = TypedMap.make(Str, Num, [['a', 1], ['b', 2]])
 * 
 * TypedMap.get("a")  // 1
 * TypedMap.get("b")  // 2
 * TypedMap.get("c")  // null
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param key the key
 * @param t the TypedMap
 * @returns 
 *  - the value if any as `Option.Some<V>`
 *  - `Option.None` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export function get<K, V>(key: K, t: T<K, V>): Option.T<V>;
/**
 * Returns a unary function which gets a value `Option.T<V>` stored with a key `K`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const foo = TypedMap.make(Str, Num, [['a', 1], ['b', 2]])
 * const getA = TypedMap.get("a")
 * const getB = TypedMap.get("b")
 * const getC = TypedMap.get("c")
 * 
 * getA(foo)  // 1
 * getB(foo)  // 2
 * getC(foo)  // null
 * ```
 *
 * @template K the key type
 * @param key the key
 * @group Accessors
 * @since 4.0.0
 */
export function get<K>(key: K): <V>(t: T<K, V>) => Option.T<V>;
export function get<K, V>(key: K, t?: T<K, V>): any {
  if (arguments.length === 2 && guard(t)) {
    return t?.[valuessymbol].get(key) ?? null;
  }

  return <V>(t: T<K, V>) => t[valuessymbol].get(key) ?? null;
}

/**
 * Checks if a TypedMap has a key `K`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [["hello", 100]])
 * 
 * TypedMap.has("hello", m)   // true
 * TypedMap.has("world", m)   // false
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param key the key
 * @param t the TypedMap
 * @returns 
 *  - `true` if the TypedMap has a key `K`
 *  - `false` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export function has<K, V>(key: K, t: T<K, V>): boolean | never;
/**
 * Returns a unary function which checks if a TypedMap has a key `K`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [["hello", 100]])
 * const hasHello = TypedMap.has("hello")
 * 
 * hasHello(m)   // true
 * hasHello(m)   // false
 * ```
 *
 * @template K the key type
 * @param key the key
 * @returns the unary function which accepts a TypedMap and returns
 *  - `true` if the TypedMap has a key `K`
 *  - `false` otherwise
 * @group Accessors
 * @since 4.0.0
 */
export function has<K, V>(key: K): <V>(t: T<K, V>) => boolean | never;
export function has<K, V>(key: K, t?: T<K, V>): any {
  const _has = (_x: T<K, V>, _k: K) => {
    if (_x[guardsymbolKey](_k)) {
      return _x[valuessymbol].has(_k);
    }

    throw new TypeError("Invalid key type for TypedMap");
  };

  if (arguments.length === 2 && guard(t)) {
    return _has(t, key);
  }

  return (_t: T<K, V>) => _has(_t, key);
}

/**
 * Returns an iterable of keys in the map
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * 
 * Array.from(TypedMap.keys(m))   // ["a", "b"]
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param t the TypedMap
 * @returns the keys iterable
 * @group Accessors
 * @since 4.0.0
 */
export const keys = <K, V>(t: T<K, V>) => t[valuessymbol].keys();

/**
 * Returns the number of elements in the Map
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * 
 * TypedMap.size(m)   // 2
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param t the TypedMap
 * @returns the TypedMap's size
 * @group Accessors
 * @since 4.0.0
 */
export const size = <K, V>(t: T<K, V>) => t[valuessymbol].size;

/**
 * Returns an iterable of values in the map
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
 * 
 * Array.from(TypedMap.values(m))   // [1, 2]
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param t the TypedMap
 * @returns the keys iterable
 * @group Accessors
 * @since 4.0.0
 */
export const values = <K, V>(t: T<K, V>) => t[valuessymbol].values();

//#endregion

//#region operators

/**
 * Removes an entry `K` from a TypedMap `T<K, V>` if any and returns a new TypedMap
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num, [['a', 0], ['b', 1]])
 * const m1 = TypedMap.delete('a', m0)
 * 
 * TypedMap.keys(m1)    // ['b']
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param key the key
 * @param t the TypedMap
 * @returns the new TypedMap
 * @group Operators
 * @since 4.0.0
 */
function _delete<K, V>(key: K, t: T<K, V>): T<K, V>;
/**
 * Returns a unary function which removes an entry `K` from a TypedMap `T<K, V>` if any and returns a new TypedMap
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num, [['a', 0], ['b', 1]])
 * const m1 = TypedMap.make(Str, Num, [['a', 0], ['c', 1]])
 * const deleteA = TypedMap.delete("a")
 * 
 * TypedMap.keys(deleteA(m0))    // ['b']
 * TypedMap.keys(deleteA(m1))    // ['c']
 * ```
 *
 * @template K the key type
 * @param key the key
 * @returns the unary function which deletes the key and returns the new TypedMap
 * @group Operators
 * @since 4.0.0
 */
function _delete<K>(key: K): <V>(t: T<K, V>) => T<K, V>;
function _delete<K, V>(key: K, t?: T<K, V>): any {
  const __delete = (_k: K, _t: T<K, V>) => {
    const _map = _t[valuessymbol];

    if (!_t[guardsymbolKey](_k)) {
      throw new TypeError("Invalid key type for TypedMap");
    }

    if (_map.has(_k)) {
      _map.delete(_k);
    }

    return make(_t[guardsymbolKey], _t[guardsymbolValue], _map);
  };

  if (arguments.length === 2 && guard(t)) {
    return __delete(key, t);
  }

  return (_t: T<K, V>) => __delete(key, _t);
}

export { _delete as delete };


/**
 * Sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.
 * 
 * This will not mutate the original map and will return a new TypedMap `T<K, V>`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num)
 * const m1 = TypedMap.set("hello", 100, m0)
 * 
 * Array.from(TypedMap.values(m0))  // []
 * Array.from(TypedMap.values(m1))  // [100]
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param a the key
 * @param b the value
 * @param c the TypedMap
 * @returns the new TypedMap
 * @group Operators
 * @since 4.0.0
 */
export function set<K, V>(a: K, b: V, c: T<K, V>): T<K, V>;
/**
 * Returns a unary function which sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.
 * 
 * This will not mutate the original map and will return a new TypedMap `T<K, V>`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num)
 * const setHello = TypedMap.set("hello", 100);
 * 
 * Array.from(TypedMap.values(setHello(m1)))  // [100]
 * Array.from(TypedMap.values(m0))            // []
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param a the key
 * @param b the value
 * @returns the unary function
 * @group Operators
 * @since 4.0.0
 */
export function set<K, V>(a: K, b: V): Fn.Unary<T<K, V>, T<K, V>>;
/**
 * Returns a binary function which sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.
 * 
 * This will not mutate the original map and will return a new TypedMap `T<K, V>`
 *
 * @example
 *
 * ```ts
 * import { TypedMap, Str, Num } from 'tiinvo'
 * 
 * const m0 = TypedMap.make(Str, Num)
 * const set = TypedMap.set(m0);
 * 
 * Array.from(TypedMap.values(set("hello", 100)))   // [100]
 * Array.from(TypedMap.values(set("world", 200)))   // [200]
 * Array.from(TypedMap.values(m0))                  // []
 * ```
 *
 * @template K the key type
 * @template V the value type
 * @param a the key
 * @param b the TypedMap
 * @returns the unary function
 * @group Operators
 * @since 4.0.0
 */
export function set<K, V>(a: T<K, V>): Fn.Binary<K, V, T<K, V>>;
export function set<K, V>(a: K | T<K, V>, b?: V | T<K, V>, c?: T<K, V>): any {
  const _set = (_k: K, _v: V, _t: T<K, V>) => {
    const _m = new Map(_t[valuessymbol]);
    _m.set(_k, _v);
    return make(_t[guardsymbolKey], _t[guardsymbolValue], _m);
  };

  if (arguments.length === 3 && guard(c)) {
    return _set(a as K, b as V, c);
  } else if (arguments.length === 2 && !guard(b)) {
    return (d: T<K, V>) => _set(a as K, b as V, d);
  } else if (guard(a)) {
    return (d: K, e: V) => _set(d, e, a);
  }
}

//#endregion
