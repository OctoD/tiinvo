[tiinvo](../README.md) / [Exports](../modules.md) / Result

# Namespace: Result

## Table of contents

### Type Aliases

- [Err](Result.md#err)
- [Ok](Result.md#ok)
- [T](Result.md#t)

### Factories

- [err](Result.md#err-1)

### Guardables

- [isErr](Result.md#iserr)
- [isOk](Result.md#isok)
- [isOkOf](Result.md#isokof)

### Comparables

- [cmp](Result.md#cmp)
- [eq](Result.md#eq)

### Filterables

- [filter](Result.md#filter)

### Functions

- [map](Result.md#map)
- [mapOr](Result.md#mapor)
- [tryAsync](Result.md#tryasync)
- [trySync](Result.md#trysync)

## Type Aliases

### Err

Ƭ **Err**: `Error`

Represents an error

#### Defined in

[src/Result.ts:9](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L9)

___

### Ok

Ƭ **Ok**<`A`\>: `A` extends `Error` ? `never` : `A`

Represents the successful result of an operation

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/Result.ts:13](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L13)

___

### T

Ƭ **T**<`A`\>: [`Ok`](Result.md#ok)<`A`\> \| [`Err`](Result.md#err)

Could represent both an Error `Err` or a successful result of an operation `Ok<a>`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/Result.ts:17](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L17)

## Factories

### err

▸ **err**(`a`): `Error`

Returns an `Err`

**`Example`**

```ts
import { Result } from 'tiinvo';

Result.err(10)                    instanceof Error // true
Result.err(new TypeError('aaaa')) instanceof Error // true
Result.err({})                    instanceof Error // true
Result.err(10n)                   instanceof Error // true
Result.err([10, 20, 30])          instanceof Error // true
```

**`Since`**

3.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |

#### Returns

`Error`

#### Defined in

[src/Result.ts:39](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L39)

## Guardables

### isErr

▸ **isErr**(`x`): x is Error

Checks if a value is `Err`

**`Example`**

```ts
import { Result } from 'tiinvo';

Result.isErr(10)                    // false
Result.isErr(new TypeError('aaaa')) // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is Error

true if `x` is `Err`, false otherwise

#### Defined in

[src/Result.ts:72](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L72)

___

### isOk

▸ **isOk**<`A`\>(`x`): x is Ok<A\>

Checks if a value is `Ok`

**`Example`**

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
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`T`](Result.md#t)<`A`\> |

#### Returns

x is Ok<A\>

true if `x` is `Ok<A>`, false otherwise

#### Defined in

[src/Result.ts:91](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L91)

___

### isOkOf

▸ **isOkOf**<`A`\>(`g`): (`x`: `unknown`) => x is A

Checks if a value is `Ok<A>`

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

| Name | Description |
| :------ | :------ |
| `A` | the type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the type guard |

#### Returns

`fn`

the Guard

▸ (`x`): x is A

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is A

#### Defined in

[src/Result.ts:112](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L112)

## Comparables

### cmp

▸ **cmp**<`A`\>(`cmp`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two results `T<A>` by a given `Comparable<A>`.

 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

Result.cmp(Str.cmp, "a", "a")                    // 0
Result.cmp(Str.cmp, "a", "b")                    // -1
Result.cmp(Str.cmp, "b", "a")                    // 1
Result.cmp(Str.cmp, new Error(), new Error())    // 0
Result.cmp(Str.cmp, new Error(), "a")            // -1
Result.cmp(Str.cmp, "a", new Error())            // 1
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
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparer function |
| `a` | [`T`](Result.md#t)<`A`\> | first value |
| `b` | [`T`](Result.md#t)<`A`\> | last value |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:146](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L146)

▸ **cmp**<`A`\>(`cmp`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two results `T<A>` by a given `ComparableModule<A>`.

 * If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

Result.cmp(Str, "a", "a")                    // 0
Result.cmp(Str, "a", "b")                    // -1
Result.cmp(Str, "b", "a")                    // 1
Result.cmp(Str, new Error(), new Error())    // 0
Result.cmp(Str, new Error(), "a")            // -1
Result.cmp(Str, "a", new Error())            // 1
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
| `cmp` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparer function |
| `a` | [`T`](Result.md#t)<`A`\> | first value |
| `b` | [`T`](Result.md#t)<`A`\> | last value |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:175](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L175)

▸ **cmp**<`A`\>(`cmp`, `a`): [`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two results `T<A>` by a given `Comparable<A>`.

If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

const cmp = Result.cmp(Str.cmp, "a");

cmp("a")                    // 0
cmp("b")                    // -1
cmp("a")                    // 1
cmp(new Error())            // 1
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
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparer function |
| `a` | [`T`](Result.md#t)<`A`\> | first value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function which returns 
 - -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:204](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L204)

▸ **cmp**<`A`\>(`cmp`, `a`): [`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two results `T<A>` by a given `ComparableModule<A>`.

If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

const cmp = Result.cmp(Str, "a");

cmp("a")                    // 0
cmp("b")                    // -1
cmp("a")                    // 1
cmp(new Error())            // 1
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
| `cmp` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparer module |
| `a` | [`T`](Result.md#t)<`A`\> | first value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function which returns
 - -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:233](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L233)

▸ **cmp**<`A`\>(`cmp`): [`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a binary function which compares two results `T<A>` by a given `Comparable<A>`.

If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

const cmp = Result.cmp(Str.cmp);

cmp("a", "a")                    // 0
cmp("a", "b")                    // -1
cmp("b", "a")                    // 1
cmp("a", new Error())            // 1
cmp(new Error(), "a")            // -1
cmp(new Error(), new Error())    // 0
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
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparer function |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary function which returns
 - -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:263](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L263)

▸ **cmp**<`A`\>(`cmp`): [`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a binary function which compares two results `T<A>` by a given `ComparableModule<A>`.

If `a` is `Err` and `b` is `Ok` returns -1, else if both are `Err` returns 0, else returns 1

**`Example`**

```ts
import { Str, Result } from 'tiinvo';

const cmp = Result.cmp(Str);

cmp("a", "a")                    // 0
cmp("a", "b")                    // -1
cmp("b", "a")                    // 1
cmp("a", new Error())            // 1
cmp(new Error(), "a")            // -1
cmp(new Error(), new Error())    // 0
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
| `cmp` | [`ComparableModule`](Functors.md#comparablemodule)<`A`\> | the comparer module |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary function which returns
 - -1 if `a` is less than `b`
 - 0 if `a` is same of `b` 
 - 1 if `a` is greater than `b`.

#### Defined in

[src/Result.ts:293](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L293)

___

### eq

▸ **eq**<`A`\>(`eq`, `a`, `b`): `boolean`

Returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

Result.eq(Num.eq, 0, 0)                         // true
Result.eq(Num.eq, new Error(), new TypeError()) // true
Result.eq(Num.eq, new Error(), 0)               // false
Result.eq(Num.eq, 0, new Error())               // false
Result.eq(Num.eq, 1_000_000, 0)                 // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`A`\> | the Equatable functor |
| `a` | [`T`](Result.md#t)<`A`\> | the left compared value |
| `b` | [`T`](Result.md#t)<`A`\> | the right compared value |

#### Returns

`boolean`

true if `a` equals to `b`

#### Defined in

[src/Result.ts:339](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L339)

▸ **eq**<`A`\>(`eq`, `a`, `b`): `boolean`

Returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

Result.eq(Num, 0, 0)                         // true
Result.eq(Num, new Error(), new TypeError()) // true
Result.eq(Num, new Error(), 0)               // false
Result.eq(Num, 0, new Error())               // false
Result.eq(Num, 1_000_000, 0)                 // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the Equatable module |
| `a` | [`T`](Result.md#t)<`A`\> | the left compared value |
| `b` | [`T`](Result.md#t)<`A`\> | the right compared value |

#### Returns

`boolean`

true if `a` equals to `b`

#### Defined in

[src/Result.ts:361](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L361)

▸ **eq**<`A`\>(`eq`, `a`): [`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, `boolean`\>

Returns a unary function which returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

const is0 = Result.eq(Num.eq, 0)

Result.eq(0)                         // true
Result.eq(new TypeError())           // false
Result.eq(new Error())               // false
Result.eq(1_000_000)                 // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`A`\> | the Equatable functor |
| `a` | [`T`](Result.md#t)<`A`\> | the left compared value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, `boolean`\>

the unary function

#### Defined in

[src/Result.ts:383](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L383)

▸ **eq**<`A`\>(`eq`, `a`): [`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, `boolean`\>

Returns a unary function which returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

const is0 = Result.eq(Num, 0)

Result.eq(0)                         // true
Result.eq(new TypeError())           // false
Result.eq(new Error())               // false
Result.eq(1_000_000)                 // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`EquatableModule`](Functors.md#equatablemodule)<`A`\> | the Equatable functor |
| `a` | [`T`](Result.md#t)<`A`\> | the left compared value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, `boolean`\>

the unary function

#### Defined in

[src/Result.ts:405](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L405)

▸ **eq**<`a`\>(`eq`): [`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>, `boolean`\>

Returns a binary function which returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

const is0 = Result.eq(Num.eq)

Result.eq(0, 0)                         // true
Result.eq(new TypeError(), new Error()) // true
Result.eq(0, new Error())               // false
Result.eq(1_000, 1_000)                 // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`a`\> | the Equatable functor |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>, `boolean`\>

the binary function

#### Defined in

[src/Result.ts:426](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L426)

▸ **eq**<`a`\>(`eq`): [`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>, `boolean`\>

Returns a binary function which returns true if two results are equal, false otherwise.

```ts
import { Num, Result } from 'tiinvo';

const is0 = Result.eq(Num)

Result.eq(0, 0)                         // true
Result.eq(new TypeError(), new Error()) // true
Result.eq(0, new Error())               // false
Result.eq(1_000, 1_000)                 // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eq` | [`EquatableModule`](Functors.md#equatablemodule)<`a`\> | the Equatable module |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Result.md#t)<`a`\>, [`T`](Result.md#t)<`a`\>, `boolean`\>

the binary function

#### Defined in

[src/Result.ts:447](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L447)

## Filterables

### filter

▸ **filter**<`A`\>(`f`, `a`): [`T`](Result.md#t)<`A`\>

Returns `Ok<A>` if the value `a` is `Ok<A>` and the predicate is satisfied, otherwise returns `Err`.

```typescript
import { Result, Num } from 'tiinvo';

Result.filter(Num.gt(1), 1)               // Error("Value did not pass filter")
Result.filter(Num.gt(1), 2)               // 2
Result.filter(Num.gt(1), new TypeError()) // Error("Value did not pass filter")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Filterable`](Functors.md#filterable)<`A`\> | the Filterable functor |
| `a` | [`T`](Result.md#t)<`A`\> | the value to filter |

#### Returns

[`T`](Result.md#t)<`A`\>

`T<A>` if the Filterable has been satisfied

#### Defined in

[src/Result.ts:490](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L490)

▸ **filter**<`A`\>(`f`): [`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

Returns a unary function which checks if `Result.T<A>` is `Ok<A>` and the predicate is satisfied, otherwise returns `Err`.

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

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Filterable`](Functors.md#filterable)<`A`\> | the Filterable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Result.md#t)<`A`\>, [`T`](Result.md#t)<`A`\>\>

the unary function

#### Defined in

[src/Result.ts:510](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L510)

## Functions

### map

▸ **map**<`A`, `B`\>(`m`): (`a`: [`T`](Result.md#t)<`A`\>) => [`T`](Result.md#t)<`B`\>

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
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the Mappable functor |

#### Returns

`fn`

▸ (`a`): [`T`](Result.md#t)<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Result.md#t)<`A`\> |

##### Returns

[`T`](Result.md#t)<`B`\>

#### Defined in

[src/Result.ts:540](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L540)

___

### mapOr

▸ **mapOr**<`a`, `b`\>(`m`, `b`): (`a`: [`T`](Result.md#t)<`a`\>) => `b`

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
| `a` | [`T`](Result.md#t)<`a`\> |

##### Returns

`b`

#### Defined in

[src/Result.ts:557](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L557)

___

### tryAsync

▸ **tryAsync**<`f`\>(`f`): (...`args`: `Parameters`<`f`\>) => `Promise`<[`T`](Result.md#t)<`ReturnType`<`f`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => `Promise`<[`T`](Result.md#t)<`ReturnType`<`f`\>\>\>

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

(...`args`: `Parameters`<`f`\>) => `Promise`<[`T`](Result.md#t)<`ReturnType`<`f`\>\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => `Promise`<[`T`](Result.md#t)<`ReturnType`<`f`\>\>\>

#### Defined in

[src/Result.ts:590](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L590)

___

### trySync

▸ **trySync**<`f`\>(`f`): (...`args`: `Parameters`<`f`\>) => [`T`](Result.md#t)<`ReturnType`<`f`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => [`T`](Result.md#t)<`ReturnType`<`f`\>\>

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

(...`args`: `Parameters`<`f`\>) => [`T`](Result.md#t)<`ReturnType`<`f`\>\> extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Error` \| `Awaited`<[`Ok`](Result.md#ok)<`ReturnType`<`f`\>\>\>\> : (...`args`: `Parameters`<`f`\>) => [`T`](Result.md#t)<`ReturnType`<`f`\>\>

#### Defined in

[src/Result.ts:628](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Result.ts#L628)
