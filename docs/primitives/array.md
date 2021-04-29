## eq

Gets an element in an array at a given index.
Returns undefined if nothing is found at that index.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const get2nd = array.eq(1);
get2nd([100, 200, 300]); // 200
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const get2nd = array.eq(1);
get2nd([100, 200, 300]); // 200
```

<!-- tabs:end --->

## every

Returns true if every element in the array satisfy the given predicate.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const everynumber = array.every(isnumber);
everynumber([1, 2, 3, 4])      // true
everynumber([1, 2, 3, 'nope']) // false
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const everynumber = array.every(isnumber);
everynumber([1, 2, 3, 4])      // true
everynumber([1, 2, 3, 'nope']) // false
```

<!-- tabs:end --->
## eqOr

Gets an element in an array at a given index.
Returns `or` if nothing is found at that index.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const get100th = array.eqOr(100)(20);
get100th([100, 200, 300]); // 20
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const get100th = array.eqOr(100)(20);
get100th([100, 200, 300]); // 20
```

<!-- tabs:end --->

## filter

Filters an array with the given predicate.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const onlyeven = array.filter((arg: number) => arg % 2 === 0);
onlyeven([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const onlyeven = array.filter((arg: number) => arg % 2 === 0);
onlyeven([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

<!-- tabs:end --->

## find

Returns the first valid element. If nothing is found returns undefined

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const findhermione = array.find(predicate.withsamevalue('Hermione'));
findhermione(['Harry', 'Hermione', 'Ronald']) // 'Hermione'
findhermione(['Severus', 'Dumbledore', 'Tomarevaca']) // undefined
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const findhermione = array.find(predicate.withsamevalue('Hermione'));
findhermione(['Harry', 'Hermione', 'Ronald']) // 'Hermione'
findhermione(['Severus', 'Dumbledore', 'Tomarevaca']) // undefined
```

<!-- tabs:end --->

## flat

Flatterns an array

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.flat([[1, 2], [3, 4]]) // [1, 2, 3, 4];
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.flat([[1, 2], [3, 4]]) // [1, 2, 3, 4];
```

<!-- tabs:end --->

## fromfunctions

Takes a list of functions, then call them passing the argument `Input` and returning an array of `Output`

<!-- tabs:start --->

#### **node**

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

#### **deno/esm**

```ts
import { array, pipe } from 'https://cdn.skypack.dev/tiinvo';

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

<!-- tabs:end --->

## first

Gets first element of an array.
Returns `undefined` if the array is empty.

<!-- tabs:start --->

#### **node**

```ts
import { array, pipe } from 'tiinvo';

array.first([100, 200]) // 100
array.first([])         // undefined
```

#### **deno/esm**

```ts
import { array, pipe } from 'https://cdn.skypack.dev/tiinvo';

array.first([100, 200]) // 100
array.first([])         // undefined
```

<!-- tabs:end --->

## first

Gets first element of an array.
Returns `or` if the array is empty.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.getfirstOr(20)([]) // 20
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.getfirstOr(20)([]) // 20
```

<!-- tabs:end --->

## last

Gets the last element of an array.
Returns `undefined` if the array is empty.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.last([100, 200]) // 100
array.last([])         // undefined
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.last([100, 200]) // 100
array.last([])         // undefined
```

<!-- tabs:end --->

## lastor

Returns the last element of an array or the given fallback `or`.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const lastnumber = array.lastOr(0);
lastnumber([1, 2, 3]) // 3
lastnumber([]) // 0
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const lastnumber = array.lastOr(0);
lastnumber([1, 2, 3]) // 3
lastnumber([]) // 0
```

<!-- tabs:end --->
## empty

Returns `true` if an array is empty, otherwise returns `false`.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.empty([]) // true
array.empty([1]) // false
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.empty([]) // true
array.empty([1]) // false
```

<!-- tabs:end --->
## notempty

Returns `true` if an array is not empty, otherwise returns `false`.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.notempty([]) // false
array.notempty([1]) // true
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.notempty([]) // false
array.notempty([1]) // true
```

<!-- tabs:end --->
## includes

Checks if an element is inside an array.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

includes100([10, 20, 30, 100]) // true
includes100([10, 20, 30, 900]) // false
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

includes100([10, 20, 30, 100]) // true
includes100([10, 20, 30, 900]) // false
```

<!-- tabs:end --->
## len

Returns the array length.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const test = [1, 2, 3, 4];
array.len(test) // 4
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const test = [1, 2, 3, 4];
array.len(test) // 4
```

<!-- tabs:end --->

## join

Joins an array with a delimiter. 

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const test = [1, 2, 3, 4];
array.join(`-`)(test) // `1-2-3-4`
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const test = [1, 2, 3, 4];
array.join(`-`)(test) // `1-2-3-4`
```

<!-- tabs:end --->

## map

Maps an array of elements `T` to an array of elements `Z`

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';


interface Person {
   age: number;
   name: string;
}

const mapname = (person: Person) => person.name;
const mapnames = map(mapname);

maptostring([{ name: 'John', age: 21 }, { name: 'Julia', age: 33 }]) // ['John', 'Julia']
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';


interface Person {
   age: number;
   name: string;
}

const mapname = (person: Person) => person.name;
const mapnames = map(mapname);

maptostring([{ name: 'John', age: 21 }, { name: 'Julia', age: 33 }]) // ['John', 'Julia']
```

<!-- tabs:end --->

## rand

Returns a random element `T` from an array `T[]`

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const arr = [1, 2, 3]
arr.includes(arr.rand(arr)) // true
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const arr = [1, 2, 3]
arr.includes(arr.rand(arr)) // true
```

<!-- tabs:end --->

## reduce

Aggregates all values `T[]` in a single input `Z`.
This aggregation starts from the first to the last element.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const sum = array.reduce(0, (prev, next: number) => prev + next);
sum([1, 2, 3]) // 6
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const sum = array.reduce(0, (prev, next: number) => prev + next);
sum([1, 2, 3]) // 6
```

<!-- tabs:end --->

## reduceright

Aggregates all values `T[]` in a single input `Z`.
This aggregation starts from the last to the first element.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const sum = reduce(0, (next, prev: number) => prev - next);
sum([1, 2, 3]) // 0
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const sum = reduce(0, (next, prev: number) => prev - next);
sum([1, 2, 3]) // 0
```

<!-- tabs:end --->

## invert

Reverse an array.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.invert([1, 2, 3]) // [3, 2, 1]
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.invert([1, 2, 3]) // [3, 2, 1]
```

<!-- tabs:end --->

## mix

Shuffles an array.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

array.mix([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

array.mix([1, 2, 3]) // could be [3, 2, 1] or [2, 1, 3] or [1, 3, 2] or...
```

<!-- tabs:end --->

## some

Returns true if some elements in the array satisfy the given predicate.

<!-- tabs:start --->

#### **node**

```ts
import { array, isnumber } from 'tiinvo';

const somenumber = array.some(isnumber);
somenumber([1, 2, 3, 4]) // true
somenumber([null, undefined, 'nope']) // false
```

#### **deno/esm**

```ts
import { array, isnumber } from 'https://cdn.skypack.dev/tiinvo';

const somenumber = array.some(isnumber);
somenumber([1, 2, 3, 4]) // true
somenumber([null, undefined, 'nope']) // false
```

<!-- tabs:end --->

## sort

Sorts an array with the given comparing function.

<!-- tabs:start --->

#### **node**

```ts
import { array, num } from 'tiinvo';

const sortdesc = sort(num.sortdesc);
sort([3, 5, 1, 2, 10, 21, 12, 20]) // [ 21, 20, 12, 10, 5, 3, 2, 1 ]
```

#### **deno/esm**

```ts
import { array, num } from 'https://cdn.skypack.dev/tiinvo';

const sortdesc = sort(num.sortdesc);
sort([3, 5, 1, 2, 10, 21, 12, 20]) // [ 21, 20, 12, 10, 5, 3, 2, 1 ]
```

<!-- tabs:end --->

## takefirstnth

Takes only the first elements by `count`

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const limit = 2;
const takefn = array.takefirstnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [1, 2]
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const limit = 2;
const takefn = array.takefirstnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [1, 2]
```

<!-- tabs:end --->

## takelastnth

Takes only the last elements by `count`

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const limit = 2;
const takefn = array.takelastnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [3, 4]
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const limit = 2;
const takefn = array.takelastnth(limit)
const test = [1, 2, 3, 4];

takefn(test) // [3, 4]
```

<!-- tabs:end --->

## unsafecast

An unsafe cast to a type. Use it if TypeScript gives you a terrible headache.
Note that this operation is not type safe, since no conversion occurs at runtime.
If you want a real type conversion, use map instead.

<!-- tabs:start --->

#### **node**

```ts
import { array } from 'tiinvo';

const test: any = [1n, 2n, 3n, 4n];
const unsafecasttonumber = array.unsafecast<number>();

unsafecasttonumber(test) // for TypeScript it's a `Array<number>` type now
```

#### **deno/esm**

```ts
import { array } from 'https://cdn.skypack.dev/tiinvo';

const test: any = [1n, 2n, 3n, 4n];
const unsafecasttonumber = array.unsafecast<number>();

unsafecasttonumber(test) // for TypeScript it's a `Array<number>` type now
```

<!-- tabs:end --->
