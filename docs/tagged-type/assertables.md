Assertables are functions which create an unsafe assertion.

If that assertion is not correct, an error will be thrown.

## createExpect <!-- {docsify-ignore} -->

Creates an expect function. This function checks if a given argument satisfies the given predicate.
If the condition is not satisfied, it throws, otherwise returns the checked value.


```ts
import { createExpect, isstring } from 'tiinvo';

const expectstring = createExpect(isstring);

const foocheck = expectstring('myfn foo argument must be a string');
const barcheck = expectstring('myfn bar argument must be a string');

const myfn = (foo: unknown, bar: unknown) => [
   foocheck(foo),
   barcheck(bar)
].join('--');

myfn('hello', 'world'); // 'hello--world';
myfn('hello', 123);     // Uncaught Error: myfn bar argument must be a string
```
