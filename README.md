<div align="center">
  <img src="https://raw.githubusercontent.com/OctoD/tiinvo/master/banner-readme.png" height="160"/>
</div>

tiinvo
=======

An opinionated lib of types and utilities for your TypeScript and JavaScript projects which aims to add missing functionalities to standard Js and replace other.

[docs](docs/modules.md)

- [tiinvo](#tiinvo)
- [Install](#install)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [Licence](#licence)

# Install

You can install it using npm

```bash
npm i tiinvo
```

Or with yarn

```bash
yarn add tiinvo
```

or if you are using Deno, you have to simply import it

```ts
import { Arr, Option, Result } from 'https://cdn.skypack.dev/tiinvo?dts';
```

# Features

This library is 

- Simple
- Intuitive
- Lightweight
- Pragmatic
- Safe
- Side-effect free and fully tree-shakeable
- Versatile
- Battle-tested (used in dozens of production projects)
- Well-documented (every type, function and function overload is documented properly)
- Well-maintained
- Well-tested

This library is ideal for both an imperative and declarative approach, since every function
is overloaded and can be used without the need to use curry (I love it for cooking, not for coding).

It normalizes several native JavaScript methods (like string, number and array).

# Usage

This library provides several new data types like 

- `DateRange` which is a reliable way to generate date ranges.
- `Option` which handles gracefully values which could be both null or undefined.
- `Predicate` are used to determine truthyness.
- `Range` is used to generate a numeric range.
- `Result` handles errors gracefully.
- `Sequence` is an immutable sequence of elements.
- `SortedSequence` is a sorted immutable sequence of elements.
- `Tuple` is a tuple.
- `TypedMap` is a typed immutable Map of elements.
- `TypedSequence` is a typed immutable sequence of elements.
  
wraps native types

- `Arr` handles all array methods, adding new ones.
- `BigInt` handles all bigint methods, adding new ones.
- `Bool` handles all boolean methods, adding new ones.
- `Fn` handles all function methods, adding new ones.
- `Num` handles all number methods, adding new ones.
- `Obj` handles all object methods, adding new ones.
- `Str` handles all string methods, adding new ones.

and adds utility functions

- `Assert` used to create assertions.
- `Catch` used to catch gracefully functions which could throw an error.
- `Pipe` concatenates many unary functions in one, great for function composition.

# Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

Pull requests are really welcome!

- Create a new branch from `main` 
- open your PR
- enjoy!

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
