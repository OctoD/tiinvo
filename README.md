<div align="center">
  <img src="https://raw.githubusercontent.com/OctoD/tiinvo/master/banner-readme.png" height="160"/>
</div>

tiinvo
=======

A lib of types and utilities for your TypeScript and JavaScript projects

[docs](https://tiinvo.vercel.app/docs)

- [tiinvo](#tiinvo)
- [Install](#install)
- [Usage](#usage)
  - [data types](#data-types)
  - [predicate](#predicate)
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

## data types

tiinvo is a functional data types library. 

It has several data types like `option`, `maybe`, `result` and `either`.

Option is used for values that can be possibly null or undefined.

Maybe is used for values that can possibly has a truthy or falsy logical value.

Result is used to describe if a function return value is an error or is ok (safe) value.

Either is used to represents a value of one of two possible types (a disjoint union).

It provides also utilities functions like `pipe` and `pipeasync` for tacit programming,
`num`, `str`, `obj` functions, `predicate` functions and more.

## predicate

tiinvo comes with a bunch of predicate utilities

```ts
import * as n from 'tiinvo/num';
import * as p from 'tiinvo/predicate';

// between 1 and 9
const inrange = p.and(n.gt(0), n.lt(10))
const outofrange = p.invert(inrange);

console.log(inrange(2)) // true
console.log(inrange(0)) // false
console.log(outofrange(0)) // true
console.log(outofrange(2)) // false
```

## typeguards

This library also makes complex typeguards building very easy.

Each type module comes with a type `guard` function (or in some cases a `guardOf<a>` function).

You are free to combine this functions to typecheck every value you want.

```ts
import * as obj from 'tiinvo/obj';
import * as str from 'tiinvo/str';
import * as num from 'tiinvo/num';
import * as o from 'tiinvo/option';
import * as array from 'tiinvo/array';

export type UserArray = User[];

export interface User {
  age: number;
  email: string;
  firstname: string;
  lastname: string;
  nickname?: string;
}

export const isUser = obj.guardOf<User>({
  age: num.guard,
  email: str.guard,
  firstname: str.guard,
  lastname: str.guard,
  nickname: o.guardOf(str.guard),
});

export const isUserArray = array.guardOf(isUser);

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
