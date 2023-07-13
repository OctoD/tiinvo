[tiinvo](../README.md) / [Exports](../modules.md) / Str

# Namespace: Str

## Table of contents

### Type Aliases

- [T](Str.md#t)
- [StringReplacer](Str.md#stringreplacer)
- [StringSearcher](Str.md#stringsearcher)
- [StringSplitter](Str.md#stringsplitter)

### Guardables

- [guard](Str.md#guard)

### Comparables

- [cmp](Str.md#cmp)
- [eq](Str.md#eq)

### Functions

- [asc](Str.md#asc)
- [desc](Str.md#desc)
- [toInt32Array](Str.md#toint32array)

### Natives

- [camel](Str.md#camel)
- [charAt](Str.md#charat)
- [charCodeAt](Str.md#charcodeat)
- [chars](Str.md#chars)
- [concat](Str.md#concat)
- [endsWith](Str.md#endswith)
- [includes](Str.md#includes)
- [indexOf](Str.md#indexof)
- [lastIndexOf](Str.md#lastindexof)
- [length](Str.md#length)
- [lines](Str.md#lines)
- [lower](Str.md#lower)
- [match](Str.md#match)
- [padEnd](Str.md#padend)
- [pascal](Str.md#pascal)
- [padStart](Str.md#padstart)
- [repeat](Str.md#repeat)
- [replace](Str.md#replace)
- [reverse](Str.md#reverse)
- [search](Str.md#search)
- [slice](Str.md#slice)
- [split](Str.md#split)
- [trim](Str.md#trim)
- [trimEnd](Str.md#trimend)
- [trimStart](Str.md#trimstart)
- [upper](Str.md#upper)
- [words](Str.md#words)

### Serializables

- [toArray](Str.md#toarray)
- [toBinArray](Str.md#tobinarray)
- [toCharCodeArray](Str.md#tocharcodearray)
- [toHexArray](Str.md#tohexarray)
- [toOctArray](Str.md#tooctarray)

## Type Aliases

### T

Ƭ **T**: `string`

The type alias for string

**`Since`**

4.0.0

#### Defined in

[src/Str.ts:10](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L10)

___

### StringReplacer

Ƭ **StringReplacer**: [`T`](Str.md#t) \| `RegExp` \| [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)\>

A replacer argument. 

It could be either:
- a string
- a regular expression
- a unary function which accepts a string and returns a string

**`Since`**

4.0.0

#### Defined in

[src/Str.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L22)

___

### StringSearcher

Ƭ **StringSearcher**: [`T`](Str.md#t) \| { `[search]`: (`string`: `string`) => `number`  }

A string searcher argument

**`Since`**

4.0.0

#### Defined in

[src/Str.ts:28](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L28)

___

### StringSplitter

Ƭ **StringSplitter**: [`T`](Str.md#t) \| { `[split]`: (`string`: `string`, `limit?`: `number`) => `string`[]  }

A string splitter argument

**`Since`**

4.0.0

#### Defined in

[src/Str.ts:36](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L36)

## Guardables

### guard

▸ **guard**(`x`): x is string

Checks if a value `x` is a string `T`

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.guard(10)            // false
Str.guard({})            // false
Str.guard([])            // false
Str.guard(null)          // false
Str.guard("hello world") // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is string

- true if `x` is a string `T`
 - false otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/5743591/src/Functors.ts#L338)

## Comparables

### cmp

▸ **cmp**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two strings `a` and `b`.

Returns:

   - 1 if `a` is greater than `b`
   - 0 if `a` is same of `b`
   - -1 if `b` is greater than `a`

**Important**: strings are compared as is, no lowercasing is applied

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.cmp('a', 'a')  // 0
Str.cmp('a', 'b')  // -1
Str.cmp('b', 'a')  // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the first string |
| `b` | `string` | the last string |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- 1 if `a` is greater than `b`
   - 0 if `a` is same of `b`
   - -1 if `b` is greater than `a`

#### Defined in

[src/Str.ts:100](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L100)

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two strings `b` and `a`.

**Important**: strings are compared as is, no lowercasing is applied

**`Example`**

```ts
import { Str } from 'tiinvo';

const cmpB = Str.cmp('b')

cmpB('a')  // -1
cmpB('b')  // 0
cmpB('c')  // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the left-hand compared string |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/Str.ts:123](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L123)

___

### eq

▸ **eq**(`a`, `b`): `boolean`

Returns `true` if two strings are equal.

**Important**: strings are compared as is, no lowercasing is applied.

```ts
import { Str } from 'tiinvo';

Str.eq('a', 'a')  // true
Str.eq('a', 'b')  // false
Str.eq('b', 'a')  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the first string |
| `b` | `string` | - |

#### Returns

`boolean`

- `true` if `a` equals to `b`
 - `false` otherwise

#### Defined in

[src/Str.ts:157](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L157)

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

Returns a unary function which checks if two strings are equal.

**Important**: strings are compared as is, no lowercasing is applied.

```ts
import { Str } from 'tiinvo';

Str.eq('a', 'a')  // true
Str.eq('a', 'b')  // false
Str.eq('b', 'a')  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the first string |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

the unary function

#### Defined in

[src/Str.ts:176](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L176)

## Functions

### asc

▸ **asc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two strings `a` and `b` if `b` is defined, otherwise returns a 
`Unary<string, string>` function which once called compares `b` and `a`

Great to sort a string array in ASC direction.

**`Example`**

```ts
import { Str } from 'tiinvo';

const collection = ['a', 'd', 'c', 'e', 'F', 'A'];

collection.sort(Str.asc) // [ "A", "F", "a", "c", "d", "e" ]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Str.ts:209](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L209)

▸ **asc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Str.ts:210](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L210)

___

### desc

▸ **desc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two strings `a` and `b` if `b` is defined, otherwise returns a 
`Unary<string, string>` function which once called compares `b` and `a`

Great to sort a string array in DESC direction.

**`Example`**

```ts
import { Str } from 'tiinvo';

const collection = ['a', 'd', 'c', 'e', 'F', 'A'];

collection.sort(Str.desc) // [ "e", "d", "c", "a", "F", "A" ]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Str.ts:239](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L239)

▸ **desc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Str.ts:240](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L240)

___

### toInt32Array

▸ **toInt32Array**(`t`): `Int32Array`

Serializes a string `T` to an `Int32Array`

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toInt32Array('hello') // Int32Array(5) [ 104, 101, 108, 108, 111 ]
```

**`Since`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`Int32Array`

#### Defined in

[src/Str.ts:1400](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1400)

## Natives

### camel

▸ **camel**(`a`): `string`

Formats a string to camel case.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.camel('hello world'); // 'helloWorld'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the camelCased string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### charAt

▸ **charAt**(`a`, `b`): [`T`](Opt.md#t)<[`T`](Str.md#t)\>

Returns the character `Option.t<string>` at the specified index.

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charAt("hello", 0)         // "h"
Str.charAt("hello", 10)        // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `number` | the char index |

#### Returns

[`T`](Opt.md#t)<[`T`](Str.md#t)\>

- `Option.Some<T>` if a char is found at position `b`
 - `Option.None` otherwise

#### Defined in

[src/Str.ts:295](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L295)

▸ **charAt**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<[`T`](Str.md#t)\>\>

Returns a `Unary<string, string>` function which returns the char at position `a`

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charAt(0)("hello")         // "h" 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the index |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<[`T`](Str.md#t)\>\>

the unary function

#### Defined in

[src/Str.ts:314](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L314)

___

### charCodeAt

▸ **charCodeAt**(`a`, `b`): [`T`](Opt.md#t)<`number`\>

Returns the char code `Option.t<string>` at the specified index.

If `a` and `b` parameters are passed, `b` is the char position for string `a`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and `a` is the char code position for string `b`.

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charCodeAt("hello", 0)         // 104
Str.charCodeAt("hello", 10)        // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `number` | the index |

#### Returns

[`T`](Opt.md#t)<`number`\>

- `Option.Some<number>` the char code at position `b` if any
 - `Option.None` otherwise

#### Defined in

[src/Str.ts:359](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L359)

▸ **charCodeAt**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<`number`\>\>

Returns a `Unary<string, string>` function which checks and returns the 
char code `Option.Some<number>` at position `a` if any.

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charCodeAt(0)("hello")         // 104 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the index |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<`number`\>\>

the unary function

#### Defined in

[src/Str.ts:379](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L379)

___

### chars

▸ **chars**(`a`): `string`[]

Returns an array of characters.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.chars('hello'); // ['h','e','l','l','o']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`[]

the array of characters

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### concat

▸ **concat**(`a`, `b`): [`T`](Str.md#t)

Concatenates two strings in one.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.concat("hello", "world")         // "helloworld"
Str.concat("world")("hello")         // "helloworld"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the first string |
| `b` | `string` | the last string |

#### Returns

[`T`](Str.md#t)

the concatenated string

#### Defined in

[src/Str.ts:434](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L434)

▸ **concat**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)\>

Returns a unary function which concatenates two strings in one.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.concat("world")("hello")         // "helloworld"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the last string |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)\>

the unary function

#### Defined in

[src/Str.ts:451](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L451)

___

### endsWith

▸ **endsWith**(`a`, `b`): `boolean`

Checks if a string terminates with another one.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.endsWith("hello", "o")         // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` | the ending string |

#### Returns

`boolean`

- true if `a` includes `b` at it's end
 - false otherwise

#### Defined in

[src/Str.ts:481](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L481)

▸ **endsWith**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

Returns a unary function which checks if a string terminates with another one.

**`Example`**

```ts
import { Str } from 'tiinvo';

const endsWithO = Str.endsWith("o")

endsWithO("hello")         // true
endsWithO("world")         // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the ending string |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

the unary function

#### Defined in

[src/Str.ts:501](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L501)

___

### includes

▸ **includes**(`a`, `b`): `boolean`

Returns if a string includes another one.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.includes("hello", "o")         // true
Str.includes("o")("hello")         // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` | the string to search |

#### Returns

`boolean`

- `true` if `a` includes `b`
 - `false` otherwise

#### Defined in

[src/Str.ts:532](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L532)

▸ **includes**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

Returns a unary function which checks if a string includes another one.

**`Example`**

```ts
import { Str } from 'tiinvo';

const includesO = Str.includes("o")

includesO("hello")         // true
includesO("barbaz")        // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

the unary function

#### Defined in

[src/Str.ts:552](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L552)

___

### indexOf

▸ **indexOf**(`a`, `b`, `i?`): [`T`](Opt.md#t)<`number`\>

Returns the position of the first occurrence of `a` in `b`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.indexOf("hello", "l")         // 2
Str.indexOf("hello", "l", 3)      // 3
Str.indexOf("l")("hello")         // 2
Str.indexOf("l")("hello", 3)      // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` | the string to search |
| `i?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

[`T`](Opt.md#t)<`number`\>

- `Option.Some<number>` if found
 - `Option.None` if not found

#### Defined in

[src/Str.ts:586](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L586)

▸ **indexOf**(`a`): (`b`: [`T`](Str.md#t), `i?`: `number`) => [`T`](Opt.md#t)<`number`\>

Returns a binary function which returns the position of the first occurrence of `a` in `b`.

**`Example`**

```ts
import { Str } from 'tiinvo';

const lpos = Str.indexOf("l");

lpos("hello")         // 2
lpos("hello", 3)      // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`fn`

the binary function

▸ (`b`, `i?`): [`T`](Opt.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `i?` | `number` |

##### Returns

[`T`](Opt.md#t)<`number`\>

#### Defined in

[src/Str.ts:606](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L606)

___

### lastIndexOf

▸ **lastIndexOf**(`a`, `b`, `p?`): [`T`](Opt.md#t)<`number`\>

Returns last position of a string 'b' in string 'a'.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.lastIndexOf("hello", "l")         // 3
Str.lastIndexOf("l")("hello")         // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` | the string to search |
| `p?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

[`T`](Opt.md#t)<`number`\>

- `Option.Some<number>` if found
 - `Option.None` otherwise

#### Defined in

[src/Str.ts:638](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L638)

▸ **lastIndexOf**(`a`): (`b`: [`T`](Str.md#t), `p?`: `number`) => [`T`](Opt.md#t)<`number`\>

Returns a binary function which checks the last position of a string 'a' in string 'b'.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.lastIndexOf("l")("hello")         // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string to search |

#### Returns

`fn`

the binary function

▸ (`b`, `p?`): [`T`](Opt.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `p?` | `number` |

##### Returns

[`T`](Opt.md#t)<`number`\>

#### Defined in

[src/Str.ts:655](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L655)

___

### length

▸ **length**(`a`): `number`

Returns a string length

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.length('hello'); // 5
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`number`

the length of the string `a`

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### lines

▸ **lines**(`a`): `string`[]

Returns an array of lines in a string.

```ts
import { Str } from 'tiinvo';

Str.lines('hello\nworld'); // ['hello', 'world']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`[]

the array containing the lines

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### lower

▸ **lower**(`a`): `string`

Returns a lowercased string

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.lower('HELLO'); // "hello"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the lowercased string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### match

▸ **match**(`a`, `b`): [`T`](Opt.md#t)<`RegExpMatchArray`\>

Returns if a string `a` includes another string `b`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.match("hello", "o")         // ['o']
Str.match("hello", "k")         // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` \| `RegExp` | the string or regular expression to search |

#### Returns

[`T`](Opt.md#t)<`RegExpMatchArray`\>

-  `Option.Some<RegExpMatchArray>` if some is found
 -  `Option.None` otherwise

#### Defined in

[src/Str.ts:739](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L739)

▸ **match**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<`RegExpMatchArray`\>\>

Returns a unary function which checks if a string `a` includes another string `b`.

**`Example`**

```ts
import { Str } from 'tiinvo';

const matcho = Str.match("o");

matcho("hello")          // ['o']
matcho("pizza")          // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` \| `RegExp` | the string or regular expression to search |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Opt.md#t)<`RegExpMatchArray`\>\>

the unary function

#### Defined in

[src/Str.ts:759](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L759)

___

### padEnd

▸ **padEnd**(`a`, `b`, `c?`): [`T`](Str.md#t)

Pads the current string with a given string (possibly repeated) 
so that the resulting string reaches a given length. 

The padding is applied from the end (right) of the current string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.padEnd("a", 5)         // "a    "
Str.padEnd("a", 5, "b")    // "abbbb"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `number` | the pad size |
| `c?` | `string` | the string to use to pad |

#### Returns

[`T`](Str.md#t)

the padded string

#### Defined in

[src/Str.ts:792](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L792)

▸ **padEnd**(`a`): (`b`: [`T`](Str.md#t), `d?`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Returns a binary function which pads the current string with a given 
string (possibly repeated) so that the resulting string reaches a given length. 

The padding is applied from the end (right) of the current string.

**`Example`**

```ts
import { Str } from 'tiinvo';

const padEnd5 = Str.padEnd(5);

padEnd5("a")         // "a    "
padEnd5("a", "b")    // "abbbb"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the padsize |

#### Returns

`fn`

the binary function

▸ (`b`, `d?`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `d?` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:815](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L815)

▸ **padEnd**(`a`, `b?`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

If `a` and `b` parameters are passed, then the result is `a` padded by `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` padded by `a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.padEnd("a", 5)         // "a    "
Str.padEnd("a", 5, "b")    // "abbbb"
Str.padEnd(5)("a")         // "a    "
Str.padEnd(5, "b")("a")    // "abbbb"
Str.padEnd(5)("a", "b")    // "abbbb"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b?` | `string` |

#### Returns

`fn`

▸ (`b`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:838](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L838)

___

### pascal

▸ **pascal**(`a`): `string`

Formats a string to pascal case.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.pascal('hello world'); // 'HelloWorld'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the PascalCased string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### padStart

▸ **padStart**(`a`, `b`, `c?`): [`T`](Str.md#t)

Pads the current string with a given string (possibly repeated) so that 
the resulting string reaches a given length. 

The padding is applied from the start (left) of the current string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.padStart("a", 5)         // "    a"
Str.padStart("a", 5, "b")    // "bbbba"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `number` | the pad size |
| `c?` | `string` | the fill string |

#### Returns

[`T`](Str.md#t)

the padded string

#### Defined in

[src/Str.ts:889](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L889)

▸ **padStart**(`a`): (`c`: [`T`](Str.md#t), `d?`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Returns a binary function which pads the current string with a 
given string (possibly repeated) so that * the resulting string 
reaches a given length. 

The padding is applied from the start (left) of the current string.

**`Example`**

```ts
import { Str } from 'tiinvo';

const padStart5 = Str.padStart(5);

padStart5("a")         // "    a"
padStart5("a", "b")    // "bbbba"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the pad size |

#### Returns

`fn`

the binary function

▸ (`c`, `d?`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`T`](Str.md#t) |
| `d?` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:913](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L913)

▸ **padStart**(`a`, `b?`): (`c`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Returns a binary function which pads the current string with a 
given string (possibly repeated) so that * the resulting string 
reaches a given length. 

The padding is applied from the start (left) of the current string.

**`Example`**

```ts
import { Str } from 'tiinvo';

const padStart5 = Str.padStart(5, "b");

padStart5("a")         // "bbbba"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the pad size |
| `b?` | `string` | - |

#### Returns

`fn`

the binary function

▸ (`c`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:936](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L936)

___

### repeat

▸ **repeat**(`a`, `b`): [`T`](Str.md#t)

Returns a String value that is made from count copies appended together. 
If count is 0, an empty string is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.repeat("a", 5)         // "aaaaa"
Str.repeat(5)("a")         // "aaaaa"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string to repeat |
| `b` | `number` | the repetition count |

#### Returns

[`T`](Str.md#t)

the repeated string

#### Defined in

[src/Str.ts:966](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L966)

▸ **repeat**(`a`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Returns a unary function which repeats a string `b` many times as specified in `a`. 
If count is 0, an empty string is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.repeat("a", 5)         // "aaaaa"
Str.repeat(5)("a")         // "aaaaa"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the repetition count |

#### Returns

`fn`

the unary function

▸ (`b`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:985](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L985)

___

### replace

▸ **replace**(`a`, `b`, `c`): [`T`](Str.md#t)

Replaces text in a string, using a regular expression or search string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.replace("hello", "l", "e")         // "heelo"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `string` | the the string to replace |
| `c` | [`StringReplacer`](Str.md#stringreplacer) | the replacer |

#### Returns

[`T`](Str.md#t)

the replaced string

#### Defined in

[src/Str.ts:1014](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1014)

▸ **replace**(`a`, `b`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

Returns a unary function which replaces text in a string, 
using a regular expression or search string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.replace("l", "e")("hello")         // "heelo"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the the string to replace |
| `b` | [`StringReplacer`](Str.md#stringreplacer) | the replacer |

#### Returns

`fn`

the unary function

▸ (`b`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

[src/Str.ts:1033](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1033)

___

### reverse

▸ **reverse**(`a`): `string`

Reverses a string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.reverse('hello'); // 'olleh'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string to reverse |

#### Returns

`string`

the reversed string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### search

▸ **search**(`a`, `b`): [`T`](Opt.md#t)<`number`\>

Finds the first substring match in a regular expression search.

**Important**: it differs from plain js String.prototype.search, 
               since it will return `None` if the index is below `0`

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.search("hello", "l")         // 2
Str.search("hello", "k")         // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | [`StringSearcher`](Str.md#stringsearcher) | the string searcher |

#### Returns

[`T`](Opt.md#t)<`number`\>

- `Option.Some<number>` if is in bound
 - `Option.None` otherwise

#### Defined in

[src/Str.ts:1085](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1085)

▸ **search**(`a`): (`b`: [`T`](Str.md#t)) => [`T`](Opt.md#t)<`number`\>

Returns a unary function which finds the first substring match 
in a regular expression search.

**Important**: it differs from plain js String.prototype.search, 
               since it will return `None` if the index is below `0`

**`Example`**

```ts
import { Str } from 'tiinvo';

const searchl = Str.search("l");

searchl("hello")        // 2
searchl("foo_bar_baz")  // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`StringSearcher`](Str.md#stringsearcher) | the string searcher |

#### Returns

`fn`

the unary function

▸ (`b`): [`T`](Opt.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

[`T`](Opt.md#t)<`number`\>

#### Defined in

[src/Str.ts:1109](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1109)

___

### slice

▸ **slice**(`a`, `b`, `c?`): `string`

Returns a section of a string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.slice("hello", 1)         // "ello"
Str.slice("hello", 1, 3)      // "el"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | `number` | the starting index |
| `c?` | `number` | the ending index (optional) |

#### Returns

`string`

the sliced string

#### Defined in

[src/Str.ts:1141](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1141)

▸ **slice**(`a`, `b?`): (`b`: [`T`](Str.md#t)) => `string`

Returns a unary function which slices a string.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.slice(1)("hello")         // "ello"
Str.slice(1, 3)("hello")      // "el"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the starting index |
| `b?` | `number` | the ending index (optional) |

#### Returns

`fn`

the unary function

▸ (`b`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

`string`

#### Defined in

[src/Str.ts:1160](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1160)

___

### split

▸ **split**(`a`, `b`, `c?`): [`T`](Str.md#t)[]

Split a string into substrings using the specified separator and return 
them as an array.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.split("hello world", " ")         // ["hello", "world"]
Str.split("hello world", " ", 1)      // ["hello"]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |
| `b` | [`StringSplitter`](Str.md#stringsplitter) | the string splitter |
| `c?` | `number` | a value used to limit the number of elements returned in the array (optional) |

#### Returns

[`T`](Str.md#t)[]

the resulting array

#### Defined in

[src/Str.ts:1191](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1191)

▸ **split**(`a`, `b?`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)[]\>

Returns a unary function which splits a string into substrings 
using the specified separator and return them as an array.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.split(" ")("hello world")         // ["hello", "world"]
Str.split(" ", 1)("hello world")      // ["hello"]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`StringSplitter`](Str.md#stringsplitter) | the string splitter |
| `b?` | `number` | a value used to limit the number of elements returned in the array (optional) |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)[]\>

the unary function

#### Defined in

[src/Str.ts:1211](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1211)

___

### trim

▸ **trim**(`a`): `string`

Trims a string both at start an the end of it.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.trim('    hello world    '); // 'hello world'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the trimmed string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### trimEnd

▸ **trimEnd**(`a`): `string`

Trims a string at it's end.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.trimEnd('    hello world    '); // '    hello world'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the trimmed string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### trimStart

▸ **trimStart**(`a`): `string`

Trims a string at it's start.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.trimStart('    hello world    '); // 'hello world    '
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the trimmed string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### upper

▸ **upper**(`a`): `string`

Returns a uppercased string

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.upper('hello'); // "HELLO"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`

the uppercased string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

___

### words

▸ **words**(`a`): `string`[]

Returns an array of words in a string.

```ts
import { Str } from 'tiinvo';

Str.words('hello world'); // ['hello', 'world']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the string |

#### Returns

`string`[]

the array containing the words in string `a`

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/5743591/src/Fn.ts#L22)

## Serializables

### toArray

▸ **toArray**(`t`): `string`[]

Returns an array of chars

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toArray("hello")   // ["h", "e", "l", "l", "o"]
```

**`Returs`**

the resulting char array

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | the string |

#### Returns

`string`[]

#### Defined in

[src/Str.ts:1330](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1330)

___

### toBinArray

▸ **toBinArray**(`t`): `string`[]

Returns an array of binarized char codes

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toBinArray("hello")   // ["0b1101000", "0b1100101", "0b1101100", "0b1101100", "0b1101111"]
```

**`Returs`**

the resulting binary strings array

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | the string |

#### Returns

`string`[]

#### Defined in

[src/Str.ts:1348](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1348)

___

### toCharCodeArray

▸ **toCharCodeArray**(`t`): `number`[]

Returns an array of char codes

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toCharCodeArray("hello")   // [104, 101, 108, 108, 111]
```

**`Returs`**

the resulting char code array

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | the string |

#### Returns

`number`[]

#### Defined in

[src/Str.ts:1366](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1366)

___

### toHexArray

▸ **toHexArray**(`t`): `string`[]

Returns an array of hexadecimals string

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toHexArray("hello") // ["0x68", "0x65", "0x6c", "0x6c", "0x6f"]
```

**`Returs`**

the resulting hex char code array

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | the string |

#### Returns

`string`[]

#### Defined in

[src/Str.ts:1384](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1384)

___

### toOctArray

▸ **toOctArray**(`t`): `string`[]

Returns an array of octal strings

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toHexArray("hello") // ["0o150", "0o145", "0o154", "0o154", "0o157"]
```

**`Returs`**

the resulting oct char code array

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | the string |

#### Returns

`string`[]

#### Defined in

[src/Str.ts:1418](https://github.com/OctoD/tiinvo/blob/5743591/src/Str.ts#L1418)
