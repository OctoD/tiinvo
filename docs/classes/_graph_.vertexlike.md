[tiinvo - v1.6.0](../README.md) › ["Graph"](../modules/_graph_.md) › [VertexLike](_graph_.vertexlike.md)

# Class: VertexLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **VertexLike**

## Index

### Constructors

* [constructor](_graph_.vertexlike.md#constructor)

### Properties

* [_name](_graph_.vertexlike.md#protected-_name)
* [_value](_graph_.vertexlike.md#protected-_value)
* [connections](_graph_.vertexlike.md#protected-connections)

### Methods

* [connect](_graph_.vertexlike.md#connect)
* [isNeighbourOf](_graph_.vertexlike.md#isneighbourof)
* [name](_graph_.vertexlike.md#name)
* [neighbours](_graph_.vertexlike.md#neighbours)
* [value](_graph_.vertexlike.md#value)

## Constructors

###  constructor

\+ **new VertexLike**(`_name`: string, `_value`: T): *[VertexLike](_graph_.vertexlike.md)*

*Defined in [Graph.ts:171](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`_name` | string |
`_value` | T |

**Returns:** *[VertexLike](_graph_.vertexlike.md)*

## Properties

### `Protected` _name

• **_name**: *string*

*Defined in [Graph.ts:173](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L173)*

___

### `Protected` _value

• **_value**: *T*

*Defined in [Graph.ts:173](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L173)*

___

### `Protected` connections

• **connections**: *Map‹string, [EdgeLike](_graph_.edgelike.md)›* =  new Map()

*Defined in [Graph.ts:171](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L171)*

## Methods

###  connect

▸ **connect**(`edge`: [Edge](../modules/_graph_.md#edge)): *[Result](../modules/_result_.md#result)‹[Vertex](../modules/_graph_.md#vertex), Error›*

*Defined in [Graph.ts:193](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L193)*

Connects an `Edge` to the `Vertex<T>`. Returns a `Err<Vertex>` if the `Vertex` cannot be connected, otherwise returns `Ok<Vertex>`.

```ts
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');

v1.connect(Edge(v1, v2)) // Ok(Vertex('b'))
v2.connect(Edge(v2, v1)) // Err('b is already sibling to a');
v3.connect(Edge(v1, v2)) // Err('This edge does not contains vertex c');
```

**`memberof`** VertexLike

**Parameters:**

Name | Type |
------ | ------ |
`edge` | [Edge](../modules/_graph_.md#edge) |

**Returns:** *[Result](../modules/_result_.md#result)‹[Vertex](../modules/_graph_.md#vertex), Error›*

___

###  isNeighbourOf

▸ **isNeighbourOf**<**U**>(`vertex`: [Vertex](../modules/_graph_.md#vertex)‹U›): *boolean*

*Defined in [Graph.ts:239](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L239)*

Returns `true` if `Vertex<T>` is neighbour of `Vertex<U>`, otherwise returns `false`

```ts
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');

v1.connect(Edge(v1, v2));
v2.connect(Edge(v2, v3));

v1.isNeighbourOf(v2) // true
v2.isNeighbourOf(v1) // true
v1.isNeighbourOf(v3) // false
v3.isNeighbourOf(v1) // false
v2.isNeighbourOf(v3) // true
```

**`template`** U

**`memberof`** VertexLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | [Vertex](../modules/_graph_.md#vertex)‹U› |

**Returns:** *boolean*

___

###  name

▸ **name**(): *string*

*Defined in [Graph.ts:253](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L253)*

Returns Vertex name

```ts
Vertex('a').name() // 'a'
```

**`memberof`** VertexLike

**Returns:** *string*

___

###  neighbours

▸ **neighbours**(): *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)[]›*

*Defined in [Graph.ts:278](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L278)*

Returns all neighbours to a `Vertex<T>` as a `Option<Vertex[]>` is there are any, otherwise returns `None`.

```ts
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');
const v4 = Vertex('d');
const v5 = Vertex('f');

v1.connect(Edge(v1, v2))
v1.connect(Edge(v1, v3))
v1.connect(Edge(v1, v4))

v1.neighbours() // Some([Vertex('a'), Vertex('b'), Vertex('c'), Vertex('d')])
v5.neighbours() // None()
```

**`memberof`** VertexLike

**Returns:** *[Option](../modules/_option_.md#option)‹[Vertex](../modules/_graph_.md#vertex)[]›*

___

###  value

▸ **value**(): *[Option](../modules/_option_.md#option)‹T›*

*Defined in [Graph.ts:303](https://github.com/OctoD/tiinvo/blob/52c8484/src/Graph.ts#L303)*

Returns `Vertex<T>` value as `Option<T>` if is `Just`, otherwise returns `None`

```ts
Vertex('a').value() // None()
Vertex('a', 100).value() // Some(100)
```

**`memberof`** VertexLike

**Returns:** *[Option](../modules/_option_.md#option)‹T›*
