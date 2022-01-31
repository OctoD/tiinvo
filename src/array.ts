import type * as f from './functors';
import type { option } from './option';
import type { result } from './result';
import type * as fn from './fn';

/**
 * Compares two arrays.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.cmp(['a'], ['a'])) // 0
 * console.log(a.cmp(['a'], ['b'])) // -1
 * console.log(a.cmp(['b'], ['a'])) // 1
 * console.log(a.cmp(['a'], ['a', 'b'])) // -1
 * console.log(a.cmp(['a', 'b'], ['a'])) // 1
 * console.log(a.cmp(['a', 'b'], ['a', 'b'])) // 0
 * console.log(a.cmp(['a', 'b', 'c'], ['a', 'b'])) // 1
 * console.log(a.cmp(['a', 'b', 'c'], ['a', 'b', 'c'])) // 0
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.eq(['a'], ['a'])) // true
 * console.log(a.eq(['a'], ['b'])) // false
 * console.log(a.eq(['b'], ['a'])) // false
 * console.log(a.eq(['a'], ['a', 'b'])) // false
 * console.log(a.eq(['a', 'b'], ['a'])) // false
 * console.log(a.eq(['a', 'b'], ['a', 'b'])) // true
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.isEmpty([])) // true
 * console.log(a.isEmpty(['a'])) // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const empty: f.predicateE<unknown[]> = a => a.length === 0;
/**
 * Returns if `a` is an array.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.guard([])) // true
 * console.log(a.guard(null)) // false
 * console.log(a.guard(undefined)) // false
 * console.log(a.guard(0)) // false
 * console.log(a.guard('')) // false
 * ```
 * 
 * @since 3.0.0
 */
export const guard = (a => Array.isArray(a)) as f.guard<unknown[]>
/**
 * Returns if `b` is an array of `a`.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * import * str a from 'tiinvo/str';
 * 
 * const isstrarr = a.guardOf(str.guard);
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.concat(['a'])(['b'])) // ['b', 'a']
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.contains('a')(['a'])) // true
 * console.log(a.contains('a')(['b'])) // false
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
 * import * as a from 'tiinvo/array';
 * import * as num from 'tiinvo/num';
 * 
 * const everyeven = a.every(num.iseven);
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.from([1, 2, 3])) // [1, 2, 3]
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.get(1)(['a', 'b', 'c'])) // 'b'
 * console.log(a.get(2)(['a'])) // Error('Index 2 is out of bounds for length 1')
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.filter(a => a === 'a')(['a', 'b'])) // ['a']
 * console.log(a.filter(a => a === 'b')(['a', 'b'])) // ['b']
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
 */
export const find = <a>(p: f.predicateE<a>) => (a: a[]) => a.find(p) as option<a>;
/**
 * Returns the first element of an array `a`. If the array is empty, returns `none`.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.first(['a', 'b'])) // 'a';
 * console.log(a.first([])) // null;
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
 * import * as a from 'tiinvo/array';
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
 * Flatterns an array
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.bflatten(['a', ['b', 'c']])) // ['a', 'b', 'c']
 * console.log(a.bflatten(['a', ['b', 'c'], 'd'])) // ['a', 'b', 'c', 'd']
 * ```
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const flat = <a>(a: a[][]) => a.reduce((ac, n) => [...ac, ...n], []);
/**
 * Calls all functions in the array `a` with the related index of arguments `b`.
 * @param a 
 * @returns 
 * @since 3.0.0
 */
export const fromfunctions = <a extends ((...args: any) => any)[]>(... a: a) => (b: fn.argsOfMany<a>) => a.map((c, i) => c((b)[i])) as unknown as fn.returnTypeOfMany<a>;
/**
 * Returns the last element of an array `a`. If the array is empty, returns `none`.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.last(['a', 'b'])) // 'b';
 * console.log(a.last([])) // null;
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
 * import * as a from 'tiinvo/array';
 * 
 * const lastor = a.lastOr(`not found`);
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.length(['a', 'b'])) // 2
 * console.log(a.length([])) // 0
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
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.join(' ')(['a', 'b', 'c'])) // 'a b c'
 * console.log(a.join('-')(['a', 'b', 'c'])) // 'a-b-c'
 * ```
 * 
 * @param char 
 * @returns 
 * @since 3.0.0
 */
export const join = (char: string) => <a>(a: a[]) => a.join(char);
/**
 * Maps an array of elements `a` to an array of elements `b` using the mapping function `f`.
 * 
 * ```typescript
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.map(a => a + '!')(['a', 'b', 'c'])) // ['a!', 'b!', 'c!']
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
 * import * as a from 'tiinvo/array';
 * import * as n from 'tiinvo/num';
 * 
 * console.log(a.none(n.isEven)([1, 2, 3])) // false
 * console.log(a.none(n.isEven)([1, 3, 5])) // true
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.of(1, 2, 3)) // [1, 2, 3]
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.random(['a', 'b', 'c'])) // 'a' or 'b' or 'c'
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
 * import * as a from 'tiinvo/array';
 * import * as n from 'tiinvo/num';
 * 
 * const red = a.reduce(n.badd);
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
 * import * as a from 'tiinvo/array';
 * import * as n from 'tiinvo/num';
 * 
 * const red = a.reduceright(n.bsubract);
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.reverse([1, 2, 3])) // [3, 2, 1]
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.shuffle([1, 2, 3])) // [1, 3, 2]
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
 * import * as a from 'tiinvo/array';
 * 
 * console.log(a.slice(1)([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
 * console.log(a.slice(1, 3)([1, 2, 3, 4, 5])) // [2, 3]
 * console.log(a.slice(undefined, 3)([1, 2, 3, 4, 5])) // [1, 2, 3]
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
 * import * as a from 'tiinvo/array';
 * import * as num from 'tiinvo/num';
 * 
 * const someeven = a.some(num.iseven);
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
 * import * as a from 'tiinvo/array';
 * import * as num from 'tiinvo/num';
 * 
 * console.log(a.sort(num.asc)([3, 2, 1])) // [1, 2, 3]
 * console.log(a.sort(num.desc)([1, 2, 3])) // [3, 2, 1]
 * ```
 * 
 * @param f 
 * @returns 
 */
export const sort = <a>(f: f.comparableE<a, a>) => (a: a[]) => a.sort(f);