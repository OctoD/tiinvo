import { FnBase } from "./applicative";
import * as predicate from "./predicate";

//#region types

/**
 * A typeguard
 */
export type Typeguard<IsOutput> = (arg: unknown) => arg is IsOutput;

/**
 * Represents a plain object
 */
export type IndexableObject<T = unknown> = { [index: string]: T };

/**
 * Represents an object with the `length` property
 */
export type WithLength = { length: number };

export type TypeguardsStruct<T> = {
  [key in keyof T]: T[key] extends Typeguard<infer U>
    ? U
    : T[key] extends IndexableObject<any>
    ? TypeguardsStruct<T[key]>
    : never;
};

export type TypegardsTuple<T extends Typeguard<any>[]> = {
  [key in keyof T]: T[key] extends Typeguard<infer U> ? U : never;
};

//#endregion

//#region primitives

/**
 * Checks if a value is an array
 *
 * @example
 * isarray(10)  // false
 * isarray('a') // false
 * isarray(!0)  // false
 * isarray([])  // true
 */
export const isarray = ((arg) => Array.isArray(arg)) as Typeguard<unknown[]>;

/**
 * Checks if a value is a bigint
 *
 * @example
 * isbigint(10)  // false
 * isbigint('a') // false
 * isbigint(!0)  // false
 * isbigint(10n) // true
 */
export const isbigint = ((arg) => typeof arg === "bigint") as Typeguard<bigint>;

/**
 * Checks if a value is a boolean
 *
 * @example
 * isboolean(10)  // false
 * isboolean('a') // false
 * isboolean(!0)  // true
 * isboolean(10n) // false
 */
export const isboolean = ((arg) => typeof arg === "boolean") as Typeguard<
  boolean
>;

/**
 * Checks if a value is not undefined
 *
 * @example
 * isdefined(undefined)   // false
 * isdefined(10)          // true
 * isdefined('a')         // true
 * isdefined(!0)          // true
 * isdefined(10n)         // true
 */
export const isdefined = ((arg) => typeof arg !== "undefined") as Typeguard<
  object
>;

/**
 * Checks if a value is a function
 *
 * @example
 * isfunction(undefined)   // false
 * isfunction(10)          // false
 * isfunction('a')         // false
 * isfunction(!0)          // false
 * isfunction(() => void 0)// true
 */
export const isfunction = ((arg) => typeof arg === "function") as Typeguard<
  FnBase
>;

/**
 * Checks if a value is a number
 *
 * @example
 * isnumber(10)  // true
 * isnumber('a') // false
 * isnumber(!0)  // false
 * isnumber(10n) // false
 */
export const isnumber = ((arg) => typeof arg === "number") as Typeguard<number>;

/**
 * Checks if a value is an object
 *
 * @example
 * isobject(10)   // false
 * isobject('a')  // false
 * isobject({})   // true
 * isobject(null) // true
 * isobject([])   // true
 */
export const isobject = ((arg) => typeof arg === "object") as Typeguard<object>;

/**
 * Checks if a value is a string
 *
 * @example
 * isstring(10)   // false
 * isstring('a')  // true
 * isstring({})   // false
 * isstring(null) // false
 * isstring([])   // false
 */
export const isstring = ((arg) => typeof arg === "string") as Typeguard<string>;

/**
 * Checks if a value is undefined
 *
 * @example
 * isundefined(10)          // false
 * isundefined('a')         // false
 * isundefined({})          // false
 * isundefined(null)        // false
 * isundefined(undefined)   // true
 */
export const isundefined = ((arg) => typeof arg === "undefined") as Typeguard<
  undefined
>;

/**
 * Checks if a value is null
 *
 * @example
 * isnull(10)          // false
 * isnull('a')         // false
 * isnull({})          // false
 * isnull(null)        // true
 * isnull(undefined)   // false
 */
export const isnull = ((arg) => arg === null) as Typeguard<null>;

/**
 * Checks if a value is not null
 *
 * @example
 * isnotnull(10)          // true
 * isnotnull('a')         // true
 * isnotnull({})          // true
 * isnotnull(null)        // false
 * isnotnull(undefined)   // true
 */
export const isnotnull = ((arg) => arg !== null) as Typeguard<object>;

//#endregion

//#region derived from isobject

/**
 * Checks if a value is an object (so that the `key` in can be used)
 *
 * @example
 * isindexable(10)          // false
 * isindexable('a')         // false
 * isindexable({})          // true
 * isindexable(null)        // false
 * isindexable(undefined)   // false
 */
export const isindexable = ((arg) =>
  isobject(arg) && arg !== null) as Typeguard<{ [index: string]: unknown }>;

/**
 * Checks if a value is an Error
 *
 * @param {unknown} arg
 * @returns {arg is Error}
 */
export const iserror = (arg: unknown): arg is Error => arg instanceof Error;

//#endregion

//#region indexables

/**
 * Checks if a value is indexable and has a key
 *
 * @template Key
 * @param {Key} key
 */
export const haskey = <Key extends string | number>(key: Key) => (
  arg: unknown
): arg is Record<Key, unknown> => isindexable(arg) && key in arg;

/**
 * Checks if a value is indexable, has a key and that key has a given type
 *
 * @example
 * haskeyoftype('foo', isstring)({ foo: 100 }) // false
 * haskeyoftype('foo', isstring)({ foo: '1' }) // true
 *
 * @template Key
 * @template T
 * @param {Key} key
 * @param {Typeguard<T>} typeguard
 */
export const haskeyoftype = <Key extends string | number, T>(
  key: Key,
  typeguard: Typeguard<T>
) => (arg: unknown): arg is Record<Key, T> =>
  isindexable(arg) && key in arg && typeguard(arg[key]);

/**
 * Checks if a value is indexable, has a key and that key has a precise value
 *
 * @example
 * haskeyWithValue('foo', 100)({ foo: 100 }) // true
 * haskeyWithValue('foo', 100)({ foo: '1' }) // false
 *
 * @template Key
 * @template Value
 * @param {Key} key
 * @param {Value} value
 */
export const haskeyWithValue = <Key extends string | number, Value>(
  key: Key,
  value: Value
) => (arg: unknown): arg is Record<Key, Value> =>
  isindexable(arg) && key in arg && arg[key] === value;

/**
 * Checks if a value is indexable and has the 'length' key
 *
 * @example
 * haslength([])              // true
 * haslength({})              // false
 * haslength({ length: 10 })  // true
 *
 * @param {unknown} arg
 * @returns {arg is WithLength}
 */
export const haslength = haskey("length") as Typeguard<WithLength>;

/**
 * Checks if a value is indexable, has the 'length' key and that the length is equal to a given one
 *
 * @example
 * const test = haslengthof(5)
 *
 * test([1, 2, 3])       // false
 * test({})              // false
 * test({ length: 10 })  // true
 *
 * @param {unknown} arg
 * @returns {arg is WithLength}
 */
export const haslengthof = (length: number) => (
  arg: unknown
): arg is WithLength => haslength(arg) && arg.length === length;

//#endregion

//#region typeguards factories

export type TypeguardsFromStruct<T> = {
  [key in keyof T]: Typeguard<T[key]> | TypeguardsFromStruct<T[key]>;
};

/**
cle * Creates a typeguard representing a complex data structure. It is useful
 * for object validation.
 * 
 * @example
 * 
 * interface User {
 *    name: string;
 *    mail: string;
 *    age: number;
 *    status?: string;
 * }
 * 
 * const isUser = createStructOf<User>({
 *    name: isstring,
 *    mail: isstring,
 *    age: isnumber,
 *    status: optional(isstring),
 * });
 * 
 * isUser({}) // false
 * isUser({ age: 100 }) // false
 * isUser({ age: 100, name: 'foo' }) // false
 * isUser({ age: 100, name: 'foo', mail: 'hello_at_world.com' }) // true
 * isUser({ age: '100', name: 'foo', mail: 'hello_at_world.com' }) // false
 *
 * @template TG
 * @param {TG} typeguard
 */
export const createStructOf = <TG extends any>(
  typeguard: TypeguardsFromStruct<TG>
) => (value: unknown): value is TypeguardsStruct<TG> => {
  if (!isindexable(typeguard) || !isindexable(value)) {
    return false;
  }

  const keys = Object.keys(typeguard);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const currentvalue = value[key];
    const currenttg = typeguard[key as keyof typeof typeguard];
    const case1 =
      isindexable(currenttg) && createStructOf(currenttg as any)(currentvalue);
    const case2 = isfunction(currenttg) && currenttg(currentvalue);

    if (case1 || case2) {
      continue;
    }

    return false;
  }

  return true;
};

/**
 *
 *
 * @template TG
 * @param {...TG} typeguards
 */
export const createTupleOf = <TG extends Typeguard<any>[]>(
  ...typeguards: TG
) => {
  const tlength = haslengthof(typeguards.length);

  return (value: unknown): value is TypegardsTuple<TG> =>
    isarray(value) &&
    tlength(value) &&
    value.every((arg, index) => typeguards[index] && typeguards[index](arg));
};

//#endregion

/**
 *
 *
 * @template T
 * @param {...Typeguard<T>[]} args
 * @returns {Typeguard<T>}
 */
export const combine = <T>(...args: Typeguard<any>[]): Typeguard<T> =>
  predicate.and.apply(null, args) as Typeguard<T>;

/**
 *
 *
 * @template T
 * @param {...Typeguard<unknown>[]} predicates
 * @returns {Typeguard<T>}
 */
export const anyof = <T>(...predicates: Typeguard<unknown>[]): Typeguard<T> =>
  predicate.or(...predicates) as Typeguard<T>;

/**
 * Checks if a variable is null or undefined
 *
 * @example
 * isnullOrUndefined(null)      // true
 * isnullOrUndefined(undefined) // true
 * isnullOrUndefined('foo')     // false
 * isnullOrUndefined([])        // false
 */
export const isnullOrUndefined = anyof<null | undefined>(isnull, isundefined);

/**
 * Checks if a variable is not null or undefined
 *
 * @example
 * isnotNullOrUndefined(null)      // false
 * isnotNullOrUndefined(undefined) // false
 * isnotNullOrUndefined('foo')     // true
 * isnotNullOrUndefined([])        // true
 */
export const isnotNullOrUndefined = combine<object>(isnotnull, isdefined);

/**
 * Checks if a variable is an array of a given type.
 *
 * @example
 * const isarrayofStrings = isarrayof(isstring);
 *
 * isarrayofStrings([10, 20, 'hello', 'world']) // false
 * isarrayofStrings([10, 20])                   // false
 * isarrayofStrings(['hello', 'world'])         // true
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const isarrayof = <T>(typeguard: Typeguard<T>) => (
  arg: unknown
): arg is T[] => isarray(arg) && arg.every(typeguard);

/**
 * Makes a Typeguard<T> nullable
 *
 * @example
 * const isnullablenumber = nullable(isnumber);
 *
 * isnullablenumber(null) // true
 * isnullablenumber(1000) // true
 * isnullablenumber('10') // false
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const nullable = <T>(typeguard: Typeguard<T>) =>
  anyof<T | null>(isnull, typeguard);

/**
 * Makes a Typeguard<T> optional
 *
 * @example
 * const isoptionalnumber = optional(isnumber);
 *
 * isoptionalnumber(undefined)  // true
 * isoptionalnumber(1000)       // true
 * isoptionalnumber('10')       // false
 * isoptionalnumber(null)       // false
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const optional = <T>(typeguard: Typeguard<T>) =>
  anyof<T | undefined>(isundefined, typeguard);
