<div align="center">
  <img src="https://raw.githubusercontent.com/OctoD/tiinvo/master/banner-readme.png" height="160"/>
</div>

tiinvo
=======

An opinionated lib of types and utilities for your TypeScript and JavaScript projects which aims to add missing functionalities to standard Js and replace other.

[docs](https://tiinvo.vercel.app/docs)

- [tiinvo](#tiinvo)
- [Install](#install)
- [Usage](#usage)
  - [data and native types](#data-and-native-types)
  - [typeguards](#typeguards)
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
import { } from 'https://cdn.skypack.dev/tiinvo?dts';
```

# Usage

## data and native types

tiinvo is a functional data types and utilities library. 

It has several data types like `Option`, `Result` and `Sequence`.

`Option` is used for values that can be possibly null or undefined.

`Result` is used to describe if a function return value is an error or is ok (safe) value.

It provides also utilities functions like `Pipe` for function composition (tacit programming),
`Bool`, `Num`, `Str`, `Obj` , `Fn`, `Predicate` functions and more.

## typeguards

This library also makes complex typeguards building very easy.

Each type module comes with a type `guard` function (or in some cases a `guardOf<a>` function).

You are free to combine this functions to typecheck every value you want.

```ts
import * as Arr from 'tiinvo/Arr';
import * as Num from 'tiinvo/Num';
import * as Obj from 'tiinvo/Obj';
import * as Option from 'tiinvo/Option';
import * as Str from 'tiinvo/Str';

export type UserArray = User[];

export interface User {
  age: number;
  email: string;
  firstname: string;
  lastname: string;
  nickname?: string;
}

export const isUser = Obj.guardOf<User>({
  age: Num.guard,
  email: Str.guard,
  firstname: Str.guard,
  lastname: Str.guard,
  nickname: Option.guardOf(Str.guard),
});

export const isUserArray = Arr.guardOf(isUser);

const user000: User = {
  age: 22,
  email: 'hello.world@foo.bar',
  firstname: 'Hello',
  lastname: 'World',
}

const user001: User = {
  age: 54,
  email: 'john.doe@domain.com',
  firstname: 'John',
  lastname: 'Doe',
  nickname: 'BionicPizza',
}

isUser(user000)                 // true, user000 is User
isUser(user001)                 // true, user001 is User
isUser(1000000)                 // false
isUserArray([user000, user001]) // true
isUserArray(['pizza', user001]) // false
```

# Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. 
Create a new branch from `master` and open your PR.

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
