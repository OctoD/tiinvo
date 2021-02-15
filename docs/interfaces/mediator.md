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

Defined in: [mediator.ts:6](https://github.com/OctoD/tiinvo/blob/e894ea5/src/mediator.ts#L6)

___

### subscribe

• **subscribe**: <Fn\>(`topic`: *string*, `fn`: Fn) => [*PushSub*](pushsub.md)<Fn\>

Defined in: [mediator.ts:7](https://github.com/OctoD/tiinvo/blob/e894ea5/src/mediator.ts#L7)

___

### unsubscribe

• **unsubscribe**: (`channel`: *string*) => *void*

Defined in: [mediator.ts:8](https://github.com/OctoD/tiinvo/blob/e894ea5/src/mediator.ts#L8)
