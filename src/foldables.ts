import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";

export type FoldableFn<T, R, Tagname extends string> = (
  arg: T
) => Tagged<R, Tagname>;

/**
 * Creates a fold function
 * @template Tagname
 * @param {Predicate<Tagged<any, Tagname>>} lefthandpredicate
 */
export const createfold = <Tagname extends string>(
  lefthandpredicate: Predicate<Tagged<any, Tagname>>
) => <T, U, R>(left: (arg: T) => R, right: (arg: U) => R) => <
  E extends Tagged<T | U, Tagname>
>(
  arg: E
) => (lefthandpredicate(arg) ? left(arg.value as T) : right(arg.value as U));

/**
 *
 *
 * @template LeftTag
 * @template RightTag
 * @param {(Predicate<Tagged<unknown, LeftTag | RightTag>>)} lefthandpredicate
 * @param {TaggedFactory<LeftTag>} leftcreator
 * @param {TaggedFactory<RightTag>} rightcreator
 */
export const createSwap = <LeftTag extends string, RightTag extends string>(
  lefthandpredicate: Predicate<Tagged<unknown, LeftTag | RightTag>>,
  leftcreator: TaggedFactory<LeftTag>,
  rightcreator: TaggedFactory<RightTag>
) => <T extends Tagged<any, LeftTag | RightTag>>(
  arg: T
): T["__tag"] extends LeftTag
  ? Tagged<T["value"], RightTag>
  : Tagged<T["value"], LeftTag> =>
  lefthandpredicate(arg)
    ? rightcreator(arg.value)
    : (leftcreator(arg.value) as any);
