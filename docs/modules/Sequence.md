[tiinvo](../README.md) / [Exports](../modules.md) / Sequence

# Namespace: Sequence

## Table of contents

### Type Aliases

- [T](Sequence.md#t)

### Factories

- [fromString](Sequence.md#fromstring)
- [make](Sequence.md#make)

### Guardables

- [guard](Sequence.md#guard)
- [guardOf](Sequence.md#guardof)

### Comparables

- [cmp](Sequence.md#cmp)
- [eq](Sequence.md#eq)

### Mappables

- [map](Sequence.md#map)
- [reduce](Sequence.md#reduce)
- [filterReduce](Sequence.md#filterreduce)
- [filterMap](Sequence.md#filtermap)

### Filterables

- [filter](Sequence.md#filter)
- [filterReduce](Sequence.md#filterreduce)
- [filterMap](Sequence.md#filtermap)

### Operators

- [append](Sequence.md#append)
- [concat](Sequence.md#concat)
- [prepend](Sequence.md#prepend)

### Accessors

- [count](Sequence.md#count)
- [first](Sequence.md#first)
- [get](Sequence.md#get)
- [last](Sequence.md#last)
- [length](Sequence.md#length)
- [values](Sequence.md#values)

### Predicates

- [empty](Sequence.md#empty)
- [populated](Sequence.md#populated)

### Sortables

- [sort](Sequence.md#sort)

### Serializables

- [toArray](Sequence.md#toarray)
- [toJSON](Sequence.md#tojson)
- [toMap](Sequence.md#tomap)
- [toSet](Sequence.md#toset)
- [toString](Sequence.md#tostring)

## Type Aliases

### T

Ƭ **T**<`A`\>: `Iterable`<`A`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `A`\>\> ; `[iterator]`: () => `Iterator`<`A`, `any`, `undefined`\>  }

A `Sequence.T<A>` is an iterable list of elements `a` in a particular order.

It's immutable by design.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/Sequence.ts:15](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L15)

## Factories

### fromString

▸ **fromString**<`A`\>(`x`): [`T`](Result.md#t)<[`T`](Sequence.md#t)<`A`\>\>

Try to deserialize a `string` to a `Sequence.T<A>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const x  = Sequence.fromString<number>(`10,20,30`) as Sequence.T<number>;
const t1 = Sequence.make(10, 20, 30)
const t2 = Sequence.make(10, 30, 20)

Sequence.eq(x, t1)        // true
Sequence.eq(x, t2)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `unknown` | the Sequence's expected element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `string` | the string |

#### Returns

[`T`](Result.md#t)<[`T`](Sequence.md#t)<`A`\>\>

- `Result.Ok<Sequence.T<A>>` if the deserialization is successful
 - `Result.Err` otherwise

#### Defined in

[src/Sequence.ts:46](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L46)

___

### make

▸ **make**<`A`\>(`v`): [`T`](Sequence.md#t)<`A`\>

Makes a new `Sequence.T<A>` from an array of `A`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.make([10, 20, 30])      // Sequence.T<number>
Sequence.make([1, 2], [3, 4])    // Sequence.T<number[]>
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `A`[] | the array of initial values |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the `Sequence.T<A>`

#### Defined in

[src/Sequence.ts:72](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L72)

▸ **make**<`A`\>(...`v`): [`T`](Sequence.md#t)<`A`\>

Makes a new `Sequence.T<A>` from a list of arguments `a`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.make(10, 20, 30)        // Sequence.T<number>
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...v` | `A`[] | the list of initial values |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the `Sequence.T<A>`

#### Defined in

[src/Sequence.ts:90](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L90)

## Guardables

### guard

▸ **guard**(`x`): x is T<unknown\>

Checks if a value `x` is a `Sequence.T<unknown>`.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to guard |

#### Returns

x is T<unknown\>

- `true` if `x` is `Sequence.T<unknown>`
 - `false` otherwise

#### Defined in

[src/Sequence.ts:154](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L154)

___

### guardOf

▸ **guardOf**<`A`\>(`g`): (`x`: `unknown`) => x is T<A\>

Checks if the parameter `x` is a `Sequence.T<A>`

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
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the guard |

#### Returns

`fn`

the new guard which returns
 - `true` if `x` is a `Sequence.T<A>`
 - `false` otherwise

▸ (`x`): x is T<A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<A\>

#### Defined in

[src/Sequence.ts:180](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L180)

## Comparables

### cmp

▸ **cmp**<`A`\>(`mod`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two sequences.

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparable functor module |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |
| `b` | [`T`](Sequence.md#t)<`A`\> | the last sequence |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result `Functors.ComparableResult`

#### Defined in

[src/Sequence.ts:219](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L219)

▸ **cmp**<`A`\>(`mod`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two sequences.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num.cmp, s0, s1)      // 0
Sequence.cmp(Num.cmp, s0)(s1)      // 0
Sequence.cmp(Num.cmp)(s0, s1)      // 0

Sequence.cmp(Num.cmp, s0, s2)      // -1
Sequence.cmp(Num.cmp, s0)(s2)      // -1
Sequence.cmp(Num.cmp)(s0, s2)      // -1

Sequence.cmp(Num.cmp, s2, s0)      // 1
Sequence.cmp(Num.cmp, s2)(s0)      // 1
Sequence.cmp(Num.cmp)(s2, s0)      // 1
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
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparable functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |
| `b` | [`T`](Sequence.md#t)<`A`\> | the last sequence |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result `Functors.ComparableResult`

#### Defined in

[src/Sequence.ts:253](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L253)

▸ **cmp**<`A`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two Sequence

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num, s0)(s1)      // 0
Sequence.cmp(Num, s0)(s2)      // -1
Sequence.cmp(Num, s2)(s0)      // 1
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
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparable functor module |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/Sequence.ts:278](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L278)

▸ **cmp**<`A`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two Sequence

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num.cmp, s0)(s1)      // 0
Sequence.cmp(Num.cmp, s0)(s2)      // 1
Sequence.cmp(Num.cmp, s2)(s0)      // -1
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
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparable functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/Sequence.ts:303](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L303)

▸ **cmp**<`A`\>(`mod`): [`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a binary function which compares two Sequence

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num)(s0, s1)      // 0
Sequence.cmp(Num)(s0, s2)      // -1
Sequence.cmp(Num)(s2, s0)      // 1
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
| `mod` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparable functor module |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary function

#### Defined in

[src/Sequence.ts:327](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L327)

▸ **cmp**<`A`\>(`mod`): [`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a binary function which compares two Sequence

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.cmp(Num.cmp)(s0, s1)      // 0
Sequence.cmp(Num.cmp)(s0, s2)      // -1
Sequence.cmp(Num.cmp)(s2, s0)      // 1
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
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparable functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary function

#### Defined in

[src/Sequence.ts:351](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L351)

___

### eq

▸ **eq**<`A`\>(`mod`, `a`, `b`): `boolean`

Checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.eq(Num, s0, s1)      // true
Sequence.eq(Num, s0, s2)      // false
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
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the equatable module functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first Sequence |
| `b` | [`T`](Sequence.md#t)<`A`\> | the last Sequence |

#### Returns

`boolean`

- `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:390](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L390)

▸ **eq**<`A`\>(`mod`, `a`, `b`): `boolean`

Checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

Sequence.eq(Num.cmp, s0, s1)      // true
Sequence.eq(Num.cmp, s0, s2)      // false
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
| `mod` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first Sequence |
| `b` | [`T`](Sequence.md#t)<`A`\> | the last Sequence |

#### Returns

`boolean`

- `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:417](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L417)

▸ **eq**<`A`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `boolean`\>

Returns a unary function which checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

const eqs0 = Sequence.eq(Num, s0)

eqs0(s1)      // true
eqs0(s2)      // false
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
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the equatable module functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first Sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `boolean`\>

the unary function which checks and returns
 - `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:445](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L445)

▸ **eq**<`A`\>(`mod`, `a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `boolean`\>

Returns a unary function which checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

const eqs0 = Sequence.eq(Num.cmp, s0)

eqs0(s1)      // true
eqs0(s2)      // false
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
| `mod` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first Sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `boolean`\>

the unary function which checks and returns
 - `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:473](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L473)

▸ **eq**<`A`\>(`mod`): [`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, `boolean`\>

Returns a binary function which checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

const eq = Sequence.eq(Num);

eq(s0, s1)      // true
eq(s0, s2)      // false
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
| `mod` | [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the equatable module functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, `boolean`\>

the binary function which checks and returns
 - `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:500](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L500)

▸ **eq**<`A`\>(`mod`): [`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, `boolean`\>

Returns a binary function which checks if two sequences are equal

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s0 = Sequence.make(0, 1, 2)
const s1 = Sequence.make(0, 1, 2)
const s2 = Sequence.make(0, 1, 2, 3)

const eq = Sequence.eq(Num.cmp);

eq(s0, s1)      // true
eq(s0, s2)      // false
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
| `mod` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>, `boolean`\>

the binary function which checks and returns
 - `true` if `a` and `b` are equal
 - `false` otherwise

#### Defined in

[src/Sequence.ts:527](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L527)

## Mappables

### map

▸ **map**<`A`, `B`\>(`a`, `m`): [`T`](Sequence.md#t)<`B`\>

Maps a `Sequence.T<A>` to a `Sequence.T<B>` using the functor `Functors.Mappable<a, b>`.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(1, 2, 3)

Sequence.map(s, Num.mul(2))        // Sequence.t(2, 4, 6)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable functor |

#### Returns

[`T`](Sequence.md#t)<`B`\>

the mapped sequence

#### Defined in

[src/Sequence.ts:565](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L565)

▸ **map**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

Returns a unary function which maps a `Sequence.T<A>` to a `Sequence.T<B>` using the functor `Functors.Mappable<a, b>`.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(1, 2, 3)

Sequence.map(Num.mul(2))(s)        // Sequence.t(2, 4, 6)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

the unary function which maps Sequence.T<A> to `Sequence.T<B>`

#### Defined in

[src/Sequence.ts:586](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L586)

___

### reduce

▸ **reduce**<`A`, `B`\>(`a`, `mod`, `s`): `B`

Reduces all elements `a` to `b` of a `Sequence.T<A>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.reduce(s, Num.add, 0)  // 60
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `mod` | [`Reduceable`](Functors.md#reduceable)<`A`, `B`\> | the reducer functor |
| `s` | `B` | the starting reduced value |

#### Returns

`B`

the reduced value

#### Defined in

[src/Sequence.ts:619](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L619)

▸ **reduce**<`A`, `B`\>(`a`, `mod`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

Returns a unary function which reduces all elements `a` to `b` of a `Sequence.T<A>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.reduce<number, number>(Num.add, 0)(s)  // 60
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Reduceable`](Functors.md#reduceable)<`A`, `B`\> | the reducer |
| `mod` | `B` | the starting reduced value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

the unary function. This function takes a `Sequence.T<A>` and reduces it to `B`

#### Defined in

[src/Sequence.ts:641](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L641)

___

### filterReduce

▸ **filterReduce**<`A`, `B`\>(`a`, `mod`): `B`

Filters and reduce a `Sequence.T<A>` to `B`

**Important** The filter is applied before the reduce.

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
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `mod` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the filter and reduce module functor |

#### Returns

`B`

the reduced value

#### Defined in

[src/Sequence.ts:732](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L732)

▸ **filterReduce**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

Returns a unary function which filters and reduce a `Sequence.T<A>` to `B`

**Important** The filter is applied before the reduce.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const fr = Sequence.filterReduce({
   default: 0,
   filter: Num.isEven,
   reduce: Num.add,
})

fr(Sequence.make(1, 2, 3, 4, 5))      // 6
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the filter and reduce module functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

the unary function which takes a sequence the filters and reduce it to `B`

#### Defined in

[src/Sequence.ts:760](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L760)

___

### filterMap

▸ **filterMap**<`A`, `B`\>(`a`, `f`): [`T`](Sequence.md#t)<`B`\>

Filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` using the `FilterMappableModule<A, B>` functor.

**Important** The filter is applied before the map.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const f: Functors.FilterMappableModule<number, string | Error> = {
  filter: Num.isOdd,
  map: Num.toBin,
}
const s = Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const m = Sequence.filterMap(f);

Sequence.filterMap(s, f)   // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `f` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> | the filterable and mappable functor |

#### Returns

[`T`](Sequence.md#t)<`B`\>

the filtered and mapped sequence

#### Defined in

[src/Sequence.ts:811](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L811)

▸ **filterMap**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

Returns a unary function which filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` 
using the `FilterMappableModule<A, B>` functor.

**Important** The filter is applied before the map.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const m = Sequence.filterMap({
  filter: Num.isOdd,
  map: Num.toBin,
});

m(Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))  // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> | the filterable and mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

the unary function which filters and maps the input sequence `T<A>` to `T<B>`

#### Defined in

[src/Sequence.ts:839](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L839)

## Filterables

### filter

▸ **filter**<`A`\>(`a`, `f`): [`T`](Sequence.md#t)<`A`\>

Filters a `Sequence.T<A>` with a specified `Filterable<a>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30, 40)

Sequence.filter(s, Num.gt(20))   // Sequence.make(30, 40)
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
| `f` | [`Filterable`](Functors.md#filterable)<`A`\> | the filterable functor |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the filtered sequence

#### Defined in

[src/Sequence.ts:674](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L674)

▸ **filter**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

Returns a unary function which filters a `Sequence.T<A>` with a specified `Filterable<a>`

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30, 40)

Sequence.filter(Num.gt(20))(s)   // Sequence.make(30, 40)
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
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> | the filterable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

the unary function which takes a sequence and filters it with `a`

#### Defined in

[src/Sequence.ts:694](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L694)

___

### filterReduce

▸ **filterReduce**<`A`, `B`\>(`a`, `mod`): `B`

Filters and reduce a `Sequence.T<A>` to `B`

**Important** The filter is applied before the reduce.

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
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `mod` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the filter and reduce module functor |

#### Returns

`B`

the reduced value

#### Defined in

[src/Sequence.ts:732](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L732)

▸ **filterReduce**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

Returns a unary function which filters and reduce a `Sequence.T<A>` to `B`

**Important** The filter is applied before the reduce.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const fr = Sequence.filterReduce({
   default: 0,
   filter: Num.isEven,
   reduce: Num.add,
})

fr(Sequence.make(1, 2, 3, 4, 5))      // 6
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the reduced value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the filter and reduce module functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `B`\>

the unary function which takes a sequence the filters and reduce it to `B`

#### Defined in

[src/Sequence.ts:760](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L760)

___

### filterMap

▸ **filterMap**<`A`, `B`\>(`a`, `f`): [`T`](Sequence.md#t)<`B`\>

Filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` using the `FilterMappableModule<A, B>` functor.

**Important** The filter is applied before the map.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const f: Functors.FilterMappableModule<number, string | Error> = {
  filter: Num.isOdd,
  map: Num.toBin,
}
const s = Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const m = Sequence.filterMap(f);

Sequence.filterMap(s, f)   // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `f` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> | the filterable and mappable functor |

#### Returns

[`T`](Sequence.md#t)<`B`\>

the filtered and mapped sequence

#### Defined in

[src/Sequence.ts:811](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L811)

▸ **filterMap**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

Returns a unary function which filters and maps a `Sequence.T<A>` to a `Sequence.T<B>` 
using the `FilterMappableModule<A, B>` functor.

**Important** The filter is applied before the map.

**`Example`**

```ts
import { Functors, Sequence, Num } from 'tiinvo'

const m = Sequence.filterMap({
  filter: Num.isOdd,
  map: Num.toBin,
});

m(Sequence.make(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))  // ["0b1", "0b11", "0b101", "0b111", "0b1001"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |
| `B` | the mapped sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> | the filterable and mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`B`\>\>

the unary function which filters and maps the input sequence `T<A>` to `T<B>`

#### Defined in

[src/Sequence.ts:839](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L839)

## Operators

### append

▸ **append**<`A`\>(`a`, `b`): [`T`](Sequence.md#t)<`A`\>

Adds an element to the end of the `Sequence.T<A>` without mutating the original one.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)

Sequence.append(s0, 30)       // Sequence(10, 20, 30)
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
| `b` | `A` | the element to append |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the new sequence

#### Defined in

[src/Sequence.ts:884](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L884)

▸ **append**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

Returns a unary function which adds an element to the end of the `Sequence.T<A>` 
without mutating it.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)

Sequence.append(30)(s0)       // Sequence(10, 20, 30)
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
| `a` | `A` | the element to append |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

the unary function which appends `a` to an existing sequence

#### Defined in

[src/Sequence.ts:905](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L905)

___

### concat

▸ **concat**<`A`, `B`\>(`a`, `b`): [`T`](Sequence.md#t)<`A` & `B`\>

Concatenates two `Sequence.T<A>` and `Sequence.T<B>` and return a new `Sequence.T<A & B>`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)
const s1 = Sequence.make(30, 40)

Sequence.concat(s0, s1)       // Sequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the first Sequence's element type |
| `B` | the second Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |
| `b` | [`T`](Sequence.md#t)<`B`\> | the second sequence |

#### Returns

[`T`](Sequence.md#t)<`A` & `B`\>

the concatated sequence

#### Defined in

[src/Sequence.ts:936](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L936)

▸ **concat**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`B`\>, [`T`](Sequence.md#t)<`A` & `B`\>\>

Returns a unary function which concatenates two `Sequence.T<A>` and `Sequence.T<B>` 
and return a new `Sequence.T<A & B>`.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)
const s1 = Sequence.make(30, 40)

Sequence.concat(s1)(s0)       // Sequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the first Sequence's element type |
| `B` | the second Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`B`\>, [`T`](Sequence.md#t)<`A` & `B`\>\>

the unary function which concatenates `b` to `a`

#### Defined in

[src/Sequence.ts:959](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L959)

___

### prepend

▸ **prepend**<`A`\>(`a`, `b`): [`T`](Sequence.md#t)<`A`\>

Adds an element to the start of the `Sequence.T<A>` without mutating the original one.

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

| Name | Description |
| :------ | :------ |
| `A` | the Sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `b` | `A` | the element to prepend |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the new sequence with `b` prepended to `a`

#### Defined in

[src/Sequence.ts:989](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L989)

▸ **prepend**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

Returns a unary function which adds an element to the start of the `Sequence.T<A>` 
without mutating the original one.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s0 = Sequence.make(10, 20)

Sequence.prepend(30)(s0)       // Sequence(30, 10, 20)
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
| `a` | `A` | the element to prepend |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

the unary function which prepends `a` to `b`

#### Defined in

[src/Sequence.ts:1010](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1010)

## Accessors

### count

▸ **count**<`A`\>(`a`, `p`): `number`

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.count(s, Num.gt(10))   // 2
Sequence.count(s, Num.gt(20))   // 1
Sequence.count(s, Num.gt(50))   // 0
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

[src/Sequence.ts:1045](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1045)

▸ **count**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

Returns a unary function which counts the number of elements that 
satisfy a given predicate

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const gt10 = Sequence.count(Num.gt(10));

gt10(Sequence.make(10, 20, 30))   // 2
gt10(Sequence.make(5, 7, 9))      // 0
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
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> | the Filterable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

the unary function which counts how many elements in `b` satisfy the predicate `p`

#### Defined in

[src/Sequence.ts:1067](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1067)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Gets a `Sequence.T<A>`'s first element.

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

[src/Sequence.ts:1101](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1101)

___

### get

▸ **get**<`A`\>(`a`, `i`): [`T`](Result.md#t)<`A`\>

Gets an element at a specific index.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make('hello', 'world')

Sequence.get(s, 0)       // 'hello'
Sequence.get(s, 9)       // RangeError(`Index out of bounds 9 for length 2`);
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

[src/Sequence.ts:1129](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1129)

▸ **get**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

Returns a unary function which gets an element at a specific index.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make('hello', 'world')
const get0 = Sequence.get(0);
const get9 = Sequence.get(9);

get0(s)       // 'hello'
get9(s)       // RangeError(`Index out of bounds 9 for length 2`);
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
| `a` | `number` | the index of the element |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

the unary function which accepts a `Sequence.T<A>` and returns
 - `Result.Ok<A>` if `i` is in bound
 - `Result.Err` if `i` is out of bound or negative

#### Defined in

[src/Sequence.ts:1154](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1154)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Gets a `Sequence.T<A>`'s last element if any.

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

[src/Sequence.ts:1196](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1196)

___

### length

▸ **length**<`A`\>(`t`): `number`

Gets the length of a `Sequence.T<A>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(1, 2, 3)

Sequence.length(s)           // 3
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

`number`

the Sequence's length

#### Defined in

[src/Sequence.ts:1220](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1220)

___

### values

▸ **values**<`A`\>(`t`): `Record`<`number`, `A`\>

Gets values of a `Sequence.T<A>` as an immutable indexed object.

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make('hello', 'world')

Sequence.values(s)       // { 0: 'hello', 1: 'world' }
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

[src/Sequence.ts:1241](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1241)

## Predicates

### empty

▸ **empty**<`A`\>(`t`): `boolean`

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

[src/Sequence.ts:1270](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1270)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> | the sequence |

#### Returns

`boolean`

- 'true' if the sequence is populated
 - 'false' otherwise

#### Defined in

[src/Sequence.ts:1294](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1294)

## Sortables

### sort

▸ **sort**<`A`\>(`a`, `mod`): [`T`](Sequence.md#t)<`A`\>

Sorts and returns a new `Sequence.T<A>` values with a `Comparable<a>` or `ComparableModule<a>` functor.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const a = Sequence.make(5, 3, 1, 4, 2)
const b = Sequence.sort(a, Num)

Sequence.sort(a, Num) // Sequence.make(1, 2, 3, 4, 5)
Sequence.sort(b, Num.desc)   // Sequence.make(5, 3, 1, 4, 2)
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
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the Comparable functor or the Comparable module functor |

#### Returns

[`T`](Sequence.md#t)<`A`\>

the sorted sequence

#### Defined in

[src/Sequence.ts:1322](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1322)

▸ **sort**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

Returns a unary function which sorts and returns a new `Sequence.T<A>` values 
with a `Comparable<a>` or `ComparableModule<a>` functor.

**`Example`**

```ts
import { Sequence, Num } from 'tiinvo'

const asc = Sequence.sort(Num.asc)
const desc = Sequence.sort(Num.desc)

const s0 = Sequence.make(1, 2, 3)
const s1 = Sequence.make(6, 5, 4)

asc(s1)      // Sequence.make(4, 5, 6)
desc(s0)     // Sequence.make(3, 2, 1)
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
| `a` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the Comparable functor or the Comparable module functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Sequence.md#t)<`A`\>\>

the unary function which sorts the passed sequence

#### Defined in

[src/Sequence.ts:1348](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1348)

## Serializables

### toArray

▸ **toArray**<`A`\>(`t`): `A`[]

Converts a `Sequence.T<A>` to an array `a[]`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toArray(s) // [10, 20, 30]
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

the array

#### Defined in

[src/Sequence.ts:1382](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1382)

___

### toJSON

▸ **toJSON**<`a`\>(`t`): `a`[]

Serializes a `Sequence.T<A>` to json

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> | the sequence |

#### Returns

`a`[]

the JSONised value

#### Defined in

[src/Sequence.ts:1401](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1401)

___

### toMap

▸ **toMap**<`A`\>(`t`): `Map`<`string`, `A`\>

Serializes a `Sequence.T<A>` to a `Map<number, a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

Sequence.toMap(Sequence.make(1, 2))     // Map([0, 1], [1, 2])
```

**`Since`**

4.0.0

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

the Map

#### Defined in

[src/Sequence.ts:1421](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1421)

___

### toSet

▸ **toSet**<`A`\>(`t`): `Set`<`A`\>

Converts a `Sequence.T<A>` to a Set `Set<a>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toSet(s) // Set(10, 20, 30)
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

the Set

#### Defined in

[src/Sequence.ts:1442](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1442)

___

### toString

▸ **toString**<`A`\>(`t`): `string`

Stringifies a `Sequence.T<A>`

**`Example`**

```ts
import { Sequence } from 'tiinvo'

const s = Sequence.make(10, 20, 30)

Sequence.toString(s)     // '10,20,30'
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

the string

#### Defined in

[src/Sequence.ts:1463](https://github.com/OctoD/tiinvo/blob/419618b/src/Sequence.ts#L1463)
