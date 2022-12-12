[tiinvo](../README.md) / [Exports](../modules.md) / Predicate

# Namespace: Predicate

## Table of contents

### Type Aliases

- [T](Predicate.md#t)

### Functions

- [and](Predicate.md#and)
- [eq](Predicate.md#eq)
- [guard](Predicate.md#guard)
- [invert](Predicate.md#invert)
- [neq](Predicate.md#neq)
- [none](Predicate.md#none)
- [or](Predicate.md#or)

## Type Aliases

### T

Ƭ **T**<`A`\>: [`Filterable`](Functors.md#filterable)<`A`\>

A `Predicate.T<A>` is a unary function which accepts an argument `A` and returns a boolean
in order to tell other functions if some conditions are met by `A`.

**`Example`**

```ts
import { Predicate } from 'tiinvo'

const gt10: Predicate.T<number> = x => x > 10;
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the type of the passed argument |

#### Defined in

[src/Predicate.ts:19](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L19)

## Functions

### and

▸ **and**<`L`\>(`...predicates`): <A\>(`value`: `A`) => `boolean`

Combines two or more predicates in one.
If all predicates are satisfied returns `true`, otherwise return `false`.

```ts
import { Predicate, Num } from 'tiinvo';

const and = Predicate.and(Num.gt(3), Num.lt(10));

and(5) // true
and(2) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `L` | extends [`T`](Predicate.md#t)<`any`\>[] | the list of predicates |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `L` |

#### Returns

`fn`

▸ <`A`\>(`value`): `boolean`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |

##### Returns

`boolean`

#### Defined in

[src/Predicate.ts:39](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L39)

___

### eq

▸ **eq**<`A`\>(`a`, `b`): `boolean`

Returns true if `b` strictly equals to `a`

```ts
import { Predicate } from 'tiinvo';

Predicate.eq(0, 10)      // false
Predicate.eq(0, 0)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value |
| `b` | `A` | the second value |

#### Returns

`boolean`

#### Defined in

[src/Predicate.ts:72](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L72)

▸ **eq**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, `boolean`\>

Returns true if `b` strictly equals to `a`

```ts
import { Predicate } from 'tiinvo';

const eq0 = Predicate.eq(0)

eq0(10)                  // false
eq0(0)                   // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `boolean`\>

#### Defined in

[src/Predicate.ts:90](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L90)

___

### guard

▸ **guard**(`x`): x is T<unknown\>

Checks if a function could be a predicate

**Important**: the guard will check only if is a unary function (has only one argument), but will not check it's returning type

**`Example`**

```ts
import { Predicate } from 'tiinvo';

Predicate.guard((x: number, b: number) => x + b)     // false
Predicate.guard((x: number) => x > 0)                // true
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check |

#### Returns

x is T<unknown\>

true if a function signature is comparable to a `T<any>`, false otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Functors.ts#L338)

___

### invert

▸ **invert**<`A`\>(`p`): [`T`](Predicate.md#t)<`A`\>

Inverts the result of a Predicate

```ts
import { Predicate, Num } from 'tiinvo';

const i = Predicate.invert(Num.gt(0))

i(10) // false
i(-1) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the predicate's argument type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`T`](Predicate.md#t)<`A`\> | the predicate to invert |

#### Returns

[`T`](Predicate.md#t)<`A`\>

the inverted predicate

#### Defined in

[src/Predicate.ts:136](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L136)

___

### neq

▸ **neq**<`A`\>(`a`, `b`): `boolean`

Returns true if `b` is not stricly equal to `a`

```ts
import { Predicate } from 'tiinvo';

Predicate.neq(0, 10)       // true
Predicate.neq(0, 0)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value |
| `b` | `A` | - |

#### Returns

`boolean`

#### Defined in

[src/Predicate.ts:154](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L154)

▸ **neq**<`A`\>(`a`): [`Unary`](Fn.md#unary)<`A`, `boolean`\>

Returns true if `b` is not stricly equal to `a`

```ts
import { Predicate } from 'tiinvo';

const neq = Predicate.neq(0)

neq(10)                    // true
neq(0)                     // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the value type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value |

#### Returns

[`Unary`](Fn.md#unary)<`A`, `boolean`\>

#### Defined in

[src/Predicate.ts:173](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L173)

___

### none

▸ **none**<`L`\>(`...predicates`): <a\>(`value`: `a`) => `boolean`

Combines two or more predicates in one.
Returns true if none of them is satisfied, otherwise returns false

```ts
import { Predicate, Num } from 'tiinvo';

const n = Predicate.none(Num.gt(0), Num.isEven);

n(4)  // false
n(5)  // false
n(-4) // false
n(-5) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `L` | extends [`T`](Predicate.md#t)<`any`\>[] | the predicates types |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `L` |

#### Returns

`fn`

▸ <`a`\>(`value`): `boolean`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `a` |

##### Returns

`boolean`

#### Defined in

[src/Predicate.ts:202](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L202)

___

### or

▸ **or**<`L`\>(`...predicates`): <a\>(`value`: `a`) => `boolean`

Combines two or more predicates in one.
Returns true if at least one predicate is satisfied, otherwise returns false

```ts
import { Predicate, Num } from 'tiinvo';

const or = Predicate.or(Num.gt(0), Num.isEven);

or(-1) // false
or(1)  // true
or(2)  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `L` | extends [`T`](Predicate.md#t)<`any`\>[] | the predicates types |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `L` |

#### Returns

`fn`

▸ <`a`\>(`value`): `boolean`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `a` |

##### Returns

`boolean`

#### Defined in

[src/Predicate.ts:238](https://github.com/OctoD/tiinvo/blob/17d71cf/src/Predicate.ts#L238)
