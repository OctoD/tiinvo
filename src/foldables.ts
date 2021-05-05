import { FnUnary } from './applicative';
import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";
import { isfunction } from './typeguards';

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
) => <T, U, R>(left: R | FnUnary<T, R>, right: R | FnUnary<U, R>) => <
  E extends Tagged<T | U, Tagname>
>(
  arg: E
) => {
  if (lefthandpredicate(arg)) {
    return isfunction(left) ? left(arg.value as T) : left;
  } else {
    return isfunction(right) ? right(arg.value as U) : right;
  }
}

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
