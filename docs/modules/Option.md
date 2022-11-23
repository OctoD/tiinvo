[tiinvo](../README.md) / [Exports](../modules.md) / Option

# Namespace: Option

## Table of contents

### Type Aliases

- [None](Option.md#none)
- [Some](Option.md#some)
- [T](Option.md#t)

### Functions

- [cmp](Option.md#cmp)
- [eq](Option.md#eq)
- [filter](Option.md#filter)

### Mappables

- [map](Option.md#map)
- [mapOr](Option.md#mapor)

## Type Aliases

### None

Ƭ **None**: ``null`` \| `undefined`

None represents a value that is not present.
Unfortunately in javascript, null and undefined are not the same thing, 
but we can use them interchangeably within the option type.

**`Since`**

4.0.0

#### Defined in

src/Option.ts:12

___

### Some

Ƭ **Some**<`A`\>: `A` extends [`None`](Option.md#none) ? `never` : `A`

Some<a> represents a value which could have been a possible nullable or undefined

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

src/Option.ts:18

___

### T

Ƭ **T**<`A`\>: [`Some`](Option.md#some)<`A`\> \| [`None`](Option.md#none)

The type `Option.T<a>` represents a value that could be both `a` or `null` or `undefined`.

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

src/Option.ts:23

## Functions

### cmp

▸ **cmp**<`A`\>(`c`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two options `T<a>` by a given `Comparable<a>`.

Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.

If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1

**`Example`**

```ts
import { Str, Option } from 'tiinvo';

Option.cmp(Str.cmp, "a", "a")                    // 0
Option.cmp(Str.cmp, "a", "b")                    // -1
Option.cmp(Str.cmp, "b", "a")                    // 1
Option.cmp(Str.cmp, null, undefined)             // 0
Option.cmp(Str.cmp, null, "a")                   // -1
Option.cmp(Str.cmp, "a", undefined)              // 1
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
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> |
| `a` | [`T`](Option.md#t)<`A`\> |
| `b` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Option.ts:107

▸ **cmp**<`A`\>(`c`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Compares two options `T<a>` by a given `Comparable<a>`.

Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.

If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1

**`Example`**

```ts
import { Str, Option } from 'tiinvo';

Option.cmp(Str.cmp, "a")("a")                    // 0
Option.cmp(Str.cmp, "a")("b")                    // 1
Option.cmp(Str.cmp, "b")("a")                    // -1
Option.cmp(Str.cmp, null)(undefined)             // 0
Option.cmp(Str.cmp, null)("a")                   // 1
Option.cmp(Str.cmp, "a")(undefined)              // -1
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
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> |
| `a` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Option.ts:130

▸ **cmp**<`A`\>(`c`): [`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Compares two options `T<a>` by a given `Comparable<a>`.

Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.

If `a` is `None` and `b` is `Some` returns -1, else if both are `None` returns 0, else returns 1

**`Example`**

```ts
import { Str, Option } from 'tiinvo';

const cmp = Option.cmp(Str.cmp)

cmp("a", "a")                    // 0
cmp("a", "b")                    // -1
cmp("b", "a")                    // 1
cmp(null,  undefined)            // 0
cmp(null,  "a")                  // -1
cmp("a", undefined)              // 1
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
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Option.ts:155

___

### eq

▸ **eq**<`A`\>(`e`, `a`, `b`): `boolean`

Returns true if two options `T<a>` are equal, false otherwise.

```ts
import { Num, Option } from 'tiinvo';

const eq = Option.eq(Num.eq);

Option.eq(Num.eq, 0, 0)              // true
Option.eq(Num.eq, 1, 0)              // false
Option.eq(Num.eq, 0, 1)              // false
Option.eq(Num.eq, null, 1)           // false
Option.eq(Num.eq, null, undefined)   // true
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
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |
| `a` | [`T`](Option.md#t)<`A`\> |
| `b` | [`T`](Option.md#t)<`A`\> |

#### Returns

`boolean`

#### Defined in

src/Option.ts:199

▸ **eq**<`A`\>(`e`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `boolean`\>

Returns true if two options `T<a>` are equal, false otherwise.

```ts
import { Num, Option } from 'tiinvo';

Option.eq(Num.eq, 0)(0)                      // true
Option.eq(Num.eq, 0)(1)                      // false
Option.eq(Num.eq, null)(undefined)           // true
Option.eq(Num.eq, null)(100000000)           // false
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
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |
| `a` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `boolean`\>

#### Defined in

src/Option.ts:216

▸ **eq**<`A`\>(`e`): [`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, `boolean`\>

Returns true if two options `T<a>` are equal, false otherwise.

```ts
import { Num, Option } from 'tiinvo';

const eq = Option.eq(Num.eq);

eq(0, 0)                         // true
eq(null, undefined)              // true
eq(null, 0)                      // false
eq(0, null)                      // false
eq(1_000_000, 0)                 // false
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
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, `boolean`\>

#### Defined in

src/Option.ts:236

___

### filter

▸ **filter**<`A`\>(`a`, `b`): [`T`](Option.md#t)<`A`\>

Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

Option.filter(Num.gt(1), 1)    // null
Option.filter(Num.gt(1), 2)    // 2
Option.filter(Num.gt(1), null) // null
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
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `boolean`\> |
| `b` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

src/Option.ts:272

▸ **filter**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

const f = Option.filter(Num.gt(1));

f(1)    // null
f(2)    // 2
f(null) // null
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
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `boolean`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

#### Defined in

src/Option.ts:288

## Mappables

### map

▸ **map**<`A`, `B`\>(`m`, `a`): [`T`](Option.md#t)<`B`\>

Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.map(Num.add(1));

Option.map(Num.add(1), 1)    // 2
Option.map(Num.add(1), null) // null
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> |
| `a` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`T`](Option.md#t)<`B`\>

#### Defined in

src/Option.ts:316

▸ **map**<`A`, `B`\>(`m`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.map(Num.add(1));

m(1)    // 2
m(null) // null
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

#### Defined in

src/Option.ts:332

___

### mapOr

▸ **mapOr**<`A`, `B`\>(`m`, `a`, `b`): `B`

Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `b`.

```typescript
import { Option, Num } from 'tiinvo';

Option.mapOr(Num.add(2), 1, 0)    // 3
Option.mapOr(Num.add(2), null, 0) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> |
| `a` | [`T`](Option.md#t)<`A`\> |
| `b` | `B` |

#### Returns

`B`

#### Defined in

src/Option.ts:356

▸ **mapOr**<`A`, `B`\>(`m`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `B`\>

Maps an `Option.T<a>` to another `Option.T<b>` if is `Some<a>`, otherwise returns `b`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.mapOr(Num.add(2), 0);

m(1)    // 3
m(null) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> |
| `a` | `B` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `B`\>

#### Defined in

src/Option.ts:372
