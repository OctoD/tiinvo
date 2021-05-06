## createMap

Creates a map function for `TaggedType`s.
A map function accepts a `FnUnary<T, R>` which takes the value `T` of a
`TaggedType<T>` and returns a value `R` if predicate `Predicate` is satisfied. 


<!-- tabs:start --->

#### **node**

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

#### **deno/esm**

```ts
import { createMap, isTaggedWith, taggedFactory } from 'https://cdn.skypack.dev/tiinvo?dts';

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

<!-- tabs:end --->

## createMapOr

Creates a mapOr function for `TaggedType`s.

Similar to `createMap`, but the returned map function accepts a `Tagged` type as first argument (to be used as a fallback).

## createMapOrElse

Creates a mapOrElse function for `TaggedType`s.

Similar to `createMap`, but the returned map function accepts a `FnNullary` or `FnUnary` type as first argument.

