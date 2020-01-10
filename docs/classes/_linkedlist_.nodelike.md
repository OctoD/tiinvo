[tiinvo - v1.6.0](../README.md) › ["LinkedList"](../modules/_linkedlist_.md) › [NodeLike](_linkedlist_.nodelike.md)

# Class: NodeLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **NodeLike**

## Index

### Constructors

* [constructor](_linkedlist_.nodelike.md#constructor)

### Properties

* [_left](_linkedlist_.nodelike.md#protected-optional-_left)
* [_right](_linkedlist_.nodelike.md#protected-optional-_right)
* [_value](_linkedlist_.nodelike.md#protected-_value)

### Methods

* [farleft](_linkedlist_.nodelike.md#farleft)
* [farright](_linkedlist_.nodelike.md#farright)
* [left](_linkedlist_.nodelike.md#left)
* [right](_linkedlist_.nodelike.md#right)
* [setLeft](_linkedlist_.nodelike.md#setleft)
* [setRight](_linkedlist_.nodelike.md#setright)
* [value](_linkedlist_.nodelike.md#value)

## Constructors

###  constructor

\+ **new NodeLike**(`_value`: T, `_left?`: [NodeLike](_linkedlist_.nodelike.md)‹T›, `_right?`: [NodeLike](_linkedlist_.nodelike.md)‹T›): *[NodeLike](_linkedlist_.nodelike.md)*

*Defined in [LinkedList.ts:4](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | T |
`_left?` | [NodeLike](_linkedlist_.nodelike.md)‹T› |
`_right?` | [NodeLike](_linkedlist_.nodelike.md)‹T› |

**Returns:** *[NodeLike](_linkedlist_.nodelike.md)*

## Properties

### `Protected` `Optional` _left

• **_left**? : *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:7](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L7)*

___

### `Protected` `Optional` _right

• **_right**? : *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:8](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L8)*

___

### `Protected` _value

• **_value**: *T*

*Defined in [LinkedList.ts:6](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L6)*

## Methods

###  farleft

▸ **farleft**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:21](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L21)*

Returns a `Maybe<Node<T>>` of the farthest linked node to the left

```ts
Node(1).setRight(Node(2)).setRight(Node(3)).setRight(Node(4)).farleft() // Node(1)
```

**`memberof`** NodeLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  farright

▸ **farright**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:47](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L47)*

Returns a `Maybe<Node<T>>` of the farthest linked node to the right

```ts
Node(1).setLeft(Node(2)).setLeft(Node(3)).setLeft(Node(4)).farright() // Node(1)
```

**`memberof`** NodeLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  left

▸ **left**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:73](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L73)*

Returns a `Maybe<Node<T>>` of the linked node to the left

```ts
Node(1).setRight(Node(2)).left() // Node(1)
```

**`memberof`** NodeLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  right

▸ **right**(): *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

*Defined in [LinkedList.ts:87](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L87)*

Returns a `Maybe<Node<T>>` of the linked node to the right

```ts
Node(1).setLeft(Node(2)).right() // Node(1)
```

**`memberof`** NodeLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹[Node](../modules/_linkedlist_.md#node)‹T››*

___

###  setLeft

▸ **setLeft**(`node`: [NodeLike](_linkedlist_.nodelike.md)‹T›): *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:102](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L102)*

Sets a `Node<T>` to left. Returns linked node to left

```ts
Node(1).setLeft(Node(2)) // Node(2)
```

**`memberof`** NodeLike

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeLike](_linkedlist_.nodelike.md)‹T› |

**Returns:** *[NodeLike](_linkedlist_.nodelike.md)‹T›*

___

###  setRight

▸ **setRight**(`node`: [NodeLike](_linkedlist_.nodelike.md)‹T›): *[NodeLike](_linkedlist_.nodelike.md)‹T›*

*Defined in [LinkedList.ts:130](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L130)*

Sets a `Node<T>` to right. Returns linked node to right

```ts
Node(1).setRight(Node(2)) // Node(2)
```

**`memberof`** NodeLike

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeLike](_linkedlist_.nodelike.md)‹T› |

**Returns:** *[NodeLike](_linkedlist_.nodelike.md)‹T›*

___

###  value

▸ **value**(): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Defined in [LinkedList.ts:158](https://github.com/OctoD/tiinvo/blob/52c8484/src/LinkedList.ts#L158)*

Returns `Node<T>` shadowed value as a `Maybe<T>`.

```ts
Node('foobar').value() // Just('foobar')
Node().value() // Nothing(undefined)
```

**`memberof`** NodeLike

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*
