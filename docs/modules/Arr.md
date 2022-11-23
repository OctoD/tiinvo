[tiinvo](../README.md) / [Exports](../modules.md) / Arr

# Namespace: Arr

## Table of contents

### Type Aliases

- [T](Arr.md#t)
- [Reducer](Arr.md#reducer)

### Accessors

- [get](Arr.md#get)
- [first](Arr.md#first)
- [firstOr](Arr.md#firstor)
- [last](Arr.md#last)
- [lastOr](Arr.md#lastor)

### Guardables

- [guard](Arr.md#guard)
- [guardOf](Arr.md#guardof)

### Comparables

- [cmp](Arr.md#cmp)
- [eq](Arr.md#eq)

### Native methods

- [concat](Arr.md#concat)
- [contains](Arr.md#contains)
- [every](Arr.md#every)
- [from](Arr.md#from)
- [fill](Arr.md#fill)
- [filter](Arr.md#filter)
- [find](Arr.md#find)
- [flat](Arr.md#flat)
- [includes](Arr.md#includes)
- [length](Arr.md#length)
- [join](Arr.md#join)
- [map](Arr.md#map)
- [none](Arr.md#none)
- [of](Arr.md#of)
- [reduce](Arr.md#reduce)
- [reduceRight](Arr.md#reduceright)
- [reverse](Arr.md#reverse)
- [slice](Arr.md#slice)
- [some](Arr.md#some)
- [sort](Arr.md#sort)

### Compound native methods

- [filterMap](Arr.md#filtermap)
- [filterReduce](Arr.md#filterreduce)
- [flatMap](Arr.md#flatmap)

### Factories

- [make](Arr.md#make)

### Misc

- [partition](Arr.md#partition)
- [random](Arr.md#random)
- [shuffle](Arr.md#shuffle)
- [zip](Arr.md#zip)

### Predicates

- [empty](Arr.md#empty)
- [populated](Arr.md#populated)

## Type Aliases

### T

Ƭ **T**<`A`\>: `A`[]

Represents an array of `a`

**`Example`**

```ts
import { Arr } from 'tiinvo'

let foo: Arr.t<string> = ['hello']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `unknown` | the array's elements' type |

#### Defined in

[src/Arr.ts:22](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L22)

___

### Reducer

Ƭ **Reducer**<`A`, `B`\>: (`p`: `B`, `c`: `A`) => `B`(`p`: `B`, `c`: `A`, `i`: `number`) => `B`(`p`: `B`, `c`: `A`, `i`: `number`, `t`: [`T`](Arr.md#t)<`A`\>) => `B`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the reduced value type |
| `B` | the array type |

#### Type declaration

▸ (`p`, `c`): `B`

**`Example`**

```ts
import { Arr } from 'tiinvo';

let r: Arr.Reducer<string, number> = (a, b) => a + b.length;

['hello', 'world'].reduce(r, 0)    // 10
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `B` | the accumulated value |
| `c` | `A` | the current value |

##### Returns

`B`

▸ (`p`, `c`, `i`): `B`

**`Example`**

```ts
import { Arr } from 'tiinvo';

let r: Arr.Reducer<string, number> = (a, b, i) => a + b.length + i;

['hello', 'world'].reduce(r, 0)    // 11
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `B` | the accumulated value |
| `c` | `A` | the current value |
| `i` | `number` | the current index |

##### Returns

`B`

▸ (`p`, `c`, `i`, `t`): `B`

**`Example`**

```ts
import { Arr } from 'tiinvo';

let r: Arr.Reducer<string, number> = (a, b, i, t) => a + b.length + i + t.length;

['hello', 'world'].reduce(r, 0)    // 13
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `B` | the accumulated value |
| `c` | `A` | the current value |
| `i` | `number` | the current index |
| `t` | [`T`](Arr.md#t)<`A`\> | the original array `t<a>` |

##### Returns

`B`

#### Defined in

[src/Arr.ts:30](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L30)

## Accessors

### get

▸ **get**<`a`\>(`a`, `i`): [`t`](Result.md#t)<`a`\>

Returns the element `Result.t<a>` at index `i` of an array `a[]`. 

If the index `i` is out of range, a `Err` will be returned.

```ts
import { Arr } 'tiinvo';

Arr.get([10, 20], 1)   // 20
Arr.get([10, 20], 3)   // Error("Index out of bounds 3 for length 2")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the type of the array `a` elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`a`\> | is the array to search |
| `i` | `number` | is the element index |

#### Returns

[`t`](Result.md#t)<`a`\>

#### Defined in

[src/Arr.ts:106](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L106)

▸ **get**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`t`](Result.md#t)<`A`\>\>

Returns a `Fn.Unary<t<a>, Result.t<a>>` to get the element `Result.t<a>` at index `i` of an array `a[]`. 

If the index `i` is out of range, a `Err` will be returned.

```ts
import { Arr } 'tiinvo';

Arr.get(1)([10, 20])   // 20
Arr.get(3)([10, 20])   // Error("Index out of bounds 3 for length 2")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type of the array `a` elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | is the element index |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`t`](Result.md#t)<`A`\>\>

#### Defined in

[src/Arr.ts:125](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L125)

___

### first

▸ **first**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Returns the first element of an array `a`. If the array is empty, returns `none`.

**`Example`**

```ts
import { Arr } 'tiinvo';

Arr.first(['a', 'b']) // 'a';
Arr.first([])         // null;
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`A`\> | the array |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

[src/Arr.ts:162](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L162)

___

### firstOr

▸ **firstOr**<`A`\>(`t`, `b`): `A`

Returns the first element of an array `a` or `b` if the array is empty.

**`Example`**

```ts
import { Arr } from 'tiinvo';

Arr.firstOr([10, 20], 0)        // 10
Arr.firstOr([], 0)              // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the inferred type from argument `t` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`A`\> | the array |
| `b` | `A` | the fallback value |

#### Returns

`A`

#### Defined in

[src/Arr.ts:183](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L183)

▸ **firstOr**<`A`\>(`t`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `A`\>

After setting the fallback value `t`, returns a `Unary<t<a>, a>` function.

If the array has an element on index 0, it will be returned, otherwise it will return the fallback `t`

**`Example`**

```ts
import { Arr } from 'tiinvo';

const firstOr0 = Arr.firstOr(0);

firstOr0([10, 20])        // 10
firstOr0([])              // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `A` | the fallback value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `A`\>

#### Defined in

[src/Arr.ts:206](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L206)

___

### last

▸ **last**<`A`\>(`t`): [`T`](Option.md#t)<`A`\>

Returns the last element of an array `a`. If the array is empty, returns `none`.

**`Example`**

```ts
import { Arr } 'tiinvo';

Arr.last(['a', 'b']) // 'b';
Arr.last([])         // null;
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`A`\> | the array |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

[src/Arr.ts:233](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L233)

___

### lastOr

▸ **lastOr**<`A`\>(`t`, `b`): `A`

Returns the last element of an array `a` or `b` if the array is empty.

**`Example`**

```ts
import { Arr } from 'tiinvo';

Arr.lastOr([10, 20], 0)        // 20
Arr.lastOr([], 0)              // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`A`\> | the array |
| `b` | `A` | the index |

#### Returns

`A`

#### Defined in

[src/Arr.ts:255](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L255)

▸ **lastOr**<`A`\>(`t`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `A`\>

After setting the fallback value `t`, returns a `Unary<t<a>, a>` function.

If the array has a length greater than 0, it will return it's last element, otherwise it will return the fallback `t`

**`Example`**

```ts
import { Arr } from 'tiinvo';

Arr.lastOr(0)([10, 20])        // 20
Arr.lastOr(0)([])              // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `A` | the index |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `A`\>

#### Defined in

[src/Arr.ts:276](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L276)

## Guardables

### guard

▸ **guard**(`x`): x is T<unknown\>

Returns true if `a` is an array.

```ts
import { Arr } from 'tiinvo';

Arr.guard([])          // true
Arr.guard(null)        // false
Arr.guard(undefined)   // false
Arr.guard(0)           // false
Arr.guard('')          // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is T<unknown\>

#### Defined in

[src/Arr.ts:306](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L306)

___

### guardOf

▸ **guardOf**<`A`\>(`g`, `x`): x is T<A\>

Returns true if `b` is an array of `a`.

**`Example`**

```ts
import { Arr, Str } from 'tiinvo';

Arr.guardOf(Str.guard, [])                 // true
Arr.guardOf(Str.guard, ['a'])              // true
Arr.guardOf(Str.guard, ['a', 'b'])         // true
Arr.guardOf(Str.guard, ['a', 'b', 'c'])    // true
Arr.guardOf(Str.guard, ['a', 'b', 'c', 1]) // false
````

@template A array's type
@param g the Guard to match
@param x the value to match
@returns {boolean}
@group Guardables
@since 4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> |
| `x` | `unknown` |

#### Returns

x is T<A\>

#### Defined in

[src/Arr.ts:330](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L330)

▸ **guardOf**<`A`\>(`g`): (`x`: `unknown`) => x is T<A\>

Returns a `Functors.Guardable<t<a>>` which returns true if `x` is of type `t<a>`

```ts
import { Arr, Str } from 'tiinvo';

const isStrArr = Arr.guardOf(Str.guard);

isStrArr([])                 // true
isStrArr(['a'])              // true
isStrArr(['a', 'b'])         // true
isStrArr(['a', 'b', 'c'])    // true
isStrArr(['a', 'b', 'c', 1]) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | The functor |

#### Returns

`fn`

the new guard to check if x is `t<a>`

▸ (`x`): x is T<A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<A\>

#### Defined in

[src/Arr.ts:351](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L351)

## Comparables

### cmp

▸ **cmp**<`A`\>(`cmp`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two arrays `a[]` with a given `Comparable<a>`.

**`Example`**

```ts
import { Arr, Str } from 'tiinvo';

Arr.cmp(Str.cmp, ['a'], ['a']) // 0
Arr.cmp(Str.cmp, ['a'], ['b']) // -1
Arr.cmp(Str.cmp, ['b'], ['a']) // 1
Arr.cmp(Str.cmp, ['a'], ['a', 'b']) // -1
Arr.cmp(Str.cmp, ['a', 'b'], ['a']) // 1
Arr.cmp(Str.cmp, ['a', 'b'], ['a', 'b']) // 0
Arr.cmp(Str.cmp, ['a', 'b', 'c'], ['a', 'b']) // 1
Arr.cmp(Str.cmp, ['a', 'b', 'c'], ['a', 'b', 'c']) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparator |
| `a` | [`T`](Arr.md#t)<`A`\> | the first array to compare |
| `b` | [`T`](Arr.md#t)<`A`\> | the second array to compare |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

returns 1 if `a` is greater then `b`, -1 if `a` is less than `b`, 0 if `a` and `b` are equal

#### Defined in

[src/Arr.ts:404](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L404)

▸ **cmp**<`A`\>(`cmp`, `a`): (`b`: [`T`](Arr.md#t)<`A`\>) => [`ComparableResult`](Functors.md#comparableresult)

Compares two arrays `a[]` with a given `Comparable<a>`.

**`Example`**

```ts
import { Arr, Str } from 'tiinvo';

Arr.cmp(Str.cmp, ['a'])(['a']) // 0
Arr.cmp(Str.cmp, ['a'])(['b']) // -1
Arr.cmp(Str.cmp, ['b'])(['a']) // 1
Arr.cmp(Str.cmp, ['a'])(['a', 'b']) // -1
Arr.cmp(Str.cmp, ['a', 'b'])(['a']) // 1
Arr.cmp(Str.cmp, ['a', 'b'])(['a', 'b']) // 0
Arr.cmp(Str.cmp, ['a', 'b', 'c'])(['a', 'b']) // 1
Arr.cmp(Str.cmp, ['a', 'b', 'c'])(['a', 'b', 'c']) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparator |
| `a` | [`T`](Arr.md#t)<`A`\> | the first array to compare |

#### Returns

`fn`

▸ (`b`): [`ComparableResult`](Functors.md#comparableresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Arr.md#t)<`A`\> |

##### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Arr.ts:429](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L429)

▸ **cmp**<`A`\>(`cmp`): (`a`: [`T`](Arr.md#t)<`A`\>, `b`: [`T`](Arr.md#t)<`A`\>) => [`ComparableResult`](Functors.md#comparableresult)

Compares two arrays `a[]` with a given `Comparable<a>`.

**`Example`**

```ts
import { Arr, Str } from 'tiinvo';

Arr.cmp(Str.cmp)(['a'], ['a']) // 0
Arr.cmp(Str.cmp)(['a'], ['b']) // -1
Arr.cmp(Str.cmp)(['b'], ['a']) // 1
Arr.cmp(Str.cmp)(['a'], ['a', 'b']) // -1
Arr.cmp(Str.cmp)(['a', 'b'], ['a']) // 1
Arr.cmp(Str.cmp)(['a', 'b'], ['a', 'b']) // 0
Arr.cmp(Str.cmp)(['a', 'b', 'c'], ['a', 'b']) // 1
Arr.cmp(Str.cmp)(['a', 'b', 'c'], ['a', 'b', 'c']) // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparator |

#### Returns

`fn`

▸ (`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `b` | [`T`](Arr.md#t)<`A`\> |

##### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Arr.ts:453](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L453)

___

### eq

▸ **eq**<`A`\>(`e`, `a`, `b`): `boolean`

Compares two arrays `a[]` with a given `Equatable<a>` and returns true if are identical.

```ts
import { Arr, Str } from 'tiinvo';

Arr.eq(Str.eq, ['a'], ['a'])            // true
Arr.eq(Str.eq, ['a'], ['b'])            // false
Arr.eq(Str.eq, ['b'], ['a'])            // false
Arr.eq(Str.eq, ['a'], ['a', 'b'])       // false
Arr.eq(Str.eq, ['a', 'b'], ['a'])       // false
Arr.eq(Str.eq, ['a', 'b'], ['b', 'a'])  // false
Arr.eq(Str.eq, ['a', 'b'], ['a', 'b'])  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `b` | [`T`](Arr.md#t)<`A`\> |

#### Returns

`boolean`

if `a` and `b` are the equal

#### Defined in

[src/Arr.ts:506](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L506)

▸ **eq**<`A`\>(`e`, `a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Given an `Equatable<a>` and an array `t<a>`, returns a `Fn.Unary<t<a>, boolean>` function to compare `a` and `b`.

```ts
import { Arr, Str } from 'tiinvo';

const eq = Arr.eq(Str.eq);

Arr.eq(Str.eq, ['a'])(['a'])            // true
Arr.eq(Str.eq, ['a'])(['b'])            // false
Arr.eq(Str.eq, ['b'])(['a'])            // false
Arr.eq(Str.eq, ['a'])(['a', 'b'])       // false
Arr.eq(Str.eq, ['a', 'b'])(['a'])       // false
Arr.eq(Str.eq, ['a', 'b'])(['b', 'a'])  // false
Arr.eq(Str.eq, ['a', 'b'])(['a', 'b'])  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |
| `a` | [`T`](Arr.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

#### Defined in

[src/Arr.ts:528](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L528)

▸ **eq**<`A`\>(`e`): [`Binary`](Fn.md#binary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>, `boolean`\>

Given an `Equatable<a>`, returns a `Fn.Binary<t<a>, t<a>, boolean>` function to compare `a` and `b`.

```ts
import { Arr, Str } from 'tiinvo';

const eq = Arr.eq(Str.eq);

eq(['a'], ['a'])            // true
eq(['a'], ['b'])            // false
eq(['b'], ['a'])            // false
eq(['a'], ['a', 'b'])       // false
eq(['a', 'b'], ['a'])       // false
eq(['a', 'b'], ['b', 'a'])  // false
eq(['a', 'b'], ['a', 'b'])  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Equatable`](Functors.md#equatable)<`A`\> |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>, `boolean`\>

#### Defined in

[src/Arr.ts:550](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L550)

## Native methods

### concat

▸ **concat**<`A`\>(`a`, `b`): `A`

Concates `b` and `a` without modifying the original arrays.

```ts
import { Arr } from 'tiinvo';

Arr.concat([10], [20])           // [10, 20]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first array |
| `b` | `A` | the second array |

#### Returns

`A`

#### Defined in

[src/Arr.ts:593](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L593)

▸ **concat**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, `A`\>

Returns a `Unary<a, a>` which concatenates `b` and `a` without modifying the original arrays.

```ts
import { Arr } from 'tiinvo';

Arr.concat([10])([20])           // [20, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the second array |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `A`\>

#### Defined in

[src/Arr.ts:607](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L607)

___

### contains

▸ **contains**<`A`\>(`a`, `b`): `boolean`

Returns `true` if an array `a` contains `b`.

```ts
import { Arr } 'tiinvo';

Arr.contains(['a'], 'a') // true
Arr.contains(['a'], 'b') // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `b` | `A` |

#### Returns

`boolean`

#### Defined in

[src/Arr.ts:632](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L632)

▸ **contains**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Checks if the given argument `b` is contained by the array passed to the `Fn.Unary<t<a>, boolean>` function.

```ts
import { Arr } 'tiinvo';

Arr.contains('a')(['a']) // true
Arr.contains('a')(['b']) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the value which should be checked |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

#### Defined in

[src/Arr.ts:649](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L649)

___

### every

▸ **every**<`A`\>(`a`, `p`): `boolean`

Determines whether all the members of an array `a` satisfy the specified predicate `p`.

```ts
import { Arr, Num } 'tiinvo';

Arr.every([10, 20], Num.isEven)      // true 
Arr.every([10, 21], Num.isEven)      // false 
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `p` | [`t`](Predicate.md#t)<`A`\> |

#### Returns

`boolean`

#### Defined in

[src/Arr.ts:674](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L674)

▸ **every**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Returns a `Fn.Unary<t<a>, boolean>` which checks if the every element of the array `t<a>` satisfy the predicate `a`

```ts
import { Arr, Num } 'tiinvo';

Arr.every(Num.isEven)([10, 20])      // true 
Arr.every(Num.isEven)([10, 21])      // false 
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`t`](Predicate.md#t)<`A`\> | the predicate |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

#### Defined in

[src/Arr.ts:691](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L691)

___

### from

▸ **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

```ts
import { Arr } 'tiinvo';

Arr.from([1, 2, 3]) // [1, 2, 3]
Arr.from(new Set([1, 2, 3])) // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> |

#### Returns

`T`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an array-like object.

```ts
import { Arr } 'tiinvo';

Arr.from([1, 2, 3]) // [1, 2, 3]
Arr.from(new Set([1, 2, 3])) // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` |
| `thisArg?` | `any` |

#### Returns

`U`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ **from**<`T`\>(`iterable`): `T`[]

Creates an array from an array-like object.

```ts
import { Arr } 'tiinvo';

Arr.from([1, 2, 3]) // [1, 2, 3]
Arr.from(new Set([1, 2, 3])) // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> |

#### Returns

`T`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an array-like object.

```ts
import { Arr } 'tiinvo';

Arr.from([1, 2, 3]) // [1, 2, 3]
Arr.from(new Set([1, 2, 3])) // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` |
| `thisArg?` | `any` |

#### Returns

`U`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### fill

▸ **fill**<`A`\>(`a`, `b`, `start?`, `end?`): [`T`](Arr.md#t)<`A`\>

Fills an array `a[]` with `a` from index `start` to `end`.
This does not modify the original array.

```ts
import { Arr } from 'tiinvo';

const x = Arr.make(4)

Arr.fill(x, 10, 0, 3)           // [10, 10, 10, 10]
Arr.fill(x, 10)                 // [10, 10, 10, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`any`\> | the array |
| `b` | `A` | - |
| `start?` | `number` |  |
| `end?` | `number` |  |

#### Returns

[`T`](Arr.md#t)<`A`\>

#### Defined in

[src/Arr.ts:738](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L738)

▸ **fill**<`A`\>(`a`, `b?`, `start?`): (`a`: [`T`](Arr.md#t)<`any`\>, `start2?`: `number`, `end2?`: `number`) => [`T`](Arr.md#t)<`A`\>

Fills an array `a[]` with `a` from index `start` to `end`.
This does not modify the original array.

```ts
import { Arr } from 'tiinvo';

const x = Arr.make(4)

Arr.fill(10, 0, 3)(x)           // [10, 10, 10, 10]
Arr.fill(10)(x)                 // [10, 10, 10, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the value to fill the array |
| `b?` | `number` | the start index |
| `start?` | `number` | the end index |

#### Returns

`fn`

▸ (`a`, `start2?`, `end2?`): [`T`](Arr.md#t)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`any`\> |
| `start2?` | `number` |
| `end2?` | `number` |

##### Returns

[`T`](Arr.md#t)<`A`\>

#### Defined in

[src/Arr.ts:760](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L760)

___

### filter

▸ **filter**<`A`\>(`a`, `p`): [`T`](Arr.md#t)<`A`\>

Returns the elements of an array `a` that meet the condition specified in a predicate `p`.

```ts
import { Arr, Num } 'tiinvo';

const x = [10, 20, 30];

Arr.filter(x, Num.gt(10))    // [20, 30]
Arr.filter(Num.gt(10))(x)    // [20, 30]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array to filter |
| `p` | [`t`](Predicate.md#t)<`A`\> | the predicate to satisfy |

#### Returns

[`T`](Arr.md#t)<`A`\>

#### Defined in

[src/Arr.ts:788](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L788)

▸ **filter**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>\>

Returns a `Unary<t<a>, t<a>>`. Calling this function will filter the array passed as argument with the predicate `a`.

```ts
import { Arr, Num } 'tiinvo';

const x = [10, 20, 30];

Arr.filter(x, Num.gt(10))    // [20, 30]
Arr.filter(Num.gt(10))(x)    // [20, 30]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`t`](Predicate.md#t)<`A`\> | the `Predicate.t<a>` |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>\>

#### Defined in

[src/Arr.ts:807](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L807)

___

### find

▸ **find**<`A`\>(`a`, `p`): [`T`](Option.md#t)<`A`\>

Finds the first value `a` with a given predicate `p` and returns `Option.some<a>` if found, otherwise returns `Option.none`.

```ts
import { Arr, Num } 'tiinvo';

const x = [10, 20, 30];

Arr.find(x, Num.gt(10))    // 20
Arr.find(x, Num.gt(30))    // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `p` | [`t`](Predicate.md#t)<`A`\> |

#### Returns

[`T`](Option.md#t)<`A`\>

#### Defined in

[src/Arr.ts:834](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L834)

▸ **find**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

Finds the first value `a` with a given predicate `p` and returns `Option.some<a>` if found, otherwise returns `Option.none`.

```ts
import { Arr, Num } 'tiinvo';

const x = [10, 20, 30];

Arr.find(Num.gt(10))(x)    // 20
Arr.find(Num.gt(30))(x)    // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`t`](Predicate.md#t)<`A`\> | the search predicate |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Option.md#t)<`A`\>\>

#### Defined in

[src/Arr.ts:853](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L853)

___

### flat

▸ **flat**<`A`, `D`\>(`a`, `d?`): `FlatArray`<`A`, `D`\>

Flatterns an array.

**`Example`**

```ts
import { Arr } from 'tiinvo';

const x = [[10, 20], [['hello', 'world']]]

Arr.flat(x)      // [10, 20, ['hello', 'world']]
Arr.flat(x, 2)   // [10, 20, 'hello', 'world']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | array's type |
| `D` | extends `number` = ``1`` | flattern depth |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the array to flattern |
| `d?` | `D` | the depth |

#### Returns

`FlatArray`<`A`, `D`\>

#### Defined in

[src/Arr.ts:1055](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1055)

▸ **flat**<`A`, `D`\>(`a?`): [`Unary`](Fn.md#unary)<`A`, `FlatArray`<`A`, `D`\>\>

Returns a `Unary<a, FlatArray<a, d>>` which flatterns an array `b` with the depth `a`.

**`Example`**

```ts
import { Arr } from 'tiinvo';

const x = [[10, 20], [['hello', 'world']]]

Arr.flat()(x)    // [10, 20, ['hello', 'world']]
Arr.flat(2)(x)   // [10, 20, 'hello', 'world']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | array's type |
| `D` | extends `number` = ``1`` | flattern depth type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a?` | `D` | the depth |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `FlatArray`<`A`, `D`\>\>

#### Defined in

[src/Arr.ts:1077](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1077)

___

### includes

▸ **includes**<`A`\>(`a`, `b`): `boolean`

Determines whether an array includes a certain element, returning `true` or `false` as appropriate.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const x = [10, 20, 30]

Arr.includes(x, 30)        // true
Arr.includes(30)(x)        // true
Arr.includes(x, 40)        // false
Arr.includes(40)(x)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `b` | `A` | the value to look up for |

#### Returns

`boolean`

returns true if `b` has been found

#### Defined in

[src/Arr.ts:1160](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1160)

▸ **includes**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Determines whether an array includes a certain element, returning `true` or `false` as appropriate.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const x = [10, 20, 30]

Arr.includes(x, 30)        // true
Arr.includes(30)(x)        // true
Arr.includes(x, 40)        // false
Arr.includes(40)(x)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the value to look for |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

a unary function which returns true if `a` has been found in the passed array.

#### Defined in

[src/Arr.ts:1183](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1183)

___

### length

▸ **length**<`A`\>(`t`): `number`

Gets the length of the array. This is a number one higher than the highest index in the array.

**`Example`**

```ts
import { Arr } from 'tiinvo';

Arr.length([])         // 0
Arr.length([1])        // 1
Arr.length([1, 2, 3])  // 3
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`A`\> | the array |

#### Returns

`number`

the length of the array

#### Defined in

[src/Arr.ts:1211](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1211)

___

### join

▸ **join**<`A`, `B`\>(`a`, `b?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

**Important**, despites native JavaScript implementation, the default separator is an empty string if not specified

**`Example`**

```ts
import { Arr } from 'tiinvo' 

const x = [10, 20, 30]

Arr.join(x, '-')     // '10-20-30'
Arr.join(x)          // '102030'
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | array's type |
| `B` | extends `string` | the string type to use as divider |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the array |
| `b?` | `B` | the string used as divider |

#### Returns

`string`

the concatenated string

#### Defined in

[src/Arr.ts:1237](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1237)

▸ **join**<`A`, `B`\>(`a?`): [`Unary`](Fn.md#unary)<`A`, `string`\>

Returns a `Unary<t<a>, string>` function which adds all the elements of an array into a string, separated by the specified separator string `a`.

**Important**, despites native JavaScript implementation, the default separator is an empty string if not specified

**`Example`**

```ts
import { Arr } from 'tiinvo' 

const x = [10, 20, 30]

Arr.join('-')(x)     // '10-20-30'
Arr.join()(x)        // '102030'
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | array's type |
| `B` | extends `string` | the string type to use as divider |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a?` | `B` | the string used as divider |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `string`\>

the concatenated string

#### Defined in

[src/Arr.ts:1261](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1261)

___

### map

▸ **map**<`A`, `B`\>(`a`, `m`): [`T`](Arr.md#t)<`B`\>

Maps an array of elements `a` to an array of elements `b` using the mapping function `m`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo';

const x = [1, 2, 3];
const m = Num.mul(2);

Arr.map(x, m)      // [2, 4, 6]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |
| `B` | the return type of the mappable functor |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the functors used to map the array |

#### Returns

[`T`](Arr.md#t)<`B`\>

#### Defined in

[src/Arr.ts:1358](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1358)

▸ **map**<`a`, `b`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`a`\>, [`T`](Arr.md#t)<`b`\>\>

Maps an array of elements `a` to an array of elements `b` using the mapping function `m`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo';

const x = [1, 2, 3];
const m = Num.mul(2);

Arr.map(m)(x)      // [2, 4, 6]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the array's type |
| `b` | the return type of the mappable functor |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> | the functors used to map the array |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`a`\>, [`T`](Arr.md#t)<`b`\>\>

#### Defined in

[src/Arr.ts:1380](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1380)

___

### none

▸ **none**<`A`\>(`a`, `m`): `boolean`

Returns true if all elements of `a` do not meet the condition specified in the predicate `m`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 3, 5]
const p = Num.isEven

Arr.none(x, p)       // true
Arr.none(p)(x)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `m` | [`t`](Predicate.md#t)<`A`\> | the predicate `Predicate.t<a>` |

#### Returns

`boolean`

returns true if none of the elements satisfy `m`

#### Defined in

[src/Arr.ts:1411](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1411)

▸ **none**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Returns a `Unary<t<a>, boolean> which once called returns true if all elements of `b` do not meet the condition specified in the predicate `a`.

@example

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 3, 5]
const p = Num.isEven

Arr.none(x, p)       // true
Arr.none(p)(x)       // true
```

@template A array's type
@param a the predicate `Predicate.t<a>`

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`t`](Predicate.md#t)<`A`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

#### Defined in

[src/Arr.ts:1433](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1433)

___

### of

▸ **of**<`T`\>(...`items`): `T`[]

Returns a new array from a set of elements.

```typescript
import { Arr } 'tiinvo';

Arr.of(1, 2, 3) // [1, 2, 3]
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Returns

`T`[]

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86

___

### reduce

▸ **reduce**<`A`, `B`\>(`a`, `r`, `b`): `B`

Calls the specified callback function for all the elements in an array. 

The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 2, 3, 4, 5]

Arr.reduce(x, Num.add, 0)       // 15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returned value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `r` | [`Reducer`](Arr.md#reducer)<`A`, `B`\> | the reducer |
| `b` | `B` | - |

#### Returns

`B`

the reduced value

#### Defined in

[src/Arr.ts:1571](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1571)

▸ **reduce**<`A`, `B`\>(`a`, `r`): (`b`: [`T`](Arr.md#t)<`A`\>) => `B`

Sets a callback function for all the elements in an array 
passed to the returned `Unary<t<a>, b>`. 

The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 2, 3, 4, 5]

Arr.reduce(Num.add, 0)(x)       // 15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returned value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Reducer`](Arr.md#reducer)<`A`, `B`\> | the array |
| `r` | `B` | the reducer |

#### Returns

`fn`

the reduced value

▸ (`b`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`T`](Arr.md#t)<`A`\> |

##### Returns

`B`

#### Defined in

[src/Arr.ts:1597](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1597)

___

### reduceRight

▸ **reduceRight**<`A`, `B`\>(`a`, `r`, `b`): `B`

Calls the specified callback function for all the elements in an array, 
in descending order. 

The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 2, 3, 4, 5]

Arr.reduceRight(x, Num.sub, 0)       // -15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returned value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `r` | [`Reducer`](Arr.md#reducer)<`A`, `B`\> | the reducer |
| `b` | `B` | - |

#### Returns

`B`

the reduced value

#### Defined in

[src/Arr.ts:1631](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1631)

▸ **reduceRight**<`A`, `B`\>(`a`, `r`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `B`\>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
Sets a callback function for all the elements in an array, in descending order. 

The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [1, 2, 3, 4, 5]

Arr.reduceRight(Num.sub, 0)(x)       // -15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returned value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Reducer`](Arr.md#reducer)<`A`, `B`\> | the array |
| `r` | `B` | the reducer |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `B`\>

the reduced value

#### Defined in

[src/Arr.ts:1657](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1657)

___

### reverse

▸ **reverse**<`A`\>(`a`): [`T`](Arr.md#t)<`A`\>

Reverses the elements in an array in place without mutating the original array.

**`Example`**

```ts
import { Arr } 'tiinvo';

Arr.reverse([10, 20, 30])      // [30, 20, 10]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |

#### Returns

[`T`](Arr.md#t)<`A`\>

the reversed array

#### Defined in

[src/Arr.ts:1683](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1683)

___

### slice

▸ **slice**<`A`\>(`a`, `s?`, `e?`): `A`

Returns a copy of a section of an array. 

For both start and end, a negative index can be used to indicate an offset 
from the end of the array. 

For example, -2 refers to the second to last element of the array.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const x = [10, 20, 30]

Arr.slice(x)         // [10, 20, 30]
Arr.slice(x, 2)      // [30]
Arr.slice(x, 1, 2)   // [20]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | the array type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the array |
| `s?` | `number` | the optional start index |
| `e?` | `number` | - |

#### Returns

`A`

the sliced array

#### Defined in

[src/Arr.ts:1741](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1741)

▸ **slice**<`A`\>(`a?`, `s?`): [`Unary`](Fn.md#unary)<`A`, `A`\>

Returns a `Fn.Unary<a, a>` which copies a section of an array. 

For both start and end, a negative index can be used to indicate an offset 
from the end of the array. 

For example, -2 refers to the second to last element of the array.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const x = [10, 20, 30]

Arr.slice()(x)       // [10, 20, 30]
Arr.slice(2)(x)      // [30]
Arr.slice(1, 2)(x)   // [20]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | the array type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a?` | `number` | the array |
| `s?` | `number` | the optional start index |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `A`\>

the unary function which slices the array

#### Defined in

[src/Arr.ts:1770](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1770)

___

### some

▸ **some**<`A`\>(`a`, `p`): `boolean`

Determines whether some members of an array `a` satisfy the specified predicate `p`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

Arr.some([1, 2, 3], Num.isEven)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `p` | [`t`](Predicate.md#t)<`A`\> | the predicate |

#### Returns

`boolean`

return true if some values satisfy the predicate

#### Defined in

[src/Arr.ts:1797](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1797)

▸ **some**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

Returns a `Unary<t<a>, boolean>` function which determines whether some members of an array `b` satisfy the specified predicate `a`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

Arr.some(Num.isEven)([1, 2, 3])       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`t`](Predicate.md#t)<`A`\> | the predicate |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `boolean`\>

return true if some values satisfy the predicate

#### Defined in

[src/Arr.ts:1815](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1815)

___

### sort

▸ **sort**<`A`\>(`a`, `cmp`): [`T`](Arr.md#t)<`A`\>

Sorts an array of elements `a` using the specified comparator `cmp`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [3, 1, 2, 5, 4]
const s = Num.asc;

Arr.sort(x, s)     // [1, 2, 3, 4, 5]
Arr.sort(s)(x)     // [1, 2, 3, 4, 5]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `cmp` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparable functor |

#### Returns

[`T`](Arr.md#t)<`A`\>

the sorted array

#### Defined in

[src/Arr.ts:1846](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1846)

▸ **sort**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>\>

Returns a `Unary<t<a>, t<a>>` function which sorts an array of elements `b` using the specified comparator `a`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const x = [3, 1, 2, 5, 4]
const s = Num.asc;

Arr.sort(x, s)     // [1, 2, 3, 4, 5]
Arr.sort(s)(x)     // [1, 2, 3, 4, 5]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Comparable`](Functors.md#comparable)<`A`\> | the comparable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>\>

the unary function which sorts the array

#### Defined in

[src/Arr.ts:1868](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1868)

## Compound native methods

### filterMap

▸ **filterMap**<`A`, `B`\>(`a`, `mod`): [`T`](Arr.md#t)<`B`\>

Maps with the `mod.map` function an array `a[]` by removing all elements that do not satisfy the predicate `mod.filter`.
The filter occurs before mapping the elements.

**`Example`**

```ts
import { Arr, Functors, Num } from 'tiinvo';

const x = [-10, 10]
const mod: Functors.FilterMappableModule<number, number> = {
   filter: Num.gt(0),
   map: Num.add(10),
};

Arr.filterMap(x, mod)     // [20]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returning array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> |
| `mod` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> |

#### Returns

[`T`](Arr.md#t)<`B`\>

#### Defined in

[src/Arr.ts:885](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L885)

▸ **filterMap**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`B`\>\>

Maps with the `mod.map` function an array `a[]` by removing all elements that do not satisfy the predicate `mod.filter`.
The filter occurs before mapping the elements.

**`Example`**

```ts
import { Arr, Functors, Num } from 'tiinvo';

const x = [-10, 10]
const mod: Functors.FilterMappableModule<number, number> = {
   filter: Num.gt(0),
   map: Num.add(10),
};

Arr.filterMap(mod)(x)     // [20]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returning array's type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`FilterMappableModule`](Functors.md#filtermappablemodule)<`A`, `B`\> |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`B`\>\>

#### Defined in

[src/Arr.ts:911](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L911)

___

### filterReduce

▸ **filterReduce**<`A`, `B`\>(`a`, `mod`): `B`

Like a normal array reduce, but after a filter has been applied on each iteration.

If the filter is satisfied, then the reduce occurs for the current element, otherwise it skips.

**`Example`**

```ts
import { Arr, Functors, Num } from 'tiinvo'

const mod: Functors.FilterReduceableModule<number, number> = {
   default: 0,
   filter: Num.isPositive,
   reduce: Num.add,
}

const x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

Arr.filterReduce(x, mod)         // 15
Arr.filterReduce(mod)(x)         // 15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returning reduced type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array to filter and reduce |
| `mod` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the functor |

#### Returns

`B`

the filtered and reduced output

#### Defined in

[src/Arr.ts:974](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L974)

▸ **filterReduce**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `B`\>

Like a normal array reduce, but after a filter has been applied on each iteration.

If the filter is satisfied, then the reduce occurs for the current element, otherwise it skips.

**`Example`**

```ts
import { Arr, Functors, Num } from 'tiinvo'

const mod: Functors.FilterReduceableModule<number, number> = {
   default: 0,
   filter: Num.isPositive,
   reduce: Num.add,
}

const x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

Arr.filterReduce(x, mod)         // 15
Arr.filterReduce(mod)(x)         // 15
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |
| `B` | returning value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`FilterReduceableModule`](Functors.md#filterreduceablemodule)<`A`, `B`\> | the functor module type |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, `B`\>

#### Defined in

[src/Arr.ts:1004](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1004)

___

### flatMap

▸ **flatMap**<`A`, `B`\>(`a`, `m`): [`T`](Arr.md#t)<`B`\>

Maps a matrix `t<t<a>>` to a `t<b>` using the mapping function `m`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo';

const x = [[2, 3], [4, 5]]

Arr.flatMap(x, Num.add(1))         // [3, 4, 5, 6]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the matrix elements' type |
| `B` | the flatterned mapped array type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<[`T`](Arr.md#t)<`A`\>\> | the matrix |
| `m` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable functor |

#### Returns

[`T`](Arr.md#t)<`B`\>

#### Defined in

[src/Arr.ts:1107](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1107)

▸ **flatMap**<`A`, `B`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<[`T`](Arr.md#t)<`A`\>\>, [`T`](Arr.md#t)<`B`\>\>

Returns a `Fn.Unary<a[][]>, b[]>` which aps a matrix `a[][]` to a `b[]` using the mapping function `a`.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo';

const x = [[2, 3], [4, 5]]

Arr.flatMap(Num.add(1))(x)         // [3, 4, 5, 6]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the matrix elements' type |
| `B` | the flatterned mapped array type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Mappable`](Functors.md#mappable)<`A`, `B`\> | the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<[`T`](Arr.md#t)<`A`\>\>, [`T`](Arr.md#t)<`B`\>\>

#### Defined in

[src/Arr.ts:1128](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1128)

## Factories

### make

▸ **make**<`A`\>(`size`, `d?`): `A` extends [`None`](Option.md#none) ? [`T`](Arr.md#t)<[`None`](Option.md#none)\> : [`T`](Arr.md#t)<`A`\>

Creates a new array `t<Option.None>` of a given size.

If a default value `d` is specified, then the returning array will be `t<typeof d>`

The default value could be either an arbitrary type or a `Fn.Unary<number, a>` type.

If a unary function is passed as `d`, the returning array will be `t<ReturnType<d>>`.

**`Example`**

```ts
import { Arr } from 'tiinvo'

Arr.make(3)                              // [undefined, undefined, undefined]
Arr.make(3, 'hello')                     // ['hello', 'hello', 'hello']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `undefined` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | the size of the array |
| `d?` | `A` | this is the value used to fill the array |

#### Returns

`A` extends [`None`](Option.md#none) ? [`T`](Arr.md#t)<[`None`](Option.md#none)\> : [`T`](Arr.md#t)<`A`\>

the array

#### Defined in

[src/Arr.ts:1295](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1295)

▸ **make**<`A`\>(`size`, `d?`): `A` extends [`None`](Option.md#none) ? [`T`](Arr.md#t)<[`None`](Option.md#none)\> : [`T`](Arr.md#t)<`A`\>

Creates a new array `t<Option.None>` of a given size.

If a default value `d` is specified, then the returning array will be `t<typeof d>`

The default value could be either an arbitrary type or a `Fn.Unary<number, a>` type.

If a unary function is passed as `d`, the returning array will be `t<ReturnType<d>>`.

**`Example`**

```ts
import { Arr } from 'tiinvo'

Arr.make(3, x => ((x + 1) * 10).toString(16))  // ['a', '14', '1e']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `undefined` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | the size of the array |
| `d?` | [`Unary`](Fn.md#unary)<`number`, `A`\> | a function used to return a value for every index of an array |

#### Returns

`A` extends [`None`](Option.md#none) ? [`T`](Arr.md#t)<[`None`](Option.md#none)\> : [`T`](Arr.md#t)<`A`\>

the array

#### Defined in

[src/Arr.ts:1320](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1320)

## Misc

### partition

▸ **partition**<`A`\>(`a`, `f`): [[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>]

Split an array `t<a>` into a tuple `[t<a>, t<a>]` based on predicate `f`; 

If the element `a` of `t<a>` satisfies the predicate `f`, then it will be pushed to 
the first element of the tuple, otherwise to the second.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const a = [1, 2, 3, 4, 5]

Arr.partition(a, Num.isEven)     // [[2, 4], [1, 3, 5]]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |
| `f` | [`Filterable`](Functors.md#filterable)<`A`\> | the filterable functor |

#### Returns

[[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>]

#### Defined in

[src/Arr.ts:1483](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1483)

▸ **partition**<`A`\>(`a`): [`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>]\>

Returns a `Fn.Unary<t<a>, [t<a>, t<a>]>` which splits an array `t<a>` into a tuple `[t<a>, t<a>]` based on predicate `f`; 

If the element `a` of `t<a>` satisfies the predicate `f`, then it will be pushed to 
the first element of the tuple, otherwise to the second.

**`Example`**

```ts
import { Arr, Num } from 'tiinvo'

const a = [1, 2, 3, 4, 5]

Arr.partition(Num.isEven)(a)     // [[2, 4], [1, 3, 5]]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Filterable`](Functors.md#filterable)<`A`\> | the filterable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Arr.md#t)<`A`\>, [[`T`](Arr.md#t)<`A`\>, [`T`](Arr.md#t)<`A`\>]\>

#### Defined in

[src/Arr.ts:1506](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1506)

___

### random

▸ **random**<`A`\>(`a`): [`T`](Option.md#t)<`A`\>

Returns a random element of an array `a`.

If the array is empty, returns `Option.None`

```typescript
import { Arr } 'tiinvo';

Arr.random(['a', 'b', 'c']) // 'a' or 'b' or 'c'
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A`[] | the array |

#### Returns

[`T`](Option.md#t)<`A`\>

a random element of the array

#### Defined in

[src/Arr.ts:1546](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1546)

___

### shuffle

▸ **shuffle**<`A`\>(`a`): [`T`](Arr.md#t)<`A`\>

Shuffles an array

**`Example`**

```ts
import { Arr } from 'tiinvo'

Arr.shuffle([10, 20, 30])  // could be [10, 30, 20] or [20, 30, 10] or [30, 20, 10] or ...
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](Arr.md#t)<`A`\> | the array |

#### Returns

[`T`](Arr.md#t)<`A`\>

the shuffled array

#### Defined in

[src/Arr.ts:1702](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1702)

___

### zip

▸ **zip**<`A`\>(`a`, `b`): [`T`](Arr.md#t)<`A`\>

Returns an array of pairs from the two arrays with the length of the shorter one.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const a0 = [1, 2]
const a1 = [3, 4, 5]

Arr.zip(a0, a1)    // [[1, 3], [2, 4]]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first array |
| `b` | `A` | the second array |

#### Returns

[`T`](Arr.md#t)<`A`\>

the zipped array

#### Defined in

[src/Arr.ts:1898](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1898)

▸ **zip**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, [`T`](Arr.md#t)<`A`\>\>

Returns a `Fn.Unary<a, t<a>>` which once called returns an array of pairs 
from the two arrays with the length of the shorter one.

**`Example`**

```ts
import { Arr } from 'tiinvo'

const a0 = [1, 2]
const a1 = [3, 4, 5]

Arr.zip(a1)(a0)    // [[1, 3], [2, 4]]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | the array's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the second array |

#### Returns

[`Unary`](Fn.md#unary)<`A`, [`T`](Arr.md#t)<`A`\>\>

the unary function which zips the array

#### Defined in

[src/Arr.ts:1920](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1920)

## Predicates

### empty

▸ **empty**(`t`): `boolean`

Returns `true` if the array `t<any>` is empty.

```ts
import { Arr } from 'tiinvo';

Arr.empty([])     // true
Arr.empty(['a'])  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`any`\> | the array |

#### Returns

`boolean`

`true` if is empty, `false` otherwise

#### Defined in

[src/Arr.ts:1962](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1962)

___

### populated

▸ **populated**(`t`): `boolean`

Returns `true` if the array `t<any>` is populated.

```ts
import { Arr } from 'tiinvo';

Arr.populated([])     // false
Arr.populated(['a'])  // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](Arr.md#t)<`any`\> | the array |

#### Returns

`boolean`

#### Defined in

[src/Arr.ts:1979](https://github.com/OctoD/tiinvo/blob/000a124/src/Arr.ts#L1979)
