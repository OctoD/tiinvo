[tiinvo - v1.6.0](../README.md) › ["GetSet"](../modules/_getset_.md) › [GetSet](_getset_.getset.md)

# Interface: GetSet <**T**>

Defines a get/set object

```ts
import { GetSet } from 'tiinvo';

const mynumber = GetSet(10);

mynumber.get() // 10
mynumber.set(11)
mynumber.get() // 11
```

**`export`** 

**`interface`** GetSet

**`template`** T

## Type parameters

▪ **T**

## Hierarchy

* **GetSet**

## Index

### Methods

* [get](_getset_.getset.md#get)
* [set](_getset_.getset.md#set)

## Methods

###  get

▸ **get**(): *T*

Defined in GetSet.ts:30

Gets current value

```ts
const value = GetSet(10);
value.get() // 10
```

**`memberof`** GetSet

**Returns:** *T*

___

###  set

▸ **set**(`value`: T): *void*

Defined in GetSet.ts:37

**`memberof`** GetSet

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*
