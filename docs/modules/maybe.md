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
- [justfromfunction](maybe.md#justfromfunction)
- [map](maybe.md#map)
- [mapOr](maybe.md#mapor)
- [mapOrElse](maybe.md#maporelse)
- [maybe](maybe.md#maybe)
- [maybefromfunction](maybe.md#maybefromfunction)
- [nothing](maybe.md#nothing)
- [unexpect](maybe.md#unexpect)
- [unwrap](maybe.md#unwrap)
- [unwrapOr](maybe.md#unwrapor)
- [unwrapOrElse](maybe.md#unwraporelse)

## Type aliases

### JustFactory

Ƭ **JustFactory**: <T\>(`value`: T) => [*Just*](../interfaces/maybe.just.md)<T\>

Defined in: [maybe.ts:47](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L47)

___

### JustTag

Ƭ **JustTag**: *typeof* JUSTTAG

Defined in: [maybe.ts:22](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L22)

___

### Maybe

Ƭ **Maybe**<T\>: [*Nothing*](../interfaces/maybe.nothing.md) | [*Just*](../interfaces/maybe.just.md)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [maybe.ts:38](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L38)

___

### MaybeTag

Ƭ **MaybeTag**: [*JustTag*](maybe.md#justtag) | [*NothingTag*](maybe.md#nothingtag)

Defined in: [maybe.ts:24](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L24)

___

### NothingFactory

Ƭ **NothingFactory**: () => [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [maybe.ts:43](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L43)

___

### NothingTag

Ƭ **NothingTag**: *typeof* NOTHINGTAG

Defined in: [maybe.ts:23](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L23)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [maybe.ts:113](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L113)

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

Defined in: [maybe.ts:128](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L128)

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

Defined in: [maybe.ts:132](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L132)

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

Defined in: [maybe.ts:141](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L141)

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

Defined in: [maybe.ts:102](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L102)

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

Defined in: [maybe.ts:189](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L189)

___

### isJust

▸ `Const`**isJust**(`arg`: *unknown*): arg is Just<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Just<unknown\>

Defined in: [maybe.ts:67](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L67)

___

### isMaybe

▸ `Const`**isMaybe**(`arg`: *unknown*): arg is Maybe<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Maybe<unknown\>

Defined in: [maybe.ts:59](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L59)

___

### isNothing

▸ `Const`**isNothing**(`arg`: *unknown*): arg is Nothing

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Nothing

Defined in: [maybe.ts:72](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L72)

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

Defined in: [maybe.ts:86](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L86)

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

Defined in: [maybe.ts:97](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L97)

___

### justfromfunction

▸ `Const`**justfromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Just<T>`

#### Type parameters:

Name | Type |
------ | ------ |
`Args` | *any*[] |
`K` | - |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...`args`: Args) => K |

**Returns:** *function*

Defined in: [maybe.ts:195](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L195)

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

Defined in: [maybe.ts:150](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L150)

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

Defined in: [maybe.ts:155](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L155)

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

Defined in: [maybe.ts:160](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L160)

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

Defined in: [maybe.ts:92](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L92)

___

### maybefromfunction

▸ `Const`**maybefromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Maybe<T>`

#### Type parameters:

Name | Type |
------ | ------ |
`Args` | *any*[] |
`K` | - |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...`args`: Args) => K |

**Returns:** *function*

Defined in: [maybe.ts:200](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L200)

___

### nothing

▸ `Const`**nothing**(): [*Nothing*](../interfaces/maybe.nothing.md)

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [maybe.ts:81](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L81)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [maybe.ts:118](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L118)

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

Defined in: [maybe.ts:169](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L169)

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

Defined in: [maybe.ts:177](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L177)

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

Defined in: [maybe.ts:182](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/maybe.ts#L182)
