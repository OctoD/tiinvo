[tiinvo](../README.md) / option

# Namespace: option

## Table of contents

### Interfaces

- [None](../interfaces/option.none.md)
- [Some](../interfaces/option.some.md)

### Type aliases

- [NoneFactory](option.md#nonefactory)
- [Nonetag](option.md#nonetag)
- [Option](option.md#option)
- [OptionFactory](option.md#optionfactory)
- [Optiontag](option.md#optiontag)
- [SomeFactory](option.md#somefactory)
- [Sometag](option.md#sometag)

### Functions

- [expect](option.md#expect)
- [filter](option.md#filter)
- [filterOr](option.md#filteror)
- [fromfn](option.md#fromfn)
- [isNone](option.md#isnone)
- [isOption](option.md#isoption)
- [isOptionOf](option.md#isoptionof)
- [isSome](option.md#issome)
- [map](option.md#map)
- [mapOr](option.md#mapor)
- [mapOrElse](option.md#maporelse)
- [none](option.md#none)
- [option](option.md#option)
- [some](option.md#some)
- [unexpect](option.md#unexpect)
- [unwrap](option.md#unwrap)
- [unwrapOr](option.md#unwrapor)
- [unwrapOrElse](option.md#unwraporelse)

## Type aliases

### NoneFactory

Ƭ **NoneFactory**: () => [*None*](../interfaces/option.none.md)

Defined in: [option.ts:50](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L50)

___

### Nonetag

Ƭ **Nonetag**: *typeof* NONETAG

Defined in: [option.ts:22](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L22)

___

### Option

Ƭ **Option**<T\>: [*None*](../interfaces/option.none.md) | [*Some*](../interfaces/option.some.md)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [option.ts:45](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L45)

___

### OptionFactory

Ƭ **OptionFactory**: <T\>(`value`: T) => [*Option*](option.md#option)<T\>

Defined in: [option.ts:58](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L58)

___

### Optiontag

Ƭ **Optiontag**: [*Nonetag*](option.md#nonetag) | [*Sometag*](option.md#sometag)

Defined in: [option.ts:30](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L30)

___

### SomeFactory

Ƭ **SomeFactory**: <T\>(`value`: T) => [*Some*](../interfaces/option.some.md)

Defined in: [option.ts:54](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L54)

___

### Sometag

Ƭ **Sometag**: *typeof* SOMETAG

Defined in: [option.ts:26](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L26)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [option.ts:96](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L96)

___

### filter

▸ `Const`**filter**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [option.ts:138](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L138)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, *none* | *some*\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, *none* | *some*\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [option.ts:142](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L142)

___

### fromfn

▸ `Const`**fromfn**<FnIn, FnOut\>(`fn`: [*Fn1*](../README.md#fn1)<FnIn, FnOut\>): *function*

Creates a Option<K> factory from a function (arg: T) => K

#### Type parameters:

Name |
------ |
`FnIn` |
`FnOut` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*Fn1*](../README.md#fn1)<FnIn, FnOut\> |

**Returns:** *function*

Defined in: [option.ts:129](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L129)

___

### isNone

▸ `Const`**isNone**(`arg`: *unknown*): arg is None

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is None

Defined in: [option.ts:75](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L75)

___

### isOption

▸ `Const`**isOption**(`arg`: *unknown*): arg is Option<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Option<unknown\>

Defined in: [option.ts:71](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L71)

___

### isOptionOf

▸ `Const`**isOptionOf**<T\>(`typeguard`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<[*Option*](option.md#option)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`typeguard` | [*Typeguard*](../README.md#typeguard)<T\> |

**Returns:** [*Typeguard*](../README.md#typeguard)<[*Option*](option.md#option)<T\>\>

Defined in: [option.ts:83](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L83)

___

### isSome

▸ `Const`**isSome**(`arg`: *unknown*): arg is Some<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Some<unknown\>

Defined in: [option.ts:79](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L79)

___

### map

▸ `Const`**map**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [option.ts:151](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L151)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, *none* | *some*\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, *none* | *some*\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [option.ts:155](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L155)

___

### mapOrElse

▸ `Const`**mapOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | () => U |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [option.ts:159](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L159)

___

### none

▸ `Const`**none**(): [*None*](../interfaces/option.none.md)

**Returns:** [*None*](../interfaces/option.none.md)

Defined in: [option.ts:109](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L109)

___

### option

▸ `Const`**option**<T\>(`value`: T): [*Option*](option.md#option)<*NonNullable*<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Option*](option.md#option)<*NonNullable*<T\>\>

Defined in: [option.ts:123](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L123)

___

### some

▸ `Const`**some**<T\>(`value`: T): [*Some*](../interfaces/option.some.md)<*NonNullable*<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Some*](../interfaces/option.some.md)<*NonNullable*<T\>\>

Defined in: [option.ts:114](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L114)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [option.ts:100](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L100)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *none* | *some*\> ? U : *never*

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *none* | *some*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *none* | *some*\> ? U : *never*

Defined in: [option.ts:168](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L168)

___

### unwrapOr

▸ `Const`**unwrapOr**<U\>(`fallback`: U): *function*

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | U |

**Returns:** *function*

Defined in: [option.ts:176](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L176)

___

### unwrapOrElse

▸ `Const`**unwrapOrElse**<U\>(`fallback`: () => U): *function*

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | () => U |

**Returns:** *function*

Defined in: [option.ts:181](https://github.com/OctoD/tiinvo/blob/5042f60/src/option.ts#L181)
