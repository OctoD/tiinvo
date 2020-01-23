[tiinvo - v1.6.1](../README.md) › ["Stack"](../modules/_stack_.md) › [FunctionQueueLike](_stack_.functionqueuelike.md)

# Class: FunctionQueueLike <**Fn**>

## Type parameters

▪ **Fn**: *function*

## Hierarchy

  ↳ [QueueLike](_stack_.queuelike.md)‹Fn›

  ↳ **FunctionQueueLike**

## Index

### Constructors

* [constructor](_stack_.functionqueuelike.md#constructor)

### Properties

* [elements](_stack_.functionqueuelike.md#protected-elements)

### Methods

* [dequeue](_stack_.functionqueuelike.md#dequeue)
* [enqueue](_stack_.functionqueuelike.md#enqueue)
* [exec](_stack_.functionqueuelike.md#exec)
* [execAsync](_stack_.functionqueuelike.md#execasync)
* [isEmpty](_stack_.functionqueuelike.md#isempty)
* [map](_stack_.functionqueuelike.md#map)
* [size](_stack_.functionqueuelike.md#size)
* [stack](_stack_.functionqueuelike.md#stack)
* [top](_stack_.functionqueuelike.md#top)
* [value](_stack_.functionqueuelike.md#value)

## Constructors

###  constructor

\+ **new FunctionQueueLike**(`elements`: Fn[]): *[FunctionQueueLike](_stack_.functionqueuelike.md)*

*Inherited from [Stackable](_stack_.stackable.md).[constructor](_stack_.stackable.md#constructor)*

*Defined in [Stack.ts:6](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`elements` | Fn[] |

**Returns:** *[FunctionQueueLike](_stack_.functionqueuelike.md)*

## Properties

### `Protected` elements

• **elements**: *Fn[]*

*Inherited from [Stackable](_stack_.stackable.md).[elements](_stack_.stackable.md#protected-elements)*

*Defined in [Stack.ts:7](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L7)*

## Methods

###  dequeue

▸ **dequeue**(): *[Option](../modules/_option_.md#option)‹Fn›*

*Inherited from [QueueLike](_stack_.queuelike.md).[dequeue](_stack_.queuelike.md#dequeue)*

*Defined in [Stack.ts:98](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L98)*

Dequeues the oldest enqueued element, returning an `Option<T>` representing its value. If the queue is empty, a `None` will be returned

```ts
const q = Queue([1,2,3]);

q.dequeue() // Option(1);
q.dequeue() // Option(2);
q.dequeue() // Option(3);
q.dequeue() // None();
```

**`memberof`** QueueLike

**Returns:** *[Option](../modules/_option_.md#option)‹Fn›*

___

###  enqueue

▸ **enqueue**(`fn`: Fn): *this*

*Overrides [QueueLike](_stack_.queuelike.md).[enqueue](_stack_.queuelike.md#enqueue)*

*Defined in [Stack.ts:275](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L275)*

Enqueues an element `T`, returning current `Queuelike<T>`

```ts
Queue<number>()
 .enqueue(1)
 .enqueue(2)
 .enqueue(3)
```

**`memberof`** QueueLike

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *this*

___

###  exec

▸ **exec**(`args`: Fn extends function ? U : any[]): *[Result](../modules/_result_.md#result)‹[Queue](../modules/_stack_.md#queue)‹ReturnType‹Fn››, Error›*

*Defined in [Stack.ts:306](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L306)*

Execs a synchronous function queue with a given array of arguments. It returns `Err` and stops execution if a function invokation fails, otherwise returns `Ok<Queue<ReturnType<Fn>>>`;

```ts
// note, this is not a real life example
const q = FunctionQueue(
   [
     (url: string) => url.replace(/\s/g, '-'),
     (url: string) => url.length > 255 ? 'Url exceeds max length' : 'Url is ok',
   ]
);
q.exec('https://iamoctod.com/')
   .mapOrElse(
       error => false,
       queue => queue.value().map(console.log) || true,
   );
```

**`template`** Returns

**`memberof`** FunctionQueue

**Parameters:**

Name | Type |
------ | ------ |
`args` | Fn extends function ? U : any[] |

**Returns:** *[Result](../modules/_result_.md#result)‹[Queue](../modules/_stack_.md#queue)‹ReturnType‹Fn››, Error›*

___

###  execAsync

▸ **execAsync**(`args`: ArgsOf‹Fn›): *Promise‹[Result](../modules/_result_.md#result)‹[Queue](../modules/_stack_.md#queue)‹ReturnType‹Fn››, Error››*

*Defined in [Stack.ts:363](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L363)*

Execs an asynchronous function queue with a given array of arguments. It returns `Promise<Err>` and stops execution if a function invokation fails, otherwise returns `Promise<Ok<Queue<ReturnType<Fn>>>>`;

```ts
function backgroundWork(scriptPath: string, inputForCalculation: Int32Array) {
   return new Promise((resolve, reject) => {
       const worker = new Worker(scriptPath);

       worker.addEventListener('message', result => {
           resolve(result);
           worker.terminate();
       });

       worker.addEventListener('messageerror', result => {
           reject(result);
           worker.terminate();
       });

       worker.postMessage([
         inputForCalculation,
       ]);
   })
}

const queue = FunctionQueue(
   [
       (input: Int32Array) => backgroundWork('workers/binary-encoded.js', input),
       (input: Int32Array) => backgroundWork('workers/base64-encoded.js', input),
   ]
);

queue.execAsync('<imagine this is a huge>')
```

**`memberof`** FunctionQueue

**Parameters:**

Name | Type |
------ | ------ |
`args` | ArgsOf‹Fn› |

**Returns:** *Promise‹[Result](../modules/_result_.md#result)‹[Queue](../modules/_stack_.md#queue)‹ReturnType‹Fn››, Error››*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Stackable](_stack_.stackable.md).[isEmpty](_stack_.stackable.md#isempty)*

*Defined in [Stack.ts:22](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L22)*

Returns if is empty

```ts
Queue().isEmpty() // true
Queue([1,2]).isEmpty() // false
Stack().isEmpty() // true
Stack([1,2]).isEmpty() // false
```

**`memberof`** Stackable

**Returns:** *boolean*

___

###  map

▸ **map**<**Fn**>(`fn`: Fn): *[QueueLike](_stack_.queuelike.md)‹ReturnType‹Fn››*

*Inherited from [QueueLike](_stack_.queuelike.md).[map](_stack_.queuelike.md#map)*

*Overrides [Stackable](_stack_.stackable.md).[map](_stack_.stackable.md#abstract-map)*

*Defined in [Stack.ts:137](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L137)*

Maps a `Queue<T>` to a `Queue<U>` applying a function `Fn` to every enqueued element.

```ts
Queue([1,2,3]).map(arg => arg * 2) // Queue([2, 4, 6])
```

**`template`** Fn

**`memberof`** QueueLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[QueueLike](_stack_.queuelike.md)‹ReturnType‹Fn››*

___

###  size

▸ **size**(): *number*

*Inherited from [Stackable](_stack_.stackable.md).[size](_stack_.stackable.md#size)*

*Defined in [Stack.ts:53](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L53)*

Returns current size

```ts
Queue().size() // 0
Stack().size() // 0
Queue([1,2]).size() // 2
Stack([1,2,3]).size() // 3
```

**`memberof`** Stackable

**Returns:** *number*

___

###  stack

▸ **stack**(): *[StackLike](_stack_.stacklike.md)‹Fn›*

*Inherited from [QueueLike](_stack_.queuelike.md).[stack](_stack_.queuelike.md#stack)*

*Defined in [Stack.ts:152](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L152)*

Converts a `Queue<T>` to a `Stack<T>`

```ts
Queue([1]).stack() // Stack([1])
```

**`memberof`** QueueLike

**Returns:** *[StackLike](_stack_.stacklike.md)‹Fn›*

___

###  top

▸ **top**(): *[Option](../modules/_option_.md#option)‹Fn›*

*Inherited from [QueueLike](_stack_.queuelike.md).[top](_stack_.queuelike.md#top)*

*Overrides [Stackable](_stack_.stackable.md).[top](_stack_.stackable.md#abstract-top)*

*Defined in [Stack.ts:166](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L166)*

Returns oldest enqueued element `T` as an `Option<T>`. If the queue is empty, it returns `None`.

```ts
Queue([1,2,3]).top() // Option(1)
```

**`memberof`** QueueLike

**Returns:** *[Option](../modules/_option_.md#option)‹Fn›*

___

###  value

▸ **value**(): *Fn[]*

*Inherited from [Stackable](_stack_.stackable.md).[value](_stack_.stackable.md#value)*

*Defined in [Stack.ts:77](https://github.com/OctoD/tiinvo/blob/2f7d94f/src/Stack.ts#L77)*

Returns added elements

**`memberof`** Stackable

**Returns:** *Fn[]*
