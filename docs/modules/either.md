[tiinvo](../README.md) / either

# Namespace: either

## Table of contents

### Interfaces

- [Left](../interfaces/either.left.md)
- [Right](../interfaces/either.right.md)

### Type aliases

- [Either](either.md#either)
- [EitherTagname](either.md#eithertagname)
- [LeftTagname](either.md#lefttagname)
- [RightTagname](either.md#righttagname)

### Functions

- [filterLeft](either.md#filterleft)
- [filterLeftOr](either.md#filterleftor)
- [filterRight](either.md#filterright)
- [filterRightOr](either.md#filterrightor)
- [fold](either.md#fold)
- [fromfunction](either.md#fromfunction)
- [frompredicate](either.md#frompredicate)
- [isEither](either.md#iseither)
- [isEitherOf](either.md#iseitherof)
- [isLeft](either.md#isleft)
- [isLeftOf](either.md#isleftof)
- [isRight](either.md#isright)
- [isRightOf](either.md#isrightof)
- [left](either.md#left)
- [leftfromfn](either.md#leftfromfn)
- [leftfromfunction](either.md#leftfromfunction)
- [mapLeft](either.md#mapleft)
- [mapLeftOr](either.md#mapleftor)
- [mapLeftOrElse](either.md#mapleftorelse)
- [mapRight](either.md#mapright)
- [mapRightOr](either.md#maprightor)
- [mapRigthOrElse](either.md#maprigthorelse)
- [right](either.md#right)
- [rightfromfn](either.md#rightfromfn)
- [rightfromfunction](either.md#rightfromfunction)
- [swap](either.md#swap)
- [unwrapEither](either.md#unwrapeither)
- [unwrapLeft](either.md#unwrapleft)
- [unwrapLeftOr](either.md#unwrapleftor)
- [unwrapLeftOrElse](either.md#unwrapleftorelse)
- [unwrapRight](either.md#unwrapright)
- [unwrapRightOr](either.md#unwraprightor)
- [unwrapRightOrElse](either.md#unwraprightorelse)

## Type aliases

### Either

Ƭ **Either**<TLeft, TRight\>: [*Left*](../interfaces/either.left.md)<TLeft\> \| [*Right*](../interfaces/either.right.md)<TRight\>

Represents a value of one of two possible types (a disjoint union).

#### Type parameters:

Name | Default |
------ | ------ |
`TLeft` | *unknown* |
`TRight` | *unknown* |

Defined in: [src/either.ts:46](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L46)

___

### EitherTagname

Ƭ **EitherTagname**: [*LeftTagname*](either.md#lefttagname) \| [*RightTagname*](either.md#righttagname)

Left or Right tagtypes

Defined in: [src/either.ts:32](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L32)

___

### LeftTagname

Ƭ **LeftTagname**: *typeof* LEFTTAG

Left tagtype

Defined in: [src/either.ts:24](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L24)

___

### RightTagname

Ƭ **RightTagname**: *typeof* RIGHTTAG

Right tagtype

Defined in: [src/either.ts:28](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L28)

## Functions

### filterLeft

▸ `Const`**filterLeft**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters only Left

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [src/either.ts:168](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L168)

___

### filterLeftOr

▸ `Const`**filterLeftOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters Left Or

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [src/either.ts:177](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L177)

___

### filterRight

▸ `Const`**filterRight**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters Right

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [src/either.ts:182](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L182)

___

### filterRightOr

▸ `Const`**filterRightOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Filters Right or

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\> |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [src/either.ts:191](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L191)

___

### fold

▸ `Const`**fold**<T, U, R\>(`left`: (`arg`: T) => R, `right`: (`arg`: U) => R): *function*

Folds current Either

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

Defined in: [src/either.ts:203](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L203)

___

### fromfunction

▸ `Const`**fromfunction**<Fn\>(`fn`: Fn, `predicate`: [*Predicate*](predicate.md#predicate)<*ReturnType*<Fn\>\>): *function*

Wraps a function `(... args: any[]) => T` and if the given Predicate<T> is satisfied, returns Right<T>. Otherwise returns Left<T>

**`since`** 2.13.0

**`example`** 

```ts
import { either, num } from 'tiinvo';

const fn = either.fromfunction(num.usubtract(1), num.iseven);

fn(10) // Left<9>
fn(11) // Right<10>
```

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](../README.md#fnbase) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | Fn |
`predicate` | [*Predicate*](predicate.md#predicate)<*ReturnType*<Fn\>\> |

**Returns:** *function*

Defined in: [src/either.ts:394](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L394)

___

### frompredicate

▸ `Const`**frompredicate**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Creates a new either from a given predicate.

**`example`** 
```ts
import { either, num } from 'tiinvo';

either.frompredicate(num.iseven)(20) // Right<20>
either.frompredicate(num.iseven)(11) // Left<11>
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |     |

**Returns:** *function*

Defined in: [src/either.ts:363](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L363)

___

### isEither

▸ `Const`**isEither**(`arg`: *unknown*): arg is Either<unknown, unknown\>

Checks if a variable is Either

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Either<unknown, unknown\>

Defined in: [src/either.ts:61](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L61)

___

### isEitherOf

▸ `Const`**isEitherOf**<T\>(`typeguard`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<*unknown*\>

Checks if a variable is Either with a value of a given type

**`example`** 
```ts
const test1 = left(10);
const test2 = right(10);
const iseitherofstring = isEitherOf(isstring);
const iseitherofnumber = isEitherOf(isnumber);

iseitherofstring(test) // false
iseitherofnumber(test) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](../README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](../README.md#typeguard)<*unknown*\>

Defined in: [src/either.ts:90](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L90)

___

### isLeft

▸ `Const`**isLeft**(`arg`: *unknown*): arg is Left<unknown\>

Checks if a variable is Left

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Left<unknown\>

Defined in: [src/either.ts:66](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L66)

___

### isLeftOf

▸ `Const`**isLeftOf**<T\>(`typeguard`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<*unknown*\>

Checks if a variable is Left with a value of a given type

**`example`** 
```ts
const test1 = left(10);
const test2 = right(10);
const isleftofstring = isLeftOf(isstring);
const isleftofnumber = isLeftOf(isnumber);

isleftofstring(test1) // false
isleftofstring(test2) // false
isleftofnumber(test1) // true
isleftofnumber(test2) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](../README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](../README.md#typeguard)<*unknown*\>

Defined in: [src/either.ts:112](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L112)

___

### isRight

▸ `Const`**isRight**(`arg`: *unknown*): arg is Right<unknown\>

Checks if a variable is Right

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Right<unknown\>

Defined in: [src/either.ts:71](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L71)

___

### isRightOf

▸ `Const`**isRightOf**<T\>(`typeguard`: [*Typeguard*](../README.md#typeguard)<T\>): [*Typeguard*](../README.md#typeguard)<*unknown*\>

Checks if a variable is Right with a value of a given type

**`example`** 
```ts
const test1 = left(10);
const test2 = right(10);
const isrightofstring = isRightOf(isstring);
const isrightofnumber = isRightOf(isnumber);

isrightofstring(test1) // false
isrightofstring(test2) // false
isrightofnumber(test1) // false
isrightofnumber(test2) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](../README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](../README.md#typeguard)<*unknown*\>

Defined in: [src/either.ts:134](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L134)

___

### left

▸ `Const`**left**<T\>(`value`: T): [*Left*](../interfaces/either.left.md)<T\>

Creates a Left<T> type

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Left*](../interfaces/either.left.md)<T\>

Defined in: [src/either.ts:144](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L144)

___

### leftfromfn

▸ `Const`**leftfromfn**<FnIn, FnOut\>(`fn`: [*FnUnary*](../README.md#fnunary)<FnIn, FnOut\>): *function*

Creates a Left<K> factory from a function (arg: T) => K

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

Defined in: [src/either.ts:154](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L154)

___

### leftfromfunction

▸ `Const`**leftfromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Left<T>`

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

Defined in: [src/either.ts:369](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L369)

___

### mapLeft

▸ `Const`**mapLeft**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Left only

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

Defined in: [src/either.ts:217](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L217)

___

### mapLeftOr

▸ `Const`**mapLeftOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Left or

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [src/either.ts:227](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L227)

___

### mapLeftOrElse

▸ `Const`**mapLeftOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Left or else

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

Defined in: [src/either.ts:237](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L237)

___

### mapRight

▸ `Const`**mapRight**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Right only

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

Defined in: [src/either.ts:222](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L222)

___

### mapRightOr

▸ `Const`**mapRightOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Right or

#### Type parameters:

Name |
------ |
`T` |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`fallback` | [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\> |
`fn` | [*MapFn*](mappables.md#mapfn)<T, U\> |

**Returns:** *function*

Defined in: [src/either.ts:232](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L232)

___

### mapRigthOrElse

▸ `Const`**mapRigthOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

Maps Right or else

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

Defined in: [src/either.ts:245](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L245)

___

### right

▸ `Const`**right**<T\>(`value`: T): [*Right*](../interfaces/either.right.md)<T\>

Creates a Right<T> type

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** [*Right*](../interfaces/either.right.md)<T\>

Defined in: [src/either.ts:149](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L149)

___

### rightfromfn

▸ `Const`**rightfromfn**<FnIn, FnOut\>(`fn`: [*FnUnary*](../README.md#fnunary)<FnIn, FnOut\>): *function*

Creates a Right<K> factory from a function (arg: T) => K

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

Defined in: [src/either.ts:159](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L159)

___

### rightfromfunction

▸ `Const`**rightfromfunction**<Args, K\>(`fn`: (...`args`: Args) => K): *function*

Wraps a function `(... args: any[]) => T`, and once called it returns a `Right<T>`

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

Defined in: [src/either.ts:374](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L374)

___

### swap

▸ `Const`**swap**<T\>(`arg`: T): T[*__tag*] *extends* *left* ? [*Tagged*](../README.md#tagged)<T[*value*], *right*\> : [*Tagged*](../README.md#tagged)<T[*value*], *left*\>

Swaps Left to Right and Right to Left

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Tagged*](../README.md#tagged)<*any*, [*EitherTagname*](either.md#eithertagname)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** T[*__tag*] *extends* *left* ? [*Tagged*](../README.md#tagged)<T[*value*], *right*\> : [*Tagged*](../README.md#tagged)<T[*value*], *left*\>

Defined in: [src/either.ts:208](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L208)

___

### unwrapEither

▸ `Const`**unwrapEither**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Unwraps Either Left or Right

**`example`** 
unwrapEither(left(10)) // 10
unwrapEither(right(1)) // 1

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *string*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Defined in: [src/either.ts:259](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L259)

___

### unwrapLeft

▸ `Const`**unwrapLeft**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Unwraps value if Left or throws

**`example`** 

```ts
import { either } from 'tiinvo';

either.unwrapLeft(left(10)) // 10
either.unwrapLeft(right(1)) // throws
```

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *string*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Defined in: [src/either.ts:273](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L273)

___

### unwrapLeftOr

▸ `Const`**unwrapLeftOr**<U\>(`fallback`: U): *function*

Unwraps Left value if Left or returns the fallback

**`example`** 
```ts
import { either } from 'tiinvo';

either.unwrapLeftOr(20)(left(10)) // 10
either.unwrapLeftOr(20)(right(1)) // 20
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

Defined in: [src/either.ts:306](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L306)

___

### unwrapLeftOrElse

▸ `Const`**unwrapLeftOrElse**<U\>(`fallback`: () => U): *function*

Unwraps Left value if Left or returns the fallback

**`example`** 
```ts
import { either } from 'tiinvo';

either.unwrapLeftOrElse(fallback(20))(left(10)) // 10
either.unwrapLeftOrElse(fallback(30))(right(1)) // 30
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

Defined in: [src/either.ts:332](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L332)

___

### unwrapRight

▸ `Const`**unwrapRight**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Unwraps value if Right or throws

**`example`** 
```ts
import { either } from 'tiinvo';

either.unwrapRight(left(10)) // throws
either.unwrapRight(right(1)) // 1

```

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *string*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Defined in: [src/either.ts:290](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L290)

___

### unwrapRightOr

▸ `Const`**unwrapRightOr**<U\>(`fallback`: U): *function*

Unwraps Right value if Right or returns the fallback

**`example`** 
```ts
import { either } from 'tiinvo';

either.unwrapRightOr(20)(left(10)) // 20
either.unwrapRightOr(20)(right(1)) // 1
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

Defined in: [src/either.ts:319](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L319)

___

### unwrapRightOrElse

▸ `Const`**unwrapRightOrElse**<U\>(`fallback`: () => U): *function*

Unwraps Right value if Right or returns the fallback

**`example`** 
```ts
import { either } from 'tiinvo';

either.unwrapRightOrElse(fallback(20))(left(10)) // 20
either.unwrapRightOrElse(fallback(30))(right(1)) // 1
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

Defined in: [src/either.ts:345](https://github.com/OctoD/tiinvo/blob/6c664d2/src/either.ts#L345)
