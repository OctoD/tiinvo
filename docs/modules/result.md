[tiinvo](../README.md) / result

# Namespace: result

## Table of contents

### Interfaces

- [Err](../interfaces/result.err.md)
- [Ok](../interfaces/result.ok.md)

### Type aliases

- [ErrFactory](result.md#errfactory)
- [Errtag](result.md#errtag)
- [OkFactory](result.md#okfactory)
- [Oktag](result.md#oktag)
- [Result](result.md#result)
- [ResultFactory](result.md#resultfactory)
- [ResultTag](result.md#resulttag)

### Functions

- [err](result.md#err)
- [errfromfn](result.md#errfromfn)
- [expect](result.md#expect)
- [filter](result.md#filter)
- [filterOr](result.md#filteror)
- [fromfn](result.md#fromfn)
- [isErr](result.md#iserr)
- [isOk](result.md#isok)
- [isResult](result.md#isresult)
- [map](result.md#map)
- [mapOr](result.md#mapor)
- [mapOrElse](result.md#maporelse)
- [ok](result.md#ok)
- [okfromfn](result.md#okfromfn)
- [result](result.md#result)
- [unexpect](result.md#unexpect)
- [unwrap](result.md#unwrap)
- [unwrapOr](result.md#unwrapor)
- [unwrapOrElse](result.md#unwraporelse)

## Type aliases

### ErrFactory

Ƭ **ErrFactory**: (`message`: *string* | Error) => [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:58](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L58)

___

### Errtag

Ƭ **Errtag**: *typeof* ERRTAG

Defined in: [result.ts:28](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L28)

___

### OkFactory

Ƭ **OkFactory**: <T\>(`arg`: T) => [*Ok*](../interfaces/result.ok.md)<T\>

Defined in: [result.ts:62](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L62)

___

### Oktag

Ƭ **Oktag**: *typeof* OKTAG

Defined in: [result.ts:33](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L33)

___

### Result

Ƭ **Result**<T\>: [*Ok*](../interfaces/result.ok.md)<T\> | [*Err*](../interfaces/result.err.md)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [result.ts:53](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L53)

___

### ResultFactory

Ƭ **ResultFactory**: <T\>(`arg`: T) => [*Result*](result.md#result)<T\>

Defined in: [result.ts:66](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L66)

___

### ResultTag

Ƭ **ResultTag**: [*Errtag*](result.md#errtag) | [*Oktag*](result.md#oktag)

Defined in: [result.ts:38](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L38)

## Functions

### err

▸ `Const`**err**(`message`: *string* | Error): [*Err*](../interfaces/result.err.md)

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* | Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:98](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L98)

___

### errfromfn

▸ `Const`**errfromfn**(`arg`: *string* | Error): [*Err*](../interfaces/result.err.md)

Creates a Err<K> factory from a function (arg: T) => K

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* | Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:119](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L119)

___

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:143](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L143)

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

Defined in: [result.ts:156](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L156)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*ResultTag*](result.md#resulttag)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, [*ResultTag*](result.md#resulttag)\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [result.ts:165](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L165)

___

### fromfn

▸ `Const`**fromfn**<T\>(`arg`: T): [*Result*](result.md#result)<T\>

Creates a Result<K> factory from a function (arg: T) => K

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** [*Result*](result.md#result)<T\>

Defined in: [result.ts:132](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L132)

___

### isErr

▸ `Const`**isErr**(`arg`: *unknown*): arg is Err

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Err

Defined in: [result.ts:85](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L85)

___

### isOk

▸ `Const`**isOk**(`arg`: *unknown*): arg is Ok<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Ok<unknown\>

Defined in: [result.ts:89](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L89)

___

### isResult

▸ `Const`**isResult**(`arg`: *unknown*): arg is Result<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Result<unknown\>

Defined in: [result.ts:79](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L79)

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

Defined in: [result.ts:177](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L177)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [result.ts:185](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L185)

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

Defined in: [result.ts:193](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L193)

___

### ok

▸ `Const`**ok**<T\>(`value`: T): [*Ok*](../interfaces/result.ok.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Ok*](../interfaces/result.ok.md)<T\>

Defined in: [result.ts:104](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L104)

___

### okfromfn

▸ `Const`**okfromfn**<FnIn, FnOut\>(`fn`: [*Fn1*](../README.md#fn1)<FnIn, FnOut\>): *function*

Creates a Ok<K> factory from a function (arg: T) => K

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

Defined in: [result.ts:127](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L127)

___

### result

▸ `Const`**result**<T\>(`value`: T): [*Result*](result.md#result)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Result*](result.md#result)<T\>

Defined in: [result.ts:113](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L113)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:147](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L147)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> ? U : *never*

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, [*ResultTag*](result.md#resulttag)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> ? U : *never*

Defined in: [result.ts:205](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L205)

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

Defined in: [result.ts:209](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L209)

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

Defined in: [result.ts:213](https://github.com/OctoD/tiinvo/blob/2b2bd76/src/result.ts#L213)
