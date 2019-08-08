> **[tiinvo](../README.md)**

[Globals](../README.md) / ["Maybe"](_maybe_.md) /

# External module: "Maybe"

## Index

### Classes

* [MaybeLike](../classes/_maybe_.maybelike.md)

### Interfaces

* [MaybeCataMap](../interfaces/_maybe_.maybecatamap.md)

### Type aliases

* [Just](_maybe_.md#just)
* [Maybe](_maybe_.md#maybe)
* [Nothing](_maybe_.md#nothing)

### Functions

* [Just](_maybe_.md#just)
* [Maybe](_maybe_.md#maybe)
* [Nothing](_maybe_.md#nothing)

## Type aliases

###  Just

Ƭ **Just**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹*`T`*, *true*›*

Defined in Maybe.ts:200

___

###  Maybe

Ƭ **Maybe**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹*`T`*, *boolean*›*

Defined in Maybe.ts:198

___

###  Nothing

Ƭ **Nothing**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹*`T`*, *false*›*

Defined in Maybe.ts:202

## Functions

###  Just

▸ **Just**<**T**>(`value`: `T`): *[Just]()‹*`T`*›*

Defined in Maybe.ts:218

`Just<T>` represent a value that has returned

```ts
import { Just } from 'tiinvo';

Just(10)
```

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[Just]()‹*`T`*›*

___

###  Maybe

▸ **Maybe**<**T**>(`value`: `T`): *[Maybe]()‹*`T`*›*

Defined in Maybe.ts:242

The Maybe monad represents computations which might "go wrong" by not returning a value.

Every falsy value is considered as `Nothing`

```ts
import { Maybe } from 'tiinvo';

function foo() {
   return Math.floor(Math.random() * 1000) ? 'exists' : null
}

Maybe(foo()) // could be both Just<string> or Nothing<string | null>
```

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[Maybe]()‹*`T`*›*

___

###  Nothing

▸ **Nothing**<**T**>(`value`: `T`): *[Nothing]()‹*`T`*›*

Defined in Maybe.ts:254

`Nothing<T>` represent a value that has not returned

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[Nothing]()‹*`T`*›*