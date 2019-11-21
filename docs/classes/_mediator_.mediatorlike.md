[tiinvo](../README.md) › ["Mediator"](../modules/_mediator_.md) › [MediatorLike](_mediator_.mediatorlike.md)

# Class: MediatorLike

## Hierarchy

* **MediatorLike**

## Index

### Properties

* [_channels](_mediator_.mediatorlike.md#protected-_channels)

### Methods

* [publish](_mediator_.mediatorlike.md#publish)
* [publishAsync](_mediator_.mediatorlike.md#publishasync)
* [subscribe](_mediator_.mediatorlike.md#subscribe)

## Properties

### `Protected` _channels

• **_channels**: *[MediatorChannels](../interfaces/_mediator_.mediatorchannels.md)*

*Defined in [Mediator.ts:10](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L10)*

## Methods

###  publish

▸ **publish**(`channel`: string, ...`args`: any[]): *[Result](../modules/_result_.md#result)‹boolean, Error›*

*Defined in [Mediator.ts:26](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L26)*

Publishes a list of arguments `args` to all subscribed functions in a channel returning a `Result<boolean, Error>`

If the channel has not been created with the `subscribe` method, it will return an `Err`.

```ts
Mediator().subscribe(a => console.log(a)).publish(10) // logs 10
```

**`memberof`** MediatorLike

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`...args` | any[] |

**Returns:** *[Result](../modules/_result_.md#result)‹boolean, Error›*

___

###  publishAsync

▸ **publishAsync**(`channel`: string, ...`args`: any[]): *Promise‹[Result](../modules/_result_.md#result)‹boolean, Error››*

*Defined in [Mediator.ts:57](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L57)*

Publishes a list of arguments `args` to all subscribed functions in a channel returnin a Promise<Result<boolean, Error>>.

The publishing is done asynchronously and every subscribed function is notified in the same order
it has been subscribed

If the channel has not been created with the `subscribe` method, it will return an `Promise<Err>`.

```ts
Mediator().subscribe(a => console.log(a)).publishAsync(10) // logs 10
```

**`memberof`** MediatorLike

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`...args` | any[] |

**Returns:** *Promise‹[Result](../modules/_result_.md#result)‹boolean, Error››*

___

###  subscribe

▸ **subscribe**(`channel`: string, `fn`: FnBase): *this*

*Defined in [Mediator.ts:86](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L86)*

Subscribes a function `fn` to a `channel` returning the `Mediator` itself.

```ts
Mediator().subscribe('foo', a => console.log(a));
```

**`memberof`** MediatorLike

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`fn` | FnBase |

**Returns:** *this*
