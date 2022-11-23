[tiinvo](../README.md) / [Exports](../modules.md) / TypedSequence

# Namespace: TypedSequence

## Table of contents

### Type Aliases

- [t](TypedSequence.md#t)

### Functions

- [make](TypedSequence.md#make)
- [append](TypedSequence.md#append)
- [concat](TypedSequence.md#concat)
- [prepend](TypedSequence.md#prepend)
- [sort](TypedSequence.md#sort)

## Type Aliases

### t

Ƭ **t**<`a`\>: [`t`](Sequence.md#t)<`a`\> & { `[guardsymbol]`: [`Guardable`](Functors.md#guardable)<`a`\>  }

The typed version of a `Sequence.t<a>`.

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

[src/TypedSequence.ts:10](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L10)

## Functions

### make

▸ **make**<`a`\>(`g`, ...`values`): [`t`](TypedSequence.md#t)<`a`\>

Creates a `TypedSequence.t<a>` starting from a `Guardable<a>` or a `GuardableModule<a>`

You can add initial values as arguments.

If an argument does pass the guard check, the function will throw a TypeError

**`Example`**

```ts
import { TypedSequence, Num } from 'tiinvo'

const ts0 = TypedSequence.make(Num, 1, 2, 3)
const ts1 = TypedSequence.make(Num.guard, 1, 2, 3)

ts0 === ts1      // true
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
| `...values` | `a`[] |

#### Returns

[`t`](TypedSequence.md#t)<`a`\>

#### Defined in

[src/TypedSequence.ts:36](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L36)

___

### append

▸ **append**<`a`\>(`a`, `b`): [`t`](TypedSequence.md#t)<`a`\>

Adds an element to the end of the `Sequence.t<a>` without mutating the original one.

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](TypedSequence.md#t)<`a`\> |
| `b` | `a` |

#### Returns

[`t`](TypedSequence.md#t)<`a`\>

#### Defined in

[src/TypedSequence.ts:105](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L105)

___

### concat

▸ **concat**<`a`\>(`a`, `b`): `a`

Concatenates two `TypedSequence.t<a>` and `TypedSequence.t<b>` and return a new `TypedSequence.t<a>`.

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

[src/TypedSequence.ts:136](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L136)

___

### prepend

▸ **prepend**<`a`\>(`a`, `b`): [`t`](TypedSequence.md#t)<`a`\>

Adds an element to the start of the `TypedSequence.t<a>` without mutating the original one.

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](TypedSequence.md#t)<`a`\> |
| `b` | `a` |

#### Returns

[`t`](TypedSequence.md#t)<`a`\>

#### Defined in

[src/TypedSequence.ts:162](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L162)

___

### sort

▸ **sort**<`a`\>(`a`, `mod`): [`t`](TypedSequence.md#t)<`a`\>

Sorts and returns a new `TypedSequence.t<a>` values with a `Comparable<a>` or `ComparableModule<a>` functor.

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

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](TypedSequence.md#t)<`a`\> |
| `mod` | [`Comparable`](Functors.md#comparable)<`a`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`a`\> |

#### Returns

[`t`](TypedSequence.md#t)<`a`\>

#### Defined in

[src/TypedSequence.ts:193](https://github.com/OctoD/tiinvo/blob/d1726d1/src/TypedSequence.ts#L193)
