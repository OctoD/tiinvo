import { PrimitiveMethodMapper } from './applicative';

const map: PrimitiveMethodMapper<string> = key => (... args) => value => (String.prototype[key] as any).apply(value, args);

//#region primitives mappings
/**
 * Returns the character at the specified index.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * const sentence = 'The quick brown fox jumps over the lazy dog.';
 * const index = 4;
 * 
 * str.charAt(index)(sentence) // "q"
 * 
 * ```
 */
export const charAt = map('charAt');
/**
 * Returns the Unicode value of the character at the specified location.
 * 
 * @since 2.10.0
 * @example
 */
export const charCodeAt = map('charCodeAt');
/**
 * Returns a string that contains the concatenation of two or more strings.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.concat(`b`, `c`, `d`)(`abcd`) // true
 * ```
 */
export const concat = map('concat');
/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.endsWith(`r`)(`foobar`) // true
 * str.endsWith(`w`)(`hellow`) // true
 * str.endsWith(`a`)(`foobar`) // false
 * str.endsWith(`b`)(`hellow`) // false
 * ```
 */
export const endsWith = map('endsWith');
/**
 * Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.includes(`foo`)(`foobar`) // true
 * str.includes(`foo`)(`hellow`) // false
 * ```
 */
export const includes = map('includes');
/**
 * Returns the position of the first occurrence of a substring.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.indexOf(`b`)(`abcd`) // 1
 * ```
 */
export const indexOf = map('indexOf');
/**
 * Returns the last occurrence of a substring in the string.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.lastIndexOf(`b`)(`abcdb`) // 1
 * ```
 */
export const lastIndexOf = map('lastIndexOf');
/**
 * Matches a string with a regular expression, and returns an array containing the results of that search.
 * Differently from native implementation, it always returns an array
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.match(/abc/)(`abcd`) // [`abc`]
 * ```
 */
export const match = (regexp: RegExp) => (str: string): RegExpMatchArray => str.match(regexp) ?? [];
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.padEnd('-', 5)(`a`) // "a----"
 * ```
 */
export const padEnd = map('padEnd');
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.padStart('-', 5)(`a`) // "----a"
 * ```
 */
export const padStart = map('padStart');
/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.repeat(2)(`hello`) // "hellohello"
 * ```
 */
export const repeat = map('repeat');
/**
 * Replaces text in a string, using a regular expression or search string.
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.replace("goodbye cruel", "hello")("goodbye cruel world") // "hello world"
 * ```
 */
export const replace = (regexp: RegExp | string, replacewith: string | ((substring: string, ...args: any[]) => string)) => (str: string) => str.replace(regexp, replacewith as string);
/**
 * Finds the first substring match in a regular expression search.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.search(/a/)("testa") // 4
 * ```
 */
export const search = map('search');
/**
 * Returns a section of a string.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.slice(1, 2)('hello') // "e"
 * ```
 */
export const slice = map('slice');
/**
 * Split a string into substrings using the specified separator and return them as an array.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.split("-")("1970-01-01") // ["1970", "01", "01"]
 * ```
 */
export const split = (splitter: string | RegExp, limit?: number) => (str: string) => str.split(splitter, limit);
/**
 * Returns the substring at the specified location within a String object.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.substringi(1, 2)("pizza") // "iz"
 * ```
 */
export const substringI = map('substr');
/**
 * Returns the substring at the specified location within a String object.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.substring(1, 2)("pizza") // "i"
 * ```
 */
export const substring = map('substring');
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.trim(`  aaa `) // "aaa"
 * ```
 */
export const trim = map(`trim`)();
/**
 * Returns a copy with trailing whitespace removed.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.trimEnd(`  aaa     `) // "  aaa"
 * ```
 */
export const trimEnd = map('trimEnd')();
/**
 * Returns a copy with leading whitespace removed.
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.trimStart(`  aaa     `) // "aaa     "
 * ```
 */
export const trimStart = map('trimStart')();

//#endregion

/**
 * Returns a string created from the specified sequence of UTF-16 code units.
 * 
 * @since 2.10.0
 * @example
 */
export const fromCharCode = (... args: number[]) => String.fromCharCode.apply('', args);
/**
 * Returns if a string is empty
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.isempty(``) // true
 * str.isempty(` `) // false
 * ```
 */
export const isempty = (arg: string) => arg.length === 0;
/**
 * Returns a string length
 * 
 * @since 2.10.0
 * @example
 * 
 * ```ts
 * import { str } from 'tiinvo';
 * 
 * str.length(`hello`) // 5
 * ```
 */
export const length = (arg: string) => arg.length;
/**
 * Returns a copy of a string in lower case
 * 
 * @since 2.10.0
 * @example
 */
export const lowercase = (arg: string) => arg.toLowerCase();

/**
 * A case-insensitive sorting algh. Sorts strings ascending.
 * @param a 
 * @param b 
 * @returns 
 */
export const sortasc = (a: string, b: string) => {
  const al = a.toLowerCase();
  const bl = b.toLowerCase();
  return al > bl ? 1 : al < bl ? -1 : 0;
};

/**
 * A case-insensitive sorting algh. Sorts strings descending.
 * @param a 
 * @param b 
 * @returns 
 */
export const sortdesc = (a: string, b: string) => {
  const al = a.toLowerCase();
  const bl = b.toLowerCase();
  return bl > al ? 1 : bl < al ? -1 : 0;
};

/**
 * Returns a copy of a string in upper case
 * 
 * @since 2.10.0
 * @example
 */
export const uppercase = (arg: string) => arg.toUpperCase();
