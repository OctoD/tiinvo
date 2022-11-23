[tiinvo](../README.md) / [Exports](../modules.md) / SortedSequence

# Namespace: SortedSequence

## Table of contents

### Type Aliases

- [t](SortedSequence.md#t)

### Functions

- [make](SortedSequence.md#make)
- [cmp](SortedSequence.md#cmp)
- [eq](SortedSequence.md#eq)
- [map](SortedSequence.md#map)
- [add](SortedSequence.md#add)
- [concat](SortedSequence.md#concat)

## Type Aliases

### t

Ƭ **t**<`a`\>: [`t`](Sequence.md#t)<`a`\> & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`a`\>  }

A sorted list is a `Sequence.t<a>` which all elements stored in it are sorted by a `Comparable<a>` functor.

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

[src/SortedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L10)

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

[src/SortedSequence.ts:35](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L35)

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

[src/SortedSequence.ts:117](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L117)

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

[src/SortedSequence.ts:148](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L148)

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

[src/SortedSequence.ts:179](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L179)

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

[src/SortedSequence.ts:211](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L211)

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

[src/SortedSequence.ts:238](https://github.com/OctoD/tiinvo/blob/e907769/src/SortedSequence.ts#L238)
