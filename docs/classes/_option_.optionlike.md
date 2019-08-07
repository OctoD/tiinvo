> **[tiinvo](../README.md)**

[Globals](../README.md) / ["Option"](../modules/_option_.md) / [OptionLike](_option_.optionlike.md) /

# Class: OptionLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **OptionLike**

## Index

### Constructors

* [constructor](_option_.optionlike.md#constructor)

### Properties

* [value](_option_.optionlike.md#protected-value)

### Methods

* [and](_option_.optionlike.md#and)
* [andThen](_option_.optionlike.md#andthen)
* [expect](_option_.optionlike.md#expect)
* [filter](_option_.optionlike.md#filter)
* [flattern](_option_.optionlike.md#flattern)
* [foldReturn](_option_.optionlike.md#protected-foldreturn)
* [isNone](_option_.optionlike.md#isnone)
* [isSome](_option_.optionlike.md#issome)
* [map](_option_.optionlike.md#map)
* [mapOr](_option_.optionlike.md#mapor)
* [mapOrElse](_option_.optionlike.md#maporelse)
* [okOr](_option_.optionlike.md#okor)
* [okOrElse](_option_.optionlike.md#okorelse)
* [or](_option_.optionlike.md#or)
* [orElse](_option_.optionlike.md#orelse)
* [transpose](_option_.optionlike.md#transpose)
* [unwrap](_option_.optionlike.md#unwrap)
* [unwrapOr](_option_.optionlike.md#unwrapor)
* [xor](_option_.optionlike.md#xor)

## Constructors

###  constructor

\+ **new OptionLike**(`value`: `T`): *[OptionLike](_option_.optionlike.md)*

*Defined in [Option.ts:4](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[OptionLike](_option_.optionlike.md)*

## Properties

### `Protected` value

• **value**: *`T`*

*Defined in [Option.ts:5](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L5)*

## Methods

###  and

▸ **and**<**U**>(`optb`: [OptionLike](_option_.optionlike.md)‹*`U`*›): *[OptionLike](_option_.optionlike.md)‹*`U`*›*

*Defined in [Option.ts:27](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L27)*

Returns `None` if the option is `None`,
otherwise returns `optb`

```ts
import { Option } from 'tiinvo';

Option(10).and(Option(20)).isSome() // true
Option(null).and(Option(20)).isSome() // false
```

**`template`** U

**`memberof`** OptionLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [OptionLike](_option_.optionlike.md)‹*`U`*› |

**Returns:** *[OptionLike](_option_.optionlike.md)‹*`U`*›*

___

###  andThen

▸ **andThen**<**K**>(`callback`: function): *[Some](../modules/_option_.md#some)‹*`T`*› | `ReturnType<function>`*

*Defined in [Option.ts:38](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L38)*

Returns `callback` result if `OptionLike<T>` is `Some`,
otherwise returns `None`

**`memberof`** OptionLike

**Type parameters:**

▪ **K**

**Parameters:**

▪ **callback**: *function*

▸ (`arg`: `T`): *[OptionLike](_option_.optionlike.md)‹*`K`*›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `T` |

**Returns:** *[Some](../modules/_option_.md#some)‹*`T`*› | `ReturnType<function>`*

___

###  expect

▸ **expect**(`msg`: string): *[Some](../modules/_option_.md#some)‹*`T`*› | never*

*Defined in [Option.ts:59](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L59)*

Throws if the value is a `None` with a custom error message provided by msg.

```ts
import { Option } from 'tiinvo';

Option(1).expect('ok') // Option(1)
Option(null).expect('myerror') // throws ReferenceError('myerror')
```

**`memberof`** OptionLike

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

**Returns:** *[Some](../modules/_option_.md#some)‹*`T`*› | never*

___

###  filter

▸ **filter**(`predicate`: function): *[OptionLike](_option_.optionlike.md)*

*Defined in [Option.ts:81](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L81)*

Returns the `Option` if it's value passes
the `predicate` function. Otherwise returns
None

```ts
Option(1).filter(a => a > 0).isSome() // true
Option(1).filter(a => a > 10).isSome() // false
```

**`memberof`** OptionLike

**Parameters:**

▪ **predicate**: *function*

▸ (`arg`: `T`): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `T` |

**Returns:** *[OptionLike](_option_.optionlike.md)*

___

###  flattern

▸ **flattern**(): *[OptionLike](_option_.optionlike.md)‹*`T`*›*

*Defined in [Option.ts:98](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L98)*

Converts from `Option<Option<T>>` to `Option<T>`

```ts
Option(Some(100)).flattern() // Some(100)
```

**`memberof`** OptionLike

**Returns:** *[OptionLike](_option_.optionlike.md)‹*`T`*›*

___

### `Protected` foldReturn

▸ **foldReturn**<**U**>(`value`: `U`): *`U`*

*Defined in [Option.ts:7](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L7)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `U` |

**Returns:** *`U`*

___

###  isNone

▸ **isNone**(): *boolean*

*Defined in [Option.ts:113](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L113)*

Returns if has not a value

```ts
None().isNone() // true
None().isSome() // false
```

**`memberof`** OptionLike

**Returns:** *boolean*

___

###  isSome

▸ **isSome**(): *boolean*

*Defined in [Option.ts:128](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L128)*

Returns if has a value

```ts
Some().isSome() // true
Some().isNone() // false
```

**`memberof`** OptionLike

**Returns:** *boolean*

___

###  map

▸ **map**<**K**>(`f`: function): *[OptionLike](_option_.optionlike.md)‹*`K`*›*

*Defined in [Option.ts:144](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L144)*

Maps an `OptionLike<T>` to `OptionLike<U>` by applying a function to a contained value.

```ts
Option('foobar').map(val => val.length) // Option(6)
```

**`template`** K

**`memberof`** OptionLike

**Type parameters:**

▪ **K**

**Parameters:**

▪ **f**: *function*

▸ (`arg`: `T`): *`K`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `T` |

**Returns:** *[OptionLike](_option_.optionlike.md)‹*`K`*›*

___

###  mapOr

▸ **mapOr**<**K**>(`def`: `K`, `f`: function): *`K`*

*Defined in [Option.ts:164](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L164)*

Applies a function to the contained value (if any), or returns the provided default (if not).

```ts
Option('foobar').mapOr('abc', arg => arg.length) // Option(6)
None().mapOr('abc', arg => arg.length) // Option('abc')
```

**`template`** K

**`memberof`** OptionLike

**Type parameters:**

▪ **K**

**Parameters:**

▪ **def**: *`K`*

▪ **f**: *function*

▸ (`arg`: `T`): *`K`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `T` |

**Returns:** *`K`*

___

###  mapOrElse

▸ **mapOrElse**<**K**>(`defFn`: function, `f`: function): *`K`*

*Defined in [Option.ts:184](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L184)*

Applies a function to the contained value (if any), or computes a default (if not).

```ts
Option('helloworld').mapOrElse(() => 0, arg => arg.length) // 10
None().mapOrElse(() => 1000, arg => arg.length) // 1000
```

**`template`** K

**`memberof`** OptionLike

**Type parameters:**

▪ **K**

**Parameters:**

▪ **defFn**: *function*

▸ (): *`K`*

▪ **f**: *function*

▸ (`arg`: `T`): *`K`*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | `T` |

**Returns:** *`K`*

___

###  okOr

▸ **okOr**(`err`: [Err](../modules/_result_.md#err)): *[Ok](../modules/_result_.md#ok)‹*`T`*› | [Err](../modules/_result_.md#err)*

*Defined in [Option.ts:202](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L202)*

Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err)`.

```ts
Some(100).okOr(Err('foo')) // Ok(100)
None().okOr(Err('foo')) // Err('foo')
```

**`memberof`** OptionLike

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Err](../modules/_result_.md#err) |

**Returns:** *[Ok](../modules/_result_.md#ok)‹*`T`*› | [Err](../modules/_result_.md#err)*

___

###  okOrElse

▸ **okOrElse**(`err`: function): *[Ok](../modules/_result_.md#ok)‹*`T`*› | [Err](../modules/_result_.md#err)*

*Defined in [Option.ts:218](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L218)*

Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.

```ts
Some(100).okOrElse(() => Err("foo")); // Ok(100)
None().okOrElse(() => Err("foo")); // Err('foo)
```

**`memberof`** OptionLike

**Parameters:**

▪ **err**: *function*

▸ (): *[Err](../modules/_result_.md#err)*

**Returns:** *[Ok](../modules/_result_.md#ok)‹*`T`*› | [Err](../modules/_result_.md#err)*

___

###  or

▸ **or**<**U**>(`optb`: [OptionLike](_option_.optionlike.md)‹*`U`*›): *[OptionLike](_option_.optionlike.md)‹*`T`*› | [OptionLike](_option_.optionlike.md)‹*`U`*›*

*Defined in [Option.ts:236](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L236)*

Returns the option if it contains a value,
otherwise returns `optb`

```ts
None().or(Some(100)) // Some(100)
Some(10).or(Some(100)) // Some(10)
```

**`template`** U

**`memberof`** OptionLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [OptionLike](_option_.optionlike.md)‹*`U`*› |

**Returns:** *[OptionLike](_option_.optionlike.md)‹*`T`*› | [OptionLike](_option_.optionlike.md)‹*`U`*›*

___

###  orElse

▸ **orElse**<**U**>(`f`: function): *[Some](../modules/_option_.md#some)‹*`T`*› | [OptionLike](_option_.optionlike.md)‹*`U`*›*

*Defined in [Option.ts:254](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L254)*

Returns the option if it contains a value, otherwise calls
`f` and returns the result.

```ts
Some(10).orElse(() => 1000) // Some(10)
None().orElse(() => 1000) // Some(1000)
```

**`template`** U

**`memberof`** OptionLike

**Type parameters:**

▪ **U**

**Parameters:**

▪ **f**: *function*

▸ (): *[OptionLike](_option_.optionlike.md)‹*`U`*›*

**Returns:** *[Some](../modules/_option_.md#some)‹*`T`*› | [OptionLike](_option_.optionlike.md)‹*`U`*›*

___

###  transpose

▸ **transpose**(): *[Ok](../modules/_result_.md#ok)‹*[Some](../modules/_option_.md#some)‹*`T`*›*› | [Ok](../modules/_result_.md#ok)‹*[None](../modules/_option_.md#none)‹*`T`*›*›*

*Defined in [Option.ts:270](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L270)*

Transposes an `Option` of a `Result` into a `Result` of an `Option`.

```ts
Option(100).transpose() // Ok(Some(100))
```

**`memberof`** OptionLike

**Returns:** *[Ok](../modules/_result_.md#ok)‹*[Some](../modules/_option_.md#some)‹*`T`*›*› | [Ok](../modules/_result_.md#ok)‹*[None](../modules/_option_.md#none)‹*`T`*›*›*

___

###  unwrap

▸ **unwrap**(): *`T` | never*

*Defined in [Option.ts:312](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L312)*

Returns wrapped value or throws if is None

```ts
Some(10).unwrap() // 10
None().unwrap() // throw ReferenceError
```

**`memberof`** OptionLike

**Returns:** *`T` | never*

___

###  unwrapOr

▸ **unwrapOr**<**K**>(`value`: `K`): *`K`*

*Defined in [Option.ts:332](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L332)*

Returns the contained value or a default.

```ts
None().unwrapOr(10) // 10
Some(20).unwrapOr(10) // 20
```

**`memberof`** OptionLike

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type |
------ | ------ |
`value` | `K` |

**Returns:** *`K`*

___

###  xor

▸ **xor**<**U**>(`optb`: [OptionLike](_option_.optionlike.md)‹*`U`*›): *[Some](../modules/_option_.md#some)‹*`T`*› | [Some](../modules/_option_.md#some)‹*`U`*› | [None](../modules/_option_.md#none)‹*`T`*›*

*Defined in [Option.ts:291](https://github.com/OctoD/tiinvo/blob/36b3998/src/Option.ts#L291)*

Returns Some if exactly one of self,
optb is Some,
otherwise returns None.

```ts
Some(10).xor(Some(10)) // None()
Some(10).xor(Some(11)) // Some(10)
None().xor(Some(11)) // Some(11)
None().xor(None()) // None()
```

**`template`** U

**`memberof`** OptionLike

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | [OptionLike](_option_.optionlike.md)‹*`U`*› |

**Returns:** *[Some](../modules/_option_.md#some)‹*`T`*› | [Some](../modules/_option_.md#some)‹*`U`*› | [None](../modules/_option_.md#none)‹*`T`*›*