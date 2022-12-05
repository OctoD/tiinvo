[tiinvo](../README.md) / [Exports](../modules.md) / Fn

# Namespace: Fn

## Table of contents

### Type Aliases

- [AnyAsyncFn](Fn.md#anyasyncfn)
- [AnyFn](Fn.md#anyfn)
- [Unary](Fn.md#unary)
- [Binary](Fn.md#binary)
- [Ternary](Fn.md#ternary)
- [Quaternary](Fn.md#quaternary)
- [Quinary](Fn.md#quinary)
- [Senary](Fn.md#senary)
- [Septenary](Fn.md#septenary)
- [Octonary](Fn.md#octonary)
- [Nonary](Fn.md#nonary)
- [Decenary](Fn.md#decenary)
- [T](Fn.md#t)

### Functions

- [pass](Fn.md#pass)
- [cmp](Fn.md#cmp)
- [eq](Fn.md#eq)
- [length](Fn.md#length)
- [name](Fn.md#name)
- [guard](Fn.md#guard)
- [map](Fn.md#map)

## Type Aliases

### AnyAsyncFn

Ƭ **AnyAsyncFn**: (...`args`: `any`[]) => `Promise`<`any`\>

#### Type declaration

▸ (...`args`): `Promise`<`any`\>

Represents any async function

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`any`\>

#### Defined in

[src/Fn.ts:8](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L8)

___

### AnyFn

Ƭ **AnyFn**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

Represents any function

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[src/Fn.ts:13](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L13)

___

### Unary

Ƭ **Unary**<`A`, `R`\>: (`a`: `A`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the first value type |
| `R` | the return type |

#### Type declaration

▸ (`a`): `R`

Represents any unary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:22](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L22)

___

### Binary

Ƭ **Binary**<`A`, `B`, `R`\>: (`a`: `A`, `b`: `B`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the first value type |
| `B` | the second value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`): `R`

Represents any binary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:32](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L32)

___

### Ternary

Ƭ **Ternary**<`A`, `B`, `C`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the first value type |
| `B` | the second value type |
| `C` | the third value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`): `R`

Represents any ternary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:43](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L43)

___

### Quaternary

Ƭ **Quaternary**<`A`, `B`, `C`, `D`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`): `R`

Represents any quaternary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:55](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L55)

___

### Quinary

Ƭ **Quinary**<`A`, `B`, `C`, `D`, `E`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`): `R`

Represents any quinary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:68](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L68)

___

### Senary

Ƭ **Senary**<`A`, `B`, `C`, `D`, `E`, `F`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`, `f`: `F`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `F` | the 6th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`): `R`

Represents any senary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |
| `f` | `F` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:82](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L82)

___

### Septenary

Ƭ **Septenary**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`, `f`: `F`, `g`: `G`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `F` | the 6th value type |
| `G` | the 7th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`): `R`

Represents any septenary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |
| `f` | `F` |
| `g` | `G` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:97](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L97)

___

### Octonary

Ƭ **Octonary**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`, `f`: `F`, `g`: `G`, `h`: `H`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `F` | the 6th value type |
| `G` | the 7th value type |
| `H` | the 8th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `R`

Represents any octonary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |
| `f` | `F` |
| `g` | `G` |
| `h` | `H` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:113](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L113)

___

### Nonary

Ƭ **Nonary**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`, `f`: `F`, `g`: `G`, `h`: `H`, `i`: `I`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `F` | the 6th value type |
| `G` | the 7th value type |
| `H` | the 8th value type |
| `I` | the 9th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `R`

Represents any nonary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |
| `f` | `F` |
| `g` | `G` |
| `h` | `H` |
| `i` | `I` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:130](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L130)

___

### Decenary

Ƭ **Decenary**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `L`, `R`\>: (`a`: `A`, `b`: `B`, `c`: `C`, `d`: `D`, `e`: `E`, `f`: `F`, `g`: `G`, `h`: `H`, `i`: `I`, `l`: `L`) => `R`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the 1th value type |
| `B` | the 2th value type |
| `C` | the 3th value type |
| `D` | the 4th value type |
| `E` | the 5th value type |
| `F` | the 6th value type |
| `G` | the 7th value type |
| `H` | the 8th value type |
| `I` | the 9th value type |
| `L` | the 10th value type |
| `R` | the return type |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `l`): `R`

Represents any decenary function

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |
| `c` | `C` |
| `d` | `D` |
| `e` | `E` |
| `f` | `F` |
| `g` | `G` |
| `h` | `H` |
| `i` | `I` |
| `l` | `L` |

##### Returns

`R`

#### Defined in

[src/Fn.ts:148](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L148)

___

### T

Ƭ **T**: [`AnyFn`](Fn.md#anyfn)

Represents a generic function T with any arguments and any return value type.

#### Defined in

[src/Fn.ts:153](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L153)

## Functions

### pass

▸ **pass**<`A`\>(`a`): `A`

A function which returns it's first argument.

Use it only as a placeholder

**`Example`**

```ts
import { Fn } from 'tiinvo'

Fn.pass(10)      // 10
Fn.pass(20)      // 20
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
| `a` | `A` |

#### Returns

`A`

#### Defined in

[src/Fn.ts:173](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L173)

___

### cmp

▸ **cmp**(`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two function signatures and names.

**`Example`**

```ts
import { Fn, Num } from 'tiinvo'

Fn.cmp(Num.add, Num.add) // 0
Fn.cmp(Num.add, Num.sub) // -1
Fn.cmp(Num.sub, Num.add) // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) | the first function |
| `b` | [`AnyFn`](Fn.md#anyfn) | the second function |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
 - 0 if `a` equals to `b`
 - 1 if `a` is more than `b`

#### Defined in

[src/Fn.ts:198](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L198)

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Fn.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two function signatures and names.

**`Example`**

```ts
import { Fn, Num } from 'tiinvo'

const cmpMul = Fn.cmp(Num.mul);

cmpMul(Num.mul) // 0
cmpMul(Num.sub) // 1
cmpMul(Num.add) // -1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) | the second function |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Fn.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

the unary function which checks
 - -1 if `b` is less than `a`
 - 0 if `b` equals to `a`
 - 1 if `b` is more than `a`

#### Defined in

[src/Fn.ts:221](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L221)

___

### eq

▸ **eq**(`a`, `b`): `boolean`

Checks if two functions are the same.

It will check that both function have:

   - the same list of arguments
   - the same name

**`Example`**

```ts
import { Fn, Num } from 'tiinvo'

Fn.eq(Num.add, Num.add) // true
Fn.eq(Num.add, Num.sub) // false
Fn.eq(Num.sub, Num.add) // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) | the first function |
| `b` | [`AnyFn`](Fn.md#anyfn) | the second function |

#### Returns

`boolean`

- `true` if a equals to `b`
 - `false` otherwise

#### Defined in

[src/Fn.ts:268](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L268)

▸ **eq**(`a`): [`Unary`](Fn.md#unary)<[`T`](Fn.md#t), `boolean`\>

Returns a unary function which checks if two functions are the same.

It will check that both function have:

   - the same list of arguments
   - the same name
   - the address in memory

**`Example`**

```ts
import { Fn, Num } from 'tiinvo'

const isadd = Fn.eq(Num.add)

isadd(Num.add) // true
isadd(Num.sub) // false
isadd(Num.add) // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) | the first function |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Fn.md#t), `boolean`\>

the unary function which accepts a second function and returns
 - `true` if `a` equals to `b`
 - `false` otherwise

#### Defined in

[src/Fn.ts:296](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L296)

___

### length

▸ **length**(`a`): `number`

Returns a function arguments length

**`Example`**

```ts
import { Fn } from 'tiinvo'

Fn.length(Fn.cmp)        // 2
Fn.length(Fn.length)     // 1
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) |

#### Returns

`number`

arguments count

#### Defined in

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Functors.ts#L424)

___

### name

▸ **name**(`a`): `string`

Returns a function's name

**`Example`**

```ts
import { Fn } from 'tiinvo'

Fn.name(Fn.cmp)        // 'cmp'
Fn.name(Fn.name)       // 'name'
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) |

#### Returns

`string`

the name

#### Defined in

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Functors.ts#L424)

___

### guard

▸ **guard**(`x`): x is AnyFn

Checks if an argument `x` is `AnyFn`

**`Example`**

```ts
import { Fn } from 'tiinvo'

Fn.guard(10)         // false
Fn.guard(() => {})   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to guard |

#### Returns

x is AnyFn

- `true` if `x` is a function
 - `false` otherwise

#### Defined in

[src/Fn.ts:365](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L365)

___

### map

▸ **map**<`a`, `b`\>(...`ml`): (`a`: `a`) => `b`[]

Maps a value `a` over a list of `Functors.Mappable<a, b>` and returns an array of the returning values

**`Example`**

```ts
import { Fn, Num } from 'tiinvo'

const m = Fn.map(
   Num.add(1), 
   Num.mul(2), 
   Num.sub(3), 
   Num.pow(4),
)

m(2)   // [3, 4, -1, 16]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...ml` | [`Mappable`](Functors.md#mappable)<`a`, `b`\>[] | a list of unary functions which accept the same argument |

#### Returns

`fn`

an array of the returning values of `ml`

▸ (`a`): `b`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

##### Returns

`b`[]

#### Defined in

[src/Fn.ts:393](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Fn.ts#L393)
