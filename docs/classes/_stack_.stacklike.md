**[tiinvo](../README.md)**

[Globals](../README.md) › ["Stack"](../modules/_stack_.md) › [StackLike](_stack_.stacklike.md)

# Class: StackLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Stackable](_stack_.stackable.md)‹T›

  * **StackLike**

  * [FunctionStackLike](_stack_.functionstacklike.md)

## Index

### Constructors

* [constructor](_stack_.stacklike.md#constructor)

### Properties

* [elements](_stack_.stacklike.md#protected-elements)

### Methods

* [isEmpty](_stack_.stacklike.md#isempty)
* [map](_stack_.stacklike.md#map)
* [pop](_stack_.stacklike.md#pop)
* [push](_stack_.stacklike.md#push)
* [queue](_stack_.stacklike.md#queue)
* [size](_stack_.stacklike.md#size)
* [top](_stack_.stacklike.md#top)
* [value](_stack_.stacklike.md#value)

## Constructors

###  constructor

\+ **new StackLike**(`elements`: T[]): *[StackLike](_stack_.stacklike.md)*

*Inherited from [Stackable](_stack_.stackable.md).[constructor](_stack_.stackable.md#constructor)*

*Defined in [Stack.ts:6](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`elements` | T[] |

**Returns:** *[StackLike](_stack_.stacklike.md)*

## Properties

### `Protected` elements

• **elements**: *T[]*

*Inherited from [Stackable](_stack_.stackable.md).[elements](_stack_.stackable.md#protected-elements)*

*Defined in [Stack.ts:7](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L7)*

## Methods

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Stackable](_stack_.stackable.md).[isEmpty](_stack_.stackable.md#isempty)*

*Defined in [Stack.ts:22](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L22)*

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

▸ **map**<**Fn**>(`fn`: Fn): *[StackLike](_stack_.stacklike.md)‹ReturnType‹Fn››*

*Overrides [Stackable](_stack_.stackable.md).[map](_stack_.stackable.md#abstract-map)*

*Defined in [Stack.ts:183](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L183)*

Maps a `Stack<T>` to a `Stack<U>` applying a function `Fn` to every stacked element.

```ts
Stack([1,2,3]).map(arg => arg * 2) // Stack([2, 4, 6])
```

**`template`** Fn

**`memberof`** StackLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[StackLike](_stack_.stacklike.md)‹ReturnType‹Fn››*

___

###  pop

▸ **pop**(): *[Option](../modules/_option_.md#option)‹T›*

*Defined in [Stack.ts:202](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L202)*

Pops latest pushed element to the Stack, returning an `Option<T>` if the stack is not empty or a `None` if the stack is empty.

```ts
const s = Stack([1,2,3]);
s.pop() // Option(3)
s.pop() // Option(2)
s.pop() // Option(1)
s.pop() // None()
```

**`memberof`** StackLike

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  push

▸ **push**(`arg`: T): *this*

*Defined in [Stack.ts:221](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L221)*

Pushes an element to the Stack, returning `Stacklike<T>`

```ts
const s = Stack();

s.push(1); // Stack([1])
s.push(2); // Stack([1, 2])
s.push(3); // Stack([1, 2, 3])
```

**`memberof`** StackLike

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** *this*

___

###  queue

▸ **queue**(): *[QueueLike](_stack_.queuelike.md)‹T›*

*Defined in [Stack.ts:236](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L236)*

Converts a `StackLike<T>` to a `QueueLike<T>`

```ts
Stack(['hello']).queue() // Queue(['hello'])
```

**`memberof`** StackLike

**Returns:** *[QueueLike](_stack_.queuelike.md)‹T›*

___

###  size

▸ **size**(): *number*

*Inherited from [Stackable](_stack_.stackable.md).[size](_stack_.stackable.md#size)*

*Defined in [Stack.ts:53](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L53)*

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

###  top

▸ **top**(): *[Option](../modules/_option_.md#option)‹T›*

*Overrides [Stackable](_stack_.stackable.md).[top](_stack_.stackable.md#abstract-top)*

*Defined in [Stack.ts:253](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L253)*

Returns latests pushed element as an `Option<T>` if the Stack is not empty, otherwise returns `None`

```ts
Stack([1,2,3]).top() // Option(3)
Stack([1,2]).top() // Option(2)
Stack([1]).top() // Option(1)
Stack().top() // None()
```

**`memberof`** StackLike

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  value

▸ **value**(): *T[]*

*Inherited from [Stackable](_stack_.stackable.md).[value](_stack_.stackable.md#value)*

*Defined in [Stack.ts:77](https://github.com/OctoD/tiinvo/blob/191449a/src/Stack.ts#L77)*

Returns added elements

**`memberof`** Stackable

**Returns:** *T[]*