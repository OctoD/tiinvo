Foldables are functions which normalize a branched result from two `TaggedType`s.

A good example for this is `Either.fold`.

```ts
const foldfn = either.fold(
  `no records found`, 
  (args: string[]) => `${args.length} records found`
);

foldfn(either.left(10))               // 'no records found'
foldfn(either.right(['a', 'b', 'c'])) // '3 records found'
```


## createfold <!-- {docsify-ignore} -->

Creates a fold function.
This function will return `left` if the `Predicate<Tagged<T, any>>` is not satisfied,
otherwise it will return `right`.

Both `left` and `right` can be a type `R` or `FnUnary<T, R>`

```ts
import { createfold, taggedFactory, isTaggedWith } from 'tiinvo';

const positive = `my-tagged-type1`;
const negative = `my-tagged-type2`;

type positive = typeof positive;
type negative = typeof negative;

type mytagged = positive | negative;

const tagged1 = taggedFactory(positive);
const tagged2 = taggedFactory(negative);

const istagged1 = isTaggedWith(positive);
const istagged2 = isTaggedWith(negative);

const fold = createfold<mytagged>(istagged2);

fold('is negative', 'is positive')(tagged1('hello')) // is positive
fold('is negative', 'is positive')(tagged2('world')) // is negative
```

An example using `Either`

```ts
import { either } from `tiinvo`;

either.fold('is left', 'is right')(either.right(100)); // 'is right'
either.fold('is left', 'is right')(either.left(1000)); // 'is left'
```

## createSwap <!-- {docsify-ignore} -->

Creates a function which swaps `left` to `right` and `right` to `left`

```ts
import { createSwap, taggedFactory, isTaggedWith } from 'tiinvo';

const positive = `my-tagged-type1`;
const negative = `my-tagged-type2`;

type positive = typeof positive;
type negative = typeof negative;

type mytagged = positive | negative;

const tagged1 = taggedFactory(positive);
const tagged2 = taggedFactory(negative);

const istagged1 = isTaggedWith(positive);
const istagged2 = isTaggedWith(negative);

const swap = createSwap(istagged2, tagged2, tagged1);

swap(tagged1('hello')) // Tagged<'hello', 'my-tagged-type2'>
swap(tagged2('hello')) // Tagged<'hello', 'my-tagged-type1'>
```

An example using `Either`

```ts
import { either } from 'tiinvo';

either.swap(either.right(100)) // Left<100>
```