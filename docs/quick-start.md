## Installing tiinvo

To install tiinvo 

```bash
yarn add tiinvo
```

or if you use npm

```bash
npm i tiinvo
```

if you are using deno just import it

```ts
import { } from 'https://cdn.skypack.dev/tiinvo?dts'
```

## Library contents

This library contains several data types and functions.

### Data types

These data types are useful for handling a more secure and clean code.

* [Either](data-types/either.md) handles the possibility of having two different types and values.
* [Maybe](data-types/maybe.md) helps with value truthiness
* [Option](data-types/option.md) handles `null` and `undefined` without pains
* [Result](data-types/result.md) handles `Error`s

### Primitive functions

This functions are ideal to work with the [pipe](pipes.md) function

* [array](primitives/array.md)
* [object](primitives/obj.md) 
* [number](primitives/num.md)
* [string](primitives/str.md)

### Utility functions

Functions for everyday programming.

* [conditionals](conditionals.md) are functions to deal *branching* and *switch* cases functionally
* [pipes](pipes.md) concatenates *sync* or *async* functions
* [predicates](predicates.md) are made perform checks
* [typeguards](typeguards.md) use them to ensure that some values are of an exact type
* [utility functions](utility.md)
