[tiinvo](../README.md) / [Exports](../modules.md) / SortedSequence

# Namespace: SortedSequence

## Table of contents

### Type Aliases

- [T](SortedSequence.md#t)

### Functions

- [make](SortedSequence.md#make)
- [guard](SortedSequence.md#guard)
- [guardOf](SortedSequence.md#guardof)
- [cmp](SortedSequence.md#cmp)
- [eq](SortedSequence.md#eq)
- [map](SortedSequence.md#map)
- [add](SortedSequence.md#add)
- [concat](SortedSequence.md#concat)
- [count](SortedSequence.md#count)
- [get](SortedSequence.md#get)
- [first](SortedSequence.md#first)
- [last](SortedSequence.md#last)
- [length](SortedSequence.md#length)
- [values](SortedSequence.md#values)
- [empty](SortedSequence.md#empty)
- [populated](SortedSequence.md#populated)
- [toArray](SortedSequence.md#toarray)
- [toJSON](SortedSequence.md#tojson)
- [toMap](SortedSequence.md#tomap)
- [toSet](SortedSequence.md#toset)
- [toString](SortedSequence.md#tostring)

## Type Aliases

### T

Ƭ **T**<`a`\>: [`T`](Sequence.md#t)<`a`\> & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`a`\>  }

A sorted list is a `Sequence.t<a>` which all elements stored in it are sorted by a `Comparable<a>` functor.

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

[src/SortedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L10)

## Functions

### make

▸ **make**<`a`\>(`mod`, ...`args`): [`T`](SortedSequence.md#t)<`a`\>

Makes an immutable `SortedSequence.t<a>` from a `ComparableModule<a>` and (optionally) a list of arguments as initial values

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20, 30)         
const s1 = SortedSequence.make(Str, 'hello', 'world')

SortedSequence.guardOf(Num.guard)(s0)    // true
SortedSequence.guardOf(Num.guard)(s1)    // false
SortedSequence.guardOf(Str.guard)(s0)    // false
SortedSequence.guardOf(Str.guard)(s1)    // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`Comparable`](Functors.md#comparable)<`a`\> |
| `...args` | `a`[] |

#### Returns

[`T`](SortedSequence.md#t)<`a`\>

#### Defined in

[src/SortedSequence.ts:35](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L35)

▸ **make**<`a`\>(`mod`, ...`args`): [`T`](SortedSequence.md#t)<`a`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |
| `...args` | `a`[] |

#### Returns

[`T`](SortedSequence.md#t)<`a`\>

#### Defined in

[src/SortedSequence.ts:36](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L36)

___

### guard

▸ **guard**(`x`): x is T<unknown\>

Checks if the parameter `x` is a `SortedSequence.t<unknown>`

**`Example`**

```ts
import { SortedSequence, Str } from 'tiinvo'

const s = SortedSequence.make(Str)

SortedSequence.guard(s)         // true
SortedSequence.guard([])        // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is T<unknown\>

#### Defined in

[src/SortedSequence.ts:66](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L66)

___

### guardOf

▸ **guardOf**<`a`\>(`g`): (`x`: `unknown`) => x is T<a\>

Checks if the parameter `x` is a `SortedSequence.t<a>`

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num, 1, 2)
const s1 = SortedSequence.make(Str, 'hello', 'world')
const isStrSortedList = SortedSequence.guardOf(Str.guard);

isStrSortedList(s0)      // false
isStrSortedList(s1)      // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`a`\> |

#### Returns

`fn`

▸ (`x`): x is T<a\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<a\>

#### Defined in

[src/SortedSequence.ts:86](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L86)

___

### cmp

▸ **cmp**<`a`\>(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Returns 0 if two sorted lists are the same, -1 if a is less than b or 1 if a is more than b

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)

SortedSequence.cmp(s0, s1)      // 0
SortedSequence.cmp(s0)(s1)      // 0

SortedSequence.cmp(s0, s2)      // -1
SortedSequence.cmp(s0)(s2)      // -1

SortedSequence.cmp(s2, s0)      // 1
SortedSequence.cmp(s2)(s0)      // 1
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `a` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/SortedSequence.ts:116](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L116)

▸ **cmp**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, [`ComparableResult`](Functors.md#comparableresult)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/SortedSequence.ts:117](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L117)

___

### eq

▸ **eq**<`a`\>(`a`, `b`): `boolean`

Returns true if two sorted lists are the same

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)

SortedSequence.eq(s0, s1)      // true
SortedSequence.eq(s0)(s1)      // true

SortedSequence.eq(s0, s2)      // false
SortedSequence.eq(s0)(s2)      // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `a` |

#### Returns

`boolean`

#### Defined in

[src/SortedSequence.ts:147](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L147)

▸ **eq**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Defined in

[src/SortedSequence.ts:148](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L148)

___

### map

▸ **map**<`a`, `b`\>(`a`, `m`): [`T`](SortedSequence.md#t)<`b`\>

Maps a `SortedSequence.t<a>` to a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make<number>(Num, 3, 1, 2)
const m = Num.mul(2)

SortedSequence.map(s, m)        // SortedSequence.t(2, 4, 6)
SortedSequence.map(m)(s)        // SortedSequence.t(2, 4, 6)
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`a`\> |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

[`T`](SortedSequence.md#t)<`b`\>

#### Defined in

[src/SortedSequence.ts:178](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L178)

▸ **map**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](SortedSequence.md#t)<`a`\>, [`T`](SortedSequence.md#t)<`b`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](SortedSequence.md#t)<`a`\>, [`T`](SortedSequence.md#t)<`b`\>\>

#### Defined in

[src/SortedSequence.ts:179](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L179)

___

### add

▸ **add**<`a`, `b`\>(`a`, `b`): [`T`](SortedSequence.md#t)<`b`\>

Adds an element to the end of the `Sequence.t<a>` without mutating the original one.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20)

SortedSequence.add(s0, 30)       // SortedSequence(10, 20, 30)
SortedSequence.add(30)(s0)       // SortedSequence(10, 20, 30)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |
| `b` | `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |

#### Returns

[`T`](SortedSequence.md#t)<`b`\>

#### Defined in

[src/SortedSequence.ts:210](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L210)

▸ **add**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<`a`, [`T`](SortedSequence.md#t)<`b`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } |
| `b` | `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `b` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, [`T`](SortedSequence.md#t)<`b`\>\>

#### Defined in

[src/SortedSequence.ts:211](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L211)

___

### concat

▸ **concat**<`a`, `b`\>(`a`, `b`): [`T`](SortedSequence.md#t)<`a` & `b`\>

Concatenates two `SortedSequence.t<a>` and `SortedSequence.t<b>` and return a new `SortedSequence.t<a>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20)
const s1 = SortedSequence.make(Num, 30, 40)

SortedSequence.concat(s0, s1)       // SortedSequence(10, 20, 30, 40)
SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`a`\> |
| `b` | [`T`](SortedSequence.md#t)<`b`\> |

#### Returns

[`T`](SortedSequence.md#t)<`a` & `b`\>

#### Defined in

[src/SortedSequence.ts:237](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L237)

▸ **concat**<`a`, `b`\>(`a`): <a\>(`x`: [`T`](SortedSequence.md#t)<`a`\>) => [`T`](SortedSequence.md#t)<`a` & `b`\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`b`\> |

#### Returns

`fn`

▸ <`a`\>(`x`): [`T`](SortedSequence.md#t)<`a` & `b`\>

##### Type parameters

| Name |
| :------ |
| `a` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`T`](SortedSequence.md#t)<`a`\> |

##### Returns

[`T`](SortedSequence.md#t)<`a` & `b`\>

#### Defined in

[src/SortedSequence.ts:238](https://github.com/OctoD/tiinvo/blob/44a62fc/src/SortedSequence.ts#L238)

___

### count

▸ **count**<`A`\>(`a`, `p`): `number`

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 10, 20, 30)

SortedSequence.count(s, Num.gt(10))   // 2
SortedSequence.count(Num.gt(10))(s)   // 2
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> |
| `p` | [`Filterable`](Functors.md#filterable)<`A`\> |

#### Returns

`number`

#### Defined in

[src/Sequence.ts:1045](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1045)

▸ **count**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 10, 20, 30)

SortedSequence.count(s, Num.gt(10))   // 2
SortedSequence.count(Num.gt(10))(s)   // 2
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

#### Defined in

[src/Sequence.ts:1067](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1067)

___

### get

▸ **get**<`A`\>(`a`, `i`): [`T`](Result.md#t)<`A`\>

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 'hello', 'world')

SortedSequence.get(s, 0)       // 'hello'
SortedSequence.get(s, 9)       // null
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> |
| `i` | `number` |

#### Returns

[`T`](Result.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1129](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1129)

▸ **get**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 'hello', 'world')

SortedSequence.get(s, 0)       // 'hello'
SortedSequence.get(s, 9)       // null
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

#### Defined in

[src/Sequence.ts:1154](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1154)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20, 30)
const s1 = SortedSequence.make(Num)

SortedSequence.first(s0)       // 10
SortedSequence.first(s1)       // null
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1101](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1101)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Gets a Sequence.t<a>'s last element.

Returns Option.None if none is found.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20, 30)
const s1 = SortedSequence.make(Num)

SortedSequence.last(s0)       // 30
SortedSequence.last(s1)       // null
```
```

@since 4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1196](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1196)

___

### length

▸ **length**<`A`\>(`t`): `number`

Gets the length of a `SortedSequence.t<a>`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 1, 2, 3)

SortedSequence.length(s)           // 3
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`number`

#### Defined in

[src/Sequence.ts:1220](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1220)

___

### values

▸ **values**<`A`\>(`t`): `Readonly`<`Record`<`number`, `A`\>\>

Gets values of a `SortedSequence.t<a>` as an immutable indexed object.

**`Example`**

```ts
import { SortedSequence, Str } from 'tiinvo'

const s = SortedSequence.make(Str, 'hello', 'world')

SortedSequence.values(s)       // { 0: 'hello', 1: 'world' }
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Readonly`<`Record`<`number`, `A`\>\>

#### Defined in

[src/Sequence.ts:1241](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1241)

___

### empty

▸ **empty**<`A`\>(`t`): `boolean`

Returns `true` if the sorted list is empty.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num)
const s1 = SortedSequence.make(Num, 10)

SortedSequence.empty(s)                // true
SortedSequence.empty(s1)               // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:1270](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1270)

___

### populated

▸ **populated**<`a`\>(`t`): `boolean`

Returns `true` if the sorted list is populated.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s = SortedSequence.make(Num, 10, 20, 30)

SortedSequence.populated(s)                      // true
SortedSequence.populated(SortedSequence.make(Num))   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:1294](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1294)

___

### toArray

▸ **toArray**<`A`\>(`t`): `A`[]

Converts a `SortedSequence.t<a>` to an array of `a[]`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toArray(sl)       // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`A`[]

#### Defined in

[src/Sequence.ts:1382](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1382)

___

### toJSON

▸ **toJSON**<`a`\>(`t`): `a`[]

Converts a `SortedSequence.t<a>` to a jsonizable value

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toJSON(sl)       // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> |

#### Returns

`a`[]

#### Defined in

[src/Sequence.ts:1401](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1401)

___

### toMap

▸ **toMap**<`A`\>(`t`): `Map`<`string`, `A`\>

Converts a `SortedSequence.t<a>` to a set of `Set<a>`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toMap(sl)      // Map([0, 1], [1, 2], [2, 3])
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Map`<`string`, `A`\>

#### Defined in

[src/Sequence.ts:1421](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1421)

___

### toSet

▸ **toSet**<`A`\>(`t`): `Set`<`A`\>

Converts a `SortedSequence.t<a>` to a set of `Set<a>`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toSet(sl)      // Set(1, 2, 3)
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Set`<`A`\>

#### Defined in

[src/Sequence.ts:1442](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1442)

___

### toString

▸ **toString**<`A`\>(`t`): `string`

Converts a `SortedSequence.t<a>` to a string

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toString(sl)       // "1,2,3"
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`string`

#### Defined in

[src/Sequence.ts:1463](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Sequence.ts#L1463)
