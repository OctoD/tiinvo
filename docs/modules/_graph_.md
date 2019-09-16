**[tiinvo](../README.md)**

[Globals](../README.md) › ["Graph"](_graph_.md)

# External module: "Graph"

## Index

### Classes

* [EdgeLike](../classes/_graph_.edgelike.md)
* [GraphLike](../classes/_graph_.graphlike.md)
* [VertexLike](../classes/_graph_.vertexlike.md)

### Type aliases

* [Edge](_graph_.md#edge)
* [Graph](_graph_.md#graph)
* [Vertex](_graph_.md#vertex)

### Functions

* [Edge](_graph_.md#edge)
* [Graph](_graph_.md#graph)
* [Vertex](_graph_.md#vertex)

## Type aliases

###  Edge

Ƭ **Edge**: *[EdgeLike](../classes/_graph_.edgelike.md)*

*Defined in [Graph.ts:309](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L309)*

___

###  Graph

Ƭ **Graph**: *[GraphLike](../classes/_graph_.graphlike.md)*

*Defined in [Graph.ts:308](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L308)*

___

###  Vertex

Ƭ **Vertex**: *[VertexLike](../classes/_graph_.vertexlike.md)‹T›*

*Defined in [Graph.ts:310](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L310)*

## Functions

###  Edge

▸ **Edge**<**T**, **U**>(`left`: [Vertex](_graph_.md#vertex)‹T›, `right`: [Vertex](_graph_.md#vertex)‹U›, `value`: number): *[Edge]()*

*Defined in [Graph.ts:323](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L323)*

Creates a new `Edge` from two `Vertex<T>`

**`export`** 

**`template`** T

**`template`** U

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`left` | [Vertex](_graph_.md#vertex)‹T› | - |
`right` | [Vertex](_graph_.md#vertex)‹U› | - |
`value` | number | 0 |

**Returns:** *[Edge]()*

___

###  Graph

▸ **Graph**(`vertices`: [Vertex](_graph_.md#vertex)[], `edges`: [Edge](_graph_.md#edge)[]): *[Graph]()*

*Defined in [Graph.ts:339](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L339)*

**`export`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`vertices` | [Vertex](_graph_.md#vertex)[] |  [] |
`edges` | [Edge](_graph_.md#edge)[] |  [] |

**Returns:** *[Graph]()*

___

###  Vertex

▸ **Vertex**<**T**>(`name`: string, `value`: T): *[Vertex]()‹T›*

*Defined in [Graph.ts:352](https://github.com/OctoD/tiinvo/blob/f0cb45e/src/Graph.ts#L352)*

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`value` | T |  undefined as any |

**Returns:** *[Vertex]()‹T›*