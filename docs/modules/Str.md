[tiinvo](../README.md) / [Exports](../modules.md) / Str

# Namespace: Str

## Table of contents

### Type Aliases

- [T](Str.md#t)
- [StringReplacer](Str.md#stringreplacer)
- [StringSearcher](Str.md#stringsearcher)
- [StringSplitter](Str.md#stringsplitter)

### Functions

- [guard](Str.md#guard)
- [cmp](Str.md#cmp)
- [eq](Str.md#eq)
- [asc](Str.md#asc)
- [desc](Str.md#desc)
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
- [toCharCodeArray](Str.md#tocharcodearray)
- [toHexArray](Str.md#tohexarray)

## Type Aliases

### T

Ƭ **T**: `string`

The type alias for string

**`Since`**

4.0.0

#### Defined in

src/Str.ts:10

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

src/Str.ts:22

___

### StringSearcher

Ƭ **StringSearcher**: [`T`](Str.md#t) \| { `[search]`: (`string`: `string`) => `number`  }

A string searcher argument

**`Since`**

4.0.0

#### Defined in

src/Str.ts:28

___

### StringSplitter

Ƭ **StringSplitter**: [`T`](Str.md#t) \| { `[split]`: (`string`: `string`, `limit?`: `number`) => `string`[]  }

A string splitter argument

**`Since`**

4.0.0

#### Defined in

src/Str.ts:36

## Functions

### guard

▸ **guard**(`x`): x is string

Express a function which guards if a passed parameter `x` is of a certain type `a`.

Read more about typeguards on ts doc pages.

**`Example`**

```ts
import { Functors } from 'tiinvo';

let is0: Functors.Guardable<0> = (x: unknown): x is 0 => x === 0;

is0(10)    // false
is0("")    // false
is0(-1)    // false
is0(0)     // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is string

#### Defined in

src/Functors.ts:338

___

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

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Str.ts:71

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

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

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Str.ts:95

___

### eq

▸ **eq**(`a`, `b`): `boolean`

Returns `true` if two strings are the same

**Important**: strings are compared as is, no lowercasing is applied

```ts
import { Str } from 'tiinvo';

Str.eq('a', 'a')  // true
Str.eq('a', 'b')  // false
Str.eq('b', 'a')  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

#### Defined in

src/Str.ts:121

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

Returns `true` if two strings are the same

**Important**: strings are compared as is, no lowercasing is applied

```ts
import { Str } from 'tiinvo';

Str.eq('a', 'a')  // true
Str.eq('a', 'b')  // false
Str.eq('b', 'a')  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

#### Defined in

src/Str.ts:137

___

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

src/Str.ts:168

▸ **asc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Str.ts:169

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

src/Str.ts:196

▸ **desc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Str.ts:197

___

### camel

▸ **camel**(`a`): `string`

Formats a string to camel case.

```typescript
import { Str } from 'tiinvo';

Str.camel('hello world'); // 'helloWorld'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### charAt

▸ **charAt**(`a`, `b`): [`T`](Option.md#t)<[`T`](Str.md#t)\>

Returns the character `Option.t<string>` at the specified index.

If `a` and `b` parameters are passed, `b` is the char position for string `a`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and `a` is the char position for string `b`.

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charAt("hello", 0)         // "h"
Str.charAt("hello", 10)        // null
Str.charAt(0)("hello")         // "h" 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `number` |

#### Returns

[`T`](Option.md#t)<[`T`](Str.md#t)\>

#### Defined in

src/Str.ts:246

▸ **charAt**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<[`T`](Str.md#t)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<[`T`](Str.md#t)\>\>

#### Defined in

src/Str.ts:247

___

### charCodeAt

▸ **charCodeAt**(`a`, `b`): [`T`](Option.md#t)<`number`\>

Returns the char code `Option.t<string>` at the specified index.

If `a` and `b` parameters are passed, `b` is the char position for string `a`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and `a` is the char code position for string `b`.

**Important**: if the index is out of range, then `None` is returned.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.charCodeAt("hello", 0)         // 104
Str.charCodeAt("hello", 10)        // null
Str.charCodeAt(0)("hello")         // 104 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `number` |

#### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:283

▸ **charCodeAt**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<`number`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<`number`\>\>

#### Defined in

src/Str.ts:284

___

### chars

▸ **chars**(`a`): `string`[]

Returns a string chars array

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.chars('hello'); // ['h','e','l','l','o']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`[]

#### Defined in

src/Fn.ts:18

___

### concat

▸ **concat**(`a`, `b`): [`T`](Str.md#t)

Returns a concatenated string.

If `a` and `b` parameters are passed, then the result is `a + b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b + a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.concat("hello", "world")         // "helloworld"
Str.concat("world")("hello")         // "helloworld"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:332

▸ **concat**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)\>

#### Defined in

src/Str.ts:333

___

### endsWith

▸ **endsWith**(`a`, `b`): `boolean`

Returns if a string terminates with another one.

If `a` and `b` parameters are passed, then the result is `a` ends with `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.endsWith("hello", "o")         // true
Str.endsWith("o")("hello")         // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

#### Defined in

src/Str.ts:360

▸ **endsWith**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

#### Defined in

src/Str.ts:361

___

### includes

▸ **includes**(`a`, `b`): `boolean`

Returns if a string includes another one.

If `a` and `b` parameters are passed, then the result is `a` ends with `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.includes("hello", "o")         // true
Str.includes("o")("hello")         // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

`boolean`

#### Defined in

src/Str.ts:388

▸ **includes**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), `boolean`\>

#### Defined in

src/Str.ts:389

___

### indexOf

▸ **indexOf**(`a`, `b`, `i?`): [`T`](Option.md#t)<`number`\>

Returns the position of the first occurrence of `a` in `b`.

If `a` and `b` parameters are passed, then the result is the position of `b` in `a`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is the position of `a` in `b`.

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

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |
| `i?` | `number` |

#### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:418

▸ **indexOf**(`a`): (`b`: [`T`](Str.md#t), `i?`: `number`) => [`T`](Option.md#t)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`fn`

▸ (`b`, `i?`): [`T`](Option.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `i?` | `number` |

##### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:419

___

### lastIndexOf

▸ **lastIndexOf**(`a`, `b`, `p?`): [`T`](Option.md#t)<`number`\>

Returns last string position of 'b' in 'a'.

If `a` and `b` parameters are passed, then the result is `b` last position `a`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `a` last position `b`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.lastIndexOf("hello", "l")         // 3
Str.lastIndexOf("l")("hello")         // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |
| `p?` | `number` |

#### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:445

▸ **lastIndexOf**(`a`): (`b`: [`T`](Str.md#t), `p?`: `number`) => [`T`](Option.md#t)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`fn`

▸ (`b`, `p?`): [`T`](Option.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `p?` | `number` |

##### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:446

___

### length

▸ **length**(`a`): `number`

Returns a string length

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.length('hello'); // 5
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`number`

#### Defined in

src/Fn.ts:18

___

### lines

▸ **lines**(`a`): `string`[]

Returns an array of lines in a string.

```typescript
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

#### Defined in

src/Fn.ts:18

___

### lower

▸ **lower**(`a`): `string`

Returns a lowercased string

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.lower('HELLO'); // "hello"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### match

▸ **match**(`a`, `b`): [`T`](Option.md#t)<`RegExpMatchArray`\>

Returns if a string includes another one.

If `a` and `b` parameters are passed, then the result is `a` ends with `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b`  ends with `a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.match("hello", "o")         // ['o']
Str.match("o")("hello")         // ['o']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` \| `RegExp` |

#### Returns

[`T`](Option.md#t)<`RegExpMatchArray`\>

#### Defined in

src/Str.ts:520

▸ **match**(`a`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<`RegExpMatchArray`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| `RegExp` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Option.md#t)<`RegExpMatchArray`\>\>

#### Defined in

src/Str.ts:521

___

### padEnd

▸ **padEnd**(`a`, `b`, `c?`): [`T`](Str.md#t)

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
| `a` | `string` |
| `b` | `number` |
| `c?` | `string` |

#### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:551

▸ **padEnd**(`a`): (`b`: [`T`](Str.md#t), `d?`: [`T`](Str.md#t)) => [`T`](Str.md#t)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`fn`

▸ (`b`, `d?`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `d?` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:552

▸ **padEnd**(`a`, `b?`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

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

src/Str.ts:553

___

### pascal

▸ **pascal**(`a`): `string`

Formats a string to pascal case.

```typescript
import { Str } from 'tiinvo';

Str.pascal('hello world'); // 'HelloWorld'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### padStart

▸ **padStart**(`a`, `b`, `c?`): [`T`](Str.md#t)

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

If `a` and `b` parameters are passed, then the result is `a` padded by `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` padded by `a`.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.padStart("a", 5)         // "    a"
Str.padStart("a", 5, "b")    // "bbbba"
Str.padStart(5)("a")         // "    a"
Str.padStart(5, "b")("a")    // "bbbba"
Str.padStart(5)("a", "b")    // "bbbba"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `number` |
| `c?` | `string` |

#### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:596

▸ **padStart**(`a`): (`b`: [`T`](Str.md#t), `d?`: [`T`](Str.md#t)) => [`T`](Str.md#t)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`fn`

▸ (`b`, `d?`): [`T`](Str.md#t)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |
| `d?` | [`T`](Str.md#t) |

##### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:597

▸ **padStart**(`a`, `b?`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

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

src/Str.ts:598

___

### repeat

▸ **repeat**(`a`, `b`): [`T`](Str.md#t)

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned

If `a` and `b` parameters are passed, then the result is `a` repeated by `b` times.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` repeated by `a` times.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.repeat("a", 5)         // "aaaaa"
Str.repeat(5)("a")         // "aaaaa"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `number` |

#### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:625

▸ **repeat**(`a`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

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

src/Str.ts:626

___

### replace

▸ **replace**(`a`, `b`, `c`): [`T`](Str.md#t)

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned

If `a` and `b` parameters are passed, then the result is `a` repeated by `b` times.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` repeated by `a` times.

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.replace("hello", "l", "e")         // "heelo"
Str.replace("l", "e")("hello")         // "heelo"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |
| `c` | [`StringReplacer`](Str.md#stringreplacer) |

#### Returns

[`T`](Str.md#t)

#### Defined in

src/Str.ts:653

▸ **replace**(`a`, `b`): (`b`: [`T`](Str.md#t)) => [`T`](Str.md#t)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | [`StringReplacer`](Str.md#stringreplacer) |

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

src/Str.ts:654

___

### reverse

▸ **reverse**(`a`): `string`

Reverses a string.

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.reverse('hello'); // 'olleh'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### search

▸ **search**(`a`, `b`): [`T`](Option.md#t)<`number`\>

Finds the first substring match in a regular expression search.

If `a` and `b` parameters are passed, then the result is `a` is searched by `b`.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.

**Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.search("hello", "l")         // 2
Str.search("l")("hello")         // 2
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | [`StringSearcher`](Str.md#stringsearcher) |

#### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:698

▸ **search**(`a`): (`b`: [`T`](Str.md#t)) => [`T`](Option.md#t)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`StringSearcher`](Str.md#stringsearcher) |

#### Returns

`fn`

▸ (`b`): [`T`](Option.md#t)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

[`T`](Option.md#t)<`number`\>

#### Defined in

src/Str.ts:699

___

### slice

▸ **slice**(`a`, `b`, `c?`): `string`

Returns a section of a string.

If `a` and `b` parameters are passed, then the result is `a` a slice to `b`.

If `a` and `b` and `c` parameters are passed, then the result is `a` a slice from `b` ending to `c` position.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.

**Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.slice("hello", 1)         // "ello"
Str.slice("hello", 1, 3)      // "el"
Str.slice(1)("hello")         // "ello"
Str.slice(1, 3)("hello")      // "el"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `number` |
| `c?` | `number` |

#### Returns

`string`

#### Defined in

src/Str.ts:734

▸ **slice**(`a`, `b?`): (`b`: [`T`](Str.md#t)) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b?` | `number` |

#### Returns

`fn`

▸ (`b`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Str.md#t) |

##### Returns

`string`

#### Defined in

src/Str.ts:735

___

### split

▸ **split**(`a`, `b`, `c?`): [`T`](Str.md#t)[]

Returns a section of a string.

If `a` and `b` parameters are passed, then the result is `a` a slice to `b`.

If `a` and `b` and `c` parameters are passed, then the result is `a` a slice from `b` ending to `c` position.

If `b` parameter is not passed, returns a `Unary<string, string>` function and the result is `b` is searched by `a`.

**Important**: it differs from plain js String.prototype.search, since it will return `None` if the index is below `0`

**`Example`**

```ts
import { Str } from 'tiinvo';

Str.split("hello world", " ")         // ["hello", "world"]
Str.split(" ")("hello world")         // ["hello", "world"]
Str.split(" ", 1)("hello world")      // ["hello"]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | [`StringSplitter`](Str.md#stringsplitter) |
| `c?` | `string` |

#### Returns

[`T`](Str.md#t)[]

#### Defined in

src/Str.ts:767

▸ **split**(`a`, `b?`): [`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`StringSplitter`](Str.md#stringsplitter) |
| `b?` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Str.md#t), [`T`](Str.md#t)[]\>

#### Defined in

src/Str.ts:768

___

### trim

▸ **trim**(`a`): `string`

Trims a string.

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.trim('    hello world    '); // 'hello world'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### trimEnd

▸ **trimEnd**(`a`): `string`

Trims a string at it's end.

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.trimEnd('    hello world    '); // '    hello world'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### trimStart

▸ **trimStart**(`a`): `string`

Trims a string at it's start.

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.trimStart('    hello world    '); // 'hello world    '
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### upper

▸ **upper**(`a`): `string`

Returns a uppercased string

**`Example`**

```typescript
import { Str } from 'tiinvo';

Str.upper('hello'); // "HELLO"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`

#### Defined in

src/Fn.ts:18

___

### words

▸ **words**(`a`): `string`[]

Returns an array of words in a string.

```typescript
import { Str } from 'tiinvo';

Str.words('hello world'); // ['hello', 'world']
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |

#### Returns

`string`[]

#### Defined in

src/Fn.ts:18

## Serializables

### toArray

▸ **toArray**(`t`): `string`[]

Returns an array of chars

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toArray("hello")   // ["h", "e", "l", "l", "o"]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`string`[]

#### Defined in

src/Str.ts:871

___

### toCharCodeArray

▸ **toCharCodeArray**(`t`): `number`[]

Returns an array of char codes

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toCharCodeArray("hello")   // [104, 101, 108, 108, 111]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`number`[]

#### Defined in

src/Str.ts:887

___

### toHexArray

▸ **toHexArray**(`t`): `string`[]

Returns an array of hexadecimals string

**`Example`**

```ts
import { Str } from 'tiinvo'

Str.toHexArray("hello") // ["0x68", "0x65", "0x6c", "0x6c", "0x6f"]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

`string`[]

#### Defined in

src/Str.ts:903
