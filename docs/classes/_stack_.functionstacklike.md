[tiinvo](../README.md) › ["Stack"](../modules/_stack_.md) › [FunctionStackLike](_stack_.functionstacklike.md)

# Class: FunctionStackLike <**Fn**>

## Type parameters

▪ **Fn**: *function*

## Hierarchy

  ↳ [StackLike](_stack_.stacklike.md)‹Fn›

  ↳ **FunctionStackLike**

## Index

### Constructors

* [constructor](_stack_.functionstacklike.md#constructor)

### Properties

* [elements](_stack_.functionstacklike.md#protected-elements)

### Methods

* [exec](_stack_.functionstacklike.md#exec)
* [execAsync](_stack_.functionstacklike.md#execasync)
* [isEmpty](_stack_.functionstacklike.md#isempty)
* [map](_stack_.functionstacklike.md#map)
* [pop](_stack_.functionstacklike.md#pop)
* [push](_stack_.functionstacklike.md#push)
* [queue](_stack_.functionstacklike.md#queue)
* [size](_stack_.functionstacklike.md#size)
* [top](_stack_.functionstacklike.md#top)
* [value](_stack_.functionstacklike.md#value)

## Constructors

###  constructor

\+ **new FunctionStackLike**(`elements`: Fn[]): *[FunctionStackLike](_stack_.functionstacklike.md)*

*Inherited from [Stackable](_stack_.stackable.md).[constructor](_stack_.stackable.md#constructor)*

*Defined in [Stack.ts:6](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`elements` | Fn[] |

**Returns:** *[FunctionStackLike](_stack_.functionstacklike.md)*

## Properties

### `Protected` elements

• **elements**: *Fn[]*

*Inherited from [Stackable](_stack_.stackable.md).[elements](_stack_.stackable.md#protected-elements)*

*Defined in [Stack.ts:7](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L7)*

## Methods

###  exec

▸ **exec**(`args`: ArgsOf‹Fn›): *[Result](../modules/_result_.md#result)‹[Stack](../modules/_stack_.md#stack)‹ReturnType‹Fn››, Error›*

*Defined in [Stack.ts:409](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L409)*

Execs a synchronous function stack with a given array of arguments. It returns `Err` and stops execution if a function invokation fails, otherwise returns `Ok<Queue<ReturnType<Fn>>>`;

```ts
// note, this is not a real life example
const q = FunctionStack(
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

**`memberof`** FunctionStack

**Parameters:**

Name | Type |
------ | ------ |
`args` | ArgsOf‹Fn› |

**Returns:** *[Result](../modules/_result_.md#result)‹[Stack](../modules/_stack_.md#stack)‹ReturnType‹Fn››, Error›*

___

###  execAsync

▸ **execAsync**(`args`: ArgsOf‹Fn›): *Promise‹[Result](../modules/_result_.md#result)‹[Stack](../modules/_stack_.md#stack)‹ReturnType‹Fn››, Error››*

*Defined in [Stack.ts:465](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L465)*

Execs an asynchronous functions stack with a given array of arguments. It returns `Promise<Err>` and stops execution if a function invokation fails, otherwise returns `Promise<Ok<Queue<ReturnType<Fn>>>>`;

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

const stack = FunctionStack(
   [
       (input: Int32Array) => backgroundWork('workers/binary-encoded.js', input),
       (input: Int32Array) => backgroundWork('workers/base64-encoded.js', input),
   ]
);

stack.execAsync('<imagine this is a huge>')
```

**`memberof`** FunctionStack

**Parameters:**

Name | Type |
------ | ------ |
`args` | ArgsOf‹Fn› |

**Returns:** *Promise‹[Result](../modules/_result_.md#result)‹[Stack](../modules/_stack_.md#stack)‹ReturnType‹Fn››, Error››*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Stackable](_stack_.stackable.md).[isEmpty](_stack_.stackable.md#isempty)*

*Defined in [Stack.ts:22](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L22)*

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

▸ **map**<**Fn**>(`fn`: Fn): *[StackLike](_stack_.stacklike.md)‹ReturnType‹Fn››*

*Inherited from [StackLike](_stack_.stacklike.md).[map](_stack_.stacklike.md#map)*

*Overrides [Stackable](_stack_.stackable.md).[map](_stack_.stackable.md#abstract-map)*

*Defined in [Stack.ts:183](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L183)*

Maps a `Stack<T>` to a `Stack<U>` applying a function `Fn` to every stacked element.

```ts
Stack([1,2,3]).map(arg => arg * 2) // Stack([2, 4, 6])
```

**`template`** Fn

**`memberof`** StackLike

**Type parameters:**

▪ **Fn**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *[StackLike](_stack_.stacklike.md)‹ReturnType‹Fn››*

___

###  pop

▸ **pop**(): *[Option](../modules/_option_.md#option)‹Fn›*

*Inherited from [StackLike](_stack_.stacklike.md).[pop](_stack_.stacklike.md#pop)*

*Defined in [Stack.ts:202](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L202)*

Pops latest pushed element to the Stack, returning an `Option<T>` if the stack is not empty or a `None` if the stack is empty.

```ts
const s = Stack([1,2,3]);
s.pop() // Option(3)
s.pop() // Option(2)
s.pop() // Option(1)
s.pop() // None()
```

**`memberof`** StackLike

**Returns:** *[Option](../modules/_option_.md#option)‹Fn›*

___

###  push

▸ **push**(`fn`: Fn): *this*

*Overrides [StackLike](_stack_.stacklike.md).[push](_stack_.stacklike.md#push)*

*Defined in [Stack.ts:500](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L500)*

Pushes an element to the Stack, returning `Stacklike<T>`

```ts
const s = Stack();

s.push(1); // Stack([1])
s.push(2); // Stack([1, 2])
s.push(3); // Stack([1, 2, 3])
```

**`memberof`** StackLike

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *this*

___

###  queue

▸ **queue**(): *[QueueLike](_stack_.queuelike.md)‹Fn›*

*Inherited from [StackLike](_stack_.stacklike.md).[queue](_stack_.stacklike.md#queue)*

*Defined in [Stack.ts:236](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L236)*

Converts a `StackLike<T>` to a `QueueLike<T>`

```ts
Stack(['hello']).queue() // Queue(['hello'])
```

**`memberof`** StackLike

**Returns:** *[QueueLike](_stack_.queuelike.md)‹Fn›*

___

###  size

▸ **size**(): *number*

*Inherited from [Stackable](_stack_.stackable.md).[size](_stack_.stackable.md#size)*

*Defined in [Stack.ts:53](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L53)*

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

###  top

▸ **top**(): *[Option](../modules/_option_.md#option)‹Fn›*

*Inherited from [StackLike](_stack_.stacklike.md).[top](_stack_.stacklike.md#top)*

*Overrides [Stackable](_stack_.stackable.md).[top](_stack_.stackable.md#abstract-top)*

*Defined in [Stack.ts:253](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L253)*

Returns latests pushed element as an `Option<T>` if the Stack is not empty, otherwise returns `None`

```ts
Stack([1,2,3]).top() // Option(3)
Stack([1,2]).top() // Option(2)
Stack([1]).top() // Option(1)
Stack().top() // None()
```

**`memberof`** StackLike

**Returns:** *[Option](../modules/_option_.md#option)‹Fn›*

___

###  value

▸ **value**(): *Fn[]*

*Inherited from [Stackable](_stack_.stackable.md).[value](_stack_.stackable.md#value)*

*Defined in [Stack.ts:77](https://github.com/OctoD/tiinvo/blob/32d45ae/src/Stack.ts#L77)*

Returns added elements

**`memberof`** Stackable

**Returns:** *Fn[]*
