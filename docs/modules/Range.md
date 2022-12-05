[tiinvo](../README.md) / [Exports](../modules.md) / Range

# Namespace: Range

## Table of contents

### Type Aliases

- [T](Range.md#t)

### Factories

- [make](Range.md#make)

### Guardables

- [guard](Range.md#guard)

### Predicates

- [inRange](Range.md#inrange)

### Mappables

- [map](Range.md#map)

### Serializables

- [toArray](Range.md#toarray)

## Type Aliases

### T

Ƭ **T**: `Object`

Represents a numeric range from a starting value `start` to an ending value `end`.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `step` | `number` |
| `[iterator]` | () => `Iterator`<`number`, `any`, `undefined`\> |

#### Defined in

[src/Range.ts:7](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L7)

## Factories

### make

▸ **make**(`start`, `end`, `step?`): [`T`](Range.md#t)

Makes a new range from a start to an end (inclusive)

If the third parameter `step` is passed, the range will increment by that step

**`Example`**

```ts
import { Range } from 'tiinvo'

for (const n of Range.make(0, 10)) {
   console.log(n)
}

// will log 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (const n of Range.make(0, 10, 2)) {
   console.log(n)
}

// will log 0, 2, 4, 6, 8, 10
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `number` | `undefined` | range's starting value |
| `end` | `number` | `undefined` | range's ending value |
| `step` | `number` | `1` | range's increment value |

#### Returns

[`T`](Range.md#t)

#### Defined in

[src/Range.ts:45](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L45)

## Guardables

### guard

▸ **guard**(`x`): x is T

Checks if a parameter `x` is of `Range.T` type

**`Example`**

```ts
import { Range } from 'tiinvo'

Range.guard(10)                                // false
Range.guard([])                                // false
Range.guard({})                                // false
Range.guard({ start: 10, end: 20 })            // false
Range.guard({ start: 10, end: 20, step: 12 })  // false
Range.guard(Range.make(1, 2))                  // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is T

true if `x` is a `T`, false otherwise

#### Defined in

[src/Range.ts:98](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L98)

## Predicates

### inRange

▸ **inRange**(`t`, `a`): `boolean`

Checks whenever a number is within in a `Range.T`

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(3, 8)

Range.inRange(r, 10)   // false
Range.inRange(r, 6)    // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Range.md#t) | the range |
| `a` | `number` | the value to check |

#### Returns

`boolean`

#### Defined in

[src/Range.ts:123](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L123)

▸ **inRange**(`t`): [`Unary`](Fn.md#unary)<[`T`](Range.md#t), `boolean`\>

Returns a unary function which checks whenever a `Range.T` contains a value `t`

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(3, 8)

Range.inRange(10)(r)   // false
Range.inRange(6)(r)    // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | the value to check |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Range.md#t), `boolean`\>

the unary function `Fn.Unary<T, boolean>`

#### Defined in

[src/Range.ts:143](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L143)

## Mappables

### map

▸ **map**<`A`\>(`t`, `m`): `A`[]

Maps a functor `Mappable<number, A>` over a `Range.T`

**`Example`**

```ts
import { Range, Num } from 'tiinvo'

const r = Range.make(20, 30)

Range.map(r, Num.toHex)   // ['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the mapped value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Range.md#t) | the Range |
| `m` | [`Mappable`](Functors.md#mappable)<`number`, `A`\> | the Mappable functor |

#### Returns

`A`[]

A[] if `t` is `Range.T`

#### Defined in

[src/Range.ts:180](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L180)

▸ **map**<`A`\>(`t`): [`Unary`](Fn.md#unary)<[`T`](Range.md#t), `A`[]\>

Returns a unary function which maps a functor `Mappable<number, A>` over a `Range.T`

**`Example`**

```ts
import { Range, Num } from 'tiinvo'

const r = Range.make(20, 30)
const m = Range.map(Num.toHex)

m(r)   // ['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the mapped value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Mappable`](Functors.md#mappable)<`number`, `A`\> | the Range |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Range.md#t), `A`[]\>

the unary function

#### Defined in

[src/Range.ts:201](https://github.com/OctoD/tiinvo/blob/3fa8e49/src/Range.ts#L201)

## Serializables

### toArray

▸ **toArray**<`T`\>(`arrayLike`): `T`[]

Converts a `Range.T` to a `number[]` array

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(0, 10)

Range.toArray(r)   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> |

#### Returns

`T`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ **toArray**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Converts a `Range.T` to a `number[]` array

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(0, 10)

Range.toArray(r)   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` |
| `thisArg?` | `any` |

#### Returns

`U`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ **toArray**<`T`\>(`iterable`): `T`[]

Converts a `Range.T` to a `number[]` array

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(0, 10)

Range.toArray(r)   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> |

#### Returns

`T`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ **toArray**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Converts a `Range.T` to a `number[]` array

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(0, 10)

Range.toArray(r)   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` |
| `thisArg?` | `any` |

#### Returns

`U`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91
