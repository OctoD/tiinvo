[tiinvo](../README.md) / obj

# Namespace: obj

## Table of contents

### Functions

- [entries](obj.md#entries)
- [is](obj.md#is)
- [isExtensible](obj.md#isextensible)
- [isFrozen](obj.md#isfrozen)
- [isSealed](obj.md#issealed)
- [keys](obj.md#keys)
- [mapkey](obj.md#mapkey)
- [pick](obj.md#pick)
- [values](obj.md#values)

## Functions

### entries

▸ `Const`**entries**<T\>(`o`: *ArrayLike*<T\> \| { [s: string]: T;  }): [*string*, T][]

Returns an array of key/values of the enumerable properties of an object

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

obj.entries({ foo: 10, bar: 20 }) // [["foo", 10], ["bar", 20]]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`o` | *ArrayLike*<T\> \| { [s: string]: T;  } | the object   |

**Returns:** [*string*, T][]

Defined in: [src/obj.ts:15](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L15)

___

### is

▸ `Const`**is**<T\>(`t`: T): *function*

Returns true if the object T and object U values are the same, false otherwise.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

obj.is({ lorem: "ipsum" })({ lorem: "ipsum" }) // true
obj.is({ foo: 100 })({ bar: 200 }) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`t` | T |

**Returns:** *function*

Defined in: [src/obj.ts:32](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L32)

___

### isExtensible

▸ `Const`**isExtensible**<T\>(`o`: T): *boolean*

Returns a value that indicates whether new properties can be added to an object.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isExtensible(test) // true

Object.preventExtensions(test);

obj.isExtensible(test) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *boolean*

Defined in: [src/obj.ts:54](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L54)

___

### isFrozen

▸ `Const`**isFrozen**<T\>(`o`: T): *boolean*

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isFrozen(test) // false

Object.freeze(test);

obj.isFrozen(test) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *boolean*

Defined in: [src/obj.ts:76](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L76)

___

### isSealed

▸ `Const`**isSealed**<T\>(`o`: T): *boolean*

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isSealed(test) // false

Object.seal(test);

obj.isSealed(test) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`o` | T |

**Returns:** *boolean*

Defined in: [src/obj.ts:98](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L98)

___

### keys

▸ `Const`**keys**<T\>(`obj`: T): keyof T[]

Returns the names of the enumerable string properties and methods of an object.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

obj.keys({ foo: 1, bar: 2, baz: 3 }) // ["foo", "bar", "baz"]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** keyof T[]

Defined in: [src/obj.ts:114](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L114)

___

### mapkey

▸ `Const`**mapkey**<T\>(`key`: keyof T): *function*

Creates a mapper function for the type T.

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

const test = { foo: 200, bar: 'baz' };

const map = obj.mapkey<typeof test>('foo')

map(test) // 200

```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof T |

**Returns:** *function*

Defined in: [src/obj.ts:135](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L135)

___

### pick

▸ `Const`**pick**<T\>(...`keys`: T[]): *function*

Given a set of properties T whose keys are in the object U, returns a new object with all picked properties

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

const test = { foo: 100, bar: 200, baz: 300 };

obj.pick(`foo`, `baz`)(test) // { foo: 100, baz: 300 }
```

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *string* |

#### Parameters:

Name | Type |
------ | ------ |
`...keys` | T[] |

**Returns:** *function*

Defined in: [src/obj.ts:153](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L153)

___

### values

▸ `Const`**values**<T\>(`obj`: { [s: string]: T;  }): T[]

Returns an array of values of the enumerable properties of an object

**`since`** 2.10.0

**`example`** 

```ts
import { obj } from 'tiinvo';

obj.values({ foo: 1, bar: 2, baz: 3 }) // [1, 2, 3]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`obj` | { [s: string]: T;  } |

**Returns:** T[]

Defined in: [src/obj.ts:172](https://github.com/OctoD/tiinvo/blob/c824e02/src/obj.ts#L172)
