import type * as f from './functors';
import type * as o from './option';

/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export type left<a> = [a, o.none];

/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export type right<b> = [o.none, b];

/**
 * Represents a value of one of two possible types (a disjoint union).
 */
export type either<l, r> = left<l> | right<r>;

/**
 * Extracts `left<a>` type `a`
 */
export type leftType<a> = a extends either<infer b, any> ? b : null;

/**
 * Extracts `right<a>` type `a`
 */
export type rightType<a> = a extends either<any, infer b> ? b : null;

/**
 * Checks if `a` is `left<unknown>`
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.isLeft([1, null])).toBe(true);
 * expect(e.isLeft([null, 2])).toBe(false);
 * expect(e.isLeft([null, null])).toBe(false);
 * ```
 * 
 * @param a Either to check
 * @returns `true` if `a` is `left<unknown>`
 * @since 3.0.0
 */
export const isLeft = (a => Array.isArray(a) && a.length === 2 && a[0] !== undefined && a[0] !== null && (a[1] === undefined || a[1] === null)) as f.guard<left<unknown>>;

/**
 * Checks if `b` is `left<a>` if `b` is both `left` and it's value satisfies the `a` typeguard.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * import * as num from 'tiinvo/num';
 * 
 * const isnumleft = e.isLeft(num.guard);
 * 
 * expect(isnumleft([1, null])).toBe(true);
 * expect(isnumleft(["hello world", null])).toBe(false);
 * expect(isnumleft([null, 2])).toBe(false);
 * expect(isnumleft([null, null])).toBe(false);
 * ```
 * 
 * @param a The typeguard to check against
 * @param b Either to check
 * @returns `true` if `b` is `left<a>`
 * @since 3.0.0
 */
export const isLeftOf = <a>(a: f.guard<a>) => (b: unknown): b is left<a> => isLeft(b) && a(b[0]);

/**
 * Checks if `a` is `right<unknown>`
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.isRight([null, 2])).toBe(true);
 * expect(e.isRight([1, null])).toBe(false);
 * expect(e.isRight([null, null])).toBe(false);
 * ```
 * 
 * @param a Either to check
 * @returns `true` if `a` is `right<unknown>`
 * @since 3.0.0
 */
export const isRight = (a => Array.isArray(a) && a.length === 2 && (a[0] === undefined || a[0] === null) && a[1] !== undefined && a[1] !== null) as f.guard<right<unknown>>;

/**
 * Checks if `b` is `right<a>` if `b` is both `right` and it's value satisfies the `a` typeguard.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * import * as num from 'tiinvo/num';
 * 
 * const isnumright = e.isRight(num.guard);
 * 
 * expect(isnumright([null, 2])).toBe(true);
 * expect(isnumright([1, null])).toBe(false);
 * expect(isnumright([null, null])).toBe(false);
 * ```
 * 
 * @param a The typeguard to check against
 * @param b Either to check
 * @returns `true` if `b` is `right<a>`
 * @since 3.0.0
 */
export const isRightOf = <a>(a: f.guard<a>) => (b: unknown): b is right<a> => isRight(b) && a(b[1]);

/**
 * Checks if `a` is `either<unknown, unknown>`
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.isEither([1, null])).toBe(true);
 * expect(e.isEither([null, 2])).toBe(true);
 * expect(e.isEither([null, null])).toBe(false);
 * expect(e.isEither(`hello world`)).toBe(false);
 * ```
 * 
 * @param a Either to check
 * @returns `true` if `a` is `either<unknown, unknown>`
 * @since 3.0.0
 */
export const guard = (a => isLeft(a) || isRight(a)) as f.guard<either<unknown, unknown>>;

/**
 * Checks if `c` is `either<a, b>` and if `c` is `left` checks if it's value satisfies the `a` typeguard, otherwise if it's `right` checks if it's value satisfies the `b` typeguard.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * import * as num from 'tiinvo/num';
 * import * as str from 'tiinvo/str';
 * 
 * const g = e.guardOf(num.guard, str.guard);
 * 
 * expect(g([1, null])).toBe(true);
 * expect(g([null, "hello world"])).toBe(true);
 * expect(g([null, null])).toBe(false);
 * expect(g([null, 1])).toBe(false);
 * expect(g(["hello world", null])).toBe(false);
 * ```
 * 
 * @param a The typeguard to check against if `c` is left
 * @param b The typeguard to check against if `c` is right
 * @param c Either to check
 * 
 * @returns `true` if `c` is `either<a, b>` and if `c` is `left` checks if it's value satisfies the `a` typeguard, otherwise if it's `right` checks if it's value satisfies the `b` typeguard.
 * @since 3.0.0
 */
export const guardOf = <a, b>(a: f.guard<a>, b: f.guard<b>) => (c: unknown): c is either<a, b> => guard(c) && (isLeftOf(a)(c) || isRightOf(b)(c));

/**
 * Makes a `left<a>` from `a`
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.left(1)).toEqual([1, null]);
 * ```
 * 
 * @param a The value to make `left<a>`
 * @returns `left<a>`
 * @since 3.0.0
 */
export const left = <a>(a: a): left<a> => [a, null];

/**
 * Makes a `right<b>` from `b`
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.right(1)).toEqual([null, 1]);
 * ```
 * 
 * @param b The value to make `right<b>`
 * @returns `right<b>`
 */
export const right = <b>(b: b): right<b> => [null, b];

/**
 * Compares two `either`s
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.cmp([1, null], [1, null])).toBe(0);
 * expect(e.cmp([1, null], [null, 1])).toBe(-1);
 * ```
 * 
 * @param a The first `either` to compare
 * @param b The second `either` to compare
 * @returns `0` if `a` and `b` are equal, `-1` if `a` is less than `b`, `1` if `a` is greater than `b`
 * @since 3.0.0
 */
export const cmp: f.comparableE<either<unknown, unknown>, either<unknown, unknown>> = (a, b) => {
  const ga = guard(a);
  const gb = guard(b);
  
  if (ga && gb) {
    const gla = isLeft(a);
    const glb = isLeft(b);
    const gra = isRight(a);
    const grb = isRight(b);
    
    if (gla && glb) {
      return a[0] === b[0] ? 0 : (a[0] as any) < (b[0] as any) ? -1 : 1;
    } else if (gla && grb) {
      return -1;
    } else if (gra && glb) {
      return 1;
    } else {
      return a[1] === b[1] ? 0 : (a[1] as any) < (b[1] as any) ? -1 : 1;
    }
  } else if (ga && !gb) {
    return 1;
  } else if (!ga && gb) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * Returns `true` if the value of two eithers are equal
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.eq([1, null], [1, null])).toBe(true);
 * expect(e.eq([2, null], [1, null])).toBe(false);
 * expect(e.eq([1, null], [null, 1])).toBe(false);
 * ```
 * 
 * @param a The first `either` to compare
 * @param b The second `either` to compare
 * @returns `true` if the value of two eithers are equal
 * 
 * @since 3.0.0
 */
export const eq: f.equatableE<either<unknown, unknown>> = (a, b) => cmp(a, b) === 0;

/**
 * Filters an `either<a, b>` if it's `left` by a given predicate `f`. 
 * If the predicate returns `true` the `left<a>` is kept, otherwise it's dropped.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.filter([1, null], a => a === 1)).toEqual([1, null]);
 * expect(e.filter([1, null], a => a === 2)).toEqual([null, null]);
 * ```
 * 
 * @param f The predicate to filter by
 * @param a The `either<a, b>` to filter
 * @returns `a` if `f` returns `true`, `left<a>` otherwise
 * 
 * @since 3.0.0
 */
export const filterLeft = <a>(f: f.predicateE<a>) => <b>(a: either<a, b>) => isLeft(a) && f(a[0]) ? [a[0], null] : [null, a[1]];

/**
 * Filters an `either<a, b>` if it's `right` by a given predicate `f`.
 * If the predicate returns `true` the `right<b>` is kept, otherwise it's dropped.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.filter([null, 1], a => a === 1)).toEqual([null, 1]);
 * expect(e.filter([null, 1], a => a === 2)).toEqual([null, null]);
 * ```
 * 
 * @param f The predicate to filter by
 * @param a The `either<a, b>` to filter
 * @returns `a` if `f` returns `true`, `right<b>` otherwise
 * 
 * @since 3.0.0
 */
export const filterRight = <a>(f: f.predicateE<a>) => <b>(a: either<b, a>) => isRight(a) && f(a[1]) ? [null, a[1]] : [a[0], null];

/**
 * Folds an `either<a, b>` into a single value `c` if it's either `left<a>` or `right<b>`, otherwise it's dropped.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.fold(a => a + 1, b => b * 2)([1, null])).toBe(2);
 * expect(e.fold(a => a + 1, b => b * 2)([null, 2])).toBe(4);
 * ```
 * 
 * @param ml The `unary<a, c>` function to fold `left<a>` by
 * @param mr The `unary<a, c>` function to fold `right<b>` by
 * @param a The `either<a, b>` to fold
 * @returns The folded value `c`
 * 
 * @since 3.0.0
 */
export const fold = <l, r, a>(ml: f.map<l, a>, mr: f.map<r, a>) => (a: either<l, r>) => {
  if (guard(a)) {
    return isLeft(a) ? ml(a[0]) : mr(a[1]);
  }

  throw new Error(`either.fold: either is neither left nor right`);
}

/**
 * Maps a `left<a>` into a `left<b>` by a given mapper `f` if `left<a>`, otherwise it's dropped.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.mapLeft(a => a + 1)([1, null])).toEqual([2, null]);
 * expect(e.mapLeft(a => a + 1)([null, 2])).toEqual([null, null]);
 * ```
 * 
 * @param f The mapper to map `left<a>` by
 * @param a The `either<a, b>` to map `left<a>` by
 * @returns The mapped `left<b>`
 * 
 * @since 3.0.0
 */
export const mapLeft = <a, b>(m: f.map<a, b>) => (a: either<a, unknown>): either<b, unknown> => isLeft(a) ? [m(a[0]), null] : [null, null];

/**
 * Maps a `left<a>` into a `left<b>` by a given mapper `f` if `left<a>`, otherwise returns a `left<b>` with the specified fallback value `or`.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.mapLeftOr(0, a => a + 1)([1, null])).toEqual([2, null]);
 * expect(e.mapLeftOr(0, a => a + 1)([null, 2])).toEqual([0, null]);
 * ```
 * 
 * @param or The fallback value to map `left<a>` by
 * @param f The mapper to map `left<a>` by
 * @param a The `either<a, b>` to map `left<a>` by
 * @returns The mapped `left<b>`
 * 
 * @since 3.0.0
 */
export const mapLeftOr = <a, b>(or: b, m: f.map<a, b>) => (a: either<a, unknown>) => isLeft(a) ? [m(a[0]), null] : [or, null];

/**
 * Maps a `left<a>` into a `left<b>` by a given mapper `f` if `left<a>`, otherwise calls `or` and returns a `left<b>` with the result.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * const or = () => 0;
 * 
 * expect(e.mapLeftOrElse(or, a => a + 1)([1, null])).toEqual([2, null]);
 * expect(e.mapLeftOrElse(or, a => a + 1)([null, 2])).toEqual([0, null]);
 * ```
 * 
 * @param or The fallback nullary function to map `left<a>` by
 * @param f The mapper to map `left<a>` by
 * @param a The `either<a, b>` to map `left<a>` by
 * @returns The mapped `left<b>`
 * 
 * @since 3.0.0
 */
export const mapLeftOrElse = <a, b>(or: f.map<void, b>, m: f.map<a, b>) => (a: either<a, unknown>): either<b, unknown> => isLeft(a) ? [m(a[0]), null] : [or(), null];

/**
 * Maps a `right<a>` into a `right<b>` by a given mapper `f` if `right<a>`, otherwise it's dropped.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.mapRight(a => a + 1)([null, 2])).toEqual([null, 3]);
 * expect(e.mapRight(a => a + 1)([1, null])).toEqual([null, null]);
 * ```
 * 
 * @param f The mapper to map `right<a>` by
 * @param a The `either<a, b>` to map `right<a>` by
 * @returns The mapped `right<b>`
 * 
 * @since 3.0.0
 */
export const mapRight = <a, b>(m: f.map<a, b>) => (a: either<unknown, a>): either<unknown, b> => isRight(a) ? [null, m(a[1])] : [null, null];

/**
 * Maps a `right<a>` into a `right<b>` by a given mapper `f` if `right<a>`, otherwise returns a `right<b>` with the specified fallback value `or`.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.mapRightOr(0, a => a + 1)([null, 2])).toEqual([null, 3]);
 * expect(e.mapRightOr(0, a => a + 1)([1, null])).toEqual([null, 0]);
 * ```
 * 
 * @param or The fallback value to map `right<a>` by
 * @param f The mapper to map `right<a>` by
 * @param a The `either<a, b>` to map `right<a>` by
 * @returns The mapped `right<b>`
 * 
 * @since 3.0.0
 */
export const mapRightOr = <a, b>(or: b, m: f.map<a, b>) => (a: either<unknown, a>): either<unknown, b> => isRight(a) ? [null, m(a[1])] : [null, or];

/**
 * Maps a `right<a>` into a `right<b>` by a given mapper `f` if `right<a>`, otherwise calls `or` and returns a `right<b>` with the result.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * const or = () => 0;
 * 
 * expect(e.mapRightOrElse(or, a => a + 1)([null, 2])).toEqual([null, 3]);
 * expect(e.mapRightOrElse(or, a => a + 1)([1, null])).toEqual([null, 0]);
 * ```
 * 
 * @param or The fallback nullary function to map `right<a>` by
 * @param f The mapper to map `right<a>` by
 * @param a The `either<a, b>` to map `right<a>` by
 * @returns The mapped `right<b>`
 * 
 * @since 3.0.0
 */
export const mapRightOrElse = <a, b>(or: f.map<void, b>, m: f.map<a, b>) => (a: either<unknown, a>): either<unknown, b> => isRight(a) ? [null, m(a[1])] : [null, or()];

/**
 * Swaps the `left<a>` and `right<b>` of an `either<a, b>`.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.swap(e.left('a'))).toEqual(e.right('a'));
 * expect(e.swap(e.right('b'))).toEqual(e.left('b'));
 * ```
 * 
 * @param a The `either<a, b>` to swap
 * @returns The swapped `either<b, a>`
 * 
 * @since 3.0.0
 */
export const swap = <l, r>(either: either<l, r>): either<r, l> => isLeft(either) ? right(either[0]) : left(either[1]);

/**
 * Unwraps the `left<a>` of an `either<a, b>` if it's `left<a>`, otherwise throws.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.unwrapLeft(e.left('a')).toBe('a');
 * expect(() => e.unwrapLeft(e.right('b'))).toThrow();
 * ```
 * 
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `a`
 * 
 * @since 3.0.0
 */
export const unwrapLeft = <a>(a: either<a, unknown>): a | never => isLeft(a) ? a[0] : (() => { throw 'a is not left' })();

/**
 * Unwraps the `left<a>` of an `either<a, b>` if it's `left<a>`, otherwise returns the fallback value `or`.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.unwrapLeftOr('a', e.right('b'))).toBe('a');
 * expect(e.unwrapLeftOr('a', e.left('b'))).toBe('b');
 * ```
 * 
 * @param or The fallback value to unwrap `left<a>` by
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `a` or the fallback value
 * 
 * @since 3.0.0
 */
export const unwrapLeftOr = <a>(or: a) => (a: either<a, unknown>) => isLeft(a) ? a[0] : or;

/**
 * Unwraps the `left<a>` of an `either<a, b>` if it's `left<a>`, otherwise calls `or` and returns the result.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * const or = () => 'a';
 * 
 * expect(e.unwrapLeftOrElse(or, e.right('b'))).toBe('a');
 * expect(e.unwrapLeftOrElse(or, e.left('b'))).toBe('b');
 * ```
 * 
 * @param or The fallback nullary function to unwrap `left<a>` by
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `a` or the result of `or`
 * 
 * @since 3.0.0
 */
export const unwrapLeftOrElse = <a>(or: f.map<void, a>) => (a: either<a, unknown>) => isLeft(a) ? a[0] : or();

/**
 * Unwraps the `right<b>` of an `either<a, b>` if it's `right<b>`, otherwise throws.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.unwrapRight(e.right('b'))).toBe('b');
 * expect(() => e.unwrapRight(e.left('a'))).toThrow();
 * ```
 * 
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `b`
 * 
 * @since 3.0.0
 */
export const unwrapRight = <a>(a: either<unknown, a>): a | never => isRight(a) ? a[1] : (() => { throw 'a is not right' })();

/**
 * Unwraps the `right<b>` of an `either<a, b>` if it's `right<b>`, otherwise returns the fallback value `or`.
 *  
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * expect(e.unwrapRightOr('b', e.left('a'))).toBe('b');
 * expect(e.unwrapRightOr('b', e.right('a'))).toBe('a');
 * ```
 * 
 * @param or The fallback value to unwrap `right<b>` by
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `b` or the fallback value
 * 
 * @since 3.0.0
 */
export const unwrapRightOr = <a>(or: a) => (a: either<unknown, a>): a => isRight(a) ? a[1] : or;

/**
 * Unwraps the `right<b>` of an `either<a, b>` if it's `right<b>`, otherwise calls `or` and returns the result.
 * 
 * ```typescript
 * import * as e from 'tiinvo/either';
 * 
 * const or = () => 'b';
 * 
 * expect(e.unwrapRightOrElse(or, e.left('a'))).toBe('b');
 * expect(e.unwrapRightOrElse(or, e.right('a'))).toBe('a');
 * ```
 * 
 * @param or The fallback nullary function to unwrap `right<b>` by
 * @param a The `either<a, b>` to unwrap
 * @returns The unwrapped `b` or the result of `or`
 * 
 * @since 3.0.0
 */
export const unwrapRightOrElse = <a>(or: f.map<void, a>) => (a: either<unknown, a>): a => isRight(a) ? a[1] : or();
