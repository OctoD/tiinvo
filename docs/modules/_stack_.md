[tiinvo - v1.6.0](../README.md) › ["Stack"](_stack_.md)

# External module: "Stack"

## Index

### Classes

* [FunctionQueueLike](../classes/_stack_.functionqueuelike.md)
* [FunctionStackLike](../classes/_stack_.functionstacklike.md)
* [QueueLike](../classes/_stack_.queuelike.md)
* [StackLike](../classes/_stack_.stacklike.md)
* [Stackable](../classes/_stack_.stackable.md)

### Type aliases

* [FunctionQueue](_stack_.md#functionqueue)
* [FunctionStack](_stack_.md#functionstack)
* [Queue](_stack_.md#queue)
* [Stack](_stack_.md#stack)

### Functions

* [FunctionQueue](_stack_.md#functionqueue)
* [FunctionStack](_stack_.md#functionstack)
* [Queue](_stack_.md#queue)
* [Stack](_stack_.md#stack)
* [ensureFunctionArray](_stack_.md#const-ensurefunctionarray)

## Type aliases

###  FunctionQueue

Ƭ **FunctionQueue**: *[FunctionQueueLike](../classes/_stack_.functionqueuelike.md)‹Fn›*

*Defined in [Stack.ts:526](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L526)*

Represents a Queue of Functions data type

Queue is a linear data structure in which addition or removal of element follows FIFO (first in, first out).

```ts
import { FunctionQueue } from 'tiinvo';

const q = FunctionQueue();

q.enqueue((arg: string) => 'name is: ' + arg);
q.enqueue((arg: string) => 'name length is: ' + arg);

q.exec('FooBar') // Ok(Queue(['name is: FooBar', 'name length is: 6']))
```

___

###  FunctionStack

Ƭ **FunctionStack**: *[FunctionStackLike](../classes/_stack_.functionstacklike.md)‹Fn›*

*Defined in [Stack.ts:548](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L548)*

Represents a Stack of Functions data type

Stack is a linear data structure in which addition or removal of element follows LIFO (last in, first out).

```ts
import { FunctionStack } from 'tiinvo';

const q = FunctionStack();

q.push((arg: number) => arg * 2);
q.push((arg: number) => arg * 4);
q.push((arg: number) => arg * 6);

q.exec(10) // Ok(Queue([20, 40, 60]))
```

___

###  Queue

Ƭ **Queue**: *[QueueLike](../classes/_stack_.queuelike.md)‹T›*

*Defined in [Stack.ts:572](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L572)*

Represents a Queue data type

Queue is a linear data structure in which addition or removal of element follows FIFO (first in, first out).

```ts
import { Queue } from 'tiinvo';

const q = Queue();

q.enqueue('foo');
q.enqueue('bar');
q.enqueue('baz');

q.length // 3

q.top() // 'foo'
```

___

###  Stack

Ƭ **Stack**: *[StackLike](../classes/_stack_.stacklike.md)‹T›*

*Defined in [Stack.ts:602](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L602)*

Represents a Stack data type

Stack is a linear data structure in which addition or removal of element follows LIFO (last in, first out).

```ts
import { Queue, Stack } from 'stack';

const q = Queue();
const s = Stack();

s.push(10);
s.push(20);
s.push(30);

s.length // 3

s.top() // 30

q.enqueue('foo');
q.enqueue('bar');
q.enqueue('baz');

q.length // 3

q.top() // 'foo'
```

## Functions

###  FunctionQueue

▸ **FunctionQueue**<**Fn**>(`args`: Fn[]): *FunctionQueue‹Fn›*

*Defined in [Stack.ts:616](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L616)*

Represents a Queue of Functions

**`export`** 

**`template`** Fn

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | Fn[] |  [] |

**Returns:** *FunctionQueue‹Fn›*

___

###  FunctionStack

▸ **FunctionStack**<**Fn**>(`args`: Fn[]): *FunctionStack‹Fn›*

*Defined in [Stack.ts:634](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L634)*

Represents a Stack of Functions

**`export`** 

**`template`** Fn

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | Fn[] |  [] |

**Returns:** *FunctionStack‹Fn›*

___

###  Queue

▸ **Queue**<**T**>(`args`: T[]): *Queue‹T›*

*Defined in [Stack.ts:652](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L652)*

Represents a Queue data type

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | T[] |  [] |

**Returns:** *Queue‹T›*

___

###  Stack

▸ **Stack**<**T**>(`args`: T[]): *Stack‹T›*

*Defined in [Stack.ts:664](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L664)*

Represents a Stack data type

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | T[] |  [] |

**Returns:** *Stack‹T›*

___

### `Const` ensureFunctionArray

▸ **ensureFunctionArray**(`message`: string): *(Anonymous function)*

*Defined in [Stack.ts:604](https://github.com/OctoD/tiinvo/blob/52c8484/src/Stack.ts#L604)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *(Anonymous function)*
