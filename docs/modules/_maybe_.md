[tiinvo](../README.md) › ["maybe"](_maybe_.md)

# Module: "maybe"

## Index

### Interfaces

* [Just](../interfaces/_maybe_.just.md)
* [Nothing](../interfaces/_maybe_.nothing.md)

### Type aliases

* [JustFactory](_maybe_.md#justfactory)
* [JustTag](_maybe_.md#justtag)
* [Maybe](_maybe_.md#maybe)
* [MaybeTag](_maybe_.md#maybetag)
* [NothingFactory](_maybe_.md#nothingfactory)
* [NothingTag](_maybe_.md#nothingtag)

### Variables

* [JUSTTAG](_maybe_.md#const-justtag)
* [NOTHINGTAG](_maybe_.md#const-nothingtag)
* [expect](_maybe_.md#const-expect)
* [filter](_maybe_.md#const-filter)
* [filterOr](_maybe_.md#const-filteror)
* [fold](_maybe_.md#const-fold)
* [fromfn](_maybe_.md#const-fromfn)
* [hasjusttag](_maybe_.md#const-hasjusttag)
* [hasnothingtag](_maybe_.md#const-hasnothingtag)
* [isJust](_maybe_.md#const-isjust)
* [isMaybe](_maybe_.md#const-ismaybe)
* [isNothing](_maybe_.md#const-isnothing)
* [justfromfn](_maybe_.md#const-justfromfn)
* [map](_maybe_.md#const-map)
* [mapOr](_maybe_.md#const-mapor)
* [mapOrElse](_maybe_.md#const-maporelse)
* [unexpect](_maybe_.md#const-unexpect)
* [unwrap](_maybe_.md#const-unwrap)
* [unwrapOr](_maybe_.md#const-unwrapor)
* [unwrapOrElse](_maybe_.md#const-unwraporelse)

### Functions

* [frompredicate](_maybe_.md#const-frompredicate)
* [just](_maybe_.md#const-just)
* [maybe](_maybe_.md#const-maybe)
* [nothing](_maybe_.md#const-nothing)

## Type aliases

###  JustFactory

Ƭ **JustFactory**: *function*

*Defined in [maybe.ts:46](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L46)*

#### Type declaration:

▸ ‹**T**›(`value`: T): *[Just](../interfaces/_maybe_.just.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  JustTag

Ƭ **JustTag**: *typeof JUSTTAG*

*Defined in [maybe.ts:21](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L21)*

___

###  Maybe

Ƭ **Maybe**: *[Nothing](../interfaces/_maybe_.nothing.md) | [Just](../interfaces/_maybe_.just.md)‹T›*

*Defined in [maybe.ts:37](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L37)*

___

###  MaybeTag

Ƭ **MaybeTag**: *[JustTag](_maybe_.md#justtag) | [NothingTag](_maybe_.md#nothingtag)*

*Defined in [maybe.ts:23](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L23)*

___

###  NothingFactory

Ƭ **NothingFactory**: *function*

*Defined in [maybe.ts:42](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L42)*

#### Type declaration:

▸ (): *[Nothing](../interfaces/_maybe_.nothing.md)*

___

###  NothingTag

Ƭ **NothingTag**: *typeof NOTHINGTAG*

*Defined in [maybe.ts:22](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L22)*

## Variables

### `Const` JUSTTAG

• **JUSTTAG**: *"just"* = "just"

*Defined in [maybe.ts:18](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L18)*

___

### `Const` NOTHINGTAG

• **NOTHINGTAG**: *"nothing"* = "nothing"

*Defined in [maybe.ts:19](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L19)*

___

### `Const` expect

• **expect**: *[Expect](_assertables_.md#expect)‹[Just](../interfaces/_maybe_.just.md)‹unknown››* = createExpect<Just>(isJust)

*Defined in [maybe.ts:110](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L110)*

___

### `Const` filter

• **filter**: *(Anonymous function)* = createFilter(isJust, just, nothing as any)

*Defined in [maybe.ts:125](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L125)*

___

### `Const` filterOr

• **filterOr**: *(Anonymous function)* = createFilterOr(isJust, just)

*Defined in [maybe.ts:129](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L129)*

___

### `Const` fold

• **fold**: *(Anonymous function)* = createfold<MaybeTag>(isNothing)

*Defined in [maybe.ts:138](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L138)*

___

### `Const` fromfn

• **fromfn**: *function* = totaggedFn(maybe as any) as unknown as <T>(arg: T) => Maybe<T>

*Defined in [maybe.ts:101](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L101)*

Creates a Maybe<K> factory from a function (arg: T) => K

#### Type declaration:

▸ ‹**T**›(`arg`: T): *[Maybe](_maybe_.md#maybe)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

___

### `Const` hasjusttag

• **hasjusttag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "just"››* = isTaggedWith(JUSTTAG)

*Defined in [maybe.ts:53](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L53)*

___

### `Const` hasnothingtag

• **hasnothingtag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "nothing"››* = isTaggedWith(NOTHINGTAG)

*Defined in [maybe.ts:52](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L52)*

___

### `Const` isJust

• **isJust**: *[Typeguard](_typeguards_.md#typeguard)‹[Just](../interfaces/_maybe_.just.md)‹unknown››* = combine<Just>(isTagged, hasjusttag)

*Defined in [maybe.ts:66](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L66)*

___

### `Const` isMaybe

• **isMaybe**: *[Typeguard](_typeguards_.md#typeguard)‹[Maybe](_maybe_.md#maybe)‹unknown››* = combine<Maybe>(
  isTagged,
  anyof(hasnothingtag, hasjusttag)
)

*Defined in [maybe.ts:58](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L58)*

___

### `Const` isNothing

• **isNothing**: *[Typeguard](_typeguards_.md#typeguard)‹[Nothing](../interfaces/_maybe_.nothing.md)‹››* = combine<Nothing>(isTagged, hasnothingtag)

*Defined in [maybe.ts:71](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L71)*

___

### `Const` justfromfn

• **justfromfn**: *(Anonymous function)* = totaggedFn(just)

*Defined in [maybe.ts:96](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L96)*

Creates a Just<K> factory from a function (arg: T) => K

___

### `Const` map

• **map**: *(Anonymous function)* = createMap<Maybe, MaybeTag>(isJust, maybe as any)

*Defined in [maybe.ts:147](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L147)*

___

### `Const` mapOr

• **mapOr**: *(Anonymous function)* = createMapOr<Maybe, MaybeTag>(isJust, maybe as any)

*Defined in [maybe.ts:152](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L152)*

___

### `Const` mapOrElse

• **mapOrElse**: *(Anonymous function)* = createMapOrElse<Maybe, MaybeTag>(isJust, maybe as any)

*Defined in [maybe.ts:157](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L157)*

___

### `Const` unexpect

• **unexpect**: *[Expect](_assertables_.md#expect)‹[Nothing](../interfaces/_maybe_.nothing.md)‹››* = createExpect<Nothing>(isNothing)

*Defined in [maybe.ts:115](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L115)*

___

### `Const` unwrap

• **unwrap**: *(Anonymous function)* = createUnwrap<MaybeTag>(
  isJust,
  "Expected Just, got Nothing"
)

*Defined in [maybe.ts:166](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L166)*

___

### `Const` unwrapOr

• **unwrapOr**: *(Anonymous function)* = createUnwrapOr<MaybeTag>(isJust)

*Defined in [maybe.ts:174](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L174)*

___

### `Const` unwrapOrElse

• **unwrapOrElse**: *(Anonymous function)* = createUnwrapOrElse<MaybeTag>(isJust)

*Defined in [maybe.ts:179](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L179)*

## Functions

### `Const` frompredicate

▸ **frompredicate**‹**T**›(`predicate`: [Predicate](_predicate_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [maybe.ts:186](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L186)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

### `Const` just

▸ **just**‹**T**›(`value`: T): *[Tagged](_tagged_type_.md#tagged)‹T, "just"›*

*Defined in [maybe.ts:85](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L85)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Tagged](_tagged_type_.md#tagged)‹T, "just"›*

___

### `Const` maybe

▸ **maybe**‹**T**›(`arg?`: T): *[Nothing](../interfaces/_maybe_.nothing.md)‹› | [Tagged](_tagged_type_.md#tagged)‹T, "just"›*

*Defined in [maybe.ts:91](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L91)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | T |

**Returns:** *[Nothing](../interfaces/_maybe_.nothing.md)‹› | [Tagged](_tagged_type_.md#tagged)‹T, "just"›*

___

### `Const` nothing

▸ **nothing**(): *[Nothing](../interfaces/_maybe_.nothing.md)*

*Defined in [maybe.ts:80](https://github.com/OctoD/tiinvo/blob/446c93b/src/maybe.ts#L80)*

**Returns:** *[Nothing](../interfaces/_maybe_.nothing.md)*
