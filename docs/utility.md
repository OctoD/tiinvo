tiinvo comes with a bunch o premade utility functions.

## bind

Binds a function to a null `this`, then returns it

<!-- tabs:start --->

#### **node**

```ts
import { bind } from 'tiinvo';

const myfn = (text: string, repeat: number) => text.repeat(repeat);
const bound = bind(myfn, 'abc', 3);

bound() // 'abcabcabc';
```

#### **deno/esm**

```ts
import { bind } from 'https://cdn.skypack.dev/tiinvo?dts';

const myfn = (text: string, repeat: number) => text.repeat(repeat);
const bound = bind(myfn, 'abc', 3);

bound() // 'abcabcabc';
```

<!-- tabs:end --->

## callfnwith

Given some arguments, returns a function which accepts another function.
This function will be called with the given arguments.

<!-- tabs:start --->

#### **node**

```ts
import { callfnwith, num, pipe } from 'tiinvo';

const piped = pipe(
    num.umultiply(2),
    num.uadd,
);

callfnwith(10)(piped)(2) // 22
callfnwith(4)(piped)(2)  // 10
```

#### **deno/esm**

```ts
import { callfnwith, num, pipe } from 'https://cdn.skypack.dev/tiinvo?dts';

const piped = pipe(
    num.umultiply(2),
    num.uadd,
);

callfnwith(10)(piped)(2) // 22
callfnwith(4)(piped)(2)  // 10
```

<!-- tabs:end --->

## check

Checks if a given condition is true, otherwise throws an error with the given error message

<!-- tabs:start --->

#### **node**

```ts
import { check } from 'tiinvo';

check(true, 'does not throw')(10)        // 10
check(true, 'does not throw')('hello')   // 'hello'
check(false, 'this throws')('hello')     // Uncaught Error: this throws
```

#### **deno/esm**

```ts
import { check } from 'https://cdn.skypack.dev/tiinvo?dts';

check(true, 'does not throw')(10)        // 10
check(true, 'does not throw')('hello')   // 'hello'
check(false, 'this throws')('hello')     // Uncaught Error: this throws
```

<!-- tabs:end --->

## fallback

Creates a function which returns the passed argument

<!-- tabs:start --->

#### **node**

```ts
import { fallback } from 'tiinvo';

const always10 = fallback(10)
always10() // 10
```

#### **deno/esm**

```ts
import { fallback } from 'https://cdn.skypack.dev/tiinvo?dts';

const always10 = fallback(10)
always10() // 10
```

<!-- tabs:end --->

## pass

A function which passes the given argument.

<!-- tabs:start --->

#### **node**

```ts
import { pass } from 'tiinvo';

pass(10) // 10
```

#### **deno/esm**

```ts
import { pass } from 'https://cdn.skypack.dev/tiinvo?dts';

pass(10) // 10
```

<!-- tabs:end --->

## panic

Throws an error with the given message

<!-- tabs:start --->

#### **node**

```ts
import { panic } from 'tiinvo';

panic('this errors') // throws `this errors`
```

#### **deno/esm**

```ts
import { panic } from 'https://cdn.skypack.dev/tiinvo?dts';

panic('this errors') // throws `this errors`
```

<!-- tabs:end --->

## toasync

Takes a sync function and returns an async version of it.

Useful for async pipelines

<!-- tabs:start --->

#### **node**

```ts
import { toasync, num } from 'tiinvo';

const asyncuadd = toasync(num.uadd(10));
asyncuadd(6) // Promise<16>
```

#### **deno/esm**

```ts
import { toasync, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const asyncuadd = toasync(num.uadd(10));
asyncuadd(6) // Promise<16>
```

<!-- tabs:end --->

## wait

Returns a `Promise<void>` which resolves after an amout of milliseconds

<!-- tabs:start --->

#### **node**

```ts
import { wait, pipeasync } from 'tiinvo';

const log = (message: string) => async () => console.log(message);

pipeasync(
  log(`timer started on ${Date.now()}`),
  wait(1000),
  log(`timer stopped on ${Date.now()}`),
)()
```

#### **deno/esm**

```ts
import { wait, pipeasync } from 'https://cdn.skypack.dev/tiinvo?dts';

const log = (message: string) => async () => console.log(message);

pipeasync(
  log(`timer started on ${Date.now()}`),
  wait(1000),
  log(`timer stopped on ${Date.now()}`),
)()
```

<!-- tabs:end --->

