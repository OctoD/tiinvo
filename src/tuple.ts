import type * as f from './functors';
import type * as fn from './fn';
import type * as o from './option';

export type tuple<T extends any[]> = {
  [K in keyof T]: T[K]
}

/**
 * Compares two tuples. 
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * const a: Tuple.tuple<[number, number, number]> = [1, 2, 3]
 * const b: Tuple.tuple<[number, number, number]> = [1, 2, 3]
 * const c: Tuple.tuple<[number, number, number]> = [1, 2, 4]
 * const d: Tuple.tuple<[number, number]> = [1, 2];
 * 
 * console.log(Tuple.cmp(a, b)) // 0
 * console.log(Tuple.cmp(a, c)) // -1
 * console.log(Tuple.cmp(c, a)) // 1
 * console.log(Tuple.cmp(d, a)) // -1
 * console.log(Tuple.cmp(a, d)) // 1
 * console.log(Tuple.cmp(null, a)) // -1
 * console.log(Tuple.cmp(null, undefined)) // 0
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const cmp: f.comparable = (a, b) => {
  const isa = Array.isArray(a);
  const isb = Array.isArray(b);
  if (isa && isb) {
    const l1 = a.length;
    const l2 = b.length;

    if (l1 !== l2) {
      return l1 > l2 ? 1 : -1;
    } else {
      let r1 = 0;
      let r2 = 0;

      for (let i = 0; i < l1; i++) {
        r1 += a[i] > b[i] ? 1 : a[i] < b[i] ? -1 : 0;
        r2 += a[i] < b[i] ? 1 : a[i] > b[i] ? -1 : 0;
      }

      return r1 - r2 === 0 ? 0 : r1 > r2 ? 1 : -1;
    }
  } else if (!isa && !isb) {
    return 0;
  } else {
    return -1;
  }
}

/**
 * Returns `true` if the tuple are equal, otherwise `false`.
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * const a: Tuple.tuple<[number, number, number]> = [1, 2, 3]
 * const b: Tuple.tuple<[number, number, number]> = [1, 2, 3]
 * const c: Tuple.tuple<[number, number, number]> = [1, 2, 4]
 * const d: Tuple.tuple<[number, number]> = [1, 2];
 * 
 * console.log(Tuple.eq(a, b)) // true
 * console.log(Tuple.eq(a, c)) // false
 * console.log(Tuple.eq(c, a)) // false
 * console.log(Tuple.eq(d, a)) // false
 * console.log(Tuple.eq(a, d)) // false
 * console.log(Tuple.eq(null, a)) // false
 * console.log(Tuple.eq(null, undefined)) // true
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatable = (a, b) => cmp(a, b) === 0;

/**
 * Makes a guard function from a tuple of guards.
 * 
 * ```typescript
 * import { Number, String, Tuple } from 'tiinvo';
 * 
 * const guard = Tuple.guardOf(Number.guard, String.guard, Number.guard);
 * 
 * guard([1, 'a', 2]); // true
 * guard([1, 'a', 'b']); // false
 * ```
 * 
 * @param guards 
 * @returns 
 * @since 3.0.0
 */
export const guardOf = <g extends f.guard<any>[]>(... guards: g) => (value: unknown): value is tuple<fn.returnTypeOfManyGuards<g>> => 
  Array.isArray(value) && guards.every((guard, i) => guard(value[i]));

/**
 * Gets the first element `a` of a tuple as an option<a[i]>.
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * Tuple.get(2)([1, 2, 3]); // 3
 * Tuple.get(2)([1, 2]);    // null
 * ```
 * 
 * @param i 
 * @returns 
 * @since 3.0.0
 */
export const get = <i extends number>(i: i) => <a extends tuple<any>>(a: a): o.option<a[i]> => a[i] ?? null;

/**
 * Intersects two tuples `a` and `b` returning a new `tuple<c>`
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * Tuple.intersect([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
 * Tuple.intersect([1, 2, 3])([1, 2, 4]); // [1, 2]
 * Tuple.intersect([1, 2, 3])([1, 2, 4, 5]); // [1, 2]
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const intersect = <a extends tuple<any>>(a: a) => <b extends tuple<any>>(b: b): a & b => {
  const c = [] as unknown as a & b;
  const l = Math.min(a.length, b.length);

  for (let i = 0; i < l; i++) {
    if (a[i] === b[i]) {
      c[i] = a[i];
    }
  } 

  return c;
}


/**
 * Returns tuple length
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * Tuple.length([1, 2, 3]); // 3
 * Tuple.length([1, 2, 3, 4, 5]); // 5
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const length = <a extends tuple<any>>(a: a) => a.length;

/**
 * Maps a tuple<a> to a tuple<b> using some functions `m[]`.
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * const m = [
 *   (a: number) => a + 1,
 *   (a: number) => a * 2,
 *   (a: number) => a * 3
 * ];
 * 
 * Tuple.map(m)([1, 2, 3]); // [2, 4, 6]
 * ```
 * 
 * @param map 
 * @returns 
 * @since 3.0.0
 */
export const map = <m extends ((arg: any) => any)[]>(... map: m) => <b extends tuple<fn.returnTypeOfMany<m>>>(b: b): tuple<fn.returnTypeOfMany<m>> => {
  const r = [] as unknown as tuple<fn.returnTypeOfMany<m>>;
  for (let i = 0; i < b.length; i++) {
    r.push(map[i](b[i]));
  }
  return r;
}

/**
 * Returns the union of two tuples `a` and `b`.
 * 
 * ```typescript
 * import { Tuple } from 'tiinvo';
 * 
 * Tuple.union([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
 * Tuple.union([1, 2, 3])([1, 2, 4]); // [1, 2, 3, 4]
 * Tuple.union([1, 2, 3])([1, 2, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const union = <a extends tuple<any>>(a: a) => <b extends tuple<any>>(b: b): a | b => 
  Array.from(new Set([...a, ...b])) as unknown as a | b;