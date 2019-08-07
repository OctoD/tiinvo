> **[tiinvo](../README.md)**

[Globals](../README.md) / ["Result"](_result_.md) /

# External module: "Result"

## Index

### Classes

* [ResultLike](../classes/_result_.resultlike.md)

### Type aliases

* [Err](_result_.md#err)
* [Ok](_result_.md#ok)
* [Result](_result_.md#result)

### Functions

* [Err](_result_.md#err)
* [Ok](_result_.md#ok)
* [instanceOfError](_result_.md#instanceoferror)

## Type aliases

###  Err

Ƭ **Err**: *[ResultLike](../classes/_result_.resultlike.md)‹*any*, *`Error`*›*

*Defined in [Result.ts:329](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L329)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

___

###  Ok

Ƭ **Ok**: *[ResultLike](../classes/_result_.resultlike.md)‹*`T`*, *any*›*

*Defined in [Result.ts:336](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L336)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

___

###  Result

Ƭ **Result**: *[ResultLike](../classes/_result_.resultlike.md)‹*`T`*, *`E`*›*

*Defined in [Result.ts:343](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L343)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

## Functions

###  Err

▸ **Err**(`message?`: undefined | string): *[Err]()*

*Defined in [Result.ts:356](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L356)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

Returns an `Error`

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined \| string |

**Returns:** *[Err]()*

___

###  Ok

▸ **Ok**<**T**>(`value`: `T`): *[Ok]()‹*`T`*›*

*Defined in [Result.ts:372](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L372)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

Returns `Ok`

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[Ok]()‹*`T`*›*

___

###  instanceOfError

▸ **instanceOfError**<**T**, **E**>(`value`: `T` | `E`): *boolean*

*Defined in [Result.ts:312](https://github.com/OctoD/tiinvo/blob/36b3998/src/Result.ts#L312)*

**`template`** T

**`template`** E

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` \| `E` |

**Returns:** *boolean*