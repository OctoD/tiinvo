import type * as f from './functors';
import type * as fn from './fn';
import type { option } from './option';

/**
 * Checks if the given value is a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.guard('hello'); // true
 * String.guard(10); // false
 * ```
 * 
 * @since 3.0.0
 */
export const guard = (value => typeof value === 'string') as f.guard<string>;

/**
 * Compares a to b.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.cmp('a', 'b'); // -1
 * String.cmp('b', 'a'); // 1
 * String.cmp('a', 'a'); // 0
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const cmp: f.comparableE<string, string> = (a, b) => a > b ? 1 : a < b ? -1 : 0;

/**
 * Returns true if a equals to b.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.eq('a', 'a'); // true
 * String.eq('a', 'b'); // false
 * ```
 */
export const eq: f.equatableE<string> = (a, b) => a === b;

/**
 * Returns true if a string is empty.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.empty(''); // true
 * String.empty('a'); // false
 * ```
 * 
 * @param a 
 * @returns 
 */
export const empty: fn.unary<string, boolean> = a => a.length === 0;
/**
 * Used to sort strings in ascending order.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * const array = ['c', 'b', 'a'];
 * console.log(array.sort(String.asc)); // ['a', 'b', 'c']
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const asc: f.comparableE<string, string> = (a, b) => cmp(a.toLowerCase(), b.toLowerCase());
/**
 * Used to sort strings in descending order.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * const array = ['b', 'A', 'c', 'D'];
 * console.log(array.sort(String.desc)); // ['D', 'c', 'b', 'A']
 * ```
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export const desc: f.comparableE<string, string> = (a, b) => cmp(b.toLowerCase(), a.toLowerCase());

//#region native methods

/**
 * Returns the character at the specified index.
 * 
 * If nothing is found, returns an empty string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.ucharAt(0)('hello'); // 'h'
 * String.ucharAt(1)('hello'); // 'e'
 * String.ucharAt(2)('hello'); // 'l'
 * String.ucharAt(3)('hello'); // 'l'
 * String.ucharAt(4)('hello'); // 'o'
 * String.ucharAt(5)('hello'); // ''
 * ```
 * 
 * @param at 
 * @returns 
 */
export const ucharAt: fn.unary<number, fn.unary<string, option<string>>> = at => str => str.charAt(at);

/**
 * Returns the Unicode value of the character at the specified location.
 * 
 * If there is no character at the specified index, null is returned.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.ucharCodeAt(0)('hello'); // 72
 * String.ucharCodeAt(1)('hello'); // 101
 * String.ucharCodeAt(2)('hello'); // 108
 * String.ucharCodeAt(3)('hello'); // 108
 * String.ucharCodeAt(4)('hello'); // 111
 * String.ucharCodeAt(5)('hello'); // null
 * ```
 * 
 * @param at 
 * @returns 
 */
export const ucharCodeAt: fn.unary<number, fn.unary<string, option<number>>> = at => str => {
  const r = str.charCodeAt(at);
  return isNaN(r) ? null : r;
};

/**
 * Returns a string created from the specified UTF-16 code unit.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.fromCharCode(72); // 'H'
 * String.fromCharCode(0x0041); // 'A'
 * String.fromCharCode(0x0061); // 'a'
 * ```
 * 
 * @param code 
 * @returns 
 */
export const fromCharCode: fn.unary<number, string> = code => String.fromCharCode(code);

/**
 * Concatenates b and a.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.uconcat('a')('b'); // 'ba'
 * ```
 * @param a 
 * @returns 
 */
export const uconcat: fn.unary<string, fn.unary<string, string>> = a => b => b + a;
/**
 * Concatenates a and b.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.bconcat('a', 'b'); // 'ab'
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export const bconcat: fn.binary<string, string, string> = (a, b) => a + b;
/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.uendsWith('lo')('hello'); // true
 * String.uendsWith('ll')('hello'); // false
 * ```
 * 
 * @param a 
 * @returns 
 */
export const uendsWith: fn.unary<string, fn.unary<string, boolean>> = a => b => b.endsWith(a);
/**
 * Returns true if `a` appears as a substring of `b`, returs false otherwise.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.uincludes('lo')('hello'); // true
 * String.uincludes('ll')('hello'); // true
 * String.uincludes('x')('hello'); // false
 * ```
 * @param a 
 * @returns 
 */
export const uincludes: fn.unary<string, fn.unary<string, boolean>> = a => b => b.includes(a);
/**
 * Returns true if `a` appears as a substring of `b`, returs false otherwise.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.includes('hello', 'lo'); // true
 * String.includes('hello', 'll'); // true
 * String.includes('hello', 'x'); // false
 * ```
 * @param a 
 * @returns 
 */
export const includes: fn.binary<string, string, boolean> = (a, b) => a.includes(b);
/**
 * Returns the position of the first occurrence of `a` in `b`.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.indexOf('lo')('hello'); // 2
 * String.indexOf('ll')('hello'); // 2
 * String.indexOf('x')('hello'); // -1
 * ```
 * @param a 
 * @param index The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. 
 * @returns 
 */
export const uindexOf: fn.binary<string, number | void, fn.unary<string, number>> = (a, index) => b => b.indexOf(a, index ?? 0);
/**
 * Returns the position of the first occurrence of `a` in `b`.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.indexOf('lo', 'hello'); // 2
 * String.indexOf('ll', 'hello'); // 2
 * String.indexOf('x', 'hello'); // -1
 * ```
 * @param a 
 * @param b 
 * @param index The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. 
 * @returns 
 */
export const indexOf: fn.ternary<string, string, number | void, number> = (a, b, index) => a.indexOf(b, index ?? 0);
/**
 * Returns the last occurrence of a substring in the string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.lastIndexOf('lo')('hello'); // 2
 * String.lastIndexOf('ll')('hello'); // 2
 * String.lastIndexOf('l', 2)('hello'); // 2
 * String.lastIndexOf('l', 3)('hello'); // 3
 * ```
 * 
 * @param a 
 * @param index The index at which to begin searching. If omitted, the search begins at the end of the string.
 * @returns 
 */
export const ulastIndexOf: fn.binary<string, void | number, fn.unary<string, number>> = (a, index) => b => b.lastIndexOf(a, index ?? b.length);
/**
 * Returns the last occurrence of a substring in the string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.lastIndexOf('lo', 'hello'); // 2
 * String.lastIndexOf('ll', 'hello'); // 2
 * String.lastIndexOf('l', 'hello', 2); // 2
 * String.lastIndexOf('l', 'hello', 3); // 3
 * ```
 * 
 * @param a 
 * @param index The index at which to begin searching. If omitted, the search begins at the end of the string.
 * @returns 
 */
export const blastIndexOf: fn.ternary<string, string, void | number, number> = (a, b, index) => a.lastIndexOf(b, index ?? undefined);
/**
 * Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.umatch(/ll/)('hello'); // ['ll']
 * String.umatch(/l/g)('hello'); // ['l', 'l']
 * String.umatch(/x/g)('hello'); // null
 * ```
 * 
 * @param r 
 * @returns 
 */
export const umatch: fn.unary<RegExp | string, fn.unary<string, RegExpMatchArray | null>> = r => str => str.match(r);
/**
 * Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.match('hello', /ll/); // ['ll']
 * String.match('hello', /l/g); // ['l', 'l']
 * String.match('hello', /x/g); // null
 * ```
 * 
 * @param r 
 * @returns 
 */
export const match: fn.binary<string, RegExp | string, RegExpMatchArray | null> = (b, r) => b.match(r);
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.padStart(5, '0')('1'); // '00001'
 * String.padStart(6, '0')('1'); // '000001'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const upadstart: fn.binary<number, string | void, fn.unary<string, string>> = (ml, fs) => b => b.padStart(ml, fs ?? ' ');
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.padStart('1', 5); // '    1'
 * String.padStart('1', 5, '0'); // '00001'
 * String.padStart('1', 6, '0'); // '000001'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const padstart: fn.ternary<string, number, string | void, string> = (b, ml, fs) => b.padStart(ml, fs ?? ' ');
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.upadEnd(5, '0')('1'); // '10000'
 * String.upadEnd(6, '0')('1'); // '100000'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const upadEnd: fn.binary<number, string | void, fn.unary<string, string>> = (ml, fs) => b => b.padEnd(ml, fs ?? ' ');
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.padEnd('1', 5); // '1    '
 * String.padEnd('1', 5, '0'); // '10000'
 * String.padEnd('1', 6, '0'); // '100000'
 * ```
 * @param b 
 * @param ml 
 * @param fs 
 * @returns 
 */
export const padEnd: fn.ternary<string, number, string | void, string> = (b, ml, fs) => b.padEnd(ml, fs ?? ` `);
/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.urepeat(3)('x'); // 'xxx'
 * String.urepeat(0)('x'); // ''
 * ```
 * 
 * @param n 
 * @returns 
 */
export const urepeat: fn.unary<number, fn.unary<string, string>> = n => b => b.repeat(n);
/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.repeat('x', 3); // 'xxx'
 * String.repeat('x', 0); // ''
 * ```
 * 
 * @param b 
 * @param n 
 * @returns 
 */
export const brepeat: fn.binary<string, number, string> = (b, n) => b.repeat(n);
/**
 * Replaces text in a string, using a regular expression or search string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.ureplace('ll', 'hh')('hello'); // 'hehho'
 * String.ureplace('ll', arg => arg.length)('hello'); // 'he2o'
 * ```
 * @param rx 
 * @param r 
 * @returns 
 */
export const ureplace: fn.binary<RegExp | string, string | ((s: string, ... sa: string[]) => string), fn.unary<string, string>> = (rx, r) => b => b.replace(rx, r as string);
/**
 * Replaces text in a string, using a regular expression or search string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.replace('hello', 'll', 'hh'); // 'hehho'
 * String.replace('hello', 'll', arg => arg.length); // 'he2o'
 * ```
 * @param b 
 * @param rx 
 * @param r 
 * @returns 
 */
export const replace: fn.ternary<string, RegExp | string, string | ((s: string, ... sa: string[]) => string), string> = (b, rx, r) => b.replace(rx, r as string);
/**
 * Finds the first substring match in a regular expression search.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.usearch('ll')('hello'); // 1
 * String.usearch(/l/g)('hello'); // 1
 * ```
 * @param rx 
 * @returns 
 */
export const usearch: fn.unary<RegExp | string, fn.unary<string, number>> = rx => b => b.search(rx);
/**
 * Finds the first substring match in a regular expression search.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.search('hello', 'll'); // 1
 * String.search('hello', /l/g); // 1
 * ```
 * @param b 
 * @param rx 
 * @returns 
 */
export const search: fn.binary<string, RegExp | string, number> = (b, rx) => b.search(rx);
/**
 * Returns a section of a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.uslice(1, 3)('hello'); // 'el'
 * String.uslice(1)('hello'); // 'ello'
 * ```
 * @param start 
 * @param end 
 * @returns 
 */
export const uslice: fn.binary<number | void, number | void, fn.unary<string, string>> = (start, end) => b => b.slice(start ?? undefined, end ?? undefined);
/**
 * Returns a section of a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.slice('hello', 1, 3); // 'el'
 * String.slice('hello', 1); // 'ello'
 * ```
 * @param b 
 * @param start 
 * @param end 
 * @returns 
 */
export const slice: fn.ternary<string, number | void, number | void, string> = (b, start, end) => b.slice(start ?? undefined, end ?? undefined);
/**
 * Split `b` into substrings using the specified separator `rx` and return them as an array.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.usplit(' ')('hello world'); // ['hello', 'world']
 * String.usplit(/\s+/)('hello world'); // ['hello', 'world']
 * ```
 * 
 * @param rx 
 * @param n 
 * @returns 
 */
export const usplit: fn.binary<RegExp | string, number | void, fn.unary<string, string[]>> = (rx, n) => b => b.split(rx as string, n ?? undefined);
/**
 * Split `b` into substrings using the specified separator `rx` and return them as an array.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.split('hello', ' '); // ['hello', 'world']
 * String.split('hello', /\s+/); // ['hello', 'world']
 * ```
 * @param b 
 * @param rx 
 * @param n 
 * @returns 
 */
export const split: fn.ternary<string, RegExp | string, number | void, string[]> = (b, rx, n) => b.split(rx as string, n ?? undefined);
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.trim('  hello world  '); // 'hello world'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const trim: fn.unary<string, string> = b => b.trim();
/**
 * Removes the trailing white space and line terminator characters from a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.trimEnd('  hello world  '); // '  hello world'
 * ```
 * @param b 
 * @returns 
 */
export const trimEnd: fn.unary<string, string> = b => b.trimEnd();
/**
 * Removes the leading white space and line terminator characters from a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.trimStart('  hello world  '); // 'hello world  '
 * ```
 * 
 * @param b 
 * @returns 
 */
export const trimStart: fn.unary<string, string> = b => b.trimStart();
/**
 * Returns a string length
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.length('hello'); // 5
 * ```
 * 
 * @param b 
 * @returns 
 * @since 3.0.0
 */
export const length: fn.unary<string, number> = b => b.length;
/**
 * Converts all the alphabetic characters in a string to lowercase.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.lower('HELLO WORLD'); // 'hello world'
 * ```
 * @param b 
 * @returns 
 */
export const lower: fn.unary<string, string> = b => b.toLowerCase();
/**
 * Converts all the alphabetic characters in a string to uppercase.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.upper('hello world'); // 'HELLO WORLD'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const upper: fn.unary<string, string> = b => b.toUpperCase();

//#endregion

//#region case formatting

/**
 * Formats a string to camel case.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.camelCase('hello world'); // 'helloWorld'
 * ```
 * @param b 
 * @returns 
 */
export const camel: fn.unary<string, string> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase());
/**
 * Formats a string to pascal case.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.pascal('hello world'); // 'HelloWorld'
 * ```
 * @param b 
 * @returns 
 */
export const pascal: fn.unary<string, string> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());
/**
 * Formats a string to kebab case.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.kebab('hello world'); // 'hello-world'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const kebab: fn.unary<string, string> = b => b.replace(/[A-Z]/g, word => ' ' + word.replace(/[A-Z]/, b => b.toLowerCase())).replace(/\s/g, '-');
/**
 * Formats a string to snake case.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.snake('hello world'); // 'hello_world'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const snake: fn.unary<string, string> = b => b.replace(/[A-Z]/g, word => ' ' + word.replace(/[A-Z]/, b => b.toLowerCase())).replace(/\s/g, '_');

//#endregion

/**
 * Returns an array of chars.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.chars('hello'); // ['h', 'e', 'l', 'l', 'o']
 * ```
 * 
 * @param b
 * @returns
 * 
 * @since 3.1.0
 */
export const chars = usplit('');
/**
 * Returns an array of lines in a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.split('hello\nworld'); // ['hello', 'world']
 * ```
 * 
 * @param b
 * @returns
 * 
 * @since 3.1.0
 * 
 */
export const lines = usplit(/\r?\n/);

/**
 * Returns an array of words in a string.
 * 
 * ```typescript
 * import { String } from 'tiinvo';
 * 
 * String.words('hello world'); // ['hello', 'world']
 * ```
 * 
 * @param b
 * @returns
 * 
 * @since 3.1.0
 */
export const words = usplit(/\s+/m);
