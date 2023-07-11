[tiinvo](../README.md) / [Exports](../modules.md) / Tuple

# Namespace: Tuple

## Table of contents

### Type Aliases

- [T](Tuple.md#t)

### guardables

- [guardOf](Tuple.md#guardof)

### accessors

- [get](Tuple.md#get)
- [length](Tuple.md#length)

### Mappables

- [map](Tuple.md#map)

## Type Aliases

### T

Ƭ **T**<`A`\>: `A`

Describes a tuple type.

**`Example`**

```ts
import type { T } from 'tiinvo/Tuple'

type SomeTuple = T<[0 | 1, string, 'foo' | 'bar']>

let a: SomeTuple = [0, 'hello', 'foo']
let b: SomeTuple = [1, 'hello', 'bar']
let c: SomeTuple = [2, 'hello', 'baz'] // wrong type
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `any`[] | the tuple data content type |

#### Defined in

[src/Tuple.ts:21](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L21)

## guardables

### guardOf

▸ **guardOf**<`A`\>(`a`, `x`): x is GuardArrayReturnType<A\>

Guards if `x` is a tuple `T` which satisfies guards `A`

**`Example`**

```ts
import { Tuple, Str, Num } from 'tiinvo'

Tuple.guardOf([Str, Num], ["hello"])               // false
Tuple.guardOf([Str, Num], ["hello", 100])          // true
Tuple.guardOf([Str, Num], ["hello", "world"])      // false
Tuple.guardOf([Str, Num], ["hello", 100, 100])     // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ([`Guardable`](Functors.md#guardable)<`any`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`any`\>)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `x` | `unknown` |

#### Returns

x is GuardArrayReturnType<A\>

#### Defined in

[src/Tuple.ts:43](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L43)

▸ **guardOf**<`A`\>(`a`): (`x`: `unknown`) => x is T<GuardArrayReturnType<A\>\>

Returns a Guardable<a> from a tuple of guards `A`

**`Example`**

```ts
import { Tuple, Str, Num } from 'tiinvo'

const guard = Tuple.guardOf([Str, Num])

guard(["hello"])               // false
guard(["hello", 100])          // true
guard(["hello", "world"])      // false
guard(["hello", 100, 100])     // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends ([`Guardable`](Functors.md#guardable)<`any`\> \| [`GuardableModule`](Functors.md#guardablemodule)<`any`\>)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`x`): x is T<GuardArrayReturnType<A\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is T<GuardArrayReturnType<A\>\>

#### Defined in

[src/Tuple.ts:64](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L64)

## accessors

### get

▸ **get**<`A`\>(`tuple`, `index`): [`T`](Opt.md#t)<[`T`](Tuple.md#t)<`A`\>[typeof `index`]\>

Gets a value at a specified index, returning it as an `Option.T<A[index]>`

**`Example`**

```ts
import { Tuple } from 'tiinvo'

Tuple.get([10, 'hello'], 0)  // 10
Tuple.get([10, 'hello'], 1)  // "hello"
Tuple.get([10, 'hello'], 2)  // null
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tuple` | `A` |
| `index` | `number` |

#### Returns

[`T`](Opt.md#t)<[`T`](Tuple.md#t)<`A`\>[typeof `index`]\>

#### Defined in

[src/Tuple.ts:132](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L132)

▸ **get**(`tuple`): <A\>(`x`: [`T`](Tuple.md#t)<`A`\>) => [`T`](Opt.md#t)<[`T`](Tuple.md#t)<`A`\>[typeof `tuple`]\>

sets a specified index, returning a unary function which accepts a Tuple.T<any> 
and returns the value at that index as an `Option.T<A[index]>`

**`Example`**

```ts
import { Tuple } from 'tiinvo'

const t = [10, "hello"]
const get0 = Tuple.get(0);
const get1 = Tuple.get(1);
const get2 = Tuple.get(2);

get0(t)  // 10
get1(t)  // "hello"
get2(t)  // null
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `tuple` | `number` |

#### Returns

`fn`

▸ <`A`\>(`x`): [`T`](Opt.md#t)<[`T`](Tuple.md#t)<`A`\>[typeof `tuple`]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`T`](Tuple.md#t)<`A`\> |

##### Returns

[`T`](Opt.md#t)<[`T`](Tuple.md#t)<`A`\>[typeof `tuple`]\>

#### Defined in

[src/Tuple.ts:155](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L155)

___

### length

▸ **length**(`a`): `number`

Returns a Tuple's length

**`Example`**

```ts
import { Tuple } from 'tiinvo'

Tuple.length([10, 20, 30]) // 3
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`number`

#### Defined in

[src/Tuple.ts:180](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L180)

## Mappables

### map

▸ **map**<`M`, `B`\>(`m`, `t`): [`T`](Tuple.md#t)<[`MappableReturnTypes`](Functors.md#mappablereturntypes)<`M`\>\>

Uses a tuple of mappables to map a tuple `T<A>` to `T<B>`

**`Example`**

```ts
import { Tuple } from 'tiinvo'

const m0 = (x: string) => x.length;
const m1 = (x: Date) => x.getFullYear();

Tuple.map([m0, m1], ["hello", new Date(2022, 1, 2, 3, 4)])   // [5, 2022]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `M` | extends ([`Mappable`](Functors.md#mappable)<`any`, `any`\> \| [`MappableModule`](Functors.md#mappablemodule)<`any`, `any`\>)[] | the tuple of Mappables |
| `B` | extends `any`[] | the tuple of values |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `M` |
| `t` | `B` |

#### Returns

[`T`](Tuple.md#t)<[`MappableReturnTypes`](Functors.md#mappablereturntypes)<`M`\>\>

the mapped tuple

#### Defined in

[src/Tuple.ts:206](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L206)

▸ **map**<`M`\>(`m`): <B\>(`x`: [`T`](Tuple.md#t)<`B`\>) => [`T`](Tuple.md#t)<[`MappableReturnTypes`](Functors.md#mappablereturntypes)<`M`\>\>

Uses a tuple of mappables to return a Mappable which maps a tuple `T<A>` to `T<B>`

**`Example`**

```ts
import { Tuple, Str, Num } from 'tiinvo'

const map = Tuple.map([Str.length, Str.charAt(0), Num.gt(0), Num.toHex])

map(["hello", "hello", 10, 10])    // [5, "h", true, "0xa"]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `M` | extends ([`Mappable`](Functors.md#mappable)<`any`, `any`\> \| [`MappableModule`](Functors.md#mappablemodule)<`any`, `any`\>)[] | the tuple of Mappables |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `M` |

#### Returns

`fn`

the Mappable function

▸ <`B`\>(`x`): [`T`](Tuple.md#t)<[`MappableReturnTypes`](Functors.md#mappablereturntypes)<`M`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `any`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`T`](Tuple.md#t)<`B`\> |

##### Returns

[`T`](Tuple.md#t)<[`MappableReturnTypes`](Functors.md#mappablereturntypes)<`M`\>\>

#### Defined in

[src/Tuple.ts:225](https://github.com/OctoD/tiinvo/blob/5779ed4/src/Tuple.ts#L225)
