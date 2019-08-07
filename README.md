<div align="center">
  <img src="./banner-readme.png" />
</div>

tiinvo
=======

[![Build Status](https://travis-ci.org/OctoD/tiinvo.svg?branch=master)](https://travis-ci.org/OctoD/tiinvo)
[![Test Coverage](https://codecov.io/gh/octod/tiinvo/branch/master/graph/badge.svg)](https://codecov.io/gh/octod/tiinvo/branch/master)


Handling possible errors or values in a functional way.

Heavily inspired by rust [std::option](https://doc.rust-lang.org/std/option/index.html) and [std::result](https://doc.rust-lang.org/std/result/enum.Result.html)

- [tiinvo](#tiinvo)
- [Install](#install)
- [Usage](#usage)
  - [Docs](#docs)
  - [Option](#option)
  - [Result](#result)
  - [TryCatch](#trycatch)
  - [Either](#either)
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

## Result

`Result<T, E>` is the type used for returning and propagating errors. 

It is an enum with the variants, `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

```ts
import { Ok, Err } from 'tiinvo';

Ok(200)
Err('this is an error')
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

# Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. Remember only to use the `dev` branch as a base.

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
