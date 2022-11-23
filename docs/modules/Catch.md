[tiinvo](../README.md) / [Exports](../modules.md) / Catch

# Namespace: Catch

## Table of contents

### Functions

- [make](Catch.md#make)

## Functions

### make

▸ **make**<`f`\>(`catchable`): `f` extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Awaited`<`ReturnType`<`f`\>\>\> : (...`args`: `Parameters`<`f`\>) => `ReturnType`<`f`\>

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

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyFn`](Fn.md#anyfn) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `catchable` | [`CatchableModule`](Functors.md#catchablemodule)<`f`\> | the CatchableModule<f> |

#### Returns

`f` extends [`AnyAsyncFn`](Fn.md#anyasyncfn) ? (...`args`: `Parameters`<`f`\>) => `Promise`<`Awaited`<`ReturnType`<`f`\>\>\> : (...`args`: `Parameters`<`f`\>) => `ReturnType`<`f`\>

a unary function

#### Defined in

[src/Catch.ts:42](https://github.com/OctoD/tiinvo/blob/e3728bc/src/Catch.ts#L42)
