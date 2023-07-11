import type * as Fn from './Fn.js';

/**
 * Represents a builder (or factory) function.
 * 
 * It accepts a `Partial<a>` and must return a `a` type.
 * 
 * @example
 * 
 * ```ts
 * import { Functors } from 'tiinvo';
 * 
 * export interface User {
 *    name: string;
 *    surname: string;
 * }
 * 
 * export type t = User;
 * 
 * export const make: Functors.Buildable<t> = (p = {}) => ({
 *    name: p.name ?? '',
 *    surname: p.surname ?? '',
 * })
 * 
 * make()                                   
 * // { name: '', surname: '' }
 * 
 * make({ name: 'John' })                   
 * // { name: 'John', surname: '' }
 * 
 * make({ name: 'John', surname: 'Doe' })   
 * // { name: 'John', surname: 'Doe' }
 * ```
 * 
 * @group Factories
 * @since 4.0.0
 */
export type Buildable<a> = (a?: Partial<a>) => a;

/**
 * Represents a builder (or factory) module.
 * 
 * This module must have a `Buildable<a>` function called `make`.
 * 
 * @example
 * 
 * ```ts
 * ////// module User.ts
 * import { Functors } from 'tiinvo';
 * 
 * export interface User {
 *    name: string;
 *    surname: string;
 * }
 * 
 * export type t = User;
 * 
 * export const make: Functors.Buildable<t> = (p = {}) => ({
 *    name: p.name ?? '',
 *    surname: p.surname ?? '',
 * })
 * 
 * /////// Module Foo.ts
 * import * as User from './User.ts';
 * import { Functors } from 'tiinvo';
 * 
 * export const greet = (x: Functors.BuildableMobule<User.t>, y: Partial<ReturnType<Functors.Buildable<User.t>>>) => {
 *    const z = x.make(y);
 *    return `hello ${z.name} ${z.surname}`
 * }
 * 
 * greet(User, { name: 'John', surname: 'Doe' })  // "hello John Doe"
 * greet(User, "" as any)                         // "hello  "
 * ```
 * 
 * @group Factories
 * @since 4.0.0
 */
export type BuildableMobule<a> = {
  make: Buildable<a>;
};

/**
 * The default value module-like.
 * 
 * @example
 * 
 * ```ts
 * ////// module User.ts
 * export interface User {
 *    name: string;
 *    surnname: string;
 * }
 * 
 * export type t = User;
 * 
 * export const toString = (t: t) => `hello ${t.name} ${t.surname}`;
 * 
 * export default {
 *    name: "name",
 *    surname: "surname",
 * }
 * 
 * ////// module Animal.ts
 * export interface Animal {
 *    name: string;
 *    legs: number;
 * } 
 *
 * export type t = Animal;
 * 
 * export const toString = (t: t) => `a ${t.name} has ${t.legs} legs`;
 * 
 * export default {
 *    name: "raccoon",
 *    legs: 4, 
 * }
 * 
 * ////// module X.ts
 * import * as Animal.ts
 * import * as User.ts
 * import { Fn, Functors } from 'tiinvo'
 * 
 * type Stringifiable<a> = Record<'toString', Fn.Unary<a, string>> & Functors.DefaultableModule<a>
 * const describe = <a>(x: Stringifiable<a>) => x.toString(x.default);
 * 
 * describe(Animal)     // "a raccoon has 4 legs"
 * describe(User)       // "hello name surname"
 * ```
 * 
 * @since 4.0.0
 */
export type DefaultableModule<a> = {
  default: a;
};

//#region catchables

/**
 * Is the symbol used to express the presence of an async catchable function
 * 
 * @since 4.0.0
 */
export const catchableAsync = Symbol("catchable.async");
/**
 * Is the symbol used to express the presence of a sync catchable function
 * 
 * @since 4.0.0
 */
export const catchableSync = Symbol("catchable.sync");

/**
 * Represents a catchable functor
 * 
 * @since 4.0.0
 */
export type Catchable<f extends Fn.AnyFn> = {
  catch(error: Error, args: Parameters<f>): ReturnType<f>;
  func: f;
};

/**
 * Represents a catchable async module functor
 * 
 * @since 4.0.0
 */
export type CatchableAsyncModule<f extends Fn.AnyAsyncFn> = {
  [catchableAsync](): Catchable<f>;
};

/**
 * Represents a catchable sync module functor
 * 
 * @since 4.0.0
 */
export type CatchableSyncModule<f extends Fn.AnyFn> = {
  [catchableSync](): Catchable<f>;
};

/**
 * Represents a catchable module functor
 * 
 * @since 4.0.0
 */
export type CatchableModule<f extends Fn.AnyFn> = CatchableAsyncModule<f> | CatchableSyncModule<f>;

//#endregion

//#region comparables

/**
 * Is the result of a comparison made by a `Comparable<A>` functor
 * 
 * - -1 means that a is less than b
 * - 0 means that a equals to b
 * - 1 means that a is more than b
 * 
 * @since 4.0.0
 */
export type ComparableResult = -1 | 0 | 1;

/**
 * Is a comparable functor 
 * 
 * @template A is the type of the compared values
 * @param a the first value to compare
 * @param b the second value to compare
 * @return
 * - -1 means that a is less than b
 * - 0 means that a equals to b
 * - 1 means that a is more than b
 * 
 * @since 4.0.0
 */
export type Comparable<A> = {
  (a: A, b: A): ComparableResult;
  (a: A): (b: A) => ComparableResult;
};

/**
 * Is a comparable functor module
 * 
 * @template a is the type of the compared values
 * @since 4.0.0
 */
export type ComparableModule<a> = {
  cmp: Comparable<a>;
};

/**
 * Is a comparable functor 
 * 
 * @example
 * 
 * ```ts
 * import { Functors, Str, Num } from 'tiinvo';
 * 
 * module LivingBeen {
 *    export type LivingBeen<A> = {
 *      name: string;
 *    } & A;
 * 
 *    export type T<A> = LivingBeen<A>;
 * 
 *    export const eq = <A>(a: T<A>, b: T<A>): boolean => {
 *      return Str.eq(a.name, b.name);
 *    }
 * }
 * 
 * module Animal {
 *    export type Animal = LivingBeen.T<{
 *      legs: number;
 *    }>;
 * 
 *    export type T = Animal;
 * 
 *    export const make: Functors.Buildable<T> = (p = {}) => ({
 *      name: p.name ?? '',
 *      legs: p.legs ?? 0,
 *    })
 * 
 *    export const eq: Functors.Equatable<T> = (a, b) => {
 *      return LivingBeen.eq(a, b) && Num.eq(a.legs, b.legs)
 *    }
 * }
 * 
 * module Person {
 *    export type Person = LivingBeen.T<{
 *      surname: string;
 *    }>
 * 
 *    export type T = Person;
 * 
 *    export const make: Functors.Buildable<T> = (p = {}) => ({
 *      name: p.name ?? '',
 *      surname: p.surname ?? '',
 *    })
 * 
 *    export const eq = (a: T, b: T) => {
 *      return LivingBeen.eq(a, b) && Str.eq(a.surname, b.surname)
 *    }
 * }
 * 
 * const duck = Animal.make({ legs: 2, name: 'duck' })
 * const donaldDuck = Animal.make({ legs: 2, name: 'Donald' })
 * const donald = Person.make({ name: 'Donald', surname: 'Duck' });
 * 
 * LivingBeen.eq(duck, donaldDuck)                            // false
 * LivingBeen.eq(donald, donaldDuck as LivingBeen.T<any>)     // true
 * ```
 * 
 * 
 * @template a is the type of the compared values
 * @param a the first value to compare
 * @param b the second value to compare
 * @returns true if a and b are equal
 * @since 4.0.0
 */
export type Equatable<a> = {
  (a: a, b: a): boolean;
  (a: a): (b: a) => boolean;
};

/**
 * Is an equatable functor module
 * 
 * @template a the value type
 * @since 4.0.0
 */
export type EquatableModule<a> = {
  eq: Equatable<a>;
};

//#endregion

//#region guardables

/**
 * Express a function which guards if a passed parameter `x` is of a certain type `a`.
 * 
 * Read more about typeguards on ts doc pages.
 * 
 * @example
 * 
 * ```ts
 * import { Functors } from 'tiinvo';
 * 
 * let is0: Functors.Guardable<0> = (x: unknown): x is 0 => x === 0;
 * 
 * is0(10)    // false
 * is0("")    // false
 * is0(-1)    // false
 * is0(0)     // true
 * ```
 * 
 * @since 4.0.0
 */
export type Guardable<a> = (x: unknown) => x is a;

/**
 * Represents a module which have an exported function `guard` of type `Guardable<a>`
 * 
 * @example
 * ```ts
 * import { Fn, Num, Predicate, Functors } from 'tiinvo';
 * 
 * module Int8 {
 *   export type T = number;
 *   export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2**8 - 1)) as Functors.Guardable<T>;
 * }
 * 
 * module Int16 {
 *   export type T = number;
 *   export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2**16 - 1)) as Functors.Guardable<T>;
 * }
 * 
 * const makeeq = <A extends number>(mod: Functors.GuardableModule<A>): Functors.Equatable<A> => {
 *    function eq(a: A, b: A): boolean
 *    function eq(a: A): Fn.Unary<A, boolean>
 *    function eq(a: A, b?: A): any
 *    {
 *       const _eq = (x: A, y: A) => {
 *          return mod.guard(x) && mod.guard(y) && Num.eq(x, y)
 *       }
 * 
 *       if (Num.guard(a) && Num.guard(b)) {
 *          return _eq(a, b)
 *       }
 * 
 *       return (b: A) => _eq(a, b)
 *    }
 * 
 *    return eq;
 * }
 * 
 * const eqInt8 = makeeq(Int8)
 * const eqInt16 = makeeq(Int16)
 * 
 * eqInt8(255, 255) // true
 * eqInt8(256, 256) // false
 * 
 * eqInt16(255, 255) // true
 * eqInt16(256, 256) // true
 * ```
 * 
 * @since 4.0.0
 */
export type GuardableModule<a> = {
  guard: Guardable<a>;
};

/**
 * The checked type of a Guardable<A> or a GuardableModule<A>
 *
 * @example
 *
 * ```ts
 * import type { Functors, Str } from 'tiinvo'
 * 
 * type x = Functors.GuardReturnType<Str>
 * 
 * type x: x = "" // ok for the compiler
 * type y: x = 10 // error for the compiler
 * ```
 *
 * @group guardables
 * @since 4.0.0
 */
export type GuardReturnType<A extends (Guardable<any> | GuardableModule<any>)> = A extends Guardable<infer U> ? U : A extends GuardableModule<infer U> ? U : never;

/**
 * Returns an array of types from an array of `Guardable<any>` or `GuardableModule<any>`
 *
 * @example
 *
 * ```ts
 * import type { Functors, Str, Num, Bool } from 'tiinvo'
 * 
 * type x: Functors.GuardArrayReturnType<[Str, Num, Bool]>
 * 
 * const x: x = ["hello", 10, true]   // ok for the compiler
 * const y: x = ["hello", "world", 0] // error for the compiler
 * ```
 *
 * @group guardables
 * @since 4.0.0
 */
export type GuardArrayReturnType<A extends Array<Guardable<any> | GuardableModule<any>>> = {
  [key in keyof A]: GuardReturnType<A[key]>;
} & RelativeIndexable<any>;


//#endregion

//#region filterables

/**
 * Is a filter predicate. 
 * 
 * @since 4.0.0
 */
export type Filterable<a> = (a: a) => boolean;

/**
 * 
 * 
 * @since 4.0.0
 */
export type FilterableModule<a> = {
  filter: Filterable<a>;
};

//#endregion

//#region mappables

/**
 * A map function. Maps a value `A` to a value `B`
 * 
 * @template A the starting value
 * @template B the mapped value
 * @group Mappables
 * @since 4.0.0
 */
export type Mappable<A, B> = (a: A) => B;

/**
 * A module with a map function `Mappable<A, B>`.
 * 
 * @example
 * ```ts
 * import { Fn, Functors, Num } from 'tiinvo';
 * 
 * function makemap<T extends number>(guard: Functors.Guardable<T>, tn: string) {
 *    function map<A>(m: Functors.Mappable<T, A>, t: T): A
 *    function map<A>(m: Functors.Mappable<T, A>): Fn.Unary<T, A>
 *    function map<A>(m: Functors.Mappable<T, A>, t?: T): any
 *    {
 *      const _map = (x: T) => guard(x) ? m(x) : new TypeError("Value not " + tn)
 *      
 *      if (Num.guard(t)) {
 *        return _map(t)
 *      }
 * 
 *      return (b: T) => _map(b)
 *    }
 * 
 *    return map;
 * }
 * 
 * module Int8 {
 *    export type T = number;
 *    export const guard = Predicate.and(
 *      Num.guard, 
 *      Num.gte(0), 
 *      Num.lte(2 ** 8 - 1)
 *    ) as Functors.Guardable<T>;
 *    export const map = makemap(guard, "Int8");
 * }
 * 
 * module Int16 {
 *   export type T = number;
 *   export const guard = Predicate.and(
 *     Num.guard,
 *     Num.gte(0), 
 *     Num.lte(2 ** 16 - 1)
 *   ) as Functors.Guardable<T>;
 *   export const map = makemap(guard, "Int16");
 * }
 * 
 * const toHex = <A extends number>(
 *    mod: Functors.MappableModule<A, string>, 
 *    a: A,
 * ) => mod.map(Num.toHex as Functors.Mappable<A, string>, a)
 * 
 * toHex(Int8, 255)       // "0xff"
 * toHex(Int8, 256)       // TypeError("Value not Int8")
 * 
 * toHex(Int16, 256)      // "0x100"
 * toHex(Int16, 2 ** 16)  // TypeError("Value not Int16")
 * ```
 * 
 * @template A the starting value
 * @template B the mapped value
 * @group Mappables
 * @since 4.0.0
 */
export type MappableModule<A, B> = {
  map(m: Mappable<A, B>, a: A): B;
  map(m: Mappable<A, B>): (a: A) => B;
};

/**
 * Gets the parameter type of a Mappable<any, any> or a MappableModule<any, any>
 *
 * @example
 *
 * ```ts
 * import type { Functors } from 'tiinvo'
 * 
 * type MyMap = (x: string) => number;
 * type x = Functors.MappableParameter<MyMap>
 * 
 * let x: x = "hello" // compiler gives ok
 * // @ts-ignore
 * let y: x = 10      // compiler gives error
 * ```
 *
 * @group Mappables
 * @since 4.0.0
 */
export type MappableParameter<A extends (Mappable<any, any> | MappableModule<any, any>)> = A extends Mappable<infer U, any> ? U : A extends MappableModule<infer U, any> ? U : never;

/**
 * Gets the parameters type of an array of `Mappable` or `MappableModule`s.
 * 
 * @example
 *
 * ```ts
 * import type { Functors } from 'tiinvo'
 * 
 * type MyMap0 = (x: string) => number;
 * type MyMap1 = (x: number) => Date;
 * type x = Functors.MappableParameters<[MyMap0, MyMap1]>
 * 
 * let x: x = ["hello", 10]    // compiler gives ok
 * // @ts-ignore
 * let y: x = [10, new Date()] // compiler gives error
 * ```
 *
 * @group Mappables
 * @since 4.0.0
 */
export type MappableParameters<A extends Array<Mappable<any, any> | MappableModule<any, any>>> = {
  [key in keyof A]: MappableParameter<A[key]>
} & RelativeIndexable<any>;

/**
 * Gets the returning type of a Mappable<any, any> or a MappableModule<any, any>
 *
 * @example
 *
 * ```ts
 * import type { Functors } from 'tiinvo'
 * 
 * type MyMap = (x: string) => number;
 * type x = Functors.MappableReturnType<MyMap>
 * 
 * let x: x = 10      // compiler gives ok
 * // @ts-ignore
 * let y: x = "hello" // compiler gives error
 * ```
 *
 * @group Mappables
 * @since 4.0.0
 */
export type MappableReturnType<A extends (Mappable<any, any> | MappableModule<any, any>)> = A extends Mappable<any, infer U> ? U : A extends MappableModule<any, infer U> ? U : never;

/**
 * Gets the return types of an array of `Mappable` or `MappableModule`s.
 * 
 * @example
 *
 * ```ts
 * import type { Functors } from 'tiinvo'
 * 
 * type MyMap0 = (x: string) => number;
 * type MyMap1 = (x: number) => Date;
 * type x = Functors.MappableParameters<[MyMap0, MyMap1]>
 * 
 * let x: x = [10, new Date()] // compiler gives ok
 * // @ts-ignore
 * let y: x = ["hello", 10]    // compiler gives error
 * ```
 *
 * @group Mappables
 * @since 4.0.0
 */
export type MappableReturnTypes<A extends Array<Mappable<any, any> | MappableModule<any, any>>> = {
  [key in keyof A]: MappableReturnType<A[key]>
} & RelativeIndexable<any>;

/**
 * Reduce a value `A` to a value `B` aggregating the previous value `B` to the current.
 * 
 * @group Mappables
 * @since 4.0.0
 */
export type Reduceable<a, b> = (p: b, c: a) => b;

/**
 * A module with a reduce function exposed.
 * 
 * @group Mappables
 * @since 4.0.0
 */
export type ReduceableModule<a, b> = {
  reduce: Reduceable<a, b>;
};

//#endregion

//#region composites

/**
 * Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>`
 * 
 * @since 4.0.0
 */
export type FilterMappableModule<a, b> = FilterableModule<a> & { map: Mappable<a, b>; };

/**
 * Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>` with a default value `b`. 
 * 
 * @since 4.0.0
 */
export type FilterReduceableModule<a, b> = FilterableModule<a> & ReduceableModule<a, b> & DefaultableModule<b>;

//#endregion