import { _ } from "./applicative";
import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";

export type MapFn<T, U> = T extends null | undefined ? () => U : (arg: T) => U;

/**
 * Creates a map function for `TaggedType`s.
 * A map function accepts a `FnUnary<T, R>` which takes the value `T` of a
 * `TaggedType<T>` and returns a value `R` if predicate `Predicate` is satisfied. 
 * 
 * @example
 * 
 * ```ts
 * import { createMap, isTaggedWith, taggedFactory } from 'tiinvo';
 * 
 * const eventag = `even`;
 * const oddtag = `odd`;
 * 
 * type eventag = typeof eventag;
 * type oddtag = typeof oddtag;
 * type integertag = eventag | oddtag;
 * 
 * const even = taggedFactory<integertag>(eventag);
 * const odd = taggedFactory<integertag>(oddtag);
 * const integer = <T>(arg: T) => typeof arg === 'number' && arg % 2 === 0 ? even(arg) : odd(arg);
 * 
 * const iseven = isTaggedWith(eventag);
 * 
 * const map = createMap(iseven, integer);
 * const mapperfn = (arg: number) => arg / 2;
 * 
 * map(mapperfn)(integer(10))  //  Tagged<5, 'odd'>;
 * map(mapperfn)(integer(4))   //  Tagged<2, 'even'>;
 * ```
 *
 * @template K
 * @template Tagname
 * @param {Predicate<K>} predicate
 * @param {TaggedFactory<Tagname>} creator
 */
export const createMap = <
  K extends Tagged<any, Tagname>,
  Tagname extends string
>(
  predicate: Predicate<K>,
  creator: TaggedFactory<Tagname>
) => <T, U>(fn: MapFn<T, U>) => (
  arg: Tagged<T, Tagname>
): Tagged<U, Tagname> =>
  predicate(arg as K) ? creator(fn(arg.value)) : arg as unknown as Tagged<U, Tagname>;

/**
 * Creates a mapOr function for `TaggedType`s.
 * 
 * Similar to `createMap`, but the returned map function accepts a `Tagged` type as first argument (to be used as a fallback).
 *
 * @template K
 * @template Tagname
 * @param {Predicate<K>} predicate
 * @param {TaggedFactory<Tagname>} creator
 */
export const createMapOr = <
  K extends Tagged<any, Tagname>,
  Tagname extends string
>(
  predicate: Predicate<K>,
  creator: TaggedFactory<Tagname>
) => <T, U>(fallback: Tagged<U, Tagname>, fn: MapFn<T, U>) => (
  arg: Tagged<T, Tagname>
): Tagged<U, Tagname> =>
  predicate(arg as K) ? creator(fn(arg.value)) : fallback;

/**
 * Creates a mapOrElse function for `TaggedType`s.
 * 
 * Similar to `createMap`, but the returned map function accepts a `FnNullary` or `FnUnary` type as first argument.
 *
 * @template K
 * @template Tagname
 * @param {Predicate<K>} predicate
 * @param {TaggedFactory<Tagname>} creator
 */
export const createMapOrElse = <
  K extends Tagged<any, Tagname>,
  Tagname extends string
>(
  predicate: Predicate<K>,
  creator: TaggedFactory<Tagname>
) => <T, U>(fallback: MapFn<_, U>, fn: MapFn<T, U>) => (
  arg: Tagged<T, Tagname>
): Tagged<U, Tagname> =>
  predicate(arg as K) ? creator(fn(arg.value)) : creator(fallback());
