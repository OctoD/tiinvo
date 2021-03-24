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
- [isOkOf](result.md#isokof)
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

Defined in: [src/result.ts:58](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L58)

___

### Errtag

Ƭ **Errtag**: *typeof* ERRTAG

Defined in: [src/result.ts:28](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L28)

___

### InferredResultFactory

Ƭ **InferredResultFactory**<T\>: (`arg`: T) => [*Result*](result.md#result)<T\>

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/result.ts:68](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L68)

___

### Ok

Ƭ **Ok**<T\>: T *extends* Error ? *never* : [*Tagged*](../README.md#tagged)<T, [*Oktag*](result.md#oktag)\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [src/result.ts:48](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L48)

___

### OkFactory

Ƭ **OkFactory**: <T\>(`arg`: T) => [*Ok*](result.md#ok)<T\>

Defined in: [src/result.ts:62](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L62)

___

### Oktag

Ƭ **Oktag**: *typeof* OKTAG

Defined in: [src/result.ts:33](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L33)

___

### Result

Ƭ **Result**<T\>: T *extends* Error ? [*Err*](../interfaces/result.err.md) : [*Ok*](result.md#ok)<T\>

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [src/result.ts:53](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L53)

___

### ResultFactory

Ƭ **ResultFactory**: <T\>(`arg`: T) => [*Result*](result.md#result)<T\>

Defined in: [src/result.ts:66](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L66)

___

### ResultTag

Ƭ **ResultTag**: [*Errtag*](result.md#errtag) \| [*Oktag*](result.md#oktag)

Defined in: [src/result.ts:38](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L38)

## Functions

### err

▸ `Const`**err**(`message`: *string* \| Error): [*Err*](../interfaces/result.err.md)

Creates a `Err` type

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* \| Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [src/result.ts:136](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L136)

___

### errfromfn

▸ `Const`**errfromfn**(`arg`: *string* \| Error): [*Err*](../interfaces/result.err.md)

Creates a Err<K> factory from a function (arg: T) => K

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *string* \| Error |

**Returns:** [*Err*](../interfaces/result.err.md)

Defined in: [src/result.ts:161](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L161)

___

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

Throws an error if `Result<T>` is `Err`

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/result.ts:188](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L188)

___

### filter

▸ `Const`**filter**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it will map the `Ok<T>` to
an `Err`.

**`since`** 2.0.0

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

Defined in: [src/result.ts:222](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L222)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*ResultTag*](result.md#resulttag)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it will return the fallback
`Result<T>`.

**`since`** 2.0.0

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

Defined in: [src/result.ts:251](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L251)

___

### fromfn

▸ `Const`**fromfn**<T\>(`arg`: T): [*Result*](result.md#result)<T\>

Creates a Result<K> factory from a function (arg: T) => K

**`since`** 2.0.0

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** [*Result*](result.md#result)<T\>

Defined in: [src/result.ts:176](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L176)

___

### fromfunction

▸ `Const`**fromfunction**<Fn\>(`fn`: Fn): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Result<T>`

**`since`** 2.0.0

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | (...`args`: *any*[]) => *any* |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *function*

Defined in: [src/result.ts:409](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L409)

___

### isErr

▸ `Const`**isErr**(`arg`: *unknown*): arg is Err

Returns true if a variable is `Err`

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Err

Defined in: [src/result.ts:99](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L99)

___

### isOk

▸ `Const`**isOk**(`arg`: *unknown*): arg is Tagged<unknown, "ok"\>

Returns true if a variable is `Ok`

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, "ok"\>

Defined in: [src/result.ts:104](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L104)

___

### isOkOf

▸ `Const`**isOkOf**<T\>(`type`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<[*Ok*](result.md#ok)<T\>\>

Checks if a value is `Ok<T>`.

**`since`** 2.14.0

**`example`** 

```ts
import { result, isnumber } from 'tiinvo';

const isnumok = result.isOkOf(isnumber);

isnumok(result.err(`nope`))  // false
isnumok(result.ok(`nope2`))  // false
isnumok(result.ok(1000000))  // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`type` | [*Typeguard*](../README.md#typeguard)<T\> |

**Returns:** [*Typeguard*](../README.md#typeguard)<[*Ok*](result.md#ok)<T\>\>

Defined in: [src/result.ts:126](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L126)

___

### isResult

▸ `Const`**isResult**(`arg`: *unknown*): arg is Tagged<unknown, "ok"\>

Returns true if something is `Result<unknown>`;

**`since`** 2.0.0

**`example`** 

```ts
import { result } from 'tiinvo';

result.isResult(0)                   // false
result.isResult(result.ok(10))       // true
result.isResult(result.err('foo'))   // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, "ok"\>

Defined in: [src/result.ts:91](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L91)

___

### map

▸ `Const`**map**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`

**`since`** 2.0.0

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

Defined in: [src/result.ts:282](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L282)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise maps `Err` to `fallback`

**`since`** 2.0.0

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

Defined in: [src/result.ts:309](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L309)

___

### mapOrElse

▸ `Const`**mapOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a value `T` if `Ok`, otherwise calls `Fn` and maps `Err` to `ReturnValue<Fn>`

**`since`** 2.0.0

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

Defined in: [src/result.ts:337](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L337)

___

### ok

▸ `Const`**ok**<T\>(`value`: T): [*Ok*](result.md#ok)<T\>

Creates a `Ok<T>` type

**`since`** 2.0.0

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Ok*](result.md#ok)<T\>

Defined in: [src/result.ts:143](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L143)

___

### okfromfn

▸ `Const`**okfromfn**<FnIn, FnOut\>(`fn`: [*FnUnary*](../README.md#fnunary)<FnIn, FnOut\>): *function*

Creates a Ok<K> factory from a function (arg: T) => K

**`since`** 2.0.0

#### Type parameters:

Name |
------ |
`FnIn` |
`FnOut` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*FnUnary*](../README.md#fnunary)<FnIn, FnOut\> |

**Returns:** *function*

Defined in: [src/result.ts:170](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L170)

___

### result

▸ `Const`**result**<T\>(`value`: T): [*Result*](result.md#result)<T\>

Creates a `Result<T>` type. If the given value is an instance of `Error`, it will
return `Err`, otherwise will return `Ok<T>`

**`since`** 2.0.0

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Result*](result.md#result)<T\>

Defined in: [src/result.ts:154](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L154)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

Throws an error if `Result<T>` is `Ok<T>`

**`since`** 2.0.0

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/result.ts:193](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L193)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, [*ResultTag*](result.md#resulttag)\> ? U : *never*

Unwraps a `Result<T>` `value` or throws

**`since`** 2.0.0

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

Defined in: [src/result.ts:363](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L363)

___

### unwrapOr

▸ `Const`**unwrapOr**<U\>(`fallback`: U): *function*

Unwraps a `Result<T>` `value` or returns the `fallback` `value`

**`since`** 2.0.0

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

Defined in: [src/result.ts:383](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L383)

___

### unwrapOrElse

▸ `Const`**unwrapOrElse**<U\>(`fallback`: () => U): *function*

Unwraps a `Result<T>` `value` or returns the `fallback` function `value`

**`since`** 2.0.0

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

Defined in: [src/result.ts:401](https://github.com/OctoD/tiinvo/blob/5dcae37/src/result.ts#L401)
