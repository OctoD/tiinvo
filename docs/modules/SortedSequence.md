[tiinvo](../README.md) / [Exports](../modules.md) / SortedSequence

# Namespace: SortedSequence

## Table of contents

### Type Aliases

- [t](SortedSequence.md#t)

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

### t

Ƭ **t**<`a`\>: [`t`](Sequence.md#t)<`a`\> & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`a`\>  }

A sorted list is a `Sequence.t<a>` which all elements stored in it are sorted by a `Comparable<a>` functor.

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

[src/SortedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L10)

## Functions

### make

▸ **make**<`a`\>(`mod`, ...`args`): [`t`](SortedSequence.md#t)<`a`\>

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

[`t`](SortedSequence.md#t)<`a`\>

#### Defined in

[src/SortedSequence.ts:35](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L35)

▸ **make**<`a`\>(`mod`, ...`args`): [`t`](SortedSequence.md#t)<`a`\>

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

[`t`](SortedSequence.md#t)<`a`\>

#### Defined in

[src/SortedSequence.ts:36](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L36)

___

### guard

▸ **guard**(`x`): x is t<unknown\>

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

x is t<unknown\>

#### Defined in

[src/SortedSequence.ts:67](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L67)

___

### guardOf

▸ **guardOf**<`a`\>(`g`): (`x`: `unknown`) => x is t<a\>

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

▸ (`x`): x is t<a\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is t<a\>

#### Defined in

[src/SortedSequence.ts:87](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L87)

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

[src/SortedSequence.ts:117](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L117)

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

[src/SortedSequence.ts:118](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L118)

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

[src/SortedSequence.ts:148](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L148)

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

[src/SortedSequence.ts:149](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L149)

___

### map

▸ **map**<`a`, `b`\>(`a`, `m`): [`t`](SortedSequence.md#t)<`b`\>

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
| `a` | [`t`](SortedSequence.md#t)<`a`\> |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

[`t`](SortedSequence.md#t)<`b`\>

#### Defined in

[src/SortedSequence.ts:179](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L179)

▸ **map**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](SortedSequence.md#t)<`a`\>, [`t`](SortedSequence.md#t)<`b`\>\>

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

[`Unary`](Fn.md#unary)<[`t`](SortedSequence.md#t)<`a`\>, [`t`](SortedSequence.md#t)<`b`\>\>

#### Defined in

[src/SortedSequence.ts:180](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L180)

___

### add

▸ **add**<`a`, `b`\>(`a`, `b`): [`t`](SortedSequence.md#t)<`b`\>

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

[`t`](SortedSequence.md#t)<`b`\>

#### Defined in

[src/SortedSequence.ts:211](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L211)

▸ **add**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<`a`, [`t`](SortedSequence.md#t)<`b`\>\>

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

[`Unary`](Fn.md#unary)<`a`, [`t`](SortedSequence.md#t)<`b`\>\>

#### Defined in

[src/SortedSequence.ts:212](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L212)

___

### concat

▸ **concat**<`a`, `b`\>(`a`, `b`): [`t`](SortedSequence.md#t)<`a` & `b`\>

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
| `a` | [`t`](SortedSequence.md#t)<`a`\> |
| `b` | [`t`](SortedSequence.md#t)<`b`\> |

#### Returns

[`t`](SortedSequence.md#t)<`a` & `b`\>

#### Defined in

[src/SortedSequence.ts:238](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L238)

▸ **concat**<`a`, `b`\>(`a`): <a\>(`x`: [`t`](SortedSequence.md#t)<`a`\>) => [`t`](SortedSequence.md#t)<`a` & `b`\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](SortedSequence.md#t)<`b`\> |

#### Returns

`fn`

▸ <`a`\>(`x`): [`t`](SortedSequence.md#t)<`a` & `b`\>

##### Type parameters

| Name |
| :------ |
| `a` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`t`](SortedSequence.md#t)<`a`\> |

##### Returns

[`t`](SortedSequence.md#t)<`a` & `b`\>

#### Defined in

[src/SortedSequence.ts:239](https://github.com/OctoD/tiinvo/blob/d3b011b/src/SortedSequence.ts#L239)

___

### count

▸ **count**<`a`\>(`a`, `p`): `number`

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `p` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Returns

`number`

#### Defined in

[src/Sequence.ts:481](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L481)

▸ **count**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `number`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `number`\>

#### Defined in

[src/Sequence.ts:482](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L482)

___

### get

▸ **get**<`a`\>(`a`, `i`): [`t`](Result.md#t)<`a`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `i` | `number` |

#### Returns

[`t`](Result.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:533](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L533)

▸ **get**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:534](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L534)

___

### first

▸ **first**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`T`](Option.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:510](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L510)

___

### last

▸ **last**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`T`](Option.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:576](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L576)

___

### length

▸ **length**<`a`\>(`t`): `number`

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`number`

#### Defined in

[src/Sequence.ts:596](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L596)

___

### values

▸ **values**<`a`\>(`t`): `Readonly`<`Record`<`number`, `a`\>\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`Readonly`<`Record`<`number`, `a`\>\>

#### Defined in

[src/Sequence.ts:613](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L613)

___

### empty

▸ **empty**<`a`\>(`t`): `boolean`

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:636](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L636)

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
| `t` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:654](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L654)

___

### toArray

▸ **toArray**<`a`\>(`a`): `a`[]

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`a`[]

#### Defined in

[src/Sequence.ts:733](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L733)

___

### toJSON

▸ **toJSON**<`a`\>(`a`): `a`[]

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
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`a`[]

#### Defined in

[src/Sequence.ts:748](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L748)

___

### toMap

▸ **toMap**<`a`\>(`a`): `Map`<`string`, `a`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`Map`<`string`, `a`\>

#### Defined in

[src/Sequence.ts:763](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L763)

___

### toSet

▸ **toSet**<`a`\>(`a`): `Set`<`a`\>

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`Set`<`a`\>

#### Defined in

[src/Sequence.ts:780](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L780)

___

### toString

▸ **toString**<`a`\>(`a`): `string`

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`string`

#### Defined in

[src/Sequence.ts:797](https://github.com/OctoD/tiinvo/blob/d3b011b/src/Sequence.ts#L797)
