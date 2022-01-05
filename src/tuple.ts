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
 * import * as t from 'tuple'
 * 
 * const a: t.tuple<[number, number, number]> = [1, 2, 3]
 * const b: t.tuple<[number, number, number]> = [1, 2, 3]
 * const c: t.tuple<[number, number, number]> = [1, 2, 4]
 * const d: t.tuple<[number, number]> = [1, 2];
 * 
 * console.log(t.cmp(a, b)) // 0
 * console.log(t.cmp(a, c)) // -1
 * console.log(t.cmp(c, a)) // 1
 * console.log(t.cmp(d, a)) // -1
 * console.log(t.cmp(a, d)) // 1
 * console.log(t.cmp(null, a)) // -1
 * console.log(t.cmp(null, undefined)) // 0
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
 * import * as t from 'tuple'
 * 
 * const a: t.tuple<[number, number, number]> = [1, 2, 3]
 * const b: t.tuple<[number, number, number]> = [1, 2, 3]
 * const c: t.tuple<[number, number, number]> = [1, 2, 4]
 * const d: t.tuple<[number, number]> = [1, 2];
 * 
 * console.log(t.eq(a, b)) // true
 * console.log(t.eq(a, c)) // false
 * console.log(t.eq(c, a)) // false
 * console.log(t.eq(d, a)) // false
 * console.log(t.eq(a, d)) // false
 * console.log(t.eq(null, a)) // false
 * console.log(t.eq(null, undefined)) // true
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
 * import * as t from 'tiinvo/tuple';
 * import * as num from 'tiinvo/num';
 * import * as str from 'tiinvo/str';
 * 
 * const guard = t.guardOf(num.guard, str.guard, num.guard);
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
 * import * as t from 'tiinvo/tuple';
 * 
 * t.get(2)([1, 2, 3]); // 3
 * t.get(2)([1, 2]);    // null
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
 * import * as t from 'tiinvo/tuple';
 * 
 * t.intersect([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
 * t.intersect([1, 2, 3])([1, 2, 4]); // [1, 2]
 * t.intersect([1, 2, 3])([1, 2, 4, 5]); // [1, 2]
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
 * import * as t from 'tiinvo/tuple';
 * 
 * t.length([1, 2, 3]); // 3
 * t.length([1, 2, 3, 4, 5]); // 5
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
 * import * as t from 'tiinvo/tuple';
 * 
 * const m = [
 *   (a: number) => a + 1,
 *   (a: number) => a * 2,
 *   (a: number) => a * 3
 * ];
 * 
 * t.map(m)([1, 2, 3]); // [2, 4, 6]
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
 * import * as t from 'tiinvo/tuple';
 * 
 * t.union([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
 * t.union([1, 2, 3])([1, 2, 4]); // [1, 2, 3, 4]
 * t.union([1, 2, 3])([1, 2, 4, 5]); // [1, 2, 3, 4, 5]
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const union = <a extends tuple<any>>(a: a) => <b extends tuple<any>>(b: b): a | b => 
  Array.from(new Set([...a, ...b])) as unknown as a | b;