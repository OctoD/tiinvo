[tiinvo](../README.md) / [Exports](../modules.md) / Result

# Namespace: Result

## Table of contents

### Type Aliases

- [Err](Result.md#err)
- [Ok](Result.md#ok)
- [t](Result.md#t)

### Functions

- [err](Result.md#err-1)
- [isErr](Result.md#iserr)
- [isOk](Result.md#isok)
- [isOkOf](Result.md#isokof)
- [cmp](Result.md#cmp)
- [eq](Result.md#eq)
- [filter](Result.md#filter)
- [map](Result.md#map)
- [mapOr](Result.md#mapor)
- [tryAsync](Result.md#tryasync)
- [trySync](Result.md#trysync)

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

### err

▸ **err**(`a`): `Error`

Returns an `err`

**`Since`**

3.8.0

**`Example`**

```ts
import { Result } from 'tiinvo';

Result.err(10)                    instanceof Error // true
Result.err(new TypeError('aaaa')) instanceof Error // true
Result.err({})                    instanceof Error // true
Result.err(10n)                   instanceof Error // true
Result.err([10, 20, 30])          instanceof Error // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |

#### Returns

`Error`

#### Defined in

src/Result.ts:36

___

### isErr

▸ **isErr**(`value`): value is Error

Checks if a value is `err`

```ts
import { Result } from 'tiinvo';

Result.isErr(10)                    // false
Result.isErr(new TypeError('aaaa')) // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Error

#### Defined in

src/Result.ts:66

___

### isOk

▸ **isOk**<`a`\>(`value`): value is Ok<a\>

Checks if a value is `Ok`

```ts
import { Result } from 'tiinvo';

Result.isOk(10)                    // true
Result.isOk(new TypeError('aaaa')) // false
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
| `value` | [`t`](Result.md#t)<`a`\> |

#### Returns

value is Ok<a\>

#### Defined in

src/Result.ts:82

___

### isOkOf

▸ **isOkOf**<`a`\>(`g`): (`x`: `unknown`) => x is a

Checks if a value is `Ok<a>`

```ts
import { Num, Result } from 'tiinvo';

const guard = Result.isOkOf(Num.guard);

guard(10)                    // true
guard("hello")               // false
guard(new TypeError('aaaa')) // false
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
| `g` | [`Guardable`](Functors.md#guardable)<`a`\> |

#### Returns

`fn`

▸ (`x`): x is a

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is a

#### Defined in

src/Result.ts:101

___

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

▸ **cmp**<`A`\>(`cmp`, `a`): [`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> |
| `a` | [`t`](Result.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Result.ts:133

▸ **cmp**<`A`\>(`cmp`): [`Binary`](Fn.md#binary)<[`t`](Result.md#t)<`A`\>, [`t`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`t`](Result.md#t)<`A`\>, [`t`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

#### Defined in

src/Result.ts:135

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

▸ **filter**<`a`\>(`f`): [`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`t`](Result.md#t)<`a`\>, [`t`](Result.md#t)<`a`\>\>

#### Defined in

src/Result.ts:266

___

### map

▸ **map**<`a`, `b`\>(`m`): (`a`: [`t`](Result.md#t)<`a`\>) => [`t`](Result.md#t)<`b`\>

Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `err`

```ts
import { Num, Result } from 'tiinvo';

const m = Result.map(Num.add(10))

m(10)                   // 20
m(new Error('foobar!')) // Error('foobar!')
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

`fn`

▸ (`a`): [`t`](Result.md#t)<`b`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Result.md#t)<`a`\> |

##### Returns

[`t`](Result.md#t)<`b`\>

#### Defined in

src/Result.ts:296

___

### mapOr

▸ **mapOr**<`a`, `b`\>(`m`, `b`): (`a`: [`t`](Result.md#t)<`a`\>) => `b`

Maps `Result.t<a>` to `Result.t<b>` if ok, otherwise returns `b`

```ts
import { Str, Result } from 'tiinvo';

const map = Result.mapOr(Str.length, 0);

map('hello')        // 5
map(new Error())    // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |
| `b` | `b` |

#### Returns

`fn`

▸ (`a`): `b`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Result.md#t)<`a`\> |

##### Returns

`b`

#### Defined in

src/Result.ts:313

___

### tryAsync

▸ **tryAsync**<`f`\>(`f`): (...`args`: `Parameters`<`f`\>) => `Promise`<[`t`](Result.md#t)<`ReturnType`<`f`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => `Promise`<[`t`](Result.md#t)<`ReturnType`<`f`\>\>\>

Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`

```typescript
import { Result, Num } from 'tiinvo';

const fn = async (arg: number) => {
  if (Num.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(`${arg} is not even`);
}

const safe = Result.tryAsync(fn);

await safe(2) // 4
await safe(3) // Error("3 is not even")

Result.isOk(await safe(2))  // true
Result.isErr(await safe(3)) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyAsyncFn`](Fn.md#anyasyncfn) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `f` |

#### Returns

(...`args`: `Parameters`<`f`\>) => `Promise`<[`t`](Result.md#t)<`ReturnType`<`f`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => `Promise`<[`t`](Result.md#t)<`ReturnType`<`f`\>\>\>

#### Defined in

src/Result.ts:346

___

### trySync

▸ **trySync**<`f`\>(`f`): (...`args`: `Parameters`<`f`\>) => [`t`](Result.md#t)<`ReturnType`<`f`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => [`t`](Result.md#t)<`ReturnType`<`f`\>\>

Calls a function `f` with it's arguments and returns a `Promise<Result.t<ReturnType<f>>>`

```typescript
import { Result, Num } from 'tiinvo';

const fn = (arg: number) => {
  if (Num.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(`${arg} is not even`);
}

const safe = Result.trySync(fn);

safe(2) // 4
safe(3) // Error("3 is not even")

Result.isOk(safe(2))  // true
Result.isErr(safe(3)) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyFn`](Fn.md#anyfn) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `f` |

#### Returns

(...`args`: `Parameters`<`f`\>) => [`t`](Result.md#t)<`ReturnType`<`f`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => [`t`](Result.md#t)<`ReturnType`<`f`\>\>

#### Defined in

src/Result.ts:384
