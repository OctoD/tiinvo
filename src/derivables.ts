import { Tagged, TaggedFactory } from "./tagged-type";

/**
 * Creates a function `Fn1` which wraps a function `Fn2`.
 * Once the `Fn2` is called, it returns a `Tagged` type with the value of `ReturnValue<Fn2>`
 *
 * @example
 * ```ts
 * const mytagged = taggedFactory('foo');
 * const mytaggedfromfunction = createderivefromfunction(mytagged);
 *
 * const doublefn = (arg: number) => arg * 2;
 * const mytaggeddouble = mytaggedfromfunction(doublefn);
 *
 * doublefn(10) // 20
 * mytaggeddouble(10) // { __tag: 'foo', value: 20 }
 * ```
 *
 * This function comes very handy when dealing with pipelines
 *
 * @example
 * ```ts
 * import { option, pipe } from 'tiinvo';
 *
 * interface User {
 *    id: number;
 *    data?: UserData;
 * }
 *
 * interface UserData {
 *    age: number;
 *    name: string;
 *    surname: string;
 * }
 *
 * const mapuserdata = (user: User) => user.data!;
 * const mapuserdataname = (userdata: UserData) => userdata.name;
 *
 * const getname = pipe(
 *    option.fromfunction(mapuserdata),
 *    option.map(mapuserdataname),
 *    option.unwrapOr('no name')
 * );
 *
 * getname({ id: 100 }) // 'no name'
 * getname({ id: 50, data: { age: 433, name: 'Thomas', surname: 'Hobbes' } }) // 'Thomas'
 *
 * ```
 *
 * @param taggedfactory A tagged factory
 * @returns
 */
export const createderivefromfunction = <Tagname extends string>(
  taggedfactory: TaggedFactory<Tagname>
): (<Args extends [...any], K>(
  fn: (...args: Args) => K
) => (...args: Args) => Tagged<K, Tagname>) => (fn) => (...args) =>
  taggedfactory(fn(...args));
