> **[tiinvo](../README.md)**

[Globals](../README.md) / ["Maybe"](../modules/_maybe_.md) / [MaybeLike](_maybe_.maybelike.md) /

# Class: MaybeLike <**T, IsJustLike**>

## Type parameters

▪ **T**

▪ **IsJustLike**: *boolean*

## Hierarchy

* **MaybeLike**

## Index

### Constructors

* [constructor](_maybe_.maybelike.md#constructor)

### Properties

* [isJustLike](_maybe_.maybelike.md#protected-isjustlike)
* [value](_maybe_.maybelike.md#protected-value)

### Methods

* [and](_maybe_.maybelike.md#and)
* [andThen](_maybe_.maybelike.md#andthen)
* [cata](_maybe_.maybelike.md#cata)
* [either](_maybe_.maybelike.md#either)
* [isJust](_maybe_.maybelike.md#isjust)
* [isNothing](_maybe_.maybelike.md#isnothing)
* [map](_maybe_.maybelike.md#map)
* [mapOrElse](_maybe_.maybelike.md#maporelse)
* [option](_maybe_.maybelike.md#option)
* [unwrap](_maybe_.maybelike.md#unwrap)

## Constructors

###  constructor

\+ **new MaybeLike**(`value`: `T`, `isJustLike`: `IsJustLike`): *[MaybeLike](_maybe_.maybelike.md)*

Defined in Maybe.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`isJustLike` | `IsJustLike` |

**Returns:** *[MaybeLike](_maybe_.maybelike.md)*

## Properties

### `Protected` isJustLike

• **isJustLike**: *`IsJustLike`*

Defined in Maybe.ts:13

___

### `Protected` value

• **value**: *`T`*

Defined in Maybe.ts:12

## Methods

###  and

▸ **and**<**U**>(`maybeb`: [MaybeLike](_maybe_.maybelike.md)‹*`U`*, *boolean*›): *[MaybeLike](_maybe_.maybelike.md)‹*`U`*, *boolean*› | [MaybeLike](_maybe_.maybelike.md)‹*`T`*, *`IsJustLike`*›*

Defined in Maybe.ts:29

Returns `Nothing<T>` if the value is `Nothing<T>`, otherwise returns `maybeb`

```ts
Just(10).and(Just(3)) // Just(3)
Nothing(10).and(Just(3)) // Nothing(10)
```

**`template`** U

**`memberof`** MaybeLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`maybeb` | [MaybeLike](_maybe_.maybelike.md)‹*`U`*, *boolean*› |

**Returns:** *[MaybeLike](_maybe_.maybelike.md)‹*`U`*, *boolean*› | [MaybeLike](_maybe_.maybelike.md)‹*`T`*, *`IsJustLike`*›*

___

###  andThen

▸ **andThen**<**Fn**, **U**>(`fn`: `Fn`): *[Maybe](../modules/_maybe_.md#maybe)‹*`U`*› | [MaybeLike](_maybe_.maybelike.md)‹*`T`*, *`IsJustLike`*›*

Defined in Maybe.ts:44

Returns `fn` result if `Maybe<T>` is `Just<T>`, otherwise returns `Nothing<T>`

```ts
Just(10).andThen(arg => Maybe(arg ** 2)) // Just(100)
Nothing(10).andThen(arg => Maybe(arg ** 2)) // Nothing(10)
```

**`template`** U

**`memberof`** MaybeLike

**Type parameters:**

▪ **Fn**: *function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | `Fn` |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹*`U`*› | [MaybeLike](_maybe_.maybelike.md)‹*`T`*, *`IsJustLike`*›*

___

###  cata

▸ **cata**<**U**>(`map`: [MaybeCataMap](../interfaces/_maybe_.maybecatamap.md)‹*`T`*, *`U`*›): *`U`*

Defined in Maybe.ts:71

Calls Just fn if is `Just<T>`, otherwise calls Nothing fn if is `Nothing<T>`

```ts
function safeLength(arg: unknown) {
   return Maybe(arg).andThen(arg => typeof arg === 'string')
     .cata({
         Just: arg => arg.length,
         Nothing: arg => 0,
     })
}

safeLength(10) // 0
safeLength('hello world') // 11

```

**`template`** U

**`memberof`** MaybeLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`map` | [MaybeCataMap](../interfaces/_maybe_.maybecatamap.md)‹*`T`*, *`U`*› |

**Returns:** *`U`*

___

###  either

▸ **either**(): *`IsJustLike extends false ? EitherLike<T, T> : EitherLike<T, T>`*

Defined in Maybe.ts:91

Returns a `Left<T>` if the value is `Nothing<T>`, otherwise returns `Right<T>` if the value is `Just<T>`

```ts
Just(10).either().isLeft() // false
Just(10).either().isRight() // true
```

**`memberof`** MaybeLike

**Returns:** *`IsJustLike extends false ? EitherLike<T, T> : EitherLike<T, T>`*

___

###  isJust

▸ **isJust**(): *boolean*

Defined in Maybe.ts:106

Returns if `value` is `Just<T>`

```ts
Just(10).isJust() // true
Nothing(10).isJust() // false
```

**`memberof`** MaybeLike

**Returns:** *boolean*

___

###  isNothing

▸ **isNothing**(): *boolean*

Defined in Maybe.ts:121

Returns if `value` is `Nothing<T>`

```ts
Just(10).isNothing() // false
Nothing(10).isNothing() // true
```

**`memberof`** MaybeLike

**Returns:** *boolean*

___

###  map

▸ **map**<**Fn**>(`fn`: `Fn`): *[Maybe](../modules/_maybe_.md#maybe)‹*`ReturnType<Fn>`*›*

Defined in Maybe.ts:141

Maps an `Maybe<T>` to `Maybe<U>` by applying a function to a contained value.

```ts
Just('lorem ipsum')
 .map(arg => arg.replace(/\s/g, ''))
 .map(arg => arg.length)
 .unwrap() // 10
```

**`template`** Fn

**`template`** U

**`memberof`** MaybeLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | `Fn` |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹*`ReturnType<Fn>`*›*

___

###  mapOrElse

▸ **mapOrElse**<**FnNothing**, **FnJust**>(`fnNothing`: `FnNothing`, `fnJust`: `FnJust`): *[Maybe](../modules/_maybe_.md#maybe)‹*`ReturnType<FnJust>`*›*

Defined in Maybe.ts:160

Applies a function to the contained value (if any), or computes a default (if not), returning a Maybe.

```ts
Just('foobar').mapOrElse(arg => 0, arg => arg.length) // Just(6)
Nothing('foobar').mapOrElse(arg => 0, arg => arg.length) // Nothing(0)
```

**`template`** FnJust

**`memberof`** MaybeLike

**Type parameters:**

▪ **FnNothing**: *function*

▪ **FnJust**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fnNothing` | `FnNothing` |
`fnJust` | `FnJust` |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹*`ReturnType<FnJust>`*›*

___

###  option

▸ **option**(): *`IsJustLike extends true ? OptionLike<T> : OptionLike<T>`*

Defined in Maybe.ts:178

Returns `Some<T>` if is `Just<T>`, otherwise returns `None<T>` if is `Nothing<T>`

```ts
Just(10).option() // Some(10)
Nothing(10).option() // None()
```

**`memberof`** MaybeLike

**Returns:** *`IsJustLike extends true ? OptionLike<T> : OptionLike<T>`*

___

###  unwrap

▸ **unwrap**(): *`T`*

Defined in Maybe.ts:193

Unwraps `value`

```ts
Just(10).unwrap() // 10
Nothing('else matter').unwrap() // 'else matter'
```

**`memberof`** MaybeLike

**Returns:** *`T`*