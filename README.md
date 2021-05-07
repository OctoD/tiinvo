<div align="center">
  <img src="https://raw.githubusercontent.com/OctoD/tiinvo/master/banner-readme.png" height="160"/>
</div>

tiinvo
=======

[![Build Status](https://travis-ci.org/OctoD/tiinvo.svg?branch=master)](https://travis-ci.org/OctoD/tiinvo)
[![Test Coverage](https://codecov.io/gh/octod/tiinvo/branch/master/graph/badge.svg)](https://codecov.io/gh/octod/tiinvo/branch/master)
[![Bundle weight](https://badgen.net/bundlephobia/minzip/tiinvo)](https://bundlephobia.com/result?p=tiinvo)


Lot of functions for tacit programming and functional types for TypeScript and JavaScript.

- [tiinvo](#tiinvo)
- [Install](#install)
- [Usage](#usage)
  - [data types](#data-types)
  - [predicates](#predicates)
  - [typeguards](#typeguards)
  - [utilities](#utilities)
  - [array functions](#array-functions)
  - [primitives functions](#primitives-functions)
- [Docs](#docs)
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

It has several data types like `Option`, `Maybe`, `Result` and `Either`, each one is a `Tagged Type`.

Option is used for values that can be possibly null or undefined.

Maybe is used for values that can possibly has a truthy or falsy logical value.

Result is used to describe if a function return value is an error or is ok (safe) value.

Either is used to represents a value of one of two possible types (a disjoint union).

It provides also utilities functions like `pipe` and `pipeasync` for tacit programming,
`num`, `str`, `obj` functions, `predicates` functions and more.

## predicates

tiinvo comes with a bunch of predicate utilities

```ts
import { predicate } from 'tiinvo';

const iseven = (arg: number) => arg % 2 === 0;
const makeislessthan = (check: number) => (arg: number) => arg < check;
const islessthan10 = makeislessthan(10);
const isodd  =  predicate.reverse(iseven);
const check1 =  predicate.fromvalue(1);
const check2 =  predicate.fromvalue(2);
const isevenandlessthan10 = predicate.and(iseven, islessthan10);
const isevenorlessthan10 = predicate.or(iseven, islessthan10);

check1(iseven)          // false
check1(isodd)           // true
check2(iseven)          // true
check2(isodd)           // false
isevenandlessthan10(6)  // true
isevenandlessthan10(5)  // false
isevenandlessthan10(12) // false
isevenorlessthan10(12)  // true
isevenorlessthan10(5)   // true
isevenorlessthan10(13)  // false
```

## typeguards

This library also makes complex typeguards building very easy.

```ts
import { isstring, isoptional, isnumber, isarrayof, implementing } from 'tiinvo';

export type UserArray = User[];

export interface User {
  age: number;
  email: string;
  firstname: string;
  lastname: string;
  nickname?: string;
}

export const isUser = implementing<User>({
  age: isnumber,
  email: isstring,
  firstname: isstring,
  lastname: isstring,
  nickname: isoptional(isstring),
});

export const isUserArray = isarrayof(isUser);

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

## utilities

tiinvo also has some other utilities functions

```ts
import { fallback, fi, isnumber, option, pipe } from 'tiinvo';

const numericoption = (arg: number): option.Option<number> => fi(isnumber(arg), option.option(arg), option.none());
const multiplyby2 = (arg: number) => arg * 2;
const unwraporelse = option.unwrapOrElse(fallback(0), fallback);
const getmultipliedby2 = pipe(numericoption, multiplyby2, unwraporelse);

getmultipliedby2('darn')      // 0
getmultipliedby2(new Date())  // 0
getmultipliedby2(5)           // 10
getmultipliedby2(15)          // 30
```

## array functions

tiinvo comes with some array functions, ideal for pipelines and for tacit programming.

```ts
import { array, pipe, num } from 'tiinvo';

const filterevendoubles = pipe(
  array.map(num.umultiply(2)),
  array.filter(num.iseven),
);

filterevendoubles([ 1, 2, 3, 2.5, 3.75 ]) // [2, 4, 6]
```

## primitives functions

tiinvo come with some everydays premade primitives functions. 

```ts
import { num, obj, str, pipe, predicate } from 'tiinvo';

interface User {
  firstname: string;
  lastname: string;
  birthdate: string;
}

const mapfirstname = obj.mapkey<User>('firstname');
const maplastname = obj.mapkey<User>('lastname');
const mapbirthdate = obj.mapkey<User>('birthdate');
const maptodate = (arg: string) => new Date(arg);
const mapdateyear = (date: Date) => date.getFullYear();

export const isadult = pipe(
  mapbirthdate,
  maptodate,
  mapdateyear,
  num.usubtract(new Date().getFullYear()),
  Math.abs,
  num.greaterequalthan(18),
);

export const isvalidname = pipe(
  str.trim,
  str.length,
  num.greaterequalthan(2),
);

export const isvalidfirstname = pipe(mapfirstname, isvalidname)
export const isvalidlastname = pipe(maplastname, isvalidname)
export const isvaliduser = predicate.and(isvalidfirstname, isvalidlastname, isadult);

const testuser1: User = { firstname: 'John', lastname: 'Connor', birthdate: `1983-11-14` };
const testuser2: User = { firstname: 'Lorem', lastname: 'Ipsum', birthdate: `2018-01-02` };
const testuser3: User = { firstname: 'foo', lastname: '', birthdate: `2020-04-05` };

isadult(testuser1) // true
isadult(testuser2) // false
isadult(testuser3) // false

isvaliduser(testuser1) // true
isvaliduser(testuser2) // false
isvaliduser(testuser3) // false

// etc...
```


# Docs

Documentation is located [here](./docs/README.md)

# Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. 
Create a new branch from `master` and open your PR.

Read the [contributing guidelines](./CONTRIBUTING.md)

# Licence

Read the [licence](./LICENCE)
