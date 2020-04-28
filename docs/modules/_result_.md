[tiinvo](../README.md) › ["Result"](_result_.md)

# Module: "Result"

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

Ƭ **Err**: *[ResultLike](../classes/_result_.resultlike.md)‹any, Error›*

*Defined in [Result.ts:329](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L329)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

___

###  Ok

Ƭ **Ok**: *[ResultLike](../classes/_result_.resultlike.md)‹T, any›*

*Defined in [Result.ts:336](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L336)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

___

###  Result

Ƭ **Result**: *[ResultLike](../classes/_result_.resultlike.md)‹T, E›*

*Defined in [Result.ts:343](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L343)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

## Functions

###  Err

▸ **Err**(`message`: string | Error): *Err*

*Defined in [Result.ts:356](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L356)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

Returns an `Error`

**`export`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string &#124; Error | new Error() |

**Returns:** *Err*

___

###  Ok

▸ **Ok**<**T**>(`value`: T): *Ok‹T›*

*Defined in [Result.ts:374](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L374)*

`Result<T, E>` is the type used for returning and propagating errors.
It is an enum with the variants, `Ok(T)`, representing success and
containing a value, and `Err(E)`, representing error and containing
an error value.

Returns `Ok`

**`export`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Ok‹T›*

___

###  instanceOfError

▸ **instanceOfError**<**T**, **E**>(`value`: T | E): *value is E*

*Defined in [Result.ts:312](https://github.com/OctoD/tiinvo/blob/6df333b/src/Result.ts#L312)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; E |

**Returns:** *value is E*
