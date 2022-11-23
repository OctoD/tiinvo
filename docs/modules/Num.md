[tiinvo](../README.md) / [Exports](../modules.md) / Num

# Namespace: Num

## Table of contents

### Type Aliases

- [t](Num.md#t)

### Functions

- [guard](Num.md#guard)
- [cmp](Num.md#cmp)
- [gte](Num.md#gte)
- [lte](Num.md#lte)
- [ne](Num.md#ne)
- [map](Num.md#map)
- [mapOr](Num.md#mapor)
- [isEven](Num.md#iseven)
- [isOdd](Num.md#isodd)
- [isNegative](Num.md#isnegative)
- [isPositive](Num.md#ispositive)
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
- [toBin](Num.md#tobin)
- [toHex](Num.md#tohex)
- [toOct](Num.md#tooct)
- [toJSON](Num.md#tojson)
- [toString](Num.md#tostring)

### Comparables

- [eq](Num.md#eq)
- [gt](Num.md#gt)
- [lt](Num.md#lt)

## Type Aliases

### t

Ƭ **t**: `number`

#### Defined in

src/Num.ts:4

## Functions

### guard

▸ **guard**(`x`): x is number

Checks (at compile and runtime) if a given parameter `x` is a `number`

**`Example`**

```ts
import { Num } from 'tiinvo'

const or0 = (x: unknown): t => Num.guard(x) ? x : 0;

or0(10)                  // 10
or0(20)                  // 20
or0(-1)                  // -1
or0(4e12)                // 4e12
or0('hello world')       // 0          
or0(true)                // 0  
or0(false)               // 0  
or0({})                  // 0
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is number

#### Defined in

src/Functors.ts:338

___

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

src/Num.ts:60

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

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

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Num.ts:82

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

src/Num.ts:231

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

src/Num.ts:248

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

src/Num.ts:271

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

src/Num.ts:288

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

src/Num.ts:311

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

src/Num.ts:328

___

### map

▸ **map**<`b`\>(`m`): (`a`: `number`) => `Error` \| `b`

Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `Err`.

```ts
import { Num } from 'tiinvo';

const toHex = Num.map(x => '0x' + x.toString(16))

toHex(10)      // 0xa
toHex("a")     // Error("a is not a number")
```

#### Type parameters

| Name |
| :------ |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`number`, `b`\> |

#### Returns

`fn`

▸ (`a`): `Error` \| `b`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

##### Returns

`Error` \| `b`

#### Defined in

src/Num.ts:353

___

### mapOr

▸ **mapOr**<`b`\>(`m`, `b`): (`a`: `number`) => `b`

Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `b`.

```ts
import { Num } from 'tiinvo';

const toHex = Num.mapOr(x => '0x' + x.toString(16), "0x0")

toHex(10)      // 0xa
toHex("a")     // 0x0
```

#### Type parameters

| Name |
| :------ |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`number`, `b`\> |
| `b` | `b` |

#### Returns

`fn`

▸ (`a`): `b`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

##### Returns

`b`

#### Defined in

src/Num.ts:367

___

### isEven

▸ **isEven**(`a`): `boolean`

Returns true if a number `x` is even.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.isEven(10)   // true
Num.isEven(91)   // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

#### Defined in

src/Functors.ts:401

___

### isOdd

▸ **isOdd**(`a`): `boolean`

Returns true if a number `x` is odd.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.isOdd(10)   // false
Num.isOdd(91)   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

#### Defined in

src/Functors.ts:401

___

### isNegative

▸ **isNegative**(`a`): `boolean`

Returns true if a number `x` is positive.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.isNegative(-1)   // true
Num.isNegative(10)   // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

#### Defined in

src/Functors.ts:401

___

### isPositive

▸ **isPositive**(`a`): `boolean`

Returns true if a number `x` is positive.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.isPositive(-1)   // false
Num.isPositive(10)   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`boolean`

#### Defined in

src/Functors.ts:401

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

src/Num.ts:459

▸ **toExponential**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Defined in

src/Num.ts:460

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

src/Num.ts:487

▸ **toFixed**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Defined in

src/Num.ts:488

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

src/Num.ts:515

▸ **toPrecision**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), `string`\>

#### Defined in

src/Num.ts:516

___

### add

▸ **add**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:546

▸ **add**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:547

___

### div

▸ **div**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:573

▸ **div**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:574

___

### mod

▸ **mod**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:602

▸ **mod**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:603

___

### mul

▸ **mul**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:629

▸ **mul**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:630

___

### pow

▸ **pow**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:656

▸ **pow**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:657

___

### root

▸ **root**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:684

▸ **root**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:685

___

### sub

▸ **sub**(`a`, `b`): [`t`](Num.md#t)

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

[`t`](Num.md#t)

#### Defined in

src/Num.ts:712

▸ **sub**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`t`](Num.md#t)\>

#### Defined in

src/Num.ts:713

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

src/Num.ts:744

▸ **asc**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Num.ts:745

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

src/Num.ts:772

▸ **desc**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Num.ts:773

___

### toBin

▸ **toBin**(`a`): `string` \| `Error`

Returns a number in binary notation.

If the passed argument at runtime is not a number, an Error will be returned.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toBin(10)        // "0b1010"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

src/Num.ts:353

___

### toHex

▸ **toHex**(`a`): `string` \| `Error`

Returns a number in hexadecimal notation

If the passed argument at runtime is not a number, an Error will be returned.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toHex(10)        // "0xa"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

src/Num.ts:353

___

### toOct

▸ **toOct**(`a`): `string` \| `Error`

Returns a number in octal notation

If the passed argument at runtime is not a number, an Error will be returned.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toOct(10)        // "0o12"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

src/Num.ts:353

___

### toJSON

▸ **toJSON**(`a`): `string` \| `Error`

Returns a number in json notation.

If the passed argument at runtime is not a number, an Error will be returned.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toJSON(10)       // "10"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

src/Num.ts:353

___

### toString

▸ **toString**(`a`): `string` \| `Error`

Returns a stringified number.

If the passed argument at runtime is not a number, an Error will be returned.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toString(10)       // "10"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`string` \| `Error`

#### Defined in

src/Num.ts:353

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

src/Num.ts:108

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`t`](Num.md#t), `boolean`\>

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

[`Unary`](Fn.md#unary)<[`t`](Num.md#t), `boolean`\>

#### Defined in

src/Num.ts:124

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

src/Num.ts:145

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

src/Num.ts:164

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

src/Num.ts:189

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

src/Num.ts:208
