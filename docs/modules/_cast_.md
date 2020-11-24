[tiinvo](../README.md) › ["cast"](_cast_.md)

# Module: "cast"

## Index

### Functions

* [cast](_cast_.md#const-cast)
* [createCast](_cast_.md#const-createcast)

## Functions

### `Const` cast

▸ **cast**‹**T**, **Tagfrom**, **Tagto**›(`tagged`: T, `totagged`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagto›): *[Tagged](_tagged_type_.md#tagged)‹T["value"], Tagto›*

*Defined in [cast.ts:17](https://github.com/OctoD/tiinvo/blob/9536b4d/src/cast.ts#L17)*

Cast a TaggetType to another one.

**`example`** 
const error = err('this is an error');
const someError = cast(error, some);

**Type parameters:**

▪ **T**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagfrom›*

▪ **Tagfrom**: *string*

▪ **Tagto**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`tagged` | T |
`totagged` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagto› |

**Returns:** *[Tagged](_tagged_type_.md#tagged)‹T["value"], Tagto›*

___

### `Const` createCast

▸ **createCast**‹**Tagto**›(`totagged`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagto›): *(Anonymous function)*

*Defined in [cast.ts:38](https://github.com/OctoD/tiinvo/blob/9536b4d/src/cast.ts#L38)*

Creates a cast to function

**`example`** 

const toOption = createCast(option);

toOption(just('hello')); // Some<'hello'>;

**Type parameters:**

▪ **Tagto**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`totagged` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagto› |   |

**Returns:** *(Anonymous function)*
