## charAt

Returns the character at the specified index.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

str.charAt(index)(sentence) // "q"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

str.charAt(index)(sentence) // "q"
```

<!-- tabs:end --->

## charCodeAt

Returns the Unicode value of the character at the specified location.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.charCodeAt(4)('The quick brown fox jumps over the lazy dog.') // 113
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.charCodeAt(4)('The quick brown fox jumps over the lazy dog.') // 113
```

<!-- tabs:end --->

## concat

Returns a string that contains the concatenation of two or more strings.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.concat(`b`, `c`, `d`)(`a`) // 'abcd'
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.concat(`b`, `c`, `d`)(`a`) // 'abcd'
```

<!-- tabs:end --->

## endsWith

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.endsWith(`r`)(`foobar`) // true
str.endsWith(`w`)(`hellow`) // true
str.endsWith(`a`)(`foobar`) // false
str.endsWith(`b`)(`hellow`) // false
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.endsWith(`r`)(`foobar`) // true
str.endsWith(`w`)(`hellow`) // true
str.endsWith(`a`)(`foobar`) // false
str.endsWith(`b`)(`hellow`) // false
```

<!-- tabs:end --->

## includes

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.includes(`foo`)(`hellow`) // false
str.includes(`foo`)(`foobar`) // true
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.includes(`foo`)(`foobar`) // true
str.includes(`foo`)(`hellow`) // false
```

<!-- tabs:end --->

## indexOf

Returns the position of the first occurrence of a substring.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.indexOf(`b`)(`abcd`) // 1
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.indexOf(`b`)(`abcd`) // 1
```

<!-- tabs:end --->

## lastIndexOf

Returns the last occurrence of a substring in the string.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.lastIndexOf(`b`)(`abcdb`) // 1
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.lastIndexOf(`b`)(`abcdb`) // 1
```

<!-- tabs:end --->

## match

Matches a string with a regular expression, and returns an array containing the results of that search.
Differently from native implementation, it always returns an array

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.match(/abc/)(`abcd`) // [`abc`]
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.match(/abc/)(`abcd`) // [`abc`]
```

<!-- tabs:end --->

## padEnd

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.padStart('-', 5)(`a`) // "----a"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.padStart('-', 5)(`a`) // "----a"
```

<!-- tabs:end --->

## padStart

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.padStart('-', 5)(`a`) // "----a"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.padStart('-', 5)(`a`) // "----a"
```

<!-- tabs:end --->

## repeat

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.repeat(2)(`hello`) // "hellohello"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.repeat(2)(`hello`) // "hellohello"
```

<!-- tabs:end --->

## replace

Replaces text in a string, using a regular expression or search string.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.replace("goodbye cruel", "hello")("goodbye cruel world") // "hello world"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.replace("goodbye cruel", "hello")("goodbye cruel world") // "hello world"
```

<!-- tabs:end --->

## search

Finds the first substring match in a regular expression search.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.search(/a/)("testa") // 4
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.search(/a/)("testa") // 4
```

<!-- tabs:end --->

## slice

Split a string into substrings using the specified separator and return them as an array.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.slice(1, 2)('hello') // "e"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.slice(1, 2)('hello') // "e"
```

<!-- tabs:end --->

## split

Split a string into substrings using the specified separator and return them as an array.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.split("-")("1970-01-01") // ["1970", "01", "01"]
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.split("-")("1970-01-01") // ["1970", "01", "01"]
```

<!-- tabs:end --->

## substringI

Returns the substring at the specified location within a String object.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.substringi(1, 2)("pizza") // "iz"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.substringi(1, 2)("pizza") // "iz"
```

<!-- tabs:end --->

## substring

Returns the substring at the specified location within a String object.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.substring(1, 2)("pizza") // "i"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.substring(1, 2)("pizza") // "i"
```

<!-- tabs:end --->

## trim

Removes the leading and trailing white space and line terminator characters from a string.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.trim(`  aaa `) // "aaa"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.trim(`  aaa `) // "aaa"
```

<!-- tabs:end --->

## trimEnd

Returns a copy with trailing whitespace removed.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.trimEnd(`  aaa     `) // "  aaa"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.trimEnd(`  aaa     `) // "  aaa"
```

<!-- tabs:end --->

## trimStart

Returns a copy with leading whitespace removed.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.trimStart(`  aaa     `) // "aaa     "
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.trimStart(`  aaa     `) // "aaa     "
```

<!-- tabs:end --->

## fromCharCode

Returns a string created from the specified sequence of UTF-16 code units.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.fromCharCode(102, 103, 104)
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.fromCharCode(102, 103, 104)
```

<!-- tabs:end --->

## isempty

Returns if a string is empty

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.isempty(``) // true
str.isempty(` `) // false
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.isempty(``) // true
str.isempty(` `) // false
```

<!-- tabs:end --->

## length

Returns a string length

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.length(`hello`) // 5
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.length(`hello`) // 5
```

<!-- tabs:end --->

## lowercase

Returns a copy of a string in lower case

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.lowercase(`HELLO`) // "hello"
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.lowercase(`HELLO`) // "hello"
```

<!-- tabs:end --->

## sortasc

A case-insensitive sorting algh. Sorts strings ascending.

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.sortasc(['B', 'a']) // ['a', 'B']
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.sortasc(['B', 'a']) // ['a', 'B']
```

<!-- tabs:end --->

## sortdesc

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.sortdesc(['a', 'c', 'B']) // ['c', 'B', 'a']
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.sortdesc(['a', 'c', 'B']) // ['c', 'B', 'a']
```

<!-- tabs:end --->

## uppercase

Returns a copy of a string in upper case

<!-- tabs:start --->

#### **node**

```ts
import { str } from 'tiinvo';

str.uppercase(`explosions! 💥`) // `EXPLOSIONS! 💥`
```

#### **deno/esm**

```ts
import { str } from 'https://cdn.skypack.dev/tiinvo?dts'

str.uppercase(`explosions! 💥`) // `EXPLOSIONS! 💥`
```

<!-- tabs:end --->
