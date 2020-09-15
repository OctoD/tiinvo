[tiinvo](../README.md) › ["option"](_option_.md)

# Module: "option"

## Index

### Interfaces

* [None](../interfaces/_option_.none.md)
* [Some](../interfaces/_option_.some.md)

### Type aliases

* [NoneFactory](_option_.md#nonefactory)
* [Nonetag](_option_.md#nonetag)
* [Option](_option_.md#option)
* [OptionFactory](_option_.md#optionfactory)
* [Optiontag](_option_.md#optiontag)
* [SomeFactory](_option_.md#somefactory)
* [Sometag](_option_.md#sometag)

### Variables

* [NONETAG](_option_.md#const-nonetag)
* [OPTIONTAG](_option_.md#const-optiontag)
* [SOMETAG](_option_.md#const-sometag)
* [expect](_option_.md#const-expect)
* [filter](_option_.md#const-filter)
* [filterOr](_option_.md#const-filteror)
* [hasnonetag](_option_.md#const-hasnonetag)
* [hasoptiontag](_option_.md#const-hasoptiontag)
* [hassometag](_option_.md#const-hassometag)
* [isNone](_option_.md#const-isnone)
* [isOption](_option_.md#const-isoption)
* [isSome](_option_.md#const-issome)
* [map](_option_.md#const-map)
* [mapOr](_option_.md#const-mapor)
* [mapOrElse](_option_.md#const-maporelse)
* [unexpect](_option_.md#const-unexpect)
* [unwrap](_option_.md#const-unwrap)
* [unwrapOr](_option_.md#const-unwrapor)
* [unwrapOrElse](_option_.md#const-unwraporelse)

### Functions

* [isOptionOf](_option_.md#const-isoptionof)
* [none](_option_.md#const-none)
* [option](_option_.md#const-option)
* [some](_option_.md#const-some)

## Type aliases

###  NoneFactory

Ƭ **NoneFactory**: *function*

Defined in option.ts:57

#### Type declaration:

▸ (): *[None](../interfaces/_option_.none.md)*

___

###  Nonetag

Ƭ **Nonetag**: *typeof NONETAG*

Defined in option.ts:29

___

###  Option

Ƭ **Option**: *[None](../interfaces/_option_.none.md) | [Some](../interfaces/_option_.some.md)‹T›*

Defined in option.ts:52

___

###  OptionFactory

Ƭ **OptionFactory**: *function*

Defined in option.ts:65

#### Type declaration:

▸ ‹**T**›(`value`: T): *[Option](_option_.md#option)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  Optiontag

Ƭ **Optiontag**: *[Nonetag](_option_.md#nonetag) | [Sometag](_option_.md#sometag)*

Defined in option.ts:37

___

###  SomeFactory

Ƭ **SomeFactory**: *function*

Defined in option.ts:61

#### Type declaration:

▸ ‹**T**›(`value`: T): *[Some](../interfaces/_option_.some.md)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

___

###  Sometag

Ƭ **Sometag**: *typeof SOMETAG*

Defined in option.ts:33

## Variables

### `Const` NONETAG

• **NONETAG**: *"none"* = "none"

Defined in option.ts:22

___

### `Const` OPTIONTAG

• **OPTIONTAG**: *"option"* = "option"

Defined in option.ts:24

___

### `Const` SOMETAG

• **SOMETAG**: *"some"* = "some"

Defined in option.ts:23

___

### `Const` expect

• **expect**: *[Expect](_assertables_.md#expect)‹[Option](_option_.md#option)‹unknown››* = createExpect<Option>(isSome)

Defined in option.ts:103

___

### `Const` filter

• **filter**: *(Anonymous function)* = createFilter<Option, Optiontag>(isSome, some, none)

Defined in option.ts:140

___

### `Const` filterOr

• **filterOr**: *(Anonymous function)* = createFilterOr<Option, Optiontag>(isSome, some)

Defined in option.ts:144

___

### `Const` hasnonetag

• **hasnonetag**: *[Typeguard](_typeguards_.md#typeguard)‹[None](../interfaces/_option_.none.md)‹››* = isTaggedWith(NONETAG) as typeguardsTs.Typeguard<None>

Defined in option.ts:71

___

### `Const` hasoptiontag

• **hasoptiontag**: *[Typeguard](_typeguards_.md#typeguard)‹[Option](_option_.md#option)‹unknown››* = typeguardsTs.anyof<Option>(hasnonetag, hassometag)

Defined in option.ts:73

___

### `Const` hassometag

• **hassometag**: *[Typeguard](_typeguards_.md#typeguard)‹[Some](../interfaces/_option_.some.md)‹unknown››* = isTaggedWith(SOMETAG) as typeguardsTs.Typeguard<Some>

Defined in option.ts:72

___

### `Const` isNone

• **isNone**: *[Typeguard](_typeguards_.md#typeguard)‹[None](../interfaces/_option_.none.md)‹››* = typeguardsTs.combine<None>(isTagged, hasnonetag)

Defined in option.ts:82

___

### `Const` isOption

• **isOption**: *[Typeguard](_typeguards_.md#typeguard)‹[Option](_option_.md#option)‹unknown››* = typeguardsTs.combine<Option>(isTagged, hasoptiontag)

Defined in option.ts:78

___

### `Const` isSome

• **isSome**: *[Typeguard](_typeguards_.md#typeguard)‹[Some](../interfaces/_option_.some.md)‹unknown››* = typeguardsTs.combine<Some>(isTagged, hassometag)

Defined in option.ts:86

___

### `Const` map

• **map**: *(Anonymous function)* = createMap<Option, Optiontag>(isSome, option)

Defined in option.ts:153

___

### `Const` mapOr

• **mapOr**: *(Anonymous function)* = createMapOr<Option, Optiontag>(isSome, option)

Defined in option.ts:157

___

### `Const` mapOrElse

• **mapOrElse**: *(Anonymous function)* = createMapOrElse<Option, Optiontag>(isSome, option)

Defined in option.ts:161

___

### `Const` unexpect

• **unexpect**: *[Expect](_assertables_.md#expect)‹[Option](_option_.md#option)‹unknown››* = createExpect<Option>(isNone)

Defined in option.ts:107

___

### `Const` unwrap

• **unwrap**: *(Anonymous function)* = createUnwrap<Optiontag>(
  isSome,
  "option.unwrap argument must be some",
)

Defined in option.ts:170

___

### `Const` unwrapOr

• **unwrapOr**: *(Anonymous function)* = createUnwrapOr<Optiontag>(isSome)

Defined in option.ts:178

___

### `Const` unwrapOrElse

• **unwrapOrElse**: *(Anonymous function)* = createUnwrapOrElse<Optiontag>(isSome)

Defined in option.ts:183

## Functions

### `Const` isOptionOf

▸ **isOptionOf**‹**T**›(`typeguard`: typeguardsTs.Typeguard‹T›): *[Typeguard](_typeguards_.md#typeguard)‹[Option](_option_.md#option)‹T››*

Defined in option.ts:90

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`typeguard` | typeguardsTs.Typeguard‹T› |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹[Option](_option_.md#option)‹T››*

___

### `Const` none

▸ **none**(): *[None](../interfaces/_option_.none.md)*

Defined in option.ts:116

**Returns:** *[None](../interfaces/_option_.none.md)*

___

### `Const` option

▸ **option**‹**T**›(`value`: T): *[Option](_option_.md#option)‹T›*

Defined in option.ts:130

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Option](_option_.md#option)‹T›*

___

### `Const` some

▸ **some**‹**T**›(`value`: T): *[Some](../interfaces/_option_.some.md)‹T›*

Defined in option.ts:121

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Some](../interfaces/_option_.some.md)‹T›*
