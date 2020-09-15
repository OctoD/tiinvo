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
* [hasjusttag](_maybe_.md#const-hasjusttag)
* [hasnothingtag](_maybe_.md#const-hasnothingtag)
* [isJust](_maybe_.md#const-isjust)
* [isMaybe](_maybe_.md#const-ismaybe)
* [isNothing](_maybe_.md#const-isnothing)
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

Defined in maybe.ts:49

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

Defined in maybe.ts:24

___

###  Maybe

Ƭ **Maybe**: *[Nothing](../interfaces/_maybe_.nothing.md) | [Just](../interfaces/_maybe_.just.md)‹T›*

Defined in maybe.ts:40

___

###  MaybeTag

Ƭ **MaybeTag**: *[JustTag](_maybe_.md#justtag) | [NothingTag](_maybe_.md#nothingtag)*

Defined in maybe.ts:26

___

###  NothingFactory

Ƭ **NothingFactory**: *function*

Defined in maybe.ts:45

#### Type declaration:

▸ (): *[Nothing](../interfaces/_maybe_.nothing.md)*

___

###  NothingTag

Ƭ **NothingTag**: *typeof NOTHINGTAG*

Defined in maybe.ts:25

## Variables

### `Const` JUSTTAG

• **JUSTTAG**: *"just"* = "just"

Defined in maybe.ts:21

___

### `Const` NOTHINGTAG

• **NOTHINGTAG**: *"nothing"* = "nothing"

Defined in maybe.ts:22

___

### `Const` expect

• **expect**: *[Expect](_assertables_.md#expect)‹[Just](../interfaces/_maybe_.just.md)‹unknown››* = createExpect<Just>(isJust)

Defined in maybe.ts:105

___

### `Const` filter

• **filter**: *(Anonymous function)* = createFilter(isJust, just, nothing as any)

Defined in maybe.ts:120

___

### `Const` filterOr

• **filterOr**: *(Anonymous function)* = createFilterOr(isJust, just)

Defined in maybe.ts:124

___

### `Const` fold

• **fold**: *(Anonymous function)* = createfold<MaybeTag>(isNothing)

Defined in maybe.ts:133

___

### `Const` hasjusttag

• **hasjusttag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "just"››* = isTaggedWith(JUSTTAG)

Defined in maybe.ts:56

___

### `Const` hasnothingtag

• **hasnothingtag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "nothing"››* = isTaggedWith(NOTHINGTAG)

Defined in maybe.ts:55

___

### `Const` isJust

• **isJust**: *[Typeguard](_typeguards_.md#typeguard)‹[Just](../interfaces/_maybe_.just.md)‹unknown››* = combine<Just>(isTagged, hasjusttag)

Defined in maybe.ts:69

___

### `Const` isMaybe

• **isMaybe**: *[Typeguard](_typeguards_.md#typeguard)‹[Maybe](_maybe_.md#maybe)‹unknown››* = combine<Maybe>(
  isTagged,
  anyof(hasnothingtag, hasjusttag),
)

Defined in maybe.ts:61

___

### `Const` isNothing

• **isNothing**: *[Typeguard](_typeguards_.md#typeguard)‹[Nothing](../interfaces/_maybe_.nothing.md)‹››* = combine<Nothing>(isTagged, hasnothingtag)

Defined in maybe.ts:74

___

### `Const` unexpect

• **unexpect**: *[Expect](_assertables_.md#expect)‹[Nothing](../interfaces/_maybe_.nothing.md)‹››* = createExpect<Nothing>(isNothing)

Defined in maybe.ts:110

___

### `Const` unwrap

• **unwrap**: *(Anonymous function)* = createUnwrap<MaybeTag>(
  isJust,
  "Expected Just, got Nothing",
)

Defined in maybe.ts:142

___

### `Const` unwrapOr

• **unwrapOr**: *(Anonymous function)* = createUnwrapOr<MaybeTag>(isJust)

Defined in maybe.ts:150

___

### `Const` unwrapOrElse

• **unwrapOrElse**: *(Anonymous function)* = createUnwrapOrElse<MaybeTag>(isJust)

Defined in maybe.ts:155

## Functions

### `Const` frompredicate

▸ **frompredicate**‹**T**›(`predicate`: [Predicate](_predicate_.md#predicate)‹T›): *(Anonymous function)*

Defined in maybe.ts:162

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

Defined in maybe.ts:88

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

Defined in maybe.ts:96

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

Defined in maybe.ts:83

**Returns:** *[Nothing](../interfaces/_maybe_.nothing.md)*
