import type * as Functors from './Functors.js';
import { Fn } from './index.js';
import type * as Option from './Option.js';

export type t = object;

/**
 * Represents the entries of an object `a` as an array of key/value pair tuples
 */
export type Entries<a> = {
  [k in keyof a]: [k, a[k]];
}[keyof a][];

export type GuardsFromStruct<a> = {
  [key in keyof a]: a[key] extends Option.T<infer b> ? Functors.Guardable<Option.T<b>> | GuardsFromStruct<a[key]> : Functors.Guardable<a[key]> | GuardsFromStruct<a[key]>;
};

/**
 * Extracts keys `k` from object `a`
 */
export type KeysOf<a extends object> = (keyof a)[];

/**
 * Extracts values `x` from object `a`
 */
export type ValuesOf<a extends object> = (a[keyof a])[];

//#region guards

/**
 * Returns true if a is a `object` and not null
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * Obj.guard({});    // true
 * Obj.guard(null);  // false
 * ```
 * 
 * @param a
 * @returns
 * @since 4.0.0
 */
export const guard: Functors.Guardable<object> = (x): x is object => typeof (x) === 'object' && !!x;

/**
 * Returns `true` if a value `v` implements a shape `s`
 * 
 * ```typescript
 * import { Obj, Str, Num, Bool } from 'tiinvo';
 * 
 * const guardStruct = Obj.guardOf({
 *    a: Str.guard,
 *    b: Num.guard,
 *    c: Bool.guard
 * });
 * 
 * guardStruct({ a: `foo`, b: 1, c: true });  // true
 * guardStruct({ a: `foo`, b: false, c: 1 }); // false
 * ```
 * 
 * @param s 
 * @returns 
 * @since 4.0.0
 */
export const guardOf = <a extends any>(s: GuardsFromStruct<a>) => {
  if (!guard(s)) {
    throw new TypeError("Invalid Struct guard, expected an object (GuardsFromStruct<a>), got " + typeof s);
  }

  return (v: unknown): v is a => {

    if (!guard(v)) {
      return false;
    }

    const keys = Object.keys(s);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const currentvalue = v[key as keyof typeof v];
      const currentguard = s[key as keyof typeof s];
      const case1 = guard(currentguard) && guardOf(currentguard as any)(currentvalue);
      const case2 = typeof currentguard === 'function' && currentguard(currentvalue);

      if (!case1 && !case2) {
        return false;
      }
    }

    return true;
  };
};

/**
 * Returns true if a is a `object` and has property `k`
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * const hasa = Obj.hasKey('a');
 * hasa({});        // false
 * hasa({ a: 1 });  // true
 * ```
 * 
 * @param k 
 * @returns 
 * @since 4.0.0
 */
export const hasKey = <k extends string>(k: k) => (o: unknown): o is Record<k, unknown> => guard(o) && o.hasOwnProperty(k);

/**
 * Returns true if a is a `object` and has property `k` of type `g`
 * 
 * ```typescript
 * import { Obj, Num } from 'tiinvo';
 * 
 * const hasa = Obj.hasKeyOf('a', Num.guard);
 * 
 * hasa({})            // false
 * hasa({ a: 1 })      // true
 * hasa({ a: `nope` }) // false
 * ```
 * 
 * @param k 
 * @param g 
 * @returns 
 * @since 4.0.0
 */
export function hasKeyOf<a, k extends string>(k: k, g: Functors.Guardable<a>, o: unknown): o is Record<k, a>;
export function hasKeyOf<a, k extends string>(k: k, g: Functors.Guardable<a>): (o: unknown) => o is Record<k, a>;
export function hasKeyOf<a, k extends string>(k: k | Functors.Guardable<a>, g?: any, o?: any): any {
  const og = (k: k, g: Functors.Guardable<a>, o: unknown): o is Record<k, a> =>
    guard(o) && o.hasOwnProperty(k) && g((o as any)[k]);

  if (!!k && !!g && !!o) {
    return og(k as k, g, o);
  }

  return (o: unknown) => og(k as any, g, o);
}

//#endregion

//#region native methods

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
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
 * @since 4.0.0
 */
export const assign = Object.assign;

/**
 * Returns object entries
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.entries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
 * ```
 * 
 * @returns 
 * @since 4.0.0
 */
export const entries = Object.entries as <a extends object>(a: a) => Entries<a>;

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * const a = { a: 1, b: 2 };
 * Obj.freeze(a);
 * a.a = 100; // throws
 * ```
 * 
 * @since 4.0.0
 */
export const freeze = Object.freeze;

/**
 * Returns an object created by key-value entries for properties and methods
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.fromEntries([ ['a', 1], ['b', 2] ]) // { a: 1, b: 2 }
 * ```
 * 
 * @param entries
 * @returns
 * @since 4.0.0
 */
export const fromEntries = Object.fromEntries;

/**
 * Gets a property `a` from an object `b` and returns a `Option.t<c>`
 *
 * @example
 *  
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * const get = Obj.get(`foo`);
 * 
 * get({ foo: `bar` }); // some<`bar`>
 * get({});             // none
 * ```
 * 
 * @param a the property to get
 * @param b the object to get the property from
 * @returns 
 * @since 4.0.0
 */
export const get = <a extends string>(a: a) => <b>(b: b): Option.T<b extends Record<a, infer u> ? u : null> => hasKey(a)(b) ? b[a] : null as Option.T<any>;

/**
 * Omits the keys in `a` that are in `b`
 * 
 * @example
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * const omit = Obj.omit(['a', 'b'])
 * omit({ a: 1, b: 2, c: 3 })           // { c: 3 }
 * omit({ a: 1, b: 2 })                 // {}
 * ```
 * 
 * @param k 
 * @returns 
 * @since 4.0.0
 */
export function omit<a extends string, b extends Record<string, any>>(k: a[], b: b): Exclude<b, a>;
export function omit<a extends string, b extends Record<string, any>>(k: a[]): Fn.Unary<b, Exclude<b, a>>;
export function omit<a extends string, b extends Record<string, any>>(k: any, b?: any): any {
  const fn = (k: a[], b: b) => {
    const omitted = {} as Exclude<b, a>;
    const ownedkeys = keys(b);

    for (let index = 0; index < ownedkeys.length; index++) {
      const key = ownedkeys[index];

      if (!k.includes(key as a)) {
        (omitted as any)[key] = b[key];
      }
    }

    return omitted;
  };

  if (Array.isArray(k) && !!b) {
    return fn(k, b);
  }

  return (b: b) => fn(k, b);
};

/**
 * Returns a new object with the keys of `a` that are in `b`
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * const pick = Obj.pick(['a', 'b']);
 * pick({ a: 1, b: 2, c: 3 });      // { a: 1, b: 2 }
 * pick({ a: 1, b: 2 });            // { a: 1, b: 2 }
 * ```
 * 
 * @param keys 
 * @returns 
 * @since 4.0.0
 */
export function pick<a extends string, b extends Record<string, any>>(keys: a[], b: b): Pick<b, a>;
export function pick<a extends string, b extends Record<string, any>>(keys: a[]): Fn.Unary<b, Pick<b, a>>;
export function pick<a extends string, b extends Record<string, any>>(keys: any, b?: any): any {
  const fn = (keys: a[], b: b): Pick<b, a> => {
    const o = {} as Pick<b, a>;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (hasKey(key)(b)) {
        o[key] = b[key];
      }
    }

    return o;
  };

  if (Array.isArray(keys) && !!b) {
    return fn(keys, b);
  }

  return (b: b) => fn(keys, b);
}

//#endregion

//#region mappables

/**
 * Maps an object `a` to a value `b`
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * Obj.map(Object.keys)({ a: 10, b: 20 }); // ['a', 'b']
 * Obj.map((x: Record<string, number>) => x.a ?? 0)({ a: 10 });      // 10
 * Obj.map((x: Record<string, number>) => x.a ?? 0)({ b: 10 });      // 0
 * ```
 * 
 * @param a
 * @returns
 * @since 4.0.0
 **/
export const map = <a extends object, b>(m: Functors.Mappable<a, b>) => (a: a): Option.T<b> => guard(a) ? m(a) as Option.T<b> : null;

/**
 * Returns the names of the enumerable string properties and methods of an object.
 * 
 * @example
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.keys({ a: 10, b: 20 })       // ['a', 'b']
 * ```
 * 
 * @since 4.0.0
 */
export const keys = Object.keys as <x extends object>(x: x) => KeysOf<x>;

/**
 * Returns an object size
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * Obj.size({ a: 1, b: 2 })       // 2
 * Obj.size({})                   // 0
 * ```
 * 
 * @param a
 * @returns
 * @since 4.0.0
 **/
export const size = (x: object) => keys(x).length;

/**
 * Returns an array of values of the enumerable properties of an object
 * 
 * ```typescript
 * import { Obj } from 'tiinvo';
 * 
 * Obj.values({ a: 1, b: 2 }) // [1, 2]
 * Obj.values({})             // []
 * ```
 * 
 * @param a
 * @returns
 * @since 4.0.0
 **/
export const values = Object.values as <a extends object>(o: a) => ValuesOf<a>;;

//#endregion
