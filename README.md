some.js
=======

Handling possible errors or values in a functional way.

Heavily inspired by rust [std::option](https://doc.rust-lang.org/std/option/index.html) and [std::result](https://doc.rust-lang.org/std/result/enum.Result.html)

- [some.js](#somejs)
- [Install](#Install)
- [Usage](#Usage)
  - [Option](#Option)
    - [Option methods](#Option-methods)
      - [and](#and)
      - [andThen](#andThen)
      - [expect](#expect)
      - [filter](#filter)
      - [isNone](#isNone)
      - [isSome](#isSome)
      - [map](#map)
      - [mapOr](#mapOr)
      - [mapOrElse](#mapOrElse)
      - [or](#or)
      - [orElse](#orElse)
      - [xor](#xor)
      - [unwrap](#unwrap)
      - [unwrapOr](#unwrapOr)
  - [Result](#Result)
- [Contributing](#Contributing)
- [Licence](#Licence)

# Install

```bash
# npm
npm i some.js

# yarn
yarn add some.js
```

# Usage

## Option

Type `Option` represents an optional value: every `Option` is either `Some` and contains a value, or `None`, and does not.

```ts
import { Option, Some, None } from 'some.js';

Some('foo'); // this is some
None() // this is none

Some('foo').and(Some('bar')).and(Some('baz')).unwrap() // 'baz'
Some('foo').and(None()).and(Some('baz')).isSome() // false
Option(null).isSome() // false
Option(100).isSome() // true
```

By default, both `null`, `NaN` and `undefined` are considered `None` types.

### Option methods

#### and

Returns `None` if the option is `None`, otherwise returns `optb`

```ts
import { Option } from 'some.js';

Option(10).and(Option(20)).isSome() // true
Option(null).and(Option(20)).isSome() // false
```

#### andThen

Returns `callback` result if `OptionLike<T>` is `Some`, otherwise returns `None`

```ts
import { Option } from 'some.js';

Option(10).andThen(value => Option(value * 2)) // Option(20)
None().andThen(value => Option(value * 2)) // None()
```

#### expect

Throws if the value is a `None` with a custom error message provided by msg.

```ts
import { Option } from 'some.js';

Option(1).expect('ok') // Option(1)
Option(null).expect('myerror') // throws ReferenceError('myerror')
```

#### filter

Returns the `Option` if it's value passes the `predicate` function. Otherwise returns None

```ts
Option(1).filter(a => a > 0).isSome() // true
Option(1).filter(a => a > 10).isSome() // false
```

#### isNone

Returns if has not a value

```ts
None().isNone() // true
None().isSome() // false
```

#### isSome

Returns if has a value

```ts
Some().isSome() // true
Some().isNone() // false
```

#### map

Maps an `OptionLike<T>` to `OptionLike<U>` by applying a function to a contained value.

```ts
Option('foobar').map(val => val.length) // Option(6)
```

#### mapOr

Applies a function to the contained value (if any), or returns the provided default (if not).

```ts
Option('foobar').mapOr('abc', arg => arg.length) // Option(6)
None().mapOr('abc', arg => arg.length) // Option('abc')
```

#### mapOrElse

Applies a function to the contained value (if any), or computes a default (if not).

```ts
Option('helloworld').mapOrElse(() => 0, arg => arg.length) // 10
None().mapOrElse(() => 1000, arg => arg.length) // 1000
```

#### or

Returns the option if it contains a value, otherwise returns `optb`

```ts
None().or(Some(100)) // Some(100)
Some(10).or(Some(100)) // Some(10)
```

#### orElse

Returns the option if it contains a value, otherwise calls `f` and returns the result.

```ts
Some(10).orElse(() => 1000) // Some(10)
None().orElse(() => 1000) // Some(1000)
```

#### xor

Returns Some if exactly one of self, optb is Some, otherwise returns None.

```ts
Some(10).xor(Some(10)) // None()
Some(10).xor(Some(11)) // Some(10)
None().xor(Some(11)) // Some(11)
None().xor(None()) // None()
```

#### unwrap

Returns wrapped value or throws if is None

```ts
Some(10).unwrap() // 10
None().unwrap() // throw ReferenceError
```

#### unwrapOr

Returns the contained value or a default.

```ts
None().unwrapOr(10) // 10
Some(20).unwrapOr(10) // 20
```

## Result

# Contributing

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
