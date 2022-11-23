import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Option from './Option.js';

export type t = string;

export type StringReplacer = t | RegExp | Fn.Unary<t, t>;
export type StringSearcher = t | {
  [Symbol.search](string: string): number;
};
export type StringSplitter = t | {
  [Symbol.split](string: string, limit?: number | undefined): string[];
};

//#region guards

export const guard: Functors.Guardable<t> = (x): x is t => typeof x === 'string';

//#endregion

//#region comparables

/**
 * Compares two strings `a` and `b`.
 * 
 * Returns:
 * 
 *    - 1 if `a` is greater than `b`
 *    - 0 if `a` is same of `b`
 *    - -1 if `b` is greater than `a`
 * 
 * **Important**: strings are compared as is, no lowercasing is applied
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.cmp('a', 'a')  // 0
 * Str.cmp('a', 'b')  // -1
 * Str.cmp('b', 'a')  // 1
 * ```
 *  
 * @since 4.0.0
 */
export function cmp(a: t, b: t): Functors.ComparableResult;
/**
 * Compares two strings `a` and `b`.
 * 
 * Returns:
 * 
 *    - 1 if `a` is greater than `b`
 *    - 0 if `a` is same of `b`
 *    - -1 if `b` is greater than `a`
 * 
 * **Important**: strings are compared as is, no lowercasing is applied
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.cmp('a', 'a')  // 0
 * Str.cmp('a', 'b')  // -1
 * Str.cmp('b', 'a')  // 1
 * ```
 *  
 * @since 4.0.0
 */
export function cmp(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function cmp(a: t, b?: t): any {
  const _cmp = (x: t, y: t) => x > y ? 1 : x < y ? -1 : 0;

  if (guard(a) && guard(b)) {
    return _cmp(a, b);
  }

  return (b: t) => _cmp(b, a);
};

/**
 * Returns `true` if two strings are the same
 * 
 * **Important**: strings are compared as is, no lowercasing is applied
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.eq('a', 'a')  // true
 * Str.eq('a', 'b')  // false
 * Str.eq('b', 'a')  // false
 * ```
 *  
 * @since 4.0.0
 */
export function eq(a: t, b: t): boolean;
/**
 * Returns `true` if two strings are the same
 * 
 * **Important**: strings are compared as is, no lowercasing is applied
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.eq('a', 'a')  // true
 * Str.eq('a', 'b')  // false
 * Str.eq('b', 'a')  // false
 * ```
 *  
 * @since 4.0.0
 */
export function eq(a: t): Fn.Unary<t, boolean>
export function eq(a: t, b?: t): any {
  if (guard(a) && guard(b)) {
    return a === b;
  }

  return (b: t) => b === a;
}

//#endregion

//#region sortables

/**
 * Compares two strings `a` and `b` if `b` is defined, otherwise returns a 
 * `Unary<string, string>` function which once called compares `b` and `a`
 * 
 * Great to sort a string array in ASC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const collection = ['a', 'd', 'c', 'e', 'F', 'A'];
 * 
 * collection.sort(Str.asc) // [ "A", "F", "a", "c", "d", "e" ]
 * ```
 * 
 * @since 4.0.0
 */
export function asc(a: t, b: t): Functors.ComparableResult;
export function asc(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function asc(a: t, b?: any): any {
  if (guard(b)) {
    return cmp(a, b);
  }

  return (b: string) => cmp(b, a);
}

/**
 * Compares two strings `a` and `b` if `b` is defined, otherwise returns a 
 * `Unary<string, string>` function which once called compares `b` and `a`
 * 
 * Great to sort a string array in DESC direction.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const collection = ['a', 'd', 'c', 'e', 'F', 'A'];
 * 
 * collection.sort(Str.desc) // [ "e", "d", "c", "a", "F", "A" ]
 * ```
 * 
 * @since 4.0.0
 */
export function desc(a: t, b: t): Functors.ComparableResult;
export function desc(a: t): Fn.Unary<t, Functors.ComparableResult>;
export function desc(a: t, b?: any): any {
  if (guard(b)) {
    return cmp(b, a);
  }

  return (b: string) => cmp(a, b);
}

//#endregion

//#region native methods

/**
 * Formats a string to camel case.
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.camel('hello world'); // 'helloWorld'
 * ```
 * @param b 
 * @returns 
 * 
 * @since 4.0.0
 */
export const camel: Fn.Unary<t, t> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase());

/**
 * Returns the character `Option.t<string>` at the specified index.
 * 
 * If `a` and `b` parameters are passed, `b` is the char position for string `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and `a` is the char position for string `b`.
 * 
 * **Important**: if the index is out of range, then `None` is returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.charAt("hello", 0)         // "h"
 * Str.charAt("hello", 10)        // null
 * Str.charAt(0)("hello")         // "h" 
 * ```
 * 
 * @since 4.0.0
 */
export function charAt(a: t, b: number): Option.T<t>;
export function charAt(a: number): Fn.Unary<t, Option.T<t>>;
export function charAt(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    const c = a.charAt(b);
    return c === "" ? null : c;
  } else if (typeof a !== 'number') {
    return (_: never) => null;
  }

  return (b: t) => {
    const c = b.charAt(a);
    return c === "" ? null : c;
  };
}

/**
 * Returns the char code `Option.t<string>` at the specified index.
 * 
 * If `a` and `b` parameters are passed, `b` is the char position for string `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and `a` is the char code position for string `b`.
 * 
 * **Important**: if the index is out of range, then `None` is returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.charCodeAt("hello", 0)         // 104
 * Str.charCodeAt("hello", 10)        // null
 * Str.charCodeAt(0)("hello")         // 104 
 * ```
 * 
 * @since 4.0.0
 */
export function charCodeAt(a: t, b: number): Option.T<t>;
export function charCodeAt(a: number): Fn.Unary<t, Option.T<t>>;
export function charCodeAt(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    const c = a.charCodeAt(b);
    return c >= 0 ? c : null;
  } else if (typeof a !== 'number') {
    return (_: never) => null;
  }

  return (b: t) => {
    const c = b.charCodeAt(a);
    return c >= 0 ? c : null;
  };
}

/**
 * Returns a string chars array
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.chars('hello'); // ['h','e','l','l','o']
 * ```
 * 
 * @since 4.0.0
 */
export const chars: Fn.Unary<t, t[]> = a => a.split('');

/**
 * Returns a concatenated string.
 * 
 * If `a` and `b` parameters are passed, then the result is `a + b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b + a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.concat("hello", "world")         // "helloworld"
 * Str.concat("world")("hello")         // "helloworld"
 * ```
 * 
 * @since 4.0.0
 */
export function concat(a: t, b: t): t;
export function concat(a: t): Fn.Unary<t, t>;
export function concat(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.concat(b);
  }

  return (b: t) => b.concat(a);
}

/**
 * Returns if a string terminates with another one.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` ends with `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.endsWith("hello", "o")         // true
 * Str.endsWith("o")("hello")         // true
 * ```
 * 
 * @since 4.0.0
 */
export function endsWith(a: t, b: t): boolean;
export function endsWith(a: t): Fn.Unary<t, boolean>;
export function endsWith(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.endsWith(b);
  }

  return (b: string) => b.endsWith(a);
}

/**
 * Returns if a string includes another one.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` ends with `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.includes("hello", "o")         // true
 * Str.includes("o")("hello")         // true
 * ```
 * 
 * @since 4.0.0
 */
export function includes(a: t, b: t): boolean;
export function includes(a: t): Fn.Unary<t, boolean>;
export function includes(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.includes(b);
  }

  return (b: string) => b.includes(a);
}

/**
 * Returns the position of the first occurrence of `a` in `b`.
 * 
 * If `a` and `b` parameters are passed, then the result is the position of `b` in `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is the position of `a` in `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.indexOf("hello", "l")         // 2
 * Str.indexOf("hello", "l", 3)      // 3
 * Str.indexOf("l")("hello")         // 2
 * Str.indexOf("l")("hello", 3)      // 3
 * ```
 * 
 * @since 4.0.0
 */
export function indexOf(a: t, b: t, i?: number): Option.T<number>;
export function indexOf(a: t): (b: t, i?: number) => Option.T<number>;
export function indexOf(a: any, b?: any, i?: number): any {
  if (guard(a) && guard(b)) {
    return a.indexOf(b, i);
  }

  return (b: t, i: number) => b.indexOf(a, i);
}
/**
 * Returns last string position of 'b' in 'a'.
 * 
 * If `a` and `b` parameters are passed, then the result is `b` last position `a`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `a` last position `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.lastIndexOf("hello", "l")         // 3
 * Str.lastIndexOf("l")("hello")         // 3
 * ```
 * 
 * @since 4.0.0
 */
export function lastIndexOf(a: t, b: t, p?: number): Option.T<number>;
export function lastIndexOf(a: t): (b: t, p?: number) => Option.T<number>;
export function lastIndexOf(a: any, b?: any, p?: any): any {
  if (guard(a) && guard(b)) {
    return a.lastIndexOf(b, p);
  }

  return (b: t, p?: number) => b.lastIndexOf(a, p);
}

/**
 * Returns a string length
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.length('hello'); // 5
 * ```
 * 
 * @since 4.0.0
 */
export const length: Fn.Unary<t, number> = a => a.length;

/**
 * Returns an array of lines in a string.
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.lines('hello\nworld'); // ['hello', 'world']
 * ```
 * 
 * @param b
 * @returns
 * 
 * @since 4.0.0
 * 
 */
export const lines: Fn.Unary<t, t[]> = x => x.split(/\r?\n/);

/**
 * Returns a lowercased string 
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.lower('HELLO'); // "hello"
 * ```
 * 
 * @since 4.0.0
 */
export const lower: Fn.Unary<t, t> = a => a.toLowerCase();

/**
 * Returns if a string includes another one.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` ends with `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.match("hello", "o")         // ['o']
 * Str.match("o")("hello")         // ['o']
 * ```
 * 
 * @since 4.0.0
 */
export function match(a: t, b: t | RegExp): Option.T<RegExpMatchArray>;
export function match(a: t | RegExp): Fn.Unary<t, Option.T<RegExpMatchArray>>;
export function match(a: any, b?: any): any {
  if (guard(a) && (guard(b) || b instanceof RegExp)) {
    return a.match(b);
  }

  return (b: string) => b.match(a);
}

/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` padded by `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` padded by `a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.padEnd("a", 5)         // "a    "
 * Str.padEnd("a", 5, "b")    // "abbbb"
 * Str.padEnd(5)("a")         // "a    "
 * Str.padEnd(5, "b")("a")    // "abbbb"
 * Str.padEnd(5)("a", "b")    // "abbbb"
 * ```
 * 
 * @since 4.0.0
 */
export function padEnd(a: t, b: number, c?: t): t;
export function padEnd(a: number): (b: t, d?: t) => t;
export function padEnd(a: number, b?: t): (b: t) => t;
export function padEnd(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.padEnd(b, c);
  }

  return (x: string, y?: string) => x.padEnd(a, b ?? y);
}

/**
 * Formats a string to pascal case.
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.pascal('hello world'); // 'HelloWorld'
 * ```
 * @param b 
 * @returns 
 */
export const pascal: Fn.Unary<t, t> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());

/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` padded by `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` padded by `a`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.padStart("a", 5)         // "    a"
 * Str.padStart("a", 5, "b")    // "bbbba"
 * Str.padStart(5)("a")         // "    a"
 * Str.padStart(5, "b")("a")    // "bbbba"
 * Str.padStart(5)("a", "b")    // "bbbba"
 * ```
 * 
 * @since 4.0.0
 */
export function padStart(a: t, b: number, c?: t): t;
export function padStart(a: number): (b: t, d?: t) => t;
export function padStart(a: number, b?: t): (b: t) => t;
export function padStart(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.padStart(b, c);
  }

  return (x: string, y?: string) => x.padStart(a, b ?? y);
}

/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned
 * 
 * If `a` and `b` parameters are passed, then the result is `a` repeated by `b` times.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` repeated by `a` times.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.repeat("a", 5)         // "aaaaa"
 * Str.repeat(5)("a")         // "aaaaa"
 * ```
 * 
 * @since 4.0.0
 */
export function repeat(a: t, b: number): t;
export function repeat(a: number): (b: t) => t;
export function repeat(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.repeat(b);
  }

  return (b: string) => b.repeat(a);
}

/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned
 * 
 * If `a` and `b` parameters are passed, then the result is `a` repeated by `b` times.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` repeated by `a` times.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.replace("hello", "l", "e")         // "heelo"
 * Str.replace("l", "e")("hello")         // "heelo"
 * ```
 * 
 * @since 4.0.0
 */
export function replace(a: t, b: t, c: StringReplacer): t;
export function replace(a: t, b: StringReplacer): (b: t) => t;
export function replace(a: any, b?: any, c?: any): any {
  if (guard(a) && guard(b) && typeof c !== 'undefined') {
    return a.replace(b, c);
  }

  return (x: t) => x.replace(a, b);
}

/**
 * Reverses a string.
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.reverse('hello'); // 'olleh'
 * ```
 * 
 * @since 4.0.0
 */
export const reverse: Fn.Unary<t, t> = a => a.split('').reverse().join('');

/**
 * Finds the first substring match in a regular expression search.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` is searched by `b`.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.
 * 
 * **Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.search("hello", "l")         // 2
 * Str.search("l")("hello")         // 2
 * ```
 * 
 * @since 4.0.0
 */
export function search(a: t, b: StringSearcher): Option.T<number>;
export function search(a: StringSearcher): (b: t) => Option.T<number>;
export function search(a: any, b?: any): any {
  const m: Functors.Mappable<number, Option.T<number>> = x => x >= 0 ? x : null;

  if (guard(a) && typeof b !== 'undefined') {
    return m(a.search(b));
  }

  return (b: t) => m(b.search(a));
}

/**
 * Returns a section of a string.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` a slice to `b`.
 * 
 * If `a` and `b` and `c` parameters are passed, then the result is `a` a slice from `b` ending to `c` position.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.
 * 
 * **Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.slice("hello", 1)         // "ello"
 * Str.slice("hello", 1, 3)      // "el"
 * Str.slice(1)("hello")         // "ello"
 * Str.slice(1, 3)("hello")      // "el"
 * ```
 * 
 * @since 4.0.0
 */
export function slice(a: t, b: number, c?: number): string;
export function slice(a: number, b?: number): (b: t) => string;
export function slice(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.slice(b, c);
  }

  return (x: t, y?: number) => x.slice(a, b ?? y);
}

/**
 * Returns a section of a string.
 * 
 * If `a` and `b` parameters are passed, then the result is `a` a slice to `b`.
 * 
 * If `a` and `b` and `c` parameters are passed, then the result is `a` a slice from `b` ending to `c` position.
 * 
 * If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.
 * 
 * **Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.split("hello world", " ")         // ["hello", "world"]
 * Str.split(" ")("hello world")         // ["hello", "world"]
 * Str.split(" ", 1)("hello world")      // ["hello"]
 * ```
 * 
 * @since 4.0.0
 */
export function split(a: t, b: StringSplitter, c?: t): t[];
export function split(a: StringSplitter, b?: number): Fn.Unary<t, t[]>;
export function split(a: any, b?: any, c?: any): any {
  if (guard(a) && (guard(b) || b instanceof RegExp || (!!b && typeof b === 'object' && Symbol.split in b))) {
    return a.split(b, c);
  }

  return (x: t, y?: number) => x.split(a, b ?? y);
}

/**
 * Trims a string.
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.trim('    hello world    '); // 'hello world'
 * ```
 * 
 * @since 4.0.0
 */
export const trim: Fn.Unary<t, t> = a => a.trim();

/**
 * Trims a string at it's end.
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.trimEnd('    hello world    '); // '    hello world'
 * ```
 * 
 * @since 4.0.0
 */
export const trimEnd: Fn.Unary<t, t> = a => a.trimEnd();

/**
 * Trims a string at it's start.
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.trimStart('    hello world    '); // 'hello world    '
 * ```
 * 
 * @since 4.0.0
 */
export const trimStart: Fn.Unary<t, t> = a => a.trimStart();

/**
 * Returns a uppercased string 
 * 
 * @example
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.upper('hello'); // "HELLO"
 * ```
 * 
 * @since 4.0.0
 */
export const upper: Fn.Unary<t, t> = a => a.toUpperCase();

/**
 * Returns an array of words in a string.
 * 
 * ```typescript
 * import { Str } from 'tiinvo';
 * 
 * Str.words('hello world'); // ['hello', 'world']
 * ```
 * 
 * @param b
 * @returns
 * 
 * @since 4.0.0
 */
export const words: Fn.Unary<t, t[]> = x => x.split(/\s+/m);

//#endregion
