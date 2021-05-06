import { FnUnary } from './applicative';
import { Predicate } from "./predicate";
import { Tagged, TaggedFactory } from "./tagged-type";
import { isfunction } from './typeguards';

export type FoldableFn<T, R, Tagname extends string> = (
  arg: T
) => Tagged<R, Tagname>;

/**
 * Creates a fold function.
 * This function will return `left` if the `Predicate<Tagged<T, any>>` is not satisfied,
 * otherwise it will return `right`.
 * 
 * Both `left` and `right` can be a type `R` or `FnUnary<T, R>`
 * 
 * @example
 * 
 * ```ts
 * import { createfold, taggedFactory, isTaggedWith } from 'tiinvo';
 * 
 * const positive = `my-tagged-type1`;
 * const negative = `my-tagged-type2`;
 * 
 * type positive = typeof positive;
 * type negative = typeof negative;
 * 
 * type mytagged = positive | negative;
 * 
 * const tagged1 = taggedFactory(positive);
 * const tagged2 = taggedFactory(negative);
 * 
 * const istagged1 = isTaggedWith(positive);
 * const istagged2 = isTaggedWith(negative);
 * 
 * const fold = createfold<mytagged>(istagged2);
 * 
 * fold('is negative', 'is positive')(tagged1('hello')) // is positive
 * fold('is negative', 'is positive')(tagged2('world')) // is negative
 * ```
 * 
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
 * Creates a function which swaps `left` to `right` and `right` to `left`
 * 
 * @example
 * 
 * ```ts
 * import 
 * 
 * ```
 * import { createSwap, taggedFactory, isTaggedWith } from 'tiinvo';
 * 
 * const positive = `my-tagged-type1`;
 * const negative = `my-tagged-type2`;
 * 
 * type positive = typeof positive;
 * type negative = typeof negative;
 * 
 * type mytagged = positive | negative;
 * 
 * const tagged1 = taggedFactory(positive);
 * const tagged2 = taggedFactory(negative);
 * 
 * const istagged1 = isTaggedWith(positive);
 * const istagged2 = isTaggedWith(negative);
 * 
 * const swap = createSwap(istagged2, tagged2, tagged1);
 * 
 * swap(tagged1('hello')) // Tagged<'hello', 'my-tagged-type2'>
 * swap(tagged2('hello')) // Tagged<'hello', 'my-tagged-type1'>
 * ```ts
 * import { either } from 'tiinvo';
 *
 * either.swap(either.right(100)) // Left<100>
 * ```
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
