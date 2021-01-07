[tiinvo](../README.md) › ["cast"](_cast_.md)

# Module: "cast"

## Index

### Functions

* [cast](_cast_.md#const-cast)
* [createCast](_cast_.md#const-createcast)
* [totaggedFn](_cast_.md#const-totaggedfn)

## Functions

### `Const` cast

▸ **cast**‹**T**, **Tagfrom**, **Tagto**›(`tagged`: T, `totagged`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagto›): *[Tagged](_tagged_type_.md#tagged)‹T["value"], Tagto›*

*Defined in [cast.ts:18](https://github.com/OctoD/tiinvo/blob/446c93b/src/cast.ts#L18)*

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

*Defined in [cast.ts:39](https://github.com/OctoD/tiinvo/blob/446c93b/src/cast.ts#L39)*

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

___

### `Const` totaggedFn

▸ **totaggedFn**‹**Tagname**›(`factory`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›): *(Anonymous function)*

*Defined in [cast.ts:67](https://github.com/OctoD/tiinvo/blob/446c93b/src/cast.ts#L67)*

Takes a tagged factory function.
Every function which takes a single argument will return a Tagged type

```ts

import { totaggedFn, taggedFactory } from 'tiinvo'

const mytagged = taggedFactory('mytagged');
const tomytagged = totaggedFn(mytagged)
const double = (arg: number) => arg * 2;
const mytaggeddouble = tomytagged(double)

double(10)           // 20
mytaggeddouble(10)   // { __tag: 'mytagged', value: 20 }

```

**Type parameters:**

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factory` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname› |   |

**Returns:** *(Anonymous function)*
