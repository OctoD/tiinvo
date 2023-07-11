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

A `Sequence.T<A>` is an immutable and iterable list of elements `a` in a particular order.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/Sequence.ts:13](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L13)

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

[src/Sequence.ts:44](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L44)

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

[src/Sequence.ts:73](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L73)

▸ **make**<`A`\>(`...v`): [`T`](Sequence.md#t)<`A`\>

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

[src/Sequence.ts:91](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L91)

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

[src/Sequence.ts:161](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L161)

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

[src/Sequence.ts:187](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L187)

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

[src/Sequence.ts:226](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L226)

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

[src/Sequence.ts:260](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L260)

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

[src/Sequence.ts:285](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L285)

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

[src/Sequence.ts:310](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L310)

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

[src/Sequence.ts:334](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L334)

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

[src/Sequence.ts:358](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L358)

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

[src/Sequence.ts:401](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L401)

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

[src/Sequence.ts:428](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L428)

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

[src/Sequence.ts:456](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L456)

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

[src/Sequence.ts:484](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L484)

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

[src/Sequence.ts:511](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L511)

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

[src/Sequence.ts:538](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L538)

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

[src/Sequence.ts:580](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L580)

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

[src/Sequence.ts:601](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L601)

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

[src/Sequence.ts:637](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L637)

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

[src/Sequence.ts:659](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L659)

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

[src/Sequence.ts:754](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L754)

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

[src/Sequence.ts:782](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L782)

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

[src/Sequence.ts:838](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L838)

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

[src/Sequence.ts:866](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L866)

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

[src/Sequence.ts:694](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L694)

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

[src/Sequence.ts:714](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L714)

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

[src/Sequence.ts:754](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L754)

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

[src/Sequence.ts:782](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L782)

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

[src/Sequence.ts:838](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L838)

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

[src/Sequence.ts:866](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L866)

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

[src/Sequence.ts:916](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L916)

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

[src/Sequence.ts:937](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L937)

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

[src/Sequence.ts:970](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L970)

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

[src/Sequence.ts:993](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L993)

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

[src/Sequence.ts:1025](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1025)

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

[src/Sequence.ts:1046](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1046)

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

[src/Sequence.ts:1083](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1083)

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

[src/Sequence.ts:1105](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1105)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Opt.md#t)<`A`\>

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

[`T`](Opt.md#t)<`A`\>

the first element of the sequence:
 - `Option.Some<A>` if the sequence has at least one element
 - `Option.None` otherwise

#### Defined in

[src/Sequence.ts:1141](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1141)

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

[src/Sequence.ts:1170](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1170)

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

[src/Sequence.ts:1195](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1195)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Opt.md#t)<`A`\>

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

[`T`](Opt.md#t)<`A`\>

- `Option.Some<A>` if the sequence is not empty
 - `Option.None` otherwise

#### Defined in

[src/Sequence.ts:1241](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1241)

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

[src/Sequence.ts:1266](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1266)

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

[src/Sequence.ts:1287](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1287)

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

[src/Sequence.ts:1316](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1316)

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

[src/Sequence.ts:1340](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1340)

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

[src/Sequence.ts:1368](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1368)

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

[src/Sequence.ts:1394](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1394)

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

[src/Sequence.ts:1430](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1430)

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

[src/Sequence.ts:1449](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1449)

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

[src/Sequence.ts:1469](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1469)

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

[src/Sequence.ts:1490](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1490)

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

[src/Sequence.ts:1511](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Sequence.ts#L1511)
