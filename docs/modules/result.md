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
- [fromfunction](result.md#fromfunction)
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

Defined in: [result.ts:59](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L59)

___

### Errtag

Ƭ **Errtag**: *typeof* ERRTAG

Defined in: [result.ts:29](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L29)

___

### OkFactory

Ƭ **OkFactory**: <T\>(`arg`: T) => [*Ok*](../interfaces/result.ok.md)<T\>

Defined in: [result.ts:63](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L63)

___

### Oktag

Ƭ **Oktag**: *typeof* OKTAG

Defined in: [result.ts:34](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L34)

___

### Result

Ƭ **Result**<T\>: [*Ok*](../interfaces/result.ok.md)<T\> | [*Err*](../interfaces/result.err.md)

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [result.ts:54](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L54)

___

### ResultFactory

Ƭ **ResultFactory**: <T\>(`arg`: T) => [*Result*](result.md#result)<T\>

Defined in: [result.ts:67](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L67)

___

### ResultTag

Ƭ **ResultTag**: [*Errtag*](result.md#errtag) | [*Oktag*](result.md#oktag)

Defined in: [result.ts:39](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L39)

## Functions

### err

▸ `Const`**err**(`message`: *string* | Error): [*Err*](../interfaces/result.err.md)

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* | Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:99](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L99)

___

### errfromfn

▸ `Const`**errfromfn**(`arg`: *string* | Error): [*Err*](../interfaces/result.err.md)

Creates a Err<K> factory from a function (arg: T) => K

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* | Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:120](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L120)

___

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:144](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L144)

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

Defined in: [result.ts:157](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L157)

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

Defined in: [result.ts:166](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L166)

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

Defined in: [result.ts:133](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L133)

___

### fromfunction

▸ `Const`**fromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Result<T>`

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

Defined in: [result.ts:259](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L259)

___

### isErr

▸ `Const`**isErr**(`arg`: *unknown*): arg is Err

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Err

Defined in: [result.ts:86](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L86)

___

### isOk

▸ `Const`**isOk**(`arg`: *unknown*): arg is Ok<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Ok<unknown\>

Defined in: [result.ts:90](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L90)

___

### isResult

▸ `Const`**isResult**(`arg`: *unknown*): arg is Result<unknown\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Result<unknown\>

Defined in: [result.ts:80](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L80)

___

### map

▸ `Const`**map**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`

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

Defined in: [result.ts:178](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L178)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise maps `Err` to `fallback`

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

Defined in: [result.ts:186](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L186)

___

### mapOrElse

▸ `Const`**mapOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise calls `Fn` and maps `Err` to `ReturnValue<Fn>`

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

Defined in: [result.ts:194](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L194)

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

Defined in: [result.ts:105](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L105)

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

Defined in: [result.ts:128](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L128)

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

Defined in: [result.ts:114](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L114)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:148](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L148)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> ? U : *never*

Unwraps a `Result<T>` `value` or throws

**`example`** 
```ts
import { result, fallback } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrap;

unwrapfn(test1) // 10
unwrapfn(test2) // throws the error
```

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, [*ResultTag*](result.md#resulttag)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> ? U : *never*

Defined in: [result.ts:218](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L218)

___

### unwrapOr

▸ `Const`**unwrapOr**<U\>(`fallback`: U): *function*

Unwraps a `Result<T>` `value` or returns the `fallback` `value`

**`example`** 
```ts
import { result, fallback } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOr('error');

unwrapfn(test1) // 10
unwrapfn(test2) // 'error'
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

Defined in: [result.ts:236](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L236)

___

### unwrapOrElse

▸ `Const`**unwrapOrElse**<U\>(`fallback`: () => U): *function*

Unwraps a `Result<T>` `value` or returns the `fallback` function `value`

**`example`** 
```ts
import { result, fallback } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOrElse(fallback('error'));

unwrapfn(test1) // 10
unwrapfn(test2) // 'error'
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

Defined in: [result.ts:252](https://github.com/OctoD/tiinvo/blob/0d77ce7/src/result.ts#L252)
