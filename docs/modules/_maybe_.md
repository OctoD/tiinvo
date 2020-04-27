[tiinvo](../README.md) › ["Maybe"](_maybe_.md)

# Module: "Maybe"

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

*Defined in [Maybe.ts:218](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L218)*

___

###  Maybe

Ƭ **Maybe**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹T, boolean›*

*Defined in [Maybe.ts:216](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L216)*

___

###  Nothing

Ƭ **Nothing**: *[MaybeLike](../classes/_maybe_.maybelike.md)‹T, false›*

*Defined in [Maybe.ts:220](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L220)*

## Functions

###  Just

▸ **Just**<**T**>(`value`: T): *Just‹T›*

*Defined in [Maybe.ts:236](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L236)*

`Just<T>` represent a value that has returned

```ts
import { Just } from 'tiinvo';

Just(10)
```

**`export`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Just‹T›*

___

###  Maybe

▸ **Maybe**<**T**>(`value`: T): *Maybe‹T›*

*Defined in [Maybe.ts:268](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L268)*

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

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Maybe‹T›*

___

###  Nothing

▸ **Nothing**<**T**>(`value`: T): *Nothing‹T›*

*Defined in [Maybe.ts:280](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Maybe.ts#L280)*

`Nothing<T>` represent a value that has not returned

**`export`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Nothing‹T›*
