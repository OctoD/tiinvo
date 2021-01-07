import { Fn1 } from "./applicative";
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

/**
 * Takes a tagged factory function.
 * Every function which takes a single argument will return a Tagged type
 *
 * ```ts
 *
 * import { totaggedFn, taggedFactory } from 'tiinvo'
 *
 * const mytagged = taggedFactory('mytagged');
 * const tomytagged = totaggedFn(mytagged)
 * const double = (arg: number) => arg * 2;
 * const mytaggeddouble = tomytagged(double)
 *
 * double(10)           // 20
 * mytaggeddouble(10)   // { __tag: 'mytagged', value: 20 }
 *
 *
 * ```
 *
 * @param {TaggedFactory<Tagname>} factory
 */
export const totaggedFn = <Tagname extends string>(
  factory: TaggedFactory<Tagname>
) => <FnIn, FnOut>(fn: Fn1<FnIn, FnOut>) => (arg: FnIn) => factory(fn(arg));
