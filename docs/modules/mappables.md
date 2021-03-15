[tiinvo](../README.md) / mappables

# Namespace: mappables

## Table of contents

### Type aliases

- [MapFn](mappables.md#mapfn)

### Functions

- [createMap](mappables.md#createmap)
- [createMapOr](mappables.md#createmapor)
- [createMapOrElse](mappables.md#createmaporelse)

## Type aliases

### MapFn

Ƭ **MapFn**<T, U\>: T *extends* *null* \| *undefined* ? () => U : (`arg`: T) => U

#### Type parameters:

Name |
------ |
`T` |
`U` |

Defined in: [src/mappables.ts:5](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mappables.ts#L5)

## Functions

### createMap

▸ `Const`**createMap**<K, Tagname\>(`predicate`: [*Predicate*](predicate.md#predicate)<K\>, `creator`: [*TaggedFactory*](../README.md#taggedfactory)<Tagname\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | [*Tagged*](../README.md#tagged)<*any*, Tagname\> |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<K\> |  |
`creator` | [*TaggedFactory*](../README.md#taggedfactory)<Tagname\> |     |

**Returns:** *function*

Defined in: [src/mappables.ts:15](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mappables.ts#L15)

___

### createMapOr

▸ `Const`**createMapOr**<K, Tagname\>(`predicate`: [*Predicate*](predicate.md#predicate)<K\>, `creator`: [*TaggedFactory*](../README.md#taggedfactory)<Tagname\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | [*Tagged*](../README.md#tagged)<*any*, Tagname\> |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<K\> |  |
`creator` | [*TaggedFactory*](../README.md#taggedfactory)<Tagname\> |     |

**Returns:** *function*

Defined in: [src/mappables.ts:34](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mappables.ts#L34)

___

### createMapOrElse

▸ `Const`**createMapOrElse**<K, Tagname\>(`predicate`: [*Predicate*](predicate.md#predicate)<K\>, `creator`: [*TaggedFactory*](../README.md#taggedfactory)<Tagname\>): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | [*Tagged*](../README.md#tagged)<*any*, Tagname\> |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<K\> |  |
`creator` | [*TaggedFactory*](../README.md#taggedfactory)<Tagname\> |     |

**Returns:** *function*

Defined in: [src/mappables.ts:53](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mappables.ts#L53)
