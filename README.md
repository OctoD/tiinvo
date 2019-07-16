tiinvo
=======

Handling possible errors or values in a functional way.

Heavily inspired by rust [std::option](https://doc.rust-lang.org/std/option/index.html) and [std::result](https://doc.rust-lang.org/std/result/enum.Result.html)

- [tiinvo](#somejs)
- [Install](#Install)
- [Usage](#Usage)
  - [Option](#Option)
    - [Option methods](#Option-methods)
      - [and](#and)
      - [andThen](#andThen)
      - [expect](#expect)
      - [filter](#filter)
      - [flattern](#flattern)
      - [isNone](#isNone)
      - [isSome](#isSome)
      - [map](#map)
      - [mapOr](#mapOr)
      - [mapOrElse](#mapOrElse)
      - [okOr](#okOr)
      - [okOrElse](#okOrElse)
      - [or](#or)
      - [orElse](#orElse)
      - [transpose](#transpose)
      - [xor](#xor)
      - [unwrap](#unwrap)
      - [unwrapOr](#unwrapOr)
  - [Result](#Result)
    - [Result methods](#Result-methods)
      - [and](#and-1)
      - [andThen](#andThen-1)
      - [err](#err)
      - [expect](#expect-1)
      - [expectErr](#expectErr)
      - [isError](#isError)
      - [isOk](#isOk)
      - [map](#map-1)
      - [mapOrElse](#mapOrElse-1)
      - [ok](#ok)
      - [or](#or-1)
      - [orElse](#orElse-1)
      - [unwrap](#unwrap-1)
      - [unwrapErr](#unwrapErr)
      - [unwrapOr](#unwrapOr-1)
      - [unwrapOrElse](#unwrapOrElse)
  - [TryCatch](#TryCatch)
- [Contributing](#Contributing)
- [Licence](#Licence)

# Install

```bash
# npm
npm i tiinvo

# yarn
yarn add tiinvo
```

# Usage

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

### Option methods

#### and

Returns `None` if the option is `None`, otherwise returns `optb`

```ts
import { Option } from 'tiinvo';

Option(10).and(Option(20)).isSome() // true
Option(null).and(Option(20)).isSome() // false
```

#### andThen

Returns `callback` result if `OptionLike<T>` is `Some`, otherwise returns `None`

```ts
import { Option } from 'tiinvo';

Option(10).andThen(value => Option(value * 2)) // Option(20)
None().andThen(value => Option(value * 2)) // None()
```

#### expect

Throws if the value is a `None` with a custom error message provided by msg.

```ts
import { Option } from 'tiinvo';

Option(1).expect('ok') // Option(1)
Option(null).expect('myerror') // throws ReferenceError('myerror')
```

#### filter

Returns the `Option` if it's value passes the `predicate` function. Otherwise returns None

```ts
Option(1).filter(a => a > 0).isSome() // true
Option(1).filter(a => a > 10).isSome() // false
```

#### flattern

Converts from `Option<Option<T>>` to `Option<T>`

```ts
Option(Some(100)).flattern() // Some(100)
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

#### okOr

Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err)`.

```ts
Some(100).okOr(Err('foo')) // Ok(100)
None().okOr(Err('foo')) // Err('foo')
```

#### okOrElse

Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.

```ts
Some(100).okOrElse(() => Err("foo")); // Ok(100)
None().okOrElse(() => Err("foo")); // Err('foo)
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

#### transpose

Transposes an `Option` of a `Result` into a `Result` of an `Option`.

```ts
Option(100).transpose() // Ok(Some(100))
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

`Result<T, E>` is the type used for returning and propagating errors. 

It is an enum with the variants, `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value.

```ts
import { Ok, Err } from 'tiinvo';

Ok(200)
Err('this is an error')
```

### Result methods

#### and

Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.

```ts
Ok(10).and(Ok(20)) // Ok(20)
Err('meh').and(Ok(30)) // Err('meh')
```

#### andThen

Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.

```ts
Ok(20).andThen(a => a * 2) // Ok(40)
Err('aaa').andThen(a => a * 2) // Err('aaa')
```

#### err

Converts from `Result<T, E>` to `OptionLike<E>`.

```ts
Err('foo').err() // OptionLike(new Error('foo'))
```

#### expect

Unwraps a result, yielding the content of an `Ok`.

```ts
Ok(10).expect('does not explode') // 10
Err('argh').expect('will explode') // throws Error('will explode')
```

#### expectErr

Unwraps a result, yielding the content of an `Err`.

```ts
Ok(10).expectErr('explosions?') // throws Error('explosions?')
Err('🦄').expectErr('explosions?') // returns Error('🦄')
```

#### isError

Returns true if the result is `Error`.

```ts
Ok(10).isError() // false
Err('aaa').isError() // true
```

#### isOk

Returns true if the result is `Ok`.

```ts
Ok(10).isOk() // true
Err('aaa').isOk() // false
```

#### map

Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained `Ok` value, leaving an `Err` value untouched.

This function can be used to compose the results of two functions.

```ts
Ok('asd').map(a => a.length) // Ok
```

#### mapOrElse

Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value. 

This function can be used to unpack a successful result while handling an error.

```ts
Ok('asd').mapOrElse(a => a.repeat(2), b => b.message) // 'asdasd'
Err('ohmybad').mapOrElse(a => a.repeat(2), b => b.message) // 'ohmybad'
```

#### ok

Converts from Result<T, E> to Option<T>.

```ts
Ok(10).ok() // OptionLike(10)
Err('ahrrrrr').ok() // None()
```

#### or

Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.

```ts
Ok(10).or(Ok(20)) // Ok(10)
Err('').or(Ok(20)) // Ok(20)
```

#### orElse

Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.

This function can be used for control flow based on result values.

```ts
Ok('unicorn!').orElse(a => a.message) // Ok('unicorn!')
Err('darn!').orElse(a => a.message) // Ok('darn!')
```

#### unwrap

Returns wrapped value or throws an `Error`

Throws if the value is not an `Ok`.

```ts
Ok(10).unwrap() // 10
Err('err').unwrap() // throws a ReferenceError
```

#### unwrapErr

Unwraps a result, yielding the content of an `Err`. 

Throws if the value is not an `Err`.

```ts
Ok(10).unwrap() // throws a ReferenceError
Err('err').unwrap() // Error('err')
```

#### unwrapOr

Unwraps a result, yielding the content of an `Ok`. Else, it returns `optb`.

```ts
Ok(10).unwrapOr(20) // 10
Err('foo').unwrapOr(30) // 30
```

#### unwrapOrElse

Unwraps a result, yielding the content of an `Ok`. If the value is an `Err` then it calls op with its value.

```ts
Ok('pizza').unwrapOrElse(err => err.message) // 'pizza'
Err('pizza with ananas').unwrapOrElse(err => err.message) // 'pizza with ananas'
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

# Contributing

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
