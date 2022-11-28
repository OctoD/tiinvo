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
- [cmp](Option.md#cmp)
- [eq](Option.md#eq)
- [tryAsync](Option.md#tryasync)
- [trySync](Option.md#trysync)

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

src/Option.ts:12

___

### Some

Ƭ **Some**<`A`\>: `A` extends [`None`](Option.md#none) ? `never` : `A`

Some<A> represents a value which could have been a possible nullable or undefined

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

The type `Option.T<A>` represents a value that could be both `a` or `null` or `undefined`.

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

src/Option.ts:23

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

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is None

#### Defined in

src/Functors.ts:338

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

#### Defined in

src/Functors.ts:338

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

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Guardable`](Functors.md#guardable)<`A`\> |

#### Returns

[`Guardable`](Functors.md#guardable)<[`T`](Option.md#t)<`A`\>\>

#### Defined in

src/Option.ts:81

___

### cmp

▸ **cmp**<`A`\>(`c`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two options `T<A>` by a given `Comparable<A>`.

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

Compares two options `T<A>` by a given `Comparable<A>`.

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

Compares two options `T<A>` by a given `Comparable<A>`.

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

| Name | Type |
| :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |
| `a` | [`T`](Option.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, `boolean`\>

#### Defined in

src/Option.ts:216

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

| Name | Type |
| :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>, `boolean`\>

#### Defined in

src/Option.ts:236

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

#### Defined in

src/Option.ts:441

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

#### Defined in

src/Option.ts:480

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

src/Option.ts:279

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

#### Defined in

src/Option.ts:298

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

#### Defined in

src/Option.ts:330

▸ **map**<`A`, `B`\>(`m`): [`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

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

[`Unary`](Fn.md#unary)<[`T`](Option.md#t)<`A`\>, [`T`](Option.md#t)<`B`\>\>

#### Defined in

src/Option.ts:349

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

#### Defined in

src/Option.ts:378

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

#### Defined in

src/Option.ts:398
