import type * as Fn from './Fn.js';

/**
 * Represents a builder (or factory) function.
 */
export type Buildable<a> = (a?: Partial<a>) => a;

/**
 * Represents a builder (or factory) module.
 */
export type BuildableMobule<a> = {
  make: Buildable<a>;
};

/**
 * Represents a builder (or factory) module with a `guard<a>` function.
 */
export type ModuleSafeBuildable<a> = BuildableMobule<a> & Guardable<a>;

/**
 * Represents a functor which generates a unique id for a given parameter `a`
 */
export type Identifiable<a, i extends (number | string | symbol)> = (a: a) => i;

/**
 * Represents a functor module which generates a unique id for a given parameter `a`
 */
export type IdentifiableModule<a, i extends (number | string | symbol)> = {
  id: Identifiable<a, i>;
};

export const defaultsymbol = Symbol('default')

/**
 * 
 */
export type DefaultableModule<a> = {
  [defaultsymbol]: a;
};

//#region catchables

export const catchableAsync = Symbol("catchable.async");
export const catchableSync = Symbol("catchable.sync");

/**
 * Represents a synchronous catchable functor
 */
export type Catchable<f extends Fn.AnyFn> = {
  catch(error: Error, args: Parameters<f>): ReturnType<f>;
  func: f;
};

export type CatchableAsyncModule<f extends Fn.AnyAsyncFn> = {
  [catchableAsync](): Catchable<f>;
};

export type CatchableSyncModule<f extends Fn.AnyFn> = {
  [catchableSync](): Catchable<f>;
};

/**
 * 
 */
export type CatchableModule<f extends Fn.AnyFn> = CatchableAsyncModule<f> | CatchableSyncModule<f>;

//#endregion

//#region comparables

/**
 * 
 */
export type ComparableResult = -1 | 0 | 1;

/**
 * 
 */
export type Comparable<a> = (a: a, b: a) => ComparableResult;

/**
 * 
 */
export type ComparableModule<a> = {
  cmp: Comparable<a>;
};

/**
 * 
 */
export type Equatable<a> = (a: a, b: a) => boolean;

/**
 * 
 */
export type EquatableModule<a> = {
  eq: Equatable<a>;
};

/**
 * 
 */
export type EquatableOverloaded<a> = (a: a) => (b: a) => boolean;

/**
 * 
 */
export type EquatableOverloadedModule<a> = {
  eq: EquatableOverloaded<a>;
};

/**
 * 
 */
export type AnyEquatable<a> = Equatable<a> | EquatableOverloaded<a>;

/**
 * 
 */
export type AnyEquatableModule<a> = {
  eq: Equatable<a> | EquatableOverloaded<a>;
};

//#endregion

//#region guardables

/**
 * 
 */
export type Guardable<a> = (x: unknown) => x is a;

/**
 * 
 */
export type GuardableModule<a> = {
  guard: Guardable<a>;
};

//#endregion

//#region filterables

/**
 * 
 */
export type Filterable<a> = (a: a) => boolean;

/**
 * 
 */
export type FilterableModule<a> = {
  filter: Filterable<a>;
};

//#endregion

//#region mappables

/**
 * 
 */
export type Mappable<a, b> = (a: a) => b;

/**
 * 
 */
export type MappableModule<a, b> = {
  map: Mappable<a, b>;
};

/**
 * 
 */
export type Reduceable<a, b> = (p: b, c: a) => b;

/**
 * 
 */
export type ReduceableModule<a, b> = {
  reduce: Reduceable<a, b>;
};

/**
 * 
 */
export interface Operable<a> {
  (a: a, b: a): a;
  (a: a): (b: a) => a;
}

/**
 * 
 */
export type OperableModule<a> = {
  add: Operable<a>;
  div: Operable<a>;
  mul: Operable<a>;
  pow: Operable<a>;
  root: Operable<a>;
  sub: Operable<a>;
};

//#endregion

//#region composites

/**
 * Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>`
 */
export type FilterMappableModule<a, b> = FilterableModule<a> & MappableModule<a, b>;

/**
 * 
 */
export type FilterReduceableModule<a, b> = FilterableModule<a> & ReduceableModule<a, b> & DefaultableModule<b>;

//#endregion