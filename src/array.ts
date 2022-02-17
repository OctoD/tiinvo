import type * as f from './functors';
import type { option } from './option';
import type { result } from './result';
import type * as fn from './fn';

/**
 * Compares two arrays.
 * 
 * ```typescript
 * import { Array } from 'tiinvo';
 * 
 * console.log(Array.cmp(['a'], ['a'])) // 0
 * console.log(Array.cmp(['a'], ['b'])) // -1
 * console.log(Array.cmp(['b'], ['a'])) // 1
 * console.log(Array.cmp(['a'], ['a', 'b'])) // -1
 * console.log(Array.cmp(['a', 'b'], ['a'])) // 1
 * console.log(Array.cmp(['a', 'b'], ['a', 'b'])) // 0
 * console.log(Array.cmp(['a', 'b', 'c'], ['a', 'b'])) // 1
 * console.log(Array.cmp(['a', 'b', 'c'], ['a', 'b', 'c'])) // 0
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const cmp: f.comparableE<unknown[], unknown[]> = <a, b>(a: a, b: b): -1 | 0 | 1 => ((a === null || a === undefined) && (b === null || b === undefined)) ? 0 : a as any > b as any ? 1 : a as any < b as any ? -1 : 0
/**
 * Returns true if two arrays are identical.
 * 
 * ```typescript
 * import { Array } from 'tiinvo';
 * 
 * console.log(Array.eq(['a'], ['a'])) // true
 * console.log(Array.eq(['a'], ['b'])) // false
 * console.log(Array.eq(['b'], ['a'])) // false
 * console.log(Array.eq(['a'], ['a', 'b'])) // false
 * console.log(Array.eq(['a', 'b'], ['a'])) // false
 * console.log(Array.eq(['a', 'b'], ['a', 'b'])) // true
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const eq: f.equatableE<unknown[]> = (a, b) => a.length === b.length && cmp(a, b) === 0;
/**
 * Returns true if the array `a` is empty.
 * 
 * ```typescript
 * import { Array } from 'tiinvo';
 * 
 * console.log(Array.empty([])) // true
 * console.log(Array.empty(['a'])) // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const empty: f.predicateE<unknown[]> = a => a.length === 0;
/**
 * Returns true if `a` is an array.
 * 
 * ```typescript
 * import { Array } from 'tiinvo';
 * 
 * console.log(Array.guard([])) // true
 * console.log(Array.guard(null)) // false
 * console.log(Array.guard(undefined)) // false
 * console.log(Array.guard(0)) // false
 * console.log(Array.guard('')) // false
 * ```
 * 
 * @since 3.0.0
 */
export const guard = (a => Array.isArray(a)) as f.guard<unknown[]>
/**
 * Returns true if `b` is an array of `a`.
 * 
 * ```typescript
 * import { Array, Str } from 'tiinvo';
 * 
 * const isstrarr = Array.guardOf(Str.guard);
 * 
 * console.log(isstrarr([])) // true
 * console.log(isstrarr(['a'])) // true
 * console.log(isstrarr(['a', 'b'])) // true
 * console.log(isstrarr(['a', 'b', 'c'])) // true
 * console.log(isstrarr(['a', 'b', 'c', 1])) // false
 * ````
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const guardOf = <a>(a: f.guard<a>) => (b => Array.isArray(b) && b.every(a)) as f.guard<a[]>
/**
 * Concates `b` and `a` without modifying the original arrays.
 * 
 * ```typescript
 * import { Array } from 'tiinvo';
 * 
 * console.log(Array.concat(['a'])(['b'])) // ['b', 'a']
 * ```
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const concat = <a>(a: a[]) => (b: a[]) => b.concat(a);
/**
 * Returns true if an array `b` contains `a`.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.contains('a')(['a'])) // true
 * console.log(Array.contains('a')(['b'])) // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const contains = <a>(a: a) => (b: a[]) => b.indexOf(a) >= 0;
/**
 * Determines whether all the members of an array `a` satisfy the specified predicate `p`.
 * 
 * ```typescript
 * import { Array, Num } 'tiinvo';
 * 
 * const everyeven = Array.every(Num.iseven);
 * 
 * console.log(everyeven([2, 4, 6])) // true
 * console.log(everyeven([2, 4, 5])) // false
 * ```
 * 
 * @param p 
 * @returns 
 * @since 3.0.0
 */
export const every = <a>(p: f.predicateE<a>) => (a: a[]) => a.every(p);
/**
 * Creates an array from an array-like object.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.from([1, 2, 3])) // [1, 2, 3]
 * console.log(Array.from(new Set([1, 2, 3]))) // [1, 2, 3]
 * ```
 * 
 * @param a
 * @returns
 * @since 3.0.8
 */
export const from = Array.from;
/**
 * Returns the element `result<a>` at index `i` of an array `a[]`. 
 * 
 * ```ts
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.get(1)(['a', 'b', 'c'])) // 'b'
 * console.log(Array.get(2)(['a'])) // Error('Index 2 is out of bounds for length 1')
 * ```
 * 
 * @param i 
 * @returns 
 * @since 3.0.0
 */
export const get = (i: number) => <a>(a: a[]): result<a> => {
  if (i > 0 && i < a.length) {
    return a[i];
  }

  return new Error(`Index out of bounds ${i} for length ${a.length}`);
};
/**
 * Returns the elements of an array `a` that meet the condition specified in a predicate `p`.
 * 
 * ```typescript
 * import { Array, Predicate } 'tiinvo';
 * 
 * console.log(Array.filter(Predicate.eq('a'))(['a', 'b'])) // ['a']
 * console.log(Array.filter(Predicate.eq('b'))(['a', 'b'])) // ['b']
 * ```
 * 
 * @param p 
 * @returns 
 * @since 3.0.0
 */
export const filter = <a>(p: f.predicateE<a>) => (a: a[]) => a.filter(p);
/**
 * Returns the value of the first `option<a>` in the array `a` where predicate `p` is true.
 * @param p 
 * @returns 
 * @since 3.0.0
 * 
 * ```ts
 * import { Array, Num } 'tiinvo';
 * 
 * const p = Num.gt(1);
 * 
 * console.log(Array.find(p)([1, 2, 3])) // 2
 * ```
 */
export const find = <a>(p: f.predicateE<a>) => (a: a[]) => a.find(p) as option<a>;
/**
 * Returns the first element of an array `a`. If the array is empty, returns `none`.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.first(['a', 'b'])) // 'a';
 * console.log(Array.first([])) // null;
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const first = <a>(a: a[]) => a[0] as option<a>
/**
 * Returns the first element of an array `b` or `a` if the array is empty.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * const firstor = a.firstOr(`not found`);
 * 
 * console.log(firstor(['a', 'b'])) // 'a'
 * console.log(firstor([])) // `not found`
 * ```
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const firstOr = <a>(a: a) => (b: a[]) => b[0] ?? a;
/**
 * Maps an array `a` by removing all elements that do not satisfy the predicate `p`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * const fm = Array.filtermap(Number.umul(2), Number.gt(3));
 * 
 * fm([1, 2, 3, 4, 5]) // [6, 8, 10]
 * ```
 * 
 * @param f 
 * @param p 
 * @returns 
 * @since 3.2.0
 */
export const filtermap = <a, b>(f: f.map<a, b>, p: f.predicateE<a>) => (a: a[]) => {
  const r = [] as b[];

  for (let i = 0; i < a.length; i++) {
    const v = a[i];

    if (p(v)) {
      r.push(f(v));
    }
  }

  return r;
}
/**
 * Flatterns an array
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.flat(['a', ['b', 'c']])) // ['a', 'b', 'c']
 * console.log(Array.flat(['a', ['b', 'c'], 'd'])) // ['a', 'b', 'c', 'd']
 * ```
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const flat = <a>(a: a[][]) => a.reduce((ac, n) => [...ac, ...n], []);
/**
 * Maps a matrix `a[][]` to a `b[]` using the mapping function `f`.
 * 
 * ```typescript
 * import { Array, Str } from 'tiinvo';
 * 
 * const map = Array.flatmap(Str.length);
 * 
 * console.log(map([['abc'], ['cdef']])) // [3, 4]
 * ```
 * 
 * @param f 
 * @returns 
 * 
 * @since 3.0.10
 */
export const flatmap = <a, b>(f: f.map<a, b>) => (a: a[][]): b[] => flat(a.map(e => e.map(f)));
/**
 * Calls all functions in the array `a` with the related index of arguments `b`.
 * @param a 
 * @returns 
 * @since 3.0.0
 * 
 * ```ts
 * import { Array, Num, Str } 'tiinvo';
 * 
 * console.log(Array.fromfunctions([Num.add(1), Str.upper])([1, 'a'])) // ['2', 'A']
 * ```
 */
export const fromfunctions = <a extends ((...args: any) => any)[]>(... a: a) => (b: fn.argsOfMany<a>) => a.map((c, i) => c((b)[i])) as unknown as fn.returnTypeOfMany<a>;
/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.includes('a')(['a', 'b'])) // true
 * console.log(Array.includes('c')(['a', 'b'])) // false
 * ```
 * 
 * @param a 
 * @returns 
 * 
 * @since 3.2.0
 */
export const includes = <a>(a: a) => (b: a[]) => b.includes(a);
/**
 * Returns the last element of an array `a`. If the array is empty, returns `none`.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.last(['a', 'b'])) // 'b';
 * console.log(Array.last([])) // null;
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const last = <a>(a: a[]) => a[a.length - 1] as option<a>;
/**
 * Returns the last element of an array `b` or `a` if the array is empty.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * const lastor = Array.lastOr(`not found`);
 * 
 * console.log(lastor(['a', 'b'])) // 'b'
 * console.log(lastor([])) // `not found`
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const lastOr = <a>(a: a) => (b: a[]) => b[b.length - 1] ?? a;
/**
 * Gets the length of the array. This is a number one higher than the highest index in the array.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.length(['a', 'b'])) // 2
 * console.log(Array.length([])) // 0
 * ```
 * 
 * @param a 
 * @returns 
 * 
 * @since 3.0.8
 */
export const length = <a>(a: a[]) => a.length;
/**
 * Adds all the elements of an array into a string, separated by the specified separator string.
 * 
 * By default the `separator` is an empty string.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.join()(['a', 'b', 'c'])) // 'abc'
 * console.log(Array.join(' ')(['a', 'b', 'c'])) // 'a b c'
 * console.log(Array.join('-')(['a', 'b', 'c'])) // 'a-b-c'
 * ```
 * 
 * @param separator 
 * @returns 
 * @since 3.0.0
 */
export const join = (separator: string = "") => <a>(a: a[]) => a.join(separator);
/**
 * Maps an array of elements `a` to an array of elements `b` using the mapping function `f`.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.map(a => a + '!')(['a', 'b', 'c'])) // ['a!', 'b!', 'c!']
 * ```
 * 
 * @param f 
 * @returns 
 * @since 3.0.0
 */
export const map = <a, b>(f: f.map<a, b>) => (a: a[]) => a.map(f);
/**
 * Returns true if all elements of `a` do not meet the condition specified in the predicate `p`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * console.log(Array.none(Number.isEven)([1, 2, 3])) // false
 * console.log(Array.none(Number.isEven)([1, 3, 5])) // true
 * ```
 * 
 * @param p 
 * @returns 
 */
export const none = <a>(p: f.predicateE<a>) => (a: a[]) => !a.some(p);
/**
 * Returns a new array from a set of elements.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.of(1, 2, 3)) // [1, 2, 3]
 * ```
 * 
 * @param a
 * 
 * @returns
 * @since 3.0.8
 */
export const of = Array.of;
/**
 * Returns a random element of an array `a`.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.random(['a', 'b', 'c'])) // 'a' or 'b' or 'c'
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const rand = <a>(a: a[]) => a[Math.floor(Math.random() * a.length)];
/**
 * Aggregates array of type `a[]` into a value of type `b` using a function `f`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * const red = Array.reduce(Number.badd);
 * 
 * console.log(red(0)([1, 2, 3])) // 6
 * ```
 * 
 * @param f 
 * @returns 
 * @since 3.0.0
 */
export const reduce = <a, b>(f: (p: b, c: a, i: number, al: a[]) => b) => (ac: b) => (a: a[]) => a.reduce(f, ac);
/**
 * Aggregates array of type `a[]` into a value of type `b` using a function `f`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * const red = Array.reduceright(Number.bsub);
 * 
 * console.log(red(0)([1, 2, 3])) // -6
 * ```
 * 
 * @param f 
 * @returns 
 * @since 3.0.0
 */
export const reduceright = <a, b>(f: (p: b, c: a, i: number, al: a[]) => b) => (ac: b) => (a: a[]) => a.reduceRight(f, ac);
/**
 * Reverses the elements in an array in place without mutating the original array.
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.reverse([1, 2, 3])) // [3, 2, 1]
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const reverse = <a>(a: a[]) => {
  const b: a[] = [];
  for (let i = a.length; i > 0; i--) { b[a.length - 1 - i] = a[i]; }
  return b
}
/**
 * Shuffles an array
 * 
 * ```typescript
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.shuffle([1, 2, 3])) // [1, 3, 2]
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const shuffle = <a>(a: a[]) => {
  const b: a[] = [].slice.call(a);

  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
}
/**
 * Returns a slice of an array `a` from `start` to `end`.
 * 
 * ```typescript
 * 
 * import { Array } 'tiinvo';
 * 
 * console.log(Array.slice(1)([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
 * console.log(Array.slice(1, 3)([1, 2, 3, 4, 5])) // [2, 3]
 * console.log(Array.slice(undefined, 3)([1, 2, 3, 4, 5])) // [1, 2, 3]
 * ```
 * 
 * @param start 
 * @param end 
 * @returns 
 * @since 3.0.0
 */
export const slice = (start: number | void, end: number | void) => <a>(a: a[]) => a.slice(start ?? 0, end ?? a.length);
/**
 * Determines whether some members of an array `a` satisfy the specified predicate `p`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * const someeven = Array.some(Number.isEven);
 * 
 * console.log(someeven([2, 4, 6])) // true
 * console.log(someeven([2, 4, 5])) // true
 * console.log(someeven([1, 3, 7])) // false
 * ```
 * 
 * @param p 
 * @returns 
 * @since 3.0.0
 */
export const some = <a>(p: f.predicateE<a>) => (a: a[]) => a.some(p);
/**
 * Sorts an array of elements `a` using the specified comparator `f`.
 * 
 * ```typescript
 * import { Array, Number } 'tiinvo';
 * 
 * console.log(Array.sort(Number.asc)([3, 2, 1])) // [1, 2, 3]
 * console.log(Array.sort(Number.desc)([1, 2, 3])) // [3, 2, 1]
 * ```
 * 
 * @param f 
 * @returns 
 */
export const sort = <a>(f: f.comparableE<a, a>) => (a: a[]) => a.sort(f);