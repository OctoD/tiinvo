[tiinvo](../README.md) › ["filterables"](_filterables_.md)

# Module: "filterables"

## Index

### Functions

* [createFilter](_filterables_.md#const-createfilter)
* [createFilterOr](_filterables_.md#const-createfilteror)

## Functions

### `Const` createFilter

▸ **createFilter**‹**Arg**, **Tagname**›(`typeguard`: [Predicate](_predicate_.md#predicate)‹Arg›, `factory`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›, `failfactory`: function): *(Anonymous function)*

Defined in filterables.ts:13

**Type parameters:**

▪ **Arg**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagname›*

▪ **Tagname**: *string*

**Parameters:**

▪ **typeguard**: *[Predicate](_predicate_.md#predicate)‹Arg›*

▪ **factory**: *[TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›*

▪ **failfactory**: *function*

▸ ‹**X**›(...`args`: any[]): *[Tagged](_tagged_type_.md#tagged)‹X, Tagname›*

**Type parameters:**

▪ **X**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *(Anonymous function)*

___

### `Const` createFilterOr

▸ **createFilterOr**‹**Arg**, **Tagname**›(`typeguard`: [Predicate](_predicate_.md#predicate)‹Arg›, `factory`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname›): *(Anonymous function)*

Defined in filterables.ts:35

**Type parameters:**

▪ **Arg**: *[Tagged](_tagged_type_.md#tagged)‹any, Tagname›*

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Predicate](_predicate_.md#predicate)‹Arg› | - |
`factory` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹Tagname› |   |

**Returns:** *(Anonymous function)*
