[tiinvo](../README.md) / [Exports](../modules.md) / Catch

# Namespace: Catch

## Table of contents

### Functions

- [make](Catch.md#make)

## Functions

### make

▸ **make**<`F`\>(`catchable`): `F` extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<`Awaited`<`ReturnType`<`F`\>\>\> : (...`args`: `Parameters`<`F`\>) => `ReturnType`<`F`\>

Uses the `Functors.Catchable<f>` to return a wrapped function `f`.

If the function `f` throws internally, then the functors' catch function is called, otherwise returns `f` output

**`Example`**

```ts
import { Catch, Functors, Num } from 'tiinvo'

function catchy(arg: number) {
   if (Num.isEven(arg)) {
     throw new TypeError("I expected an odd number :(")
   }

   return arg;
}

const c: Functors.CatchableModule<typeof catchy> = {
   [Functors.catchableSync]() {
     return {
       catch: (_error, args) => args[0] - 1,
       func: catchy,
     }
   }
}

const catched = Catch.make(c);

catched(10)                    // 9
catched(7)                     // 7
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `F` | extends [`AnyFn`](Fn.md#anyfn) | the function to catch |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `catchable` | [`CatchableModule`](Functors.md#catchablemodule)<`F`\> | the CatchableModule<F> |

#### Returns

`F` extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`F`\>) => `Promise`<`Awaited`<`ReturnType`<`F`\>\>\> : (...`args`: `Parameters`<`F`\>) => `ReturnType`<`F`\>

a unary function

#### Defined in

[src/Catch.ts:43](https://github.com/OctoD/tiinvo/blob/f0d2a3a/src/Catch.ts#L43)
