[tiinvo](../README.md) / assertables

# Namespace: assertables

## Table of contents

### Type aliases

- [Expect](assertables.md#expect)

### Functions

- [createExpect](assertables.md#createexpect)

## Type aliases

### Expect

Ƭ **Expect**<T\>: (`errormessage`: *string*) => (`arg`: T) => T

#### Type parameters:

Name |
------ |
`T` |

Defined in: [assertables.ts:4](https://github.com/OctoD/tiinvo/blob/dab53f7/src/assertables.ts#L4)

## Functions

### createExpect

▸ `Const`**createExpect**<T\>(`predicate`: [*Predicate*](predicate.md#predicate)<T\>): [*Expect*](assertables.md#expect)<T\>

Creates an expect function. This function checks if a given argument satisfies the given predicate.
If the condition is not satisfied, it throws

**`example`** 
```ts
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
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`predicate` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** [*Expect*](assertables.md#expect)<T\>

Defined in: [assertables.ts:31](https://github.com/OctoD/tiinvo/blob/dab53f7/src/assertables.ts#L31)
