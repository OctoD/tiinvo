[tiinvo](../README.md) › ["Maybe"](../modules/_maybe_.md) › [MaybeLike](_maybe_.maybelike.md)

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
* [or](_maybe_.maybelike.md#or)
* [orThen](_maybe_.maybelike.md#orthen)
* [unwrap](_maybe_.maybelike.md#unwrap)

## Constructors

###  constructor

\+ **new MaybeLike**(`value`: T, `isJustLike`: IsJustLike): *[MaybeLike](_maybe_.maybelike.md)*

*Defined in [Maybe.ts:10](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`isJustLike` | IsJustLike |

**Returns:** *[MaybeLike](_maybe_.maybelike.md)*

## Properties

### `Protected` isJustLike

• **isJustLike**: *IsJustLike*

*Defined in [Maybe.ts:11](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L11)*

___

### `Protected` value

• **value**: *T*

*Defined in [Maybe.ts:11](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L11)*

## Methods

###  and

▸ **and**<**U**>(`maybeb`: [MaybeLike](_maybe_.maybelike.md)‹U, boolean›): *[MaybeLike](_maybe_.maybelike.md)‹U, boolean› | [MaybeLike](_maybe_.maybelike.md)‹T, IsJustLike›*

*Defined in [Maybe.ts:26](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L26)*

Returns `Nothing<T>` if the value is `Nothing<T>`, otherwise returns `maybeb`

```ts
Just(10).and(Just(3)) // Just(3)
Nothing(10).and(Just(3)) // Nothing(10)
```

**`memberof`** MaybeLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`maybeb` | [MaybeLike](_maybe_.maybelike.md)‹U, boolean› |

**Returns:** *[MaybeLike](_maybe_.maybelike.md)‹U, boolean› | [MaybeLike](_maybe_.maybelike.md)‹T, IsJustLike›*

___

###  andThen

▸ **andThen**<**Fn**, **U**>(`fn`: Fn): *[Maybe](../modules/_maybe_.md#maybe)‹U› | [MaybeLike](_maybe_.maybelike.md)‹T, IsJustLike›*

*Defined in [Maybe.ts:43](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L43)*

Returns `fn` result if `Maybe<T>` is `Just<T>`, otherwise returns `Nothing<T>`

```ts
Just(10).andThen(arg => Maybe(arg ** 2)) // Just(100)
Nothing(10).andThen(arg => Maybe(arg ** 2)) // Nothing(10)
```

**`memberof`** MaybeLike

**Type parameters:**

▪ **Fn**: *function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹U› | [MaybeLike](_maybe_.maybelike.md)‹T, IsJustLike›*

___

###  cata

▸ **cata**<**U**>(`map`: [MaybeCataMap](../interfaces/_maybe_.maybecatamap.md)‹T, U›): *U*

*Defined in [Maybe.ts:72](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L72)*

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

**`memberof`** MaybeLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`map` | [MaybeCataMap](../interfaces/_maybe_.maybecatamap.md)‹T, U› |

**Returns:** *U*

___

###  either

▸ **either**(): *IsJustLike extends false ? Left<T> : Right<T>*

*Defined in [Maybe.ts:92](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L92)*

Returns a `Left<T>` if the value is `Nothing<T>`, otherwise returns `Right<T>` if the value is `Just<T>`

```ts
Just(10).either().isLeft() // false
Just(10).either().isRight() // true
```

**`memberof`** MaybeLike

**Returns:** *IsJustLike extends false ? Left<T> : Right<T>*

___

###  isJust

▸ **isJust**(): *boolean*

*Defined in [Maybe.ts:107](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L107)*

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

*Defined in [Maybe.ts:122](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L122)*

Returns if `value` is `Nothing<T>`

```ts
Just(10).isNothing() // false
Nothing(10).isNothing() // true
```

**`memberof`** MaybeLike

**Returns:** *boolean*

___

###  map

▸ **map**<**Fn**>(`fn`: Fn): *[Maybe](../modules/_maybe_.md#maybe)‹ReturnType‹Fn››*

*Defined in [Maybe.ts:142](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L142)*

Maps an `Maybe<T>` to `Maybe<U>` by applying a function to a contained value.

```ts
Just('lorem ipsum')
 .map(arg => arg.replace(/\s/g, ''))
 .map(arg => arg.length)
 .unwrap() // 10
```

**`template`** 

**`memberof`** MaybeLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹ReturnType‹Fn››*

___

###  mapOrElse

▸ **mapOrElse**<**FnNothing**, **FnJust**>(`fnNothing`: FnNothing, `fnJust`: FnJust): *[Maybe](../modules/_maybe_.md#maybe)‹ReturnType‹FnJust››*

*Defined in [Maybe.ts:161](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L161)*

Applies a function to the contained value (if any), or computes a default (if not), returning a Maybe.

```ts
Just('foobar').mapOrElse(arg => 0, arg => arg.length) // Just(6)
Nothing('foobar').mapOrElse(arg => 0, arg => arg.length) // Nothing(0)
```

**`memberof`** MaybeLike

**Type parameters:**

▪ **FnNothing**: *function*

▪ **FnJust**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fnNothing` | FnNothing |
`fnJust` | FnJust |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹ReturnType‹FnJust››*

___

###  option

▸ **option**(): *IsJustLike extends true ? Some<T> : None<T>*

*Defined in [Maybe.ts:181](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L181)*

Returns `Some<T>` if is `Just<T>`, otherwise returns `None<T>` if is `Nothing<T>`

```ts
Just(10).option() // Some(10)
Nothing(10).option() // None()
```

**`memberof`** MaybeLike

**Returns:** *IsJustLike extends true ? Some<T> : None<T>*

___

###  or

▸ **or**<**Z**>(`maybeValue`: [MaybeLike](_maybe_.maybelike.md)‹Z, IsJustLike›): *[MaybeLike](_maybe_.maybelike.md)‹unknown, IsJustLike›*

*Defined in [Maybe.ts:196](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L196)*

If T is Nothing, then returns maybeValue

```ts
Maybe(undefined).or(Maybe(null)).or(Maybe(10)).unwrap() // 10;
```

**`memberof`** MaybeLike

**Type parameters:**

▪ **Z**

**Parameters:**

Name | Type |
------ | ------ |
`maybeValue` | [MaybeLike](_maybe_.maybelike.md)‹Z, IsJustLike› |

**Returns:** *[MaybeLike](_maybe_.maybelike.md)‹unknown, IsJustLike›*

___

###  orThen

▸ **orThen**<**Fn**, **Z**>(`maybeFn`: Fn): *[Maybe](../modules/_maybe_.md#maybe)‹Z›*

*Defined in [Maybe.ts:215](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L215)*

If T is Nothing, then calls the function Fn

```ts
Maybe(null).orThen(() => Maybe(undefined)).orThen(() => Maybe(10)).unwrap() // 10
```

**`memberof`** MaybeLike

**Type parameters:**

▪ **Fn**: *function*

▪ **Z**

**Parameters:**

Name | Type |
------ | ------ |
`maybeFn` | Fn |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹Z›*

___

###  unwrap

▸ **unwrap**(): *T*

*Defined in [Maybe.ts:233](https://github.com/OctoD/tiinvo/blob/6df333b/src/Maybe.ts#L233)*

Unwraps `value`

```ts
Just(10).unwrap() // 10
Nothing('else matter').unwrap() // 'else matter'
```

**`memberof`** MaybeLike

**Returns:** *T*
