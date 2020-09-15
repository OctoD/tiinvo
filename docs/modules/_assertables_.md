[tiinvo](../README.md) › ["assertables"](_assertables_.md)

# Module: "assertables"

## Index

### Type aliases

* [Expect](_assertables_.md#expect)

### Functions

* [createExpect](_assertables_.md#const-createexpect)

## Type aliases

###  Expect

Ƭ **Expect**: *function*

Defined in assertables.ts:4

#### Type declaration:

▸ (`errormessage`: string): *function*

**Parameters:**

Name | Type |
------ | ------ |
`errormessage` | string |

▸ (`arg`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

## Functions

### `Const` createExpect

▸ **createExpect**‹**T**›(`predicate`: [Predicate](_predicate_.md#predicate)‹T›): *[Expect](_assertables_.md#expect)‹T›*

Defined in assertables.ts:29

Creates an expect function. This function checks if a given argument satisfies the given predicate.
If the condition is not satisfied, it throws

**`example`** 
const isstring = (arg: unknown): arg is string => typeof arg === 'string';
const expectstring = createExpect(isstring);

const foocheck = expectstring('myfn foo argument must be a string');
const barcheck = expectstring('myfn bar argument must be a string');

const myfn = (foo: unknown, bar: unknown) => [
   foocheck(foo),
   barcheck(bar)
].join('--');

myfn('hello', 'world'); // 'hello--world';
myfn('hello', 123);     // Uncaught Error: myfn bar argument must be a string

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_predicate_.md#predicate)‹T› |

**Returns:** *[Expect](_assertables_.md#expect)‹T›*
