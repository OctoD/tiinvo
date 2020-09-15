[tiinvo](../README.md) › ["mappables"](_mappables_.md)

# Module: "mappables"

## Index

### Type aliases

* [MapFn](_mappables_.md#mapfn)

### Functions

* [createMap](_mappables_.md#const-createmap)
* [createMapOr](_mappables_.md#const-createmapor)
* [createMapOrElse](_mappables_.md#const-createmaporelse)

## Type aliases

###  MapFn

Ƭ **MapFn**: *T extends null | undefined ? function : function*

Defined in mappables.ts:5

## Functions

### `Const` createMap

▸ **createMap**‹**K**, **Tagname**›(`predicate`: [Predicate](_predicate_.md#predicate)‹K›, `creator`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›): *(Anonymous function)*

Defined in mappables.ts:15

**Type parameters:**

▪ **K**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagname›*

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹K› | - |
`creator` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname› |   |

**Returns:** *(Anonymous function)*

___

### `Const` createMapOr

▸ **createMapOr**‹**K**, **Tagname**›(`predicate`: [Predicate](_predicate_.md#predicate)‹K›, `creator`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›): *(Anonymous function)*

Defined in mappables.ts:31

**Type parameters:**

▪ **K**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagname›*

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹K› | - |
`creator` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname› |   |

**Returns:** *(Anonymous function)*

___

### `Const` createMapOrElse

▸ **createMapOrElse**‹**K**, **Tagname**›(`predicate`: [Predicate](_predicate_.md#predicate)‹K›, `creator`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›): *(Anonymous function)*

Defined in mappables.ts:47

**Type parameters:**

▪ **K**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagname›*

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹K› | - |
`creator` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname› |   |

**Returns:** *(Anonymous function)*
