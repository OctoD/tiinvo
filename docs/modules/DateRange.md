[tiinvo](../README.md) / [Exports](../modules.md) / DateRange

# Namespace: DateRange

## Table of contents

### Type Aliases

- [T](DateRange.md#t)

### Predicates

- [inRange](DateRange.md#inrange)

### Mappables

- [map](DateRange.md#map)

## Type Aliases

### T

Ƭ **T**: `Object`

Represents a DateRange.

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const start = new Date("2022-01-01")
const end = new Date("2022-12-31")

const dr = DateRange.make(start, end, 'month')

for (const month of dr) {
   console.log(month.toJSON())
}
```

**`Since`**

4.0.0

#### Type declaration

| Name | Type |
| :------ | :------ |
| `start` | `Date` |
| `end` | `Date` |
| `step` | ``"year"`` \| ``"month"`` \| ``"day"`` |
| `[iterator]` | () => `Iterator`<`Date`, `any`, `undefined`\> |

#### Defined in

[src/DateRange.ts:24](https://github.com/OctoD/tiinvo/blob/9c9a441/src/DateRange.ts#L24)

## Predicates

### inRange

▸ **inRange**(`a`, `b`): `boolean`

Checks if a date `b` is in range of a `DateRange.t` `a`

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.inRange(dr, new Date('2020-01-02'))    // true
DateRange.inRange(dr, new Date('2020-01-03'))    // true
DateRange.inRange(dr, new Date('2020-01-04'))    // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](DateRange.md#t) | the DateRange |
| `b` | `Date` | the Date |

#### Returns

`boolean`

true if b is in range of a

#### Defined in

[src/DateRange.ts:144](https://github.com/OctoD/tiinvo/blob/9c9a441/src/DateRange.ts#L144)

▸ **inRange**(`a`): [`Unary`](Fn.md#unary)<[`T`](DateRange.md#t), `boolean`\>

Returns a `Unary<T, boolean>` function which checks if a date `a` is in range of a `DateRange.t` `b`

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.inRange(new Date('2020-01-02'))(dr)    // true
DateRange.inRange(new Date('2020-01-03'))(dr)    // true
DateRange.inRange(new Date('2020-01-04'))(dr)    // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Date` | the DateRange |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](DateRange.md#t), `boolean`\>

the unary function which accepts a `DateRange.T` and returns true if a is in `DateRage.T`

#### Defined in

[src/DateRange.ts:165](https://github.com/OctoD/tiinvo/blob/9c9a441/src/DateRange.ts#L165)

## Mappables

### map

▸ **map**<`a`\>(`t`, `m`): `a`[]

Maps a `DateRange.t` to `a[]` using a `Mappable<Date, a>`

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const f = (x: Date) => x.getFullYear();
const dr = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');

DateRange.map(dr, f)     // [2020, 2021, 2022, 2023]
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
| `t` | [`T`](DateRange.md#t) | the DateRange |
| `m` | [`Mappable`](Functors.md#mappable)<`Date`, `a`\> | the mappable functor |

#### Returns

`a`[]

the mapped value

#### Defined in

[src/DateRange.ts:208](https://github.com/OctoD/tiinvo/blob/9c9a441/src/DateRange.ts#L208)

▸ **map**<`a`\>(`t`): [`Unary`](Fn.md#unary)<[`T`](DateRange.md#t), `a`[]\>

Returns a `Unary<T, a[]>` function which maps a `DateRange.t` 
to `a[]` using a `Mappable<Date, a>`

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const f = (x: Date) => x.getFullYear();
const m = DateRange.map(f)
const dr = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');

m(dr)                    // [2020, 2021, 2022, 2023]
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
| `t` | [`Mappable`](Functors.md#mappable)<`Date`, `a`\> | the DateRange |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](DateRange.md#t), `a`[]\>

the unary function

#### Defined in

[src/DateRange.ts:230](https://github.com/OctoD/tiinvo/blob/9c9a441/src/DateRange.ts#L230)