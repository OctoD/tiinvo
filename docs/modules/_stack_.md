**[tiinvo](../README.md)**

[Globals](../README.md) › ["Stack"](_stack_.md)

# External module: "Stack"

## Index

### Classes

* [QueueLike](../classes/_stack_.queuelike.md)
* [StackLike](../classes/_stack_.stacklike.md)
* [Stackable](../classes/_stack_.stackable.md)

### Type aliases

* [Queue](_stack_.md#queue)
* [Stack](_stack_.md#stack)

### Functions

* [Queue](_stack_.md#queue)
* [Stack](_stack_.md#stack)

## Type aliases

###  Queue

Ƭ **Queue**: *[QueueLike](../classes/_stack_.queuelike.md)‹T›*

Defined in Stack.ts:257

Represents a Queue data type

___

###  Stack

Ƭ **Stack**: *[StackLike](../classes/_stack_.stacklike.md)‹T›*

Defined in Stack.ts:288

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

###  Queue

▸ **Queue**<**T**>(`args`: T[]): *[Queue]()‹T›*

Defined in Stack.ts:298

Represents a Queue data type

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | T[] |  [] |

**Returns:** *[Queue]()‹T›*

___

###  Stack

▸ **Stack**<**T**>(`args`: T[]): *[Stack]()‹T›*

Defined in Stack.ts:310

Represents a Stack data type

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | T[] |  [] |

**Returns:** *[Stack]()‹T›*