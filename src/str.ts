import * as f from './functors';
import * as fn from './fn';

/**
 * Checks if the given value is a string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.guard('hello'); // true
 * s.guard(10); // false
 * ```
 * 
 * @since 3.0.0
 */
export const guard = (value => typeof value === 'string') as f.guard<string>;

/**
 * Compares a to b.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.cmp('a', 'b'); // -1
 * s.cmp('b', 'a'); // 1
 * s.cmp('a', 'a'); // 0
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
 * import * as s from 'tiinvo/str';
 * 
 * s.eq('a', 'a'); // true
 * s.eq('a', 'b'); // false
 * ```
 */
export const eq: f.equatableE<string> = (a, b) => a === b;

/**
 * Returns true if a string is empty.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.isEmpty(''); // true
 * s.isEmpty('a'); // false
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
 * import * as s from 'tiinvo/str';
 * 
 * const array = ['c', 'b', 'a'];
 * console.log(array.sort(s.asc)); // ['a', 'b', 'c']
 * @param a 
 * @param b 
 * @returns 
 */
export const asc: f.comparableE<string, string> = (a, b) => cmp(a.toLowerCase(), b.toLowerCase());
/**
 * Used to sort strings in descending order.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * const array = ['b', 'A', 'c', 'D'];
 * console.log(array.sort(s.desc)); // ['D', 'c', 'b', 'A']
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
 * import * as s from 'tiinvo/str';
 * 
 * s.charAt('hello', 0); // 'h'
 * s.charAt('hello', 1); // 'e'
 * s.charAt('hello', 2); // 'l'
 * s.charAt('hello', 3); // 'l'
 * s.charAt('hello', 4); // 'o'
 * s.charAt('hello', 5); // ''
 * ```
 * 
 * @param at 
 * @returns 
 */
export const charAt: fn.unary<number, fn.unary<string, string>> = at => str => str.charAt(at) ?? ``;

/**
 * Returns the Unicode value of the character at the specified location.
 * 
 * If there is no character at the specified index, null is returned.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.codePointAt('hello', 0); // 72
 * s.codePointAt('hello', 1); // 101
 * s.codePointAt('hello', 2); // 108
 * s.codePointAt('hello', 3); // 108
 * s.codePointAt('hello', 4); // 111
 * s.codePointAt('hello', 5); // null
 * ```
 * 
 * @param at 
 * @returns 
 */
export const charCodeAt: fn.unary<number, fn.unary<string, number | null>> = at => str => {
  const r = str.charCodeAt(at);
  return isNaN(r) ? null : r;
};

/**
 * Returns a string created from the specified UTF-16 code unit.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.fromCharCode(72); // 'H'
 * s.fromCharCode(0x0041); // 'A'
 * s.fromCharCode(0x0061); // 'a'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.concat('a')('b'); // 'ba'
 * ```
 * @param a 
 * @returns 
 */
export const uconcat: fn.unary<string, fn.unary<string, string>> = a => b => a + b;
/**
 * Concatenates a and b.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.concat('a', 'b'); // 'ab'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.endsWith('hello', 'lo'); // true
 * s.endsWith('hello', 'll'); // false
 * ```
 * 
 * @param a 
 * @returns 
 */
export const endsWith: fn.unary<string, fn.unary<string, boolean>> = a => b => b.endsWith(a);
/**
 * Returns true if `a` appears as a substring of `b`, returs false otherwise.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.includes('lo')('hello'); // true
 * s.includes('ll')('hello'); // true
 * s.includes('x')('hello'); // false
 * ```
 * @param a 
 * @returns 
 */
export const uincludes: fn.unary<string, fn.unary<string, boolean>> = a => b => b.includes(a);
/**
 * Returns true if `a` appears as a substring of `b`, returs false otherwise.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.includes('hello', 'lo'); // true
 * s.includes('hello', 'll'); // true
 * s.includes('hello', 'x'); // false
 * ```
 * @param a 
 * @returns 
 */
export const bincludes: fn.binary<string, string, boolean> = (a, b) => b.includes(a);
/**
 * Returns the position of the first occurrence of `a` in `b`.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.indexOf('lo')('hello'); // 2
 * s.indexOf('ll')('hello'); // 2
 * s.indexOf('x')('hello'); // -1
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
 * import * as s from 'tiinvo/str';
 * 
 * s.indexOf('lo')('hello'); // 2
 * s.indexOf('ll')('hello'); // 2
 * s.indexOf('x')('hello'); // -1
 * ```
 * @param a 
 * @param b 
 * @param index The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. 
 * @returns 
 */
export const bindexOf: fn.ternary<string, string, number | void, number> = (a, b, index) => b.indexOf(a, index ?? 0);
/**
 * Returns the last occurrence of a substring in the string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.lastIndexOf('lo')('hello'); // 2
 * s.lastIndexOf('ll')('hello'); // 2
 * s.lastIndexOf('l', 2)('hello'); // 2
 * s.lastIndexOf('l', 3)('hello'); // 3
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
 * import * as s from 'tiinvo/str';
 * 
 * s.lastIndexOf('lo', 'hello'); // 2
 * s.lastIndexOf('ll', 'hello'); // 2
 * s.lastIndexOf('l', 'hello', 2); // 2
 * s.lastIndexOf('l', 'hello', 3); // 3
 * ```
 * 
 * @param a 
 * @param index The index at which to begin searching. If omitted, the search begins at the end of the string.
 * @returns 
 */
export const blastIndexOf: fn.ternary<string, string, void | number, number> = (a, b, index) => b.lastIndexOf(a, index ?? b.length);
/**
 * Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.match(/ll/)('hello'); // ['ll']
 * s.match(/l/g)('hello'); // ['l', 'l']
 * s.match(/x/g)('hello'); // null
 * @param r 
 * @returns 
 */
export const umatch: fn.unary<RegExp | string, fn.unary<string, RegExpMatchArray | null>> = r => str => str.match(r);
/**
 * Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.match('hello', /ll/); // ['ll']
 * s.match('hello', /l/g); // ['l', 'l']
 * s.match('hello', /x/g); // null
 * @param r 
 * @returns 
 */
export const bmatch: fn.binary<RegExp | string, string, RegExpMatchArray | null> = (r, b) => b.match(r);
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.padStart(5, '0')('1'); // '00001'
 * s.padStart(6, '0')('1'); // '000001'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const upadstart: fn.binary<number, string, fn.unary<string, string>> = (ml, fs) => b => b.padStart(ml, fs);
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.padStart('1', 5, '0'); // '00001'
 * s.padStart('1', 6, '0'); // '000001'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const bpadstart: fn.ternary<string, number, string, string> = (b, ml, fs) => b.padStart(ml, fs);
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.padEnd(5, '0')('1'); // '10000'
 * s.padEnd(6, '0')('1'); // '100000'
 * ```
 * @param ml 
 * @param fs 
 * @returns 
 */
export const upadend: fn.binary<number, string, fn.unary<string, string>> = (ml, fs) => b => b.padEnd(ml, fs);
/**
 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.padEnd('1', 5, '0'); // '10000'
 * s.padEnd('1', 6, '0'); // '100000'
 * ```
 * @param b 
 * @param ml 
 * @param fs 
 * @returns 
 */
export const bpadend: fn.ternary<string, number, string, string> = (b, ml, fs) => b.padEnd(ml, fs);
/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.repeat(3)('x'); // 'xxx'
 * s.repeat(0)('x'); // ''
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
 * import * as s from 'tiinvo/str';
 * 
 * s.repeat('x', 3); // 'xxx'
 * s.repeat('x', 0); // ''
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
 * import * as s from 'tiinvo/str';
 * 
 * s.replace('ll', 'hh')('hello'); // 'hehho'
 * s.replace('ll', arg => arg.length)('hello'); // 'he2o'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.replace('hello', 'll', 'hh'); // 'hehho'
 * s.replace('hello', 'll', arg => arg.length); // 'he2o'
 * ```
 * @param b 
 * @param rx 
 * @param r 
 * @returns 
 */
export const breplace: fn.ternary<string, RegExp | string, string | ((s: string, ... sa: string[]) => string), string> = (b, rx, r) => b.replace(rx, r as string);
/**
 * Finds the first substring match in a regular expression search.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.search('ll')('hello'); // 1
 * s.search(/l/g)('hello'); // 1
 * ```
 * @param rx 
 * @returns 
 */
export const usearch: fn.unary<RegExp | string, fn.unary<string, number>> = rx => b => b.search(rx);
/**
 * Finds the first substring match in a regular expression search.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.search('hello', 'll'); // 1
 * s.search('hello', /l/g); // 1
 * ```
 * @param b 
 * @param rx 
 * @returns 
 */
export const bsearch: fn.binary<string, RegExp | string, number> = (b, rx) => b.search(rx);
/**
 * Returns a section of a string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.slice(1, 3)('hello'); // 'el'
 * s.slice(1)('hello'); // 'ello'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.slice('hello', 1, 3); // 'el'
 * s.slice('hello', 1); // 'ello'
 * ```
 * @param b 
 * @param start 
 * @param end 
 * @returns 
 */
export const bslice: fn.ternary<string, number | void, number | void, string> = (b, start, end) => b.slice(start ?? undefined, end ?? undefined);
/**
 * Split `b` into substrings using the specified separator `rx` and return them as an array.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.split(' ')('hello world'); // ['hello', 'world']
 * s.split(/\s+/)('hello world'); // ['hello', 'world']
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
 * import * as s from 'tiinvo/str';
 * 
 * s.split('hello', ' '); // ['hello', 'world']
 * s.split('hello', /\s+/); // ['hello', 'world']
 * ```
 * @param b 
 * @param rx 
 * @param n 
 * @returns 
 */
export const bsplit: fn.ternary<string, RegExp | string, number | void, string[]> = (b, rx, n) => b.split(rx as string, n ?? undefined);
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.trim('  hello world  '); // 'hello world'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.trimEnd('  hello world  '); // '  hello world'
 * ```
 * @param b 
 * @returns 
 */
export const trimend: fn.unary<string, string> = b => b.trimEnd();
/**
 * Removes the leading white space and line terminator characters from a string.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.trimStart('  hello world  '); // 'hello world  '
 * ```
 * 
 * @param b 
 * @returns 
 */
export const trimstart: fn.unary<string, string> = b => b.trimStart();
/**
 * Converts all the alphabetic characters in a string to lowercase.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.toLowerCase('HELLO WORLD'); // 'hello world'
 * ```
 * @param b 
 * @returns 
 */
export const lower: fn.unary<string, string> = b => b.toLowerCase();
/**
 * Converts all the alphabetic characters in a string to uppercase.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.toUpperCase('hello world'); // 'HELLO WORLD'
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
 * import * as s from 'tiinvo/str';
 * 
 * s.camelCase('hello world'); // 'helloWorld'
 * ```
 * @param b 
 * @returns 
 */
export const camel: fn.unary<string, string> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase());
/**
 * Formats a string to pascal case.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.pascalCase('hello world'); // 'HelloWorld'
 * ```
 * @param b 
 * @returns 
 */
export const pascal: fn.unary<string, string> = b => b.replace(/\s(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());
/**
 * Formats a string to kebab case.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.kebabCase('hello world'); // 'hello-world'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const kebab: fn.unary<string, string> = b => b.replace(/\s/g, '-');
/**
 * Formats a string to snake case.
 * 
 * ```typescript
 * import * as s from 'tiinvo/str';
 * 
 * s.snakeCase('hello world'); // 'hello_world'
 * ```
 * 
 * @param b 
 * @returns 
 */
export const snake: fn.unary<string, string> = b => b.replace(/\s/g, '_');

//#endregion
