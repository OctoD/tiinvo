/**
 * Returns an array of key/values of the enumerable properties of an object
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * obj.entries({ foo: 10, bar: 20 }) // [["foo", 10], ["bar", 20]]
 * ```
 * 
 * @param o the object
 * @returns 
 */
export const entries = <T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][] => Object.entries(o);

export type Flatten<T extends object> = object extends T ? object : {
  [K in keyof T]-?: (x: NonNullable<T[K]> extends infer V ? V extends object ?
      V extends readonly any[] ? Pick<T, K> : Flatten<V> extends infer FV ? ({
          [P in keyof FV as `${Extract<K, string | number>}.${Extract<P, string | number>}`]:
          FV[P] }) : never : Pick<T, K> : never
  ) => void } extends Record<keyof T, (y: infer O) => void> ?
  O extends infer _U ? { [K in keyof O]: O[K] } : never : never

/**
 * Returns a flat object of `T`. 
 * Ideal to use it for mongodb queries/inserts.
 * 
 * @since 2.19.0
 * 
 * ```ts
 * import { obj } from 'tiinvo';
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
 * obj.flattern(myobject) // { 'a.b.c': 100, d: 20 }
 * ```
 * 
 * @param obj 
 * @param prefix 
 * @returns 
 */
export const flattern = <T extends object>(obj: T, prefix = ``): Flatten<T> => {
  const flattened = {} as any
  const kl = keys(obj)

  for (let i = 0; i < kl.length; i++) {
    const key = kl[i] as string;
    const prefixed = prefix ? `${prefix}.${key}` : key;
    const value = (obj as any)[key]

    if (typeof value === 'object' && value !== null) {
      Object.assign(flattened, flattern(value, prefixed))
    } else {
      flattened[prefixed] = value
    }
  }

  return flattened
}

/**
 * Returns `true` if the object `T` and object `U` values are the same, `false` otherwise.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * obj.is({ lorem: "ipsum" })({ lorem: "ipsum" }) // true
 * obj.is({ foo: 100 })({ bar: 200 }) // false
 * ```
 * 
 * @param t 
 * @returns 
 */
export const is = <T>(t: T) => <U>(u: U) => Object.is(t, u);

/**
 * Returns a value that indicates whether new properties can be added to an object.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * const test = { foo: 100 }
 * 
 * obj.isExtensible(test) // true
 * 
 * Object.preventExtensions(test);
 * 
 * obj.isExtensible(test) // false
 * ```
 * 
 * @param o 
 * @returns 
 */
export const isExtensible = <T>(o: T): boolean => Object.isExtensible(o);

/**
 * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * const test = { foo: 100 }
 * 
 * obj.isFrozen(test) // false
 * 
 * Object.freeze(test);
 * 
 * obj.isFrozen(test) // true
 * ```
 * 
 * @param o 
 * @returns 
 */
export const isFrozen = <T>(o: T): boolean => Object.isFrozen(o);

/**
 * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * const test = { foo: 100 }
 * 
 * obj.isSealed(test) // false
 * 
 * Object.seal(test);
 * 
 * obj.isSealed(test) // true
 * ```
 * 
 * @param o 
 * @returns 
 */
export const isSealed = <T>(o: T): boolean => Object.isSealed(o);

/**
 * Returns the names of the enumerable string properties and methods of an object.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * obj.keys({ foo: 1, bar: 2, baz: 3 }) // ["foo", "bar", "baz"]
 * ```
 * 
 * @param obj 
 * @returns 
 */
export const keys = <T>(obj: T): Array<keyof T> => Object.keys(obj) as Array<keyof T>;

/**
 * Creates a mapper function for the type T. 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * const test = { foo: 200, bar: 'baz' };
 * 
 * const map = obj.mapkey<typeof test>('foo')
 * 
 * map(test) // 200
 * 
 * ```
 * 
 * @param key 
 * @returns 
 */
export const mapkey = <T>(key: keyof T): (arg: T) => T[typeof key] => (arg: T) => arg[key]

/**
 * Omits from a set of keys `Keys` from an object `o`.
 * @since 2.14.0
 * 
 * @example
 * 
 * ```ts
 * import { omit } from 'tiinvo';
 * 
 * const myobject = { foo: 10, bar: 20, baz: 'qwerty' };
 * omit('foo', 'bar')(myobject) // { baz: 'qwerty' }
 * ```
 * 
 * @param omitkeys 
 * @returns 
 */
export const omit = <Keys extends string>(...omitkeys: Keys[]) => <T extends Record<Keys, any>>(o: T): Omit<T, Keys> => {
  const omitted = {} as Exclude<T, Keys>;
  const ownedkeys = keys(o);

  for (let index = 0; index < ownedkeys.length; index++) {
    const key = ownedkeys[index];

    if (!omitkeys.includes(key as Keys)) {
      (omitted as any)[key] = o[key];
    }
  }

  return omitted;
}

/**
 * Given a set of properties `T` whose keys are in the object `U`, returns a new object with all picked properties
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * const test = { foo: 100, bar: 200, baz: 300 };
 * obj.pick(`foo`, `baz`)(test) // { foo: 100, baz: 300 }
 * ```
 * 
 * @param keys 
 * @returns 
 */
export const pick = <T extends string>(...keys: T[]): (<U extends Record<T, any>>(o: U) => Pick<U, T>) => o => keys.reduce(
  (obj, key) => ({ ...obj, [key]: o[key] }),
  {} as Pick<any, T>
);

/**
 * Returns an array of values of the enumerable properties of an object
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { obj } from 'tiinvo';
 * 
 * obj.values({ foo: 1, bar: 2, baz: 3 }) // [1, 2, 3]
 * ```
 * 
 * @param obj 
 * @returns 
 */
export const values = <T>(obj: { [s: string]: T }): T[] => Object.values(obj);
