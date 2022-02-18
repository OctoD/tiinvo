import type * as f from './functors';
import type * as o from './option';

export type flat<a extends object> = object extends a
  ? object
  : {
    [k in keyof a]-?: (x: NonNullable<a[k]> extends infer b
      ? b extends object
      ?
      b extends readonly any[]
      ? Pick<a, k>
      : flat<b> extends infer c
      ? ({
        [kc in keyof c as `${Extract<k, string | number>}.${Extract<kc, string | number>}`]: c[kc]
      })
      : never
      : Pick<a, k>
      : never
    ) => void
  } extends Record<keyof a, (y: infer d) => void>
  ? d extends infer _U
  ? { [kd in keyof d]: d[kd] }
  : never
  : never

export type entries<a> = {
  [k in keyof a]: [k, a[k]];
}[keyof a][];

export type keys<a> = (keyof a)[];

export type guardsFromStruct<T> = {
  [key in keyof T]: T[key] extends o.option<infer b> ? f.guard<o.option<b>> | guardsFromStruct<T[key]> : f.guard<T[key]> | guardsFromStruct<T[key]>;
};

export type values<a> = (a[keyof a])[];

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 * 
 * ```ts
 * import { Object } from 'tiinvo';
 * 
 * const a = { a: 1, b: 2 };
 * const b = { b: 3, c: 4 };
 * const c = { c: 5, d: 6 };
 * 
 * Obj.assign(a, b, c);
 * // { a: 1, b: 3, c: 5, d: 6 }
 * ```
 * 
 * @param target The target object to copy to.
 * @param sources One or more source objects from which to copy properties
 * @returns The target object
 * 
 * @since 3.0.9
 */
export const assign = Object.assign;

/**
 * Compares two objects deeply.
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const a = { a: 1, b: { c: 2 } };
 * const b = { a: 1, b: { c: 2 } };
 * const c = { a: 1, b: { c: 3 } };
 * 
 * Obj.cmp(a, b); // 0
 * Obj.cmp(a, c); // -1
 * Obj.cmp(c, a); // 1
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparableE<Record<string, any>, Record<string, any>> = (a, b) => {
  const aflat = flat(a) as Record<string, unknown>;
  const bflat = flat(b) as Record<string, unknown>;
  const allkeys = Array.from(new Set([...keys(aflat), ...keys(bflat)]));
  const results: (-1 | 0 | 1)[] = [];

  for (let i = 0; i < allkeys.length; i++) {
    const key = allkeys[i];
    const has = haskey(key);

    if (has(aflat) && has(bflat)) {
      const va: any = aflat[key];
      const vb: any = bflat[key];

      results.push(va === vb ? 0 : va < vb ? -1 : 1);
    } else if (has(aflat) && !has(bflat)) {
      results.push(-1);
    } else if (!has(aflat) && has(bflat)) {
      results.push(1);
    }
  }

  const result = results.reduce((acc, cur) => acc + cur, 0 as any);

  return result === 0 ? 0 : result > 0 ? 1 : -1;
}
/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const a = { a: 1, b: 2 };
 * Obj.defineProperty(a, 'c', { value: 3, enumerable: true, configurable: true, writable: true });
 * // { a: 1, b: 2, c: 3 }
 * ```
 * 
 * @since 3.1.0
 */
export const defineProperty = Object.defineProperty

/**
 * Returns object entries
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const entries = Object.entries({ a: 1, b: 2 });
 * console.log(entries); // [ ['a', 1], ['b', 2] ]
 * ```
 * @param o 
 * @returns 
 * @since 3.0.0
 */
export const entries = <a>(o: a): entries<a> => Object.entries(o) as entries<a>;
/**
 * Returns a flat representation for `a`.
 * 
 * Ideal to use it for diff or for mongodb queries/inserts.
 * 
 * ```ts
 * import { Object } from 'tiinvo';
 * 
 * const myobject = {
 *    a: {
 *      b: {
 *        c: 100
 *      }
 *    },
 *    d: 20
 * }
 * 
 * Obj.flat(myobject) // { 'a.b.c': 100, d: 20 }
 * ```
 * 
 * @param obj 
 * @param prefix 
 * @returns 
 * @since 3.0.0
 */
export const flat = <a extends Record<string, any>>(obj: a, prefix = ``): flat<a> => {
  const flattened = {} as any
  const kl = keys(obj)

  for (let i = 0; i < kl.length; i++) {
    const key = kl[i] as string;
    const prefixed = prefix ? `${prefix}.${key}` : key;
    const value = (obj as any)[key]

    if (typeof value === 'object' && value !== null) {
      Object.assign(flattened, flat(value, prefixed))
    } else {
      flattened[prefixed] = value
    }
  }

  return flattened
}
/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * 
 * ```ts
 * import { Object } from 'tiinvo';
 * 
 * const a = { a: 1, b: 2 };
 * Obj.freeze(a);
 * a.a = 100; // throws
 * ```
 * 
 * @since 3.1.0
 */
export const freeze = Object.freeze;
/**
 * Returns an object created by key-value entries for properties and methods
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const fromEntries = Object.fromEntries([
 *  ['a', 1], 
 *  ['b', 2]
 * ]);
 * 
 * console.log(fromEntries); // { a: 1, b: 2 }
 * ```
 * 
 * @param entries
 * @returns
 * @since 3.1.0
 */
export const fromEntries = Object.fromEntries;
/**
 * Gets a property `a` from an object `b` and returns a `option<c>`
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const get = Object.get(`foo`);
 * 
 * console.log(get({ foo: `bar` })); // some<`bar`>
 * console.log(get({})); // none
 * ```
 * 
 * @param a the property to get
 * @param b the object to get the property from
 * @returns 
 * @since 3.0.0
 */
export const get = <a extends string>(a: a) => <b>(b: b): o.option<b extends Record<a, infer u> ? u : null> => haskey(a)(b) ? b[a] : null as o.option<any>;
/**
 * Returns true if a is a `object` and not null
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * console.log(Object.isobject({})); // true
 * console.log(Object.isobject(null)); // false
 * ```
 * 
 * @param a
 * @returns
 * @since 3.0.0
 */
export const guard = (a => typeof a === 'object' && a !== null) as f.guard<object>
/**
 * Returns `true` if a value `v` implements a shape `s`
 * 
 * ```typescript
 * import { Obj, String, Number, Boolean } from 'tiinvo';
 * 
 * const isshape = Object.guardOf({
 *    a: String.guard,
 *    b: Number.guard,
 *    c: Boolean.guard
 * });
 * 
 * console.log(isshape({ a: `foo`, b: 1, c: true })); // true
 * console.log(isshape({ a: `foo`, b: false, c: 1 })); // false
 * ```
 * 
 * @param s 
 * @returns 
 * @since 3.0.0
 */
export const guardOf = <a extends any>(
  s: guardsFromStruct<a>
) => (v: unknown): v is a => {
  if (!guard(s) || !guard(v)) {
    return false;
  }

  const keys = Object.keys(s);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const currentvalue = v[key as keyof typeof v];
    const currenttg = s[key as keyof typeof s];
    const case1 = guard(currenttg) && guardOf(currenttg as any)(currentvalue);
    const case2 = typeof currenttg === 'function' && currenttg(currentvalue);

    if (!case1 && !case2) {
      return false;
    }
  }

  return true;
};

/**
 * Returns true if a is a `object` and has property `k`
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const hasa = Object.haskey('a');
 * console.log(hasa({})); // false
 * console.log(hasa({ a: 1 })); // true
 * ```
 * 
 * @param k 
 * @returns 
 * @since 3.0.0
 */
export const haskey = <k extends string>(k: k) => (o: unknown): o is Record<k, unknown> => guard(o) && o.hasOwnProperty(k);
/**
 * Returns true if a is a `object` and has property `k` of type `g`
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * import * as num from 'tiinvo/num';
 * 
 * const hasa = Object.haskeyOf('a', num.guard);
 * 
 * console.log(hasa({})); // false
 * console.log(hasa({ a: 1 })); // true
 * console.log(hasa({ a: `nope` })); // false
 * ```
 * 
 * @param k 
 * @param g 
 * @returns 
 * @since 3.0.0
 */
export const haskeyOf = <a, k extends string>(k: k, g: f.guard<a>) => (o: unknown): o is Record<k, a> => guard(o) && o.hasOwnProperty(k) && g((o as any)[k]);
/**
 * Returns the names of the enumerable string properties and methods of an object.
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * console.log(Object.keys({ a: 1, b: 2 })); // ['a', 'b']
 * console.log(Object.keys({})); // []
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const keys = <a extends { [index: string]: unknown }>(a: a): keys<a> => Object.keys(a) as keys<a>;
/**
 * Maps a function over the entries of an object.
 * 
 * ```ts
 * import { Object, Number } from 'tiinvo';
 * 
 * const map = Object.map(Number.umul(2));
 * const map2 = obj.map((a: number | string | boolean) => {
 *   switch (typeof a) {
 *     case 'number': return a * 2;
 *     case 'string': return a + a;
 *     case 'boolean': return !a;
 *   }
 * })
 * console.log(map({ a: 1, b: 2 })); // { a: 2, b: 4 }
 * console.log(map2({ a: 2, b: 'hello', c: true })); // { a: 4, b: 'hellohello', c: false }
 * ```
 * 
 * @param fn 
 * @returns 
 * @since 3.1.0
 */
export const map = <a extends string, b, c>(fn: (b: b, a: a, i: number) => c) => <d extends { [key in a]: b }>(d: d): { [key in a]: c } => {
  const result = {} as { [key in a]: c };
  const kl = keys(d);

  for (let i = 0; i < kl.length; i++) {
    const v = d[kl[i]];
    result[kl[i] as keyof typeof result] = fn(v, kl[i] as a, i) as c;
  }

  return result;
}
/**
 * Maps a function over the keys of an object.
 * 
 * ```ts
 * import { Object, String } from 'tiinvo';
 * 
 * const map = Object.mapkeys(String.upper);
 * console.log(map({ a: 1, b: 2 })); // { A: 1, B: 2 }
 * ```
 * 
 * @param fn 
 * @returns 
 * 
 * @since 3.1.0
 */
export const mapkeys = <a extends string, b extends string>(fn: (a: a, i: number) => b) => <c extends { [key in a]: d }, d>(c: c): { [key in b]: d } => {
  const result = {} as { [key in b]: d };
  const kl = keys(c);

  for (let i = 0; i < kl.length; i++) {
    const v = c[kl[i]];
    result[fn(kl[i] as a, i)] = v;
  }

  return result;
}
/**
 * Omits the keys in `a` that are in `b`
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const omit = Object.omit(['a', 'b']);
 * console.log(omit({ a: 1, b: 2, c: 3 })); // { c: 3 }
 * console.log(omit({ a: 1, b: 2 })); // {}
 * ```
 * @param k 
 * @returns 
 * @since 3.0.0
 */
export const omit = <a extends string>(k: a[]) => <b extends Record<string, any>>(b: b) => {
  const omitted = {} as Exclude<b, a>;
  const ownedkeys = keys(b);

  for (let index = 0; index < ownedkeys.length; index++) {
    const key = ownedkeys[index];

    if (!k.includes(key as a)) {
      (omitted as any)[key] = b[key];
    }
  }

  return omitted;
}
/**
 * Returns a new object with the keys of `a` that are in `b`
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * const pick = Object.pick(['a', 'b']);
 * console.log(pick({ a: 1, b: 2, c: 3 })); // { a: 1, b: 2 }
 * console.log(pick({ a: 1, b: 2 })); // { a: 1, b: 2 }
 * ```
 * 
 * @param keys 
 * @returns 
 * @since 3.0.0
 */
export const pick = <a extends string>(keys: a[]) => <b extends Record<string, any>>(b: b) => {
  const o = {} as Pick<b, a>;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (haskey(key)(b)) {
      o[key] = b[key];
    }
  }

  return o;
}
/**
 * Returns an object size
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * console.log(Object.size({ a: 1, b: 2 })); // 2
 * console.log(Object.size({})); // 0
 * ```
 * 
 * @param a
 * @returns
 * @since 3.0.10
 **/
export const size = <a extends Record<string, any>>(a: a): number => Object.keys(a).length;
/**
 * Returns an array of values of the enumerable properties of an object
 * 
 * ```typescript
 * import { Object } from 'tiinvo';
 * 
 * console.log(Object.values({ a: 1, b: 2 })); // [1, 2]
 * console.log(Object.values({})); // []
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const values = <a extends Record<string, any>>(a: a): values<a> => Object.values(a) as values<a>;