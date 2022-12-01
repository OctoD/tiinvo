[tiinvo](../README.md) / [Exports](../modules.md) / Option

# Namespace: Option

## Table of contents

### Type Aliases

- [None](Option.md#none)
- [Some](Option.md#some)
- [T](Option.md#t)

### Functions

- [isNone](Option.md#isnone)
- [isSome](Option.md#issome)
- [guardOf](Option.md#guardof)
- [tryAsync](Option.md#tryasync)
- [trySync](Option.md#trysync)

### Comparables

- [cmp](Option.md#cmp)
- [eq](Option.md#eq)

### Filterables

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

[src/Option.ts:12](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L12)

___

### Some

Ƭ **Some**<`A`\>: `A` extends [`None`](Option.md#none) ? `never` : `A`

`Some<A>` represents a value which cannot be `null` or `undefined`

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the some type |

#### Defined in

[src/Option.ts:19](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L19)

___

### T

Ƭ **T**<`A`\>: [`Some`](Option.md#some)<`A`\> \| [`None`](Option.md#none)

The type `Option.T<A>` represents a value that could be both `A` or `null` or `undefined`.

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the option type |

#### Defined in

[src/Option.ts:25](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L25)

## Functions

### isNone

▸ **isNone**(`x`): x is None

Returns `true` if the option is `None`, `false` otherwise.

```typescript
import { Option } from 'tiinvo';

Option.isNone(1);          // false
Option.isNone(null);       // true
Option.isNone(undefined);  // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the argument to check if none |

#### Returns

x is None

- `true` if `x` is `None`
 - `false` otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Functors.ts#L338)

___

### isSome

▸ **isSome**(`x`): x is unknown

Returns `true` if the option is `Some<unknown>`, `false` otherwise.

```typescript
import { Option } from 'tiinvo';

Option.isSome(1)         // true
Option.isSome(null)      // false
Option.isSome(undefined) // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is unknown

- `true` if `x` is `Some<unknown>`
 - `false` otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Functors.ts#L338)

___

### guardOf

▸ **guardOf**<`A`\>(`f`): [`Guardable`](Functors.md#guardable)<[`T`](Option.md#t)<`A`\>\>

Returns `true` if the option is `Some<A>` and the value type is satisfied by the guard, otherwise `false`.

If the option is `None`, it will always return `true`.

```typescript
import { Num, Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined
const w = `a`

const isnumsome = Option.guardOf(Num.guard);

isnumsome(x) // true
isnumsome(y) // true
isnumsome(z) // true
isnumsome(w) // false

```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Guardable`](Functors.md#guardable)<`A`\> | the guard |

#### Returns

[`Guardable`](Functors.md#guardable)<[`T`](Option.md#t)<`A`\>\>

the new `Guardable<T<A>>` which returns
 - `true` if `x` is `None` or is `Some<A>`
 - `false` otherwise

#### Defined in

[src/Option.ts:92](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L92)

___

### tryAsync

▸ **tryAsync**<`F`\>(`f`): (...`args`: `Parameters`<`F`\>) => `Promise`<[`T`](Option.md#t)<`ReturnType`<`F`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<[`None`](Option.md#none) \| `Awaited`<[`Some`](Option.md#some)<`ReturnType`<`F`\>\>\>\> : (...`args`: `Parameters`<`F`\>) => `Promise`<[`T`](Option.md#t)<`ReturnType`<`F`\>\>\>

Calls a function `F` with it's arguments and returns a `Promise<Option.T<ReturnType<f>>>`

```typescript
import { Option, Num } from 'tiinvo';

const fn = async (arg: number) => {
  if (Num.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(`${arg} is not even`);
}

const safe = Option.tryAsync(fn);

await safe(2) // 4
await safe(3) // null

Option.isSome(await safe(2)) // true
Option.isNone(await safe(3)) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends [`AnyAsyncFn`](Fn.md#anyasyncfn) | the function type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the function to wrap |

#### Returns

(...`args`: `Parameters`<`F`\>) => `Promise`<[`T`](Option.md#t)<`ReturnType`<`F`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<[`None`](Option.md#none) \| `Awaited`<[`Some`](Option.md#some)<`ReturnType`<`F`\>\>\>\> : (...`args`: `Parameters`<`F`\>) => `Promise`<[`T`](Option.md#t)<`ReturnType`<`F`\>\>\>

the wrapped function
 - returns `Promise<None>` if the function catched
 - otherwise the function returns `Promise<ReturnValue<F>>`

#### Defined in

[src/Option.ts:481](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L481)

___

### trySync

▸ **trySync**<`F`\>(`f`): (...`args`: `Parameters`<`F`\>) => [`T`](Option.md#t)<`ReturnType`<`F`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<[`None`](Option.md#none) \| `Awaited`<[`Some`](Option.md#some)<`ReturnType`<`F`\>\>\>\> : (...`args`: `Parameters`<`F`\>) => [`T`](Option.md#t)<`ReturnType`<`F`\>\>

Calls a function `F` with it's arguments and returns a `Option.T<ReturnType<f>>`

```typescript
import { Option, Num } from 'tiinvo';

const fn = (arg: number) => {
  if (Num.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(`${arg} is not even`);
}

const safe = Option.trySync(fn);

safe(2) // 4
safe(3) // null

Option.isSome(safe(2)) // true
Option.isNone(safe(3)) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends [`AnyFn`](Fn.md#anyfn) | the function type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the function to wrap |

#### Returns

(...`args`: `Parameters`<`F`\>) => [`T`](Option.md#t)<`ReturnType`<`F`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<[`None`](Option.md#none) \| `Awaited`<[`Some`](Option.md#some)<`ReturnType`<`F`\>\>\>\> : (...`args`: `Parameters`<`F`\>) => [`T`](Option.md#t)<`ReturnType`<`F`\>\>

the wrapped function
 - returns `None` if the function catched
 - otherwise the function returns `ReturnValue<F>`

#### Defined in

[src/Option.ts:522](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L522)

## Comparables

### cmp

▸ **cmp**<`A`\>(`c`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two options `T<A>` by a given `Comparable<A>`.

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

| Name | Description |
| :------ | :------ |
| `A` | the type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> | the `Comparable<A>` |
| `a` | [`T`](Option.md#t)<`A`\> | the left-hand compared `Option.T<A>` |
| `b` | [`T`](Option.md#t)<`A`\> | the right-hand compared  `Option.T<A>` |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- `0` if `a` equals to `b` or both `a` and `b` are `None`
 - `1` if `a` is greater than `b` or `a` is `Some<A>` and `b` is `None`
 - `-1` if `a` is less than `b` or `a` is `None` and `b` is `Some<A>`

#### Defined in

[src/Option.ts:123](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L123)

▸ **cmp**<`A`\>(`c`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Compares two options `T<A>` by a given `Comparable<A>`.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> | the `Comparable<A>` functor |
| `a` | [`T`](Option.md#t)<`A`\> | the right-hand compared value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary comparer functor which takes the left-hand compared value and returns 
 - `0` if `a` equals to `b` or both `a` and `b` are `None`
 - `1` if `a` is greater than `b` or `a` is `Some<A>` and `b` is `None`
 - `-1` if `a` is less than `b` or `a` is `None` and `b` is `Some<A>`

#### Defined in

[src/Option.ts:149](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L149)

▸ **cmp**<`A`\>(`c`): [`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Compares two options `T<A>` by a given `Comparable<A>`.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`Comparable`](Functors.md#comparable)<`A`\> | the `Comparable<A>` functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary comparer functor which takes two values `a` and `b` and returns 
 - `0` if `a` equals to `b` or both `a` and `b` are `None`
 - `1` if `a` is greater than `b` or `a` is `Some<A>` and `b` is `None`
 - `-1` if `a` is less than `b` or `a` is `None` and `b` is `Some<A>`

#### Defined in

[src/Option.ts:176](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L176)

___

### eq

▸ **eq**<`A`\>(`e`, `a`, `b`): `boolean`

Returns true if two options `T<A>` are equal, false otherwise.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |
| `a` | [`T`](Option.md#t)<`A`\> | the left-hand compared value |
| `b` | [`T`](Option.md#t)<`A`\> | the right-hand compared value |

#### Returns

`boolean`

- `true` if `a` equals to `b`
 - `false` otherwise

#### Defined in

[src/Option.ts:225](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L225)

▸ **eq**<`A`\>(`e`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `boolean`\>

Returns true if two options `T<A>` are equal, false otherwise.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |
| `a` | [`T`](Option.md#t)<`A`\> | the right-hand compared value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `boolean`\>

the unary function which returns
 - `true` if `a` equals to `b`
 - `false` otherwise

#### Defined in

[src/Option.ts:246](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L246)

▸ **eq**<`A`\>(`e`): [`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, `boolean`\>

Returns true if two options `T<A>` are equal, false otherwise.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> | the equatable functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, `boolean`\>

the binary function which returns
 - `true` if `a` equals to `b`
 - `false` otherwise

#### Defined in

[src/Option.ts:269](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L269)

## Filterables

### filter

▸ **filter**<`A`\>(`a`, `b`): [`T`](Option.md#t)<`A`\>

Returns `Some<A>` if the value is `Some<A>` and the predicate returns true, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

Option.filter(Num.gt(1), 1)    // null
Option.filter(Num.gt(1), 2)    // 2
Option.filter(Num.gt(1), null) // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type to filter |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `boolean`\> | the predicate |
| `b` | [`T`](Option.md#t)<`A`\> | the value to filter |

#### Returns

[`T`](Option.md#t)<`A`\>

- `T<A>` if the predicate is satisfied
 - `None` if the predicate is not satisfied

#### Defined in

[src/Option.ts:312](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L312)

▸ **filter**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

Returns `Some<A>` if the value is `Some<A>` and the predicate returns true, otherwise returns `None`.

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

| Name | Description |
| :------ | :------ |
| `A` | the type to filter |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `boolean`\> | the predicate |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

the unary function which filters the value `b`

#### Defined in

[src/Option.ts:332](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L332)

## Mappables

### map

▸ **map**<`A`, `B`\>(`m`, `a`): [`T`](Option.md#t)<`B`\>

Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.map(Num.add(1));

Option.map(Num.add(1), 1)    // 2
Option.map(Num.add(1), null) // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting type |
| `B` | the mapped type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable |
| `a` | [`T`](Option.md#t)<`A`\> | the value to map |

#### Returns

[`T`](Option.md#t)<`B`\>

the mapped option `T<B>`

#### Defined in

[src/Option.ts:365](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L365)

▸ **map**<`A`, `B`\>(`m`): [`Mappable`](Functors.md#mappable)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `None`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.map(Num.add(1));

m(1)    // 2
m(null) // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting type |
| `B` | the mapped type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable |

#### Returns

[`Mappable`](Functors.md#mappable)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

the mappable functor which maps `T<A>` to `T<B>`

#### Defined in

[src/Option.ts:385](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L385)

___

### mapOr

▸ **mapOr**<`A`, `B`\>(`m`, `a`, `b`): `B`

Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `b`.

```typescript
import { Option, Num } from 'tiinvo';

Option.mapOr(Num.add(2), 1, 0)    // 3
Option.mapOr(Num.add(2), null, 0) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting type |
| `B` | the mapped type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable |
| `a` | [`T`](Option.md#t)<`A`\> | the value to map |
| `b` | `B` | the fallback value |

#### Returns

`B`

the mapped value `B` or the fallback value `b` if `a` is `None`

#### Defined in

[src/Option.ts:415](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L415)

▸ **mapOr**<`A`, `B`\>(`m`, `a`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `B`\>

Maps an `Option.T<A>` to another `Option.T<b>` if is `Some<A>`, otherwise returns `b`.

```typescript
import { Option, Num } from 'tiinvo';

const m = Option.mapOr(Num.add(2), 0);

m(1)    // 3
m(null) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting type |
| `B` | the mapped type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable |
| `a` | `B` | the fallback value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `B`\>

the mappable functor which maps `A` to `B` or returns the fallback value `a` if `b` is `None`

#### Defined in

[src/Option.ts:436](https://github.com/OctoD/tiinvo/blob/5a3e691/src/Option.ts#L436)
