[tiinvo](../README.md) / [Exports](../modules.md) / Range

# Namespace: Range

## Table of contents

### Type Aliases

- [t](Range.md#t)

### Functions

- [inRange](Range.md#inrange)
- [map](Range.md#map)

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

[src/Range.ts:7](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Range.ts#L7)

## Functions

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

[src/Range.ts:115](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Range.ts#L115)

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

[src/Range.ts:149](https://github.com/OctoD/tiinvo/blob/9c9a441/src/Range.ts#L149)
