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

Defined in: [either.ts:45](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L45)

___

### EitherTagname

Ƭ **EitherTagname**: [*LeftTagname*](either.md#lefttagname) \| [*RightTagname*](either.md#righttagname)

Left or Right tagtypes

Defined in: [either.ts:31](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L31)

___

### LeftTagname

Ƭ **LeftTagname**: *typeof* LEFTTAG

Left tagtype

Defined in: [either.ts:23](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L23)

___

### RightTagname

Ƭ **RightTagname**: *typeof* RIGHTTAG

Right tagtype

Defined in: [either.ts:27](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L27)

## Functions

### filterLeft

▸ `Const`**filterLeft**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [either.ts:167](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L167)

___

### filterLeftOr

▸ `Const`**filterLeftOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

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

Defined in: [either.ts:176](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L176)

___

### filterRight

▸ `Const`**filterRight**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** *function*

Defined in: [either.ts:181](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L181)

___

### filterRightOr

▸ `Const`**filterRightOr**<T\>(`fallback`: [*Tagged*](../README.md#tagged)<T, [*EitherTagname*](either.md#eithertagname)\>, `predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

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

Defined in: [either.ts:190](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L190)

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

Defined in: [either.ts:202](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L202)

___

### frompredicate

▸ `Const`**frompredicate**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): *function*

Creates a new either from a given predicate.

**`example`** 
```ts
const iseven = (arg: number) => arg % 2 === 0;

frompredicate(iseven)(20) // Right<20>
frompredicate(iseven)(11) // Left<11>
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

Defined in: [either.ts:347](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L347)

___

### isEither

▸ `Const`**isEither**(`arg`: *unknown*): arg is Either<unknown, unknown\>

Checks if a variable is Either

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Either<unknown, unknown\>

Defined in: [either.ts:60](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L60)

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

Defined in: [either.ts:89](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L89)

___

### isLeft

▸ `Const`**isLeft**(`arg`: *unknown*): arg is Left<unknown\>

Checks if a variable is Left

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Left<unknown\>

Defined in: [either.ts:65](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L65)

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

Defined in: [either.ts:111](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L111)

___

### isRight

▸ `Const`**isRight**(`arg`: *unknown*): arg is Right<unknown\>

Checks if a variable is Right

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Right<unknown\>

Defined in: [either.ts:70](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L70)

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

Defined in: [either.ts:133](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L133)

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

Defined in: [either.ts:143](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L143)

___

### leftfromfn

▸ `Const`**leftfromfn**<FnIn, FnOut\>(`fn`: [*Fn1*](../README.md#fn1)<FnIn, FnOut\>): *function*

Creates a Left<K> factory from a function (arg: T) => K

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

Defined in: [either.ts:153](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L153)

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

Defined in: [either.ts:353](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L353)

___

### mapLeft

▸ `Const`**mapLeft**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:216](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L216)

___

### mapLeftOr

▸ `Const`**mapLeftOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:226](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L226)

___

### mapLeftOrElse

▸ `Const`**mapLeftOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:236](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L236)

___

### mapRight

▸ `Const`**mapRight**<T, U\>(`fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:221](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L221)

___

### mapRightOr

▸ `Const`**mapRightOr**<T, U\>(`fallback`: [*Tagged*](../README.md#tagged)<U, [*EitherTagname*](either.md#eithertagname)\>, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:231](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L231)

___

### mapRigthOrElse

▸ `Const`**mapRigthOrElse**<T, U\>(`fallback`: () => U, `fn`: [*MapFn*](mappables.md#mapfn)<T, U\>): *function*

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

Defined in: [either.ts:244](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L244)

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

Defined in: [either.ts:148](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L148)

___

### rightfromfn

▸ `Const`**rightfromfn**<FnIn, FnOut\>(`fn`: [*Fn1*](../README.md#fn1)<FnIn, FnOut\>): *function*

Creates a Right<K> factory from a function (arg: T) => K

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

Defined in: [either.ts:158](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L158)

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

Defined in: [either.ts:358](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L358)

___

### swap

▸ `Const`**swap**<T\>(`arg`: T): T[*__tag*] *extends* *left* ? [*Tagged*](../README.md#tagged)<T[*value*], *right*\> : [*Tagged*](../README.md#tagged)<T[*value*], *left*\>

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Tagged*](../README.md#tagged)<*any*, [*EitherTagname*](either.md#eithertagname)\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** T[*__tag*] *extends* *left* ? [*Tagged*](../README.md#tagged)<T[*value*], *right*\> : [*Tagged*](../README.md#tagged)<T[*value*], *left*\>

Defined in: [either.ts:207](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L207)

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

Defined in: [either.ts:258](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L258)

___

### unwrapLeft

▸ `Const`**unwrapLeft**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Unwraps value if Left or throws

**`example`** 
unwrapLeft(left(10)) // 10
unwrapLeft(right(1)) // throws

#### Type parameters:

Name | Type |
------ | ------ |
`Arg` | [*Tagged*](../README.md#tagged)<*any*, *string*\> |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | Arg |

**Returns:** Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Defined in: [either.ts:267](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L267)

___

### unwrapLeftOr

▸ `Const`**unwrapLeftOr**<U\>(`fallback`: U): *function*

Unwraps Left value if Left or returns the fallback

**`example`** 
```ts
unwrapLeftOr(20)(left(10)) // 10
unwrapLeftOr(20)(right(1)) // 20
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

Defined in: [either.ts:296](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L296)

___

### unwrapLeftOrElse

▸ `Const`**unwrapLeftOrElse**<U\>(`fallback`: () => U): *function*

Unwraps Left value if Left or returns the fallback

**`example`** 
```ts
unwrapLeftOrElse(fallback(20))(left(10)) // 10
unwrapLeftOrElse(fallback(30))(right(1)) // 30
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

Defined in: [either.ts:318](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L318)

___

### unwrapRight

▸ `Const`**unwrapRight**<Arg\>(`arg`: Arg): Arg *extends* [*Tagged*](../README.md#tagged)<U, *string*\> ? U : *never*

Unwraps value if Right or throws

**`example`** 
```ts
unwrapRight(left(10)) // throws
unwrapRight(right(1)) // 1

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

Defined in: [either.ts:282](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L282)

___

### unwrapRightOr

▸ `Const`**unwrapRightOr**<U\>(`fallback`: U): *function*

Unwraps Right value if Right or returns the fallback

**`example`** 
```ts
unwrapRightOr(20)(left(10)) // 20
unwrapRightOr(20)(right(1)) // 1
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

Defined in: [either.ts:307](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L307)

___

### unwrapRightOrElse

▸ `Const`**unwrapRightOrElse**<U\>(`fallback`: () => U): *function*

Unwraps Right value if Right or returns the fallback

**`example`** 
```ts
unwrapRightOrElse(fallback(20))(left(10)) // 20
unwrapRightOrElse(fallback(30))(right(1)) // 1
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

Defined in: [either.ts:329](https://github.com/OctoD/tiinvo/blob/16ea627/src/either.ts#L329)
