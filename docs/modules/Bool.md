[tiinvo](../README.md) / [Exports](../modules.md) / Bool

# Namespace: Bool

## Table of contents

### Type Aliases

- [T](Bool.md#t)

### Functions

- [guard](Bool.md#guard)
- [flip](Bool.md#flip)

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

src/Bool.ts:17

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

returns true if x is a boolean, false otherwise

#### Defined in

src/Functors.ts:338

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

`false` if x is `true`, `true` otherwise

#### Defined in

src/Functors.ts:424
