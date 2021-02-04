[tiinvo](../README.md) / result

# Namespace: result

## Table of contents

### Interfaces

- [Err](../interfaces/result.err.md)

### Type aliases

- [ErrFactory](result.md#errfactory)
- [Errtag](result.md#errtag)
- [InferredResultFactory](result.md#inferredresultfactory)
- [Ok](result.md#ok)
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

Ƭ **ErrFactory**: (`message`: *string* \| Error) => [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:59](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L59)

___

### Errtag

Ƭ **Errtag**: *typeof* ERRTAG

Defined in: [result.ts:29](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L29)

___

### InferredResultFactory

Ƭ **InferredResultFactory**<T\>: (`arg`: T) => [*Result*](result.md#result)<T\>

#### Type parameters:

Name |
------ |
`T` |

Defined in: [result.ts:69](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L69)

___

### Ok

Ƭ **Ok**<T\>: T *extends* Error ? *never* : [*Tagged*](../README.md#tagged)<T, [*Oktag*](result.md#oktag)\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [result.ts:49](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L49)

___

### OkFactory

Ƭ **OkFactory**: <T\>(`arg`: T) => [*Ok*](result.md#ok)<T\>

Defined in: [result.ts:63](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L63)

___

### Oktag

Ƭ **Oktag**: *typeof* OKTAG

Defined in: [result.ts:34](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L34)

___

### Result

Ƭ **Result**<T\>: T *extends* Error ? [*Err*](../interfaces/result.err.md) : [*Ok*](result.md#ok)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [result.ts:54](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L54)

___

### ResultFactory

Ƭ **ResultFactory**: <T\>(`arg`: T) => [*Result*](result.md#result)<T\>

Defined in: [result.ts:67](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L67)

___

### ResultTag

Ƭ **ResultTag**: [*Errtag*](result.md#errtag) \| [*Oktag*](result.md#oktag)

Defined in: [result.ts:39](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L39)

## Functions

### err

▸ `Const`**err**(`message`: *string* \| Error): [*Err*](../interfaces/result.err.md)

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* \| Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:102](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L102)

___

### errfromfn

▸ `Const`**errfromfn**(`arg`: *string* \| Error): [*Err*](../interfaces/result.err.md)

Creates a Err<K> factory from a function (arg: T) => K

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* \| Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [result.ts:123](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L123)

___

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

Throws an error if `Result<T>` is `Err`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:147](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L147)

___

### filter

▸ `Const`**filter**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it will map the `Ok<T>` to
an `Err`.

**`example`** 

```ts
import { result, pipe } from 'tiinvo';

const iseven = (arg: number) => arg % 2 === 0;

const filterfn = pipe(
   result.result as result.InferredResultFactory<number>,
   result.filter(iseven),
   result.isOk
);

filterfn(4) // true
filterfn(3) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [result.ts:179](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L179)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*ResultTag*](result.md#resulttag)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it will return the fallback
`Result<T>`.

**`example`** 

```ts
import { result, pipe } from 'tiinvo';

const iseven = (arg: number) => arg % 2 === 0;

const filterfn = pipe(
   result.result as result.InferredResultFactory<number>,
   result.filterOr(result.ok(0), iseven),
   result.unwrap
);

filterfn(4) // 4
filterfn(3) // 0
```

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

Defined in: [result.ts:207](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L207)

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

Defined in: [result.ts:136](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L136)

___

### fromfunction

▸ `Const`**fromfunction**<Fn\>(`fn`: Fn): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Result<T>`

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | (...`args`: *any*[]) => *any* |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *function*

Defined in: [result.ts:354](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L354)

___

### isErr

▸ `Const`**isErr**(`arg`: *unknown*): arg is Err

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Err

Defined in: [result.ts:89](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L89)

___

### isOk

▸ `Const`**isOk**(`arg`: *unknown*): arg is Tagged<unknown, "ok"\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, "ok"\>

Defined in: [result.ts:93](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L93)

___

### isResult

▸ `Const`**isResult**(`arg`: *unknown*): arg is Tagged<unknown, "ok"\>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, "ok"\>

Defined in: [result.ts:82](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L82)

___

### map

▸ `Const`**map**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`

**`example`** 

```ts
import { result, pipe } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.map(double),
 result.unwrapOr(0)
);

handleerror(2) // 4
handleerror(1) // 0
```

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

Defined in: [result.ts:237](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L237)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise maps `Err` to `fallback`

**`example`** 

```ts
import { result, pipe } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOr(result.ok(0), double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

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

Defined in: [result.ts:263](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L263)

___

### mapOrElse

▸ `Const`**mapOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise calls `Fn` and maps `Err` to `ReturnValue<Fn>`

**`example`** 
```ts
import { result, pipe, fallback } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;
const elsefn = fallback(0);

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOrElse(elsefn, double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

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

Defined in: [result.ts:289](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L289)

___

### ok

▸ `Const`**ok**<T\>(`value`: T): [*Ok*](result.md#ok)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Ok*](result.md#ok)<T\>

Defined in: [result.ts:108](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L108)

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

Defined in: [result.ts:131](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L131)

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

Defined in: [result.ts:117](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L117)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

Throws an error if `Result<T>` is `Ok<T>`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [result.ts:151](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L151)

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

Defined in: [result.ts:313](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L313)

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

Defined in: [result.ts:331](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L331)

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

Defined in: [result.ts:347](https://github.com/OctoD/tiinvo/blob/16ea627/src/result.ts#L347)
