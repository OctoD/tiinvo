**[tiinvo](../README.md)**

[Globals](../README.md) › ["Result"](../modules/_result_.md) › [ResultLike](_result_.resultlike.md)

# Class: ResultLike <**R, E**>

## Type parameters

▪ **R**

▪ **E**: *Error*

## Hierarchy

* **ResultLike**

## Index

### Constructors

* [constructor](_result_.resultlike.md#constructor)

### Properties

* [value](_result_.resultlike.md#protected-value)

### Methods

* [and](_result_.resultlike.md#and)
* [andThen](_result_.resultlike.md#andthen)
* [err](_result_.resultlike.md#err)
* [expect](_result_.resultlike.md#expect)
* [expectErr](_result_.resultlike.md#expecterr)
* [isError](_result_.resultlike.md#iserror)
* [isOk](_result_.resultlike.md#isok)
* [map](_result_.resultlike.md#map)
* [mapOrElse](_result_.resultlike.md#maporelse)
* [ok](_result_.resultlike.md#ok)
* [or](_result_.resultlike.md#or)
* [orElse](_result_.resultlike.md#orelse)
* [unwrap](_result_.resultlike.md#unwrap)
* [unwrapErr](_result_.resultlike.md#unwraperr)
* [unwrapOr](_result_.resultlike.md#unwrapor)
* [unwrapOrElse](_result_.resultlike.md#unwraporelse)

## Constructors

###  constructor

\+ **new ResultLike**(`value`: R | E): *[ResultLike](_result_.resultlike.md)*

*Defined in [Result.ts:4](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R \| E |

**Returns:** *[ResultLike](_result_.resultlike.md)*

## Properties

### `Protected` value

• **value**: *R | E*

*Defined in [Result.ts:5](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L5)*

## Methods

###  and

▸ **and**<**U**>(`res`: [ResultLike](_result_.resultlike.md)‹U, E›): *[ResultLike](_result_.resultlike.md)‹U, E›*

*Defined in [Result.ts:20](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L20)*

Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.

```ts
Ok(10).and(Ok(20)) // Ok(20)
Err('meh').and(Ok(30)) // Err('meh')
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [ResultLike](_result_.resultlike.md)‹U, E› |

**Returns:** *[ResultLike](_result_.resultlike.md)‹U, E›*

___

###  andThen

▸ **andThen**<**U**>(`op`: function): *[ResultLike](_result_.resultlike.md)‹U, E›*

*Defined in [Result.ts:39](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L39)*

Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.

```ts
Ok(20).andThen(a => a * 2) // Ok(40)
Err('aaa').andThen(a => a * 2) // Err('aaa')
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

▪ **op**: *function*

▸ (`arg`: R): *[ResultLike](_result_.resultlike.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | R |

**Returns:** *[ResultLike](_result_.resultlike.md)‹U, E›*

___

###  err

▸ **err**(): *[Option](../modules/_option_.md#option)‹E›*

*Defined in [Result.ts:57](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L57)*

Converts from `Result<T, E>` to `OptionLike<E>`.

```ts
Err('foo').err() // OptionLike(new Error('foo'))
```

**`memberof`** Result

**Returns:** *[Option](../modules/_option_.md#option)‹E›*

___

###  expect

▸ **expect**(`message`: string): *R | never*

*Defined in [Result.ts:73](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L73)*

Unwraps a result, yielding the content of an `Ok`.

```ts
Ok(10).expect('does not explode') // 10
Err('argh').expect('will explode') // throws Error('will explode')
```

**`memberof`** Result

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *R | never*

___

###  expectErr

▸ **expectErr**(`message`: string): *E | never*

*Defined in [Result.ts:93](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L93)*

Unwraps a result, yielding the content of an `Err`.

```ts
Ok(10).expectErr('explosions?') // throws Error('explosions?')
Err('🦄').expectErr('explosions?') // returns Error('🦄')
```

**`memberof`** Result

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *E | never*

___

###  isError

▸ **isError**(): *boolean*

*Defined in [Result.ts:112](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L112)*

Returns true if the result is `Error`.

```ts
Ok(10).isError() // false
Err('aaa').isError() // true
```

**`memberof`** Result

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Defined in [Result.ts:127](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L127)*

Returns true if the result is `Ok`.

```ts
Ok(10).isOk() // true
Err('aaa').isOk() // false
```

**`memberof`** Result

**Returns:** *boolean*

___

###  map

▸ **map**<**K**>(`f`: function): *[ResultLike](_result_.resultlike.md)‹K, E›*

*Defined in [Result.ts:146](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L146)*

Maps a `Result<T, E>` to `Result<U, E>` by applying a function
to a contained `Ok` value, leaving an `Err` value untouched.

This function can be used to compose the results of two functions.

```ts
Ok('asd').map(a => a.length) // Ok(3)
```

**`template`** K

**`memberof`** Result

**Type parameters:**

▪ **K**

**Parameters:**

▪ **f**: *function*

▸ (`value`: R): *K*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[ResultLike](_result_.resultlike.md)‹K, E›*

___

###  mapOrElse

▸ **mapOrElse**<**F**>(`fallback`: function, `f`: function): *F*

*Defined in [Result.ts:168](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L168)*

Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value.

This function can be used to unpack a successful result while handling an error.

```ts
Ok('asd').mapOrElse(b => b.message, a => a.repeat(2)) // 'asdasd'
Err('ohmybad').mapOrElse(b => b.message, a => a.repeat(2)) // 'ohmybad'
```

**`template`** F

**`memberof`** Result

**Type parameters:**

▪ **F**

**Parameters:**

▪ **fallback**: *function*

▸ (`error`: Error): *F*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

▪ **f**: *function*

▸ (`value`: R): *F*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *F*

___

###  ok

▸ **ok**(): *[Option](../modules/_option_.md#option)‹R›*

*Defined in [Result.ts:188](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L188)*

Converts from Result<T, E> to Option<T>.

```ts
Ok(10).ok() // OptionLike(10)
Err('ahrrrrr').ok() // None()
```

**`memberof`** Result

**Returns:** *[Option](../modules/_option_.md#option)‹R›*

___

###  or

▸ **or**<**U**>(`res`: [ResultLike](_result_.resultlike.md)‹U, E›): *[ResultLike](_result_.resultlike.md)‹U, E› | [Ok](../modules/_result_.md#ok)‹R›*

*Defined in [Result.ts:205](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L205)*

Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.

```ts
Ok(10).or(Ok(20)) // Ok(10)
Err('').or(Ok(20)) // Ok(20)
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [ResultLike](_result_.resultlike.md)‹U, E› |

**Returns:** *[ResultLike](_result_.resultlike.md)‹U, E› | [Ok](../modules/_result_.md#ok)‹R›*

___

###  orElse

▸ **orElse**<**U**>(`op`: function): *[ResultLike](_result_.resultlike.md)‹U, E› | [Ok](../modules/_result_.md#ok)‹R›*

*Defined in [Result.ts:224](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L224)*

Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.

This function can be used for control flow based on result values.

```ts
Ok('unicorn!').orElse(a => a.message) // Ok('unicorn!')
Err('darn!').orElse(a => a.message) // Ok('darn!')
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

▪ **op**: *function*

▸ (`arg`: E): *[ResultLike](_result_.resultlike.md)‹U, E›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | E |

**Returns:** *[ResultLike](_result_.resultlike.md)‹U, E› | [Ok](../modules/_result_.md#ok)‹R›*

___

###  unwrap

▸ **unwrap**(): *R | never*

*Defined in [Result.ts:241](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L241)*

Returns wrapped value or throws an `Error`

```ts
Ok(10).unwrap() // 10
Err('err').unwrap() // throws a ReferenceError
```

**`memberof`** Result

**Returns:** *R | never*

___

###  unwrapErr

▸ **unwrapErr**(): *E | never*

*Defined in [Result.ts:261](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L261)*

Unwraps a result, yielding the content of an `Err`.
Throws if the value is not an `Err`.

```ts
Ok(10).unwrap() // throws a ReferenceError
Err('err').unwrap() // Error('err')
```

**`memberof`** Result

**Returns:** *E | never*

___

###  unwrapOr

▸ **unwrapOr**<**U**>(`optb`: U): *R | U*

*Defined in [Result.ts:282](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L282)*

Unwraps a result, yielding the content of an `Ok`. Else, it returns `optb`.

```ts
Ok(10).unwrapOr(20) // 10
Err('foo').unwrapOr(30) // 30
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`optb` | U |

**Returns:** *R | U*

___

###  unwrapOrElse

▸ **unwrapOrElse**<**U**>(`op`: function): *R | U*

*Defined in [Result.ts:299](https://github.com/OctoD/tiinvo/blob/750e283/src/Result.ts#L299)*

Unwraps a result, yielding the content of an `Ok`. If the value is an `Err` then it calls op with its value.

```ts
Ok('pizza').unwrapOrElse(err => err.message) // 'pizza'
Err('pizza with ananas').unwrapOrElse(err => err.message) // 'pizza with ananas'
```

**`template`** U

**`memberof`** Result

**Type parameters:**

▪ **U**

**Parameters:**

▪ **op**: *function*

▸ (`error`: E): *U*

**Parameters:**

Name | Type |
------ | ------ |
`error` | E |

**Returns:** *R | U*