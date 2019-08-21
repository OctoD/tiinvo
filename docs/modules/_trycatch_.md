**[tiinvo](../README.md)**

[Globals](../README.md) › ["TryCatch"](_trycatch_.md)

# External module: "TryCatch"

## Index

### Type aliases

* [Fn](_trycatch_.md#fn)
* [FnAsync](_trycatch_.md#fnasync)

### Functions

* [TryCatch](_trycatch_.md#trycatch)
* [TryCatchAsync](_trycatch_.md#trycatchasync)

## Type aliases

###  Fn

Ƭ **Fn**: *function*

*Defined in [TryCatch.ts:3](https://github.com/OctoD/tiinvo/blob/e0b0126/src/TryCatch.ts#L3)*

#### Type declaration:

▸ (): *any*

___

###  FnAsync

Ƭ **FnAsync**: *function*

*Defined in [TryCatch.ts:4](https://github.com/OctoD/tiinvo/blob/e0b0126/src/TryCatch.ts#L4)*

#### Type declaration:

▸ (): *Promise‹any›*

## Functions

###  TryCatch

▸ **TryCatch**<**FnTry**, **K**>(`fnTry`: FnTry, ...`args`: K): *[Result](_result_.md#result)‹ReturnType‹FnTry›, Error›*

*Defined in [TryCatch.ts:26](https://github.com/OctoD/tiinvo/blob/e0b0126/src/TryCatch.ts#L26)*

Handle sync try/catch.

```ts
import { TryCatch, TryCatchAsync } from 'tiinvo';

TryCatch(
  (a: number, b: number) => a + b,
  10,
  20,
) // returns Ok(30)
```

**`export`** 

**`template`** FnTry

**`template`** K

**Type parameters:**

▪ **FnTry**: *function*

▪ **K**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fnTry` | FnTry |
`...args` | K |

**Returns:** *[Result](_result_.md#result)‹ReturnType‹FnTry›, Error›*

___

###  TryCatchAsync

▸ **TryCatchAsync**<**FnTry**, **K**>(`fnTry`: FnTry, ...`args`: K): *Promise‹[Result](_result_.md#result)‹ReturnType<FnTry> extends Promise<infer U> ? U : ReturnType<FnTry>, Error››*

*Defined in [TryCatch.ts:55](https://github.com/OctoD/tiinvo/blob/e0b0126/src/TryCatch.ts#L55)*

Handle sync try/catch.

```ts
TryCatchAsync(
  (url: string) => fetch(url).then(r => r.json()),
  'https://reqres.in/api/users?page=2'
) // returns Ok({ some json data here })

```

**`export`** 

**`template`** FnTry

**`template`** K

**Type parameters:**

▪ **FnTry**: *function*

▪ **K**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fnTry` | FnTry |
`...args` | K |

**Returns:** *Promise‹[Result](_result_.md#result)‹ReturnType<FnTry> extends Promise<infer U> ? U : ReturnType<FnTry>, Error››*