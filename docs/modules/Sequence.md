[tiinvo](../README.md) / [Exports](../modules.md) / Sequence

# Namespace: Sequence

## Table of contents

### Type Aliases

- [t](Sequence.md#t)

### Functions

- [cmp](Sequence.md#cmp)
- [eq](Sequence.md#eq)
- [map](Sequence.md#map)
- [reduce](Sequence.md#reduce)
- [filter](Sequence.md#filter)
- [filterReduce](Sequence.md#filterreduce)
- [filterMap](Sequence.md#filtermap)
- [append](Sequence.md#append)
- [concat](Sequence.md#concat)
- [prepend](Sequence.md#prepend)
- [count](Sequence.md#count)
- [get](Sequence.md#get)
- [sort](Sequence.md#sort)

## Type Aliases

### t

Ƭ **t**<`a`\>: `Iterable`<`a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `a`\>\> ; `[iterator]`: () => `Iterator`<`a`, `any`, `undefined`\>  }

A `Sequence.t<a>` is an iterable list of elements `a` in a particular order.

It's immutable by design.

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

[src/Sequence.ts:15](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L15)

## Functions

### cmp

▸ **cmp**<`a`\>(`mod`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Returns 0 if two sequences are the same, -1 if a is less than b or 1 if a is more than b

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num, s0, s1)      // 0
Sequence.cmp(Num, s0)(s1)      // 0
Sequence.cmp(Num)(s0, s1)      // 0

Sequence.cmp(Num, s0, s2)      // -1
Sequence.cmp(Num, s0)(s2)      // -1
Sequence.cmp(Num)(s0, s2)      // -1

Sequence.cmp(Num, s2, s0)      // 1
Sequence.cmp(Num, s2)(s0)      // 1
Sequence.cmp(Num)(s2, s0)      // 1
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
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `b` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Sequence.ts:147](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L147)

___

### eq

▸ **eq**<`a`\>(`mod`, `a`, `b`): `boolean`

Returns true if two sequences are the same

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.eq(Num, s0, s1)      // true
Sequence.eq(Num, s0)(s1)      // true
Sequence.eq(Num)(s0, s1)      // true

Sequence.eq(Num, s0, s2)      // false
Sequence.eq(Num, s0)(s2)      // false
Sequence.eq(Num)(s0, s2)      // false
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
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`a`\> |
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `b` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:185](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L185)

___

### map

▸ **map**<`a`, `b`\>(`a`, `m`): [`t`](Sequence.md#t)<`b`\>

Maps a `Sequence.t<a>` to a `Sequence.t<b>` using the functor `Functors.Mappable<a, b>`.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(1, 2, 3)

Sequence.map(s, Num.mul(2))        // Sequence.t(2, 4, 6)
Sequence.map(Num.mul(2))(s)        // Sequence.t(2, 4, 6)
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
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

[`t`](Sequence.md#t)<`b`\>

#### Defined in

[src/Sequence.ts:220](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L220)

___

### reduce

▸ **reduce**<`a`, `b`\>(`a`, `mod`, `s`): `b`

Reduces all elements `a` to `b` of a `Sequence.t<a>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.reduce(s, Num.add, 0)  // 60
Sequence.reduce<number, number>(Num.add, 0)(s)  // 60
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
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `mod` | [`Reduceable`](Functors.md#reduceable)<`a`, `b`\> |
| `s` | `b` |

#### Returns

`b`

#### Defined in

[src/Sequence.ts:248](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L248)

___

### filter

▸ **filter**<`a`\>(`a`, `f`): [`t`](Sequence.md#t)<`a`\>

Filters a `Sequence.t<a>` with a specified `Filterable<a>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30, 40)

Sequence.filter(s, Num.gt(20))   // Sequence.make(30, 40)
Sequence.filter(Num.gt(20))(s)   // Sequence.make(30, 40)
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
| `f` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Returns

[`t`](Sequence.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:278](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L278)

___

### filterReduce

▸ **filterReduce**<`a`, `b`\>(`a`, `mod`): `b`

Filters and reduce a `Sequence.t<a>` to `b`

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const s = Sequence.make(1, 2, 3, 4, 5)
const f: Functors.FilterReduceableModule<number, number> = {
   default: 0,
   filter: Num.isEven,
   reduce: Num.add,
}

Sequence.filterReduce(s, f)      // 6
Sequence.filterReduce(f)(s)      // 6
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
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `mod` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`a`, `b`\> |

#### Returns

`b`

#### Defined in

[src/Sequence.ts:309](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L309)

___

### filterMap

▸ **filterMap**<`a`, `b`\>(`a`, `f`): [`t`](Sequence.md#t)<`b`\>

Filters and maps a `Sequence.t<a>` to a `Sequence.t<b>` using the `FilterMappableModule<a, b>` functor.

**Important** The filter is applied before the map.

**`Example`**

```ts
import { Functors, Sequence, Num, Range } from 'tiinvo'

const f: Functors.FilterMappableModule<number, string | Error> = {
  filter: Num.isOdd,
  map: Num.toBin,
}
const s = Sequence.make(... Range.make(0, 10));
const m = Sequence.filterMap(f);

Sequence.filterMap(s, f)   // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
m(s)                       // ["0b1", "0b11", "0b101", "0b111", "0b1001"]

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
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `f` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`a`, `b`\> |

#### Returns

[`t`](Sequence.md#t)<`b`\>

#### Defined in

[src/Sequence.ts:356](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L356)

___

### append

▸ **append**<`a`\>(`a`, `b`): [`t`](Sequence.md#t)<`a`\>

Adds an element to the end of the `Sequence.t<a>` without mutating the original one.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)

Sequence.append(s0, 30)       // Sequence(10, 20, 30)
Sequence.append(30)(s0)       // Sequence(10, 20, 30)
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
| `b` | `a` |

#### Returns

[`t`](Sequence.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:398](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L398)

___

### concat

▸ **concat**<`a`, `b`\>(`a`, `b`): [`t`](Sequence.md#t)<`a` & `b`\>

Concatenates two `Sequence.t<a>` and `Sequence.t<b>` and return a new `Sequence.t<a>`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)
const s1 = Sequence.make(30, 40)

Sequence.concat(s0, s1)       // Sequence(10, 20, 30, 40)
Sequence.concat(s1)(s0)       // Sequence(10, 20, 30, 40)
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
| `a` | [`t`](Sequence.md#t)<`a`\> |
| `b` | [`t`](Sequence.md#t)<`b`\> |

#### Returns

[`t`](Sequence.md#t)<`a` & `b`\>

#### Defined in

[src/Sequence.ts:425](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L425)

___

### prepend

▸ **prepend**<`a`\>(`a`, `b`): [`t`](Sequence.md#t)<`a`\>

Adds an element to the start of the `Sequence.t<a>` without mutating the original one.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)

Sequence.prepend(s0, 30)       // Sequence(30, 10, 20)
Sequence.prepend(30)(s0)       // Sequence(30, 10, 20)
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
| `b` | `a` |

#### Returns

[`t`](Sequence.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:451](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L451)

___

### count

▸ **count**<`a`\>(`a`, `p`): `number`

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.count(s, Num.gt(10))   // 2
Sequence.count(Num.gt(10))(s)   // 2
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

[src/Sequence.ts:481](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L481)

___

### get

▸ **get**<`a`\>(`a`, `i`): [`t`](Result.md#t)<`a`\>

Gets an element at a specific index. 

If the index is out of bounds, `Option.None` is returned, otherwise it returns `a`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make('hello', 'world')

Sequence.get(s, 0)       // 'hello'
Sequence.get(s, 9)       // null
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

[src/Sequence.ts:533](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L533)

___

### sort

▸ **sort**<`a`\>(`a`, `mod`): [`t`](Sequence.md#t)<`a`\>

Sorts and returns a new `Sequence.t<a>` values with a `Comparable<a>` or `ComparableModule<a>` functor.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const a = Sequence.make(5, 3, 1, 4, 2)
const b = Sequence.sort(a, Num)

b          // Sequence.make(1, 2, 3, 4, 5)
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
| `mod` | [`Comparable`](Functors.md#comparable)<`a`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |

#### Returns

[`t`](Sequence.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:676](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Sequence.ts#L676)
