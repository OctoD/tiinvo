Option represents a value that could be possibly `null` or `undefined` (nullable or optional).

## isOption

Checks if a value is `Option<unknown>`

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.isOption(option.option(10))  // true
option.isOption(option.some(10))    // true
option.isOption(option.none())      // true
option.isOption(10)                 // false
option.isOption({ __tag: 'foo' })   // false
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.isOption(option.option(10))  // true
option.isOption(option.some(10))    // true
option.isOption(option.none())      // true
option.isOption(10)                 // false
option.isOption({ __tag: 'foo' })   // false
```

<!-- tabs:end --->

## isNone

Checks if a value is `None`

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.isNone(option.option(10))          // false
option.isNone(option.option(undefined))   // true
option.isNone(option.some(10))            // false
option.isNone(option.none())              // true
option.isNone(10)                         // false
option.isNone({ __tag: 'foo' })           // false
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.isNone(option.option(10))          // false
option.isNone(option.option(undefined))   // true
option.isNone(option.some(10))            // false
option.isNone(option.none())              // true
option.isNone(10)                         // false
option.isNone({ __tag: 'foo' })           // false
```

<!-- tabs:end --->

## isSome

Checks if a value is `Some<unknown>`

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.isSome(option.option(10))          // true
option.isSome(option.option(undefined))   // false
option.isSome(option.some(10))            // true
option.isSome(option.none())              // false
option.isSome(10)                         // false
option.isSome({ __tag: 'foo' })           // false
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.isSome(option.option(10))          // true
option.isSome(option.option(undefined))   // false
option.isSome(option.some(10))            // true
option.isSome(option.none())              // false
option.isSome(10)                         // false
option.isSome({ __tag: 'foo' })           // false
```

<!-- tabs:end --->

## isOptionOf

Checks if a value is `Option<T>`

<!-- tabs:start --->

#### **node**

```ts
import { option, isstring } from 'tiinvo';

const isstringoption = option.isOptionOf(isstring);

isstringoption(option.option(10))           // false
isstringoption(option.option('foo'))        // true
isstringoption(option.option({ }))          // false
isstringoption(option.option(undefined))    // false
```

#### **deno/esm**

```ts
import { option, isstring } from 'https://cdn.skypack.dev/tiinvo?dts';

const isstringoption = option.isOptionOf(isstring);

isstringoption(option.option(10))           // false
isstringoption(option.option('foo'))        // true
isstringoption(option.option({ }))          // false
isstringoption(option.option(undefined))    // false
```

<!-- tabs:end --->

## expect

Returns `Some<T>` if `Option<T>` is `Some`, otherwise throws an error.

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.expect(option.option(10))        // Option<10>
option.expect(option.option(undefined)) // throws
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.expect(option.option(10))        // Option<10>
option.expect(option.option(undefined)) // throws
```

<!-- tabs:end --->

## unexpect

Returns `None` if `Option<T>` is `Nothing`, otherwise throws an error.

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.unexpect(option.option(10))        // throws
option.unexpect(option.option(undefined)) // None
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.unexpect(option.option(10))        // throws
option.unexpect(option.option(undefined)) // None
```

<!-- tabs:end --->

## none

Returns `None`

<!-- tabs:end --->

## some

Returns `Some<T>`. Throws an error if the passed value is `undefined` or `null`.

## option

Returns `Option<T>`. If the passed value is `undefined` or `null` returns `None`, otherwise `Some<T>`

## filter

Returns `Option<T>` if the `Predicate<T>` is satisfied, otherwise returns `None`.

<!-- tabs:start --->

#### **node**

```ts
import { option, num } from 'tiinvo';

const filter = option.filter(num.iseven);

filter(option.some(10))   // Option<10>
filter(option.some(0))    // None
```

#### **deno/esm**

```ts
import { option, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = option.filter(num.iseven);

filter(option.some(10))   // Option<10>
filter(option.some(0))    // None
```

<!-- tabs:end --->

## filterOr

Returns `Some<T>` if `Predicate<T>` is satisfied, otherwise returns the fallback `Option<T>`

<!-- tabs:start --->

#### **node**

```ts
import { option, num } from 'tiinvo';

const filter = option.filterOr(option.some(0), num.inrange(0, 10));

filter(option.some(10))   // Option<10>
filter(option.some(10))   // Option<0>
```

#### **deno/esm**

```ts
import { option, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = option.filterOr(option.some(0), num.inrange(0, 10));

filter(option.some(10))   // Option<10>
filter(option.some(10))   // Option<0>
```

<!-- tabs:end --->

## map

Maps an `Option<T>` to `Some<R>` if `Some`, otherwise returns `None`

<!-- tabs:start --->

#### **node**

```ts
import { option, str } from 'tiinvo';

const maplength = option.map(str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Nothing
```

#### **deno/esm**

```ts
import { option, str } from 'https://cdn.skypack.dev/tiinvo?dts';

const maplength = option.map(str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Nothing
```

<!-- tabs:end --->

## mapOr

Maps an `Option<T>` to `Some<R>` if `Some`, otherwise returns fallback `Option<R>` and returns `Option<R>`

<!-- tabs:start --->

#### **node**

```ts
import { option, str } from 'tiinvo';

const maplength = option.mapOr(option.some(0), str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Some<0>
```

#### **deno/esm**

```ts
import { option, str } from 'https://cdn.skypack.dev/tiinvo?dts';

const maplength = option.mapOr(option.some(0), str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Some<0>
```

<!-- tabs:end --->

## mapOrElse

Maps an `Option<T>` to `Some<R>` if `Some`, otherwise calls fallback `FnNullary<R>` and returns `Some<R>`

<!-- tabs:start --->

#### **node**

```ts
import { option, str, fallback } from 'tiinvo';

const maplength = option.mapOrElse(fallback(0), str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Some<0>
```

#### **deno/esm**

```ts
import { option, str, fallback } from 'https://cdn.skypack.dev/tiinvo?dts';

const maplength = option.mapOrElse(fallback(0), str.length);

maplength(option.option('hello'))   // Some<5>
maplength(option.none())            // Some<0>
```

<!-- tabs:end --->

## unwrap

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise throws

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

option.unwrap(option.option(10))  // 10
option.unwrap(option.none())      // throws error
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

option.unwrap(option.option(10))  // 10
option.unwrap(option.none())      // throws error
```

<!-- tabs:end --->

## unwrapOr

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns fallback `T` value

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

const unwrapfn = option.unwrapOr(0);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

const unwrapfn = option.unwrapOr(0);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

<!-- tabs:end --->

## unwrapOrElse

Unwraps an `Option<T>` value `T` if `Some<T>`, otherwise returns `Fallback<T>` value

<!-- tabs:start --->

#### **node**

```ts
import { option } from 'tiinvo';

const elsefn = () => 0;
const unwrapfn = option.unwrapOrElse(elsefn);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

#### **deno/esm**

```ts
import { option } from 'https://cdn.skypack.dev/tiinvo?dts';

const elsefn = () => 0;
const unwrapfn = option.unwrapOrElse(elsefn);

unwrapfn(option.option(10))  // 10
unwrapfn(option.none())      // 0
```

<!-- tabs:end --->

## fromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Option<T>`

<!-- tabs:start --->

#### **node**

```ts
import { option, num } from 'tiinvo';

const multiplyopt = option.fromfunction(num.uadd(10));
multiplyopt(10)   // Option<number>
```

#### **deno/esm**

```ts
import { option, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const multiplyopt = option.fromfunction(num.uadd(10));
multiplyopt(10)   // Option<number>
```

<!-- tabs:end --->
