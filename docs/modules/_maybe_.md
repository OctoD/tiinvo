**[tiinvo](../README.md)**

[Globals](../README.md) › ["Maybe"](_maybe_.md)

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

Ƭ **Just**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹T, true›*

*Defined in [Maybe.ts:203](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L203)*

___

###  Maybe

Ƭ **Maybe**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹T, boolean›*

*Defined in [Maybe.ts:201](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L201)*

___

###  Nothing

Ƭ **Nothing**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹T, false›*

*Defined in [Maybe.ts:205](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L205)*

## Functions

###  Just

▸ **Just**<**T**>(`value`: T): *[Just]()‹T›*

*Defined in [Maybe.ts:221](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L221)*

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
`value` | T |

**Returns:** *[Just]()‹T›*

___

###  Maybe

▸ **Maybe**<**T**>(`value`: T): *[Maybe]()‹T›*

*Defined in [Maybe.ts:253](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L253)*

The Maybe monad represents computations which might "go wrong" by not returning a value.

Every falsy value is considered as `Nothing`

```ts
import { Maybe } from 'tiinvo';

function foo() {
   return Math.floor(Math.random() * 1000) ? 'exists' : null
}

const value = Maybe(foo()) // could be both Just<string> or Nothing<string | null>

value
   .map(arg => arg % 2 === 0)
   .map(arg => arg ? 'even' : 'odd')
   .cata({
       Nothing: () => 'Not a number',
       Just: arg => `Value is ${arg}`
   })
```

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Maybe]()‹T›*

___

###  Nothing

▸ **Nothing**<**T**>(`value`: T): *[Nothing]()‹T›*

*Defined in [Maybe.ts:265](https://github.com/OctoD/tiinvo/blob/750e283/src/Maybe.ts#L265)*

`Nothing<T>` represent a value that has not returned

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Nothing]()‹T›*