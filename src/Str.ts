import type * as Fn from './Fn.js';
import type * as Functors from './Functors.js';
import type * as Option from './Option.js';

/**
 * The type alias for string
 *
 * @since 4.0.0
 */
export type T = string;

/**
 * A replacer argument. 
 * 
 * It could be either:
 * - a string
 * - a regular expression
 * - a unary function which accepts a string and returns a string
 *
 * @since 4.0.0
 */
export type StringReplacer = T | RegExp | Fn.Unary<T, T>;
/**
 * A string searcher argument 
 *
 * @since 4.0.0
 */
export type StringSearcher = T | {
  [Symbol.search](string: string): number;
};
/**
 * A string splitter argument 
 *
 * @since 4.0.0
 */
export type StringSplitter = T | {
  [Symbol.split](string: string, limit?: number | undefined): string[];
};

//#region guards

/**
 * Checks if a value `x` is a string `T`
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.guard(10)            // false
 * Str.guard({})            // false
 * Str.guard([])            // false
 * Str.guard(null)          // false
 * Str.guard("hello world") // true
 * ```
 *
 * @param x the value to check
 * @returns 
 *  - true if `x` is a string `T`
 *  - false otherwise
 * @group Guardables
 * @since 4.0.0
 */
export const guard: Functors.Guardable<T> = (x): x is T => typeof x === 'string';

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
 * @param a the first string
 * @param b the last string
 * @returns
 *    - 1 if `a` is greater than `b`
 *    - 0 if `a` is same of `b`
 *    - -1 if `b` is greater than `a`
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T, b: T): Functors.ComparableResult;
/**
 * Returns a unary function which compares two strings `b` and `a`.
 * 
 * **Important**: strings are compared as is, no lowercasing is applied
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const cmpB = Str.cmp('b')
 * 
 * cmpB('a')  // -1
 * cmpB('b')  // 0
 * cmpB('c')  // 1
 * ```
 *  
 * @param a the left-hand compared string
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function cmp(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function cmp(a: T, b?: T): any {
  const _cmp = (x: T, y: T) => x > y ? 1 : x < y ? -1 : 0;

  if (guard(a) && guard(b)) {
    return _cmp(a, b);
  }

  return (b: T) => _cmp(b, a);
};

/**
 * Returns `true` if two strings are equal.
 * 
 * **Important**: strings are compared as is, no lowercasing is applied.
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.eq('a', 'a')  // true
 * Str.eq('a', 'b')  // false
 * Str.eq('b', 'a')  // false
 * ```
 *  
 * @param a the first string
 * @param a the last string
 * @returns 
 *  - `true` if `a` equals to `b`
 *  - `false` otherwise
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T, b: T): boolean;
/**
 * Returns a unary function which checks if two strings are equal.
 * 
 * **Important**: strings are compared as is, no lowercasing is applied.
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.eq('a', 'a')  // true
 * Str.eq('a', 'b')  // false
 * Str.eq('b', 'a')  // false
 * ```
 *  
 * @param a the first string
 * @returns the unary function
 * @group Comparables
 * @since 4.0.0
 */
export function eq(a: T): Fn.Unary<T, boolean>;
export function eq(a: T, b?: T): any {
  if (guard(a) && guard(b)) {
    return a === b;
  }

  return (b: T) => b === a;
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
export function asc(a: T, b: T): Functors.ComparableResult;
export function asc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function asc(a: T, b?: any): any {
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
export function desc(a: T, b: T): Functors.ComparableResult;
export function desc(a: T): Fn.Unary<T, Functors.ComparableResult>;
export function desc(a: T, b?: any): any {
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
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.camel('hello world'); // 'helloWorld'
 * ```
 * 
 * @param a the string
 * @returns the camelCased string
 * @group Natives
 * @since 4.0.0
 */
export const camel: Fn.Unary<T, T> = a => a.replace(/\s(.)/g, (_, c) => c.toUpperCase());

/**
 * Returns the character `Option.t<string>` at the specified index.
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
 * ```
 * 
 * @param a the string
 * @param b the char index
 * @returns 
 *  - `Option.Some<T>` if a char is found at position `b`
 *  - `Option.None` otherwise
 * @group Natives
 * @since 4.0.0
 */
export function charAt(a: T, b: number): Option.T<T>;
/**
 * Returns a `Unary<string, string>` function which returns the char at position `a`
 * 
 * **Important**: if the index is out of range, then `None` is returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.charAt(0)("hello")         // "h" 
 * ```
 * 
 * @param a the index
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function charAt(a: number): Fn.Unary<T, Option.T<T>>;
export function charAt(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    const c = a.charAt(b);
    return c === "" ? null : c;
  } else if (typeof a !== 'number') {
    return (_: never) => null;
  }

  return (b: T) => {
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
 * ```
 * 
 * @param a the string
 * @param b the index
 * @returns 
 *  - `Option.Some<number>` the char code at position `b` if any
 *  - `Option.None` otherwise
 * @group Natives
 * @since 4.0.0
 */
export function charCodeAt(a: T, b: number): Option.T<number>;
/**
 * Returns a `Unary<string, string>` function which checks and returns the 
 * char code `Option.Some<number>` at position `a` if any.
 * 
 * **Important**: if the index is out of range, then `None` is returned.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.charCodeAt(0)("hello")         // 104 
 * ```
 * 
 * @param a the index
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function charCodeAt(a: number): Fn.Unary<T, Option.T<number>>;
export function charCodeAt(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    const c = a.charCodeAt(b);
    return c >= 0 ? c : null;
  } else if (typeof a !== 'number') {
    return (_: never) => null;
  }

  return (b: T) => {
    const c = b.charCodeAt(a);
    return c >= 0 ? c : null;
  };
}

/**
 * Returns an array of characters.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.chars('hello'); // ['h','e','l','l','o']
 * ```
 * 
 * @param a the string
 * @returns the array of characters
 * @group Natives
 * @since 4.0.0
 */
export const chars: Fn.Unary<T, T[]> = a => a.split('');

/**
 * Concatenates two strings in one.
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
 * @param a the first string
 * @param b the last string
 * @returns the concatenated string
 * @group Natives
 * @since 4.0.0
 */
export function concat(a: T, b: T): T;
/**
 * Returns a unary function which concatenates two strings in one.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.concat("world")("hello")         // "helloworld"
 * ```
 * 
 * @param a the last string
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function concat(a: T): Fn.Unary<T, T>;
export function concat(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.concat(b);
  }

  return (b: T) => b.concat(a);
}

/**
 * Checks if a string terminates with another one.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.endsWith("hello", "o")         // true
 * ```
 * 
 * @param a the string
 * @param b the ending string
 * @returns
 *  - true if `a` includes `b` at it's end
 *  - false otherwise
 * @group Natives
 * @since 4.0.0
 */
export function endsWith(a: T, b: T): boolean;
/**
 * Returns a unary function which checks if a string terminates with another one.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const endsWithO = Str.endsWith("o")
 * 
 * endsWithO("hello")         // true
 * endsWithO("world")         // false
 * ```
 * 
 * @param a the ending string
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function endsWith(a: T): Fn.Unary<T, boolean>;
export function endsWith(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.endsWith(b);
  }

  return (b: string) => b.endsWith(a);
}

/**
 * Returns if a string includes another one.
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
 * @param a the string
 * @param b the string to search
 * @returns 
 *  - `true` if `a` includes `b`
 *  - `false` otherwise
 * @group Natives
 * @since 4.0.0
 */
export function includes(a: T, b: T): boolean;
/**
 * Returns a unary function which checks if a string includes another one.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const includesO = Str.includes("o")
 * 
 * includesO("hello")         // true
 * includesO("barbaz")        // false
 * ```
 * 
 * @param a the string
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function includes(a: T): Fn.Unary<T, boolean>;
export function includes(a: any, b?: any): any {
  if (guard(a) && guard(b)) {
    return a.includes(b);
  }

  return (b: string) => b.includes(a);
}

/**
 * Returns the position of the first occurrence of `a` in `b`.
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
 * @param a the string
 * @param b the string to search
 * @param i The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 * @returns 
 *  - `Option.Some<number>` if found
 *  - `Option.None` if not found
 * @group Natives
 * @since 4.0.0
 */
export function indexOf(a: T, b: T, i?: number): Option.T<number>;
/**
 * Returns a binary function which returns the position of the first occurrence of `a` in `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const lpos = Str.indexOf("l");
 * 
 * lpos("hello")         // 2
 * lpos("hello", 3)      // 3
 * ```
 * 
 * @param a the string
 * @returns the binary function
 * @group Natives
 * @since 4.0.0
 */
export function indexOf(a: T): (b: T, i?: number) => Option.T<number>;
export function indexOf(a: any, b?: any, i?: number): any {
  if (guard(a) && guard(b)) {
    return a.indexOf(b, i);
  }

  return (b: T, i: number) => b.indexOf(a, i);
}

/**
 * Returns last position of a string 'b' in string 'a'.
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
 * @param a the string
 * @param b the string to search
 * @param p The index at which to begin searching. If omitted, the search begins at the end of the string.
 * @returns 
 *  - `Option.Some<number>` if found
 *  - `Option.None` otherwise
 * @group Natives
 * @since 4.0.0
 */
export function lastIndexOf(a: T, b: T, p?: number): Option.T<number>;
/**
 * Returns a binary function which checks the last position of a string 'a' in string 'b'.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.lastIndexOf("l")("hello")         // 3
 * ```
 * 
 * @param a the string to search
 * @returns the binary function
 * @group Natives
 * @since 4.0.0
 */
export function lastIndexOf(a: T): (b: T, p?: number) => Option.T<number>;
export function lastIndexOf(a: any, b?: any, p?: any): any {
  if (guard(a) && guard(b)) {
    return a.lastIndexOf(b, p);
  }

  return (b: T, p?: number) => b.lastIndexOf(a, p);
}

/**
 * Returns a string length
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.length('hello'); // 5
 * ```
 * 
 * @param a the string
 * @returns the length of the string `a`
 * @group Natives
 * @since 4.0.0
 */
export const length: Fn.Unary<T, number> = a => a.length;

/**
 * Returns an array of lines in a string.
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.lines('hello\nworld'); // ['hello', 'world']
 * ```
 * 
 * @param x the string
 * @returns the array containing the lines
 * @group Natives
 * @since 4.0.0
 * 
 */
export const lines: Fn.Unary<T, T[]> = x => x.split(/\r?\n/);

/**
 * Returns a lowercased string 
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.lower('HELLO'); // "hello"
 * ```
 * 
 * @param a the string
 * @returns the lowercased string
 * @group Natives
 * @since 4.0.0
 */
export const lower: Fn.Unary<T, T> = a => a.toLowerCase();

/**
 * Returns if a string `a` includes another string `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.match("hello", "o")         // ['o']
 * Str.match("hello", "k")         // null
 * ```
 * 
 * @param a the string
 * @param b the string or regular expression to search
 * @returns
 *  -  `Option.Some<RegExpMatchArray>` if some is found
 *  -  `Option.None` otherwise
 * @group Natives
 * @since 4.0.0
 */
export function match(a: T, b: T | RegExp): Option.T<RegExpMatchArray>;
/**
 * Returns a unary function which checks if a string `a` includes another string `b`.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const matcho = Str.match("o");
 * 
 * matcho("hello")          // ['o']
 * matcho("pizza")          // null
 * ```
 * 
 * @param a the string or regular expression to search
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function match(a: T | RegExp): Fn.Unary<T, Option.T<RegExpMatchArray>>;
export function match(a: any, b?: any): any {
  if (guard(a) && (guard(b) || b instanceof RegExp)) {
    return a.match(b);
  }

  return (b: string) => b.match(a);
}

/**
 * Pads the current string with a given string (possibly repeated) 
 * so that the resulting string reaches a given length. 
 * 
 * The padding is applied from the end (right) of the current string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.padEnd("a", 5)         // "a    "
 * Str.padEnd("a", 5, "b")    // "abbbb"
 * ```
 * 
 * @param a the string
 * @param b the pad size
 * @param c the string to use to pad
 * @returns the padded string
 * @group Natives
 * @since 4.0.0
 */
export function padEnd(a: T, b: number, c?: T): T;
/**
 * Returns a binary function which pads the current string with a given 
 * string (possibly repeated) so that the resulting string reaches a given length. 
 * 
 * The padding is applied from the end (right) of the current string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const padEnd5 = Str.padEnd(5);
 * 
 * padEnd5("a")         // "a    "
 * padEnd5("a", "b")    // "abbbb"
 * ```
 * 
 * @param a the padsize
 * @returns the binary function
 * @group Natives
 * @since 4.0.0
 */
export function padEnd(a: number): (b: T, d?: T) => T;
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
 * @group Natives
 * @since 4.0.0
 */
export function padEnd(a: number, b?: T): (b: T) => T;
export function padEnd(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.padEnd(b, c);
  }

  return (x: string, y?: string) => x.padEnd(a, b ?? y);
}

/**
 * Formats a string to pascal case.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.pascal('hello world'); // 'HelloWorld'
 * ```
 * 
 * @param a the string
 * @returns the PascalCased string 
 * @group Natives
 * @since 4.0.0
 */
export const pascal: Fn.Unary<T, T> = a => a.replace(/\s(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());

/**
 * Pads the current string with a given string (possibly repeated) so that 
 * the resulting string reaches a given length. 
 * 
 * The padding is applied from the start (left) of the current string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.padStart("a", 5)         // "    a"
 * Str.padStart("a", 5, "b")    // "bbbba"
 * ```
 * 
 * @param a the string
 * @param b the pad size
 * @param c the fill string
 * @returns the padded string
 * @group Natives
 * @since 4.0.0
 */
export function padStart(a: T, b: number, c?: T): T;
/**
 * Returns a binary function which pads the current string with a 
 * given string (possibly repeated) so that * the resulting string 
 * reaches a given length. 
 * 
 * The padding is applied from the start (left) of the current string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const padStart5 = Str.padStart(5);
 * 
 * padStart5("a")         // "    a"
 * padStart5("a", "b")    // "bbbba"
 * ```
 * 
 * @param a the pad size
 * @returns the binary function
 * @group Natives
 * @since 4.0.0
 */
export function padStart(a: number): (c: T, d?: T) => T;
/**
 * Returns a binary function which pads the current string with a 
 * given string (possibly repeated) so that * the resulting string 
 * reaches a given length. 
 * 
 * The padding is applied from the start (left) of the current string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const padStart5 = Str.padStart(5, "b");
 * 
 * padStart5("a")         // "bbbba"
 * ```
 * 
 * @param a the pad size
 * @returns the binary function
 * @group Natives
 * @since 4.0.0
 */
export function padStart(a: number, b?: T): (c: T) => T;
export function padStart(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.padStart(b, c);
  }

  return (x: string, y?: string) => x.padStart(a, y ?? b);
}

/**
 * Returns a String value that is made from count copies appended together. 
 * If count is 0, an empty string is returned.
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
 * @param a the string to repeat
 * @param b the repetition count
 * @returns the repeated string
 * @group Natives
 * @since 4.0.0
 */
export function repeat(a: T, b: number): T;
/**
 * Returns a unary function which repeats a string `b` many times as specified in `a`. 
 * If count is 0, an empty string is returned.
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
 * @param a the repetition count
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function repeat(a: number): (b: T) => T;
export function repeat(a: any, b?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.repeat(b);
  }

  return (b: string) => b.repeat(a);
}

/**
 * Replaces text in a string, using a regular expression or search string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.replace("hello", "l", "e")         // "heelo"
 * ```
 * 
 * @param a the string
 * @param b the the string to replace
 * @param c the replacer
 * @returns the replaced string
 * @group Natives
 * @since 4.0.0
 */
export function replace(a: T, b: T, c: StringReplacer): T;
/**
 * Returns a unary function which replaces text in a string, 
 * using a regular expression or search string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.replace("l", "e")("hello")         // "heelo"
 * ```
 * 
 * @param a the the string to replace
 * @param b the replacer
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function replace(a: T, b: StringReplacer): (b: T) => T;
export function replace(a: any, b?: any, c?: any): any {
  if (guard(a) && guard(b) && typeof c !== 'undefined') {
    return a.replace(b, c);
  }

  return (x: T) => x.replace(a, b);
}

/**
 * Reverses a string.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.reverse('hello'); // 'olleh'
 * ```
 * 
 * @param a the string to reverse
 * @returns the reversed string
 * @group Natives
 * @since 4.0.0
 */
export const reverse: Fn.Unary<T, T> = a => a.split('').reverse().join('');

/**
 * Finds the first substring match in a regular expression search.
 * 
 * **Important**: it differs from plain js String.prototype.search, 
 *                since it will return `None` if the index is below `0`
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.search("hello", "l")         // 2
 * Str.search("hello", "k")         // null
 * ```
 * 
 * @param a the string
 * @param b the string searcher
 * @returns 
 *  - `Option.Some<number>` if is in bound
 *  - `Option.None` otherwise 
 * @group Natives
 * @since 4.0.0
 */
export function search(a: T, b: StringSearcher): Option.T<number>;
/**
 * Returns a unary function which finds the first substring match 
 * in a regular expression search.
 * 
 * **Important**: it differs from plain js String.prototype.search, 
 *                since it will return `None` if the index is below `0`
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * const searchl = Str.search("l");
 * 
 * searchl("hello")        // 2
 * searchl("foo_bar_baz")  // null
 * ```
 * 
 * @param a the string searcher
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function search(a: StringSearcher): (b: T) => Option.T<number>;
export function search(a: any, b?: any): any {
  const m: Functors.Mappable<number, Option.T<number>> = x => x >= 0 ? x : null;

  if (guard(a) && typeof b !== 'undefined') {
    return m(a.search(b));
  }

  return (b: T) => m(b.search(a));
}

/**
 * Returns a section of a string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.slice("hello", 1)         // "ello"
 * Str.slice("hello", 1, 3)      // "el"
 * ```
 * 
 * @param a the string
 * @param b the starting index
 * @param c the ending index (optional)
 * @returns the sliced string
 * @group Natives
 * @since 4.0.0
 */
export function slice(a: T, b: number, c?: number): string;
/**
 * Returns a unary function which slices a string.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.slice(1)("hello")         // "ello"
 * Str.slice(1, 3)("hello")      // "el"
 * ```
 * 
 * @param a the starting index
 * @param b the ending index (optional)
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function slice(a: number, b?: number): (b: T) => string;
export function slice(a: any, b?: any, c?: any): any {
  if (guard(a) && typeof b === 'number') {
    return a.slice(b, c);
  }

  return (x: T, y?: number) => x.slice(a, b ?? y);
}

/**
 * Split a string into substrings using the specified separator and return 
 * them as an array.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.split("hello world", " ")         // ["hello", "world"]
 * Str.split("hello world", " ", 1)      // ["hello"]
 * ```
 * 
 * @param a the string
 * @param b the string splitter
 * @param c a value used to limit the number of elements returned in the array (optional)
 * @returns the resulting array
 * @group Natives
 * @since 4.0.0
 */
export function split(a: T, b: StringSplitter, c?: number): T[];
/**
 * Returns a unary function which splits a string into substrings 
 * using the specified separator and return them as an array.
 * 
 * @example 
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.split(" ")("hello world")         // ["hello", "world"]
 * Str.split(" ", 1)("hello world")      // ["hello"]
 * ```
 * 
 * @param a the string splitter
 * @param b a value used to limit the number of elements returned in the array (optional)
 * @returns the unary function
 * @group Natives
 * @since 4.0.0
 */
export function split(a: StringSplitter, b?: number): Fn.Unary<T, T[]>;
export function split(a: any, b?: any, c?: any): any {
  if (guard(a) && (guard(b) || b instanceof RegExp || (!!b && typeof b === 'object' && Symbol.split in b))) {
    return a.split(b, c);
  }

  return (x: T, y?: number) => x.split(a, b ?? y);
}

/**
 * Trims a string both at start an the end of it.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.trim('    hello world    '); // 'hello world'
 * ```
 * 
 * @param a the string
 * @returns the trimmed string
 * @group Natives
 * @since 4.0.0
 */
export const trim: Fn.Unary<T, T> = a => a.trim();

/**
 * Trims a string at it's end.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.trimEnd('    hello world    '); // '    hello world'
 * ```
 * 
 * @param a the string
 * @returns the trimmed string
 * @group Natives
 * @since 4.0.0
 */
export const trimEnd: Fn.Unary<T, T> = a => a.trimEnd();

/**
 * Trims a string at it's start.
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.trimStart('    hello world    '); // 'hello world    '
 * ```
 * 
 * @param a the string
 * @returns the trimmed string
 * @group Natives
 * @since 4.0.0
 */
export const trimStart: Fn.Unary<T, T> = a => a.trimStart();

/**
 * Returns a uppercased string 
 * 
 * @example
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.upper('hello'); // "HELLO"
 * ```
 * 
 * @param a the string
 * @returns the uppercased string
 * @group Natives
 * @since 4.0.0
 */
export const upper: Fn.Unary<T, T> = a => a.toUpperCase();

/**
 * Returns an array of words in a string.
 * 
 * ```ts
 * import { Str } from 'tiinvo';
 * 
 * Str.words('hello world'); // ['hello', 'world']
 * ```
 * 
 * @param a the string
 * @returns the array containing the words in string `a`
 * @group Natives
 * @since 4.0.0
 */
export const words: Fn.Unary<T, T[]> = a => a.split(/\s+/m);

//#endregion

//#region serializables

/**
 * Returns an array of chars
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toArray("hello")   // ["h", "e", "l", "l", "o"]
 * ```
 * 
 * @param t the string
 * @returs the resulting char array
 * @group Serializables
 * @since 4.0.0
 */
export const toArray = (t: T) => t.split('');

/**
 * Returns an array of binarized char codes
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toBinArray("hello")   // ["0b1101000", "0b1100101", "0b1101100", "0b1101100", "0b1101111"]
 * ```
 *
 * @param t the string
 * @returs the resulting binary strings array
 * @group Serializables
 * @since 4.0.0
 */
export const toBinArray = (t: T) => toArray(t).map(x => `0b${x.charCodeAt(0).toString(2)}`);

/**
 * Returns an array of char codes
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toCharCodeArray("hello")   // [104, 101, 108, 108, 111]
 * ```
 *
 * @param t the string
 * @returs the resulting char code array
 * @group Serializables
 * @since 4.0.0
 */
export const toCharCodeArray = (t: T) => toArray(t).map(charCodeAt(0)) as number[];

/**
 * Returns an array of hexadecimals string
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toHexArray("hello") // ["0x68", "0x65", "0x6c", "0x6c", "0x6f"]
 * ```
 *
 * @param t the string
 * @returs the resulting hex char code array
 * @group Serializables
 * @since 4.0.0
 */
export const toHexArray = (t: T) => toArray(t).map(x => '0x' + charCodeAt(x, 0)!.toString(16));

/**
 * Serializes a string `T` to an `Int32Array`
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toInt32Array('hello') // Int32Array(5) [ 104, 101, 108, 108, 111 ]
 * ```
 *
 * @group 
 * @since 
 */
export const toInt32Array = (t: T) => Int32Array.from(t.split('').map(x => x.charCodeAt(0)));

/**
 * Returns an array of octal strings
 *
 * @example
 *
 * ```ts
 * import { Str } from 'tiinvo'
 * 
 * Str.toHexArray("hello") // ["0o150", "0o145", "0o154", "0o154", "0o157"]
 * ```
 *
 * @param t the string
 * @returs the resulting oct char code array
 * @group Serializables
 * @since 4.0.0
 */
export const toOctArray = (t: T) => toArray(t).map(x => '0o' + charCodeAt(x, 0)!.toString(8));

//#endregion