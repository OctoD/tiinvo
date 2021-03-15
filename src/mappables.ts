import { _ } from "./applicative";
import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";

export type MapFn<T, U> = T extends null | undefined ? () => U : (arg: T) => U;

/**
 *
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
 *
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
 *
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
