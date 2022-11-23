[tiinvo](../README.md) / [Exports](../modules.md) / Range

# Namespace: Range

## Table of contents

### Type Aliases

- [t](Range.md#t)

### Functions

- [make](Range.md#make)
- [guard](Range.md#guard)
- [inRange](Range.md#inrange)
- [map](Range.md#map)
- [toArray](Range.md#toarray)

## Type Aliases

### t

Ƭ **t**: `Object`

Represents a numeric range from a starting value `start` to an ending value `end`.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `step` | `number` |
| `[iterator]` | () => `Iterator`<`number`, `any`, `undefined`\> |

#### Defined in

[src/Range.ts:7](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L7)

## Functions

### make

▸ **make**(`start`, `end`, `step?`): [`t`](Range.md#t)

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `start` | `number` | `undefined` |
| `end` | `number` | `undefined` |
| `step` | `number` | `1` |

#### Returns

[`t`](Range.md#t)

#### Defined in

[src/Range.ts:41](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L41)

___

### guard

▸ **guard**(`x`): x is t

Checks if a parameter `x` is of `Range.t` type

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

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is t

#### Defined in

[src/Range.ts:91](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L91)

___

### inRange

▸ **inRange**(`t`, `a`): `boolean`

Checks whenever a number is in a `Range.t`

**`Example`**

```ts
import { Range } from 'tiinvo'

const r = Range.make(3, 8)

Range.inRange(r, 10)   // false
Range.inRange(10)(r)   // false
Range.inRange(r, 6)    // true
Range.inRange(6)(r)    // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`t`](Range.md#t) |
| `a` | `number` |

#### Returns

`boolean`

#### Defined in

[src/Range.ts:115](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L115)

▸ **inRange**(`t`): [`Unary`](Fn.md#unary)<[`t`](Range.md#t), `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Range.md#t), `boolean`\>

#### Defined in

[src/Range.ts:116](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L116)

___

### map

▸ **map**<`a`\>(`t`, `m`): `a`[]

Maps a functor `Mappable<number, a>` over a `Range.t`

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

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`t`](Range.md#t) |
| `m` | [`Mappable`](Functors.md#mappable)<`number`, `a`\> |

#### Returns

`a`[]

#### Defined in

[src/Range.ts:149](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L149)

▸ **map**<`a`\>(`t`): [`Unary`](Fn.md#unary)<[`t`](Range.md#t), `a`[]\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Mappable`](Functors.md#mappable)<`number`, `a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Range.md#t), `a`[]\>

#### Defined in

[src/Range.ts:150](https://github.com/OctoD/tiinvo/blob/5eac803/src/Range.ts#L150)

___

### toArray

▸ **toArray**<`T`\>(`arrayLike`): `T`[]

Converts a `Range.t` to a `number[]` array

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

Converts a `Range.t` to a `number[]` array

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

Converts a `Range.t` to a `number[]` array

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

Converts a `Range.t` to a `number[]` array

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
