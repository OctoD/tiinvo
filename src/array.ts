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
 * @example
 *
 * ```ts
 * const flatnummatris = flattern<number>();
 * flatnummatris([[1, 2], [3, 4]]) // [1, 2, 3, 4];
 * ```
 *
 * @template T
 * @param {(arg: T) => boolean} fn
 * @returns
 */
export const flattern = <T>(): ((arg: T[][]) => T[]) => (arg) =>
  arg.reduce((accumulator, nextarr) => [...accumulator, ...nextarr], []);

/**
 * Gets first element of an array.
 * Returns undefined if the array is empty.
 * @example
 *
 * ```ts
 * getfirst()([100, 200]) // 100
 * ```
 *
 * @returns
 */
export const getfirst = (): (<T>(arg: T[]) => T | undefined) => (arg) => arg[0];

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
export const getfirstOr = <T>(or: T): ((arg: T[]) => T | undefined) => (arg) =>
  arg[0] ?? or;

/**
 * Gets last element of an array.
 * Returns undefined if the array is empty.
 * @example
 *
 * ```ts
 * getfirst()([100, 200]) // 100
 * ```
 *
 * @returns
 */
export const getlast = (): (<T>(arg: T[]) => T | undefined) => (arg) =>
  arg[arg.length - 1];

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
export const getlastOr = <T>(or: T): ((arg: T[]) => T | undefined) => (arg) =>
  arg[arg.length - 1] ?? or;

/**
 * Returns true if an array is empty
 * @example
 *
 * ```ts
 * isempty()([]) // true
 * isempty()([1]) // false
 * ```
 *
 * @returns
 */
export const isempty = (): ((arg: unknown[]) => boolean) => (arg) =>
  arg.length === 0;

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
export const length = (): ((arg: unknown[]) => number) => (arg) => arg.length;

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
 *
 * @example
 * ```ts
 * const arr = [1, 2, 3]
 * arr.includes(random()(arr)) // true
 * ```
 *
 * @returns
 */
export const random = (): (<T>(arg: T[]) => T) => (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

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
 * @example
 *
 * ```ts
 * reverse()([1, 2, 3]) // [3, 2, 1]
 * ```
 *
 * @returns
 */
export const reverse = (): (<T>(arg: T[]) => T[]) => (arg) => arg.reverse();

/**
 * Shuffles an array
 *
 * ```ts
 * shuffle()([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
 * ```
 *
 * @returns
 */
export const shuffle = (): (<T>(arg: T[]) => T[]) => (arg) => {
  const array = [].slice.call(arg);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

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
 *
 * @template {T}
 * @returns
 */
export const unsafecast = <T>(): ((arg: unknown[]) => T[]) => (arg) =>
  (arg as unknown) as T[];
