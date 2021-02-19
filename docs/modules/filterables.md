[tiinvo](../README.md) / filterables

# Namespace: filterables

## Table of contents

### Functions

- [createFilter](filterables.md#createfilter)
- [createFilterOr](filterables.md#createfilteror)

## Functions

### createFilter

▸ `Const`**createFilter**<Arg, Tagname\>(`typeguard`: [*Predicate*](predicate.md#predicate)<Arg\>, `factory`: [*TaggedFactory*](../README.md#taggedfactory)<Tagname\>, `failfactory`: <X\>(...`args`: *any*[]) => [*Tagged*](../README.md#tagged)<X, Tagname\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, Tagname\> |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Predicate*](predicate.md#predicate)<Arg\> |  |
`factory` | [*TaggedFactory*](../README.md#taggedfactory)<Tagname\> |  |
`failfactory` | <X\>(...`args`: *any*[]) => [*Tagged*](../README.md#tagged)<X, Tagname\> |     |

**Returns:** *function*

Defined in: [filterables.ts:13](https://github.com/OctoD/tiinvo/blob/65f10a8/src/filterables.ts#L13)

___

### createFilterOr

▸ `Const`**createFilterOr**<Arg, Tagname\>(`typeguard`: [*Predicate*](predicate.md#predicate)<Arg\>, `factory`: [*TaggedFactory*](../README.md#taggedfactory)<Tagname\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, Tagname\> |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Predicate*](predicate.md#predicate)<Arg\> |  |
`factory` | [*TaggedFactory*](../README.md#taggedfactory)<Tagname\> |     |

**Returns:** *function*

Defined in: [filterables.ts:35](https://github.com/OctoD/tiinvo/blob/65f10a8/src/filterables.ts#L35)
