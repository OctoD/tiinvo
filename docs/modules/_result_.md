[tiinvo](../README.md) › ["result"](_result_.md)

# Module: "result"

## Index

### Interfaces

* [Err](../interfaces/_result_.err.md)
* [Ok](../interfaces/_result_.ok.md)

### Type aliases

* [ErrFactory](_result_.md#errfactory)
* [Errtag](_result_.md#errtag)
* [OkFactory](_result_.md#okfactory)
* [Oktag](_result_.md#oktag)
* [Result](_result_.md#result)
* [ResultFactory](_result_.md#resultfactory)
* [ResultTag](_result_.md#resulttag)

### Variables

* [ERRTAG](_result_.md#const-errtag)
* [OKTAG](_result_.md#const-oktag)
* [RESULTTAG](_result_.md#const-resulttag)
* [expect](_result_.md#const-expect)
* [filter](_result_.md#const-filter)
* [filterOr](_result_.md#const-filteror)
* [haserrtag](_result_.md#const-haserrtag)
* [hasoktag](_result_.md#const-hasoktag)
* [hasresulttag](_result_.md#const-hasresulttag)
* [isErr](_result_.md#const-iserr)
* [isOk](_result_.md#const-isok)
* [isResult](_result_.md#const-isresult)
* [map](_result_.md#const-map)
* [mapOr](_result_.md#const-mapor)
* [mapOrElse](_result_.md#const-maporelse)
* [unexpect](_result_.md#const-unexpect)
* [unwrap](_result_.md#const-unwrap)
* [unwrapOr](_result_.md#const-unwrapor)
* [unwrapOrElse](_result_.md#const-unwraporelse)

### Functions

* [err](_result_.md#const-err)
* [ok](_result_.md#const-ok)
* [result](_result_.md#const-result)

## Type aliases

###  ErrFactory

Ƭ **ErrFactory**: *function*

*Defined in [result.ts:58](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L58)*

#### Type declaration:

▸ (`message`: string | Error): *[Err](../interfaces/_result_.err.md)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error |

___

###  Errtag

Ƭ **Errtag**: *typeof ERRTAG*

*Defined in [result.ts:28](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L28)*

___

###  OkFactory

Ƭ **OkFactory**: *function*

*Defined in [result.ts:62](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L62)*

#### Type declaration:

▸ ‹**T**›(`arg`: T): *[Ok](../interfaces/_result_.ok.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

___

###  Oktag

Ƭ **Oktag**: *typeof OKTAG*

*Defined in [result.ts:33](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L33)*

___

###  Result

Ƭ **Result**: *[Ok](../interfaces/_result_.ok.md)‹T› | [Err](../interfaces/_result_.err.md)*

*Defined in [result.ts:53](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L53)*

___

###  ResultFactory

Ƭ **ResultFactory**: *function*

*Defined in [result.ts:66](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L66)*

#### Type declaration:

▸ ‹**T**›(`arg`: T): *[Result](_result_.md#result)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

___

###  ResultTag

Ƭ **ResultTag**: *[Errtag](_result_.md#errtag) | [Oktag](_result_.md#oktag)*

*Defined in [result.ts:38](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L38)*

## Variables

### `Const` ERRTAG

• **ERRTAG**: *"err"* = "err"

*Defined in [result.ts:21](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L21)*

___

### `Const` OKTAG

• **OKTAG**: *"ok"* = "ok"

*Defined in [result.ts:22](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L22)*

___

### `Const` RESULTTAG

• **RESULTTAG**: *"result"* = "result"

*Defined in [result.ts:23](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L23)*

___

### `Const` expect

• **expect**: *[Expect](_assertables_.md#expect)‹[Result](_result_.md#result)‹unknown››* = createExpect<Result>(isOk)

*Defined in [result.ts:123](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L123)*

___

### `Const` filter

• **filter**: *(Anonymous function)* = createFilter<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>,
  () => err("filter error") as any
)

*Defined in [result.ts:136](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L136)*

___

### `Const` filterOr

• **filterOr**: *(Anonymous function)* = createFilterOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
)

*Defined in [result.ts:145](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L145)*

___

### `Const` haserrtag

• **haserrtag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "err"››* = isTaggedWith(ERRTAG)

*Defined in [result.ts:73](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L73)*

___

### `Const` hasoktag

• **hasoktag**: *[Typeguard](_typeguards_.md#typeguard)‹[Tagged](_tagged_type_.md#tagged)‹unknown, "ok"››* = isTaggedWith(OKTAG)

*Defined in [result.ts:72](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L72)*

___

### `Const` hasresulttag

• **hasresulttag**: *[Typeguard](_typeguards_.md#typeguard)‹unknown›* = tg.anyof(hasoktag, haserrtag)

*Defined in [result.ts:74](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L74)*

___

### `Const` isErr

• **isErr**: *[Typeguard](_typeguards_.md#typeguard)‹[Err](../interfaces/_result_.err.md)‹››* = tg.combine(isTagged, haserrtag) as tg.Typeguard<Err>

*Defined in [result.ts:85](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L85)*

___

### `Const` isOk

• **isOk**: *[Typeguard](_typeguards_.md#typeguard)‹[Ok](../interfaces/_result_.ok.md)‹unknown››* = tg.combine(isTagged, hasoktag) as tg.Typeguard<Ok>

*Defined in [result.ts:89](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L89)*

___

### `Const` isResult

• **isResult**: *[Typeguard](_typeguards_.md#typeguard)‹[Result](_result_.md#result)‹unknown››* = tg.combine(isTagged, hasresulttag) as tg.Typeguard<
  Result
>

*Defined in [result.ts:79](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L79)*

___

### `Const` map

• **map**: *(Anonymous function)* = createMap<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
)

*Defined in [result.ts:157](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L157)*

___

### `Const` mapOr

• **mapOr**: *(Anonymous function)* = createMapOr<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
)

*Defined in [result.ts:165](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L165)*

___

### `Const` mapOrElse

• **mapOrElse**: *(Anonymous function)* = createMapOrElse<Result, ResultTag>(
  isOk,
  result as TaggedFactory<ResultTag>
)

*Defined in [result.ts:173](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L173)*

___

### `Const` unexpect

• **unexpect**: *[Expect](_assertables_.md#expect)‹[Result](_result_.md#result)‹unknown››* = createExpect<Result>(isErr)

*Defined in [result.ts:127](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L127)*

___

### `Const` unwrap

• **unwrap**: *(Anonymous function)* = createUnwrap<ResultTag>(isOk, "cannot unwrapp Err")

*Defined in [result.ts:185](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L185)*

___

### `Const` unwrapOr

• **unwrapOr**: *(Anonymous function)* = createUnwrapOr<ResultTag>(isOk)

*Defined in [result.ts:189](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L189)*

___

### `Const` unwrapOrElse

• **unwrapOrElse**: *(Anonymous function)* = createUnwrapOrElse<ResultTag>(isOk)

*Defined in [result.ts:193](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L193)*

## Functions

### `Const` err

▸ **err**(`message`: string | Error): *[Err](../interfaces/_result_.err.md)*

*Defined in [result.ts:98](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error |

**Returns:** *[Err](../interfaces/_result_.err.md)*

___

### `Const` ok

▸ **ok**‹**T**›(`value`: T): *[Ok](../interfaces/_result_.ok.md)‹T›*

*Defined in [result.ts:104](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L104)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Ok](../interfaces/_result_.ok.md)‹T›*

___

### `Const` result

▸ **result**‹**T**›(`value`: T): *[Result](_result_.md#result)‹T›*

*Defined in [result.ts:113](https://github.com/OctoD/tiinvo/blob/9536b4d/src/result.ts#L113)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Result](_result_.md#result)‹T›*
