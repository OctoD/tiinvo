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
- [isJustOf](maybe.md#isjustof)
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

Defined in: [src/maybe.ts:54](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L54)

___

### JustTag

Ƭ **JustTag**: *typeof* JUSTTAG

Defined in: [src/maybe.ts:29](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L29)

___

### Maybe

Ƭ **Maybe**<T\>: [*Nothing*](../interfaces/maybe.nothing.md) \| [*Just*](../interfaces/maybe.just.md)<T\>

It could be a truthy or falsy value

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [src/maybe.ts:45](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L45)

___

### MaybeTag

Ƭ **MaybeTag**: [*JustTag*](maybe.md#justtag) \| [*NothingTag*](maybe.md#nothingtag)

Defined in: [src/maybe.ts:31](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L31)

___

### NothingFactory

Ƭ **NothingFactory**: () => [*Nothing*](../interfaces/maybe.nothing.md)

Creates `Nothing`

Defined in: [src/maybe.ts:50](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L50)

___

### NothingTag

Ƭ **NothingTag**: *typeof* NOTHINGTAG

Defined in: [src/maybe.ts:30](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L30)

## Functions

### expect

▸ `Const`**expect**(`errormessage`: *string*): *function*

Throws if the tagged type is not `Just`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/maybe.ts:150](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L150)

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

Defined in: [src/maybe.ts:165](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L165)

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

Defined in: [src/maybe.ts:170](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L170)

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

Defined in: [src/maybe.ts:180](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L180)

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

Defined in: [src/maybe.ts:139](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L139)

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

Defined in: [src/maybe.ts:240](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L240)

___

### isJust

▸ `Const`**isJust**(`arg`: *unknown*): arg is Just<unknown\>

Checks if a type is `Just<unknown>`

**`since`** 2.0.0

**`example`** 
```ts
import { maybe } from 'tiinvo';

maybe.isJust(10)               // false
maybe.isJust(maybe.just(10))   // true
maybe.isJust(maybe.nothing())  // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Just<unknown\>

Defined in: [src/maybe.ts:84](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L84)

___

### isJustOf

▸ `Const`**isJustOf**<T\>(`type`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<[*Tagged*](../README.md#tagged)<T, *just*\>\>

Checks if a type is `Just<T>`

**`since`** 2.14.0

**`example`** 
```ts
import { maybe, isstring } from 'tiinvo';

const isjustStr = maybe.isJustOf(isstring);

isjustStr(10)                  // false
isjustStr(maybe.just(10))      // false
isjustStr(maybe.just('abc'))   // true
isjustStr(maybe.nothing())     // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`type` | [*Typeguard*](../README.md#typeguard)<T\> |

**Returns:** [*Typeguard*](../README.md#typeguard)<[*Tagged*](../README.md#tagged)<T, *just*\>\>

Defined in: [src/maybe.ts:102](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L102)

___

### isMaybe

▸ `Const`**isMaybe**(`arg`: *unknown*): arg is Maybe<unknown\>

Checks if a type is `Maybe<unknown>`

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Maybe<unknown\>

Defined in: [src/maybe.ts:66](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L66)

___

### isNothing

▸ `Const`**isNothing**(`arg`: *unknown*): arg is Nothing

Checks if a type if `Nothing`

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Nothing

Defined in: [src/maybe.ts:107](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L107)

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

Defined in: [src/maybe.ts:122](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L122)

___

### justfromfn

▸ `Const`**justfromfn**<FnIn, FnOut\>(`fn`: [*FnUnary*](../README.md#fnunary)<FnIn, FnOut\>): *function*

Creates a Just<K> factory from a function (arg: T) => K

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

Defined in: [src/maybe.ts:134](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L134)

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

Defined in: [src/maybe.ts:259](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L259)

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

Defined in: [src/maybe.ts:189](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L189)

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

Defined in: [src/maybe.ts:194](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L194)

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

Defined in: [src/maybe.ts:200](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L200)

___

### maybe

▸ `Const`**maybe**<T\>(`arg?`: T): [*Nothing*](../interfaces/maybe.nothing.md) \| [*Tagged*](../README.md#tagged)<T, *just*\>

Creates a `Maybe<T>` tagged type. If the value is truthy, it
will be a `Just<T>`, otherwise it will be `Nothing`

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg?` | T |

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md) \| [*Tagged*](../README.md#tagged)<T, *just*\>

Defined in: [src/maybe.ts:129](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L129)

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

Defined in: [src/maybe.ts:277](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L277)

___

### nothing

▸ `Const`**nothing**(): [*Nothing*](../interfaces/maybe.nothing.md)

Creates a `Nothing`

**Returns:** [*Nothing*](../interfaces/maybe.nothing.md)

Defined in: [src/maybe.ts:116](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L116)

___

### unexpect

▸ `Const`**unexpect**(`errormessage`: *string*): *function*

Throws if the tagged type is not `Nothing`

#### Parameters:

Name | Type |
------ | ------ |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [src/maybe.ts:155](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L155)

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

Defined in: [src/maybe.ts:209](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L209)

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

Defined in: [src/maybe.ts:217](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L217)

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

Defined in: [src/maybe.ts:222](https://github.com/OctoD/tiinvo/blob/6c664d2/src/maybe.ts#L222)
