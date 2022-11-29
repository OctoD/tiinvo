[tiinvo](../README.md) / [Exports](../modules.md) / Sequence

# Namespace: Sequence

## Table of contents

### Type Aliases

- [t](Sequence.md#t)

### Functions

- [make](Sequence.md#make)
- [guard](Sequence.md#guard)
- [guardOf](Sequence.md#guardof)
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
- [first](Sequence.md#first)
- [get](Sequence.md#get)
- [last](Sequence.md#last)
- [length](Sequence.md#length)
- [values](Sequence.md#values)
- [empty](Sequence.md#empty)
- [populated](Sequence.md#populated)
- [sort](Sequence.md#sort)
- [fromString](Sequence.md#fromstring)
- [toArray](Sequence.md#toarray)
- [toJSON](Sequence.md#tojson)
- [toMap](Sequence.md#tomap)
- [toSet](Sequence.md#toset)
- [toString](Sequence.md#tostring)

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

[src/Sequence.ts:15](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L15)

## Functions

### make

▸ **make**<`a`\>(...`v`): [`t`](Sequence.md#t)<`a`\>

Makes a new `Sequence.t<a>` from a list of arguments `a`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.make(10, 20, 30)    // Sequence.t<number>
Sequence.make([10, 20, 30])    // Sequence.t<number>
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
| `...v` | `a`[] |

#### Returns

[`t`](Sequence.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:36](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L36)

___

### guard

▸ **guard**(`x`): x is t<unknown\>

Checks if a value `x` is a `Sequence.t<unknown>`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.guard(10)                 // false
Sequence.guard([10, 20, 30])       // false
Sequence.guard(Sequence.make())    // true
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

[src/Sequence.ts:94](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L94)

___

### guardOf

▸ **guardOf**<`a`\>(`g`): (`x`: `unknown`) => x is t<a\>

Checks if the parameter `x` is a `Sequence.t<a>`

**`Example`**

```ts
import { Sequence, Num, Str } from 'tiinvo'

const s0 = Sequence.make<number | string>(1, 'hello', 2)
const s1 = Sequence.make('hello', 'world')
const isStrSequence = Sequence.guardOf(Str.guard);

isStrSequence(s0)      // false
isStrSequence(s1)      // true
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

[src/Sequence.ts:114](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L114)

___

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

[src/Sequence.ts:147](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L147)

▸ **cmp**<`a`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Sequence.ts:148](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L148)

▸ **cmp**<`a`\>(`mod`): [`Binary`](Fn.md#binary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Sequence.ts:149](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L149)

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

[src/Sequence.ts:185](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L185)

▸ **eq**<`a`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`a`\> |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `boolean`\>

#### Defined in

[src/Sequence.ts:186](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L186)

▸ **eq**<`a`\>(`mod`): [`Binary`](Fn.md#binary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`a`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>, `boolean`\>

#### Defined in

[src/Sequence.ts:187](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L187)

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

[src/Sequence.ts:220](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L220)

▸ **map**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`b`\>\>

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

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`b`\>\>

#### Defined in

[src/Sequence.ts:221](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L221)

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

[src/Sequence.ts:248](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L248)

▸ **reduce**<`a`, `b`\>(`a`, `mod`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `b`\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Reduceable`](Functors.md#reduceable)<`a`, `b`\> |
| `mod` | `b` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `b`\>

#### Defined in

[src/Sequence.ts:249](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L249)

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

[src/Sequence.ts:278](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L278)

▸ **filter**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:279](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L279)

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

[src/Sequence.ts:309](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L309)

▸ **filterReduce**<`a`, `b`\>(`mod`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `b`\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`a`, `b`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `b`\>

#### Defined in

[src/Sequence.ts:310](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L310)

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

[src/Sequence.ts:356](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L356)

▸ **filterMap**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`b`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`a`, `b`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`b`\>\>

#### Defined in

[src/Sequence.ts:357](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L357)

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

[src/Sequence.ts:398](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L398)

▸ **append**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:399](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L399)

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

[src/Sequence.ts:425](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L425)

▸ **concat**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`b`\>, [`t`](Sequence.md#t)<`a` & `b`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Sequence.md#t)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`b`\>, [`t`](Sequence.md#t)<`a` & `b`\>\>

#### Defined in

[src/Sequence.ts:426](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L426)

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

[src/Sequence.ts:451](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L451)

▸ **prepend**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:452](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L452)

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

[src/Sequence.ts:481](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L481)

▸ **count**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `number`\>

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

[src/Sequence.ts:482](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L482)

___

### first

▸ **first**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

Gets a `Sequence.t<a>`'s first element.

Returns `Option.None` if none is found.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20, 30)
const s1 = Sequence.make()

Sequence.first(s0)       // 10
Sequence.first(s1)       // null
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

[src/Sequence.ts:510](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L510)

___

### get

▸ **get**<`a`\>(`a`, `i`): [`T`](Result.md#t)<`a`\>

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

[`T`](Result.md#t)<`a`\>

#### Defined in

[src/Sequence.ts:533](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L533)

▸ **get**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:534](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L534)

___

### last

▸ **last**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

Gets a `Sequence.t<a>`'s last element.

Returns `Option.None` if none is found.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20, 30)
const s1 = Sequence.make()

Sequence.last(s0)       // 30
Sequence.last(s1)       // null
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

[src/Sequence.ts:576](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L576)

___

### length

▸ **length**<`a`\>(`t`): `number`

Gets the length of a `Sequence.t<a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(1, 2, 3)

Sequence.length(s)           // 3
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

[src/Sequence.ts:596](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L596)

___

### values

▸ **values**<`a`\>(`t`): `Readonly`<`Record`<`number`, `a`\>\>

Gets values of a `Sequence.t<a>` as an immutable indexed object.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make('hello', 'world')

Sequence.values(s)       // { 0: 'hello', 1: 'world' }
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

[src/Sequence.ts:613](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L613)

___

### empty

▸ **empty**<`a`\>(`t`): `boolean`

Returns `true` if the sequence is empty.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make()
const s1 = Sequence.make(10)

Sequence.empty(s)                // true
Sequence.empty(s1)               // false
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

[src/Sequence.ts:636](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L636)

___

### populated

▸ **populated**<`a`\>(`t`): `boolean`

Returns `true` if the sequence is populated.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.populated(s)                // true
Sequence.populated(Sequence.make())  // false
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

[src/Sequence.ts:654](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L654)

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

[src/Sequence.ts:676](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L676)

▸ **sort**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Comparable`](Functors.md#comparable)<`a`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`t`](Sequence.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:677](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L677)

___

### fromString

▸ **fromString**<`c`\>(`x`): [`T`](Result.md#t)<[`t`](Sequence.md#t)<`c`\>\>

Try to convert a `string` to a `Sequence.t<a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const x  = Sequence.fromString<number>(`10,20,30`)
const t1 = Sequence.make(10, 20, 30)
const t2 = Sequence.make(10, 30, 20)

Sequence.eq(x as any, t1)        // true
Sequence.eq(x as any, t2)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `c` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

[`T`](Result.md#t)<[`t`](Sequence.md#t)<`c`\>\>

#### Defined in

[src/Sequence.ts:710](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L710)

___

### toArray

▸ **toArray**<`a`\>(`a`): `a`[]

Converts a `Sequence.t<a>` to an array `a[]`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toArray(s) // [10, 20, 30]
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

[src/Sequence.ts:733](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L733)

___

### toJSON

▸ **toJSON**<`a`\>(`a`): `a`[]

Serializes a `Sequence.t<a>` to json

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.toJSON(Sequence.make(1, 2))     // { 0: 1, 1: 2 }
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

[src/Sequence.ts:748](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L748)

___

### toMap

▸ **toMap**<`a`\>(`a`): `Map`<`string`, `a`\>

Serializes a `Sequence.t<a>` to a `Map<number, a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.toMap(Sequence.make(1, 2))     // Map([0, 1], [1, 2])
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

[src/Sequence.ts:763](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L763)

___

### toSet

▸ **toSet**<`a`\>(`a`): `Set`<`a`\>

Converts a `Sequence.t<a>` to a Set `Set<a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toSet(s) // Set(10, 20, 30)
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

[src/Sequence.ts:780](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L780)

___

### toString

▸ **toString**<`a`\>(`a`): `string`

Stringifies a `Sequence.t<a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toString(s)     // '10,20,30'
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

[src/Sequence.ts:797](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/Sequence.ts#L797)
