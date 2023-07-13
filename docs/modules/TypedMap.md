[tiinvo](../README.md) / [Exports](../modules.md) / TypedMap

# Namespace: TypedMap

## Table of contents

### Type Aliases

- [T](TypedMap.md#t)

### Factories

- [make](TypedMap.md#make)

### Guardables

- [guard](TypedMap.md#guard)
- [guardOf](TypedMap.md#guardof)

### Comparables

- [cmp](TypedMap.md#cmp)
- [eq](TypedMap.md#eq)

### Accessors

- [entries](TypedMap.md#entries)
- [get](TypedMap.md#get)
- [has](TypedMap.md#has)
- [keys](TypedMap.md#keys)
- [size](TypedMap.md#size)
- [values](TypedMap.md#values)

### Operators

- [delete](TypedMap.md#delete)
- [set](TypedMap.md#set)

## Type Aliases

### T

Ƭ **T**<`K`, `V`\>: `Object`

Represents a `TypedMap<K, V>`.

**`Example`**

```ts
import { TypedMap, Num, Str } from 'tiinvo'

const tm0 = TypedMap.make(Num, Str)
const tm1 = TypedMap.make(Num, Str, [[10, "hello"], [20, "world"]])
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type of the TypedMap |
| `V` | the value type of the TypedMap |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[guardsymbolKey]` | [`Guardable`](Functors.md#guardable)<`K`\> |
| `[guardsymbolValue]` | [`Guardable`](Functors.md#guardable)<`V`\> |
| `[valuessymbol]` | `Map`<`K`, `V`\> |
| `[iterator]` | () => `Iterator`<readonly [`K`, `V`], `any`, `undefined`\> |

#### Defined in

[src/TypedMap.ts:26](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L26)

## Factories

### make

▸ **make**<`K`, `V`\>(`kg`, `vg`, `entries?`): [`T`](TypedMap.md#t)<`K`, `V`\>

Creates a new `TypedMap.T<K, V>`.

**`Example`**

```ts
import { Str, Num, TypedMap } from 'tiinvo'

const m = new Map<string, number>([['hello', 100], ['world', 200]])

TypedMap.make(Str, Num)
TypedMap.make(Str, Num, m)
TypedMap.make(Str.guard, Num)
TypedMap.make(Str.guard, Num, m)
TypedMap.make(Str, Num.guard)
TypedMap.make(Str, Num.guard, m)
TypedMap.make(Str.guard, Num.guard)
TypedMap.make(Str.guard, Num.guard, m)
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `kg` | [`Guardable`](Functors.md#guardable)<`K`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`K`\> | `undefined` |
| `vg` | [`Guardable`](Functors.md#guardable)<`V`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`V`\> | `undefined` |
| `entries` | `Iterable`<readonly [`K`, `V`]\> | `[]` |

#### Returns

[`T`](TypedMap.md#t)<`K`, `V`\>

the `TypedMap.T<K, V>`

#### Defined in

[src/TypedMap.ts:61](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L61)

## Guardables

### guard

▸ **guard**(`x`): x is T<unknown, unknown\>

Checks if `x` is a `TypedMap.T<unknown, unknown>`

**`Example`**

```ts
import { TypedMap, Num, Str } from 'tiinvo'

TypedMap.guard(10)                           // false
TypedMap.guard({})                           // false
TypedMap.guard(TypedMap.make(Num, Str))   // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is T<unknown, unknown\>

- `true` if `x` is a `TypedMap.T<unknown, unknown>`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:143](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L143)

___

### guardOf

▸ **guardOf**<`K`, `V`\>(`kg`, `vg`, `x`): x is T<K, V\>

Checks if `x` is of type `T<K, V>`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

TypedMap.guardOf(Str, Num, 10)                                               // false
TypedMap.guardOf(Str, Num, TypedMap.make(Str, Num, [["hello", 10]]))         // true
TypedMap.guardOf(Num, Num, TypedMap.make(Str, Num, [["hello", 10]]))         // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `kg` | [`Guardable`](Functors.md#guardable)<`K`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`K`\> |
| `vg` | [`Guardable`](Functors.md#guardable)<`V`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`V`\> |
| `x` | `unknown` |

#### Returns

x is T<K, V\>

- `true` if `x` is a `TypedMap.T<K, V>`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:164](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L164)

▸ **guardOf**<`K`, `V`\>(`kg`, `vg`): (`x`: `unknown`) => x is T<K, V\>

Returns a unary function which checks if `x` is of type `T<K, V>`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const guard0 = TypedMap.guardOf(Str, Num);
const guard1 = TypedMap.guardOf(Str.guard, Num);
const guard2 = TypedMap.guardOf(Str, Num.guard);
const guard3 = TypedMap.guardOf(Str.guard, Num.guard);
const m1 = TypedMap.make(Str, Num, [["hello", 10]]);
const m2 = TypedMap.make(Num, Str, [[10, "hello"]]);

guard0(10)         // false
guard0(m1)         // true
guard0(m2)         // false
guard1(10)         // false
guard1(m1)         // true
guard1(m2)         // false
guard2(10)         // false
guard2(m1)         // true
guard2(m2)         // false
guard3(10)         // false
guard3(m1)         // true
guard3(m2)         // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `kg` | [`Guardable`](Functors.md#guardable)<`K`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`K`\> |
| `vg` | [`Guardable`](Functors.md#guardable)<`V`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`V`\> |

#### Returns

`fn`

the unary function which returns
 - `true` if `x` is a `TypedMap.T<K, V>`
 - `false` otherwise

▸ (`x`): x is T<K, V\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<K, V\>

#### Defined in

[src/TypedMap.ts:201](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L201)

## Comparables

### cmp

▸ **cmp**<`K`, `V`\>(`kmod`, `vmod`, `a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

TypedMap.cmp(Str, Num, m0, m1)   // 1
TypedMap.cmp(Str, Num, m0, m2)   // 0
TypedMap.cmp(Str, Num, m0, m3)   // -1
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |
| `a` | [`T`](TypedMap.md#t)<`K`, `V`\> | the first TypedMap |
| `b` | [`T`](TypedMap.md#t)<`K`, `V`\> | the second TypedMap |

#### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 if `a` is less than `b`
 - 0 if `a` is equal to `b`
 - 1 if `a` is greater than `b`

#### Defined in

[src/TypedMap.ts:272](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L272)

▸ **cmp**<`K`, `V`\>(`kmod`, `vmod`, `a`): [`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a unary function which compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const cmp = TypedMap.cmp(Str, Num, TypedMap.make(Str, Num, [["a", 1], ["b", 2]]))
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

cmp(m1)   // -1
cmp(m2)   // 0
cmp(m3)   // 1
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |
| `a` | [`T`](TypedMap.md#t)<`K`, `V`\> | the first TypedMap |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the unary function which returns
 - -1 if `b` is less than `a`
 - 0 if `b` is equal to `a`
 - 1 if `b` is greater than `a`

#### Defined in

[src/TypedMap.ts:303](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L303)

▸ **cmp**<`K`, `V`\>(`kmod`, `vmod`): [`Binary`](Fn.md#binary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>, [`ComparableResult`](Functors.md#comparableresult)\>

Returns a binary function which compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const cmp = TypedMap.cmp(Str, Num)
const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

cmp(m0, m1)   // 1
cmp(m0, m2)   // 0
cmp(m0, m3)   // -1
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>, [`ComparableResult`](Functors.md#comparableresult)\>

the binary function which returns
 - -1 if `a` is less than `b`
 - 0 if `a` is equal to `b`
 - 1 if `a` is greater than `b`

#### Defined in

[src/TypedMap.ts:334](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L334)

___

### eq

▸ **eq**<`K`, `V`\>(`kmod`, `vmod`, `a`, `b`): `boolean`

Compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

TypedMap.eq(Str, Num, m0, m1)   // false
TypedMap.eq(Str, Num, m0, m2)   // true
TypedMap.eq(Str, Num, m0, m3)   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |
| `a` | [`T`](TypedMap.md#t)<`K`, `V`\> | the first TypedMap |
| `b` | [`T`](TypedMap.md#t)<`K`, `V`\> | the second TypedMap |

#### Returns

`boolean`

- `true` if `a` is equal to `b`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:390](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L390)

▸ **eq**<`K`, `V`\>(`kmod`, `vmod`, `a`): [`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, `boolean`\>

Returns a unary function which compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const eq = TypedMap.eq(Str, Num, TypedMap.make(Str, Num, [["a", 1], ["b", 2]]))
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

eq(m1)   // false
eq(m2)   // true
eq(m3)   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |
| `a` | [`T`](TypedMap.md#t)<`K`, `V`\> | the first TypedMap |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, `boolean`\>

the unary function which returns
 - `true` if `a` is equal to `b`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:420](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L420)

▸ **eq**<`K`, `V`\>(`kmod`, `vmod`): [`Binary`](Fn.md#binary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>, `boolean`\>

Returns a binary function which compares two `TypedMap`s with a key comparer and a value comparer

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const eq = TypedMap.eq(Str, Num)
const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
const m1 = TypedMap.make(Str, Num, [["a", 1]])
const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])
const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]])

eq(m0, m1)   // false
eq(m0, m2)   // true
eq(m0, m3)   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmod` | [`Comparable`](Functors.md#comparable)<`K`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`K`\> | the key comparer |
| `vmod` | [`Comparable`](Functors.md#comparable)<`V`\> \| [`ComparableModule`](Functors.md#comparablemodule)<`V`\> | the value comparer |

#### Returns

[`Binary`](Fn.md#binary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>, `boolean`\>

the binary function which returns
 - `true` if `a` is equal to `b`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:450](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L450)

## Accessors

### entries

▸ **entries**<`K`, `V`\>(`t`): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [['a', 100], ['b', 200]])

for (const [k, v] of TypedMap.entries(m)) {
   console.log(k, v)
}
// logs
// 'a' 100
// 'b' 200
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

`IterableIterator`<[`K`, `V`]\>

t entries

#### Defined in

[src/TypedMap.ts:494](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L494)

___

### get

▸ **get**<`K`, `V`\>(`key`, `t`): [`T`](Opt.md#t)<`V`\>

Gets a value `Option.T<V>` stored with a key `K`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const foo = TypedMap.make(Str, Num, [['a', 1], ['b', 2]])

TypedMap.get("a")  // 1
TypedMap.get("b")  // 2
TypedMap.get("c")  // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

[`T`](Opt.md#t)<`V`\>

- the value if any as `Option.Some<V>`
 - `Option.None` otherwise

#### Defined in

[src/TypedMap.ts:521](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L521)

▸ **get**<`K`\>(`key`): <V\>(`t`: [`T`](TypedMap.md#t)<`K`, `V`\>) => [`T`](Opt.md#t)<`V`\>

Returns a unary function which gets a value `Option.T<V>` stored with a key `K`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const foo = TypedMap.make(Str, Num, [['a', 1], ['b', 2]])
const getA = TypedMap.get("a")
const getB = TypedMap.get("b")
const getC = TypedMap.get("c")

getA(foo)  // 1
getB(foo)  // 2
getC(foo)  // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |

#### Returns

`fn`

▸ <`V`\>(`t`): [`T`](Opt.md#t)<`V`\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> |

##### Returns

[`T`](Opt.md#t)<`V`\>

#### Defined in

[src/TypedMap.ts:545](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L545)

___

### has

▸ **has**<`K`, `V`\>(`key`, `t`): `boolean` \| `never`

Checks if a TypedMap has a key `K`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [["hello", 100]])

TypedMap.has("hello", m)   // true
TypedMap.has("world", m)   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

`boolean` \| `never`

- `true` if the TypedMap has a key `K`
 - `false` otherwise

#### Defined in

[src/TypedMap.ts:580](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L580)

▸ **has**<`K`, `V`\>(`key`): <V\>(`t`: [`T`](TypedMap.md#t)<`K`, `V`\>) => `boolean` \| `never`

Returns a unary function which checks if a TypedMap has a key `K`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [["hello", 100]])
const hasHello = TypedMap.has("hello")

hasHello(m)   // true
hasHello(m)   // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |

#### Returns

`fn`

the unary function which accepts a TypedMap and returns
 - `true` if the TypedMap has a key `K`
 - `false` otherwise

▸ <`V`\>(`t`): `boolean` \| `never`

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> |

##### Returns

`boolean` \| `never`

#### Defined in

[src/TypedMap.ts:604](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L604)

___

### keys

▸ **keys**<`K`, `V`\>(`t`): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])

Array.from(TypedMap.keys(m))   // ["a", "b"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

`IterableIterator`<`K`\>

the keys iterable

#### Defined in

[src/TypedMap.ts:645](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L645)

___

### size

▸ **size**<`K`, `V`\>(`t`): `number`

Returns the number of elements in the Map

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])

TypedMap.size(m)   // 2
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

`number`

the TypedMap's size

#### Defined in

[src/TypedMap.ts:667](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L667)

___

### values

▸ **values**<`K`, `V`\>(`t`): `IterableIterator`<`V`\>

Returns an iterable of values in the map

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]])

Array.from(TypedMap.values(m))   // [1, 2]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

`IterableIterator`<`V`\>

the keys iterable

#### Defined in

[src/TypedMap.ts:689](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L689)

## Operators

### delete

▸ **delete**<`K`, `V`\>(`key`, `t`): [`T`](TypedMap.md#t)<`K`, `V`\>

Removes an entry `K` from a TypedMap `T<K, V>` if any and returns a new TypedMap

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num, [['a', 0], ['b', 1]])
const m1 = TypedMap.delete('a', m0)

TypedMap.keys(m1)    // ['b']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

[`T`](TypedMap.md#t)<`K`, `V`\>

the new TypedMap

#### Defined in

[src/TypedMap.ts:717](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L717)

▸ **delete**<`K`\>(`key`): <V\>(`t`: [`T`](TypedMap.md#t)<`K`, `V`\>) => [`T`](TypedMap.md#t)<`K`, `V`\>

Returns a unary function which removes an entry `K` from a TypedMap `T<K, V>` if any and returns a new TypedMap

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num, [['a', 0], ['b', 1]])
const m1 = TypedMap.make(Str, Num, [['a', 0], ['c', 1]])
const deleteA = TypedMap.delete("a")

TypedMap.keys(deleteA(m0))    // ['b']
TypedMap.keys(deleteA(m1))    // ['c']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | the key |

#### Returns

`fn`

the unary function which deletes the key and returns the new TypedMap

▸ <`V`\>(`t`): [`T`](TypedMap.md#t)<`K`, `V`\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`T`](TypedMap.md#t)<`K`, `V`\> |

##### Returns

[`T`](TypedMap.md#t)<`K`, `V`\>

#### Defined in

[src/TypedMap.ts:740](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L740)

___

### set

▸ **set**<`K`, `V`\>(`a`, `b`, `c`): [`T`](TypedMap.md#t)<`K`, `V`\>

Sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.

This will not mutate the original map and will return a new TypedMap `T<K, V>`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num)
const m1 = TypedMap.set("hello", 100, m0)

Array.from(TypedMap.values(m0))  // []
Array.from(TypedMap.values(m1))  // [100]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `K` | the key |
| `b` | `V` | the value |
| `c` | [`T`](TypedMap.md#t)<`K`, `V`\> | the TypedMap |

#### Returns

[`T`](TypedMap.md#t)<`K`, `V`\>

the new TypedMap

#### Defined in

[src/TypedMap.ts:797](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L797)

▸ **set**<`K`, `V`\>(`a`, `b`): [`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>\>

Returns a unary function which sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.

This will not mutate the original map and will return a new TypedMap `T<K, V>`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num)
const setHello = TypedMap.set("hello", 100);

Array.from(TypedMap.values(setHello(m1)))  // [100]
Array.from(TypedMap.values(m0))            // []
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `K` | the key |
| `b` | `V` | the value |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](TypedMap.md#t)<`K`, `V`\>, [`T`](TypedMap.md#t)<`K`, `V`\>\>

the unary function

#### Defined in

[src/TypedMap.ts:823](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L823)

▸ **set**<`K`, `V`\>(`a`): [`Binary`](Fn.md#binary)<`K`, `V`, [`T`](TypedMap.md#t)<`K`, `V`\>\>

Returns a binary function which sets a new value `V` at the key `K` for a TypedMap `T<K, V>`.

This will not mutate the original map and will return a new TypedMap `T<K, V>`

**`Example`**

```ts
import { TypedMap, Str, Num } from 'tiinvo'

const m0 = TypedMap.make(Str, Num)
const set = TypedMap.set(m0);

Array.from(TypedMap.values(set("hello", 100)))   // [100]
Array.from(TypedMap.values(set("world", 200)))   // [200]
Array.from(TypedMap.values(m0))                  // []
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | the key type |
| `V` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`T`](TypedMap.md#t)<`K`, `V`\> | the key |

#### Returns

[`Binary`](Fn.md#binary)<`K`, `V`, [`T`](TypedMap.md#t)<`K`, `V`\>\>

the unary function

#### Defined in

[src/TypedMap.ts:850](https://github.com/OctoD/tiinvo/blob/5743591/src/TypedMap.ts#L850)
