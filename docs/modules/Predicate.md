[tiinvo](../README.md) / [Exports](../modules.md) / Predicate

# Namespace: Predicate

## Table of contents

### Type Aliases

- [T](Predicate.md#t)

### Functions

- [eq](Predicate.md#eq)
- [neq](Predicate.md#neq)

## Type Aliases

### T

Ƭ **T**<`A`\>: [`Filterable`](Functors.md#filterable)<`A`\>

A `Predicate<A>` is a unary function which accepts an argument `A` and returns a boolean
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

src/Predicate.ts:19

## Functions

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

src/Predicate.ts:72

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

src/Predicate.ts:90

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

src/Predicate.ts:151

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

src/Predicate.ts:170
