[tiinvo - v1.6.0](../README.md) › ["Either"](../modules/_either_.md) › [EitherLike](_either_.eitherlike.md)

# Class: EitherLike <**LeftValue, RightValue**>

## Type parameters

▪ **LeftValue**

▪ **RightValue**

## Hierarchy

* **EitherLike**

## Index

### Constructors

* [constructor](_either_.eitherlike.md#constructor)

### Properties

* [isLeftType](_either_.eitherlike.md#protected-islefttype)
* [value](_either_.eitherlike.md#protected-value)

### Methods

* [and](_either_.eitherlike.md#and)
* [andThen](_either_.eitherlike.md#andthen)
* [fold](_either_.eitherlike.md#fold)
* [isLeft](_either_.eitherlike.md#isleft)
* [isRight](_either_.eitherlike.md#isright)
* [option](_either_.eitherlike.md#option)
* [or](_either_.eitherlike.md#or)
* [orThen](_either_.eitherlike.md#orthen)
* [result](_either_.eitherlike.md#result)
* [swap](_either_.eitherlike.md#swap)
* [unwrap](_either_.eitherlike.md#unwrap)

## Constructors

###  constructor

\+ **new EitherLike**(`value`: LeftValue | RightValue, `isLeftType`: boolean): *[EitherLike](_either_.eitherlike.md)*

*Defined in [Either.ts:5](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | LeftValue &#124; RightValue |
`isLeftType` | boolean |

**Returns:** *[EitherLike](_either_.eitherlike.md)*

## Properties

### `Protected` isLeftType

• **isLeftType**: *boolean*

*Defined in [Either.ts:8](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L8)*

___

### `Protected` value

• **value**: *LeftValue | RightValue*

*Defined in [Either.ts:7](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L7)*

## Methods

###  and

▸ **and**<**U**, **X**>(`either`: [EitherLike](_either_.eitherlike.md)‹U, X›): *[EitherLike](_either_.eitherlike.md)‹U, X› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

*Defined in [Either.ts:25](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L25)*

Returns `Either<U, X>` if is `Right`, otherwise returns `Either<LeftValue, RightValue>`

```ts
Left(100).and(Right(200)) // Left(100)
Right(100).and(Right(200)) // Right(200)
Right(100).and(Left(200)) // Left(200)
```

**`template`** U

**`memberof`** EitherLike

**Type parameters:**

▪ **U**

▪ **X**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [EitherLike](_either_.eitherlike.md)‹U, X› |

**Returns:** *[EitherLike](_either_.eitherlike.md)‹U, X› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

___

###  andThen

▸ **andThen**<**Fn**, **U**>(`fn`: Fn): *[EitherLike](_either_.eitherlike.md)‹LeftValue, U› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

*Defined in [Either.ts:45](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L45)*

Returns `Fn` result if is `Right`, otherwise returns `Either<LeftValue>`

```ts
Right(100).andThen(value => Right(value + 1)) // Right(101)
Left(100).andThen(value => Right(value + 1)) // Left(100)
```

**`template`** Fn

**`template`** U

**`memberof`** Either

**Type parameters:**

▪ **Fn**: *function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[EitherLike](_either_.eitherlike.md)‹LeftValue, U› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

___

###  fold

▸ **fold**<**FnLeft**, **FnRight**>(`leftFn`: FnLeft, `rightFn`: FnRight): *any*

*Defined in [Either.ts:96](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L96)*

Returns `leftFn` result if is `Left`, otherwise returns `rightFn` if is `Right`

```ts
Left(100).fold(a => a / 2, b => b * 2) // 50
Right(100).fold(a => a / 2, b => b * 2) // 200
```

**`template`** A

**`memberof`** Either

**Type parameters:**

▪ **FnLeft**: *function*

▪ **FnRight**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`leftFn` | FnLeft |
`rightFn` | FnRight |

**Returns:** *any*

___

###  isLeft

▸ **isLeft**(): *boolean*

*Defined in [Either.ts:63](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L63)*

Returns `true` if is `Left`

```ts
Left().isLeft(); // true
Right().isLeft(); // false
```

**`memberof`** Either

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Defined in [Either.ts:78](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L78)*

Returns `true` if is `Right`

```ts
Left().isRight(); // false
Right().isRight(); // true
```

**`memberof`** Either

**Returns:** *boolean*

___

###  option

▸ **option**(): *[Option](../modules/_option_.md#option)‹RightValue›*

*Defined in [Either.ts:118](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L118)*

Returns `Some<RightValue>` if is `Right`, otherwise returns `None`

```ts
Left(100).option() // None()
Right(100).option() // Some(100)
```

**`memberof`** Either

**Returns:** *[Option](../modules/_option_.md#option)‹RightValue›*

___

###  or

▸ **or**<**U**, **X**>(`either`: [EitherLike](_either_.eitherlike.md)‹U, X›): *[EitherLike](_either_.eitherlike.md)‹U, X› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

*Defined in [Either.ts:136](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L136)*

Returns `Either<U, X>` if is `Left`, otherwise returns `Either<LeftValue, RightValue>`

```ts
Left(100).or(Right(200)) // Right(100)
Right(100).or(Right(200)) // Right(100)
Right(100).or(Left(200)) // Right(100)
```

**`template`** U

**`memberof`** EitherLike

**Type parameters:**

▪ **U**

▪ **X**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [EitherLike](_either_.eitherlike.md)‹U, X› |

**Returns:** *[EitherLike](_either_.eitherlike.md)‹U, X› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

___

###  orThen

▸ **orThen**<**Fn**, **U**>(`fn`: Fn): *[EitherLike](_either_.eitherlike.md)‹LeftValue, U› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

*Defined in [Either.ts:156](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L156)*

Returns `Fn` result if is `Left`, otherwise returns `Either<LeftValue>`

```ts
Right(100).andThen(value => Right(value + 1)) // Right(100)
Left(100).andThen(value => Right(value + 1)) // Right(101)
```

**`template`** Fn

**`template`** U

**`memberof`** Either

**Type parameters:**

▪ **Fn**: *function*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[EitherLike](_either_.eitherlike.md)‹LeftValue, U› | [EitherLike](_either_.eitherlike.md)‹LeftValue, RightValue›*

___

###  result

▸ **result**(): *[Result](../modules/_result_.md#result)‹RightValue, Error›*

*Defined in [Either.ts:174](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L174)*

Returns `Ok<RightValue>` if is `Right`, otherwise returns `Err` if is `Left`

```ts
Left(100).result() // Err()
Right(20).result() // Ok(20)
```

**`memberof`** Either

**Returns:** *[Result](../modules/_result_.md#result)‹RightValue, Error›*

___

###  swap

▸ **swap**(): *[EitherLike](_either_.eitherlike.md)‹RightValue, LeftValue›*

*Defined in [Either.ts:191](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L191)*

Swaps `Right<LeftValue, RightValue>` to `Left<RightValue, LeftValue>` if is `Right<RightValue>`, otherwise swaps `Left<LeftValue, RightValue>` to `Right<RightValue, LeftValue>` if is `Left<LeftValue>`

```ts
Left(100).swap() // Right(100)
Right(20).swap() // Left(20)
```

**`memberof`** Either

**Returns:** *[EitherLike](_either_.eitherlike.md)‹RightValue, LeftValue›*

___

###  unwrap

▸ **unwrap**(): *LeftValue | RightValue*

*Defined in [Either.ts:206](https://github.com/OctoD/tiinvo/blob/52c8484/src/Either.ts#L206)*

Unwraps value `LeftValue | RightValue`

```ts
Left(10).unwrap() // 10
Right(`hello world`).unwrap() // 'hello world'
```

**`memberof`** Either

**Returns:** *LeftValue | RightValue*
