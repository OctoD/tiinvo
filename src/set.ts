import type * as f from './functors'

/**
 * Set is a collection of unique values.
 */
export type set<a> = Set<a>;

/**
 * Adds a value to the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * const add = Set.add(s);
 * const has4 = Set.has(4);
 * 
 * has4(s); // false
 * 
 * add(4);
 * 
 * has4(s); // true
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.5.0
 */
export const add = <a>(s: set<a>) => (a: a) => s.add(a)

/**
 * Removes all values from the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * 
 * Set.size(s); // 3
 * Set.clear(s);
 * Set.size(s); // 0
 * ```
 * 
 * @param s 
 * @returns 
 * @since 3.5.0
 */
export const clear = <a>(s: set<a>) => s.clear()

/**
 * Concatenates two sets.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * const s2 = Set.make(4, 5, 6);
 * 
 * Set.concat(s1, s2); // Set(1, 2, 3, 4, 5, 6)
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.5.0
 */
export const concat = <a>(a: set<a>) => (b: set<a>) => make([...a].concat([...b]));

/**
 * Deletes a value from the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * 
 * Set.delete(1)(s); // Set(2, 3)
 * ```
 * 
 * @param a 
 * @returns 
 */
export const delete_ = <a>(a: a) => (s: set<a>) => s.delete(a)
export { delete_ as delete };

/**
 * Returns an iterable of [a,a] pairs for every value a in the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * 
 * Set.entries(s); // [[1,1], [2,2], [3,3]]
 * ```
 * 
 * @param s 
 * @returns 
 */
export const entries = <a>(s: set<a>) => s.entries()

/**
 * Checks if every value a in a set satisfies the predicate p.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * const s2 = Set.make(1, 2, 0);
 * const p = Set.every(Number.gt(0));
 * 
 * p(s1); // true
 * p(s2); // false
 * ```
 * 
 * @param p 
 * @returns 
 * @since 3.5.0
 */
export const every = <a>(p: f.predicateE<a>) => (a: set<a>) => toArray(a).every(p);

/**
 * Filters a set by a predicate.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.filter(Number.gt(0))(s1); // Set(1, 2, 3)
 * Set.filter(Number.lt(2))(s1); // Set(1)
 * ```
 * 
 * @param f 
 * @returns 
 * @since 3.5.0
 */
export const filter = <a>(f: f.predicateE<a>) => (b: set<a>) => {
  const s = new Set<a>();
  b.forEach(a => {
    if (f(a)) {
      s.add(a);
    }
  });
  return s;
}

/**
 * Loop over every value a in the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * 
 * Set.forEach(console.log)(s);
 * // 1
 * // 2
 * // 3
 * ```
 * 
 * @param a 
 * @returns 
 */
export const forEach = <a>(a: ((value: a, value2: a, set: set<a>) => void)) => (s: set<a>) => s.forEach(a)

/**
 * Checks if a is a set
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * Set.guard(Set.make(1, 2, 3)); // true
 * Set.guard(1); // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.5.0
 */
export const guard = (a: unknown): a is set<unknown> => Object.prototype.toString.call(a) === '[object Set]';

/**
 * Checks if a value is in the set and satisfies the a type guard.
 * 
 * ```typescript
 * import { Number, String, Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * const s2 = Set.make('pineapple', 'on pizza', 'is a huge mistake');
 * const numberSet = Set.guardOf(Number.guard);
 * const stringSet = Set.guardOf(String.guard);
 * 
 * console.log(numberSet(s1)); // true
 * console.log(numberSet(s2)); // false
 * console.log(stringSet(s2)); // true
 * console.log(stringSet(s1)); // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.5.0
 */
export const guardOf = <a>(a: f.guard<a>) => (b: unknown): b is set<a> => guard(b) && every(a)(b);

/**
 * Checks if a value is in the set.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.has(1)(s1); // true
 * Set.has(4)(s1); // false
 * ```
 * 
 * @param a 
 * @returns 
 * @since 3.5.0
 */
export const has = <a>(a: a) => (s: set<a>) => s.has(a)

/**
 * Intersects two sets
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * const s2 = Set.make(2, 3, 4);
 * 
 * Set.intersect(s1, s2); // Set(2, 3)
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.5.0
 */
export const intersect = <a, b>(a: set<a>, b: set<b>): set<a & b> => {
  const s = new Set<a & b>();
  a.forEach(x => b.has(x as a & b) && s.add(x as a & b));
  return s;
}

/**
 * Makes a new set from an array of values, from a single value, or from a list of arguments.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * Set.make(1, 2, 3); // Set(1, 2, 3)
 * Set.make(1); // Set(1)
 * Set.make([1, 2, 3, 4]); // Set(1, 2, 3, 4)
 * ```
 * 
 * @param args 
 * @param args2 
 * @returns 
 * @since 3.5.0
 */
export const make = <a>(args: a | readonly a[] | null, ... args2: readonly a[]): set<a> => args ? new Set(Array.isArray(args) ? args.concat(args2) : [args].concat(args2)) : new Set();

/**
 * Maps a function over a set.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.map(Number.uadd(1))(s1); // Set(2, 3, 4)
 * ```
 * 
 * @param map 
 * @returns 
 * @since 3.5.0
 */
export const map = <a, b>(map: f.map<a, b>) => (a: set<a>) => {
  const s = new Set<b>()
  a.forEach(v => s.add(map(v)))
  return s
}

/**
 * Checks if no values in the set satisfy the predicate.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.none(Number.gt(0))(s1); // false
 * Set.none(Number.lt(2))(s1); // false
 * Set.none(Number.gt(4))(s1); // true
 * ```
 * 
 * @param p 
 * @returns 
 * @since 3.5.0
 */
export const none = <a>(p: f.predicateE<a>) => (a: set<a>) => !toArray(a).some(p)

/**
 * Reduces a set to a single value.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.reduce(Number.badd, 0)(s1); // 6
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.5.0
 */
export const reduce = <a>(a: ((acc: a, value: a, set: set<a>) => a), b: a) => (s: set<a>) => {
  let acc = b;
  s.forEach(v => acc = a(acc, v, s));
  return acc;
}

/**
 * Reduces a set to a single value, starting from right.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(3, 2, 1);
 * 
 * Set.reduceRight(Number.bsub, 5)(s1); // -1
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.5.0
 */
export const reduceRight = <a>(a: ((acc: a, value: a, set: set<a>) => a), b: a) => (s: set<a>) => {
  let acc = b;
  let s1 = toArray(s);
  for (let i = s1.length - 1; i >= 0; i--) {
    acc = a(acc, s1[i], s);
  }
  return acc;
}

/**
 * Returns the size of a set
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.size(s1); // 3
 * ```
 * 
 * @param s 
 * @returns 
 * @since 3.5.0
 */
export const size = <a>(s: set<a>) => s.size

/**
 * Returns true if some values in the set satisfy the predicate.
 * 
 * ```typescript
 * import { Set, Number } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.some(Number.gt(0))(s1); // true
 * Set.some(Number.lt(2))(s1); // true
 * Set.some(Number.gt(4))(s1); // false
 * ```
 * @param p 
 * @returns 
 * @since 3.5.0
 */
export const some = <a>(p: f.predicateE<a>) => (a: set<a>) => toArray(a).some(p);

/**
 * Converts a set to an array.
 * 
 * ```typescript
 * import { Set } from 'tiinvo';
 * 
 * const s1 = Set.make(1, 2, 3);
 * 
 * Set.toArray(s1); // [1, 2, 3]
 * ```
 * 
 * @param s 
 * @returns 
 * @since 3.5.0
 */
export const toArray = <a>(s: set<a>) => Array.from(s);

/**
 * Returns a new set as the union of a and b sets.
 * 
 * ```ts
 * import { Set } from 'tiinvo';
 * 
 * const a = Set.make(1, 2, 3);
 * const b = Set.make(3, 4, 5);
 * 
 * Set.union(a, b); // Set(1, 2, 3, 4, 5)
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 * @since 3.5.0
 */
export const union = <a, b>(a: set<a>, b: set<b>): set<a | b> => {
  const s = new Set<a | b>();
  a.forEach(x => s.add(x));
  b.forEach(x => s.add(x));
  return s;
}

/**
 * Returns an iterable of values in the set.
 * 
 * ```ts
 * import { Set } from 'tiinvo';
 * 
 * const s = Set.make(1, 2, 3);
 * const v = Set.values(s);
 * 
 * for (const x of v) {
 *   console.log(x);
 * }  
 * 
 * // 1
 * // 2
 * // 3
 * ```
 * 
 * @param s 
 * @returns 
 * @since 3.5.0
 */
export const values = <a>(s: set<a>) => s.values()
