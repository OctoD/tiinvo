[tiinvo](../README.md) / str

# Namespace: str

## Table of contents

### Functions

- [charAt](str.md#charat)
- [charCodeAt](str.md#charcodeat)
- [concat](str.md#concat)
- [endsWith](str.md#endswith)
- [fromCharCode](str.md#fromcharcode)
- [includes](str.md#includes)
- [indexOf](str.md#indexof)
- [isempty](str.md#isempty)
- [lastIndexOf](str.md#lastindexof)
- [length](str.md#length)
- [lowercase](str.md#lowercase)
- [match](str.md#match)
- [padEnd](str.md#padend)
- [padStart](str.md#padstart)
- [repeat](str.md#repeat)
- [replace](str.md#replace)
- [search](str.md#search)
- [slice](str.md#slice)
- [split](str.md#split)
- [substring](str.md#substring)
- [substringI](str.md#substringi)
- [trim](str.md#trim)
- [trimEnd](str.md#trimend)
- [trimStart](str.md#trimstart)
- [uppercase](str.md#uppercase)

## Functions

### charAt

▸ `Const`**charAt**(...`args`: [pos: number]): *function*

Returns the character at the specified index.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

str.charAt(index)(sentence) // "q"

```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [pos: number] |

**Returns:** *function*

Defined in: [src/str.ts:22](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L22)

___

### charCodeAt

▸ `Const`**charCodeAt**(...`args`: [index: number]): *function*

Returns the Unicode value of the character at the specified location.

**`since`** 2.10.0

**`example`** 

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [index: number] |

**Returns:** *function*

Defined in: [src/str.ts:29](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L29)

___

### concat

▸ `Const`**concat**(...`args`: *string*[]): *function*

Returns a string that contains the concatenation of two or more strings.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.concat(`b`, `c`, `d`)(`abcd`) // true
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | *string*[] |

**Returns:** *function*

Defined in: [src/str.ts:42](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L42)

___

### endsWith

▸ `Const`**endsWith**(...`args`: [searchString: string, endPosition?: number]): *function*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.endsWith(`r`)(`foobar`) // true
str.endsWith(`w`)(`hellow`) // true
str.endsWith(`a`)(`foobar`) // false
str.endsWith(`b`)(`hellow`) // false
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [searchString: string, endPosition?: number] |

**Returns:** *function*

Defined in: [src/str.ts:58](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L58)

___

### fromCharCode

▸ `Const`**fromCharCode**(...`args`: *number*[]): *string*

Returns a string created from the specified sequence of UTF-16 code units.

**`since`** 2.10.0

**`example`** 

#### Parameters:

Name | Type |
------ | ------ |
`...args` | *number*[] |

**Returns:** *string*

Defined in: [src/str.ts:277](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L277)

___

### includes

▸ `Const`**includes**(...`args`: [searchString: string, position?: number]): *function*

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.includes(`foo`)(`foobar`) // true
str.includes(`foo`)(`hellow`) // false
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [searchString: string, position?: number] |

**Returns:** *function*

Defined in: [src/str.ts:72](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L72)

___

### indexOf

▸ `Const`**indexOf**(...`args`: [searchString: string, position?: number]): *function*

Returns the position of the first occurrence of a substring.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.indexOf(`b`)(`abcd`) // 1
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [searchString: string, position?: number] |

**Returns:** *function*

Defined in: [src/str.ts:85](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L85)

___

### isempty

▸ `Const`**isempty**(`arg`: *string*): *boolean*

Returns if a string is empty

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.isempty(``) // true
str.isempty(` `) // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *boolean*

Defined in: [src/str.ts:291](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L291)

___

### lastIndexOf

▸ `Const`**lastIndexOf**(...`args`: [searchString: string, position?: number]): *function*

Returns the last occurrence of a substring in the string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.lastIndexOf(`b`)(`abcdb`) // 1
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [searchString: string, position?: number] |

**Returns:** *function*

Defined in: [src/str.ts:98](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L98)

___

### length

▸ `Const`**length**(`arg`: *string*): *number*

Returns a string length

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.length(`hello`) // 5
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *number*

Defined in: [src/str.ts:304](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L304)

___

### lowercase

▸ `Const`**lowercase**(`arg`: *string*): *string*

Returns a copy of a string in lower case

**`since`** 2.10.0

**`example`** 

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *string*

Defined in: [src/str.ts:311](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L311)

___

### match

▸ `Const`**match**(`regexp`: *RegExp*): *function*

Matches a string with a regular expression, and returns an array containing the results of that search.
Differently from native implementation, it always returns an array

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.match(/abc/)(`abcd`) // [`abc`]
```

#### Parameters:

Name | Type |
------ | ------ |
`regexp` | *RegExp* |

**Returns:** *function*

Defined in: [src/str.ts:112](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L112)

___

### padEnd

▸ `Const`**padEnd**(...`args`: [maxLength: number, fillString?: string]): *function*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.padEnd('-', 5)(`a`) // "a----"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [maxLength: number, fillString?: string] |

**Returns:** *function*

Defined in: [src/str.ts:125](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L125)

___

### padStart

▸ `Const`**padStart**(...`args`: [maxLength: number, fillString?: string]): *function*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.padStart('-', 5)(`a`) // "----a"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [maxLength: number, fillString?: string] |

**Returns:** *function*

Defined in: [src/str.ts:138](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L138)

___

### repeat

▸ `Const`**repeat**(...`args`: [count: number]): *function*

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.repeat(2)(`hello`) // "hellohello"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [count: number] |

**Returns:** *function*

Defined in: [src/str.ts:151](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L151)

___

### replace

▸ `Const`**replace**(`regexp`: *string* \| *RegExp*, `replacewith`: *string* \| (`substring`: *string*, ...`args`: *any*[]) => *string*): *function*

Replaces text in a string, using a regular expression or search string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.replace("goodbye cruel", "hello")("goodbye cruel world") // "hello world"
```

#### Parameters:

Name | Type |
------ | ------ |
`regexp` | *string* \| *RegExp* |
`replacewith` | *string* \| (`substring`: *string*, ...`args`: *any*[]) => *string* |

**Returns:** *function*

Defined in: [src/str.ts:163](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L163)

___

### search

▸ `Const`**search**(...`args`: [searcher: object]): *function*

Finds the first substring match in a regular expression search.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.search(/a/)("testa") // 4
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [searcher: object] |

**Returns:** *function*

Defined in: [src/str.ts:176](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L176)

___

### slice

▸ `Const`**slice**(...`args`: [start?: number, end?: number]): *function*

Returns a section of a string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.slice(1, 2)('hello') // "e"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [start?: number, end?: number] |

**Returns:** *function*

Defined in: [src/str.ts:189](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L189)

___

### split

▸ `Const`**split**(`splitter`: *string* \| *RegExp*, `limit?`: *number*): *function*

Split a string into substrings using the specified separator and return them as an array.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.split("-")("1970-01-01") // ["1970", "01", "01"]
```

#### Parameters:

Name | Type |
------ | ------ |
`splitter` | *string* \| *RegExp* |
`limit?` | *number* |

**Returns:** *function*

Defined in: [src/str.ts:202](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L202)

___

### substring

▸ `Const`**substring**(...`args`: [start: number, end?: number]): *function*

Returns the substring at the specified location within a String object.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.substring(1, 2)("pizza") // "i"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [start: number, end?: number] |

**Returns:** *function*

Defined in: [src/str.ts:228](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L228)

___

### substringI

▸ `Const`**substringI**(...`args`: [from: number, length?: number]): *function*

Returns the substring at the specified location within a String object.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.substringi(1, 2)("pizza") // "iz"
```

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [from: number, length?: number] |

**Returns:** *function*

Defined in: [src/str.ts:215](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L215)

___

### trim

▸ `Const`**trim**(`arg`: *string*): *string*

Removes the leading and trailing white space and line terminator characters from a string.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.trim(`  aaa `) // "aaa"
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *string*

Defined in: [src/str.ts:241](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L241)

___

### trimEnd

▸ `Const`**trimEnd**(`arg`: *string*): *string*

Returns a copy with trailing whitespace removed.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.trimEnd(`  aaa     `) // "  aaa"
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *string*

Defined in: [src/str.ts:254](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L254)

___

### trimStart

▸ `Const`**trimStart**(`arg`: *string*): *string*

Returns a copy with leading whitespace removed.

**`since`** 2.10.0

**`example`** 

```ts
import { str } from 'tiinvo';

str.trimStart(`  aaa     `) // "aaa     "
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *string*

Defined in: [src/str.ts:267](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L267)

___

### uppercase

▸ `Const`**uppercase**(`arg`: *string*): *string*

Returns a copy of a string in upper case

**`since`** 2.10.0

**`example`** 

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* |

**Returns:** *string*

Defined in: [src/str.ts:318](https://github.com/OctoD/tiinvo/blob/ea6e8d4/src/str.ts#L318)
