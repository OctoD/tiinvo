[tiinvo](../README.md) / [Exports](../modules.md) / BigInt

# Namespace: BigInt

## Table of contents

### Type Aliases

- [T](BigInt.md#t)

### Guards

- [guard](BigInt.md#guard)

### Comparables

- [cmp](BigInt.md#cmp)
- [eq](BigInt.md#eq)

### Mappables

- [map](BigInt.md#map)
- [mapOr](BigInt.md#mapor)

### Operables

- [add](BigInt.md#add)
- [div](BigInt.md#div)
- [mod](BigInt.md#mod)
- [mul](BigInt.md#mul)
- [pow](BigInt.md#pow)
- [root](BigInt.md#root)
- [sub](BigInt.md#sub)

### Sortables

- [asc](BigInt.md#asc)
- [desc](BigInt.md#desc)

### Serializables

- [toBin](BigInt.md#tobin)
- [toHex](BigInt.md#tohex)
- [toOct](BigInt.md#tooct)
- [toJSON](BigInt.md#tojson)
- [toString](BigInt.md#tostring)

## Type Aliases

### T

Ƭ **T**: `bigint`

Represents a very large integer.

**`Since`**

4.0.0

#### Defined in

[src/BigInt.ts:10](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L10)

## Guards

### guard

▸ **guard**(`x`): x is bigint

Checks if a parameter `x` is a `BigInt`

**`Example`**

```ts
import { BigInt } from 'tiinvo'

BigInt.guard(10)     // false
BigInt.guard(10n)    // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the parameter to check |

#### Returns

x is bigint

returns true if is a bigint, false otherwise

#### Defined in

[src/BigInt.ts:31](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L31)

## Comparables

### cmp

▸ **cmp**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two `BigInt` `a` and `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo'

BigInt.cmp(1n, 0n)       // 1
BigInt.cmp(0n, 0n)       // 0
BigInt.cmp(0n, 1n)       // -1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | - |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
- 0 if `a` is equal to `b`
- 1 if `a` is more than `b`

#### Defined in

[src/BigInt.ts:59](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L59)

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two `BigInt` `b` and `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo'

const cmp0 = BigInt.cmp(0n)

cmp0(0n)      // 0
cmp0(1n)      // -1
cmp0(-1n)     // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/BigInt.ts:81](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L81)

___

### eq

▸ **eq**(`a`, `b`): `boolean`

Checks if `a` and `b` are equal

**`Example`**

```ts
import { BigInt } from 'tiinvo'

BigInt.eq(10n, 10n)              // true
BigInt.eq(10n, 5n)               // false
BigInt.eq(10n, 10 as any)        // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | the second bigint |

#### Returns

`boolean`

true if two bigints are equal

#### Defined in

[src/BigInt.ts:109](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L109)

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), `boolean`\>

Returns a unary function which checks if `b` and `a` are equal

**`Example`**

```ts
import { BigInt } from 'tiinvo'

const is10n = BigInt.eq(10n)

is10n(10n)              // true
is10n(5n)               // false
is10n(10 as any)        // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), `boolean`\>

the unary function

#### Defined in

[src/BigInt.ts:130](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L130)

## Mappables

### map

▸ **map**<`A`\>(`a`, `m`): [`T`](Result.md#t)<`A`\>

Maps a bigint `a` to a value `Result.Ok<b>` if a is `bigint`, 
otherwise returns `Result.Err`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const toHex = BigInt.map(x => '0x' + x.toString(16))

BigInt.map(10n, x => '0x' + x.toString(16))       // "0xa"
BigInt.map("a", x => '0x' + x.toString(16))       // TypeError("a is not a bigint")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the mapped value |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |
| `m` | [`Mappable`](Functors.md#mappable)<`bigint`, `A`\> | the mappable functor |

#### Returns

[`T`](Result.md#t)<`A`\>

the mapped value or TypeError if `a` is not a `bigint`

#### Defined in

[src/BigInt.ts:165](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L165)

▸ **map**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](Result.md#t)<`A`\>\>

Returns a unary function which maps a bigint `a` to 
a value `Result.Ok<b>` if a is `bigint`, otherwise returns `Result.Err`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const toHex = BigInt.map(x => '0x' + x.toString(16))

toHex(10n)       // "0xa"
toHex("a")       // TypeError("a is not a bigint")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the mapped value |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`bigint`, `A`\> | the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](Result.md#t)<`A`\>\>

the unary function

#### Defined in

[src/BigInt.ts:187](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L187)

___

### mapOr

▸ **mapOr**<`A`\>(`a`, `m`, `b`): `A`

Maps a bigint `a` to a value of type `B` if a is `bigint`, otherwise returns `b`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0")

toHex(10n)      // "0xa"
toHex("a")      // "0x0"
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
| `a` | `bigint` | the bigint |
| `m` | [`Mappable`](Functors.md#mappable)<`bigint`, `A`\> | the mappable functor |
| `b` | `A` | the fallback value |

#### Returns

`A`

#### Defined in

[src/BigInt.ts:219](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L219)

▸ **mapOr**<`A`\>(`a`, `m`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), `A`\>

Returns a unary function which maps a bigint `b` to a value of type `B` if a is `bigint`, otherwise returns `m`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0")

toHex(10n)      // "0xa"
toHex("a")      // "0x0"
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
| `a` | [`Mappable`](Functors.md#mappable)<`bigint`, `A`\> | the bigint |
| `m` | `A` | the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), `A`\>

the unary function

#### Defined in

[src/BigInt.ts:241](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L241)

## Operables

### add

▸ **add**(`a`, `b`): [`T`](BigInt.md#t)

Adds `a` to `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.add(5n, -2n)             // 3n
BigInt.add(5n, 12n)             // 17n

const add5 = BigInt.add(5n) 

add5(10n)                   // 15n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | the second bigint |

#### Returns

[`T`](BigInt.md#t)

the result

#### Defined in

[src/BigInt.ts:278](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L278)

▸ **add**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a unary function which adds `a` to `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const add5 = BigInt.add(5n) 

add5(10n)                   // 15n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

#### Defined in

[src/BigInt.ts:297](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L297)

___

### div

▸ **div**(`a`, `b`): [`T`](BigInt.md#t)

Divides `a` by `b`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.div(4n, 2n)              // 2n
BigInt.div(12n, 3n)             // 4n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | first value (top of division) |
| `b` | `bigint` | second value (bottom of division) |

#### Returns

[`T`](BigInt.md#t)

the result

#### Defined in

[src/BigInt.ts:324](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L324)

▸ **div**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a unary function which divides `a` by `b`.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.div(4n, 2n)              // 2n
BigInt.div(12n, 3n)             // 4n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | second value (bottom of division) |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

the unary function

#### Defined in

[src/BigInt.ts:342](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L342)

___

### mod

▸ **mod**(`a`, `b`): [`T`](BigInt.md#t)

Returns the remainder of the division of `a` by `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.mod(2n, 2n)             // 0n
BigInt.mod(3n, 2n)             // 1n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the value |
| `b` | `bigint` | the modulus |

#### Returns

[`T`](BigInt.md#t)

the remainder

#### Defined in

[src/BigInt.ts:369](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L369)

▸ **mod**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a unary function which returns the remainder of the division of `b` by `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const mod2 = BigInt.mod(2n) 

mod2(10n)                   // 0n
mod2(15n)                   // 1n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

the unary function

#### Defined in

[src/BigInt.ts:389](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L389)

___

### mul

▸ **mul**(`a`, `b`): [`T`](BigInt.md#t)

Multiplies `a` to `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.mul(5n, -2n)             // -10n
BigInt.mul(5n, 12n)             // 60n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | the second bigint |

#### Returns

[`T`](BigInt.md#t)

the result

#### Defined in

[src/BigInt.ts:416](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L416)

▸ **mul**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a `Unary<T, T>` function which once called multiplies `b` to `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const mul5 = BigInt.mul(5n) 

mul5(10n)                   // 50n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

the unary function

#### Defined in

[src/BigInt.ts:435](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L435)

___

### pow

▸ **pow**(`a`, `b`): [`T`](BigInt.md#t)

Elevates `a` by `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.pow(2n, 3n)             // 8n
BigInt.pow(3n, 2n)             // 9n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | the second bigint |

#### Returns

[`T`](BigInt.md#t)

the result

#### Defined in

[src/BigInt.ts:462](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L462)

▸ **pow**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a `Unary<T, T>` function which once called elevates `b` by `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const pow5 = BigInt.pow(5n) 

pow5(10n)                   // 100_000n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

#### Defined in

[src/BigInt.ts:479](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L479)

___

### root

▸ **root**(`a`, `b`): [`T`](BigInt.md#t)

Root of `a` under `b` if both specified, otherwise returns a `Unary<T, T>` 
function which once called returns the root of `b` under `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.root(4n, 2n)             // 2n
BigInt.root(9n, 2n)             // 3n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |
| `b` | `bigint` | the root |

#### Returns

[`T`](BigInt.md#t)

#### Defined in

[src/BigInt.ts:506](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L506)

▸ **root**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a `Unary<T, T>` function which once called returns the root of `b` under `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const root2 = BigInt.root(2n) 

root2(4n)                   // 2n
root2(9n)                   // 3n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the root |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

the unary function

#### Defined in

[src/BigInt.ts:526](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L526)

___

### sub

▸ **sub**(`a`, `b`): [`T`](BigInt.md#t)

Subtracts `b` to `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.sub(5n, -2n)             // 7n
BigInt.sub(5n, 12n)             // -7n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first bigint |
| `b` | `bigint` | the second bigint |

#### Returns

[`T`](BigInt.md#t)

a - b

#### Defined in

[src/BigInt.ts:564](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L564)

▸ **sub**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

Returns a `Unary<T, T>` function which once called subtracts `a` to `b`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const sub5 = BigInt.sub(5n) 

sub5(10n)                   // 5n
sub5(-2n)                   // -7n
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`T`](BigInt.md#t)\>

the unary function (b - a)

#### Defined in

[src/BigInt.ts:584](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L584)

## Sortables

### asc

▸ **asc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two bigints `a` and `b` if `b`

Great to sort a bigint array in ASC direction.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

collection.sort(BigInt.asc)     // [3n, 4n, 5n, 6n, 10n, 12n, 22n]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first comparison bigint |
| `b` | `bigint` | the second comparison bigint |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the result:
 - -1 if a is less than b
 - 0 if a is equal to b
 - 1 if a is greater than b

#### Defined in

[src/BigInt.ts:621](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L621)

▸ **asc**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a `Unary<T, T>` function which once called compares `b` and `a`

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.asc(1n)(2n) // 1
BigInt.asc(1n)(1n) // 0
BigInt.asc(1n)(0n) // -1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the comparator unary function

#### Defined in

[src/BigInt.ts:640](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L640)

___

### desc

▸ **desc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `b` and `a` if `b` is defined, otherwise returns a 
`Unary<number, number>` function which once called compares `a` and `b`

Great to sort a numeric array in DESC direction.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

collection.sort(BigInt.desc)     // [22n, 12n, 10n, 6n, 5n, 4n, 3n]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the first comparison bigint |
| `b` | `bigint` | the second comparison bigint |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the result:
 - -1 if a is more than b
 - 0 if a is equal to b
 - 1 if a is less than b

#### Defined in

[src/BigInt.ts:674](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L674)

▸ **desc**(`a`): [`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](BigInt.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/BigInt.ts:675](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/BigInt.ts#L675)

## Serializables

### toBin

▸ **toBin**(`a`): [`T`](Result.md#t)<`string`\>

Returns a bigint in binary notation.

If the passed argument at runtime is not a bigint, an Error will be returned.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.toBin(10n)        // "0b1010"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`T`](Result.md#t)<`string`\>

the binary bigint value

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Fn.ts#L22)

___

### toHex

▸ **toHex**(`a`): [`T`](Result.md#t)<`string`\>

Returns a bigint in hexadecimal notation

If the passed argument at runtime is not a bigint, an Error will be returned.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.toHex(10n)        // "0xa"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`T`](Result.md#t)<`string`\>

the hexadecimal bigint value

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Fn.ts#L22)

___

### toOct

▸ **toOct**(`a`): [`T`](Result.md#t)<`string`\>

Returns a bigint in octal notation

If the passed argument at runtime is not a bigint, an Error will be returned.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.toOct(10n)        // "0o12"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`T`](Result.md#t)<`string`\>

the octal bigint value

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Fn.ts#L22)

___

### toJSON

▸ **toJSON**(`a`): [`T`](Result.md#t)<`string`\>

Returns a bigint in json notation.

If the passed argument at runtime is not a bigint, an Error will be returned.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.toJSON(10n)       // "10"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`T`](Result.md#t)<`string`\>

the json bigint value

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Fn.ts#L22)

___

### toString

▸ **toString**(`a`): [`T`](Result.md#t)<`string`\>

Returns a stringified number.

If the passed argument at runtime is not a bigint, an Error will be returned.

**`Example`**

```ts
import { BigInt } from 'tiinvo';

BigInt.toString(10n)       // "10"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | the bigint |

#### Returns

[`T`](Result.md#t)<`string`\>

the string

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Fn.ts#L22)
