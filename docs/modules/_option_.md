[tiinvo](../README.md) › ["Option"](_option_.md)

# Module: "Option"

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

*Defined in [Option.ts:347](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L347)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

___

###  Option

Ƭ **Option**: *[OptionLike](../classes/_option_.optionlike.md)‹T | null›*

*Defined in [Option.ts:337](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L337)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

___

###  Some

Ƭ **Some**: *[OptionLike](../classes/_option_.optionlike.md)‹T›*

*Defined in [Option.ts:342](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L342)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

## Functions

###  None

▸ **None**<**T**>(): *None‹T›*

*Defined in [Option.ts:357](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L357)*

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

*Defined in [Option.ts:385](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L385)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

Returns an `Option<T>`

**`export`** 

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

*Defined in [Option.ts:371](https://github.com/OctoD/tiinvo/blob/6df333b/src/Option.ts#L371)*

Type `Option` represents an optional value: every `Option` is either
`Some` and contains a value, or `None`, and does not.

Returns `Some<T>`

**`export`** 

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Some‹T›*
