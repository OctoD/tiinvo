`Maybe<T>` is a monad which, differently from haskell Maybe, represents a state of truthiness with `Just<T>` or falsiness with `Nothing`. It checks javascript's if a javascript value can be used as true or false.

## isMaybe

Checks if a value is `Maybe<unknown>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.isMaybe(10)                   // false
maybe.isMaybe(maybe.just(20))       // true
maybe.isMaybe(maybe.nothing())      // true
maybe.isMaybe({ __tag: 'a' })       // false
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.isMaybe(10)                   // false
maybe.isMaybe(maybe.just(20))       // true
maybe.isMaybe(maybe.nothing())      // true
maybe.isMaybe({ __tag: 'a' })       // false

```

<!-- tabs:end --->

## isJust

Checks if a type is `Just<unknown>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.isJust(10)               // false
maybe.isJust(maybe.just(10))   // true
maybe.isJust(maybe.nothing())  // false
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.isJust(10)               // false
maybe.isJust(maybe.just(10))   // true
maybe.isJust(maybe.nothing())  // false
```

<!-- tabs:end --->

## isJustOf

Checks if a type is `Just<T>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe, isstring } from 'tiinvo';

const isjustStr = maybe.isJustOf(isstring);

isjustStr(10)                  // false
isjustStr(maybe.just(10))      // false
isjustStr(maybe.just('abc'))   // true
isjustStr(maybe.nothing())     // false
```

#### **deno/esm**

```ts
import { maybe, isstring } from 'https://cdn.skypack.dev/tiinvo?dts';

const isjustStr = maybe.isJustOf(isstring);

isjustStr(10)                  // false
isjustStr(maybe.just(10))      // false
isjustStr(maybe.just('abc'))   // true
isjustStr(maybe.nothing())     // false
```

<!-- tabs:end --->

## isNothing

Checks if a type if `Nothing`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.isnothing(10)                 // false
maybe.isnothing(maybe.just(20))     // false
maybe.isnothing(maybe.maybe(!0))    // true
maybe.isnothing(maybe.nothing())    // true
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.isnothing(10)                 // false
maybe.isnothing(maybe.just(20))     // false
maybe.isnothing(maybe.maybe(!0))    // true
maybe.isnothing(maybe.nothing())    // true
```

<!-- tabs:end --->

## nothing

Creates a `Nothing`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.nothing();
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.nothing();
```

<!-- tabs:end --->

## just

Creates a `Just<T>`.
Throws an error if the given value is falsy.

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.just(10)          // Just<10>
maybe.just('hi')        // Just<'hi'>
maybe.just('')          // throws
maybe.just(0)           // throws
maybe.just(false)       // throws
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

```

<!-- tabs:end --->

## maybe

Creates a `Maybe<T>` tagged type. If the value is truthy, it
will be a `Just<T>`, otherwise it will be `Nothing`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.maybe(0)    // Nothing
maybe.maybe(1)    // Just<1>
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.maybe(0)    // Nothing
maybe.maybe(1)    // Just<1>
```

<!-- tabs:end --->


## expect

Throws if the tagged type is not `Just`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.expect(maybe.maybe(0))  // throws
maybe.expect(maybe.maybe(1))  // `Just<1>`
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.expect(maybe.maybe(0))  // throws
maybe.expect(maybe.maybe(1))  // `Just<1>`
```

<!-- tabs:end --->

## unexpect

Throws if the tagged type is not `Nothing`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

maybe.unexpect(maybe.maybe(0))  // Nothing
maybe.unexpect(maybe.maybe(1))  // throws
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

maybe.unexpect(maybe.maybe(0))  // Nothing
maybe.unexpect(maybe.maybe(1))  // throws
```

<!-- tabs:end --->

## filter

If the predicate is satisfied, returns previous `Just<T>`, otherwise
returns `Nothing`

<!-- tabs:start --->

#### **node**

```ts
import { maybe, num } from 'tiinvo';

const f = maybe.filter(num.iseven);

f(either.just(10))  // Just<10>
f(either.just(9))   // Nothing
```

#### **deno/esm**

```ts
import { maybe, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const f = maybe.filter(num.iseven);

f(either.just(10))  // Just<10>
f(either.just(9))   // Nothing
```

<!-- tabs:end --->

## filterOr

If the predicate is satisfied, returns previous `Just<T>`, otherwise
returns the given fallback `Just<T>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe, num } from 'tiinvo';

const maybeinrange = maybe.filterOr(maybe.just(0), num.inrange(0, 10));

maybeinrange(either.just(10))  // Just<10>
maybeinrange(either.just(11))  // Just<0>
```

#### **deno/esm**

```ts
import { maybe, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const maybeinrange = maybe.filterOr(maybe.just(0), num.inrange(0, 10));

maybeinrange(either.just(10))  // Just<10>
maybeinrange(either.just(11))  // Just<0>
```

<!-- tabs:end --->

## fold

If `Maybe<T>` is `Just<T>`, returns `B` or calls `FnUnary<B>`, otherwise returns `A` or calls `FnUnary<A>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

const unfold = maybe.fold('does not exists', 'exists');
unfold(maybe.maybe({ user: `foobar` }))   // 'exists'
unfold(maybe.maybe(undefined))            // 'does not exists'
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

const unfold = maybe.fold('does not exists', 'exists');
unfold(maybe.maybe({ user: `foobar` }))   // 'exists'
unfold(maybe.maybe(undefined))            // 'does not exists'
```

<!-- tabs:end --->

## map

Maps a `T` to `K` if the value is `Just<T>`

## mapOr

Maps a `T` to `K` if the value is `Just<T>`, or maps it to the given fallback

## mapOrElse

Maps a `T` to `K` if the value is `Just<T>`, or calls the fallback function and maps to the
returned value

## unwrap

Unwraps a `Just<T>` value `T`. Otherwise throws.

## unwrapOr

Unwraps a `Just<T>` value `T`. Otherwise returns the `or` value.

## unwrapOrElse

Unwraps a `Just<T>` value `T`. Otherwise calls the `or` function and returns it's return value.

## frompredicate

Creates a `Maybe<T>` from a `Predicate<T>`. If the predicate is satisfied, returns `Just<T>`, otherwise `Nothing`.

<!-- tabs:start --->

#### **node**

```ts
import { maybe, num } from 'tiinvo';

const maybeodd = maybe.frompredicate(num.isodd);

maybeodd(10)    // Nothing
maybeodd(11)    // Just<11>
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

const maybeodd = maybe.frompredicate(num.isodd);

maybeodd(10)    // Nothing
maybeodd(11)    // Just<11>
```

<!-- tabs:end --->

## justfromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Just<T>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.justfromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('baz') // Throws error
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.justfromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.justfromfunction(mapmyobjectkey)('baz') // Throws error
```

<!-- tabs:end --->

## maybefromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Maybe<T>`

<!-- tabs:start --->

#### **node**

```ts
import { maybe } from 'tiinvo';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.maybefromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('baz') // Nothing
```

#### **deno/esm**

```ts
import { maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

const myobject = { foo: 10, bar: 20, baz: undefined };
const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];

maybe.maybefromfunction(mapmyobjectkey)('foo') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('bar') // Just<number>
maybe.maybefromfunction(mapmyobjectkey)('baz') // Nothing
```

<!-- tabs:end --->
