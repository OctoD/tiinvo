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

Defined in: mediator.ts:6

___

### subscribe

• **subscribe**: <Fn\>(`topic`: *string*, `fn`: Fn) => [*PushSub*](pushsub.md)<Fn\>

Defined in: mediator.ts:7

___

### unsubscribe

• **unsubscribe**: (`channel`: *string*) => *void*

Defined in: mediator.ts:8
