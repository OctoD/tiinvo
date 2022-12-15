[tiinvo](../README.md) / [Exports](../modules.md) / Num

# Namespace: Num

## Table of contents

### Type Aliases

- [T](Num.md#t)

### Guardables

- [guard](Num.md#guard)

### Comparables

- [cmp](Num.md#cmp)
- [eq](Num.md#eq)
- [gt](Num.md#gt)
- [lt](Num.md#lt)
- [gte](Num.md#gte)
- [lte](Num.md#lte)
- [ne](Num.md#ne)

### Mappables

- [map](Num.md#map)
- [mapOr](Num.md#mapor)

### Predicates

- [isEven](Num.md#iseven)
- [isOdd](Num.md#isodd)
- [isNegative](Num.md#isnegative)
- [isPositive](Num.md#ispositive)

### Natives

- [toExponential](Num.md#toexponential)
- [toFixed](Num.md#tofixed)
- [toPrecision](Num.md#toprecision)

### Operables

- [add](Num.md#add)
- [div](Num.md#div)
- [mod](Num.md#mod)
- [mul](Num.md#mul)
- [pow](Num.md#pow)
- [root](Num.md#root)
- [sub](Num.md#sub)

### Sortables

- [asc](Num.md#asc)
- [desc](Num.md#desc)

### Serializables

- [toBin](Num.md#tobin)
- [toHex](Num.md#tohex)
- [toOct](Num.md#tooct)
- [toJSON](Num.md#tojson)
- [toString](Num.md#tostring)

## Type Aliases

### T

Ƭ **T**: `number`

A number type alias

**`Since`**

4.0.0

#### Defined in

[src/Num.ts:9](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L9)

## Guardables

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is number

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Functors.ts#L338)

## Comparables

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
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left compared number |
| `b` | `number` | the right compared number |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result
 - 0 if a equals to b
 - 1 if a is greater than b
 - -1 if a is lesser than b

#### Defined in

[src/Num.ts:71](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L71)

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Compares two numbers `a` and `b`.

Returns:

   - 1 if `a` is greater than `b`
   - 0 if `a` is same of `b`
   - -1 if `b` is greater than `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const cmp0 = Num.cmp(0)

cmp0(2)   // 1
cmp0(0)   // 0
cmp0(-2)  // -1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number to compare |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Num.ts:97](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L97)

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the first number |
| `b` | `number` | the last number |

#### Returns

`boolean`

true if a equals to b

#### Defined in

[src/Num.ts:126](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L126)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the first number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), `boolean`\>

the unary function

#### Defined in

[src/Num.ts:144](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L144)

___

### gt

▸ **gt**(`a`, `b`): `boolean`

Returns true if `a` is greater than `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.gt(5, -2)             // true
Num.gt(5, 12)             // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

`boolean`

true if `a` is greater than `b`

#### Defined in

[src/Num.ts:167](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L167)

▸ **gt**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns a unarty function which once called returns true if `b` is greater than `a`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

the unary function

#### Defined in

[src/Num.ts:187](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L187)

___

### lt

▸ **lt**(`a`, `b`): `boolean`

Returns true if `a` is lesser than `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.lt(5, -2)             // false
Num.lt(5, 12)             // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | left number |
| `b` | `number` | right number |

#### Returns

`boolean`

true if a is less than b

#### Defined in

[src/Num.ts:214](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L214)

▸ **lt**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns a function which once called returns true if `b` is less than `a`

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

[src/Num.ts:232](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L232)

___

### gte

▸ **gte**(`a`, `b`): `boolean`

Returns true if `a` is great or equal to `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.gte(5, -2)             // true
Num.gte(5, 12)             // false
Num.gte(10, 10)            // true
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

true if a is greater or equal to b

#### Defined in

[src/Num.ts:258](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L258)

▸ **gte**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns a function which once called returns true if `b` is great or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const gte5 = Num.gte(5) 

gte5(10)                   // false
gte5(5)                    // false
gte5(-2)                   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

the unary function

#### Defined in

[src/Num.ts:279](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L279)

___

### lte

▸ **lte**(`a`, `b`): `boolean`

Returns true if `a` is less or equal to `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.lte(5, -2)             // false
Num.lte(5, 12)             // true
Num.lte(5, 5)              // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

`boolean`

true if a is less or equal than b

#### Defined in

[src/Num.ts:307](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L307)

▸ **lte**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns a function which once called returns true if `b` is less or equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const lte5 = Num.lte(5) 

lte5(5)                    // true
lte5(10)                   // false
lte5(-2)                   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

the unary function

#### Defined in

[src/Num.ts:328](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L328)

___

### ne

▸ **ne**(`a`, `b`): `boolean`

Returns true if `a` not equal to `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.ne(5, -2)             // true
Num.ne(5, 12)             // true
Num.ne(5, 5)              // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

`boolean`

true if a is not equal to b

#### Defined in

[src/Num.ts:356](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L356)

▸ **ne**(`a`): [`Unary`](Fn.md#unary)<`number`, `boolean`\>

Returns a unary function which once called returns true if `b` not equal to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const ne5 = Num.ne(5) 

ne5(5)                    // false
ne5(10)                   // true
ne5(-2)                   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<`number`, `boolean`\>

the unary function

#### Defined in

[src/Num.ts:377](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L377)

## Mappables

### map

▸ **map**<`b`\>(`m`): (`a`: `number`) => `Error` \| `b`

Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `Err`.

**`Example`**

```ts
import { Num } from 'tiinvo';

const toHex = Num.map(x => '0x' + x.toString(16))

toHex(10)      // 0xa
toHex("a")     // Error("a is not a number")
```

**`Since`**

4.0.0

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

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)

___

### mapOr

▸ **mapOr**<`b`\>(`m`, `b`): (`a`: `number`) => `b`

Maps a number `a` to a value `Result.t<b>` if a is `number`, otherwise returns `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

const toHex = Num.mapOr(x => '0x' + x.toString(16), "0x0")

toHex(10)      // 0xa
toHex("a")     // 0x0
```

**`Since`**

4.0.0

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

[src/Num.ts:426](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L426)

## Predicates

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

[src/Functors.ts:401](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Functors.ts#L401)

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

[src/Functors.ts:401](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Functors.ts#L401)

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

[src/Functors.ts:401](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Functors.ts#L401)

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

[src/Functors.ts:401](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Functors.ts#L401)

## Natives

### toExponential

▸ **toExponential**(`a`, `b`): `string`

Returns a string containing a number represented in exponential notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toExponential(10, 2)        // "1.00e+1"
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

[src/Num.ts:522](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L522)

▸ **toExponential**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

Returns a unary function which returns a string containing a number represented in exponential notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toExponential(10)(2)        // "2.0000000000e+0" 
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

#### Defined in

[src/Num.ts:541](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L541)

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

[src/Num.ts:568](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L568)

▸ **toFixed**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

Returns a unary function which returns string representing a number in fixed-point notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toFixed(10.505)(2)        // "2.0000000000"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

#### Defined in

[src/Num.ts:587](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L587)

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

[src/Num.ts:614](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L614)

▸ **toPrecision**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

Returns a unary function which returns a string representing a number in fixed-point notation.

If `a` and `b` parameters are passed, `b` counts as the fraction digits for `a`.

If `b` parameter is not passed, returns a `Unary<number, string>` function and `a` counts as the fraction digits for `b`.

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.toPrecision(10)(2)        // "2.000000000"
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), `string`\>

#### Defined in

[src/Num.ts:633](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L633)

## Operables

### add

▸ **add**(`a`, `b`): [`T`](Num.md#t)

Adds `a` to `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.add(5, -2)             // 3
Num.add(5, 12)             // 17
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the sum

#### Defined in

[src/Num.ts:664](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L664)

▸ **add**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a unary function which adds `b` to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const add5 = Num.add(5) 

add5(5)                    // 10
add5(10)                   // 15
```

**`Retuns`**

the unary function

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

#### Defined in

[src/Num.ts:684](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L684)

___

### div

▸ **div**(`a`, `b`): [`T`](Num.md#t)

Divides `a` by `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.div(4, 2)              // 2
Num.div(12, 3)             // 4
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the division

#### Defined in

[src/Num.ts:711](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L711)

▸ **div**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once called divides `b` by `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const div2 = Num.div(2) 

div2(4)                    // 2
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

the unary function

#### Defined in

[src/Num.ts:730](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L730)

___

### mod

▸ **mod**(`a`, `b`): [`T`](Num.md#t)

Returns the modulus of `a % b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.mod(2, 2)             // 0
Num.mod(3, 2)             // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the modulus

#### Defined in

[src/Num.ts:757](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L757)

▸ **mod**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once 
called returns the modulus of `b % a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const mod2 = Num.mod(2) 

mod2(10)                   // 0
mod2(15)                   // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

the unary function

#### Defined in

[src/Num.ts:778](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L778)

___

### mul

▸ **mul**(`a`, `b`): [`T`](Num.md#t)

Multiplies `a` to `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.mul(5, -2)             // -10
Num.mul(5, 12)             // 60
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the multiplication

#### Defined in

[src/Num.ts:805](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L805)

▸ **mul**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once called multiplies `b` to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const mul5 = Num.mul(5) 

mul5(10)                   // 50
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

#### Defined in

[src/Num.ts:823](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L823)

___

### pow

▸ **pow**(`a`, `b`): [`T`](Num.md#t)

Elevates `a` by `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.pow(2, 3)             // 8
Num.pow(3, 2)             // 9
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the result

#### Defined in

[src/Num.ts:850](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L850)

▸ **pow**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once called elevates `b` by `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

const pow5 = Num.pow(5) 

pow5(10)                   // 100_000
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the exponent |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

#### Defined in

[src/Num.ts:868](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L868)

___

### root

▸ **root**(`a`, `b`): [`T`](Num.md#t)

Root of `a` under `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.root(4, 2)             // 2
Num.root(9, 2)             // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the result

#### Defined in

[src/Num.ts:895](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L895)

▸ **root**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once called returns the root of `b` under `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.root(4, 2)             // 2
Num.root(9, 2)             // 3

const root2 = Num.root(2) 

root2(4)                   // 2
root2(9)                   // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the root |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

#### Defined in

[src/Num.ts:917](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L917)

___

### sub

▸ **sub**(`a`, `b`): [`T`](Num.md#t)

Subtracts `b` to `a`

**`Example`**

```ts
import { Num } from 'tiinvo';

Num.sub(5, -2)             // 7
Num.sub(5, 12)             // -7
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`T`](Num.md#t)

the result

#### Defined in

[src/Num.ts:944](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L944)

▸ **sub**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

Returns a `Unary<number, number>` function which once called subtracts `a` to `b`

**`Example`**

```ts
import { Num } from 'tiinvo';

const sub5 = Num.sub(5) 

sub5(10)                   // 5
sub5(-2)                   // -7
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`T`](Num.md#t)\>

the unary function

#### Defined in

[src/Num.ts:964](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L964)

## Sortables

### asc

▸ **asc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `a` and `b`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result

#### Defined in

[src/Num.ts:998](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L998)

▸ **asc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a `Unary<number, number>` function which once called compares `b` and `a`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/Num.ts:1019](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L1019)

___

### desc

▸ **desc**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two numbers `b` and `a`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the left number |
| `b` | `number` | the right number |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

the comparison result

#### Defined in

[src/Num.ts:1049](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L1049)

▸ **desc**(`a`): [`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a `Unary<number, number>` function which once called compares `a` and `b`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the right number |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Num.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the unary function

#### Defined in

[src/Num.ts:1070](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L1070)

## Serializables

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the number to convert to binary |

#### Returns

`string` \| `Error`

the binary string

#### Defined in

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the number to convert to hexadecimal |

#### Returns

`string` \| `Error`

the hexadecimal string

#### Defined in

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the number to convert to octal |

#### Returns

`string` \| `Error`

the octal string

#### Defined in

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the number to convert to json value |

#### Returns

`string` \| `Error`

the string

#### Defined in

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | the number to convert to string |

#### Returns

`string` \| `Error`

the string

#### Defined in

[src/Num.ts:407](https://github.com/OctoD/tiinvo/blob/9df1aa9/src/Num.ts#L407)
