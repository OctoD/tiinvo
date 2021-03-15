[tiinvo](../README.md) / Mediator

# Interface: Mediator

## Hierarchy

* **Mediator**

## Table of contents

### Properties

- [publish](mediator.md#publish)
- [subscribe](mediator.md#subscribe)
- [unsubscribe](mediator.md#unsubscribe)

## Properties

### publish

• **publish**: <T\>(`topic`: *string*, ...`args`: T) => *void*

Defined in: [src/mediator.ts:6](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mediator.ts#L6)

___

### subscribe

• **subscribe**: <Fn\>(`topic`: *string*, `fn`: Fn) => [*PushSub*](pushsub.md)<Fn\>

Defined in: [src/mediator.ts:7](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mediator.ts#L7)

___

### unsubscribe

• **unsubscribe**: (`channel`: *string*) => *void*

Defined in: [src/mediator.ts:8](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/mediator.ts#L8)
