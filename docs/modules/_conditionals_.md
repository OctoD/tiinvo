[tiinvo](../README.md) › ["conditionals"](_conditionals_.md)

# Module: "conditionals"

## Index

### Functions

* [fi](_conditionals_.md#const-fi)
* [fifn](_conditionals_.md#const-fifn)

## Functions

### `Const` fi

▸ **fi**‹**T**, **F**›(`condition`: boolean, `truthyresult`: T, `falsyresult`: F): *T | F*

Defined in conditionals.ts:18

Given a condition, returns T or F if the condition is true or false

**`example`** 

const printEvenOrOdd = (arg: number) => fi(arg % 2 === 0, 'Even', 'Odd');

printEvenOrOdd(1) // 'Odd'
printEvenOrOdd(2) // 'Even'
printEvenOrOdd(4) // 'Even'

**Type parameters:**

▪ **T**

▪ **F**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | boolean | - |
`truthyresult` | T | - |
`falsyresult` | F |   |

**Returns:** *T | F*

___

### `Const` fifn

▸ **fifn**‹**T**, **F**, **A**, **B**›(`condition`: boolean, `truthyfn`: T, `falsyfn`: F): *A | B*

Defined in conditionals.ts:43

The same of `fi`, but accepts two functions `A` and `B` with zero parameters and calls.
Calls `A` if the condition is `true` or `B` if false.

**`example`** 
const printeven = () => 'Even';
const printodd = () => 'Odd'
const printEvenOrOdd = (arg: number) => fifn(arg % 2 === 0, printeven, printodd);

printEvenOrOdd(1) // 'Odd'
printEvenOrOdd(2) // 'Even'
printEvenOrOdd(4) // 'Even'

**Type parameters:**

▪ **T**: *function*

▪ **F**: *function*

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | boolean | - |
`truthyfn` | T | - |
`falsyfn` | F |   |

**Returns:** *A | B*
