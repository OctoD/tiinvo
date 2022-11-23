[tiinvo](../README.md) / [Exports](../modules.md) / Predicate

# Namespace: Predicate

## Table of contents

### Type Aliases

- [t](Predicate.md#t)

### Functions

- [and](Predicate.md#and)
- [eq](Predicate.md#eq)
- [guard](Predicate.md#guard)
- [invert](Predicate.md#invert)
- [neq](Predicate.md#neq)
- [none](Predicate.md#none)
- [or](Predicate.md#or)

## Type Aliases

### t

Ƭ **t**<`a`\>: [`Filterable`](Functors.md#filterable)<`a`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Predicate.ts:4

## Functions

### and

▸ **and**<`pl`\>(...`predicates`): <a\>(`value`: `a`) => `boolean`

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

| Name | Type |
| :------ | :------ |
| `pl` | extends [`t`](Predicate.md#t)<`any`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `pl` |

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

src/Predicate.ts:23

___

### eq

▸ **eq**<`a`\>(`a`, `b`): `boolean`

Returns true if `b` strictly equals to `a`

```ts
import { Predicate } from 'tiinvo';

const eq0 = Predicate.eq(0)

eq0(10)                  // false
eq0(0)                   // true
Predicate.eq(0, 10)      // false
Predicate.eq(0, 0)       // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `a` |

#### Returns

`boolean`

#### Defined in

src/Predicate.ts:58

▸ **eq**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Defined in

src/Predicate.ts:59

___

### guard

▸ **guard**(`x`): x is t<unknown\>

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

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is t<unknown\>

#### Defined in

src/Functors.ts:338

___

### invert

▸ **invert**<`a`\>(`p`): [`t`](Predicate.md#t)<`a`\>

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

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`t`](Predicate.md#t)<`a`\> |

#### Returns

[`t`](Predicate.md#t)<`a`\>

#### Defined in

src/Predicate.ts:102

___

### neq

▸ **neq**<`a`\>(`a`, `b`): `boolean`

Returns true if `b` is not stricly equal to `a`

```ts
import { Predicate } from 'tiinvo';

const neq = Predicate.neq(0)

neq(10)                    // true
neq(0)                     // false
Predicate.neq(0, 10)       // true
Predicate.neq(0, 0)        // false
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `b` | `a` |

#### Returns

`boolean`

#### Defined in

src/Predicate.ts:121

▸ **neq**<`a`\>(`a`): [`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `a` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `boolean`\>

#### Defined in

src/Predicate.ts:122

___

### none

▸ **none**<`pl`\>(...`predicates`): <a\>(`value`: `a`) => `boolean`

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

| Name | Type |
| :------ | :------ |
| `pl` | extends [`t`](Predicate.md#t)<`any`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `pl` |

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

src/Predicate.ts:150

___

### or

▸ **or**<`pl`\>(...`predicates`): <a\>(`value`: `a`) => `boolean`

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

| Name | Type |
| :------ | :------ |
| `pl` | extends [`t`](Predicate.md#t)<`any`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...predicates` | `pl` |

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

src/Predicate.ts:185
