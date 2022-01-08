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
  [key in keyof T]: f.guard<T[key]> | guardsFromStruct<T[key]>;
};

export type values<a> = (a[keyof a])[];

/**
 * Compares two objects deeply.
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * const a = { a: 1, b: { c: 2 } };
 * const b = { a: 1, b: { c: 2 } };
 * const c = { a: 1, b: { c: 3 } };
 * 
 * obj.cmp(a, b); // 0
 * obj.cmp(a, c); // -1
 * obj.cmp(c, a); // 1
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
 * Returns a flat representation for `a`.
 * 
 * Ideal to use it for diff or for mongodb queries/inserts.
 * 
 * ```ts
 * import * as obj from 'tiinvo/obj';
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
 * obj.flat(myobject) // { 'a.b.c': 100, d: 20 }
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
 * Gets a property `a` from an object `b` and returns a `option<c>`
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * const get = obj.get(`foo`);
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
 * import * as obj from 'tiinvo/obj';
 * 
 * console.log(obj.isobject({})); // true
 * console.log(obj.isobject(null)); // false
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
 * import * as obj from 'tiinvo/obj';
 * import * as str from 'tiinvo/str';
 * import * as num from 'tiinvo/num';
 * import * as bool from 'tiinvo/bool';
 * 
 * const isshape = obj.guardOf({
 *    a: str.guard,
 *    b: num.guard,
 *    c: bool.guard
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
 * Returns object entries
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * const entries = obj.entries({ a: 1, b: 2 });
 * 
 * console.log(entries); // [ ['a', 1], ['b', 2] ]
 * ```
 * @param o 
 * @returns 
 * @since 3.0.0
 */
export const entries = <a>(o: a): entries<a> => Object.entries(o) as entries<a>;
/**
 * Returns true if a is a `object` and has property `k`
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * const hasa = obj.haskey('a');
 * 
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
 * import * as obj from 'tiinvo/obj';
 * import * as num from 'tiinvo/num';
 * 
 * const hasa = obj.haskeyOf('a', num.guard);
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
 * import * as obj from 'tiinvo/obj';
 * 
 * console.log(obj.keys({ a: 1, b: 2 })); // ['a', 'b']
 * console.log(obj.keys({})); // []
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const keys = <a extends { [index: string]: unknown }>(a: a): keys<a> => Object.keys(a) as keys<a>;
/**
 * Omits the keys in `a` that are in `b`
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * const omit = obj.omit(['a', 'b']);
 * 
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
 * import * as obj from 'tiinvo/obj';
 * 
 * const pick = obj.pick(['a', 'b']);
 * 
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
 * Returns an array of values of the enumerable properties of an object
 * 
 * ```typescript
 * import * as obj from 'tiinvo/obj';
 * 
 * console.log(obj.values({ a: 1, b: 2 })); // [1, 2]
 * console.log(obj.values({})); // []
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const values = <a extends Record<string, any>>(a: a): values<a> => Object.values(a) as values<a>;