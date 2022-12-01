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

[src/Fn.ts:8](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L8)

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

[src/Fn.ts:13](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L13)

___

### Unary

Ƭ **Unary**<`a`, `r`\>: (`a`: `a`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `r` |

#### Type declaration

▸ (`a`): `r`

Represents any unary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:18](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L18)

___

### Binary

Ƭ **Binary**<`a`, `b`, `r`\>: (`a`: `a`, `b`: `b`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `r` |

#### Type declaration

▸ (`a`, `b`): `r`

Represents any binary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:23](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L23)

___

### Ternary

Ƭ **Ternary**<`a`, `b`, `c`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`): `r`

Represents any ternary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:28](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L28)

___

### Quaternary

Ƭ **Quaternary**<`a`, `b`, `c`, `d`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`): `r`

Represents any quaternary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:33](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L33)

___

### Quinary

Ƭ **Quinary**<`a`, `b`, `c`, `d`, `e`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`): `r`

Represents any quinary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:38](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L38)

___

### Senary

Ƭ **Senary**<`a`, `b`, `c`, `d`, `e`, `f`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`, `f`: `f`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `f` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`): `r`

Represents any senary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |
| `f` | `f` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:43](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L43)

___

### Septenary

Ƭ **Septenary**<`a`, `b`, `c`, `d`, `e`, `f`, `g`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`, `f`: `f`, `g`: `g`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `f` |
| `g` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`): `r`

Represents any septenary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |
| `f` | `f` |
| `g` | `g` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:48](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L48)

___

### Octonary

Ƭ **Octonary**<`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`, `f`: `f`, `g`: `g`, `h`: `h`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `f` |
| `g` |
| `h` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `r`

Represents any octonary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |
| `f` | `f` |
| `g` | `g` |
| `h` | `h` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:53](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L53)

___

### Nonary

Ƭ **Nonary**<`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`, `f`: `f`, `g`: `g`, `h`: `h`, `i`: `i`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `f` |
| `g` |
| `h` |
| `i` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `r`

Represents any nonary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |
| `f` | `f` |
| `g` | `g` |
| `h` | `h` |
| `i` | `i` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:58](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L58)

___

### Decenary

Ƭ **Decenary**<`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `l`, `r`\>: (`a`: `a`, `b`: `b`, `c`: `c`, `d`: `d`, `e`: `e`, `f`: `f`, `g`: `g`, `h`: `h`, `i`: `i`, `l`: `l`) => `r`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |
| `c` |
| `d` |
| `e` |
| `f` |
| `g` |
| `h` |
| `i` |
| `l` |
| `r` |

#### Type declaration

▸ (`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `l`): `r`

Represents any decenary function

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `b` |
| `c` | `c` |
| `d` | `d` |
| `e` | `e` |
| `f` | `f` |
| `g` | `g` |
| `h` | `h` |
| `i` | `i` |
| `l` | `l` |

##### Returns

`r`

#### Defined in

[src/Fn.ts:63](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L63)

___

### T

Ƭ **T**: [`AnyFn`](Fn.md#anyfn)

Represents a generic function T with any arguments and any return value type.

#### Defined in

[src/Fn.ts:68](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L68)

## Functions

### pass

▸ **pass**<`a`\>(`a`): `a`

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
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

`a`

#### Defined in

[src/Fn.ts:88](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L88)

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

| Name | Type |
| :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) |
| `b` | [`AnyFn`](Fn.md#anyfn) |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Fn.ts:107](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L107)

▸ **cmp**(`a`): [`Unary`](Fn.md#unary)<[`T`](Fn.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AnyFn`](Fn.md#anyfn) |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Fn.md#t), [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

[src/Fn.ts:108](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L108)

___

### eq

▸ **eq**(`a`, `b`): `boolean`

Checks if two functions are the same.

It will check that both function have:

   - the same list of arguments
   - the same name
   - the address in memory

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

[src/Fn.ts:156](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L156)

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

[src/Fn.ts:184](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L184)

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

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Functors.ts#L424)

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

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Functors.ts#L424)

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

[src/Fn.ts:253](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L253)

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

[src/Fn.ts:281](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Fn.ts#L281)
