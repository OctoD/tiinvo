[tiinvo](../README.md) / [Exports](../modules.md) / DateRange

# Namespace: DateRange

## Table of contents

### Type Aliases

- [T](DateRange.md#t)

### Factories

- [make](DateRange.md#make)

### Guardables

- [guard](DateRange.md#guard)

### Predicates

- [inRange](DateRange.md#inrange)

### Mappables

- [map](DateRange.md#map)

### Serializables

- [toArray](DateRange.md#toarray)

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

[src/DateRange.ts:24](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L24)

## Factories

### make

▸ **make**(`start`, `end`, `step?`): [`T`](DateRange.md#t)

Creates a `DateRange.t` between a starting date `start` and an ending date `end` (included).

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

Array.from(dr) // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
```

**`Step`**

the step to increment. It can be:
 - `"year"` (default), increments by year
 - `"month"`, increments by month
 - `"day"`, increments by day

**`Since`**

4.0.0

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `Date` | `undefined` | the starting date |
| `end` | `Date` | `undefined` | the ending date |
| `step` | ``"year"`` \| ``"month"`` \| ``"day"`` | `'year'` | - |

#### Returns

[`T`](DateRange.md#t)

#### Defined in

[src/DateRange.ts:55](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L55)

## Guardables

### guard

▸ **guard**(`x`): x is T

Checks if a parameter `x` is a `DateRange.t`.

Start and end are included in check.

**`Example`**

```ts
import { DateRange, Range } from 'tiinvo'

DateRange.guard(0)                                         // false
DateRange.guard(Range.make(0, 2))                          // false
DateRange.guard(DateRange.make(new Date(), new Date()))    // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is T

returns true if x is DateRange, false otherwise

#### Defined in

[src/DateRange.ts:125](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L125)

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

[src/DateRange.ts:152](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L152)

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

[src/DateRange.ts:173](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L173)

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

[src/DateRange.ts:216](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L216)

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

[src/DateRange.ts:238](https://github.com/OctoD/tiinvo/blob/e72b4bb/src/DateRange.ts#L238)

## Serializables

### toArray

▸ **toArray**<`T`\>(`arrayLike`): `T`[]

Converts a `DateRange.t` to a `Date[]` array

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.toArray(dr)      // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
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

Converts a `DateRange.t` to a `Date[]` array

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.toArray(dr)      // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
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

Converts a `DateRange.t` to a `Date[]` array

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.toArray(dr)      // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
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

Converts a `DateRange.t` to a `Date[]` array

**`Example`**

```ts
import { DateRange } from 'tiinvo'

const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

DateRange.toArray(dr)      // [new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]
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
