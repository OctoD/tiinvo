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
 * ```ts
 * import { isarray } from 'tiinvo';
 * 
 * isarray(10)  // false
 * isarray('a') // false
 * isarray(!0)  // false
 * isarray([])  // true
 * ```
 */
export const isarray = ((arg) => Array.isArray(arg)) as Typeguard<unknown[]>;

/**
 * Checks if a value is a bigint
 *
 * @example
 * ```ts
 * import { isbigint } from 'tiinvo';
 * 
 * isbigint(10)  // false
 * isbigint('a') // false
 * isbigint(!0)  // false
 * isbigint(10n) // true
 * ```
 */
export const isbigint = ((arg) => typeof arg === "bigint") as Typeguard<bigint>;

/**
 * Checks if a value is a boolean
 *
 * @example
 * ```ts
 * isboolean(10)  // false
 * isboolean('a') // false
 * isboolean(!0)  // true
 * isboolean(10n) // false
 * ```
 */
export const isboolean = ((arg) =>
  typeof arg === "boolean") as Typeguard<boolean>;

/**
 * Checks if a value is not undefined
 *
 * @example
 * ```ts
 * import { isdefined } from 'tiinvo';
 * 
 * isdefined(undefined)   // false
 * isdefined(10)          // true
 * isdefined('a')         // true
 * isdefined(!0)          // true
 * isdefined(10n)         // true
 * ```
 */
export const isdefined = ((arg) =>
  typeof arg !== "undefined") as Typeguard<object>;

/**
 * Checks if a value is a function
 *
 * @example
 * ```ts
 * import { isfunction } from 'tiinvo';
 * 
 * isfunction(undefined)   // false
 * isfunction(10)          // false
 * isfunction('a')         // false
 * isfunction(!0)          // false
 * isfunction(() => void 0)// true
 * ```
 */
export const isfunction = ((arg) =>
  typeof arg === "function") as Typeguard<FnBase>;

/**
 * Checks if a value is a number
 *
 * @example
 * ```ts
 * import { isnumber } from 'tiinvo';
 * 
 * isnumber(10)  // true
 * isnumber('a') // false
 * isnumber(!0)  // false
 * isnumber(10n) // false
 * ```
 */
export const isnumber = ((arg) => typeof arg === "number") as Typeguard<number>;

/**
 * Checks if a value is an object
 *
 * @example
 * ```ts
 * isobject(10)   // false
 * isobject('a')  // false
 * isobject({})   // true
 * isobject(null) // true
 * isobject([])   // true
 * ```
 */
export const isobject = ((arg) => typeof arg === "object") as Typeguard<object>;

/**
 * Checks if a value is a string
 *
 * @example
 * ```ts
 * isstring(10)   // false
 * isstring('a')  // true
 * isstring({})   // false
 * isstring(null) // false
 * isstring([])   // false
 * ```
 */
export const isstring = ((arg) => typeof arg === "string") as Typeguard<string>;

/**
 * Checks if a value is undefined
 *
 * @example
 * ```ts
 * isundefined(10)          // false
 * isundefined('a')         // false
 * isundefined({})          // false
 * isundefined(null)        // false
 * isundefined(undefined)   // true
 * ```
 */
export const isundefined = ((arg) =>
  typeof arg === "undefined") as Typeguard<undefined>;

/**
 * Checks if a value is null
 *
 * @example
 * ```ts
 * isnull(10)          // false
 * isnull('a')         // false
 * isnull({})          // false
 * isnull(null)        // true
 * isnull(undefined)   // false
 * ```
 */
export const isnull = ((arg) => arg === null) as Typeguard<null>;

/**
 * Checks if a value is not null
 *
 * @example
 * ```ts
 * isnotnull(10)          // true
 * isnotnull('a')         // true
 * isnotnull({})          // true
 * isnotnull(null)        // false
 * isnotnull(undefined)   // true
 * ```
 */
export const isnotnull = ((arg) => arg !== null) as Typeguard<object>;

//#endregion

//#region derived from isobject

/**
 * Checks if a value is an object (so that the `key` in can be used)
 *
 * @example
 * ```ts
 * isindexable(10)          // false
 * isindexable('a')         // false
 * isindexable({})          // true
 * isindexable(null)        // false
 * isindexable(undefined)   // false
 * ```
 */
export const isindexable = ((arg) =>
  isobject(arg) && arg !== null) as Typeguard<{ [index: string]: unknown }>;

/**
 * Checks if a value is an Error
 * 
 * ```ts
 * import { iserror } from 'tiinvo';
 * 
 * iserror(10)          // false
 * iserror('a')         // false
 * iserror(new Error()) // true
 * iserror(null)        // false
 * iserror(undefined)   // false
 * ```
 * @param {unknown} arg
 * @returns {arg is Error}
 */
export const iserror = (arg: unknown): arg is Error => arg instanceof Error;

//#endregion

//#region indexables

/**
 * Checks if a value is indexable and has a key
 *
 * @example
 * 
 * ```ts
 * import { haskey } from 'tiinvo';
 * 
 * const hasfoo = haskey('foo');
 * 
 * hasfoo(10)             // false
 * hasfoo('hello')        // false
 * hasfoo({bar: 100})     // false
 * hasfoo({foo: `baz`})   // false
 * ```
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
 * ```ts
 * import { haskeyoftype, isstring } from 'tiinvo';
 * 
 * const hasfoo = haskeyoftype('foo', isstring);
 *  
 * hasfoo(10)             // false
 * hasfoo('hello')        // false
 * hasfoo({bar: 100})     // false
 * hasfoo({foo: true})    // false
 * hasfoo({foo: `baz`})   // true
 * ```
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
 * ```ts
 * import { haskeyWithValue } from 'tiinvo';
 * 
 * const hasfoo = haskeyWithValue('foo', `baz`);
 *  
 * hasfoo({foo: `bar`})   // true
 * hasfoo({foo: `baz`})   // true
 * ```
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
 * ```ts
 * import { haslength } from 'tiinvo';
 * 
 * haslength([])              // true
 * haslength({})              // false
 * haslength({ length: 10 })  // true
 * ```
 *
 * @param {unknown} arg
 * @returns {arg is WithLength}
 */
export const haslength = haskey("length") as Typeguard<WithLength>;

/**
 * Checks if a value is indexable, has the 'length' key and that the length is equal to a given one
 *
 * @example
 * ```ts
 * const test = haslengthof(5)
 *
 * test([1, 2, 3])       // false
 * test({})              // false
 * test({ length: 10 })  // true
 * ```
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
 * Creates a Typeguard which checks if a given object is implementing a given interface.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { implementing } from 'tiinvo';
 * 
 * interface User {
 *    name: string;
 *    mail: string;
 *    age: number;
 *    status?: string;
 * }
 * 
 * const isUser = implementing<User>({
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
 * ```
 * 
 * @param typeguard 
 * @returns 
 */
export const implementing = <TG extends any>(
  typeguard: TypeguardsFromStruct<TG>
) => (value: unknown): value is TG => {
  if (!isindexable(typeguard) || !isindexable(value)) {
    return false;
  }

  const keys = Object.keys(typeguard);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const currentvalue = value[key];
    const currenttg = typeguard[key as keyof typeof typeguard];
    const case1 =
      isindexable(currenttg) && implementing(currenttg as any)(currentvalue);
    const case2 = isfunction(currenttg) && currenttg(currentvalue);

    if (case1 || case2) {
      continue;
    }

    return false;
  }

  return true;
};

/**
 * Creates a typeguard representing a complex data structure. It is useful
 * for object validation.
 * 
 * @deprecated use `implementing` instead
 * 
 * @example
 * ```ts
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
 * ```
 *
 * @template TG
 * @param {TG} typeguard
 */
export const createStructOf = implementing;

/**
 * Creates a typeguard which checks if an array is a tuple 
 * corresponding the given types
 * 
 * @example
 * 
 * ```ts
 * import { istuple, isstring, isnumber } from 'tiinvo';
 * 
 * const tg = istuple(isstring, isstring, isnumber);
 * 
 * tg([10, 20, 30])         // false
 * tg(['10', 20, 30])       // false
 * tg(['10', '20', 30])     // true
 * tg(['10', '20', 30, 50]) // false
 * 
 * ```
 *
 * @template TG
 * @param {...TG} typeguards
 */
export const istuple = <TG extends Typeguard<any>[]>(
  ...typeguards: TG
) => {
  const tlength = haslengthof(typeguards.length);

  return (value: unknown): value is TypegardsTuple<TG> =>
    isarray(value) &&
    tlength(value) &&
    value.every((arg, index) => typeguards[index] && typeguards[index](arg));
};

/**
 * @deprecated use `istuple` instead
 * @example
 * @template TG
 * @param {...TG} typeguards
 */
export const createTupleOf = istuple;

//#endregion

/**
 * Combines two or more typeguards in one.
 * If every typeguard passes, the argument will be of type `T`.
 * 
 * @since 2.0.0
 * 
 * @example
 * 
 * ```ts
 * import { combine, isstring, Typeguard, num, str, pipe } from 'tiinvo'
 * 
 * const haslengthof5 = pipe(
 *    str.length,
 *    num.greaterequalthan(5),
 * ) as Typeguard<string>;
 * 
 * const isstringwithminlengthof5 = combine<string>(
 *    isstring,
 *    haslengthof5,
 * );
 * 
 * isstringwithminlengthof5(`a`)      // false
 * isstringwithminlengthof5(`abcde`)  // true
 * 
 * ```
 *
 * @template T
 * @param {...Typeguard<T>[]} args
 * @returns {Typeguard<T>}
 */
export const combine = <T>(...args: Typeguard<any>[]): Typeguard<T> =>
  predicate.and.apply(null, args) as Typeguard<T>;

/**
 * Determines if one or more typeguards are satisfied by the given value.
 * Ideal for typechecking enums, variadic enums, constants etc.
 * 
 * @since 2.0.0
 * 
 * ```ts
 * import { anyof, isstring, isnumber, isbool, Typeguard, predicate } from 'tiinvo';
 * 
 * export const Variadic1 = `hello`;
 * export const Variadic2 = 10000000;
 * export const Variadic3 = false;
 * 
 * export type Variadic1 = typeof Variadic1;
 * export type Variadic2 = typeof Variadic2;
 * export type Variadic3 = typeof Variadic3;
 * 
 * export type MyVariadicEnum = Variadic1 | Variadic2 | Variadic3;
 * 
 * export const isVariadic1 = predicate.withsamevalue(Variadic1) as Typeguard<Variadic1>;
 * export const isVariadic2 = predicate.withsamevalue(Variadic2) as Typeguard<Variadic2>;
 * export const isVariadic3 = predicate.withsamevalue(Variadic3) as Typeguard<Variadic3>;
 * export const isMyVariadicEnum = anyof<MyVariadicEnum>(
 *    isVariadic1,
 *    isVariadic2,
 *    isVariadic3,
 * );
 * 
 * isMyVariadicEnum(123)      // false
 * isMyVariadicEnum(true)     // false
 * isMyVariadicEnum('aa')     // false
 * isMyVariadicEnum('hello')  // true
 * isMyVariadicEnum(false)    // true
 * isMyVariadicEnum(10000000) // true
 * ```
 *
 * @template T
 * @param {...Typeguard<unknown>[]} predicates
 * @returns {Typeguard<T>}
 */
export const anyof = <T>(...predicates: Typeguard<unknown>[]): Typeguard<T> =>
  predicate.or(...predicates) as Typeguard<T>;

/**
 * Checks if a value is null or undefined
 *
 * @example
 * ```ts
 * import { isnullOrUndefined } from 'tiinvo';
 * 
 * isnullOrUndefined(null)      // true
 * isnullOrUndefined(undefined) // true
 * isnullOrUndefined('foo')     // false
 * isnullOrUndefined([])        // false
 * ```
 */
export const isnullOrUndefined = anyof<null | undefined>(isnull, isundefined);

/**
 * Checks if a value is not null or undefined
 *
 * @example
 * ```ts
 * import { isnotNullOrUndefined } from 'tiinvo';
 * 
 * isnotNullOrUndefined(null)      // false
 * isnotNullOrUndefined(undefined) // false
 * isnotNullOrUndefined('foo')     // true
 * isnotNullOrUndefined([])        // true
 * ```
 */
export const isnotNullOrUndefined = combine<object>(isnotnull, isdefined);

/**
 * Checks if a value is an array of a given type.
 *
 * @example
 * ```ts
 * import { isarrayof, isstring } from 'tiinvo';
 * 
 * const isarrayofStrings = isarrayof(isstring);
 * 
 * isarrayofStrings([10, 20, 'hello', 'world']) // false
 * isarrayofStrings([10, 20])                   // false
 * isarrayofStrings(['hello', 'world'])         // true
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const isarrayof = <T>(typeguard: Typeguard<T>) => (
  arg: unknown
): arg is T[] => isarray(arg) && arg.every(typeguard);

/**
 * Makes a `Typeguard<T>` nullable, so it will check if `T` or `null`
 *
 * @example
 * ```ts
 * const isnullablenumber = nullable(isnumber);
 *
 * isnullablenumber(null) // true
 * isnullablenumber(1000) // true
 * isnullablenumber('10') // false
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const nullable = <T>(typeguard: Typeguard<T>) =>
  anyof<T | null>(isnull, typeguard);

/**
 * Makes a `Typeguard<T>` optional, so it will check if `T` or `undefined`
 *
 * @example
 * ```ts
 * import { optional, isnumber } from 'tiinvo';
 * 
 * const isoptionalnumber = optional(isnumber);
 *
 * isoptionalnumber(undefined)  // true
 * isoptionalnumber(1000)       // true
 * isoptionalnumber('10')       // false
 * isoptionalnumber(null)       // false
 * ```
 *
 * @template T
 * @param {Typeguard<T>} typeguard
 */
export const optional = <T>(typeguard: Typeguard<T>) =>
  anyof<T | undefined>(isundefined, typeguard);

/**
 * Creates a typeguard which matches a specific value by type and value equality.
 *
 * @example
 * ```ts
 * const is10 = isexact(10);
 *
 * is10(2);     // false
 * is10('10');  // false
 * is10(10);    // true
 * ```
 *
 * @template T
 * @param {T} value
 */
export const isexact = <T>(value: T) => (arg: unknown): arg is T =>
  typeof value === typeof arg && value === arg;

//#region typed arrays

export const isFloat32Array = (arg: unknown): arg is Float32Array => Object.prototype.toString.call(arg) === '[object Float32Array]';
export const isFloat64Array = (arg: unknown): arg is Float64Array => Object.prototype.toString.call(arg) === '[object Float64Array]';

export const isInt8Array = (arg: unknown): arg is Int8Array => Object.prototype.toString.call(arg) === '[object Int8Array]';
export const isInt16Array = (arg: unknown): arg is Int16Array => Object.prototype.toString.call(arg) === '[object Int16Array]';
export const isInt32Array = (arg: unknown): arg is Int32Array => Object.prototype.toString.call(arg) === '[object Int32Array]';

export const isUint8Array = (arg: unknown): arg is Uint8Array => Object.prototype.toString.call(arg) === '[object Uint8Array]';
export const isUint8ClampedArray = (arg: unknown): arg is Uint8ClampedArray => Object.prototype.toString.call(arg) === '[object Uint8ClampedArray]';
export const isUint16Array = (arg: unknown): arg is Uint16Array => Object.prototype.toString.call(arg) === '[object Uint16Array]';
export const isUint32Array = (arg: unknown): arg is Uint32Array => Object.prototype.toString.call(arg) === '[object Uint32Array]';

//#endregion