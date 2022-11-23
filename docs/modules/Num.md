[tiinvo](../README.md) / [Exports](../modules.md) / Num

# Namespace: Num

## Table of contents

### Type Aliases

- [T](Num.md#t)

### Functions

- [cmp](Num.md#cmp)
- [gte](Num.md#gte)
- [lte](Num.md#lte)
- [ne](Num.md#ne)
- [toExponential](Num.md#toexponential)
- [toFixed](Num.md#tofixed)
- [toPrecision](Num.md#toprecision)
- [add](Num.md#add)
- [div](Num.md#div)
- [mod](Num.md#mod)
- [mul](Num.md#mul)
- [pow](Num.md#pow)
- [root](Num.md#root)
- [sub](Num.md#sub)
- [asc](Num.md#asc)
- [desc](Num.md#desc)

### Comparables

- [eq](Num.md#eq)
- [gt](Num.md#gt)
- [lt](Num.md#lt)

## Type Aliases

### T

Ƭ **T**: `number`

A number type alias

**`Since`**

4.0.0

#### Defined in

src/Num.ts:9

## Functions

### cmp

▸ **cmp**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `a` and `b`.

Returns:

   - 1 if `a` is greater than `b`
   - 0 if `a` is same of `b`
   - -1 if `b` is greater than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.cmp(1, 1)  // 0
Num.cmp(1, 0)  // 1
Num.cmp(0, 1)  // -1
Num.cmp(1)(1)  // 0
Num.cmp(1)(0)  // -1
Num.cmp(0)(1)  // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Num.ts:65

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Compares two numbers `a` and `b`.

Returns:

   - 1 if `a` is greater than `b`
   - 0 if `a` is same of `b`
   - -1 if `b` is greater than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.cmp(1)(1)  // 0
Num.cmp(1)(0)  // -1
Num.cmp(0)(1)  // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Num.ts:87

___

### gte

▸ **gte**(`a`, `b`): `boolean`

Returns true if `a` is great or equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is great or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.gte(5, -2)             // true
Num.gte(5, 12)             // false
Num.gte(10, 10)            // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:236

▸ **gte**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns true if `a` is great or equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is great or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const gte5 = Num.gte(5) 

gte5(10)                   // false
gte5(5)                    // false
gte5(-2)                   // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

#### Defined in

src/Num.ts:253

___

### lte

▸ **lte**(`a`, `b`): `boolean`

Returns true if `a` is less or equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is less or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.lte(5, -2)             // false
Num.lte(5, 12)             // true
Num.lte(5, 5)              // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:276

▸ **lte**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns true if `a` is less or equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is less or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const lte5 = Num.lte(5) 

lte5(5)                    // true
lte5(10)                   // false
lte5(-2)                   // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

#### Defined in

src/Num.ts:293

___

### ne

▸ **ne**(`a`, `b`): `boolean`

Returns true if `a` not equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` not equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.ne(5, -2)             // true
Num.ne(5, 12)             // true
Num.ne(5, 5)              // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:316

▸ **ne**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns true if `a` not equal to `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` not equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const ne5 = Num.ne(5) 

ne5(5)                    // false
ne5(10)                   // true
ne5(-2)                   // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

#### Defined in

src/Num.ts:333

___

### toExponential

▸ **toExponential**(`a`, `b`): `string`

Returns a string containing a number represented in exponential notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toExponential(10, 2)        // "1.00e+1"
Num.toExponential(10)(2)        // "2.0000000000e+0" 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`string`

#### Defined in

src/Num.ts:464

___

### toFixed

▸ **toFixed**(`a`, `b`): `string`

Returns a string representing a number in fixed-point notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toFixed(10.505, 2)        // "10.51"
Num.toFixed(10.505)(2)        // "2.0000000000"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`string`

#### Defined in

src/Num.ts:492

___

### toPrecision

▸ **toPrecision**(`a`, `b`): `string`

Returns a string representing a number in fixed-point notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toPrecision(10, 2)        // "10"
Num.toPrecision(10)(2)        // "2.000000000"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`string`

#### Defined in

src/Num.ts:520

___

### add

▸ **add**(`a`, `b`): [`T`](Num.md#t)

Adds `a` to `b` if both specified, otherwise returns a `Unary<number, number>` 
function which once called adds `b` to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.add(5, -2)             // 3
Num.add(5, 12)             // 17

const add5 = Num.add(5) 

add5(10)                   // 15
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:551

___

### div

▸ **div**(`a`, `b`): [`T`](Num.md#t)

Divides `a` by `b` if both specified, otherwise returns a `Unary<number, number>` 
function which once called divides `b` by `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.div(4, 2)              // 2
Num.div(12, 3)             // 4

const div2 = Num.div(2) 

div2(4)                    // 2
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:578

___

### mod

▸ **mod**(`a`, `b`): [`T`](Num.md#t)

Returns the modulus of `a % b` if `b` parameter is passed, 
otherwise returns a `Unary<number, number>` 
function which once called returns the modulus of `b % a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.mod(2, 2)             // 0
Num.mod(3, 2)             // 1

const mod2 = Num.mod(2) 

mod2(10)                   // 0
mod2(15)                   // 1
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:607

___

### mul

▸ **mul**(`a`, `b`): [`T`](Num.md#t)

Multiplies `a` to `b` if both specified, otherwise returns a `Unary<number, number>` 
function which once called multiplies `b` to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.mul(5, -2)             // -10
Num.mul(5, 12)             // 60

const mul5 = Num.mul(5) 

mul5(10)                   // 50
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:634

___

### pow

▸ **pow**(`a`, `b`): [`T`](Num.md#t)

Elevates `a` by `b` if both specified, otherwise returns a `Unary<number, number>` 
function which once called elevates `b` by `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.pow(2, 3)             // 8
Num.pow(3, 2)             // 9

const pow5 = Num.pow(5) 

pow5(10)                   // 100_000
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:661

___

### root

▸ **root**(`a`, `b`): [`T`](Num.md#t)

Square root of `a` under `b` if both specified, otherwise returns a `Unary<number, number>` 
function which once called returns the root of `b` under `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.root(4, 2)             // 2
Num.root(9, 2)             // 3

const root2 = Num.root(2) 

root2(4)                   // 2
root2(9)                   // 3
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:689

___

### sub

▸ **sub**(`a`, `b`): [`T`](Num.md#t)

Subtracts `b` to `a` if both specified, otherwise returns a `Unary<number, number>` 
function which once called subtracts `a` to `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.sub(5, -2)             // 7
Num.sub(5, 12)             // -7

const sub5 = Num.sub(5) 

sub5(10)                   // 5
sub5(-2)                   // -7
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`T`](Num.md#t)

#### Defined in

src/Num.ts:717

___

### asc

▸ **asc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `a` and `b` if `b` is defined, otherwise returns a 
`Unary<number, number>` function which once called compares `b` and `a`

Great to sort a numeric array in ASC direction.

**`Example`**

```ts
import { Num } from 'tiinvo';

const collection = [10, 5, 6, 4, 12, 22, 3];

collection.sort(Num.asc)     // [3, 4, 5, 6, 10, 12, 22]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Num.ts:749

___

### desc

▸ **desc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `b` and `a` if `b` is defined, otherwise returns a 
`Unary<number, number>` function which once called compares `a` and `b`

Great to sort a numeric array in DESC direction.

**`Example`**

```ts
import { Num } from 'tiinvo';

const collection = [10, 5, 6, 4, 12, 22, 3];

collection.sort(Num.desc)     // [22, 12, 10, 6, 5, 4, 3]
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

src/Num.ts:777

## Comparables

### eq

▸ **eq**(`a`, `b`): `boolean`

Returns `true` if two numbers are the same

```ts
import { Num } from 'tiinvo';

Num.eq(1, 1)  // true
Num.eq(1, 0)  // false
Num.eq(0, 1)  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:113

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), `boolean`\>

Returns `true` if two numbers are the same

```ts
import { Num } from 'tiinvo';

const eq1 = Num.eq(1);

eq1(1)  // true
eq1(0)  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), `boolean`\>

#### Defined in

src/Num.ts:129

___

### gt

▸ **gt**(`a`, `b`): `boolean`

Returns true if `a` is greater than `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is greater than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.gt(5, -2)             // true
Num.gt(5, 12)             // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:150

▸ **gt**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns true if `a` is greater than `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is greater than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const gt5 = Num.gt(5) 

gt5(10)                   // true
gt5(-2)                   // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

#### Defined in

src/Num.ts:169

___

### lt

▸ **lt**(`a`, `b`): `boolean`

Returns true if `a` is lesser than `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is lesser than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.lt(5, -2)             // false
Num.lt(5, 12)             // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

src/Num.ts:194

▸ **lt**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns true if `a` is lesser than `b` if `b` is specified, otherwise returns a
function which once called returns true if `b` is lesser than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const lt5 = Num.lt(5) 

lt5(10)                   // true
lt5(-2)                   // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

#### Defined in

src/Num.ts:213
