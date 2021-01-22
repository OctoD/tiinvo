[tiinvo](../README.md) / maybe

# Namespace: maybe

## Table of contents

### Interfaces

- [Just](../interfaces/maybe.just.md)
- [Nothing](../interfaces/maybe.nothing.md)

### Type aliases

- [JustFactory](maybe.md#justfactory)
- [JustTag](maybe.md#justtag)
- [Maybe](maybe.md#maybe)
- [MaybeTag](maybe.md#maybetag)
- [NothingFactory](maybe.md#nothingfactory)
- [NothingTag](maybe.md#nothingtag)

### Functions

- [expect](maybe.md#expect)
- [filter](maybe.md#filter)
- [filterOr](maybe.md#filteror)
- [fold](maybe.md#fold)
- [fromfn](maybe.md#fromfn)
- [frompredicate](maybe.md#frompredicate)
- [isJust](maybe.md#isjust)
- [isMaybe](maybe.md#ismaybe)
- [isNothing](maybe.md#isnothing)
- [just](maybe.md#just)
- [justfromfn](maybe.md#justfromfn)
- [map](maybe.md#map)
- [mapOr](maybe.md#mapor)
- [mapOrElse](maybe.md#maporelse)
- [maybe](maybe.md#maybe)
- [nothing](maybe.md#nothing)
- [unexpect](maybe.md#unexpect)
- [unwrap](maybe.md#unwrap)
- [unwrapOr](maybe.md#unwrapor)
- [unwrapOrElse](maybe.md#unwraporelse)

## Type aliases

### JustFactory

Ƭ **JustFactory**: <T\>(`value`: T) => [*Just*](../interfaces/maybe.just.md)<T\>

Defined in: [maybe.ts:46](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L46)

___

### JustTag

Ƭ **JustTag**: *typeof* JUSTTAG

Defined in: [maybe.ts:21](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L21)

___

### Maybe

Ƭ **Maybe**<T\>: [*Nothing*](../interfaces/maybe.nothing.md) | [*Just*](../interfaces/maybe.just.md)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [maybe.ts:37](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L37)

___

### MaybeTag

Ƭ **MaybeTag**: [*JustTag*](maybe.md#justtag) | [*NothingTag*](maybe.md#nothingtag)

Defined in: [maybe.ts:23](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L23)

___

### NothingFactory

Ƭ **NothingFactory**: () => [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [maybe.ts:42](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L42)

___

### NothingTag

Ƭ **NothingTag**: *typeof* NOTHINGTAG

Defined in: [maybe.ts:22](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L22)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [maybe.ts:112](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L112)

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

Defined in: [maybe.ts:127](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L127)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, *just*\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, *just*\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [maybe.ts:131](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L131)

___

### fold

▸ `Const`**fold**<T, U, R\>(`left`: (`arg`: T) => R, `right`: (`arg`: U) => R): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`left` | (`arg`: T) => R |
`right` | (`arg`: U) => R |

**Returns:** *function*

Defined in: [maybe.ts:140](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L140)

___

### fromfn

▸ `Const`**fromfn**<T\>(`arg`: T): [*Maybe*](maybe.md#maybe)<T\>

Creates a Maybe<K> factory from a function (arg: T) => K

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** [*Maybe*](maybe.md#maybe)<T\>

Defined in: [maybe.ts:101](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L101)

___

### frompredicate

▸ `Const`**frompredicate**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [maybe.ts:188](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L188)

___

### isJust

▸ `Const`**isJust**(`arg`: *unknown*): arg is Just<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Just<unknown\>

Defined in: [maybe.ts:66](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L66)

___

### isMaybe

▸ `Const`**isMaybe**(`arg`: *unknown*): arg is Maybe<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Maybe<unknown\>

Defined in: [maybe.ts:58](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L58)

___

### isNothing

▸ `Const`**isNothing**(`arg`: *unknown*): arg is Nothing

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Nothing

Defined in: [maybe.ts:71](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L71)

___

### just

▸ `Const`**just**<T\>(`value`: T): [*Tagged*](../README.md#tagged)<T, *just*\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Tagged*](../README.md#tagged)<T, *just*\>

Defined in: [maybe.ts:85](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L85)

___

### justfromfn

▸ `Const`**justfromfn**<FnIn, FnOut\>(`fn`: [*Fn1*](../README.md#fn1)<FnIn, FnOut\>): *function*

Creates a Just<K> factory from a function (arg: T) => K

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

Defined in: [maybe.ts:96](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L96)

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

Defined in: [maybe.ts:149](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L149)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [maybe.ts:154](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L154)

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

Defined in: [maybe.ts:159](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L159)

___

### maybe

▸ `Const`**maybe**<T\>(`arg?`: T): [*Nothing*](../interfaces/maybe.nothing.md) | [*Tagged*](../README.md#tagged)<T, *just*\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg?` | T |

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md) | [*Tagged*](../README.md#tagged)<T, *just*\>

Defined in: [maybe.ts:91](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L91)

___

### nothing

▸ `Const`**nothing**(): [*Nothing*](../interfaces/maybe.nothing.md)

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [maybe.ts:80](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L80)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [maybe.ts:117](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L117)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\> ? U : *never*

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, [*MaybeTag*](maybe.md#maybetag)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\> ? U : *never*

Defined in: [maybe.ts:168](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L168)

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

Defined in: [maybe.ts:176](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L176)

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

Defined in: [maybe.ts:181](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/maybe.ts#L181)
