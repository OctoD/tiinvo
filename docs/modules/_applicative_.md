[tiinvo](../README.md) › ["applicative"](_applicative_.md)

# Module: "applicative"

## Index

### Type aliases

* [ArgsOf](_applicative_.md#argsof)
* [FnBase](_applicative_.md#fnbase)
* [_](_applicative_.md#_)

### Functions

* [bind](_applicative_.md#const-bind)
* [check](_applicative_.md#const-check)
* [fallback](_applicative_.md#const-fallback)
* [panic](_applicative_.md#const-panic)

## Type aliases

###  ArgsOf

Ƭ **ArgsOf**: *Fn extends function ? U : any[]*

Defined in applicative.ts:14

Extracts the arguments types from a function

**`example`** 
const foo = (a: string, b: number) => a.repeat(b);

type ArgsOfFoo = ArgsOf<typeof foo> // [string, number]

___

###  FnBase

Ƭ **FnBase**: *function*

Defined in applicative.ts:20

A generic function type

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  _

Ƭ **_**: *undefined*

Defined in applicative.ts:4

Shorthand for undefined

## Functions

### `Const` bind

▸ **bind**‹**Fn**›(`fn`: Fn, ...`args`: [ArgsOf](_applicative_.md#argsof)‹Fn›): *function*

Defined in applicative.ts:34

Binds a function to a null `this`, then returns it

**`example`** 
const myfn = (text: string, repeat: number) => text.repeat(repeat);
const bound = bind(myfn, 'abc', 3);

bound() // 'abcabcabc';

**Type parameters:**

▪ **Fn**: *[FnBase](_applicative_.md#fnbase)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Fn | - |
`...args` | [ArgsOf](_applicative_.md#argsof)‹Fn› |   |

**Returns:** *function*

▸ (): *ReturnType‹Fn›*

___

### `Const` check

▸ **check**(`condition`: boolean, `errormessage`: string): *(Anonymous function)*

Defined in applicative.ts:49

Checks if a given condition is true, otherwise throws an error with the given error message

**`example`** 
check(true, 'does not throw')(10)        // 10
check(true, 'does not throw')('hello')   // 'hello'
check(false, 'this throws')('hello')     // Uncaught Error: this throws

**Parameters:**

Name | Type |
------ | ------ |
`condition` | boolean |
`errormessage` | string |

**Returns:** *(Anonymous function)*

___

### `Const` fallback

▸ **fallback**‹**T**›(`arg`: T): *(Anonymous function)*

Defined in applicative.ts:60

Creates a function which returns a fallback function

**`example`** 
either.unwrapLeftOrElse(fallback(10))(right(20)) // 10

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arg` | T |   |

**Returns:** *(Anonymous function)*

___

### `Const` panic

▸ **panic**‹**E**›(`message`: string, `ctor`: E): *never*

Defined in applicative.ts:70

Throws an error with the given message

**Type parameters:**

▪ **E**: *ErrorConstructor*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | - |
`ctor` | E | Error as E |

**Returns:** *never*