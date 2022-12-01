[tiinvo](../README.md) / [Exports](../modules.md) / SortedSequence

# Namespace: SortedSequence

## Table of contents

### Type Aliases

- [T](SortedSequence.md#t)

### Factories

- [make](SortedSequence.md#make)

### Guards

- [guard](SortedSequence.md#guard)

### Guardables

- [guardOf](SortedSequence.md#guardof)

### Comparables

- [cmp](SortedSequence.md#cmp)
- [eq](SortedSequence.md#eq)

### Mappables

- [map](SortedSequence.md#map)

### Operables

- [add](SortedSequence.md#add)
- [concat](SortedSequence.md#concat)

### Accessors

- [count](SortedSequence.md#count)
- [get](SortedSequence.md#get)
- [first](SortedSequence.md#first)
- [last](SortedSequence.md#last)
- [values](SortedSequence.md#values)

### Functions

- [length](SortedSequence.md#length)

### Predicates

- [empty](SortedSequence.md#empty)
- [populated](SortedSequence.md#populated)

### Serializables

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

[src/SortedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L10)

## Factories

### make

▸ **make**<`A`\>(`mod`, ...`args`): [`T`](SortedSequence.md#t)<`A`\>

Makes an immutable `SortedSequence.T<A>` from a `Comparable<a>` and (optionally) a list of arguments as initial values

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num.cmp, 10, 20, 30)         
const s1 = SortedSequence.make(Str.cmp, 'hello', 'world')

SortedSequence.guardOf(Num.guard)(s0)    // true
SortedSequence.guardOf(Num.guard)(s1)    // false
SortedSequence.guardOf(Str.guard)(s0)    // false
SortedSequence.guardOf(Str.guard)(s1)    // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | element's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> | the Comparable functor |
| `...args` | `A`[] | a list of initial values |

#### Returns

[`T`](SortedSequence.md#t)<`A`\>

the SortedSequence

#### Defined in

[src/SortedSequence.ts:40](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L40)

▸ **make**<`A`\>(`mod`, ...`args`): [`T`](SortedSequence.md#t)<`A`\>

Makes an immutable `SortedSequence.T<A>` from a `ComparableModule<a>` and (optionally) a list of arguments as initial values

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

| Name | Description |
| :------ | :------ |
| `A` | element's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the Comparable module functor |
| `...args` | `A`[] | a list of initial values |

#### Returns

[`T`](SortedSequence.md#t)<`A`\>

the SortedSequence

#### Defined in

[src/SortedSequence.ts:65](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L65)

## Guards

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to guard |

#### Returns

x is T<unknown\>

- `true` if x is a `SortedSequence.T<unknown>`
 - `false` otherwise

#### Defined in

[src/SortedSequence.ts:100](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L100)

## Guardables

### guardOf

▸ **guardOf**<`A`\>(`g`, `x`): x is T<A\>

Checks if the parameter `x` is a `SortedSequence.T<A>` using a `Guardable<A>` functor.

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num, 1, 2)
const s1 = SortedSequence.make(Str, 'hello', 'world')

SortedSequence.guardOf(Str.guard, s0)      // false
SortedSequence.guardOf(Str.guard, s1)      // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the expected sequence elements type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the elements guard |
| `x` | `unknown` | the value to check |

#### Returns

x is T<A\>

- `true` if `x` is a `SortedSequence.T<A>`
 - `false` otherwise

#### Defined in

[src/SortedSequence.ts:126](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L126)

▸ **guardOf**<`A`\>(`g`, `x`): x is T<A\>

Checks if the parameter `x` is a `SortedSequence.T<A>` using a `GuardableModule<A>` functor.

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num, 1, 2)
const s1 = SortedSequence.make(Str, 'hello', 'world')

SortedSequence.guardOf(Str, s0)      // false
SortedSequence.guardOf(Str, s1)      // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the expected sequence elements type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`GuardableModule`](Functors.md#guardablemodule)<`A`\> | the elements guard module |
| `x` | `unknown` | the value to check |

#### Returns

x is T<A\>

- `true` if `x` is a `SortedSequence.T<A>`
 - `false` otherwise

#### Defined in

[src/SortedSequence.ts:151](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L151)

▸ **guardOf**<`A`\>(`g`): (`x`: `unknown`) => x is T<A\>

Returns a guard which checks if the parameter `x` is a `SortedSequence.T<A>`

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

| Name | Description |
| :------ | :------ |
| `A` | the expected sequence elements type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the elements guard |

#### Returns

`fn`

the guard which takes an argument `y` and returns
 - `true` if `y` is a `SortedSequence.T<A>`
 - `false` otherwise

▸ (`x`): x is T<A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<A\>

#### Defined in

[src/SortedSequence.ts:176](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L176)

▸ **guardOf**<`A`\>(`g`): (`x`: `unknown`) => x is T<A\>

Returns a guard which checks if the parameter `x` is a `SortedSequence.T<A>`

**`Example`**

```ts
import { SortedSequence, Num, Str } from 'tiinvo'

const s0 = SortedSequence.make(Num, 1, 2)
const s1 = SortedSequence.make(Str, 'hello', 'world')
const isStrSortedList = SortedSequence.guardOf(Str);

isStrSortedList(s0)      // false
isStrSortedList(s1)      // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the expected sequence elements type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`GuardableModule`](Functors.md#guardablemodule)<`A`\> | the elements guard |

#### Returns

`fn`

the guard which takes an argument `y` and returns
 - `true` if `y` is a `SortedSequence.T<A>`
 - `false` otherwise

▸ (`x`): x is T<A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<A\>

#### Defined in

[src/SortedSequence.ts:201](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L201)

## Comparables

### cmp

▸ **cmp**<`A`\>(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two `SortedSequence.T<A>`.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | SortedSequence element's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first sequence |
| `b` | `A` | the last sequence |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
 - 0 if `a` equals `b`
 - 1 if `a` is greater than `b`

#### Defined in

[src/SortedSequence.ts:247](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L247)

▸ **cmp**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two `SortedSequence.T<A>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make<number>(Num, 0, 1, 2)
const s1 = SortedSequence.make<number>(Num, 0, 1, 2)
const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3)
const s3 = SortedSequence.make<number>(Num, 0, 1)

const cmp0 = SortedSequence.cmp(s0);

cmp0(s1)                         // 0
cmp0(s2)                         // 1
cmp0(s3)                         // -1
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | `SortedSequence.T` type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<`A`, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function which returns
 - -1 if `b` is less than `a`
 - 0 if `b` equals `a`
 - 1 if `b` is greater than `a`

#### Defined in

[src/SortedSequence.ts:277](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L277)

___

### eq

▸ **eq**<`A`\>(`a`, `b`): `boolean`

Checks if two sorted lists are equal

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | `SortedSequence.T` type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first sequence |
| `b` | `A` | the second sequence |

#### Returns

`boolean`

- `true` if `b` equals `a`
 - `false` otherwise

#### Defined in

[src/SortedSequence.ts:313](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L313)

▸ **eq**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, `boolean`\>

Returns a unary function which checks if two sorted lists are equal

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | `SortedSequence.T` type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `boolean`\>

the unary function which returns
 - `true` if `b` equals `a`
 - `false` otherwise

#### Defined in

[src/SortedSequence.ts:340](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L340)

## Mappables

### map

▸ **map**<`A`, `B`\>(`a`, `m`): [`T`](SortedSequence.md#t)<`B`\>

Maps a `SortedSequence.T<A>` to a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.

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

| Name | Description |
| :------ | :------ |
| `A` | the SortedSequence element's type |
| `B` | the mapped SortedSequence element's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`A`\> | the SortedSequence |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the Mappable functor |

#### Returns

[`T`](SortedSequence.md#t)<`B`\>

the mapped `SortedSequence.T<B>`

#### Defined in

[src/SortedSequence.ts:376](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L376)

▸ **map**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](SortedSequence.md#t)<`A`\>, [`T`](SortedSequence.md#t)<`B`\>\>

Returns a unary function which maps a `SortedSequence.T<A>` to 
a `SortedSequence.t<b>` using the functor `Functors.Mappable<a, b>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const m = SortedSequence.map(Num.mul(2))

m(SortedSequence.make<number>(Num, 3, 1, 2))        // SortedSequence.t(2, 4, 6)
m(SortedSequence.make<number>(Num, 9, 4, 8))        // SortedSequence.t(8, 16, 18)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the SortedSequence element's type |
| `B` | the mapped SortedSequence element's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the SortedSequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](SortedSequence.md#t)<`A`\>, [`T`](SortedSequence.md#t)<`B`\>\>

the unary function which maps `SortedSequence.T<A>` to `SortedSequence.T<B>`

#### Defined in

[src/SortedSequence.ts:399](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L399)

## Operables

### add

▸ **add**<`A`, `B`\>(`a`, `b`): [`T`](SortedSequence.md#t)<`A` & `B`\>

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | the SortedSequence type |
| `B` | `B` | the added value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the SortedSequence |
| `b` | `B` | the added value |

#### Returns

[`T`](SortedSequence.md#t)<`A` & `B`\>

the new SortedSequence

#### Defined in

[src/SortedSequence.ts:436](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L436)

▸ **add**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<`A`, [`T`](SortedSequence.md#t)<`A` & `B`\>\>

Returns a unary function which adds an element to the end of the `Sequence.t<a>` without mutating the original one.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `Iterable`<`any`, `A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[sortsymbol]`: [`Comparable`](Functors.md#comparable)<`any`\>  } | the SortedSequence type |
| `B` | `B` | the added value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `B` | the added value type |

#### Returns

[`Unary`](Fn.md#unary)<`A`, [`T`](SortedSequence.md#t)<`A` & `B`\>\>

the unary function

#### Defined in

[src/SortedSequence.ts:458](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L458)

___

### concat

▸ **concat**<`A`\>(`a`, `b`): [`T`](SortedSequence.md#t)<`A`\>

Concatenates two `SortedSequence.T<A>` and `SortedSequence.T<A>` 
and return a new `SortedSequence.T<A>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make<number>(Num, 10, 20)
const s1 = SortedSequence.make<number>(Num, 30, 40)

SortedSequence.concat(s0, s1)       // SortedSequence(10, 20, 30, 40)
SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the SortedSequence type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`A`\> | the first SortedSequence |
| `b` | [`T`](SortedSequence.md#t)<`A`\> | the second SortedSequence |

#### Returns

[`T`](SortedSequence.md#t)<`A`\>

the concatenated SortedSequence

#### Defined in

[src/SortedSequence.ts:490](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L490)

▸ **concat**<`A`\>(`a`): <A\>(`x`: [`T`](SortedSequence.md#t)<`A`\>) => [`T`](SortedSequence.md#t)<`A`\>

Returns a unary function which concatenates two `SortedSequence.T<A>` 
and `SortedSequence.T<A>` and return a new `SortedSequence.T<A>`.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make<number>(Num, 10, 20)
const s1 = SortedSequence.make<number>(Num, 30, 40)

SortedSequence.concat(s1)(s0)       // SortedSequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the SortedSequence type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](SortedSequence.md#t)<`A`\> | the second SortedSequence |

#### Returns

`fn`

the unary function

▸ <`A`\>(`x`): [`T`](SortedSequence.md#t)<`A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`T`](SortedSequence.md#t)<`A`\> |

##### Returns

[`T`](SortedSequence.md#t)<`A`\>

#### Defined in

[src/SortedSequence.ts:512](https://github.com/OctoD/tiinvo/blob/1039368/src/SortedSequence.ts#L512)

## Accessors

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `p` | [`Filterable`](Functors.md#filterable)<`A`\> | the Filterable functor |

#### Returns

`number`

the number of elements which satisfy the predicate `p`

#### Defined in

[src/Sequence.ts:1045](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1045)

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> | the sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

the number of elements which satisfy the predicate `p`

#### Defined in

[src/Sequence.ts:1067](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1067)

___

### get

▸ **get**<`A`\>(`a`, `i`): [`T`](Result.md#t)<`A`\>

Gets an element at a specific index.

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `i` | `number` | the index of the element |

#### Returns

[`T`](Result.md#t)<`A`\>

- `Result.Ok<A>` if `i` is in bound
 - `Result.Err` if `i` is out of bound or negative

#### Defined in

[src/Sequence.ts:1129](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1129)

▸ **get**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

Gets an element at a specific index.

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

- `Result.Ok<A>` if `i` is in bound
 - `Result.Err` if `i` is out of bound or negative

#### Defined in

[src/Sequence.ts:1154](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1154)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Gets first element if any

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

[`T`](Option.md#t)<`A`\>

the first element of the sequence:
 - `Option.Some<A>` if the sequence has at least one element
 - `Option.None` otherwise

#### Defined in

[src/Sequence.ts:1101](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1101)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Gets last element if any.

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const s0 = SortedSequence.make(Num, 10, 20, 30)
const s1 = SortedSequence.make(Num)

SortedSequence.last(s0)       // 30
SortedSequence.last(s1)       // null

```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

[`T`](Option.md#t)<`A`\>

- `Option.Some<A>` if the sequence is not empty
 - `Option.None` otherwise

#### Defined in

[src/Sequence.ts:1196](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1196)

___

### values

▸ **values**<`A`\>(`t`): `Record`<`number`, `A`\>

Gets values of a `SortedSequence.T<A>` as an immutable indexed object.

**`Example`**

```ts
import { SortedSequence, Str } from 'tiinvo'

const s = SortedSequence.make(Str, 'hello', 'world')

SortedSequence.values(s)       // { 0: 'hello', 1: 'world' }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`Record`<`number`, `A`\>

the sequence values as an immutable dictionary

#### Defined in

[src/Sequence.ts:1241](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1241)

## Functions

### length

▸ **length**<`A`\>(`t`): `number`

Gets the length of a `SortedSequence.T<A>`

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

[src/Sequence.ts:1220](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1220)

## Predicates

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`boolean`

- 'true' if the sequence is empty
 - 'false' otherwise

#### Defined in

[src/Sequence.ts:1270](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1270)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> | the sequence |

#### Returns

`boolean`

- 'true' if the sequence is populated
 - 'false' otherwise

#### Defined in

[src/Sequence.ts:1294](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1294)

## Serializables

### toArray

▸ **toArray**<`A`\>(`t`): `A`[]

Converts a `SortedSequence.T<A>` to an array of `a[]`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toArray(sl)       // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`A`[]

the output

#### Defined in

[src/Sequence.ts:1382](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1382)

___

### toJSON

▸ **toJSON**<`a`\>(`t`): `a`[]

Converts a `SortedSequence.T<A>` to a jsonizable value

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> | the sequence |

#### Returns

`a`[]

the output

#### Defined in

[src/Sequence.ts:1401](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1401)

___

### toMap

▸ **toMap**<`A`\>(`t`): `Map`<`string`, `A`\>

Converts a `SortedSequence.T<A>` to a set of `Set<a>`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toMap(sl)      // Map([0, 1], [1, 2], [2, 3])
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`Map`<`string`, `A`\>

the output

#### Defined in

[src/Sequence.ts:1421](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1421)

___

### toSet

▸ **toSet**<`A`\>(`t`): `Set`<`A`\>

Converts a `SortedSequence.T<A>` to a set of `Set<a>`

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toSet(sl)      // Set(1, 2, 3)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`Set`<`A`\>

the output

#### Defined in

[src/Sequence.ts:1442](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1442)

___

### toString

▸ **toString**<`A`\>(`t`): `string`

Converts a `SortedSequence.T<A>` to a string

**`Example`**

```ts
import { SortedSequence, Num } from 'tiinvo'

const sl = SortedSequence.make(Num, 3, 2, 1)

SortedSequence.toString(sl)       // "1,2,3"
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> | the sequence |

#### Returns

`string`

the output

#### Defined in

[src/Sequence.ts:1463](https://github.com/OctoD/tiinvo/blob/1039368/src/Sequence.ts#L1463)
