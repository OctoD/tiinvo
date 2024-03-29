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

### Sortables

- [sort](TypedSequence.md#sort)

### comparables

- [cmp](TypedSequence.md#cmp)
- [eq](TypedSequence.md#eq)

### Serializables

- [toArray](TypedSequence.md#toarray)
- [toJSON](TypedSequence.md#tojson)
- [toMap](TypedSequence.md#tomap)
- [toSet](TypedSequence.md#toset)
- [toString](TypedSequence.md#tostring)

## Type Aliases

### T

Ƭ **T**<`A`\>: [`T`](Sequence.md#t)<`A`\> & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`A`\>  }

The typed version of a `Sequence.t<A>`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/TypedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L10)

## Functions

### make

▸ **make**<`A`\>(`g`, `...values`): [`T`](TypedSequence.md#t)<`A`\>

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

[src/TypedSequence.ts:38](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L38)

▸ **make**<`A`\>(`g`, `...values`): [`T`](TypedSequence.md#t)<`A`\>

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

[src/TypedSequence.ts:61](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L61)

___

### append

▸ **append**<`A`\>(`a`, `b`): [`T`](TypedSequence.md#t)<`A`\>

Adds an element to the end of the `Sequence.t<A>` without mutating the original one.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)

TypedSequence.append(s0, 30)       // TypedSequence(10, 20, 30)
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
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the TypedSequence |
| `b` | `A` | the value to append |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

#### Defined in

[src/TypedSequence.ts:142](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L142)

▸ **append**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

Returns a unary function which adds an element `a` to the end of the 
`Sequence.t<A>` without mutating the original one.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)

TypedSequence.append(30)(s0)       // TypedSequence(10, 20, 30)
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
| `a` | `A` | the value to append |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

the unary function

#### Defined in

[src/TypedSequence.ts:161](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L161)

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
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`any`\>  } | the first TypedSequence |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `a` | the last TypedSequence |
| `b` | `a` | - |

#### Returns

`a`

the concatenated TypedSequence

#### Defined in

[src/TypedSequence.ts:196](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L196)

▸ **concat**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, `a`\>

Returns a unary function which concatenates two `TypedSequence.t<A>` 
and `TypedSequence.t<b>` and return a new `TypedSequence.t<A>`.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)
const s1 = TypedSequence.make(Num, 30, 40)

TypedSequence.concat(s1)(s0)       // TypedSequence(10, 20, 30, 40)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | extends `Iterable`<`any`, `a`\> & { `[indexer]`: () => `Readonly`<`Record`<`number`, `any`\>\> ; `[iterator]`: () => `Iterator`<`any`, `any`, `undefined`\>  } & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`any`\>  } | the first TypedSequence |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `a` | the last TypedSequence |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `a`\>

the concatenated TypedSequence

#### Defined in

[src/TypedSequence.ts:217](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L217)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the TypedSequence |
| `b` | `A` | the value to prepend |

#### Returns

[`T`](TypedSequence.md#t)<`A`\>

the new TypedSequence

#### Defined in

[src/TypedSequence.ts:247](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L247)

▸ **prepend**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

Returns a unary function which adds an element to the start of 
the `TypedSequence.t<A>` without mutating the original one.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 10, 20)

TypedSequence.prepend(30)(s0)       // TypedSequence.make(Num, 30, 10, 20)
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
| `a` | `A` | the value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>\>

the unary function

#### Defined in

[src/TypedSequence.ts:266](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L266)

___

### count

▸ **count**<`A`\>(`a`, `p`): `number`

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
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> | the sequence |
| `p` | [`Filterable`](Functors.md#filterable)<`A`\> | - |

#### Returns

`number`

the counted elements

#### Defined in

[src/Sequence.ts:1083](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1083)

▸ **count**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

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
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> | the sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, `number`\>

the counted elements

#### Defined in

[src/Sequence.ts:1105](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1105)

___

### get

▸ **get**<`A`\>(`a`, `i`): [`T`](Result.md#t)<`A`\>

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Sequence.md#t)<`A`\> |
| `i` | `number` |

#### Returns

[`T`](Result.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1170](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1170)

▸ **get**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Sequence.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

#### Defined in

[src/Sequence.ts:1195](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1195)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Opt.md#t)<`A`\>

Gets the first element of a TypedSequence.

Returns `Option.None` if none is found.

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

[`T`](Opt.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1141](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1141)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Opt.md#t)<`A`\>

Gets a Sequence.t<A>'s last element.

Returns `Option.None` if none is found.

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

[`T`](Opt.md#t)<`A`\>

#### Defined in

[src/Sequence.ts:1241](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1241)

___

### length

▸ **length**<`A`\>(`t`): `number`

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`number`

#### Defined in

[src/Sequence.ts:1266](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1266)

___

### values

▸ **values**<`A`\>(`t`): `Record`<`number`, `A`\>

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Record`<`number`, `A`\>

#### Defined in

[src/Sequence.ts:1287](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1287)

___

### empty

▸ **empty**<`A`\>(`t`): `boolean`

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:1316](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1316)

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
| `t` | [`T`](Sequence.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

[src/Sequence.ts:1340](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1340)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the guarded value |

#### Returns

x is T<unknown\>

- true if x is a TypedSequence
 - false otherwise

#### Defined in

[src/TypedSequence.ts:119](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L119)

## Sortables

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

[src/TypedSequence.ts:304](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L304)

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

[src/TypedSequence.ts:328](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L328)

## comparables

### cmp

▸ **cmp**<`A`\>(`cmp`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 1, 2, 3)
const s1 = TypedSequence.make(Num, 1, 2, 3)

TypedSequence.cmp(Num, s0, s1)       // 0
TypedSequence.cmp(Num)(s0, s1)       // 0
TypedSequence.cmp(Num, s0)(s1)       // 0
TypedSequence.cmp(Num)(s0)(s1)       // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the `Comparable<A>` or `ComparableModule<A>` functor |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the first sequence |
| `b` | [`T`](TypedSequence.md#t)<`A`\> | the second sequence |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result

#### Defined in

[src/TypedSequence.ts:496](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L496)

▸ **cmp**<`A`\>(`cmp`, `a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a comparer function that compares two `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 1, 2, 3)
const s1 = TypedSequence.make(Num, 1, 2, 3)

const c = TypedSequence.cmp(Num, s0)

c(s1)       // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the `Comparable<A>` or `ComparableModule<A>` functor |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the comparer function

#### Defined in

[src/TypedSequence.ts:523](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L523)

▸ **cmp**<`A`\>(`cmp`): [`Binary`](Fn.md#binary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a comparer function that compares two `TypedSequence.t<A>` values with a `Comparable<A>` or `ComparableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 1, 2, 3)
const s1 = TypedSequence.make(Num, 1, 2, 3)

const c = TypedSequence.cmp(Num)

c(s0, s1)       // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the `Comparable<A>` or `ComparableModule<A>` functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the comparer function

#### Defined in

[src/TypedSequence.ts:549](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L549)

___

### eq

▸ **eq**<`A`\>(`eq`, `a`, `b`): `boolean`

Checks if two `TypedSequence.t<A>` values are equal with an `Equatable<A>` or `EquatableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 1, 2, 3)
const s1 = TypedSequence.make(Num, 1, 2, 3)

TypedSequence.eq(Num, s0, s1)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`A`\> \| [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the `Equatable<A>` or `EquatableModule<A>` functor |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the first sequence |
| `b` | [`T`](TypedSequence.md#t)<`A`\> | the second sequence |

#### Returns

`boolean`

`true` if the sequences are equal, `false` otherwise

#### Defined in

[src/TypedSequence.ts:621](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L621)

▸ **eq**<`A`\>(`eq`, `a`): [`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, `boolean`\>

Returns a comparer function that checks if two `TypedSequence.t<A>` values are equal with an `Equatable<A>` or `EquatableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s2 = TypedSequence.make(Num, 1, 2, 3)
const s3 = TypedSequence.make(Num, 1, 2, 3)

const c = TypedSequence.eq(Num, s0)

c(s1)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`A`\> \| [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the `Equatable<A>` or `EquatableModule<A>` functor |
| `a` | [`T`](TypedSequence.md#t)<`A`\> | the first sequence |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedSequence.md#t)<`A`\>, `boolean`\>

the comparer function

#### Defined in

[src/TypedSequence.ts:648](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L648)

▸ **eq**<`A`\>(`eq`): [`Binary`](Fn.md#binary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>, `boolean`\>

Returns a comparer function that checks if two `TypedSequence.t<A>` values are equal with an `Equatable<A>` or `EquatableModule<A>` functor.

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const s0 = TypedSequence.make(Num, 1, 2, 3)
const s1 = TypedSequence.make(Num, 1, 2, 3)

const c = TypedSequence.eq(Num)

c(s0, s1)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the sequence's element type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`A`\> \| [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the `Equatable<A>` or `EquatableModule<A>` functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](TypedSequence.md#t)<`A`\>, [`T`](TypedSequence.md#t)<`A`\>, `boolean`\>

the comparer function

#### Defined in

[src/TypedSequence.ts:674](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedSequence.ts#L674)

## Serializables

### toArray

▸ **toArray**<`A`\>(`t`): `A`[]

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`A`[]

the array

#### Defined in

[src/Sequence.ts:1430](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1430)

___

### toJSON

▸ **toJSON**<`a`\>(`t`): `a`[]

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

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`a`\> |

#### Returns

`a`[]

the JSON

#### Defined in

[src/Sequence.ts:1449](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1449)

___

### toMap

▸ **toMap**<`A`\>(`t`): `Map`<`string`, `A`\>

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Map`<`string`, `A`\>

the Map

#### Defined in

[src/Sequence.ts:1469](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1469)

___

### toSet

▸ **toSet**<`A`\>(`t`): `Set`<`A`\>

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`Set`<`A`\>

the Set

#### Defined in

[src/Sequence.ts:1490](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1490)

___

### toString

▸ **toString**<`A`\>(`t`): `string`

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](Sequence.md#t)<`A`\> |

#### Returns

`string`

#### Defined in

[src/Sequence.ts:1511](https://github.com/OctoD/tiinvo/blob/5743591/src/Sequence.ts#L1511)
