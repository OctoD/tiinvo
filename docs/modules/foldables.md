[tiinvo](../README.md) / foldables

# Namespace: foldables

## Table of contents

### Type aliases

- [FoldableFn](foldables.md#foldablefn)

### Functions

- [createSwap](foldables.md#createswap)
- [createfold](foldables.md#createfold)

## Type aliases

### FoldableFn

Ƭ **FoldableFn**<T, R, Tagname\>: (`arg`: T) => [*Tagged*](../README.md#tagged)<R, Tagname\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`R` | - |
`Tagname` | *string* |

Defined in: [src/foldables.ts:4](https://github.com/OctoD/tiinvo/blob/5dcae37/src/foldables.ts#L4)

## Functions

### createSwap

▸ `Const`**createSwap**<LeftTag, RightTag\>(`lefthandpredicate`: [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*unknown*, LeftTag \| RightTag\>\>, `leftcreator`: [*TaggedFactory*](../README.md#taggedfactory)<LeftTag\>, `rightcreator`: [*TaggedFactory*](../README.md#taggedfactory)<RightTag\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`LeftTag` | *string* |
`RightTag` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`lefthandpredicate` | [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*unknown*, LeftTag \| RightTag\>\> |  |
`leftcreator` | [*TaggedFactory*](../README.md#taggedfactory)<LeftTag\> |  |
`rightcreator` | [*TaggedFactory*](../README.md#taggedfactory)<RightTag\> |     |

**Returns:** *function*

Defined in: [src/foldables.ts:30](https://github.com/OctoD/tiinvo/blob/5dcae37/src/foldables.ts#L30)

___

### createfold

▸ `Const`**createfold**<Tagname\>(`lefthandpredicate`: [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tagname\>\>): *function*

Creates a fold function

#### Type parameters:

Name | Type |
------ | ------ |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`lefthandpredicate` | [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tagname\>\> |     |

**Returns:** *function*

Defined in: [src/foldables.ts:13](https://github.com/OctoD/tiinvo/blob/5dcae37/src/foldables.ts#L13)
