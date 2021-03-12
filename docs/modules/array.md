[tiinvo](../README.md) / array

# Namespace: array

## Table of contents

### Functions

- [empty](array.md#empty)
- [eq](array.md#eq)
- [eqOr](array.md#eqor)
- [every](array.md#every)
- [filter](array.md#filter)
- [find](array.md#find)
- [first](array.md#first)
- [flat](array.md#flat)
- [flattern](array.md#flattern)
- [fromfunctions](array.md#fromfunctions)
- [getfirst](array.md#getfirst)
- [getfirstOr](array.md#getfirstor)
- [getlast](array.md#getlast)
- [getlastOr](array.md#getlastor)
- [includes](array.md#includes)
- [invert](array.md#invert)
- [isempty](array.md#isempty)
- [isnotempty](array.md#isnotempty)
- [join](array.md#join)
- [last](array.md#last)
- [len](array.md#len)
- [length](array.md#length)
- [map](array.md#map)
- [mix](array.md#mix)
- [notempty](array.md#notempty)
- [rand](array.md#rand)
- [random](array.md#random)
- [reduce](array.md#reduce)
- [reduceright](array.md#reduceright)
- [reverse](array.md#reverse)
- [shuffle](array.md#shuffle)
- [some](array.md#some)
- [sort](array.md#sort)
- [takefirstnth](array.md#takefirstnth)
- [takelastnth](array.md#takelastnth)
- [unsafecast](array.md#unsafecast)

## Functions

### empty

▸ `Const`**empty**<T\>(`arg`: T[]): *boolean*

Returns true if an array is empty

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.empty([]) // true
array.empty([1]) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** *boolean*

Defined in: [src/array.ts:268](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L268)

___

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

Defined in: [src/array.ts:17](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L17)

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

Defined in: [src/array.ts:50](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L50)

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

Defined in: [src/array.ts:32](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L32)

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

Defined in: [src/array.ts:69](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L69)

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

Defined in: [src/array.ts:88](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L88)

___

### first

▸ `Const`**first**<T\>(`arg`: T[]): *undefined* \| T

Gets first element of an array.
Returns undefined if the array is empty.

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.first([100, 200]) // 100
array.first([])         // undefined
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** *undefined* \| T

Defined in: [src/array.ts:171](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L171)

___

### flat

▸ `Const`**flat**<T\>(`arg`: T[][]): T[]

Flatterns an array

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.flat([[1, 2], [3, 4]]) // [1, 2, 3, 4];
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[][] |

**Returns:** T[]

Defined in: [src/array.ts:106](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L106)

___

### flattern

▸ `Const`**flattern**(): *function*

Flatterns an array

**`deprecated`** use `flat` instead

**`example`** 

```ts
const flatnummatris = flattern();
flatnummatris([[1, 2], [3, 4]]) // [1, 2, 3, 4];
```

**Returns:** *function*

Defined in: [src/array.ts:122](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L122)

___

### fromfunctions

▸ `Const`**fromfunctions**<Input, Output\>(...`fns`: [*FnUnary*](../README.md#fnunary)<Input, Output\>[]): *function*

Takes a list of functions, then call them passing the argument `Input` and returning an array of `Output`

**`example`** 

```ts
import { array, pipe } from 'tiinvo';

const SHIPPING = 5;
const VAT = 20;
const keepprice = (price: number) => price;
const vat = (price: number) => (price / 100) * VAT;
const shipping = (price: number) => price > 200 ? 0 : SHIPPING;

const total = pipe(
   array.fromfunctions(keepprice, vat, shipping),
   array.reduce(0, (sum: number, next: number) => sum + next)
);

const price = 100;

total(price) // 125
total(price) === vat(price) + shipping(price) + price
```

#### Type parameters:

Name | Description |
------ | ------ |
`Input` | Function Input type   |
`Output` | Function Output type   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...fns` | [*FnUnary*](../README.md#fnunary)<Input, Output\>[] | A list of functions    |

**Returns:** *function*

Defined in: [src/array.ts:153](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L153)

___

### getfirst

▸ `Const`**getfirst**(): *function*

Gets first element of an array.
Returns undefined if the array is empty.

**`deprecated`** use `first` instead

**`example`** 

```ts
getfirst()([100, 200]) // 100
```

**Returns:** *function*

Defined in: [src/array.ts:185](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L185)

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

Defined in: [src/array.ts:200](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L200)

___

### getlast

▸ `Const`**getlast**(): *function*

Gets last element of an array.
Returns undefined if the array is empty.

**`deprecated`** use `last` instead

**`example`** 

```ts
getfirst()([100, 200]) // 100
```

**Returns:** *function*

Defined in: [src/array.ts:233](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L233)

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

Defined in: [src/array.ts:251](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L251)

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

Defined in: [src/array.ts:329](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L329)

___

### invert

▸ `Const`**invert**<T\>(`arg`: T[]): T[]

Reverse an array

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.invert([1, 2, 3]) // [3, 2, 1]
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** T[]

Defined in: [src/array.ts:487](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L487)

___

### isempty

▸ `Const`**isempty**(): *function*

Returns true if an array is empty

**`deprecated`** use `empty` instead

**`example`** 

```ts
isempty()([]) // true
isempty()([1]) // false
```

**Returns:** *function*

Defined in: [src/array.ts:283](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L283)

___

### isnotempty

▸ `Const`**isnotempty**(): *function*

Returns true if an array is not empty

**`deprecated`** use `notempty` instead

**`example`** 

```ts
isempty()([]) // false
isempty()([1]) // true
```

**Returns:** *function*

Defined in: [src/array.ts:314](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L314)

___

### join

▸ `Const`**join**(`str`: *string*): *function*

joins an array

**`since`** 2.11.0

**`example`** 

```ts
const test = [1, 2, 3, 4];

array.join(`-`)(test) // `1-2-3-4`
```

#### Parameters:

Name | Type |
------ | ------ |
`str` | *string* |

**Returns:** *function*

Defined in: [src/array.ts:377](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L377)

___

### last

▸ `Const`**last**<T\>(`arg`: T[]): *undefined* \| T

Gets the last element of an array.
Returns undefined if the array is empty.

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.last([100, 200]) // 100
array.last([])         // undefined
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** *undefined* \| T

Defined in: [src/array.ts:218](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L218)

___

### len

▸ `Const`**len**<T\>(`arg`: T[]): *number*

Returns the array length

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

const test = [1, 2, 3, 4];

array.len(test) // 4
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** *number*

Defined in: [src/array.ts:347](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L347)

___

### length

▸ `Const`**length**(): *function*

Returns the array length

**`deprecated`** use `len` instead

**`example`** 

```ts
const test = [1, 2, 3, 4];

length()(test) // 4
```

**Returns:** *function*

Defined in: [src/array.ts:362](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L362)

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

Defined in: [src/array.ts:400](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L400)

___

### mix

▸ `Const`**mix**<T\>(`arg`: T[]): T[]

Shuffles an array

**`since`** 2.11.0

```ts
import { array } from 'tiinvo';

array.mix([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** T[]

Defined in: [src/array.ts:514](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L514)

___

### notempty

▸ `Const`**notempty**<T\>(`arg`: T[]): *boolean*

Returns true if an array is not empty

**`since`** 2.11.0

**`example`** 

```ts
import { array } from 'tiinvo';

array.notempty([]) // false
array.notempty([1]) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T[] |

**Returns:** *boolean*

Defined in: [src/array.ts:299](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L299)

___

### rand

▸ `Const`**rand**<T\>(`arr`: T[]): T

Returns a random element `T` from an array `T[]`

**`since`** 2.11.0

**`example`** 
```ts
import { array } from 'tiinvo';

const arr = [1, 2, 3]
arr.includes(arr.rand(arr)) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** T

Defined in: [src/array.ts:416](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L416)

___

### random

▸ `Const`**random**(): *function*

Returns a random element `T` from an array `T[]`

**`deprecated`** use `rand` instead

**`example`** 
```ts
const arr = [1, 2, 3]
arr.includes(random()(arr)) // true
```

**Returns:** *function*

Defined in: [src/array.ts:430](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L430)

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

Defined in: [src/array.ts:448](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L448)

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

Defined in: [src/array.ts:469](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L469)

___

### reverse

▸ `Const`**reverse**(): *function*

Reverse an array

**`deprecated`** use `invert` instead

**`example`** 

```ts
reverse()([1, 2, 3]) // [3, 2, 1]
```

**Returns:** *function*

Defined in: [src/array.ts:500](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L500)

___

### shuffle

▸ `Const`**shuffle**(): *function*

Shuffles an array

**`deprecated`** use `mix` instead

```ts
shuffle()([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
```

**Returns:** *function*

Defined in: [src/array.ts:535](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L535)

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

Defined in: [src/array.ts:549](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L549)

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

Defined in: [src/array.ts:567](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L567)

___

### takefirstnth

▸ `Const`**takefirstnth**(`count`: *number*): *function*

Takes only the first elements by `count`

```ts
const limit = 2;
const takefn = takefirstnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [1, 2]

```

#### Parameters:

Name | Type |
------ | ------ |
`count` | *number* |

**Returns:** *function*

Defined in: [src/array.ts:586](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L586)

___

### takelastnth

▸ `Const`**takelastnth**(`count`: *number*): *function*

Takes only the last elements by `count`

```ts
const limit = 2;
const takefn = takelastnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [3, 4]

```

#### Parameters:

Name | Type |
------ | ------ |
`count` | *number* |

**Returns:** *function*

Defined in: [src/array.ts:604](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L604)

___

### unsafecast

▸ `Const`**unsafecast**<T\>(): *function*

An unsafe cast to a type. Use it if TypeScript gives you a terrible headache.
Note that this operation is not type safe, since no conversion occurs at runtime.
If you want a real type conversion, use map instead.

**`template`** 

#### Type parameters:

Name |
------ |
`T` |

**Returns:** *function*

Defined in: [src/array.ts:616](https://github.com/OctoD/tiinvo/blob/c824e02/src/array.ts#L616)
