[tiinvo](../README.md) › ["tagged-type"](_tagged_type_.md)

# Module: "tagged-type"

## Index

### Type aliases

* [Tagged](_tagged_type_.md#tagged)
* [TaggedFactory](_tagged_type_.md#taggedfactory)

### Variables

* [_isTagged](_tagged_type_.md#const-_istagged)
* [hastag](_tagged_type_.md#const-hastag)
* [hasvalue](_tagged_type_.md#const-hasvalue)
* [isTagged](_tagged_type_.md#const-istagged)

### Functions

* [isTaggedOf](_tagged_type_.md#const-istaggedof)
* [isTaggedWith](_tagged_type_.md#const-istaggedwith)
* [tagged](_tagged_type_.md#const-tagged)
* [taggedFactory](_tagged_type_.md#const-taggedfactory)

## Type aliases

###  Tagged

Ƭ **Tagged**: *object*

*Defined in [tagged-type.ts:14](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L14)*

A `TaggedType` with a value `T`

#### Type declaration:

* **__tag**: *Tagname*

* **value**: *T*

___

###  TaggedFactory

Ƭ **TaggedFactory**: *function*

*Defined in [tagged-type.ts:22](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L22)*

A `TaggedType<T, Tagname>` factory.

#### Type declaration:

▸ ‹**T**›(`arg`: T): *[Tagged](_tagged_type_.md#tagged)‹T, Tagname›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

## Variables

### `Const` _isTagged

• **_isTagged**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, string››* = combine<Tagged<unknown, string>>(
  hastag,
  haskeyoftype("__tag", isstring)
)

*Defined in [tagged-type.ts:64](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L64)*

___

### `Const` hastag

• **hastag**: *(Anonymous function)* = haskey("__tag")

*Defined in [tagged-type.ts:26](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L26)*

___

### `Const` hasvalue

• **hasvalue**: *(Anonymous function)* = haskey("value")

*Defined in [tagged-type.ts:27](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L27)*

___

### `Const` isTagged

• **isTagged**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, string››* = combine<Tagged<unknown, string>>(
  isindexable,
  hasvalue,
  _isTagged
)

*Defined in [tagged-type.ts:74](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L74)*

Checks if a variable is a Tagged<unknown, string>

## Functions

### `Const` isTaggedOf

▸ **isTaggedOf**‹**Tag**, **T**›(`tag`: Tag, `typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹T, Tag››*

*Defined in [tagged-type.ts:102](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L102)*

**Type parameters:**

▪ **Tag**: *string*

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | Tag | - |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹T, Tag››*

___

### `Const` isTaggedWith

▸ **isTaggedWith**‹**Tag**›(`tag`: Tag): *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, Tag››*

*Defined in [tagged-type.ts:86](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L86)*

**Type parameters:**

▪ **Tag**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | Tag |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, Tag››*

___

### `Const` tagged

▸ **tagged**‹**T**, **Tagname**›(`value`: T, `tagname`: Tagname): *[Tagged](_tagged_type_.md#tagged)‹T, Tagname›*

*Defined in [tagged-type.ts:42](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L42)*

Creates a TaggedType<T, Tagname>.

**`example`** 

tagged('hello world', 'foobarbaz'); // Tagged<'hello world', 'foobarbaz'>;

**Type parameters:**

▪ **T**

▪ **Tagname**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`tagname` | Tagname |

**Returns:** *[Tagged](_tagged_type_.md#tagged)‹T, Tagname›*

___

### `Const` taggedFactory

▸ **taggedFactory**‹**T**›(`tagname`: T): *[TaggedFactory](_tagged_type_.md#taggedfactory)‹T›*

*Defined in [tagged-type.ts:59](https://github.com/OctoD/tiinvo/blob/9536b4d/src/tagged-type.ts#L59)*

Creates a factory which returns a `Tagged<K, T>`

**`example`** 
const mytype = taggedFactory('foo');

mytype(10) // Tagged<10, 'foo'>

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`tagname` | T |

**Returns:** *[TaggedFactory](_tagged_type_.md#taggedfactory)‹T›*
