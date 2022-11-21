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
 * Is the result of a comparison made by a `Comparable<a>` functor
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
 * @template a is the type of the compared values
 * @param a the first value to compare
 * @param b the second value to compare
 * @return
 * - -1 means that a is less than b
 * - 0 means that a equals to b
 * - 1 means that a is more than b
 * 
 * @since 4.0.0
 */
export type Comparable<a> = {
  (a: a, b: a): ComparableResult;
  (a: a): (b: a) => ComparableResult;
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
 * ////// module Animal.ts
 * import { Obj, Num, Str } from 'tiinvo';
 * 
 * export interface Animal {
 *    name: string;
 *    legs: number;
 * } 
 *
 * export type t = Animal;
 * 
 * export const guard = Obj.guardOf<t>({
 *    name: Str.guard,
 *    legs: Num.guard,
 * })
 * 
 * ////// module User.ts
 * import { Obj, Str } from 'tiinvo';
 * 
 * export interface User {
 *    name: string;
 *    surname: string;
 * }
 * 
 * export type t = User;
 * 
 * export const guard = Obj.guardOf<t>({
 *    name: Str.guard,
 *    surname: Str.guard,
 * });
 * 
 * ////// module Test.ts
 * import * as Animal from './Animal.ts';
 * import * as User from './User.ts';
 * import { Functors } from 'tiinvo';
 * 
 * function typechecker(mod: Functors.GuardableModule<any>, typename: string) {
 *    return (x: unknown) => (mod.guard(x) ? "is of type " : "not of type ") + typename
 * }
 * 
 * const checkAnimal = typechecker(Animal, "Animal")
 * const checkUser = typechecker(User, "User")
 * 
 * checkAnimal(10)                     // "not of type Animal"
 * checkAnimal({ name: "", legs:0 })   // "is of type Animal"
 * checkUser(10)                       // "not of type User"
 * checkUser({ name: "", surname:0 })  // "is of type User"
 * ```
 * 
 * @since 4.0.0
 */
export type GuardableModule<a> = {
  guard: Guardable<a>;
};

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
 * 
 * 
 * @since 4.0.0
 */
export type Mappable<a, b> = (a: a) => b;

/**
 * 
 * 
 * @since 4.0.0
 */
export type MappableModule<a, b> = {
  map: Mappable<a, b>;
};

/**
 * 
 * 
 * @since 4.0.0
 */
export type Reduceable<a, b> = (p: b, c: a) => b;

/**
 * 
 * 
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
export type FilterMappableModule<a, b> = FilterableModule<a> & MappableModule<a, b>;

/**
 * Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>` with a default value `b`. 
 * 
 * @since 4.0.0
 */
export type FilterReduceableModule<a, b> = FilterableModule<a> & ReduceableModule<a, b> & DefaultableModule<b>;

//#endregion