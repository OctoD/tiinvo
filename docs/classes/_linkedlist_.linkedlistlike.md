[tiinvo - v1.5.2](../README.md) › ["LinkedList"](../modules/_linkedlist_.md) › [LinkedListLike](_linkedlist_.linkedlistlike.md)

# Class: LinkedListLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **LinkedListLike**

## Index

### Constructors

* [constructor](_linkedlist_.linkedlistlike.md#constructor)

### Properties

* [_head](_linkedlist_.linkedlistlike.md#protected-optional-_head)
* [_tail](_linkedlist_.linkedlistlike.md#protected-optional-_tail)

### Methods

* [append](_linkedlist_.linkedlistlike.md#append)
* [forEach](_linkedlist_.linkedlistlike.md#foreach)
* [head](_linkedlist_.linkedlistlike.md#head)
* [map](_linkedlist_.linkedlistlike.md#map)
* [size](_linkedlist_.linkedlistlike.md#size)
* [tail](_linkedlist_.linkedlistlike.md#tail)
* [value](_linkedlist_.linkedlistlike.md#value)

## Constructors

###  constructor

\+ **new LinkedListLike**(`initialValues`: T[]): *[LinkedListLike](_linkedlist_.linkedlistlike.md)*

*Defined in [LinkedList.ts:165](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L165)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`initialValues` | T[] |  [] |

**Returns:** *[LinkedListLike](_linkedlist_.linkedlistlike.md)*

## Properties

### `Protected` `Optional` _head

• **_head**? : *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:164](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L164)*

___

### `Protected` `Optional` _tail

• **_tail**? : *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:165](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L165)*

## Methods

###  append

▸ **append**(`node`: [Node](../modules/_linkedlist_.md#node)‹T›): *this*

*Defined in [LinkedList.ts:182](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L182)*

Appends a `Node<T>` to the `LinkedList<T>`

```ts
LinkedList().append(Node(1)).append(Node(2)) // LinkedList([1, 2])
```

**`memberof`** LinkedListLike

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](../modules/_linkedlist_.md#node)‹T› |

**Returns:** *this*

___

###  forEach

▸ **forEach**<**Fn**>(`fn`: Fn): *void*

*Defined in [LinkedList.ts:208](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L208)*

Calls a function `Fn` for each `Node<T>`.

```ts
List([1,2,3]).forEach(arg => console.log(arg.unwrap())) // logs 1, 2, 3
```

**`template`** Fn

**`memberof`** LinkedListLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *void*

___

###  head

▸ **head**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:230](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L230)*

Returns list's head as `Just<Node<T>>` if the list has a head, otherwise returns a `Nothing<Node<T>>` if the list does not have a head.

```ts
LinkedList().head() // Nothing()
LinkedList([1]).head() // Just(Node(1))
```

**`memberof`** LinkedListLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  map

▸ **map**<**Fn**, **U**>(`fn`: Fn): *[LinkedListLike](_linkedlist_.linkedlistlike.md)‹U›*

*Defined in [LinkedList.ts:253](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L253)*

Applies `Fn` to every `Node<T>` to a `Node<U>` in a `LinkedList<T>` and returns a `LinkedList<U>`

```ts
LinkedList([1, 2, 3])
   .map(arg =>
       arg.cata({
           Nothing: () => 'empty',
           Just: val => `Number ${val} is ${val % 2 === 0 ? 'even' : 'odd'}`
       })
   )
```

**`template`** Fn

**`template`** U

**`memberof`** LinkedListLike

**Type parameters:**

▪ **Fn**: *function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[LinkedListLike](_linkedlist_.linkedlistlike.md)‹U›*

___

###  size

▸ **size**(): *number*

*Defined in [LinkedList.ts:273](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L273)*

Returns List size

```ts
LinkedList().addToHead(Node(1)).addToHead(Node(2)).addToHead(Node(3)).size() // 3
```

**`memberof`** LinkedListLike

**Returns:** *number*

___

###  tail

▸ **tail**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:292](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L292)*

Returns `Just<Node<T>>` if the `LinkedList<T>` has a tail, otherwise returns `Nothing`

```ts
LinkedList().tail() // Nothing()
LinkedList([1]).tail() // Just(Node(1))
```

**`memberof`** LinkedListLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  value

▸ **value**(): *T[]*

*Defined in [LinkedList.ts:306](https://github.com/OctoD/tiinvo/blob/7d2a102/src/LinkedList.ts#L306)*

Returns `LinkedList<T>` value as an array of `T`.

```ts
LinkedList([1,2,3]).value() // [1,2,3]
```

**`memberof`** LinkedListLike

**Returns:** *T[]*
