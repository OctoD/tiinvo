[tiinvo](../README.md) / [Exports](../modules.md) / Pipe

# Namespace: Pipe

## Table of contents

### Type Aliases

- [AsChain](Pipe.md#aschain)
- [AsAsyncChain](Pipe.md#asasyncchain)
- [ArgType](Pipe.md#argtype)
- [FuncType](Pipe.md#functype)
- [LastIndexOf](Pipe.md#lastindexof)
- [Lookup](Pipe.md#lookup)
- [Tail](Pipe.md#tail)
- [Pipe](Pipe.md#pipe)
- [PipeAsync](Pipe.md#pipeasync)

### Functions

- [async](Pipe.md#async)
- [sync](Pipe.md#sync)

## Type Aliases

### AsChain

Ƭ **AsChain**<`f`, `g`\>: { [k in keyof f]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [[`FuncType`](Pipe.md#functype), ...FuncType[]] |
| `g` | extends [`FuncType`](Pipe.md#functype)[] = [`Tail`](Pipe.md#tail)<`f`\> |

#### Defined in

[src/Pipe.ts:1](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L1)

___

### AsAsyncChain

Ƭ **AsAsyncChain**<`f`, `g`\>: { [k in keyof f]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [[`FuncType`](Pipe.md#functype), ...FuncType[]] |
| `g` | extends [`FuncType`](Pipe.md#functype)[] = [`Tail`](Pipe.md#tail)<`f`\> |

#### Defined in

[src/Pipe.ts:8](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L8)

___

### ArgType

Ƭ **ArgType**<`F`, `Else`\>: `F` extends (`arg`: infer A) => `any` ? `A` : `Else`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `F` |
| `Else` | `never` |

#### Defined in

[src/Pipe.ts:17](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L17)

___

### FuncType

Ƭ **FuncType**: (`arg`: `any`) => `any`

#### Type declaration

▸ (`arg`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

##### Returns

`any`

#### Defined in

[src/Pipe.ts:19](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L19)

___

### LastIndexOf

Ƭ **LastIndexOf**<`a`\>: (...`x`: `a`) => `void` extends (`y`: `any`, ...`z`: infer b) => `void` ? `b`[``"length"``] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `any`[] |

#### Defined in

[src/Pipe.ts:21](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L21)

___

### Lookup

Ƭ **Lookup**<`t`, `k`, `el`\>: `k` extends keyof `t` ? `t`[`k`] : `el`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `t` | `t` |
| `k` | extends keyof `any` |
| `el` | `never` |

#### Defined in

[src/Pipe.ts:28](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L28)

___

### Tail

Ƭ **Tail**<`a`\>: (...`t`: `a`) => `void` extends (`x`: `any`, ...`u`: infer b) => `void` ? `b` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `any`[] |

#### Defined in

[src/Pipe.ts:32](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L32)

___

### Pipe

Ƭ **Pipe**: <f\>(...`f`: `f` & [`AsChain`](Pipe.md#aschain)<`f`\>) => `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Type declaration

▸ <`f`\>(`...f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [(`arg`: `any`) => `any` \| () => `any`, ...Function[]] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...f` | `f` & [`AsChain`](Pipe.md#aschain)<`f`\> |

##### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Defined in

[src/Pipe.ts:39](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L39)

___

### PipeAsync

Ƭ **PipeAsync**: <f\>(...`f`: `f` & [`AsAsyncChain`](Pipe.md#asasyncchain)<`f`\>) => `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Type declaration

▸ <`f`\>(`...f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [(`arg`: `any`) => `Promise`<`any`\> \| () => `Promise`<`any`\>, ...Function[]] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...f` | `f` & [`AsAsyncChain`](Pipe.md#asasyncchain)<`f`\> |

##### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: infer U) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Defined in

[src/Pipe.ts:44](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L44)

## Functions

### async

▸ **async**<`f`\>(`...f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

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
| `...f` | `f` & [`AsAsyncChain`](Pipe.md#asasyncchain)<`f`, [`Tail`](Pipe.md#tail)<`f`\>\> |

#### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Defined in

[src/Pipe.ts:44](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L44)

___

### sync

▸ **sync**<`f`\>(`...f`): `f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

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
| `...f` | `f` & [`AsChain`](Pipe.md#aschain)<`f`, [`Tail`](Pipe.md#tail)<`f`\>\> |

#### Returns

`f`[``0``] extends () => `any` ? () => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `f`[``0``] extends (`arg`: `U`) => `any` ? (`arg`: `U`) => `ReturnType`<`f`[[`LastIndexOf`](Pipe.md#lastindexof)<`f`\>]\> : `never`

#### Defined in

[src/Pipe.ts:39](https://github.com/OctoD/tiinvo/blob/4c3ba7b/src/Pipe.ts#L39)
