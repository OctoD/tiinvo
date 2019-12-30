<div align="center">
  <img src="./banner-readme.png" />
</div>

tiinvo
=======

[![Build Status](https://travis-ci.org/OctoD/tiinvo.svg?branch=master)](https://travis-ci.org/OctoD/tiinvo)
[![Test Coverage](https://codecov.io/gh/octod/tiinvo/branch/master/graph/badge.svg)](https://codecov.io/gh/octod/tiinvo/branch/master)
[![Bundle weight](https://badgen.net/bundlephobia/minzip/tiinvo)](https://bundlephobia.com/result?p=tiinvo)


Functional data structures for TypeScript and JavaScript.

- [tiinvo](#tiinvo)
- [Install](#install)
- [Usage](#usage)
  - [Docs](#docs)
  - [Graph](#graph)
  - [LinkedList](#linkedlist)
  - [Mediator](#mediator)
  - [Option](#option)
  - [Queue](#queue)
  - [Result](#result)
  - [Stack](#stack)
  - [TryCatch](#trycatch)
  - [Either](#either)
  - [Maybe](#maybe)
- [Contributing](#contributing)
- [Licence](#licence)

# Install

```bash
# npm
npm i tiinvo

# yarn
yarn add tiinvo
```

# Usage

## Docs

Documentation is located [here](./docs/README.md)

## Graph

Type `Graph` represents an abstract data type that is meant to implement the undirected graph and directed graph.

```ts
import { Graph, Vertex } from 'tiinvo';

const graph = Graph();
const v1 = Vertex('a');
const v2 = Vertex('b');
const v3 = Vertex('c');
const v4 = Vertex('d');

graph.connect(v1, v2);
graph.connect(v2, v3);
graph.connect(v3, v4);
graph.connect(v1, v4);

graph.neighbours(v1) // Option([Vertex('a'), Vertex('b'), Vertex('c')])
```

## LinkedList

Type `LinkedList` is a linear collection of data elements with each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence

```ts
import { LinkedList, Node } from 'tiinvo';

const list = LinkedList();

list
  .append(Node(1))
  .append(Node(2))
  .append(Node(3))

list.size() // 3
list.value() // [1, 2, 3]
list.forEach(
  node => 
    console.log(
      node.unwrap().value().unwrap()
    )
)
```

## Mediator

Type `Mediator` is the implementation of the mediator pattern. In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.

It uses a `FunctionQueue` for storing the subscribed callbacks, so it can publish in synch or async.

```ts
import { Mediator } from 'tiinvo';

const mediator = Mediator();
const channel = 'some channel';

mediator.subscribe(channel, (url: string) => fetch(url));
mediator.subscribe(channel, (url: string) => console.log(`Called url ${url}`));
mediator.subscribe(channel, (url: string) => console.log(`Url length: ${url.length}`));

mediator.publishAsync('https://google.com');
```

## Option

Type `Option` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

```ts
import { Option, Some, None } from 'tiinvo';

Some('foo'); // this is some
None() // this is none

Some('foo').and(Some('bar')).and(Some('baz')).unwrap() // 'baz'
Some('foo').and(None()).and(Some('baz')).isSome() // false
Option(null).isSome() // false
Option(100).isSome() // true
```

By default, both `null`, `NaN` and `undefined` are considered `None` types.

## Queue

Queue is a linear data structure in which addition or removal of element follows FIFO (first in, first out).

```ts
import { Queue } from 'tiinvo';

const q = Queue();

q.enqueue('foo');
q.enqueue('bar');
q.enqueue('baz');

q.length // 3

q.top() // 'foo'
```

`Queue` has also a subtype called `FunctionQueue`.

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

stack.execAsync('<imagine this is a huge>');

// this will exec first the 'workers/binary-encoded.js' worken, then 'workers/base64-encoded.js
```

## Result

`Result<T, E>` is the type used for returning and propagating errors. 

It is an enum with the variants, `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

```ts
import { Ok, Err } from 'tiinvo';

Ok(200)
Err('this is an error')
```

## Stack

Stack is a linear data structure in which addition or removal of element follows LIFO (last in, first out).

```ts
import { Stack } from 'tiinvo';

const s = Stack();

s.push(10);
s.push(20);
s.push(30);

s.length // 3

s.top() // 30
```

Like `Queue`, `Stack` has also a subtype called `FunctionStack`.

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

stack.execAsync('<imagine this is a huge>');

// this will exec first the 'workers/base64-encoded.js' worken, then 'workers/binary-encoded.js
```

## TryCatch

These functions handle try/catch.

```ts
import { TryCatch, TryCatchAsync } from 'tiinvo';

TryCatch(
  (a: number, b: number) => a + b,
  10,
  20,
) // returns Ok(30)

TryCatch(
  (a: number, b: number) => a + b + c,
  10,
  20,
) // returns Err('c is not defined')

TryCatchAsync(
  (url: string) => fetch(url).then(r => r.json()),
  'https://reqres.in/api/users?page=2'
) // returns Ok({ /* some json data here */ })

TryCatchAsync(
  (url: string) => fetch(url).then(r => r.document()),
  'https://reqres.in/api/users?page=2'
) // returns Err('r.document is not a function)
```

## Either

The `Either` type represents values with two possibilities: a value of type `Either` is either `Left` or `Right`.

```ts
import { Left, Right } from 'tiinvo';

function foo(arg: number): Left<boolean> | Right<boolean> {
  return arg % 2 === 0 ? Right(true) : Left(false);
}

foo(20).isRight() // true;
foo(15).isRight() // false;

foo(20).and(foo(15)).and(foo(50)).isRight() // false
foo(20).and(foo(8)).and(foo(50)).isRight() // true
```

## Maybe

The Maybe monad represents computations which might "go wrong" by not returning a value.

Every falsy value is considered as `Nothing`

```ts
import { Maybe } from 'tiinvo';

function foo() {
   return Math.floor(Math.random() * 1000) ? 'exists' : null
}

const value = Maybe(foo()) // could be both Just<string> or Nothing<string | null>

value
   .map(arg => arg % 2 === 0)
   .map(arg => arg ? 'even' : 'odd')
   .cata({
       Nothing: () => 'Not a number',
       Just: arg => `Value is ${arg}`
   })
```

# Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. 
Create a new branch from `master` and open your PR.

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
