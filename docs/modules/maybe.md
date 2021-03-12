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

Creates `Just`

Defined in: [src/maybe.ts:53](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L53)

___

### JustTag

Ƭ **JustTag**: *typeof* JUSTTAG

Defined in: [src/maybe.ts:28](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L28)

___

### Maybe

Ƭ **Maybe**<T\>: [*Nothing*](../interfaces/maybe.nothing.md) \| [*Just*](../interfaces/maybe.just.md)<T\>

It could be a truthy or falsy value

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [src/maybe.ts:44](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L44)

___

### MaybeTag

Ƭ **MaybeTag**: [*JustTag*](maybe.md#justtag) \| [*NothingTag*](maybe.md#nothingtag)

Defined in: [src/maybe.ts:30](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L30)

___

### NothingFactory

Ƭ **NothingFactory**: () => [*Nothing*](../interfaces/maybe.nothing.md)

Creates `Nothing`

Defined in: [src/maybe.ts:49](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L49)

___

### NothingTag

Ƭ **NothingTag**: *typeof* NOTHINGTAG

Defined in: [src/maybe.ts:29](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L29)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

Throws if the tagged type is not `Just`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/maybe.ts:121](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L121)

___

### filter

▸ `Const`**filter**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

If the predicate is satisfied, returns previous `Just<T>`, otherwise
returns `Nothing`

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [src/maybe.ts:136](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L136)

___

### filterOr

▸ `Const`**filterOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, *just*\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

If the predicate is satisfied, returns previous `Just<T>`, otherwise
returns the given fallback `Just<T>`

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

Defined in: [src/maybe.ts:141](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L141)

___

### fold

▸ `Const`**fold**<T, U, R\>(`left`: (`arg`: T) => R, `right`: (`arg`: U) => R): *function*

Calls and returns the `left` function if the value is `Nothing`, otherwise
calls and returns the `right` function if the value is `Just<T>`.

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

Defined in: [src/maybe.ts:151](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L151)

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

Defined in: [src/maybe.ts:110](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L110)

___

### frompredicate

▸ `Const`**frompredicate**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Creates a `Maybe<T>` from a function.

**`example`** 
```ts
import { maybe } from 'tiinvo';

const isgreaterthan10 = (value: number) => value > 10;

maybe.frompredicate(isgreaterthan10)(11); // Just<number>
maybe.frompredicate(isgreaterthan10)(9);  // Nothing

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

Defined in: [src/maybe.ts:211](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L211)

___

### isJust

▸ `Const`**isJust**(`arg`: *unknown*): arg is Just<unknown\>

Checks if a type is `Just<unknown>`

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Just<unknown\>

Defined in: [src/maybe.ts:73](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L73)

___

### isMaybe

▸ `Const`**isMaybe**(`arg`: *unknown*): arg is Maybe<unknown\>

Checks if a type is `Maybe<unknown>`

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Maybe<unknown\>

Defined in: [src/maybe.ts:65](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L65)

___

### isNothing

▸ `Const`**isNothing**(`arg`: *unknown*): arg is Nothing

Checks if a type if `Nothing`

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Nothing

Defined in: [src/maybe.ts:78](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L78)

___

### just

▸ `Const`**just**<T\>(`value`: T): [*Tagged*](../README.md#tagged)<T, *just*\>

Creates a `Just<T>`.
Throws an error if the given value is falsy.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Tagged*](../README.md#tagged)<T, *just*\>

Defined in: [src/maybe.ts:93](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L93)

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

Defined in: [src/maybe.ts:105](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L105)

___

### justfromfunction

▸ `Const`**justfromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Just<T>`

**`example`** 

```ts
import { maybe } from 'tiinvo';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.justfromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('baz') // Throws error
```

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

Defined in: [src/maybe.ts:230](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L230)

___

### map

▸ `Const`**map**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a `T` to `K` if the value is `Just<T>`

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

Defined in: [src/maybe.ts:160](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L160)

___

### mapOr

▸ `Const`**mapOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a `T` to `K` if the value is `Just<T>`, or maps it to the given fallback

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

Defined in: [src/maybe.ts:165](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L165)

___

### mapOrElse

▸ `Const`**mapOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps a `T` to `K` if the value is `Just<T>`, or calls the fallback function and maps to the
returned value

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

Defined in: [src/maybe.ts:171](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L171)

___

### maybe

▸ `Const`**maybe**<T\>(`arg?`: T): [*Nothing*](../interfaces/maybe.nothing.md) \| [*Tagged*](../README.md#tagged)<T, *just*\>

Creates a `Maybe<T>` tagged type. If the value is truthy, it
creates a `Just<T>`, otherwise creates `Nothing`

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg?` | T |

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md) \| [*Tagged*](../README.md#tagged)<T, *just*\>

Defined in: [src/maybe.ts:100](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L100)

___

### maybefromfunction

▸ `Const`**maybefromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Maybe<T>`

**`example`** 

```ts
import { maybe } from 'tiinvo';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.maybefromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('baz') // Nothing
```

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

Defined in: [src/maybe.ts:248](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L248)

___

### nothing

▸ `Const`**nothing**(): [*Nothing*](../interfaces/maybe.nothing.md)

Creates a `Nothing`

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [src/maybe.ts:87](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L87)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

Throws if the tagged type is not `Nothing`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/maybe.ts:126](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L126)

___

### unwrap

▸ `Const`**unwrap**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\> ? U : *never*

Unwraps a `Just<T>` value `T`. Otherwise throws.

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, [*MaybeTag*](maybe.md#maybetag)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, [*MaybeTag*](maybe.md#maybetag)\> ? U : *never*

Defined in: [src/maybe.ts:180](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L180)

___

### unwrapOr

▸ `Const`**unwrapOr**<U\>(`fallback`: U): *function*

Unwraps a `Just<T>` value `T`. Otherwise returns the `or` value.

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | U |

**Returns:** *function*

Defined in: [src/maybe.ts:188](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L188)

___

### unwrapOrElse

▸ `Const`**unwrapOrElse**<U\>(`fallback`: () => U): *function*

Unwraps a `Just<T>` value `T`. Otherwise calls the `or` function and returns it's return value.

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | () => U |

**Returns:** *function*

Defined in: [src/maybe.ts:193](https://github.com/OctoD/tiinvo/blob/ad52648/src/maybe.ts#L193)
