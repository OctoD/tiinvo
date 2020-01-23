[tiinvo - v1.6.1](../README.md) › ["Option"](_option_.md)

# External module: "Option"

## Index

### Classes

* [OptionLike](../classes/_option_.optionlike.md)

### Type aliases

* [None](_option_.md#none)
* [Option](_option_.md#option)
* [Some](_option_.md#some)

### Functions

* [None](_option_.md#none)
* [Option](_option_.md#option)
* [Some](_option_.md#some)

## Type aliases

###  None

Ƭ **None**: *[OptionLike](../classes/_option_.optionlike.md)‹T›*

*Defined in [Option.ts:351](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L351)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

___

###  Option

Ƭ **Option**: *[OptionLike](../classes/_option_.optionlike.md)‹T | null›*

*Defined in [Option.ts:341](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L341)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

___

###  Some

Ƭ **Some**: *[OptionLike](../classes/_option_.optionlike.md)‹T›*

*Defined in [Option.ts:346](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L346)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

## Functions

###  None

▸ **None**<**T**>(): *None‹T›*

*Defined in [Option.ts:361](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L361)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

Returns `None`

**`export`** 

**Type parameters:**

▪ **T**

**Returns:** *None‹T›*

___

###  Option

▸ **Option**<**T**>(`value`: T): *[OptionLike](../classes/_option_.optionlike.md)‹T›*

*Defined in [Option.ts:389](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L389)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

Returns an `Option<T>`

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[OptionLike](../classes/_option_.optionlike.md)‹T›*

___

###  Some

▸ **Some**<**T**>(`value`: T): *Some‹T›*

*Defined in [Option.ts:375](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Option.ts#L375)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

Returns `Some<T>`

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Some‹T›*
