[tiinvo](../README.md) / [Exports](../modules.md) / TypedSequence

# Namespace: TypedSequence

## Table of contents

### Type Aliases

- [T](TypedSequence.md#t)

### Functions

- [make](TypedSequence.md#make)
- [append](TypedSequence.md#append)
- [concat](TypedSequence.md#concat)
- [prepend](TypedSequence.md#prepend)
- [sort](TypedSequence.md#sort)
- [count](TypedSequence.md#count)
- [get](TypedSequence.md#get)
- [first](TypedSequence.md#first)
- [last](TypedSequence.md#last)
- [length](TypedSequence.md#length)
- [values](TypedSequence.md#values)
- [empty](TypedSequence.md#empty)
- [populated](TypedSequence.md#populated)

### Guardables

- [guard](TypedSequence.md#guard)

### Serializables

- [toArray](TypedSequence.md#toarray)
- [toJSON](TypedSequence.md#tojson)
- [toMap](TypedSequence.md#tomap)
- [toSet](TypedSequence.md#toset)
- [toString](TypedSequence.md#tostring)

## Type Aliases

### T

Ƭ **T**<`A`\>: [`t`](Sequence.md#t)<`A`\> & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`A`\>  }

The typed version of a `Sequence.t<A>`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/TypedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L10)

## Functions

### make

▸ **make**<`A`\>(`g`, ...`values`): [`T`](TypedSequence.md#t)<`A`\>

Creates a `TypedSequence.t<A>` starting from a `Guardable<A>` functor

You can add initial values as arguments.

If an argument does pass the guard check, the function will throw a TypeError

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

for (const x of TypedSequence.make(Num.guard, 10, 20, 30)) {
   console.log(x)
}
// 10
// 20
// 30
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
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> |
| `...values` | `A`[] |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

#### Defined in

[src/TypedSequence.ts:38](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L38)

▸ **make**<`A`\>(`g`, ...`values`): [`T`](TypedSequence.md#t)<`A`\>

Creates a `TypedSequence.t<A>` starting from a `GuardableModule<A>`

You can add initial values as arguments.

If an argument does pass the guard check, the function will throw a TypeError

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

for (const x of TypedSequence.make(Num, 10, 20, 30)) {
   console.log(x)
}
// 10
// 20
// 30
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
| `g` | [`GuardableModule`](Functors.md#guardablemodule)<`A`\> |
| `...values` | `A`[] |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

#### Defined in

[src/TypedSequence.ts:61](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L61)

___

### append

▸ **append**<`A`\>(`a`, `b`): [`T`](TypedSequence.md#t)<`A`\>

Adds an element to the end of the `Sequence.t<A>` without mutating the original one.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)

TypedSequence.append(s0, 30)       // TypedSequence(10, 20, 30)
TypedSequence.append(30)(s0)       // TypedSequence(10, 20, 30)
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
| `a` | [`T`](TypedSequence.md#t)<`A`\> |
| `b` | `A` |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

#### Defined in

[src/TypedSequence.ts:130](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L130)

▸ **append**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

#### Defined in

[src/TypedSequence.ts:131](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L131)

___

### concat

▸ **concat**<`a`\>(`a`, `b`): `a`

Concatenates two `TypedSequence.t<A>` and `TypedSequence.t<b>` and return a new `TypedSequence.t<A>`.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)
const s1 = TypedSequence.make(Num, 30, 40)

TypedSequence.concat(s0, s1)       // TypedSequence(10, 20, 30, 40)
TypedSequence.concat(s1)(s0)       // TypedSequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `a` |

#### Returns

`a`

#### Defined in

[src/TypedSequence.ts:161](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L161)

▸ **concat**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, `a`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`any`\>  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `a`\>

#### Defined in

[src/TypedSequence.ts:162](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L162)

___

### prepend

▸ **prepend**<`A`\>(`a`, `b`): [`T`](TypedSequence.md#t)<`A`\>

Adds an element to the start of the `TypedSequence.t<A>` without mutating the original one.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)

TypedSequence.prepend(s0, 30)       // TypedSequence.make(Num, 30, 10, 20)
TypedSequence.prepend(30)(s0)       // TypedSequence.make(Num, 30, 10, 20)
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
| `a` | [`T`](TypedSequence.md#t)<`A`\> |
| `b` | `A` |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

#### Defined in

[src/TypedSequence.ts:187](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L187)

▸ **prepend**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

#### Defined in

[src/TypedSequence.ts:188](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L188)

___

### sort

▸ **sort**<`A`\>(`a`, `mod`): [`T`](TypedSequence.md#t)<`A`\>

Sorts and returns a new `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const a = TypedSequence.make(Num, 5, 3, 1, 4, 2)
const b = TypedSequence.sort(a, Num)

b          // TypedSequence.make(Num, 1, 2, 3, 4, 5)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the sequence |
| `mod` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the Comparable used to sort the sequence |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

the sorted sequence

#### Defined in

[src/TypedSequence.ts:222](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L222)

▸ **sort**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

Returns a unary function which sorts and returns a new 
`TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sort = TypedSequence.sort(Num)

const a = TypedSequence.make(Num, 5, 3, 1, 4, 2)
const b = sort(a)

b          // TypedSequence.make(Num, 1, 2, 3, 4, 5)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

the sorting unary function

#### Defined in

[src/TypedSequence.ts:245](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L245)

___

### count

▸ **count**<`a`\>(`a`, `p`): `number`

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s = TypedSequence.make(Num, 10, 20, 30)

TypedSequence.count(s, Num.gt(10))   // 2
TypedSequence.count(Num.gt(10))(s)   // 2
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

[src/Sequence.ts:481](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L481)

▸ **count**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, `number`\>

Counts the number of elements that satisfy a given predicate

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s = TypedSequence.make(Num, 10, 20, 30)

TypedSequence.count(s, Num.gt(10))   // 2
TypedSequence.count(Num.gt(10))(s)   // 2
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

[src/Sequence.ts:482](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L482)

___

### get

▸ **get**<`a`\>(`a`, `i`): [`T`](Result.md#t)<`a`\>

**`Example`**

```ts
import { TypedSequence, Str } from 'tiinvo'

const s = TypedSequence.make(Str, 'hello', 'world')

TypedSequence.get(s, 0)       // 'hello'
TypedSequence.get(s, 9)       // throws RangeError
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

[src/Sequence.ts:533](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L533)

▸ **get**<`a`\>(`a`): [`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>\>

**`Example`**

```ts
import { TypedSequence, Str } from 'tiinvo'

const s = TypedSequence.make(Str, 'hello', 'world')

TypedSequence.get(s, 0)       // 'hello'
TypedSequence.get(s, 9)       // throws RangeError
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

[`Unary`](Fn.md#unary)<[`t`](Sequence.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>\>

#### Defined in

[src/Sequence.ts:534](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L534)

___

### first

▸ **first**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20, 30)
const s1 = TypedSequence.make(Num)

TypedSequence.first(s0)       // 10
TypedSequence.first(s1)       // null
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

[src/Sequence.ts:510](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L510)

___

### last

▸ **last**<`a`\>(`a`): [`T`](Option.md#t)<`a`\>

Gets a Sequence.t<A>'s last element.

Returns Option.None if none is found.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20, 30)
const s1 = TypedSequence.make(Num)

TypedSequence.last(s0)       // 30
TypedSequence.last(s1)       // null
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

[src/Sequence.ts:576](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L576)

___

### length

▸ **length**<`a`\>(`t`): `number`

Gets the length of a `TypedSequence.t<A>`

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s = TypedSequence.make(Num, 1, 2, 3)

TypedSequence.length(s)           // 3
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

[src/Sequence.ts:596](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L596)

___

### values

▸ **values**<`a`\>(`t`): `Readonly`<`Record`<`number`, `a`\>\>

Gets values of a `TypedSequence.t<A>` as an immutable indexed object.

**`Example`**

```ts
import { TypedSequence, Str } from 'tiinvo'

const s = TypedSequence.make(Str, 'hello', 'world')

TypedSequence.values(s)       // { 0: 'hello', 1: 'world' }
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

[src/Sequence.ts:613](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L613)

___

### empty

▸ **empty**<`a`\>(`t`): `boolean`

Returns `true` if the sorted list is empty.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s = TypedSequence.make(Num)
const s1 = TypedSequence.make(Num, 10)

TypedSequence.empty(s)                // true
TypedSequence.empty(s1)               // false
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

[src/Sequence.ts:636](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L636)

___

### populated

▸ **populated**<`a`\>(`t`): `boolean`

Returns `true` if the sorted list is populated.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s = TypedSequence.make(Num, 10, 20, 30)

TypedSequence.populated(s)                      // true
TypedSequence.populated(TypedSequence.make(Num))   // false
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

[src/Sequence.ts:654](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L654)

## Guardables

### guard

▸ **guard**(`x`): x is T<unknown\>

Checks if the parameter `x` is a `TypedSequence.t<unknown>`

**`Example`**

```ts
import { TypedSequence, Sequence, Num } from 'tiinvo'

const a = TypedSequence.make(Num)
const b = Sequence.make()

TypedSequence.guard(a)     // true
TypedSequence.guard(b)     // false
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

[src/TypedSequence.ts:108](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/TypedSequence.ts#L108)

## Serializables

### toArray

▸ **toArray**<`a`\>(`a`): `a`[]

Converts a `TypedSequence.t<A>` to an array of `a[]`

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sl = TypedSequence.make(Num, 3, 2, 1)

TypedSequence.toArray(sl)       // [3, 2, 1]
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
| `a` | [`t`](Sequence.md#t)<`a`\> | the TypedSequence |

#### Returns

`a`[]

the array

#### Defined in

[src/Sequence.ts:733](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L733)

___

### toJSON

▸ **toJSON**<`a`\>(`a`): `a`[]

Converts a `TypedSequence.t<A>` to a jsonizable value

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sl = TypedSequence.make(Num, 3, 2, 1)

TypedSequence.toJSON(sl)       // [3, 2, 1]
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
| `a` | [`t`](Sequence.md#t)<`a`\> | the TypedSequence |

#### Returns

`a`[]

the JSON

#### Defined in

[src/Sequence.ts:748](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L748)

___

### toMap

▸ **toMap**<`a`\>(`a`): `Map`<`string`, `a`\>

Converts a `TypedSequence.t<A>` to a set of `Set<A>`

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sl = TypedSequence.make(Num, 3, 2, 1)

TypedSequence.toMap(sl)      // Map([0, 3], [1, 2], [2, 1])
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
| `a` | [`t`](Sequence.md#t)<`a`\> | the TypedSequence |

#### Returns

`Map`<`string`, `a`\>

the Map

#### Defined in

[src/Sequence.ts:763](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L763)

___

### toSet

▸ **toSet**<`a`\>(`a`): `Set`<`a`\>

Converts a `TypedSequence.t<A>` to a set of `Set<A>`

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sl = TypedSequence.make(Num, 3, 2, 1)

TypedSequence.toSet(sl)      // Set(3, 2, 1)
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
| `a` | [`t`](Sequence.md#t)<`a`\> | the TypedSequence |

#### Returns

`Set`<`a`\>

the Set

#### Defined in

[src/Sequence.ts:780](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L780)

___

### toString

▸ **toString**<`a`\>(`a`): `string`

Converts a `TypedSequence.t<A>` to a string

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const sl = TypedSequence.make(Num, 3, 2, 1)

TypedSequence.toString(sl)       // "3,2,1"
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
| `a` | [`t`](Sequence.md#t)<`a`\> | the TypedSequence |

#### Returns

`string`

#### Defined in

[src/Sequence.ts:797](https://github.com/OctoD/tiinvo/blob/e88f1b4/src/Sequence.ts#L797)
