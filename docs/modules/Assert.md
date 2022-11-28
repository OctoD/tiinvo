[tiinvo](../README.md) / [Exports](../modules.md) / Assert

# Namespace: Assert

## Table of contents

### Functions

- [check](Assert.md#check)
- [checkResult](Assert.md#checkresult)
- [make](Assert.md#make)
- [makeResult](Assert.md#makeresult)

## Functions

### check

▸ **check**(`a`, `m`): `void`

Asserts that a specified condition is true, otherwise throws 
an error with the given message

**`Example`**

```ts
import { Assert } from 'tiinvo'

Assert.check(true, 'will not throw')     // does not throw
Assert.check(false, 'yup it throws')     // throws
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `boolean` | if true it throws |
| `m` | `string` | the error message |

#### Returns

`void`

void if ok, throws otherwise

#### Defined in

[src/Assert.ts:26](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L26)

▸ **check**(`a`): [`Unary`](Fn.md#unary)<`boolean`, `void`\>

Returns a unary function which accepts a boolean
which asserts that the argument is true, otherwise throws 
an error with the given message

**`Example`**

```ts
import { Assert } from 'tiinvo'

Assert.check('will not throw')(true)     // does not throw
Assert.check('yup it throws')(false)     // throws
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the error message |

#### Returns

[`Unary`](Fn.md#unary)<`boolean`, `void`\>

the unary function

#### Defined in

[src/Assert.ts:45](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L45)

___

### checkResult

▸ **checkResult**(`a`, `b`): [`T`](Result.md#t)<`boolean`\>

Asserts that a specified `condition` is true and returns it, otherwise returns `Result.Err` with the given `errorMessage`

**`Example`**

```ts
import { Assert } from 'tiinvo'

Assert.checkResult(true, 'will not throw')     // true
Assert.checkResult(false, 'yup it throws')     // Error("yup it throws")
Assert.checkResult('will not throw')(true)     // true
Assert.checkResult('yup it throws')(false)     // Error("yup it throws")
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `boolean` |
| `b` | `string` |

#### Returns

[`T`](Result.md#t)<`boolean`\>

#### Defined in

[src/Assert.ts:76](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L76)

▸ **checkResult**(`a`): [`Unary`](Fn.md#unary)<`boolean`, [`T`](Result.md#t)<`boolean`\>\>

Returns a unary function which asserts that a specified condition is true 
returning it, otherwise returns `Result.Err` with the given error message `a`

**`Example`**

```ts
import { Assert } from 'tiinvo'

Assert.checkResult('will not throw')(true)     // true
Assert.checkResult('yup it throws')(false)     // Error("yup it throws")
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | the error message |

#### Returns

[`Unary`](Fn.md#unary)<`boolean`, [`T`](Result.md#t)<`boolean`\>\>

the unary function

#### Defined in

[src/Assert.ts:94](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L94)

___

### make

▸ **make**<`a`\>(`p`, `m`): [`Unary`](Fn.md#unary)<`a`, `void`\>

Creates a check function starting from a `Predicate.t<a>` and a message.

**`Example`**

```ts
import { Assert, Num } from 'tiinvo'

const check0 = Assert.make(Num.isEven, 'number is not even')

check0(10)              // does not throw
check0(11)              // throws "number is not even"
check1(10)              // does not throw
check1(11)              // throws "number 11 is not even"
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the type passed to the predicate and to the mappable functor (if any) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`T`](Predicate.md#t)<`a`\> | the predicate |
| `m` | `string` \| [`Mappable`](Functors.md#mappable)<`a`, `string`\> | the error message or the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<`a`, `void`\>

the asserting function

#### Defined in

[src/Assert.ts:133](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L133)

▸ **make**<`a`\>(`p`): [`Unary`](Fn.md#unary)<[`T`](Predicate.md#t)<`a`\>, [`Unary`](Fn.md#unary)<`a`, `void`\>\>

Creates a check function starting from a `Predicate.t<a>` and a message.

**`Example`**

```ts
import { Assert, Num } from 'tiinvo'

const check1 = Assert.make(Num.isEven, x => `number ${x} is not even`)

check0(10)              // does not throw
check0(11)              // throws "number is not even"
check1(10)              // does not throw
check1(11)              // throws "number 11 is not even"
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the type passed to the predicate and to the mappable functor (if any) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` \| [`Mappable`](Functors.md#mappable)<`a`, `string`\> | the error message or the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Predicate.md#t)<`a`\>, [`Unary`](Fn.md#unary)<`a`, `void`\>\>

the asserting function

#### Defined in

[src/Assert.ts:155](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L155)

___

### makeResult

▸ **makeResult**<`a`\>(`p`, `m`): [`Unary`](Fn.md#unary)<`a`, [`T`](Result.md#t)<`boolean`\>\>

Creates a check function starting from a `Predicate.t<a>` and a message.

**`Example`**

```ts
import { Assert, Num } from 'tiinvo'

const check0 = Assert.makeResult(Num.isEven, 'number is not even')
const check1 = Assert.makeResult(Num.isEven, x => `number ${x} is not even`)

check0(10)              // true
check0(11)              // Error("number is not even")
check1(10)              // true
check1(11)              // Error("number 11 is not even")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the type passed to the predicate and to the mappable functor (if any) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`T`](Predicate.md#t)<`a`\> | the asserting predicate |
| `m` | `string` \| [`Mappable`](Functors.md#mappable)<`a`, `string`\> | the error message or the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<`a`, [`T`](Result.md#t)<`boolean`\>\>

the asserting function

#### Defined in

[src/Assert.ts:187](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L187)

▸ **makeResult**<`a`\>(`p`): [`Unary`](Fn.md#unary)<[`T`](Predicate.md#t)<`a`\>, [`Unary`](Fn.md#unary)<`a`, [`T`](Result.md#t)<`boolean`\>\>\>

Creates a check function starting from a a message or a mappable functor.

**`Example`**

```ts
import { Assert, Num } from 'tiinvo'

const check1 = Assert.makeResult(Num.isEven, x => `number ${x} is not even`)

check0(10)              // true
check0(11)              // Error("number is not even")
check1(10)              // true
check1(11)              // Error("number 11 is not even")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the type passed to the predicate and to the mappable functor (if any) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` \| [`Mappable`](Functors.md#mappable)<`a`, `string`\> | the error message or the mappable functor |

#### Returns

[`Unary`](Fn.md#unary)<[`T`](Predicate.md#t)<`a`\>, [`Unary`](Fn.md#unary)<`a`, [`T`](Result.md#t)<`boolean`\>\>\>

the asserting function

#### Defined in

[src/Assert.ts:209](https://github.com/OctoD/tiinvo/blob/1be66d3/src/Assert.ts#L209)
