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
- [fromfunction](option.md#fromfunction)
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

Defined in: [option.ts:51](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L51)

___

### Nonetag

Ƭ **Nonetag**: *typeof* NONETAG

Defined in: [option.ts:23](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L23)

___

### Option

Ƭ **Option**<T\>: [*None*](../interfaces/option.none.md) \| [*Some*](../interfaces/option.some.md)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [option.ts:46](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L46)

___

### OptionFactory

Ƭ **OptionFactory**: <T\>(`value`: T) => [*Option*](option.md#option)<T\>

Defined in: [option.ts:59](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L59)

___

### Optiontag

Ƭ **Optiontag**: [*Nonetag*](option.md#nonetag) \| [*Sometag*](option.md#sometag)

Defined in: [option.ts:31](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L31)

___

### SomeFactory

Ƭ **SomeFactory**: <T\>(`value`: T) => [*Some*](../interfaces/option.some.md)

Defined in: [option.ts:55](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L55)

___

### Sometag

Ƭ **Sometag**: *typeof* SOMETAG

Defined in: [option.ts:27](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L27)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [option.ts:97](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L97)

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

Defined in: [option.ts:139](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L139)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, *none* \| *some*\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, *none* \| *some*\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [option.ts:143](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L143)

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

Defined in: [option.ts:130](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L130)

___

### fromfunction

▸ `Const`**fromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Option<T>`

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

Defined in: [option.ts:220](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L220)

___

### isNone

▸ `Const`**isNone**(`arg`: *unknown*): arg is None

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is None

Defined in: [option.ts:76](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L76)

___

### isOption

▸ `Const`**isOption**(`arg`: *unknown*): arg is Option<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Option<unknown\>

Defined in: [option.ts:72](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L72)

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

Defined in: [option.ts:84](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L84)

___

### isSome

▸ `Const`**isSome**(`arg`: *unknown*): arg is Some<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Some<unknown\>

Defined in: [option.ts:80](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L80)

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

Defined in: [option.ts:152](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L152)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, *none* \| *some*\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, *none* \| *some*\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [option.ts:156](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L156)

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

Defined in: [option.ts:160](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L160)

___

### none

▸ `Const`**none**(): [*None*](../interfaces/option.none.md)

**Returns:** [*None*](../interfaces/option.none.md)

Defined in: [option.ts:110](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L110)

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

Defined in: [option.ts:124](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L124)

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

Defined in: [option.ts:115](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L115)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [option.ts:101](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L101)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *none* \| *some*\> ? U : *never*

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise throws

**`example`** 
```ts
import { option } from 'tiinvo';

const unwrapfn = option.unwrap;

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // throws error
```

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *none* \| *some*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *none* \| *some*\> ? U : *never*

Defined in: [option.ts:179](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L179)

___

### unwrapOr

▸ `Const`**unwrapOr**<U\>(`fallback`: U): *function*

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns fallback `T` value

**`example`** 
```ts
import { option } from 'tiinvo';

const unwrapfn = option.unwrapOr(0);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | U |

**Returns:** *function*

Defined in: [option.ts:197](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L197)

___

### unwrapOrElse

▸ `Const`**unwrapOrElse**<U\>(`fallback`: () => U): *function*

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns `Fallback<T>` value

**`example`** 
```ts
import { option } from 'tiinvo';

const elsefn = () => 0;
const unwrapfn = option.unwrapOrElse(elsefn);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | () => U |

**Returns:** *function*

Defined in: [option.ts:213](https://github.com/OctoD/tiinvo/blob/dab53f7/src/option.ts#L213)
