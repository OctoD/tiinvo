[tiinvo](../README.md) / [Exports](../modules.md) / Pipe

# Namespace: Pipe

## Table of contents

### Functions

- [async](Pipe.md#async)
- [sync](Pipe.md#sync)

## Functions

### async

▸ **async**<`f`\>(...`f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `never`

Same as the sync version, but handles promises.

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [(`arg`: `any`) => `Promise`<`any`\> \| () => `Promise`<`any`\>, ...Function[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...f` | `f` & `AsAsyncChain`<`f`, `Tail`<`f`\>\> |

#### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `never`

#### Defined in

src/Pipe.ts:44

___

### sync

▸ **sync**<`f`\>(...`f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `never`

Creates a pipeline of synchronous functions

**`Example`**

```ts
import { Num, Pipe } from 'tiinvo'

const vat = Pipe.sync(Num.div(100), Num.mul(22));

vat(100)     // 22
vat(150)     // 33
vat(200)     // 44
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [(`arg`: `any`) => `any`, ...Function[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...f` | `f` & `AsChain`<`f`, `Tail`<`f`\>\> |

#### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[`LastIndexOf`<`f`\>]\> : `never`

#### Defined in

src/Pipe.ts:39
