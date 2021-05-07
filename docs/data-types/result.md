`Result<T>` can be used to handle runtime errors instead of throwing them and encapsulating code with a `try/catch` block.

`Err` represents the error, while `Ok<T>` is the correct result.

## isResult

Returns true if something is `Result<unknown>`;

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

result.isResult(0)                   // false
result.isResult(result.ok(10))       // true
result.isResult(result.err('foo'))   // true
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

result.isResult(0)                   // false
result.isResult(result.ok(10))       // true
result.isResult(result.err('foo'))   // true
```

<!-- tabs:end --->

## isErr

Returns true if a variable is `Err`

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

result.isErr(0)                   // false
result.isErr(result.ok(10))       // false
result.isErr(result.err('foo'))   // true
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

result.isErr(0)                   // false
result.isErr(result.ok(10))       // false
result.isErr(result.err('foo'))   // true
```

<!-- tabs:end --->

## isOk

Returns true if a variable is `Ok`

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

result.isOk(0)                   // false
result.isOk(result.ok(10))       // true
result.isOk(result.err('foo'))   // false
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

result.isOk(0)                   // false
result.isOk(result.ok(10))       // true
result.isOk(result.err('foo'))   // false
```

<!-- tabs:end --->

## isOkOf

Checks if a value is `Ok<T>`.

<!-- tabs:start --->

#### **node**

```ts
import { result, isnumber } from 'tiinvo';

const isnumok = result.isOkOf(isnumber);

isnumok(result.err(`nope`))  // false
isnumok(result.ok(`nope2`))  // false
isnumok(result.ok(1000000))  // true
```

#### **deno/esm**

```ts
import { result, isnumber } from 'https://cdn.skypack.dev/tiinvo?dts';

const isnumok = result.isOkOf(isnumber);

isnumok(result.err(`nope`))  // false
isnumok(result.ok(`nope2`))  // false
isnumok(result.ok(1000000))  // true
```

<!-- tabs:end --->

## err

Creates a `Err` type

## ok

Creates a `Ok<T>` type. Throws if `T` is an instance of `Error`.

## result

Creates a `Result<T>` type. If the given value is an instance of `Error`, 
returns `Err`, otherwise returns `Ok<T>`

## expect

Throws an error if `Result<T>` is `Err`

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

result.expect(result.ok(10))    // Ok<10>
result.expect(result.err(''))   // throws
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

result.expect(result.ok(10))    // Ok<10>
result.expect(result.err(''))   // throws
```

<!-- tabs:end --->

## unexpect

Throws an error if `Result<T>` is `Ok<T>`

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

result.unexpect(result.ok(10))    // throws
result.unexpect(result.err(''))   // Err<''>
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

result.unexpect(result.ok(10))    // throws
result.unexpect(result.err(''))   // Err<''>
```

<!-- tabs:end --->

## filter

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it maps the `Ok<T>` to
an `Err`.

<!-- tabs:start --->

#### **node**

```ts
import { result, num } from 'tiinvo';

result.filter(num.iseven)(4) // Ok<4>
result.filter(num.iseven)(3) // Err
```

#### **deno/esm**

```ts
import { result, num } from 'https://cdn.skypack.dev/tiinvo?dts';

result.filter(num.iseven)(4) // Ok<4>
result.filter(num.iseven)(3) // Err
```

<!-- tabs:end --->

## filterOr

Filters an `Ok<T>` with a given predicate. If the check
does not satisfy the predicate, it returns the fallback
`Result<T>`.

<!-- tabs:start --->

#### **node**

```ts
import { result, num } from 'tiinvo';

const filter = result.filterOr(result.ok(0), num.iseven);

filter(4) // Ok<4>
filter(3) // Ok<0>
```

#### **deno/esm**

```ts
import { result, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = result.filterOr(result.ok(0), num.iseven);

filter(4) // Ok<4>
filter(3) // Ok<0>
```

<!-- tabs:end --->

## map

Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise returns `Err`

<!-- tabs:start --->

#### **node**

```ts
import { result, pipe } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.map(double),
 result.unwrapOr(0)
);

handleerror(2) // 4
handleerror(1) // 0
```

#### **deno/esm**

```ts
import { result, pipe } from 'https://cdn.skypack.dev/tiinvo?dts';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.map(double),
 result.unwrapOr(0)
);

handleerror(2) // 4
handleerror(1) // 0
```

<!-- tabs:end --->

## mapOr

Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise returns fallback `Ok<R>`

<!-- tabs:start --->

#### **node**

```ts
import { result, pipe } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOr(result.ok(0), double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

#### **deno/esm**

```ts
import { result, pipe } from 'https://cdn.skypack.dev/tiinvo?dts';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOr(result.ok(0), double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

<!-- tabs:end --->

## mapOrElse

Returns `Ok<R>` if `Result<T>` is `Ok<T>`, otherwise calls `FnNullary<R>` and returns `Ok<R>`

<!-- tabs:start --->

#### **node**

```ts
import { result, pipe, fallback } from 'tiinvo';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;
const elsefn = fallback(0);

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOrElse(elsefn, double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

#### **deno/esm**

```ts
import { result, pipe, fallback } from 'https://cdn.skypack.dev/tiinvo?dts';

const evenorerror = (arg: number) => arg % 2 === 0 ? arg : new Error('argument must be an even number');
const double = (arg: number) => arg * 2;
const elsefn = fallback(0);

const handleerror = pipe(
 result.fromfunction(evenorerror),
 result.mapOrElse(elsefn, double),
 result.unwrap
);

handleerror(2) // 4
handleerror(1) // 0
```

<!-- tabs:end --->

## unwrap

Unwraps a `Result<T>` value `T` is `Ok<T>`, otherwise throws

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrap;

unwrapfn(test1) // 10
unwrapfn(test2) // throws the error
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrap;

unwrapfn(test1) // 10
unwrapfn(test2) // throws the error
```

<!-- tabs:end --->

## unwrapOr

Unwraps a `Result<T>` value `T` if `Ok<T>`, otherwise returns the fallback value `T`

<!-- tabs:start --->

#### **node**

```ts
import { result } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOr(0);

unwrapfn(test1) // 10
unwrapfn(test2) // 0
```

#### **deno/esm**

```ts
import { result } from 'https://cdn.skypack.dev/tiinvo?dts';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOr(0);

unwrapfn(test1) // 10
unwrapfn(test2) // 0
```

<!-- tabs:end --->

## unwrapOrElse

Unwraps a `Result<T>` value `T` if `Ok<T>`, otherwise calls fallback function `FnNullary<T>`

<!-- tabs:start --->

#### **node**

```ts
import { result, fallback } from 'tiinvo';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOrElse(fallback(0));

unwrapfn(test1) // 10
unwrapfn(test2) // 0
```

#### **deno/esm**

```ts
import { result, fallback } from 'https://cdn.skypack.dev/tiinvo?dts';

const test1 = result.ok(10);
const test2 = result.ok(new Error());
const unwrapfn = result.unwrapOrElse(fallback(0));

unwrapfn(test1) // 10
unwrapfn(test2) // 0
```

<!-- tabs:end --->

## fromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Result<T>`

<!-- tabs:start --->

#### **node**

```ts
import { result, num } from 'tiinvo';

const couldthrow = () => {
  const a = num.brandomint(0, 10);
  if (num.iseven(a)) {
    return new Error('number is even')
  }
  return a;
}
const unsaferandomInt = result.fromfunction(couldthrow);
unsaferandomInt() // could be either Err<'number is even'> or Ok<number>
```

#### **deno/esm**

```ts
import { result, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const couldthrow = () => {
  const a = num.brandomint(0, 10);
  if (num.iseven(a)) {
    return new Error('number is even')
  }
  return a;
}
const unsaferandomInt = result.fromfunction(couldthrow);
unsaferandomInt() // could be either Err<'number is even'> or Ok<number>
```

<!-- tabs:end --->
