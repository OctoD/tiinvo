import { check } from "./applicative";
import { Predicate } from "./predicate";
import { Tagged } from "./tagged-type";

/**
 *
 *
 * @template Tag
 * @param {Predicate<Tagged<any, Tag>>} predicate
 * @param {string} erromessage
 */
export const createUnwrap = <Tag extends string>(
  predicate: Predicate<Tagged<any, Tag>>,
  erromessage: string
) => <Arg extends Tagged<any, Tag>>(
  arg: Arg
): Arg extends Tagged<infer U, Tag> ? U : never =>
  check(predicate(arg), erromessage)(arg.value);

/**
 *
 *
 * @template Tag
 * @param {Predicate<Tagged<any, Tag>>} predicate
 */
export const createUnwrapOr = <Tag extends string>(
  predicate: Predicate<Tagged<any, Tag>>
) => <U>(fallback: U) => <Arg extends Tagged<any, Tag>>(arg: Arg): U =>
  predicate(arg) ? arg.value : fallback;

/**
 *
 *
 * @template Tag
 * @param {Predicate<Tagged<any, Tag>>} predicate
 */
export const createUnwrapOrElse = <Tag extends string>(
  predicate: Predicate<Tagged<any, Tag>>
) => <U>(fallback: () => U) => <Arg extends Tagged<any, Tag>>(arg: Arg): U =>
  predicate(arg) ? arg.value : fallback();
