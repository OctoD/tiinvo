#### and

Combines two or more predicates in one. The resulting predicate will return true if
all predicates are satisfied

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const isString = (arg: unknown): arg is string => typeof arg === 'string';
const hasLength = (length: number) => (arg: unknown): boolean => isString(arg) && arg.length >= length;

const contains = (str: string) => (arg: unknown): boolean => isString(arg) && arg.contains(str);

const combined = and(isString, hasLength(4), contains('foo'))
combined('foobarbaz'); // true
combined('helloworld'); // false
combined('foo'); // false
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const isString = (arg: unknown): arg is string => typeof arg === 'string';
const hasLength = (length: number) => (arg: unknown): boolean => isString(arg) && arg.length >= length;

const contains = (str: string) => (arg: unknown): boolean => isString(arg) && arg.contains(str);

const combined = and(isString, hasLength(4), contains('foo'))
combined('foobarbaz'); // true
combined('helloworld'); // false
combined('foo'); // false
```

<!-- tabs:end -->

#### fromvalue

Creates a new function which accepts a predicate. This predicate will check
the value used for creating that function.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const iseven = (arg: number) => arg % 2 === 0;
const isodd  = predicate.reverse(iseven);
const check1 = predicate.fromvalue(1);
const check2 = predicate.fromvalue(2);

check1(iseven)   // false
check1(isodd)    // true
check2(iseven)   // true
check2(isodd)    // false
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const iseven = (arg: number) => arg % 2 === 0;
const isodd  = predicate.reverse(iseven);
const check1 = predicate.fromvalue(1);
const check2 = predicate.fromvalue(2);

check1(iseven)   // false
check1(isodd)    // true
check2(iseven)   // true
check2(isodd)    // false
```

<!-- tabs:end -->

#### fromvalues

Returns a function which checks if every value `T` passes a given `Predicate<T>`

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const test1 = predicate.fromvalues(1, 2, 3, 4, 5);
const test2 = predicate.fromvalues(2, 4, 6, 8);
const iseven = (arg: number) => arg % 2 === 0;

test1(iseven); // false
test2(iseven); // true
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const test1 = predicate.fromvalues(1, 2, 3, 4, 5);
const test2 = predicate.fromvalues(2, 4, 6, 8);
const iseven = (arg: number) => arg % 2 === 0;

test1(iseven); // false
test2(iseven); // true
```

<!-- tabs:end -->

#### noneof

Combines two or more predicates into one. The returned predicate
will check if no conditions are met.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const isnumber = (arg: unknown): arg is number => typeof arg === 'number';
const isstring = (arg: unknown): arg is string => typeof arg === 'string';
const isnull = (arg: unknown): arg is null => typeof arg === 'null';
const isundefined = (arg: unknown): arg is undefined => typeof arg === 'null';

const noneOfTheAbove = predicate.noneof(isnumber, isstring, isnull, isundefined);

noneOfTheAbove(10)             // false
noneOfTheAbove('hello world')  // false
noneOfTheAbove(null)           // false
noneOfTheAbove(undefined)      // false
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const isnumber = (arg: unknown): arg is number => typeof arg === 'number';
const isstring = (arg: unknown): arg is string => typeof arg === 'string';
const isnull = (arg: unknown): arg is null => typeof arg === 'null';
const isundefined = (arg: unknown): arg is undefined => typeof arg === 'null';

const noneOfTheAbove = predicate.noneof(isnumber, isstring, isnull, isundefined);

noneOfTheAbove(10)             // false
noneOfTheAbove('hello world')  // false
noneOfTheAbove(null)           // false
noneOfTheAbove(undefined)      // false
```

<!-- tabs:end -->

#### or

Combines two or more predicates in one. The returned predicate will
check if at least one condition passes.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const isester = predicate.fromvalue('Ester');
const isjoe = predicate.fromvalue('Joe');
const islisa = predicate.fromvalue('Lisa');

const orfn = predicate.or(isester, isjoe, islisa);

orfn('Ester');       // true
orfn('Lisa');        // true
orfn('Joe');         // true
orfn('Alexander');   // false
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const isester = predicate.fromvalue('Ester');
const isjoe = predicate.fromvalue('Joe');
const islisa = predicate.fromvalue('Lisa');

const orfn = predicate.or(isester, isjoe, islisa);

orfn('Ester');       // true
orfn('Lisa');        // true
orfn('Joe');         // true
orfn('Alexander');   // false
```

<!-- tabs:end -->

#### reverse

Reverses (negates) the result of a predicate.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const iseven = (arg: number) => arg % 2 === 0;
const isodd = predicate.reverse(iseven);

iseven(2)  // true
isodd(2)   // false
isodd(1)   // true
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const iseven = (arg: number) => arg % 2 === 0;
const isodd = predicate.reverse(iseven);

iseven(2)  // true
isodd(2)   // false
isodd(1)   // true
```

<!-- tabs:end -->

#### withdifferentvalue

Creates a new `Predicate<T>` which checks if the given argument is not the same as the
one passed to the predicate.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const isnotjoe = predicate.withdifferentvalue('Joe');

isnotjoe('John');  // true
isnotjoe('Lisa');  // true
isnotjoe('Joe');   // false
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const isnotjoe = predicate.withdifferentvalue('Joe');

isnotjoe('John');  // true
isnotjoe('Lisa');  // true
isnotjoe('Joe');   // false
```

<!-- tabs:end -->

#### withsamevalue

Creates a new `Predicate<T>` which checks if the given argument is the same as the
one passed to the predicate.

<!-- tabs:start -->

#### **node**

```ts
import { predicate } from 'tiinvo';

const isnotjoe = withsamevalue('Joe');

isnotjoe('John');  // false
isnotjoe('Lisa');  // false
isnotjoe('Joe');   // true
```

#### **deno/esm**

```ts
import { predicate } from 'https://cdn.skypack.dev/tiinvo';

const isnotjoe = withsamevalue('Joe');

isnotjoe('John');  // false
isnotjoe('Lisa');  // false
isnotjoe('Joe');   // true
```

<!-- tabs:end -->
