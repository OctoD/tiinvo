**[tiinvo](../README.md)**

[Globals](../README.md) › ["Stack"](../modules/_stack_.md) › [QueueLike](_stack_.queuelike.md)

# Class: QueueLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Stackable](_stack_.stackable.md)‹T›

  * **QueueLike**

## Index

### Constructors

* [constructor](_stack_.queuelike.md#constructor)

### Properties

* [elements](_stack_.queuelike.md#protected-elements)

### Methods

* [dequeue](_stack_.queuelike.md#dequeue)
* [enqueue](_stack_.queuelike.md#enqueue)
* [isEmpty](_stack_.queuelike.md#isempty)
* [map](_stack_.queuelike.md#map)
* [size](_stack_.queuelike.md#size)
* [stack](_stack_.queuelike.md#stack)
* [top](_stack_.queuelike.md#top)
* [value](_stack_.queuelike.md#value)

## Constructors

###  constructor

\+ **new QueueLike**(`elements`: T[]): *[QueueLike](_stack_.queuelike.md)*

*Inherited from [Stackable](_stack_.stackable.md).[constructor](_stack_.stackable.md#constructor)*

Defined in Stack.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`elements` | T[] |

**Returns:** *[QueueLike](_stack_.queuelike.md)*

## Properties

### `Protected` elements

• **elements**: *T[]*

*Inherited from [Stackable](_stack_.stackable.md).[elements](_stack_.stackable.md#protected-elements)*

Defined in Stack.ts:5

## Methods

###  dequeue

▸ **dequeue**(): *[Option](../modules/_option_.md#option)‹T›*

Defined in Stack.ts:94

Dequeues the oldest enqueued element, returning an `Option<T>` representing its value. If the queue is empty, a `None` will be returned

```ts
const q = Queue([1,2,3]);

q.dequeue() // Option(1);
q.dequeue() // Option(2);
q.dequeue() // Option(3);
q.dequeue() // None();
```

**`memberof`** QueueLike

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  enqueue

▸ **enqueue**(`arg`: T): *[QueueLike](_stack_.queuelike.md)‹T›*

Defined in Stack.ts:116

Enqueues an element `T`, returning current `Queuelike<T>`

```ts
Queue<number>()
 .enqueue(1)
 .enqueue(2)
 .enqueue(3)
```

**`memberof`** QueueLike

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *[QueueLike](_stack_.queuelike.md)‹T›*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Stackable](_stack_.stackable.md).[isEmpty](_stack_.stackable.md#isempty)*

Defined in Stack.ts:20

Returns if is empty

```ts
Queue().isEmpty() // true
Queue([1,2]).isEmpty() // false
Stack().isEmpty() // true
Stack([1,2]).isEmpty() // false
```

**`memberof`** Stackable

**Returns:** *boolean*

___

###  map

▸ **map**<**Fn**>(`fn`: Fn): *[QueueLike](_stack_.queuelike.md)‹ReturnType‹Fn››*

*Overrides [Stackable](_stack_.stackable.md).[map](_stack_.stackable.md#abstract-map)*

Defined in Stack.ts:133

Maps a `Queue<T>` to a `Queue<U>` applying a function `Fn` to every enqueued element.

```ts
Queue([1,2,3]).map(arg => arg * 2) // Queue([2, 4, 6])
```

**`template`** Fn

**`memberof`** QueueLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[QueueLike](_stack_.queuelike.md)‹ReturnType‹Fn››*

___

###  size

▸ **size**(): *number*

*Inherited from [Stackable](_stack_.stackable.md).[size](_stack_.stackable.md#size)*

Defined in Stack.ts:49

Returns current size

```ts
Queue().size() // 0
Stack().size() // 0
Queue([1,2]).size() // 2
Stack([1,2,3]).size() // 3
```

**`memberof`** Stackable

**Returns:** *number*

___

###  stack

▸ **stack**(): *[StackLike](_stack_.stacklike.md)‹T›*

Defined in Stack.ts:148

Converts a `Queue<T>` to a `Stack<T>`

```ts
Queue([1]).stack() // Stack([1])
```

**`memberof`** QueueLike

**Returns:** *[StackLike](_stack_.stacklike.md)‹T›*

___

###  top

▸ **top**(): *[Option](../modules/_option_.md#option)‹T›*

*Overrides [Stackable](_stack_.stackable.md).[top](_stack_.stackable.md#abstract-top)*

Defined in Stack.ts:162

Returns oldest enqueued element `T` as an `Option<T>`. If the queue is empty, it returns `None`.

```ts
Queue([1,2,3]).top() // Option(1)
```

**`memberof`** QueueLike

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  value

▸ **value**(): *T[]*

*Inherited from [Stackable](_stack_.stackable.md).[value](_stack_.stackable.md#value)*

Defined in Stack.ts:73

Returns added elements

**`memberof`** Stackable

**Returns:** *T[]*