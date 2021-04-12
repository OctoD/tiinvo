[tiinvo](../README.md) / unwrappables

# Namespace: unwrappables

## Table of contents

### Functions

- [createUnwrap](unwrappables.md#createunwrap)
- [createUnwrapOr](unwrappables.md#createunwrapor)
- [createUnwrapOrElse](unwrappables.md#createunwraporelse)

## Functions

### createUnwrap

▸ `Const`**createUnwrap**<Tag\>(`predicate`: [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\>, `erromessage`: *string*): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`Tag` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\> |  |
`erromessage` | *string* |     |

**Returns:** *function*

Defined in: [src/unwrappables.ts:12](https://github.com/OctoD/tiinvo/blob/6c664d2/src/unwrappables.ts#L12)

___

### createUnwrapOr

▸ `Const`**createUnwrapOr**<Tag\>(`predicate`: [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`Tag` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\> |     |

**Returns:** *function*

Defined in: [src/unwrappables.ts:26](https://github.com/OctoD/tiinvo/blob/6c664d2/src/unwrappables.ts#L26)

___

### createUnwrapOrElse

▸ `Const`**createUnwrapOrElse**<Tag\>(`predicate`: [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`Tag` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<[*Tagged*](../README.md#tagged)<*any*, Tag\>\> |     |

**Returns:** *function*

Defined in: [src/unwrappables.ts:37](https://github.com/OctoD/tiinvo/blob/6c664d2/src/unwrappables.ts#L37)
