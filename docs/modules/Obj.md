[tiinvo](../README.md) / [Exports](../modules.md) / Obj

# Namespace: Obj

## Table of contents

### Type Aliases

- [Entries](Obj.md#entries)
- [KeysOf](Obj.md#keysof)
- [ValuesOf](Obj.md#valuesof)

### Functions

- [hasKeyOf](Obj.md#haskeyof)
- [omit](Obj.md#omit)
- [pick](Obj.md#pick)

## Type Aliases

### Entries

Ƭ **Entries**<`a`\>: { [k in keyof a]: [k, a[k]] }[keyof `a`][]

Represents the entries of an object `a` as an array of key/value pair tuples

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Obj.ts:10

___

### KeysOf

Ƭ **KeysOf**<`a`\>: keyof `a`[]

Extracts keys `k` from object `a`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |

#### Defined in

src/Obj.ts:21

___

### ValuesOf

Ƭ **ValuesOf**<`a`\>: `a`[keyof `a`][]

Extracts values `x` from object `a`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |

#### Defined in

src/Obj.ts:26

## Functions

### hasKeyOf

▸ **hasKeyOf**<`a`, `k`\>(`k`, `g`, `o`): o is Record<k, a\>

Returns true if a is a `object` and has property `k` of type `g`

```typescript
import { Obj, Num } from 'tiinvo';

const hasa = Obj.hasKeyOf('a', Num.guard);

hasa({})            // false
hasa({ a: 1 })      // true
hasa({ a: `nope` }) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `k` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `k` |
| `g` | [`Guardable`](Functors.md#guardable)<`a`\> |
| `o` | `unknown` |

#### Returns

o is Record<k, a\>

#### Defined in

src/Obj.ts:130

___

### omit

▸ **omit**<`a`, `b`\>(`k`, `b`): `Exclude`<`b`, `a`\>

Omits the keys in `a` that are in `b`

**`Example`**

```typescript
import { Obj } from 'tiinvo';

const omit = Obj.omit(['a', 'b'])
omit({ a: 1, b: 2, c: 3 })           // { c: 3 }
omit({ a: 1, b: 2 })                 // {}
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `a`[] |
| `b` | `b` |

#### Returns

`Exclude`<`b`, `a`\>

#### Defined in

src/Obj.ts:257

___

### pick

▸ **pick**<`a`, `b`\>(`keys`, `b`): `Pick`<`b`, `a`\>

Returns a new object with the keys of `a` that are in `b`

```typescript
import { Obj } from 'tiinvo';

const pick = Obj.pick(['a', 'b']);
pick({ a: 1, b: 2, c: 3 });      // { a: 1, b: 2 }
pick({ a: 1, b: 2 });            // { a: 1, b: 2 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `a`[] |
| `b` | `b` |

#### Returns

`Pick`<`b`, `a`\>

#### Defined in

src/Obj.ts:297
