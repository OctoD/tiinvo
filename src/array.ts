import { fallback, FnUnary } from './applicative';

/**
 * Gets an element in an array at a given index.
 * Returns undefined if nothing is found at that index.
 *
 * @example
 *
 * ```ts
 * const get2nd = eq(1);
 * get2nd([100, 200, 300]); // 200
 * ```
 *
 * @param {number} index
 * @returns
 */
export const eq = (index: number): (<T>(arg: T[]) => T | undefined) => (arg) =>
  arg[index];

/**
 * Returns true if every element in the array satisfy the given predicate.
 * @example
 *
 * ```ts
 * const everynumber = every(isnumber);
 * everynumber([1, 2, 3, 4])      // true
 * everynumber([1, 2, 3, 'nope']) // false
 * ```
 *
 * @returns
 */
export const every = <T>(fn: (arg: T) => boolean): ((arg: T[]) => boolean) => (
  arg
) => arg.every(fn);

/**
 * Gets an element in an array at a given index.
 * Returns `or` if nothing is found at that index.
 *
 * @example
 *
 * ```ts
 * const get100th = eqOr(100)(20);
 * get100th([100, 200, 300]); // 20
 * ```
 *
 * @param {number} index
 * @returns
 */
export const eqOr = (
  index: number
): (<T>(or: T) => (arg: T[]) => T | undefined) => (or) => (arg) =>
  arg[index] ?? or;

/**
 * Filters an array with the given predicate.
 *
 * @example
 *
 * ```ts
 * const onlyeven = filter((arg: number) => arg % 2 === 0);
 * onlyeven([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
 * ```
 *
 * @template T
 * @param {(arg: T) => boolean} fn
 * @returns
 */
export const filter = <T>(fn: (arg: T) => boolean): ((arg: T[]) => T[]) => (
  arg
) => arg.filter(fn);

/**
 * Returns the first valid element. If nothing is found returns undefined
 *
 * @example
 *
 * ```ts
 * const findhermione = find(predicate.withsamevalue('Hermione'));
 * findhermione(['Harry', 'Hermione', 'Ronald']) // 'Hermione'
 * findhermione(['Severus', 'Dumbledore', 'Tomarevaca']) // undefined
 * ```
 *
 * @template T
 * @param {(arg: T) => boolean} fn
 * @returns
 */
export const find = <T>(
  fn: (arg: T) => boolean
): ((arg: T[]) => T | undefined) => (arg) => arg.find(fn);

/**
 * Flatterns an array
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.flat([[1, 2], [3, 4]]) // [1, 2, 3, 4];
 * ```
 *
 * @param {(arg: T) => boolean} fn
 * @returns
 */
export const flat = <T>(arg: T[][]): T[] =>
  arg.reduce((accumulator, nextarr) => [...accumulator, ...nextarr], []);

/**
 * Flatterns an array
 * @deprecated use `flat` instead
 * @example
 *
 * ```ts
 * const flatnummatris = flattern();
 * flatnummatris([[1, 2], [3, 4]]) // [1, 2, 3, 4];
 * ```
 *
 * @param {(arg: T) => boolean} fn
 * @returns
 */
export const flattern = fallback(flat)

/**
 * Takes a list of functions, then call them passing the argument `Input` and returning an array of `Output`
 * 
 * @example
 * 
 * ```ts
 * import { array, pipe } from 'tiinvo';
 * 
 * const SHIPPING = 5;
 * const VAT = 20;
 * const keepprice = (price: number) => price;
 * const vat = (price: number) => (price / 100) * VAT;
 * const shipping = (price: number) => price > 200 ? 0 : SHIPPING;
 * 
 * const total = pipe(
 *    array.fromfunctions(keepprice, vat, shipping),
 *    array.reduce(0, (sum: number, next: number) => sum + next)
 * );
 * 
 * const price = 100;
 * 
 * total(price) // 125
 * total(price) === vat(price) + shipping(price) + price
 * ```
 * 
 * @template Input Function Input type
 * @template Output Function Output type
 * @param fns A list of functions
 */
export const fromfunctions = <Input, Output>(... fns: FnUnary<Input, Output>[]): (arg: Input) => Output[] =>
  arg => fns.map(fn => fn(arg));
  
/**
 * Gets first element of an array.
 * Returns undefined if the array is empty.
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.first([100, 200]) // 100
 * array.first([])         // undefined
 * ```
 *
 * @returns
 */
export const first = <T>(arg: T[]): T | undefined => arg[0];
  
/**
 * Gets first element of an array.
 * Returns undefined if the array is empty.
 * @deprecated use `first` instead
 * @example
 *
 * ```ts
 * getfirst()([100, 200]) // 100
 * ```
 *
 * @returns
 */
export const getfirst = fallback(first);

/**
 * Gets first element of an array.
 * Returns `or` if the array is empty.
 * @example
 *
 * ```ts
 * getfirstOr(20)([]) // 20
 * ```
 *
 * @template T
 * @param {T} or
 * @returns
 */
export const getfirstOr = <T>(or: T): ((arg: T[]) => T) => (arg) =>
  arg[0] ?? or;

/**
 * Gets the last element of an array.
 * Returns undefined if the array is empty.
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.last([100, 200]) // 100
 * array.last([])         // undefined
 * ```
 *
 * @returns
 */
export const last = <T>(arg: T[]): T | undefined =>
  arg[arg.length - 1];

/**
 * Gets last element of an array.
 * Returns undefined if the array is empty.
 * @deprecated use `last` instead
 * @example
 *
 * ```ts
 * getfirst()([100, 200]) // 100
 * ```
 *
 * @returns
 */
export const getlast = fallback(last);

/**
 * Returns the last element of an array or the given fallback.
 *
 *
 * @example
 *
 * ```ts
 * const lastnumber = getlastOr(0);
 * lastnumber([1, 2, 3]) // 3
 * lastnumber([]) // 0
 * ```
 *
 * @template T
 * @param {T} or
 * @returns
 */
export const getlastOr = <T>(or: T): ((arg: T[]) => T) => (arg) =>
  arg[arg.length - 1] ?? or;

/**
 * Returns true if an array is empty
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.empty([]) // true
 * array.empty([1]) // false
 * ```
 *
 * @returns
 */
export const empty = <T>(arg: T[]): boolean =>
  arg.length === 0;

/**
 * Returns true if an array is empty
 * @deprecated use `empty` instead
 * @example
 *
 * ```ts
 * isempty()([]) // true
 * isempty()([1]) // false
 * ```
 *
 * @returns
 */
export const isempty = fallback(empty)

/**
 * Returns true if an array is not empty
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.notempty([]) // false
 * array.notempty([1]) // true
 * ```
 *
 * @returns
 */
export const notempty = <T>(arg: T[]): boolean =>
  arg.length !== 0;

/**
 * Returns true if an array is not empty
 * @deprecated use `notempty` instead
 * @example
 *
 * ```ts
 * isempty()([]) // false
 * isempty()([1]) // true
 * ```
 *
 * @returns
 */
export const isnotempty = fallback(notempty)

/**
 * Checks if an element is inside an array
 * @example
 *
 * ```ts
 * const includes100 = includes(100);
 *
 * includes100([10, 20, 30, 100]) // true
 * includes100([10, 20, 30, 900]) // false
 * ```
 *
 * @returns
 */
export const includes = <T>(value: T): ((arg: T[]) => boolean) => (arg) =>
  arg.includes(value);

/**
 * Returns the array length
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * const test = [1, 2, 3, 4];
 *
 * array.len(test) // 4
 * ```
 *
 * @returns
 */
export const len = <T>(arg: T[]) => arg.length;

/**
 * Returns the array length
 * @deprecated use `len` instead
 * @example
 *
 * ```ts
 * const test = [1, 2, 3, 4];
 *
 * length()(test) // 4
 * ```
 *
 * @returns
 */
export const length = fallback(len);

/**
 * joins an array
 * @since 2.11.0
 * @example
 *
 * ```ts
 * const test = [1, 2, 3, 4];
 *
 * array.join(`-`)(test) // `1-2-3-4`
 * ```
 *
 * @returns
 */
export const join = (str: string): ((arg: unknown[]) => string) => (arg) => arg.join(str);

/**
 * Maps an array of elements `T` to an array of elements `Z`
 * @example
 *
 * ```ts
 * interface Person {
 *    age: number;
 *    name: string;
 * }
 *
 * const mapname = (person: Person) => person.name;
 * const mapnames = map(mapname);
 *
 * maptostring([{ name: 'John', age: 21 }, { name: 'Julia', age: 33 }]) // ['John', 'Julia']
 * ```
 *
 * @template T
 * @template Z
 * @param {(arg: T) => Z} fn
 * @returns
 */
export const map = <T, Z>(fn: (arg: T) => Z): ((arg: T[]) => Z[]) => (arg) =>
  arg.map(fn);

/**
 * Returns a random element `T` from an array `T[]`
 * @since 2.11.0
 * @example
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * const arr = [1, 2, 3]
 * arr.includes(arr.rand(arr)) // true
 * ```
 *
 * @returns
 */
export const rand = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

/**
 * Returns a random element `T` from an array `T[]`
 * @deprecated use `rand` instead
 * @example
 * ```ts
 * const arr = [1, 2, 3]
 * arr.includes(random()(arr)) // true
 * ```
 *
 * @returns
 */
export const random = fallback(rand);

/**
 * Aggregates all values in a single input.
 * This aggregation starts from the first to the last element.
 * @example
 *
 * ```ts
 * const sum = reduce(0, (prev, next: number) => prev + next);
 * sum([1, 2, 3]) // 6
 * ```
 *
 * @template T
 * @template Z
 * @param {Z} accumulator
 * @param {(arg: T) => Z} fn
 * @returns
 */
export const reduce = <T, Z>(
  accumulator: Z,
  fn: (total: Z, next: T) => Z
): ((arg: T[]) => Z) => (arg) => arg.reduce(fn, accumulator);

/**
 * Aggregates all values in a single input.
 * This aggregation starts from the last to the first element.
 * @example
 *
 * ```ts
 * const sum = reduce(0, (next, prev: number) => prev - next);
 * sum([1, 2, 3]) // 0
 * ```
 *
 * @template T
 * @template Z
 * @param {Z} accumulator
 * @param {(arg: T) => Z} fn
 * @returns
 */
export const reduceright = <T, Z>(
  accumulator: Z,
  fn: (total: Z, next: T) => Z
): ((arg: T[]) => Z) => (arg) => arg.reduceRight(fn, accumulator);

/**
 * Reverse an array
 * @since 2.11.0
 * @example
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.invert([1, 2, 3]) // [3, 2, 1]
 * ```
 *
 * @returns
 */
export const invert = <T>(arg: T[]): T[] => arg.reverse();

/**
 * Reverse an array
 * @deprecated use `invert` instead
 * @example
 *
 * ```ts
 * reverse()([1, 2, 3]) // [3, 2, 1]
 * ```
 *
 * @returns
 */
export const reverse = fallback(invert)

/**
 * Shuffles an array
 * @since 2.11.0
 *
 * ```ts
 * import { array } from 'tiinvo';
 * 
 * array.mix([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
 * ```
 *
 * @returns
 */
export const mix = <T>(arg: T[]): T[] => {
  const array = [].slice.call(arg);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

/**
 * Shuffles an array
 * @deprecated use `mix` instead
 *
 * ```ts
 * shuffle()([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
 * ```
 *
 * @returns
 */
export const shuffle = fallback(mix)

/**
 * Returns true if some elements in the array satisfy the given predicate.
 * @example
 *
 * ```ts
 * const somenumber = some(isnumber);
 * somenumber([1, 2, 3, 4]) // true
 * somenumber([null, undefined, 'nope']) // false
 * ```
 *
 * @returns
 */
export const some = <T>(fn: (arg: T) => boolean): ((arg: T[]) => boolean) => (
  arg
) => arg.some(fn);

/**
 * Sorts an array with the given comparing function.
 * @example
 *
 * ```ts
 * const sortdesc = sort((num1: number, num2: number) => num2 - num1);
 * sort([3, 5, 1, 2, 10, 21, 12, 20]) // [ 21, 20, 12, 10, 5, 3, 2, 1 ]
 *
 * ```
 *
 * @template {T}
 * @param {(arg1: T, arg2: T) => number} comparefn
 * @returns
 */
export const sort = <T>(
  comparefn: (arg1: T, arg2: T) => number
): ((arg: T[]) => T[]) => (arg) => arg.sort(comparefn);

/**
 * Takes only the first elements by `count`
 *
 * ```ts
 * const limit = 2;
 * const takefn = takefirstnth(limit)
 * const test = [1, 2, 3, 4];
 *
 * takefn(test) // [1, 2]
 *
 * ```
 *
 * @param count
 * @returns
 */
export const takefirstnth = (count: number): (<T>(arg: T[]) => T[]) => (arg) =>
  arg.filter((_, index) => index < count);

/**
 * Takes only the last elements by `count`
 *
 * ```ts
 * const limit = 2;
 * const takefn = takelastnth(limit)
 * const test = [1, 2, 3, 4];
 *
 * takefn(test) // [3, 4]
 *
 * ```
 *
 * @param count
 * @returns
 */
export const takelastnth = (count: number): (<T>(arg: T[]) => T[]) => (arg) =>
  arg.filter((_, index, array) => array.length - 1 - count < index);

/**
 * An unsafe cast to a type. Use it if TypeScript gives you a terrible headache.
 * Note that this operation is not type safe, since no conversion occurs at runtime.
 * If you want a real type conversion, use map instead.
 * 
 *
 * @template {T}
 * @returns
 */
export const unsafecast = <T>(): ((arg: unknown[]) => T[]) => (arg) =>
  (arg as unknown) as T[];
