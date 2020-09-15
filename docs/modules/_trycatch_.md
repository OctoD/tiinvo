[tiinvo](../README.md) › ["trycatch"](_trycatch_.md)

# Module: "trycatch"

## Index

### Functions

* [trycatch](_trycatch_.md#const-trycatch)
* [trycatchAsync](_trycatch_.md#const-trycatchasync)

## Functions

### `Const` trycatch

▸ **trycatch**‹**FnTry**, **K**›(`fn`: FnTry, ...`args`: K): *[Result](_result_.md#result)‹ReturnType‹FnTry››*

Defined in trycatch.ts:12

**Type parameters:**

▪ **FnTry**: *function*

▪ **K**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | FnTry |
`...args` | K |

**Returns:** *[Result](_result_.md#result)‹ReturnType‹FnTry››*

___

### `Const` trycatchAsync

▸ **trycatchAsync**‹**FnTry**, **K**›(`fn`: FnTry, ...`args`: K): *Promise‹ReturnType‹FnTry› extends Promise‹infer U› ? Result‹U› : never›*

Defined in trycatch.ts:32

**Type parameters:**

▪ **FnTry**: *function*

▪ **K**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | FnTry |
`...args` | K |

**Returns:** *Promise‹ReturnType‹FnTry› extends Promise‹infer U› ? Result‹U› : never›*
