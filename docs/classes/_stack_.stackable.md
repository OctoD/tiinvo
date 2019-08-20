**[tiinvo](../README.md)**

[Globals](../README.md) › ["Stack"](../modules/_stack_.md) › [Stackable](_stack_.stackable.md)

# Class: Stackable <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Stackable**

  * [QueueLike](_stack_.queuelike.md)

  * [StackLike](_stack_.stacklike.md)

## Index

### Constructors

* [constructor](_stack_.stackable.md#constructor)

### Properties

* [elements](_stack_.stackable.md#protected-elements)

### Methods

* [isEmpty](_stack_.stackable.md#isempty)
* [map](_stack_.stackable.md#abstract-map)
* [size](_stack_.stackable.md#size)
* [top](_stack_.stackable.md#abstract-top)
* [value](_stack_.stackable.md#value)

## Constructors

###  constructor

\+ **new Stackable**(`elements`: T[]): *[Stackable](_stack_.stackable.md)*

Defined in Stack.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`elements` | T[] |

**Returns:** *[Stackable](_stack_.stackable.md)*

## Properties

### `Protected` elements

• **elements**: *T[]*

Defined in Stack.ts:5

## Methods

###  isEmpty

▸ **isEmpty**(): *boolean*

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

### `Abstract` map

▸ **map**<**Fn**>(`fn`: Fn): *[Stackable](_stack_.stackable.md)‹ReturnType‹Fn››*

Defined in Stack.ts:34

**`abstract`** 

**`template`** Fn

**`template`** U

**`memberof`** Stackable

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[Stackable](_stack_.stackable.md)‹ReturnType‹Fn››*

___

###  size

▸ **size**(): *number*

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

### `Abstract` top

▸ **top**(): *[Option](../modules/_option_.md#option)‹T›*

Defined in Stack.ts:65

Returns nearest element to be removed from the pile

```ts
Queue([1,2,3]).top() // 1
Stack([1,2,3]).top() // 3
```

**`abstract`** 

**`memberof`** Stackable

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  value

▸ **value**(): *T[]*

Defined in Stack.ts:73

Returns added elements

**`memberof`** Stackable

**Returns:** *T[]*