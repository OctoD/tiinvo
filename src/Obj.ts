import type * as Functors from './Functors.js';
import type * as Fn from './Fn.js';
import type * as Option from './Option.js';

/**
 * A type alias for object
 * 
 * @since 4.0.0
 */
export type T = object;

/**
 * Represents the entries of an object `O` as an array of key/value pair tuples
 * 
 * @template O the object
 * @since 4.0.0
 */
export type Entries<O> = {
  [k in keyof O]: [k, O[k]];
}[keyof O][];

/**
 * Represents the resulting type from a struct of guards
 * 
 * @template S the guard represented as a struct (or shape)
 * @since 4.0.0
 */
export type GuardsFromStruct<S> = {
  [key in keyof S]: S[key] extends Option.T<infer A> ? Functors.Guardable<Option.T<A>> | GuardsFromStruct<S[key]> : Functors.Guardable<S[key]> | GuardsFromStruct<S[key]>;
};

/**
 * Extracts keys `K[]` from object `O`
 * 
 * @template O the object
 * @since 4.0.0
 */
export type KeysOf<O extends object> = (keyof O)[];

/**
 * Extracts values `A[]` from object `O`
 * 
 * @template O the object
 * @since 4.0.0
 */
export type ValuesOf<O extends object> = (O[keyof O])[];

//#region guards

/**
 * Returns true if `x` is of type `object` and not null
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.guard({});    // true
 * Obj.guard(null);  // false
 * ```
 * 
 * @param x the object
 * @returns
 *  - true if x is object and not null
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard: Functors.Guardable<T> = (x): x is T => typeof (x) === 'object' && !!x;

/**
 * Returns a guard which checks if a value `v` implements a shape `s`
 * 
 * @example
 * ```ts
 * import { Obj, Str, Num, Bool } from 'tiinvo';
 * 
 * const isABC = Obj.guardOf({
 *    a: Str.guard,
 *    b: Num.guard,
 *    c: Bool.guard
 * });
 * 
 * isABC({ a: `foo`, b: 1, c: true });  // true
 * isABC({ a: `foo`, b: false, c: 1 }); // false
 * 
 * // you can also set recursive shapes, or directly more comples ones
 * 
 * const isUser = Obj.guardOf({
 *    name: Str.guard,
 *    surname: Str.guard,
 *    age: Num.guard,
 *    billing: {
 *      address: Str.guard,
 *      city: Str.guard,
 *    }
 * })
 * 
 * isUser(10)   // false
 * isUser({})   // false
 * isUser({
 *    name: 'john',
 *    surname: 'doe',
 *    age: 44,
 * })   // false
 * isUser({
 *    name: 'john',
 *    surname: 'doe',
 *    age: 44,
 *    billing: {
 * 
 *    }
 * })   // false
 * isUser({
 *    name: 'john',
 *    surname: 'doe',
 *    age: 44,
 *    billing: {
 *      address: '',
 *    }
 * })   // false
 * isUser({
 *    name: 'john',
 *    surname: 'doe',
 *    age: 44,
 *    billing: {
 *      address: 'some address',
 *      city: 'some city',
 *    }
 * })   // true
 * ```
 * 
 * @template A the guard structure
 * @param s the struct which represents the guarded type
 * @returns the `Guardable<A>` if s is an `object`, otherwise it throws a `TypeError` 
 * @group Guardables
 * @since 4.0.0
 */
export const guardOf = <A extends any>(s: GuardsFromStruct<A>) => {
  if (!guard(s)) {
    throw new TypeError("Invalid Struct guard, expected an object (GuardsFromStruct<a>), got " + typeof s);
  }

  return (v: unknown): v is A => {
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
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.hasKey('a', {});        // false
 * Obj.hasKey('a', { a: 1 });  // true
 * 
 * const hasa = Obj.hasKey('a');
 * hasa({});        // false
 * hasa({ a: 1 });  // true
 * ```
 * 
 * @template K the key type
 * @param k the key
 * @returns 
 *  - true if `o` is an `object` and has a key `K`
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function hasKey<K extends string>(k: K, o: unknown): o is Record<K, unknown>
/**
 * Returns a guard which checks if a is a `object` and has property `k`
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * const hasa = Obj.hasKey('a');
 * 
 * hasa({});        // false
 * hasa({ a: 1 });  // true
 * ```
 * 
 * @template K the key type
 * @param k the key
 * @returns the unary function which checks if `o` is an `object` and has the key `K`
 * @group Guardables
 * @since 4.0.0
 */
export function hasKey<K extends string>(k: K): (o: unknown) => o is Record<K, unknown>
export function hasKey<K extends string>(k: K, o?: unknown): any
{
  if (arguments.length === 2) {
    return guard(o) && o.hasOwnProperty(k);
  }

  return (b: unknown): b is Record<K, unknown> => guard(b) && b.hasOwnProperty(k)
};

/**
 * Returns true if `o` is an `object` and has property `K` of type `A`
 * 
 * @example
 * 
 * ```ts
 * import { Obj, Num } from 'tiinvo';
 * 
 * Obj.hasKeyOf('a', Num.guard, {})            // false
 * Obj.hasKeyOf('a', Num.guard, { a: 1 })      // true
 * Obj.hasKeyOf('a', Num.guard, { a: `nope` }) // false
 * ```
 * 
 * @template A the value type 
 * @template K the key type
 * @param k the key
 * @param g the guard to check if `o[K]` is of it's type
 * @param o the value to check
 * @returns 
 *  - `true` if `o` is an `object`, has a key `K` and `o[K]` is of type `A`
 *  - `false` otherwise
 * @group Guardables
 * @since 4.0.0
 */
export function hasKeyOf<A, K extends string>(k: K, g: Functors.Guardable<A>, o: unknown): o is Record<K, A>;
/**
 * Returns a guard which checks if `o` is an `object` and has property `K` of type `A`
 * 
 * @example
 * 
 * ```ts
 * import { Obj, Num } from 'tiinvo';
 * 
 * const hasa = Obj.hasKeyOf('a', Num.guard);
 * 
 * hasa({})            // false
 * hasa({ a: 1 })      // true
 * hasa({ a: `nope` }) // false
 * ```
 * 
 * @template A the value type 
 * @template K the key type
 * @param k the key
 * @param g the guard to check if `o[K]` is of it's type
 * @returns 
 * @group Guardables
 * @since 4.0.0
 */
export function hasKeyOf<A, K extends string>(k: K, g: Functors.Guardable<A>): (o: unknown) => o is Record<K, A>;
export function hasKeyOf<A, K extends string>(k: K | Functors.Guardable<A>, g?: any, o?: any): any {
  const og = (k: K, g: Functors.Guardable<A>, o: unknown): o is Record<K, A> =>
    guard(o) && o.hasOwnProperty(k) && g((o as any)[k]);

  if (!!k && !!g && !!o) {
    return og(k as K, g, o);
  }

  return (o: unknown) => og(k as any, g, o);
}

//#endregion

//#region native methods

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a new object. 
 * 
 * **important**: This will not mutate any object, it will always return a new one instead.
 * 
 * @example
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
 * @group Natives
 * @since 4.0.0
 */
export const assign: typeof Object.assign = (x: any, ... b: any[]) => Object.assign({}, x, ... b);

/**
 * Returns an array of key/values of the enumerable properties of an object `o`
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.entries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
 * ```
 * 
 * @template O the object's type
 * @param o the object
 * @returns the entries
 * @group Natives
 * @since 4.0.0
 */
export const entries = Object.entries as <O extends object>(o: O) => Entries<O>;

/**
 * Prevents the modification of existing property attributes and values, 
 * and prevents the addition of new properties.
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
 * @group Natives
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
 * @param entries the entries
 * @returns
 * @group Natives
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
 * @returns 
 * @group Natives
 * @since 4.0.0
 */
export const get = <a extends string>(a: a) => <b>(b: b): Option.T<b extends Record<a, infer u> ? u : null> => hasKey(a)(b) ? b[a] : null as Option.T<any>;

/**
 * Omits the keys in `A` that are in `O`
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.omit(['a', 'b'], { a: 10, b: 20, c: 30 }) // { c: 30 }
 * ```
 * 
 * @template K the keys
 * @template O the object
 * @param k the list of properties to omit 
 * @param o the object
 * @returns 
 * @group Natives
 * @since 4.0.0
 */
export function omit<K extends string, O extends Record<string, any>>(k: K[], o: O): Exclude<O, K>;
/**
 * Returns a unary `Unary<O, Exclude<A, O>>` function which omits the keys in `A` that are in `O`
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * const omit = Obj.omit(['a', 'b'])
 * omit({ a: 1, b: 2, c: 3 })           // { c: 3 }
 * omit({ a: 1, b: 2 })                 // {}
 * ```
 * 
 * @template K the keys
 * @template O the object
 * @param k the list of properties to omit 
 * @returns 
 * @group Natives
 * @since 4.0.0
 */
export function omit<K extends string, O extends Record<string, any>>(k: K[]): Fn.Unary<O, Exclude<O, K>>;
export function omit<K extends string, O extends Record<string, any>>(k: any, o?: any): any {
  const fn = (x: K[], y: O) => {
    const omitted = {} as Exclude<O, K>;
    const ownedkeys = keys(y);

    for (let index = 0; index < ownedkeys.length; index++) {
      const key = ownedkeys[index];

      if (!x.includes(key as K)) {
        (omitted as any)[key] = y[key];
      }
    }

    return omitted;
  };

  if (Array.isArray(k) && !!o) {
    return fn(k, o);
  }

  return (b: O) => fn(k, b);
};

/**
 * Returns a new object with the keys of `a` that are in `b`
 * 
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.pick(['a', 'b'], { a: 1, b: 2, c: 3 }) // { a: 1, b: 2 }
 * 
 * const pick = Obj.pick(['a', 'b']);
 * pick({ a: 1, b: 2, c: 3 });      // { a: 1, b: 2 }
 * pick({ a: 1, b: 2 });            // { a: 1, b: 2 }
 * ```
 * 
 * @template K the keys
 * @template O the object
 * @param keys the keys
 * @param o the object
 * @returns 
 * @group Natives
 * @since 4.0.0
 */
export function pick<K extends string, O extends Record<string, any>>(keys: K[], o: O): Pick<O, K>;
export function pick<K extends string, O extends Record<string, any>>(keys: K[]): Fn.Unary<O, Pick<O, K>>;
export function pick<K extends string, O extends Record<string, any>>(keys: any, o?: any): any {
  const fn = (x: K[], y: O): Pick<O, K> => {
    const o = {} as Pick<O, K>;

    for (let i = 0; i < x.length; i++) {
      const key = x[i];

      if (hasKey(key)(y)) {
        o[key] = y[key];
      }
    }

    return o;
  };

  if (Array.isArray(keys) && !!o) {
    return fn(keys, o);
  }

  return (b: O) => fn(keys, b);
}

//#endregion

//#region mappables

/**
 * Maps an object `a` to a value `b`
 * 
 * @example
 * 
 * ```ts
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
 * @example
 * 
 * ```ts
 * import { Obj } from 'tiinvo';
 * 
 * Obj.size({ a: 1, b: 2 })       // 2
 * Obj.size({})                   // 0
 * ```
 * 
 * @param x the object
 * @returns the size (count of keys) of the object
 * @since 4.0.0
 **/
export const size = (x: object) => keys(x).length;

/**
 * Returns an array of values of the enumerable properties of an object
 * 
 * @example
 * 
 * ```ts
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
