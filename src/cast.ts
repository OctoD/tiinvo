import { Tagged, TaggedFactory } from "./tagged-type";

/**
 * Cast a TaggetType to another one.
 *
 * @example
 * const error = err('this is an error');
 * const someError = cast(error, some);
 *
 * @template T
 * @template Tagfrom
 * @template Tagto
 * @param {T} tagged
 * @param {TaggedFactory<Tagto>} totagged
 * @returns {Tagged<T['value'], Tagto>}
 */
export const cast = <
  T extends Tagged<any, Tagfrom>,
  Tagfrom extends string,
  Tagto extends string
>(
  tagged: T,
  totagged: TaggedFactory<Tagto>
): Tagged<T["value"], Tagto> => totagged(tagged.value);

/**
 * Creates a cast to function
 *
 * @example
 *
 * const toOption = createCast(option);
 *
 * toOption(just('hello')); // Some<'hello'>;
 *
 * @template Tagto
 * @param {TaggedFactory<Tagto>} totagged
 */
export const createCast = <Tagto extends string>(
  totagged: TaggedFactory<Tagto>
) => <T extends Tagged<any, Tagfrom>, Tagfrom extends string>(
  arg: T
): Tagged<T["value"], Tagto> => totagged(arg.value);
