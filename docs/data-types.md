tiinvo comes with four prebuilt data types. 

Each data type is a `TaggedType` and is located in a single module file.

A `TaggedType` is a structure composed by a tag (which is a unique string identifier) and a value `T`.

The same thing can be achieved using `symbols`, but they cannot be serialised/deserialised in a db, indexedDb or localStorage and cannot be transferred from client to server.

## Either

Represents a disjoint union. Usually it's used to return two possible values/types from a function, where by convenience `Left<T>` is used for the incorrect behavior, whilst `Right<T>` for the correct one. 

[Read more here](data-types/either.md)

## Maybe

`Maybe<T>` is a monad which, differently from haskell Maybe, represents a state of truthiness with `Just<T>` or falsiness with `Nothing`. It checks javascript's if a javascript value can be used as true or false.

[Read more here](data-types/maybe.md)

## Option

Option represents a value that could be possibly `null` or `undefined` (nullable or optional).

`Some<T>` is a non nullable and not optional value, whilst `None` represents either `null` or `undefined`

[Read more here](data-types/option.md)

## Result

`Result<T>` can be used to handle runtime errors instead of throwing them and encapsulating code with a `try/catch` block.

`Err` represents the error, while `Ok<T>` is the correct result.

[Read more here](data-types/result.md)
