## branch

Creates a branching function. If the predicate is satisfied, calls Positive fn, otherwise calls Negative fn.
Note: Both Predicate, Positive and Negative fns are unaries.

<!-- tabs:start --->

#### **node**

```ts
import { branch, num } from 'tiinvo';

const tostring = (label: 'even' | 'odd') => (arg: number) => `${arg} is ${label}`
const evenstostring = tostring('even');
const oddstostring = tostring('odd');

const dosomething = branch(num.iseven, evenstostring, oddstostring);
const dosomething2 = branch(num.iseven, 'even', 'odd');

dosomething(10) // "10 is even"
dosomething(11) // "11 is odd"

dosomething2(10) // "even"
dosomething2(11) // "odd"
```

#### **deno/esm**

```ts
import { branch, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const tostring = (label: 'even' | 'odd') => (arg: number) => `${arg} is ${label}`
const evenstostring = tostring('even');
const oddstostring = tostring('odd');

const dosomething = branch(num.iseven, evenstostring, oddstostring);
const dosomething2 = branch(num.iseven, 'even', 'odd');

dosomething(10) // "10 is even"
dosomething(11) // "11 is odd"

dosomething2(10) // "even"
dosomething2(11) // "odd"
```

<!-- tabs:end --->

## multi

Like a Switch statement.

It accepts the default case `R` as first argument, then an indefinite number of tuples made
by a `Predicate<T>` as first argument, and a `R` or `FnNullary<R>` or `FnUnary<T, R>` function as resolver.

<!-- tabs:start --->

#### **node**

```ts
import { multi, fallback, num, pipe, str } from 'tiinvo';

const switchcase = pipe(
   str.length,
   multi(
     `Not valid`,
     [num.equals(0), `Required`],
     [num.lessthan(10), `Too short`],
     [num.greaterthan(20), `Too long`],
     [num.greaterthan(8), `Valid`],
   )
);
 
switchcase('hello world')                    // `Valid`
switchcase('foo')                            // `Too short`
switchcase('123456789012345678901234567890') // `Too long`
switchcase('')                               // `Required`
switchcase(11 as any)                        // `Not valid`
```

#### **deno/esm**

```ts
import { multi, fallback, num, pipe, str } from 'https://cdn.skypack.dev/tiinvo?dts';

const switchcase = pipe(
   str.length,
   multi(
     `Not valid`,
     [num.equals(0), `Required`],
     [num.lessthan(10), `Too short`],
     [num.greaterthan(20), `Too long`],
     [num.greaterthan(8), `Valid`],
   )
);
 
switchcase('hello world')                    // `Valid`
switchcase('foo')                            // `Too short`
switchcase('123456789012345678901234567890') // `Too long`
switchcase('')                               // `Required`
switchcase(11 as any)                        // `Not valid`
```

<!-- tabs:end --->
