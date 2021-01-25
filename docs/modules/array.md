[tiinvo](../README.md) / array

# Namespace: array

## Table of contents

### Functions

- [eq](array.md#eq)
- [eqOr](array.md#eqor)
- [every](array.md#every)
- [filter](array.md#filter)
- [find](array.md#find)
- [flattern](array.md#flattern)
- [getfirst](array.md#getfirst)
- [getfirstOr](array.md#getfirstor)
- [getlast](array.md#getlast)
- [getlastOr](array.md#getlastor)
- [includes](array.md#includes)
- [isempty](array.md#isempty)
- [length](array.md#length)
- [map](array.md#map)
- [random](array.md#random)
- [reduce](array.md#reduce)
- [reduceright](array.md#reduceright)
- [reverse](array.md#reverse)
- [some](array.md#some)
- [sort](array.md#sort)
- [unsafecast](array.md#unsafecast)

## Functions

### eq

▸ `Const`**eq**(`index`: *number*): *function*

Gets an element in an array at a given index.
Returns undefined if nothing is found at that index.

**`example`** 

```ts
const get2nd = eq(1);
get2nd([100, 200, 300]); // 200
```

#### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *function*

Defined in: [array.ts:15](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L15)

___

### eqOr

▸ `Const`**eqOr**(`index`: *number*): *function*

Gets an element in an array at a given index.
Returns `or` if nothing is found at that index.

**`example`** 

```ts
const get100th = eqOr(100)(20);
get100th([100, 200, 300]); // 20
```

#### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *function*

Defined in: [array.ts:48](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L48)

___

### every

▸ `Const`**every**<T\>(`fn`: (`arg`: T) => *boolean*): *function*

Returns true if every element in the array satisfy the given predicate.

**`example`** 

```ts
const everynumber = every(isnumber);
everynumber([1, 2, 3, 4])      // true
everynumber([1, 2, 3, 'nope']) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`arg`: T) => *boolean* |

**Returns:** *function*

Defined in: [array.ts:30](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L30)

___

### filter

▸ `Const`**filter**<T\>(`fn`: (`arg`: T) => *boolean*): *function*

Filters an array with the given predicate.

**`example`** 

```ts
const onlyeven = filter((arg: number) => arg % 2 === 0);
onlyeven([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`arg`: T) => *boolean* |

**Returns:** *function*

Defined in: [array.ts:67](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L67)

___

### find

▸ `Const`**find**<T\>(`fn`: (`arg`: T) => *boolean*): *function*

Returns the first valid element. If nothing is found returns undefined

**`example`** 

```ts
const findhermione = find(predicate.withsamevalue('Hermione'));
findhermione(['Harry', 'Hermione', 'Ronald']) // 'Hermione'
findhermione(['Severus', 'Dumbledore', 'Tomarevaca']) // undefined
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`arg`: T) => *boolean* |

**Returns:** *function*

Defined in: [array.ts:86](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L86)

___

### flattern

▸ `Const`**flattern**<T\>(): *function*

Flatterns an array

**`example`** 

```ts
const flatnummatris = flattern<number>();
flatnummatris([[1, 2], [3, 4]]) // [1, 2, 3, 4];
```

#### Type parameters:

Name |
------ |
`T` |

**Returns:** *function*

Defined in: [array.ts:103](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L103)

___

### getfirst

▸ `Const`**getfirst**(): *function*

Gets first element of an array.
Returns undefined if the array is empty.

**`example`** 

```ts
getfirst()([100, 200]) // 100
```

**Returns:** *function*

Defined in: [array.ts:117](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L117)

___

### getfirstOr

▸ `Const`**getfirstOr**<T\>(`or`: T): *function*

Gets first element of an array.
Returns `or` if the array is empty.

**`example`** 

```ts
getfirstOr(20)([]) // 20
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`or` | T |

**Returns:** *function*

Defined in: [array.ts:132](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L132)

___

### getlast

▸ `Const`**getlast**(): *function*

Gets last element of an array.
Returns undefined if the array is empty.

**`example`** 

```ts
getfirst()([100, 200]) // 100
```

**Returns:** *function*

Defined in: [array.ts:146](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L146)

___

### getlastOr

▸ `Const`**getlastOr**<T\>(`or`: T): *function*

Returns the last element of an array or the given fallback.

**`example`** 

```ts
const lastnumber = getlastOr(0);
lastnumber([1, 2, 3]) // 3
lastnumber([]) // 0
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`or` | T |

**Returns:** *function*

Defined in: [array.ts:165](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L165)

___

### includes

▸ `Const`**includes**<T\>(`value`: T): *function*

Checks if an element is inside an array

**`example`** 

```ts
const includes100 = includes(100);

includes100([10, 20, 30, 100]) // true
includes100([10, 20, 30, 900]) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *function*

Defined in: [array.ts:195](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L195)

___

### isempty

▸ `Const`**isempty**(): *function*

Returns true if an array is empty

**`example`** 

```ts
isempty()([]) // true
isempty()([1]) // false
```

**Returns:** *function*

Defined in: [array.ts:179](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L179)

___

### length

▸ `Const`**length**(): *function*

**`example`** 

```ts

```

**Returns:** *function*

Defined in: [array.ts:208](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L208)

___

### map

▸ `Const`**map**<T, Z\>(`fn`: (`arg`: T) => Z): *function*

Maps an array of elements `T` to an array of elements `Z`

**`example`** 

```ts
interface Person {
   age: number;
   name: string;
}

const mapname = (person: Person) => person.name;
const mapnames = map(mapname);

maptostring([{ name: 'John', age: 21 }, { name: 'Julia', age: 33 }]) // ['John', 'Julia']
```

#### Type parameters:

Name |
------ |
`T` |
`Z` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`arg`: T) => Z |

**Returns:** *function*

Defined in: [array.ts:231](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L231)

___

### random

▸ `Const`**random**(): *function*

Returns a random element `T` from an array `T[]`

**`example`** 
```ts
const arr = [1, 2, 3]
arr.includes(random()(arr)) // true
```

**Returns:** *function*

Defined in: [array.ts:245](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L245)

___

### reduce

▸ `Const`**reduce**<T, Z\>(`accumulator`: Z, `fn`: (`total`: Z, `next`: T) => Z): *function*

Aggregates all values in a single input.
This aggregation starts from the first to the last element.

**`example`** 

```ts
const sum = reduce(0, (prev, next: number) => prev + next);
sum([1, 2, 3]) // 6
```

#### Type parameters:

Name |
------ |
`T` |
`Z` |

#### Parameters:

Name | Type |
------ | ------ |
`accumulator` | Z |
`fn` | (`total`: Z, `next`: T) => Z |

**Returns:** *function*

Defined in: [array.ts:264](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L264)

___

### reduceright

▸ `Const`**reduceright**<T, Z\>(`accumulator`: Z, `fn`: (`total`: Z, `next`: T) => Z): *function*

Aggregates all values in a single input.
This aggregation starts from the last to the first element.

**`example`** 

```ts
const sum = reduce(0, (next, prev: number) => prev - next);
sum([1, 2, 3]) // 0
```

#### Type parameters:

Name |
------ |
`T` |
`Z` |

#### Parameters:

Name | Type |
------ | ------ |
`accumulator` | Z |
`fn` | (`total`: Z, `next`: T) => Z |

**Returns:** *function*

Defined in: [array.ts:285](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L285)

___

### reverse

▸ `Const`**reverse**(): *function*

Reverse an array

**`example`** 

```ts
reverse()([1, 2, 3]) // [3, 2, 1]
```

**Returns:** *function*

Defined in: [array.ts:300](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L300)

___

### some

▸ `Const`**some**<T\>(`fn`: (`arg`: T) => *boolean*): *function*

Returns true if some elements in the array satisfy the given predicate.

**`example`** 

```ts
const somenumber = some(isnumber);
somenumber([1, 2, 3, 4]) // true
somenumber([null, undefined, 'nope']) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (`arg`: T) => *boolean* |

**Returns:** *function*

Defined in: [array.ts:314](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L314)

___

### sort

▸ `Const`**sort**<T\>(`comparefn`: (`arg1`: T, `arg2`: T) => *number*): *function*

Sorts an array with the given comparing function.

**`example`** 

```ts
const sortdesc = sort((num1: number, num2: number) => num2 - num1);
sort([3, 5, 1, 2, 10, 21, 12, 20]) // [ 21, 20, 12, 10, 5, 3, 2, 1 ]

```

**`template`** 

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`comparefn` | (`arg1`: T, `arg2`: T) => *number* |

**Returns:** *function*

Defined in: [array.ts:332](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L332)

___

### unsafecast

▸ `Const`**unsafecast**<T\>(): *function*

An unsafe cast to a type. Use it if TypeScript gives you a terrible headache.
Note that this operation is not type safe, since no conversion occurs at runtime.

**`template`** 

#### Type parameters:

Name |
------ |
`T` |

**Returns:** *function*

Defined in: [array.ts:343](https://github.com/OctoD/tiinvo/blob/5042f60/src/array.ts#L343)