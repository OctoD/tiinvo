[tiinvo](../README.md) › ["foldables"](_foldables_.md)

# Module: "foldables"

## Index

### Type aliases

* [FoldableFn](_foldables_.md#foldablefn)

### Functions

* [createSwap](_foldables_.md#const-createswap)
* [createfold](_foldables_.md#const-createfold)

## Type aliases

###  FoldableFn

Ƭ **FoldableFn**: *function*

*Defined in [foldables.ts:4](https://github.com/OctoD/tiinvo/blob/446c93b/src/foldables.ts#L4)*

#### Type declaration:

▸ (`arg`: T): *[Tagged](_tagged_type_.md#tagged)‹R, Tagname›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

## Functions

### `Const` createSwap

▸ **createSwap**‹**LeftTag**, **RightTag**›(`lefthandpredicate`: [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹unknown, LeftTag | RightTag››, `leftcreator`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹LeftTag›, `rightcreator`: [TaggedFactory](_tagged_type_.md#taggedfactory)‹RightTag›): *(Anonymous function)*

*Defined in [foldables.ts:30](https://github.com/OctoD/tiinvo/blob/446c93b/src/foldables.ts#L30)*

**Type parameters:**

▪ **LeftTag**: *string*

▪ **RightTag**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lefthandpredicate` | [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹unknown, LeftTag &#124; RightTag›› | - |
`leftcreator` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹LeftTag› | - |
`rightcreator` | [TaggedFactory](_tagged_type_.md#taggedfactory)‹RightTag› |   |

**Returns:** *(Anonymous function)*

___

### `Const` createfold

▸ **createfold**‹**Tagname**›(`lefthandpredicate`: [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tagname››): *(Anonymous function)*

*Defined in [foldables.ts:13](https://github.com/OctoD/tiinvo/blob/446c93b/src/foldables.ts#L13)*

Creates a fold function

**Type parameters:**

▪ **Tagname**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lefthandpredicate` | [Predicate](_predicate_.md#predicate)‹[Tagged](_tagged_type_.md#tagged)‹any, Tagname›› |   |

**Returns:** *(Anonymous function)*
