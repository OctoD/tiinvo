[tiinvo](../README.md) › ["unwrappables"](_unwrappables_.md)

# Module: "unwrappables"

## Index

### Functions

* [createUnwrap](_unwrappables_.md#const-createunwrap)
* [createUnwrapOr](_unwrappables_.md#const-createunwrapor)
* [createUnwrapOrElse](_unwrappables_.md#const-createunwraporelse)

## Functions

### `Const` createUnwrap

▸ **createUnwrap**‹**Tag**›(`predicate`: [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag››, `erromessage`: string): *(Anonymous function)*

*Defined in [unwrappables.ts:12](https://github.com/OctoD/tiinvo/blob/446c93b/src/unwrappables.ts#L12)*

**Type parameters:**

▪ **Tag**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag›› | - |
`erromessage` | string |   |

**Returns:** *(Anonymous function)*

___

### `Const` createUnwrapOr

▸ **createUnwrapOr**‹**Tag**›(`predicate`: [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag››): *(Anonymous function)*

*Defined in [unwrappables.ts:26](https://github.com/OctoD/tiinvo/blob/446c93b/src/unwrappables.ts#L26)*

**Type parameters:**

▪ **Tag**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag›› |   |

**Returns:** *(Anonymous function)*

___

### `Const` createUnwrapOrElse

▸ **createUnwrapOrElse**‹**Tag**›(`predicate`: [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag››): *(Anonymous function)*

*Defined in [unwrappables.ts:37](https://github.com/OctoD/tiinvo/blob/446c93b/src/unwrappables.ts#L37)*

**Type parameters:**

▪ **Tag**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tag›› |   |

**Returns:** *(Anonymous function)*
