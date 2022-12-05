[tiinvo](../README.md) / [Exports](../modules.md) / Bool

# Namespace: Bool

## Table of contents

### Type Aliases

- [T](Bool.md#t)

### Functions

- [guard](Bool.md#guard)
- [flip](Bool.md#flip)

### Serializables

- [toNumber](Bool.md#tonumber)

## Type Aliases

### T

Ƭ **T**: `boolean`

Represents a boolean value

**`Example`**

```ts
import { Bool } from 'tiinvo'

let x: Bool.T = true;

```

**`Since`**

4.0.0

#### Defined in

[src/Bool.ts:17](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Bool.ts#L17)

## Functions

### guard

▸ **guard**(`x`): x is boolean

Checks if parameter `x` is `boolean`

**`Example`**

```ts
import { Bool } from 'tiinvo'

Bool.guard(true)     // true
Bool.guard(1000)     // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the value to check if is a boolean |

#### Returns

x is boolean

- `true` if `x` is a `boolean`
 - `false` otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Functors.ts#L338)

___

### flip

▸ **flip**(`a`): `boolean`

Flips a boolean value

**`Example`**

```ts
import { Bool } from 'tiinvo'

Bool.flip(true)      // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `boolean` |

#### Returns

`boolean`

- `false` if `x` is `true`
 - `true` if `x` is `false`

#### Defined in

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Functors.ts#L424)

## Serializables

### toNumber

▸ **toNumber**(`t`): ``1`` \| ``0``

Returns 1 if true, 0 otherwise

**`Example`**

```ts
import { Bool } from 'tiinvo'

Bool.toNumber(true)  // 1
Bool.toNumber(false) // 0
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `boolean` | the bool |

#### Returns

``1`` \| ``0``

- `1` if `t` is `false`
 - `0` if `t` is `true`

#### Defined in

[src/Bool.ts:83](https://github.com/OctoD/tiinvo/blob/e1fce19/src/Bool.ts#L83)
