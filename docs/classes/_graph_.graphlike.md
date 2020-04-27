[tiinvo](../README.md) › ["Graph"](../modules/_graph_.md) › [GraphLike](_graph_.graphlike.md)

# Class: GraphLike

## Hierarchy

* **GraphLike**

## Index

### Constructors

* [constructor](_graph_.graphlike.md#constructor)

### Properties

* [edges](_graph_.graphlike.md#protected-edges)
* [vertices](_graph_.graphlike.md#protected-vertices)

### Methods

* [adjacent](_graph_.graphlike.md#adjacent)
* [connect](_graph_.graphlike.md#connect)
* [neighbours](_graph_.graphlike.md#neighbours)

## Constructors

###  constructor

\+ **new GraphLike**(`vertices`: Set‹[VertexLike](_graph_.vertexlike.md)›, `edges`: Set‹[EdgeLike](_graph_.edgelike.md)›): *[GraphLike](_graph_.graphlike.md)*

*Defined in [Graph.ts:87](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`vertices` | Set‹[VertexLike](_graph_.vertexlike.md)› |
`edges` | Set‹[EdgeLike](_graph_.edgelike.md)› |

**Returns:** *[GraphLike](_graph_.graphlike.md)*

## Properties

### `Protected` edges

• **edges**: *Set‹[EdgeLike](_graph_.edgelike.md)›*

*Defined in [Graph.ts:90](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L90)*

___

### `Protected` vertices

• **vertices**: *Set‹[VertexLike](_graph_.vertexlike.md)›*

*Defined in [Graph.ts:89](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L89)*

## Methods

###  adjacent

▸ **adjacent**(`left`: [Vertex](../modules/_graph_.md#vertex), `right`: [Vertex](../modules/_graph_.md#vertex)): *boolean*

*Defined in [Graph.ts:116](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L116)*

Returns `true` if a `Vertex` is adjacent to another one.

```ts
const graph = Graph();
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');

graph.connect(v1, v2)
graph.connect(v2, v3)

graph.adjacent(v1, v2) // true
graph.adjacent(v1, v3) // false
graph.adjacent(v2, v3) // true
graph.adjacent(v2, v3) // true
```

**`memberof`** GraphLike

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Vertex](../modules/_graph_.md#vertex) |
`right` | [Vertex](../modules/_graph_.md#vertex) |

**Returns:** *boolean*

___

###  connect

▸ **connect**(`left`: [Vertex](../modules/_graph_.md#vertex), `right`: [Vertex](../modules/_graph_.md#vertex), `weight`: number): *[Result](../modules/_result_.md#result)‹[EdgeLike](_graph_.edgelike.md), ReferenceError›*

*Defined in [Graph.ts:140](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L140)*

Connects two vertices together, returning `Ok<Edge>` if the two vertices can be connected otherwise retuning an `Err`.

```ts
const graph = Graph();
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');

graph.connect(v1, v2) // Ok(Edge())
graph.connect(v2, v3) // Ok(Edge())
graph.connect(v2, v1) // Err()
```

**`memberof`** GraphLike

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`left` | [Vertex](../modules/_graph_.md#vertex) | - |
`right` | [Vertex](../modules/_graph_.md#vertex) | - |
`weight` | number | 0 |

**Returns:** *[Result](../modules/_result_.md#result)‹[EdgeLike](_graph_.edgelike.md), ReferenceError›*

___

###  neighbours

▸ **neighbours**(`vertex`: [Vertex](../modules/_graph_.md#vertex)): *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)[]›*

*Defined in [Graph.ts:165](https://github.com/OctoD/tiinvo/blob/9b6a9a6/src/Graph.ts#L165)*

Returns all neighbours to a `Vertex<T>` as a `Option<Vertex[]>` is there are any, otherwise returns `None`.

**`memberof`** GraphLike

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | [Vertex](../modules/_graph_.md#vertex) |

**Returns:** *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)[]›*
