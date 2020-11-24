import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";

/**
 *
 *
 * @template Arg
 * @template Tagname
 * @param {Predicate<Arg>} typeguard
 * @param {TaggedFactory<Tagname>} factory
 * @param {<X>(...args: any[]) => Tagged<X, Tagname>} failfactory
 */
export const createFilter = <
  Arg extends Tagged<any, Tagname>,
  Tagname extends string
>(
  typeguard: Predicate<Arg>,
  factory: TaggedFactory<Tagname>,
  failfactory: <X>(...args: any[]) => Tagged<X, Tagname>
) => <T>(predicate: Predicate<T>) => (result: Tagged<T, Tagname>) =>
  typeguard(result as Arg)
    ? predicate(result.value)
      ? factory(result.value)
      : failfactory()
    : failfactory();

/**
 *
 *
 * @template Arg
 * @template Tagname
 * @param {Predicate<Arg>} typeguard
 * @param {TaggedFactory<Tagname>} factory
 */
export const createFilterOr = <
  Arg extends Tagged<any, Tagname>,
  Tagname extends string
>(
  typeguard: Predicate<Arg>,
  factory: TaggedFactory<Tagname>
) => <T>(fallback: Tagged<T, Tagname>, predicate: Predicate<T>) => (
  result: Tagged<T, Tagname>
) =>
  typeguard(result as Arg)
    ? predicate(result.value)
      ? factory(result.value)
      : fallback
    : fallback;
