some.js
=======

Handling possible errors or values in a functional way.

Heavily inspired by rust [std::option](https://doc.rust-lang.org/std/option/index.html) and [std::result](https://doc.rust-lang.org/std/result/enum.Result.html)

- [some.js](#somejs)
- [Install](#Install)
- [Usage](#Usage)
  - [Option](#Option)
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
import { Some, None } from 'some.js';

Some('foo'); // this is some
None() // this is none

Some('foo').and(Some('bar')).and(Some('baz')).unwrap() // 'baz'
Some('foo').and(None()).and(Some('baz')).isSome() // false
```

By default, both `null`, `NaN` and `undefined` are considered `None` types.

## Result

# Contributing

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
