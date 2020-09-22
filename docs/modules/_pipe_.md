[tiinvo](../README.md) › ["pipe"](_pipe_.md)

# Module: "pipe"

## Index

### Type aliases

* [ArgType](_pipe_.md#argtype)
* [AsChain](_pipe_.md#aschain)
* [FuncType](_pipe_.md#functype)
* [LastIndexOf](_pipe_.md#lastindexof)
* [Lookup](_pipe_.md#lookup)
* [Pipe](_pipe_.md#pipe)
* [Tail](_pipe_.md#tail)

### Functions

* [pipe](_pipe_.md#const-pipe)

## Type aliases

###  ArgType

Ƭ **ArgType**: *F extends function ? A : Else*

*Defined in [pipe.ts:8](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L8)*

___

###  AsChain

Ƭ **AsChain**: *object*

*Defined in [pipe.ts:1](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L1)*

#### Type declaration:

___

###  FuncType

Ƭ **FuncType**: *function*

*Defined in [pipe.ts:10](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L10)*

#### Type declaration:

▸ (`arg`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

___

###  LastIndexOf

Ƭ **LastIndexOf**: *function extends function ? U["length"] : never*

*Defined in [pipe.ts:12](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L12)*

___

###  Lookup

Ƭ **Lookup**: *K extends keyof T ? T[K] : Else*

*Defined in [pipe.ts:19](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L19)*

___

###  Pipe

Ƭ **Pipe**: *function*

*Defined in [pipe.ts:30](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L30)*

#### Type declaration:

▸ ‹**F**›(...`f`: F & [AsChain](_pipe_.md#aschain)‹F›): *function*

**Type parameters:**

▪ **F**: *[function, Array]*

**Parameters:**

Name | Type |
------ | ------ |
`...f` | F & [AsChain](_pipe_.md#aschain)‹F› |

▸ (`arg`: [ArgType](_pipe_.md#argtype)‹F[0]›): *ReturnType‹F[LastIndexOf‹F›]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [ArgType](_pipe_.md#argtype)‹F[0]› |

___

###  Tail

Ƭ **Tail**: *function extends function ? U : never*

*Defined in [pipe.ts:23](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L23)*

## Functions

### `Const` pipe

▸ **pipe**(...`args`: F & [AsChain](_pipe_.md#aschain)‹F, [Tail](_pipe_.md#tail)‹F››): *(Anonymous function)*

*Defined in [pipe.ts:46](https://github.com/OctoD/tiinvo/blob/9536b4d/src/pipe.ts#L46)*

**`example`** 
const add = (toadd: number) => (arg: number) => arg + toadd;
const multiply = (multiplier: number) => (arg: number) => arg * multiplier;
const printiseven = (arg: number) => arg % 2 === 0 ? 'even' : 'odd';

pipe(add(10), multiply(2), printiseven)(2); // 24

**Parameters:**

Name | Type |
------ | ------ |
`...args` | F & [AsChain](_pipe_.md#aschain)‹F, [Tail](_pipe_.md#tail)‹F›› |

**Returns:** *(Anonymous function)*
