[tiinvo](../README.md) › ["Mediator"](_mediator_.md)

# External module: "Mediator"

## Index

### Classes

* [MediatorLike](../classes/_mediator_.mediatorlike.md)

### Interfaces

* [MediatorChannels](../interfaces/_mediator_.mediatorchannels.md)

### Type aliases

* [Mediator](_mediator_.md#mediator)

### Functions

* [Mediator](_mediator_.md#mediator)

## Type aliases

###  Mediator

Ƭ **Mediator**: *[MediatorLike](../classes/_mediator_.mediatorlike.md)*

*Defined in [Mediator.ts:95](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L95)*

## Functions

###  Mediator

▸ **Mediator**(): *[Mediator](undefined)*

*Defined in [Mediator.ts:109](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Mediator.ts#L109)*

Type `Mediator` is the implementation of the mediator pattern.

In software engineering, the mediator pattern defines an object that encapsulates
how a set of objects interact. This pattern is considered to be a behavioral pattern
due to the way it can alter the program's running behavior.

It uses a `FunctionQueue` for storing the subscribed callbacks, so it can publish in synch or async.

**`export`** 

**Returns:** *[Mediator](undefined)*
