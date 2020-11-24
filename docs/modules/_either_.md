[tiinvo](../README.md) › ["either"](_either_.md)

# Module: "either"

## Index

### Interfaces

* [Left](../interfaces/_either_.left.md)
* [Right](../interfaces/_either_.right.md)

### Type aliases

* [Either](_either_.md#either)
* [EitherTagname](_either_.md#eithertagname)
* [LeftTagname](_either_.md#lefttagname)
* [RightTagname](_either_.md#righttagname)

### Variables

* [LEFTTAG](_either_.md#const-lefttag)
* [RIGHTTAG](_either_.md#const-righttag)
* [filterLeft](_either_.md#const-filterleft)
* [filterLeftOr](_either_.md#const-filterleftor)
* [filterRight](_either_.md#const-filterright)
* [filterRightOr](_either_.md#const-filterrightor)
* [fold](_either_.md#const-fold)
* [haseithertag](_either_.md#const-haseithertag)
* [hasleftag](_either_.md#const-hasleftag)
* [hasrighttag](_either_.md#const-hasrighttag)
* [isEither](_either_.md#const-iseither)
* [isLeft](_either_.md#const-isleft)
* [isRight](_either_.md#const-isright)
* [mapLeft](_either_.md#const-mapleft)
* [mapLeftOr](_either_.md#const-mapleftor)
* [mapLeftOrElse](_either_.md#const-mapleftorelse)
* [mapRight](_either_.md#const-mapright)
* [mapRightOr](_either_.md#const-maprightor)
* [mapRigthOrElse](_either_.md#const-maprigthorelse)
* [swap](_either_.md#const-swap)
* [unwrapEither](_either_.md#const-unwrapeither)
* [unwrapLeft](_either_.md#const-unwrapleft)
* [unwrapLeftOr](_either_.md#const-unwrapleftor)
* [unwrapLeftOrElse](_either_.md#const-unwrapleftorelse)
* [unwrapRight](_either_.md#const-unwrapright)
* [unwrapRightOr](_either_.md#const-unwraprightor)
* [unwrapRightOrElse](_either_.md#const-unwraprightorelse)

### Functions

* [frompredicate](_either_.md#const-frompredicate)
* [isEitherOf](_either_.md#const-iseitherof)
* [isLeftOf](_either_.md#const-isleftof)
* [isRightOf](_either_.md#const-isrightof)
* [left](_either_.md#const-left)
* [right](_either_.md#const-right)

## Type aliases

###  Either

Ƭ **Either**: *[Left](../interfaces/_either_.left.md)‹TLeft› | [Right](../interfaces/_either_.right.md)‹TRight›*

*Defined in [either.ts:43](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L43)*

Represents a value of one of two possible types (a disjoint union).

___

###  EitherTagname

Ƭ **EitherTagname**: *[LeftTagname](_either_.md#lefttagname) | [RightTagname](_either_.md#righttagname)*

*Defined in [either.ts:29](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L29)*

Left or Right tagtypes

___

###  LeftTagname

Ƭ **LeftTagname**: *typeof LEFTTAG*

*Defined in [either.ts:21](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L21)*

Left tagtype

___

###  RightTagname

Ƭ **RightTagname**: *typeof RIGHTTAG*

*Defined in [either.ts:25](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L25)*

Right tagtype

## Variables

### `Const` LEFTTAG

• **LEFTTAG**: *"left"* = "left"

*Defined in [either.ts:15](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L15)*

___

### `Const` RIGHTTAG

• **RIGHTTAG**: *"right"* = "right"

*Defined in [either.ts:16](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L16)*

___

### `Const` filterLeft

• **filterLeft**: *(Anonymous function)* = createFilter<Either, EitherTagname>(
  isLeft,
  left,
  right
)

*Defined in [either.ts:149](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L149)*

___

### `Const` filterLeftOr

• **filterLeftOr**: *(Anonymous function)* = createFilterOr<Either, EitherTagname>(isLeft, left)

*Defined in [either.ts:158](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L158)*

___

### `Const` filterRight

• **filterRight**: *(Anonymous function)* = createFilter<Either, EitherTagname>(
  isRight,
  right,
  left
)

*Defined in [either.ts:163](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L163)*

___

### `Const` filterRightOr

• **filterRightOr**: *(Anonymous function)* = createFilterOr<Either, EitherTagname>(
  isRight,
  right
)

*Defined in [either.ts:172](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L172)*

___

### `Const` fold

• **fold**: *(Anonymous function)* = createfold<EitherTagname>(isLeft)

*Defined in [either.ts:184](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L184)*

___

### `Const` haseithertag

• **haseithertag**: *[Typeguard](_typeguards_.md#typeguard)‹[Left](../interfaces/_either_.left.md)‹unknown› | [Right](../interfaces/_either_.right.md)‹unknown››* = anyof<Left | Right>(hasleftag, hasrighttag)

*Defined in [either.ts:53](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L53)*

___

### `Const` hasleftag

• **hasleftag**: *[Typeguard](_typeguards_.md#typeguard)‹[Left](../interfaces/_either_.left.md)‹unknown››* = isTaggedWith(LEFTTAG) as Typeguard<Left>

*Defined in [either.ts:51](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L51)*

___

### `Const` hasrighttag

• **hasrighttag**: *[Typeguard](_typeguards_.md#typeguard)‹[Right](../interfaces/_either_.right.md)‹unknown››* = isTaggedWith(RIGHTTAG) as Typeguard<Right>

*Defined in [either.ts:52](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L52)*

___

### `Const` isEither

• **isEither**: *[Typeguard](_typeguards_.md#typeguard)‹[Left](../interfaces/_either_.left.md)‹unknown› | [Right](../interfaces/_either_.right.md)‹unknown››* = combine<Either>(isTagged, haseithertag)

*Defined in [either.ts:58](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L58)*

Checks if a variable is Either

___

### `Const` isLeft

• **isLeft**: *[Typeguard](_typeguards_.md#typeguard)‹[Left](../interfaces/_either_.left.md)‹unknown››* = combine<Left>(isTagged, hasleftag)

*Defined in [either.ts:63](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L63)*

Checks if a variable is Left

___

### `Const` isRight

• **isRight**: *[Typeguard](_typeguards_.md#typeguard)‹[Right](../interfaces/_either_.right.md)‹unknown››* = combine<Right>(isTagged, hasrighttag)

*Defined in [either.ts:68](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L68)*

Checks if a variable is Right

___

### `Const` mapLeft

• **mapLeft**: *(Anonymous function)* = createMap<Either, EitherTagname>(isLeft, left)

*Defined in [either.ts:198](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L198)*

___

### `Const` mapLeftOr

• **mapLeftOr**: *(Anonymous function)* = createMapOr<Either, EitherTagname>(isLeft, left)

*Defined in [either.ts:208](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L208)*

___

### `Const` mapLeftOrElse

• **mapLeftOrElse**: *(Anonymous function)* = createMapOrElse<Either, EitherTagname>(
  isLeft,
  left
)

*Defined in [either.ts:218](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L218)*

___

### `Const` mapRight

• **mapRight**: *(Anonymous function)* = createMap<Either, EitherTagname>(isRight, right)

*Defined in [either.ts:203](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L203)*

___

### `Const` mapRightOr

• **mapRightOr**: *(Anonymous function)* = createMapOr<Either, EitherTagname>(isRight, right)

*Defined in [either.ts:213](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L213)*

___

### `Const` mapRigthOrElse

• **mapRigthOrElse**: *(Anonymous function)* = createMapOrElse<Either, EitherTagname>(
  isRight,
  right
)

*Defined in [either.ts:226](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L226)*

___

### `Const` swap

• **swap**: *(Anonymous function)* = createSwap<LeftTagname, RightTagname>(isLeft, left, right)

*Defined in [either.ts:189](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L189)*

___

### `Const` unwrapEither

• **unwrapEither**: *(Anonymous function)* = createUnwrap(isEither, "")

*Defined in [either.ts:240](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L240)*

Unwraps Either Left or Right

**`example`** 
unwrapEither(left(10)) // 10
unwrapEither(right(1)) // 1

___

### `Const` unwrapLeft

• **unwrapLeft**: *(Anonymous function)* = createUnwrap(
  isLeft,
  "Cannot unwrap Right, expected to be Left"
)

*Defined in [either.ts:249](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L249)*

Unwraps value if Left or throws

**`example`** 
unwrapLeft(left(10)) // 10
unwrapLeft(right(1)) // throws

___

### `Const` unwrapLeftOr

• **unwrapLeftOr**: *(Anonymous function)* = createUnwrapOr(isLeft)

*Defined in [either.ts:273](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L273)*

Unwraps Left value if Left or returns the fallback

**`example`** 
unwrapLeftOr(20)(left(10)) // 10
unwrapLeftOr(20)(right(1)) // 20

___

### `Const` unwrapLeftOrElse

• **unwrapLeftOrElse**: *(Anonymous function)* = createUnwrapOrElse(isLeft)

*Defined in [either.ts:291](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L291)*

Unwraps Left value if Left or returns the fallback

**`example`** 
unwrapLeftOrElse(fallback(20))(left(10)) // 10
unwrapLeftOrElse(fallback(30))(right(1)) // 30

___

### `Const` unwrapRight

• **unwrapRight**: *(Anonymous function)* = createUnwrap(
  isRight,
  "Cannot unwrap Left, expected to be Right"
)

*Defined in [either.ts:261](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L261)*

Unwraps value if Right or throws

**`example`** 
unwrapRight(left(10)) // throws
unwrapRight(right(1)) // 1

___

### `Const` unwrapRightOr

• **unwrapRightOr**: *(Anonymous function)* = createUnwrapOr(isRight)

*Defined in [either.ts:282](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L282)*

Unwraps Right value if Right or returns the fallback

**`example`** 
unwrapRightOr(20)(left(10)) // 20
unwrapRightOr(20)(right(1)) // 1

___

### `Const` unwrapRightOrElse

• **unwrapRightOrElse**: *(Anonymous function)* = createUnwrapOrElse(isRight)

*Defined in [either.ts:300](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L300)*

Unwraps Right value if Right or returns the fallback

**`example`** 
unwrapRightOrElse(fallback(20))(left(10)) // 20
unwrapRightOrElse(fallback(30))(right(1)) // 1

## Functions

### `Const` frompredicate

▸ **frompredicate**‹**T**›(`predicate`: [Predicate](_predicate_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [either.ts:316](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L316)*

Creates a new either from a given predicate.

**`example`** 
const iseven = (arg: number) => arg % 2 === 0;

frompredicate(iseven)(20) // Right<20>
frompredicate(iseven)(11) // Left<11>

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹T› |   |

**Returns:** *(Anonymous function)*

___

### `Const` isEitherOf

▸ **isEitherOf**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

*Defined in [either.ts:85](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L85)*

Checks if a variable is Either with a value of a given type

**`example`** 
const test1 = left(10);
const test2 = right(10);
const iseitherofstring = isEitherOf(isstring);
const iseitherofnumber = isEitherOf(isnumber);

iseitherofstring(test) // false
iseitherofnumber(test) // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

___

### `Const` isLeftOf

▸ **isLeftOf**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

*Defined in [either.ts:105](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L105)*

Checks if a variable is Left with a value of a given type

**`example`** 
const test1 = left(10);
const test2 = right(10);
const isleftofstring = isLeftOf(isstring);
const isleftofnumber = isLeftOf(isnumber);

isleftofstring(test1) // false
isleftofstring(test2) // false
isleftofnumber(test1) // true
isleftofnumber(test2) // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

___

### `Const` isRightOf

▸ **isRightOf**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

*Defined in [either.ts:125](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L125)*

Checks if a variable is Right with a value of a given type

**`example`** 
const test1 = left(10);
const test2 = right(10);
const isrightofstring = isRightOf(isstring);
const isrightofnumber = isRightOf(isnumber);

isrightofstring(test1) // false
isrightofstring(test2) // false
isrightofnumber(test1) // false
isrightofnumber(test2) // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹unknown›*

___

### `Const` left

▸ **left**‹**T**›(`value`: T): *[Left](../interfaces/_either_.left.md)‹T›*

*Defined in [either.ts:135](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L135)*

Creates a Left<T> type

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Left](../interfaces/_either_.left.md)‹T›*

___

### `Const` right

▸ **right**‹**T**›(`value`: T): *[Right](../interfaces/_either_.right.md)‹T›*

*Defined in [either.ts:140](https://github.com/OctoD/tiinvo/blob/9536b4d/src/either.ts#L140)*

Creates a Right<T> type

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Right](../interfaces/_either_.right.md)‹T›*
