[tiinvo - v1.6.0](../README.md) › ["Graph"](../modules/_graph_.md) › [EdgeLike](_graph_.edgelike.md)

# Class: EdgeLike

## Hierarchy

* **EdgeLike**

## Index

### Constructors

* [constructor](_graph_.edgelike.md#constructor)

### Properties

* [_left](_graph_.edgelike.md#protected-_left)
* [_right](_graph_.edgelike.md#protected-_right)
* [_value](_graph_.edgelike.md#protected-_value)

### Methods

* [left](_graph_.edgelike.md#left)
* [opposing](_graph_.edgelike.md#opposing)
* [right](_graph_.edgelike.md#right)
* [value](_graph_.edgelike.md#value)

## Constructors

###  constructor

\+ **new EdgeLike**(`_value`: number, `_left`: [Vertex](../modules/_graph_.md#vertex), `_right`: [Vertex](../modules/_graph_.md#vertex)): *[EdgeLike](_graph_.edgelike.md)*

*Defined in [Graph.ts:5](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | number |
`_left` | [Vertex](../modules/_graph_.md#vertex) |
`_right` | [Vertex](../modules/_graph_.md#vertex) |

**Returns:** *[EdgeLike](_graph_.edgelike.md)*

## Properties

### `Protected` _left

• **_left**: *[Vertex](../modules/_graph_.md#vertex)*

*Defined in [Graph.ts:8](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L8)*

___

### `Protected` _right

• **_right**: *[Vertex](../modules/_graph_.md#vertex)*

*Defined in [Graph.ts:9](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L9)*

___

### `Protected` _value

• **_value**: *number*

*Defined in [Graph.ts:7](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L7)*

## Methods

###  left

▸ **left**(): *[Option](../modules/_option_.md#option)‹[VertexLike](_graph_.vertexlike.md)›*

*Defined in [Graph.ts:23](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L23)*

Gets the left connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`

```ts
const edge = Edge(Vertex('a'), Vertex('b'))
edge.left() // Option(Vertex('a'))
```

**`memberof`** EdgeLike

**Returns:** *[Option](../modules/_option_.md#option)‹[VertexLike](_graph_.vertexlike.md)›*

___

###  opposing

▸ **opposing**(`vertex`: [Vertex](../modules/_graph_.md#vertex)): *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)›*

*Defined in [Graph.ts:45](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L45)*

Retuns the opposing `Vertex<T>` of `vertex` as `Option<Vertex<T>>` if the `Edge` contains the passed `vertex`. If the `Edge` does not contains `vertex`, it will return `None`.

```ts
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');
const edge = Edge(v1, v2);

edge.opposing(v1) // Option<Vertex('b')>
edge.opposing(v2) // Option<Vertex('a')>
edge.opposing(v3) // None
```

**`memberof`** EdgeLike

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | [Vertex](../modules/_graph_.md#vertex) |

**Returns:** *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)›*

___

###  right

▸ **right**(): *[Option](../modules/_option_.md#option)‹[VertexLike](_graph_.vertexlike.md)›*

*Defined in [Graph.ts:67](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L67)*

Gets the right connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`

```ts
const edge = Edge(Vertex('a'), Vertex('b'))
edge.right() // Option(Vertex('b'))
```

**`memberof`** EdgeLike

**Returns:** *[Option](../modules/_option_.md#option)‹[VertexLike](_graph_.vertexlike.md)›*

___

###  value

▸ **value**(): *number*

*Defined in [Graph.ts:82](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L82)*

It returns stored value of an `Edge`.

```ts
const edge = Edge(Vertex('a'), Vertex('b'), 1001)
edge.value() // 1001
```

**`memberof`** EdgeLike

**Returns:** *number*
