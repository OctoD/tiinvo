[tiinvo](../README.md) › ["typeguards"](_typeguards_.md)

# Module: "typeguards"

## Index

### Type aliases

* [IndexableObject](_typeguards_.md#indexableobject)
* [TypegardsTuple](_typeguards_.md#typegardstuple)
* [Typeguard](_typeguards_.md#typeguard)
* [TypeguardsFromStruct](_typeguards_.md#typeguardsfromstruct)
* [TypeguardsStruct](_typeguards_.md#typeguardsstruct)
* [WithLength](_typeguards_.md#withlength)

### Variables

* [haslength](_typeguards_.md#const-haslength)
* [isarray](_typeguards_.md#const-isarray)
* [isbigint](_typeguards_.md#const-isbigint)
* [isboolean](_typeguards_.md#const-isboolean)
* [isdefined](_typeguards_.md#const-isdefined)
* [isfunction](_typeguards_.md#const-isfunction)
* [isindexable](_typeguards_.md#const-isindexable)
* [isnotNullOrUndefined](_typeguards_.md#const-isnotnullorundefined)
* [isnotnull](_typeguards_.md#const-isnotnull)
* [isnull](_typeguards_.md#const-isnull)
* [isnullOrUndefined](_typeguards_.md#const-isnullorundefined)
* [isnumber](_typeguards_.md#const-isnumber)
* [isobject](_typeguards_.md#const-isobject)
* [isstring](_typeguards_.md#const-isstring)
* [isundefined](_typeguards_.md#const-isundefined)

### Functions

* [anyof](_typeguards_.md#const-anyof)
* [combine](_typeguards_.md#const-combine)
* [createStructOf](_typeguards_.md#const-createstructof)
* [createTupleOf](_typeguards_.md#const-createtupleof)
* [haskey](_typeguards_.md#const-haskey)
* [haskeyWithValue](_typeguards_.md#const-haskeywithvalue)
* [haskeyoftype](_typeguards_.md#const-haskeyoftype)
* [haslengthof](_typeguards_.md#const-haslengthof)
* [isarrayof](_typeguards_.md#const-isarrayof)
* [iserror](_typeguards_.md#const-iserror)
* [nullable](_typeguards_.md#const-nullable)
* [optional](_typeguards_.md#const-optional)

## Type aliases

###  IndexableObject

Ƭ **IndexableObject**: *object*

*Defined in [typeguards.ts:14](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L14)*

Represents a plain object

#### Type declaration:

* \[ **index**: *string*\]: T

___

###  TypegardsTuple

Ƭ **TypegardsTuple**: *object*

*Defined in [typeguards.ts:29](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L29)*

#### Type declaration:

___

###  Typeguard

Ƭ **Typeguard**: *function*

*Defined in [typeguards.ts:9](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L9)*

A typeguard

#### Type declaration:

▸ (`arg`: unknown): *arg is IsOutput*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

___

###  TypeguardsFromStruct

Ƭ **TypeguardsFromStruct**: *object*

*Defined in [typeguards.ts:282](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L282)*

#### Type declaration:

___

###  TypeguardsStruct

Ƭ **TypeguardsStruct**: *object*

*Defined in [typeguards.ts:21](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L21)*

#### Type declaration:

___

###  WithLength

Ƭ **WithLength**: *object*

*Defined in [typeguards.ts:19](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L19)*

Represents an object with the `length` property

#### Type declaration:

* **length**: *number*

## Variables

### `Const` haslength

• **haslength**: *[Typeguard](_typeguards_.md#typeguard)‹[WithLength](_typeguards_.md#withlength)›* = haskey("length") as Typeguard<WithLength>

*Defined in [typeguards.ts:259](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L259)*

Checks if a value is indexable and has the 'length' key

**`example`** 
haslength([])              // true
haslength({})              // false
haslength({ length: 10 })  // true

**`param`** 

**`returns`** 

___

### `Const` isarray

• **isarray**: *[Typeguard](_typeguards_.md#typeguard)‹unknown[]›* = ((arg) => Array.isArray(arg)) as Typeguard<unknown[]>

*Defined in [typeguards.ts:46](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L46)*

Checks if a value is an array

**`example`** 
isarray(10)  // false
isarray('a') // false
isarray(!0)  // false
isarray([])  // true

___

### `Const` isbigint

• **isbigint**: *[Typeguard](_typeguards_.md#typeguard)‹bigint›* = ((arg) => typeof arg === "bigint") as Typeguard<bigint>

*Defined in [typeguards.ts:57](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L57)*

Checks if a value is a bigint

**`example`** 
isbigint(10)  // false
isbigint('a') // false
isbigint(!0)  // false
isbigint(10n) // true

___

### `Const` isboolean

• **isboolean**: *[Typeguard](_typeguards_.md#typeguard)‹boolean›* = ((arg) => typeof arg === "boolean") as Typeguard<
  boolean
>

*Defined in [typeguards.ts:68](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L68)*

Checks if a value is a boolean

**`example`** 
isboolean(10)  // false
isboolean('a') // false
isboolean(!0)  // true
isboolean(10n) // false

___

### `Const` isdefined

• **isdefined**: *[Typeguard](_typeguards_.md#typeguard)‹object›* = ((arg) => typeof arg !== "undefined") as Typeguard<
  object
>

*Defined in [typeguards.ts:82](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L82)*

Checks if a value is not undefined

**`example`** 
isdefined(undefined)   // false
isdefined(10)          // true
isdefined('a')         // true
isdefined(!0)          // true
isdefined(10n)         // true

___

### `Const` isfunction

• **isfunction**: *[Typeguard](_typeguards_.md#typeguard)‹[FnBase](_applicative_.md#fnbase)›* = ((arg) => typeof arg === "function") as Typeguard<
  FnBase
>

*Defined in [typeguards.ts:96](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L96)*

Checks if a value is a function

**`example`** 
isfunction(undefined)   // false
isfunction(10)          // false
isfunction('a')         // false
isfunction(!0)          // false
isfunction(() => void 0)// true

___

### `Const` isindexable

• **isindexable**: *[Typeguard](_typeguards_.md#typeguard)‹object›* = ((arg) =>
  isobject(arg) && arg !== null) as Typeguard<{ [index: string]: unknown }>

*Defined in [typeguards.ts:187](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L187)*

Checks if a value is an object (so that the `key` in can be used)

**`example`** 
isindexable(10)          // false
isindexable('a')         // false
isindexable({})          // true
isindexable(null)        // false
isindexable(undefined)   // false

___

### `Const` isnotNullOrUndefined

• **isnotNullOrUndefined**: *[Typeguard](_typeguards_.md#typeguard)‹object›* = combine<object>(isnotnull, isdefined)

*Defined in [typeguards.ts:401](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L401)*

Checks if a variable is not null or undefined

**`example`** 
isnotNullOrUndefined(null)      // false
isnotNullOrUndefined(undefined) // false
isnotNullOrUndefined('foo')     // true
isnotNullOrUndefined([])        // true

___

### `Const` isnotnull

• **isnotnull**: *[Typeguard](_typeguards_.md#typeguard)‹object›* = ((arg) => arg !== null) as Typeguard<object>

*Defined in [typeguards.ts:171](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L171)*

Checks if a value is not null

**`example`** 
isnotnull(10)          // true
isnotnull('a')         // true
isnotnull({})          // true
isnotnull(null)        // false
isnotnull(undefined)   // true

___

### `Const` isnull

• **isnull**: *[Typeguard](_typeguards_.md#typeguard)‹null›* = ((arg) => arg === null) as Typeguard<null>

*Defined in [typeguards.ts:159](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L159)*

Checks if a value is null

**`example`** 
isnull(10)          // false
isnull('a')         // false
isnull({})          // false
isnull(null)        // true
isnull(undefined)   // false

___

### `Const` isnullOrUndefined

• **isnullOrUndefined**: *[Typeguard](_typeguards_.md#typeguard)‹undefined | null›* = anyof<null | undefined>(isnull, isundefined)

*Defined in [typeguards.ts:390](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L390)*

Checks if a variable is null or undefined

**`example`** 
isnullOrUndefined(null)      // true
isnullOrUndefined(undefined) // true
isnullOrUndefined('foo')     // false
isnullOrUndefined([])        // false

___

### `Const` isnumber

• **isnumber**: *[Typeguard](_typeguards_.md#typeguard)‹number›* = ((arg) => typeof arg === "number") as Typeguard<number>

*Defined in [typeguards.ts:109](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L109)*

Checks if a value is a number

**`example`** 
isnumber(10)  // true
isnumber('a') // false
isnumber(!0)  // false
isnumber(10n) // false

___

### `Const` isobject

• **isobject**: *[Typeguard](_typeguards_.md#typeguard)‹object›* = ((arg) => typeof arg === "object") as Typeguard<object>

*Defined in [typeguards.ts:121](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L121)*

Checks if a value is an object

**`example`** 
isobject(10)   // false
isobject('a')  // false
isobject({})   // true
isobject(null) // true
isobject([])   // true

___

### `Const` isstring

• **isstring**: *[Typeguard](_typeguards_.md#typeguard)‹string›* = ((arg) => typeof arg === "string") as Typeguard<string>

*Defined in [typeguards.ts:133](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L133)*

Checks if a value is a string

**`example`** 
isstring(10)   // false
isstring('a')  // true
isstring({})   // false
isstring(null) // false
isstring([])   // false

___

### `Const` isundefined

• **isundefined**: *[Typeguard](_typeguards_.md#typeguard)‹undefined›* = ((arg) => typeof arg === "undefined") as Typeguard<
  undefined
>

*Defined in [typeguards.ts:145](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L145)*

Checks if a value is undefined

**`example`** 
isundefined(10)          // false
isundefined('a')         // false
isundefined({})          // false
isundefined(null)        // false
isundefined(undefined)   // true

## Functions

### `Const` anyof

▸ **anyof**‹**T**›(...`predicates`: [Typeguard](_typeguards_.md#typeguard)‹unknown›[]): *[Typeguard](_typeguards_.md#typeguard)‹T›*

*Defined in [typeguards.ts:378](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L378)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...predicates` | [Typeguard](_typeguards_.md#typeguard)‹unknown›[] |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹T›*

___

### `Const` combine

▸ **combine**‹**T**›(...`args`: [Typeguard](_typeguards_.md#typeguard)‹any›[]): *[Typeguard](_typeguards_.md#typeguard)‹T›*

*Defined in [typeguards.ts:368](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L368)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Typeguard](_typeguards_.md#typeguard)‹any›[] |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹T›*

___

### `Const` createStructOf

▸ **createStructOf**‹**TG**›(`typeguard`: [TypeguardsFromStruct](_typeguards_.md#typeguardsfromstruct)‹TG›): *(Anonymous function)*

*Defined in [typeguards.ts:315](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L315)*

cle * Creates a typeguard representing a complex data structure. It is useful
for object validation.

**`example`** 

interface User {
   name: string;
   mail: string;
   age: number;
   status?: string;
}

const isUser = createStructOf<User>({
   name: isstring,
   mail: isstring,
   age: isnumber,
   status: optional(isstring),
});

isUser({}) // false
isUser({ age: 100 }) // false
isUser({ age: 100, name: 'foo' }) // false
isUser({ age: 100, name: 'foo', mail: 'hello_at_world.com' }) // true
isUser({ age: '100', name: 'foo', mail: 'hello_at_world.com' }) // false

**Type parameters:**

▪ **TG**: *any*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [TypeguardsFromStruct](_typeguards_.md#typeguardsfromstruct)‹TG› |   |

**Returns:** *(Anonymous function)*

___

### `Const` createTupleOf

▸ **createTupleOf**‹**TG**›(...`typeguards`: TG): *(Anonymous function)*

*Defined in [typeguards.ts:348](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L348)*

**Type parameters:**

▪ **TG**: *[Typeguard](_typeguards_.md#typeguard)‹any›[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...typeguards` | TG |   |

**Returns:** *(Anonymous function)*

___

### `Const` haskey

▸ **haskey**‹**Key**›(`key`: Key): *(Anonymous function)*

*Defined in [typeguards.ts:208](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L208)*

Checks if a value is indexable and has a key

**Type parameters:**

▪ **Key**: *string | number*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Key |   |

**Returns:** *(Anonymous function)*

___

### `Const` haskeyWithValue

▸ **haskeyWithValue**‹**Key**, **Value**›(`key`: Key, `value`: Value): *(Anonymous function)*

*Defined in [typeguards.ts:242](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L242)*

Checks if a value is indexable, has a key and that key has a precise value

**`example`** 
haskeyWithValue('foo', 100)({ foo: 100 }) // true
haskeyWithValue('foo', 100)({ foo: '1' }) // false

**Type parameters:**

▪ **Key**: *string | number*

▪ **Value**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Key | - |
`value` | Value |   |

**Returns:** *(Anonymous function)*

___

### `Const` haskeyoftype

▸ **haskeyoftype**‹**Key**, **T**›(`key`: Key, `typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *(Anonymous function)*

*Defined in [typeguards.ts:224](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L224)*

Checks if a value is indexable, has a key and that key has a given type

**`example`** 
haskeyoftype('foo', isstring)({ foo: 100 }) // false
haskeyoftype('foo', isstring)({ foo: '1' }) // true

**Type parameters:**

▪ **Key**: *string | number*

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | Key | - |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *(Anonymous function)*

___

### `Const` haslengthof

▸ **haslengthof**(`length`: number): *(Anonymous function)*

*Defined in [typeguards.ts:274](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L274)*

Checks if a value is indexable, has the 'length' key and that the length is equal to a given one

**`example`** 
const test = haslengthof(5)

test([1, 2, 3])       // false
test({})              // false
test({ length: 10 })  // true

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *(Anonymous function)*

___

### `Const` isarrayof

▸ **isarrayof**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *(Anonymous function)*

*Defined in [typeguards.ts:416](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L416)*

Checks if a variable is an array of a given type.

**`example`** 
const isarrayofStrings = isarrayof(isstring);

isarrayofStrings([10, 20, 'hello', 'world']) // false
isarrayofStrings([10, 20])                   // false
isarrayofStrings(['hello', 'world'])         // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *(Anonymous function)*

___

### `Const` iserror

▸ **iserror**(`arg`: unknown): *arg is Error*

*Defined in [typeguards.ts:196](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L196)*

Checks if a value is an Error

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *arg is Error*

___

### `Const` nullable

▸ **nullable**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹null | T›*

*Defined in [typeguards.ts:433](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L433)*

Makes a Typeguard<T> nullable

**`example`** 
const isnullablenumber = nullable(isnumber);

isnullablenumber(null) // true
isnullablenumber(1000) // true
isnullablenumber('10') // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹null | T›*

___

### `Const` optional

▸ **optional**‹**T**›(`typeguard`: [Typeguard](_typeguards_.md#typeguard)‹T›): *[Typeguard](_typeguards_.md#typeguard)‹undefined | T›*

*Defined in [typeguards.ts:450](https://github.com/OctoD/tiinvo/blob/9536b4d/src/typeguards.ts#L450)*

Makes a Typeguard<T> optional

**`example`** 
const isoptionalnumber = optional(isnumber);

isoptionalnumber(undefined)  // true
isoptionalnumber(1000)       // true
isoptionalnumber('10')       // false
isoptionalnumber(null)       // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [Typeguard](_typeguards_.md#typeguard)‹T› |   |

**Returns:** *[Typeguard](_typeguards_.md#typeguard)‹undefined | T›*
