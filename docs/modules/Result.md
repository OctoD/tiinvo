[tiinvo](../README.md) / [Exports](../modules.md) / Result

# Namespace: Result

## Table of contents

### Type Aliases

- [Err](Result.md#err)
- [Ok](Result.md#ok)
- [t](Result.md#t)

### Functions

- [cmp](Result.md#cmp)
- [eq](Result.md#eq)
- [filter](Result.md#filter)

## Type Aliases

### Err

Ƭ **Err**: `Error`

Represents an error

#### Defined in

src/Result.ts:9

___

### Ok

Ƭ **Ok**<`a`\>: `a` extends `Error` ? `never` : `a`

Represents a successful result of an operation

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Result.ts:13

___

### t

Ƭ **t**<`a`\>: [`Ok`](Result.md#ok)<`a`\> \| [`Err`](Result.md#err)

Could represent both an Error `Err` or a successful result of an operation `Ok<a>`

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Result.ts:17

## Functions

### cmp

▸ **cmp**<`A`\>(`cmp`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two results `t<a>` by a given `Comparable<a>`.

Returns -1 if `a` is less than `b`, 0 if `a` is same of `b` and 1 if `a` is greater than `b`.

 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

const cmp = Result.cmp(Str.cmp);

cmp("a", "a")                    // 0
cmp("a", "b")                    // -1
cmp("b", "a")                    // 1
cmp(new Error(), new Error())    // 0
cmp(new Error(), "a")            // -1
cmp("a", new Error())            // 1
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
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> |
| `a` | [`t`](Result.md#t)<`A`\> |
| `b` | [`t`](Result.md#t)<`A`\> |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Result.ts:131

___

### eq

▸ **eq**<`a`\>(`eq`, `a`, `b`): `boolean`

Returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

const eq = Result.eq(Num.eq);

eq(0, 0)                         // true
eq(new Error(), new TypeError()) // true
eq(new Error(), 0)               // false
eq(0, new Error())               // false
eq(1_000_000, 0)                 // false
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
| `eq` | [`Equatable`](Functors.md#equatable)<`a`\> |
| `a` | [`t`](Result.md#t)<`a`\> |
| `b` | [`t`](Result.md#t)<`a`\> |

#### Returns

`boolean`

#### Defined in

src/Result.ts:180

▸ **eq**<`a`\>(`eq`, `a`): [`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`a`\>, `boolean`\>

**`Example`**

```ts
import {  } from 'tiinvo'

```

**`Since`**

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`a`\> |
| `a` | [`t`](Result.md#t)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`a`\>, `boolean`\>

#### Defined in

src/Result.ts:195

▸ **eq**<`a`\>(`eq`): [`Binary`](Fn.md#binary)<[`t`](Result.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>, `boolean`\>

**`Example`**

```ts
import {  } from 'tiinvo'

```

**`Since`**

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`a`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`t`](Result.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>, `boolean`\>

#### Defined in

src/Result.ts:210

___

### filter

▸ **filter**<`a`\>(`f`, `a`): [`t`](Result.md#t)<`a`\>

Returns `Some<a>` if the value is `Some<a>` and the predicate returns true, otherwise returns `None`.

```typescript
import { Result, Num } from 'tiinvo';

const f = Result.filter(Num.gt(1));

f(1)               // Error("Value did not pass filter")
f(2)               // 2
f(new TypeError()) // Error("Value did not pass filter")
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
| `f` | [`Filterable`](Functors.md#filterable)<`a`\> |
| `a` | [`t`](Result.md#t)<`a`\> |

#### Returns

[`t`](Result.md#t)<`a`\>

#### Defined in

src/Result.ts:265
