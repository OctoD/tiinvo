Mappables are transformer functions which take a value `T` and return another one `R`.

## createMap <!-- {docsify-ignore} -->

Creates a map function for `TaggedType`s.
A map function accepts a `FnUnary<T, R>` which takes the value `T` of a
`TaggedType<T>` and returns a value `R` if predicate `Predicate` is satisfied. 

```ts
import { createMap, isTaggedWith, taggedFactory } from 'tiinvo';

const eventag = `even`;
const oddtag = `odd`;

type eventag = typeof eventag;
type oddtag = typeof oddtag;
type integertag = eventag | oddtag;

const even = taggedFactory<integertag>(eventag);
const odd = taggedFactory<integertag>(oddtag);
const integer = <T>(arg: T) => typeof arg === 'number' && arg % 2 === 0 ? even(arg) : odd(arg);

const iseven = isTaggedWith(eventag);

const map = createMap(iseven, integer);
const mapperfn = (arg: number) => arg / 2;

map(mapperfn)(integer(10))  //  Tagged<5, 'odd'>;
map(mapperfn)(integer(4))   //  Tagged<2, 'even'>;
```

## createMapOr <!-- {docsify-ignore} -->

Creates a mapOr function for `TaggedType`s.

Similar to `createMap`, but the returned map function accepts a `Tagged` type as first argument (to be used as a fallback).

## createMapOrElse <!-- {docsify-ignore} -->

Creates a mapOrElse function for `TaggedType`s.

Similar to `createMap`, but the returned map function accepts a `FnNullary` or `FnUnary` type as first argument.

