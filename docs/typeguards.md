Tiinvo comes with a lot of premade [Typeguards](https://basarat.gitbook.io/typescript/type-system/typeguard).

A `Typeguard<T>` is a function which accepts any variable as argument and determines if that variable is of the expected type.

## List of premade Typeguards

#### isarray

Checks if a value is an array

<!-- tabs:start -->

#### **node**

```ts
import { isarray } from 'tiinvo';

isarray(10)  // false
isarray('a') // false
isarray(!0)  // false
isarray([])  // true
```

#### **deno/esm**

```ts
import { isarray } from 'https://cdn.skypack.dev/tiinvo';

isarray(10)  // false
isarray('a') // false
isarray(!0)  // false
isarray([])  // true
```

<!-- tabs:end -->

#### isbigint

Checks if a value is a bigint

<!-- tabs:start -->

#### **node**

```ts
import { isbigint } from 'tiinvo';

isbigint(10)  // false
isbigint('a') // false
isbigint(!0)  // false
isbigint(10n) // true
```

#### **deno/esm**

```ts
import { isbigint } from 'https://cdn.skypack.dev/tiinvo';

isbigint(10)  // false
isbigint('a') // false
isbigint(!0)  // false
isbigint(10n) // true
```

<!-- tabs:end -->

#### isboolean

Checks if a value is a boolean

<!-- tabs:start -->

#### **node**

```ts
import { isboolean } from 'tiinvo';

isboolean(10)  // false
isboolean('a') // false
isboolean(!0)  // true
isboolean(10n) // false
```

#### **deno/esm**

```ts
import { isboolean } from 'https://cdn.skypack.dev/tiinvo';

isboolean(10)  // false
isboolean('a') // false
isboolean(!0)  // true
isboolean(10n) // false
```

<!-- tabs:end -->

#### isdefined

Checks if a value is defined

<!-- tabs:start -->

#### **node**

```ts
import { isdefined } from 'tiinvo';

isdefined(undefined)   // false
isdefined(10)          // true
isdefined('a')         // true
isdefined(!0)          // true
isdefined(10n)         // true
```

#### **deno/esm**

```ts
import { isdefined } from 'https://cdn.skypack.dev/tiinvo';

isdefined(undefined)   // false
isdefined(10)          // true
isdefined('a')         // true
isdefined(!0)          // true
isdefined(10n)         // true
```

<!-- tabs:end -->

#### isfunction

Checks if a value is a function

<!-- tabs:start -->

#### **node**

```ts
import { isfunction } from 'tiinvo';

isfunction(undefined)   // false
isfunction(10)          // false
isfunction('a')         // false
isfunction(!0)          // false
isfunction(() => void 0)// true
```

#### **deno/esm**

```ts
import { isfunction } from 'https://cdn.skypack.dev/tiinvo';

isfunction(undefined)   // false
isfunction(10)          // false
isfunction('a')         // false
isfunction(!0)          // false
isfunction(() => void 0)// true
```

<!-- tabs:end -->


#### isnumber

Checks if a value is a number

<!-- tabs:start -->

#### **node**

```ts
import { isnumber } from 'tiinvo';

isnumber(10)  // true
isnumber('a') // false
isnumber(!0)  // false
isnumber(10n) // false
```

#### **deno/esm**

```ts
import { isnumber } from 'https://cdn.skypack.dev/tiinvo';

isnumber(10)  // true
isnumber('a') // false
isnumber(!0)  // false
isnumber(10n) // false
```

<!-- tabs:end -->


#### isobject

Checks if a value is an object

<!-- tabs:start -->

#### **node**

```ts
import { isobject } from 'tiinvo';

isobject(10)   // false
isobject('a')  // false
isobject({})   // true
isobject(null) // true
isobject([])   // true
```

#### **deno/esm**

```ts
import { isobject } from 'https://cdn.skypack.dev/tiinvo';

isobject(10)   // false
isobject('a')  // false
isobject({})   // true
isobject(null) // true
isobject([])   // true
```

<!-- tabs:end -->


#### isstring

Checks if a value is an string

<!-- tabs:start -->

#### **node**

```ts
import { isstring } from 'tiinvo';

isstring(10)   // false
isstring('a')  // true
isstring({})   // false
isstring(null) // false
isstring([])   // false
```

#### **deno/esm**

```ts
import { isstring } from 'https://cdn.skypack.dev/tiinvo';

isstring(10)   // false
isstring('a')  // true
isstring({})   // false
isstring(null) // false
isstring([])   // false
```

<!-- tabs:end -->

#### isundefined

Checks if a value is undefined

<!-- tabs:start -->

#### **node**

```ts
import { isundefined } from 'tiinvo';

isundefined(10)          // false
isundefined('a')         // false
isundefined({})          // false
isundefined(null)        // false
isundefined(undefined)   // true
```

#### **deno/esm**

```ts
import { isundefined } from 'https://cdn.skypack.dev/tiinvo';

isundefined(10)          // false
isundefined('a')         // false
isundefined({})          // false
isundefined(null)        // false
isundefined(undefined)   // true
```

<!-- tabs:end -->

#### isnull

Checks if a value is null

<!-- tabs:start -->

#### **node**

```ts
import { isnull } from 'tiinvo';

isnull(10)          // false
isnull('a')         // false
isnull({})          // false
isnull(null)        // true
isnull(undefined)   // false
```

#### **deno/esm**

```ts
import { isnull } from 'https://cdn.skypack.dev/tiinvo';

isnull(10)          // false
isnull('a')         // false
isnull({})          // false
isnull(null)        // true
isnull(undefined)   // false
```

<!-- tabs:end -->

#### isnotnull

Checks if a value is not null

<!-- tabs:start -->

#### **node**

```ts
import { isnotnull } from 'tiinvo';

isnotnull(10)          // true
isnotnull('a')         // true
isnotnull({})          // true
isnotnull(null)        // false
isnotnull(undefined)   // true
```

#### **deno/esm**

```ts
import { isnotnull } from 'https://cdn.skypack.dev/tiinvo';

isnotnull(10)          // true
isnotnull('a')         // true
isnotnull({})          // true
isnotnull(null)        // false
isnotnull(undefined)   // true
```

<!-- tabs:end -->

#### isnullOrUndefined

Checks if a value is null or undefined

<!-- tabs:start -->

#### **node**

```ts
import { isnullOrUndefined } from 'tiinvo';

isnullOrUndefined(null)      // true
isnullOrUndefined(undefined) // true
isnullOrUndefined('foo')     // false
isnullOrUndefined([])        // false
```

#### **deno/esm**

```ts
import { isnullOrUndefined } from 'https://cdn.skypack.dev/tiinvo';

isnullOrUndefined(null)      // true
isnullOrUndefined(undefined) // true
isnullOrUndefined('foo')     // false
isnullOrUndefined([])        // false
```

<!-- tabs:end -->

#### isnotNullOrUndefined

Checks if a value is null or undefined

<!-- tabs:start -->

#### **node**

```ts
import { isnotNullOrUndefined } from 'tiinvo';

isnotNullOrUndefined(null)      // false
isnotNullOrUndefined(undefined) // false
isnotNullOrUndefined('foo')     // true
isnotNullOrUndefined([])        // true
```

#### **deno/esm**

```ts
import { isnotNullOrUndefined } from 'https://cdn.skypack.dev/tiinvo';

isnotNullOrUndefined(null)      // false
isnotNullOrUndefined(undefined) // false
isnotNullOrUndefined('foo')     // true
isnotNullOrUndefined([])        // true
```

<!-- tabs:end -->

#### isarrayof

Checks if a value is an array of a given type.

<!-- tabs:start -->

#### **node**

```ts
import { isarrayof, isstring } from 'tiinvo';

const isarrayofStrings = isarrayof(isstring);

isarrayofStrings([10, 20, 'hello', 'world']) // false
isarrayofStrings([10, 20])                   // false
isarrayofStrings(['hello', 'world'])         // true
```

#### **deno/esm**

```ts
import { isarrayof, isstring } from 'https://cdn.skypack.dev/tiinvo';

const isarrayofStrings = isarrayof(isstring);

isarrayofStrings([10, 20, 'hello', 'world']) // false
isarrayofStrings([10, 20])                   // false
isarrayofStrings(['hello', 'world'])         // true
```

<!-- tabs:end -->

#### nullable

Makes a `Typeguard<T>` nullable, so it will check if `T` or `null`

<!-- tabs:start -->

#### **node**

```ts
import { nullable, isnumber } from 'tiinvo';

const isnullablenumber = nullable(isnumber);

isnullablenumber(null) // true
isnullablenumber(1000) // true
isnullablenumber('10') // false
```

#### **deno/esm**

```ts
import { nullable, isnumber } from 'https://cdn.skypack.dev/tiinvo';

const isnullablenumber = nullable(isnumber);

isnullablenumber(null) // true
isnullablenumber(1000) // true
isnullablenumber('10') // false
```

<!-- tabs:end -->

#### optional

Makes a `Typeguard<T>` optional, so it will check if `T` or `undefined`

<!-- tabs:start -->

#### **node**

```ts
import { optional, isnumber } from 'tiinvo';

const isoptionalnumber = optional(isnumber);

isoptionalnumber(null) // true
isoptionalnumber(1000) // true
isoptionalnumber('10') // false
```

#### **deno/esm**

```ts
import { optional, isnumber } from 'https://cdn.skypack.dev/tiinvo';

const isoptionalnumber = optional(isnumber);

isoptionalnumber(null) // true
isoptionalnumber(1000) // true
isoptionalnumber('10') // false
```

<!-- tabs:end -->


## Object related Typeguards

#### isindexable

Checks if a value is an object (so that the `key` in can be used)

<!-- tabs:start -->

#### **node**

```ts
import { isindexable } from 'tiinvo';

isindexable(10)          // false
isindexable('a')         // false
isindexable({})          // true
isindexable(null)        // false
isindexable(undefined)   // false
```

#### **deno/esm**

```ts
import { isindexable } from 'https://cdn.skypack.dev/tiinvo';

isindexable(10)          // false
isindexable('a')         // false
isindexable({})          // true
isindexable(null)        // false
isindexable(undefined)   // false
```

<!-- tabs:end -->


#### iserror

Checks if a value is an Error

<!-- tabs:start -->

#### **node**

```ts
import { iserror } from 'tiinvo';

iserror(10)          // false
iserror('a')         // false
iserror(new Error()) // true
iserror(null)        // false
iserror(undefined)   // false
```

#### **deno/esm**

```ts
import { iserror } from 'https://cdn.skypack.dev/tiinvo';

iserror(10)          // false
iserror('a')         // false
iserror(new Error()) // true
iserror(null)        // false
iserror(undefined)   // false
```

<!-- tabs:end -->

## Indexables Typeguards

#### haskey

Checks if a value is indexable and has a key

<!-- tabs:start -->

#### **node**

```ts
import { haskey } from 'tiinvo';

const hasfoo = haskey('foo');
 
hasfoo(10)             // false
hasfoo('hello')        // false
hasfoo({bar: 100})     // false
hasfoo({foo: `baz`})   // true
```

#### **deno/esm**

```ts
import { haskey } from 'https://cdn.skypack.dev/tiinvo';

const hasfoo = haskey('foo');
 
hasfoo(10)             // false
hasfoo('hello')        // false
hasfoo({bar: 100})     // false
hasfoo({foo: `baz`})   // true
```

<!-- tabs:end -->

#### haskeyoftype

Checks if a value is indexable and has a key of a certain type

<!-- tabs:start -->

#### **node**

```ts
import { haskeyoftype, isstring } from 'tiinvo';

const hasfoo = haskeyoftype('foo', isstring);
 
hasfoo(10)             // false
hasfoo('hello')        // false
hasfoo({bar: 100})     // false
hasfoo({foo: true})    // false
hasfoo({foo: `baz`})   // true
```

#### **deno/esm**

```ts
import { haskeyoftype, isstring } from 'https://cdn.skypack.dev/tiinvo';

const hasfoo = haskeyoftype('foo', isstring);
 
hasfoo(10)             // false
hasfoo('hello')        // false
hasfoo({bar: 100})     // false
hasfoo({foo: true})    // false
hasfoo({foo: `baz`})   // true
```

<!-- tabs:end -->

#### haskeyWithValue

Checks if a value is indexable and has a key of an exact value

<!-- tabs:start -->

#### **node**

```ts
import { haskeyWithValue } from 'tiinvo';

const hasfoo = haskeyWithValue('foo', `baz`);
 
hasfoo({foo: `bar`})   // true
hasfoo({foo: `baz`})   // true
```

#### **deno/esm**

```ts
import { haskeyWithValue } from 'https://cdn.skypack.dev/tiinvo';

const hasfoo = haskeyWithValue('foo', `baz`);
 
hasfoo({foo: `bar`})   // true
hasfoo({foo: `baz`})   // true
```

<!-- tabs:end -->

#### haslength

Checks if a value is indexable and has the 'length' key

<!-- tabs:start -->

#### **node**

```ts
import { haslength } from 'tiinvo';
 
haslength([])              // true
haslength({})              // false
haslength({ length: 10 })  // true
```

#### **deno/esm**

```ts
import { haslength } from 'https://cdn.skypack.dev/tiinvo';

haslength([])              // true
haslength({})              // false
haslength({ length: 10 })  // true
```

<!-- tabs:end -->

#### haslengthof

Checks if a value is indexable, has the 'length' key and that the length is equal to a given one

<!-- tabs:start -->

#### **node**

```ts
import { haslengthof } from 'tiinvo';
 
test([1, 2, 3])       // false
test({})              // false
test({ length: 10 })  // true
```

#### **deno/esm**

```ts
import { haslengthof } from 'https://cdn.skypack.dev/tiinvo';

test([1, 2, 3])       // false
test({})              // false
test({ length: 10 })  // true
```

<!-- tabs:end -->

## Factories

#### implementing

Creates a Typeguard which checks if a given object is implementing a given interface.

<!-- tabs:start -->

#### **node**

```ts
import { implementing } from 'tiinvo';
 
interface User {
   name: string;
   mail: string;
   age: number;
   status?: string;
}

const isUser = implementing<User>({
   name: isstring,
   mail: isstring,
   age: isnumber,
   status: optional(isstring),
});

isUser({}) // false
isUser({ age: 100 }) // false
isUser({ age: 100, name: 'foo' }) // false
isUser({ age: 100, name: 'foo', mail: 'hello_at_world.com' }) // true
isUser({ age: '100', name: 'foo', mail: 'hello_at_world.com' }) // false
```

#### **deno/esm**

```ts
import { implementing } from 'https://cdn.skypack.dev/tiinvo';

interface User {
   name: string;
   mail: string;
   age: number;
   status?: string;
}

const isUser = implementing<User>({
   name: isstring,
   mail: isstring,
   age: isnumber,
   status: optional(isstring),
});

isUser({}) // false
isUser({ age: 100 }) // false
isUser({ age: 100, name: 'foo' }) // false
isUser({ age: 100, name: 'foo', mail: 'hello_at_world.com' }) // true
isUser({ age: '100', name: 'foo', mail: 'hello_at_world.com' }) // false
```

<!-- tabs:end -->

#### istuple

Creates a typeguard which checks if an array is a tuple 
corresponding the given types

<!-- tabs:start -->

#### **node**

```ts
import { istuple, isstring, isnumber } from 'tiinvo';
 
const tg = istuple(isstring, isstring, isnumber);
 
tg([10, 20, 30])         // false
tg(['10', 20, 30])       // false
tg(['10', '20', 30])     // true
tg(['10', '20', 30, 50]) // false
```

#### **deno/esm**

```ts
import { istuple, isstring, isnumber } from 'https://cdn.skypack.dev/tiinvo';

const tg = istuple(isstring, isstring, isnumber);
 
tg([10, 20, 30])         // false
tg(['10', 20, 30])       // false
tg(['10', '20', 30])     // true
tg(['10', '20', 30, 50]) // false
```

<!-- tabs:end -->

#### combine

Combines two or more typeguards in one.
If every typeguard passes, the argument will be of type `T`.

<!-- tabs:start -->

#### **node**

```ts
import { combine, isstring, Typeguard, num, str, pipe } from 'tiinvo';
 
const haslengthof5 = pipe(
   str.length,
   num.greaterequalthan(5),
) as Typeguard<string>;

const isstringwithminlengthof5 = combine<string>(
   isstring,
   haslengthof5,
);

isstringwithminlengthof5(`a`)      // false
isstringwithminlengthof5(`abcde`)  // true
```

#### **deno/esm**

```ts
import { combine, isstring, Typeguard, num, str, pipe } from 'https://cdn.skypack.dev/tiinvo';

const tg = istuple(isstring, isstring, isnumber);

const haslengthof5 = pipe(
   str.length,
   num.greaterequalthan(5),
) as Typeguard<string>;

const isstringwithminlengthof5 = combine<string>(
   isstring,
   haslengthof5,
);

isstringwithminlengthof5(`a`)      // false
isstringwithminlengthof5(`abcde`)  // true
```

<!-- tabs:end -->

#### anyof

Determines if one or more typeguards are satisfied by the given value.
Ideal for typechecking enums, variadic enums, constants etc.

<!-- tabs:start -->

#### **node**

```ts
import { anyof, isstring, isnumber, isbool, Typeguard, predicate } from 'tiinvo';
 
export const Variadic1 = `hello`;
export const Variadic2 = 10000000;
export const Variadic3 = false;

export type Variadic1 = typeof Variadic1;
export type Variadic2 = typeof Variadic2;
export type Variadic3 = typeof Variadic3;

export type MyVariadicEnum = Variadic1 | Variadic2 | Variadic3;

export const isVariadic1 = predicate.withsamevalue(Variadic1) as Typeguard<Variadic1>;
export const isVariadic2 = predicate.withsamevalue(Variadic2) as Typeguard<Variadic2>;
export const isVariadic3 = predicate.withsamevalue(Variadic3) as Typeguard<Variadic3>;
export const isMyVariadicEnum = anyof<MyVariadicEnum>(
   isVariadic1,
   isVariadic2,
   isVariadic3,
);

isMyVariadicEnum(123)      // false
isMyVariadicEnum(true)     // false
isMyVariadicEnum('aa')     // false
isMyVariadicEnum('hello')  // true
isMyVariadicEnum(false)    // true
isMyVariadicEnum(10000000) // true
```

#### **deno/esm**

```ts
import { anyof, isstring, isnumber, isbool, Typeguard, predicate } from 'https://cdn.skypack.dev/tiinvo';

const tg = istuple(isstring, isstring, isnumber);

export const Variadic1 = `hello`;
export const Variadic2 = 10000000;
export const Variadic3 = false;

export type Variadic1 = typeof Variadic1;
export type Variadic2 = typeof Variadic2;
export type Variadic3 = typeof Variadic3;

export type MyVariadicEnum = Variadic1 | Variadic2 | Variadic3;

export const isVariadic1 = predicate.withsamevalue(Variadic1) as Typeguard<Variadic1>;
export const isVariadic2 = predicate.withsamevalue(Variadic2) as Typeguard<Variadic2>;
export const isVariadic3 = predicate.withsamevalue(Variadic3) as Typeguard<Variadic3>;
export const isMyVariadicEnum = anyof<MyVariadicEnum>(
   isVariadic1,
   isVariadic2,
   isVariadic3,
);

isMyVariadicEnum(123)      // false
isMyVariadicEnum(true)     // false
isMyVariadicEnum('aa')     // false
isMyVariadicEnum('hello')  // true
isMyVariadicEnum(false)    // true
isMyVariadicEnum(10000000) // true
```

<!-- tabs:end -->

#### isexact

Creates a typeguard which matches a specific value by type and value equality.

<!-- tabs:start -->

#### **node**

```ts
import { isexact } from 'tiinvo';
 
const is10 = isexact(10);
 
is10(2);     // false
is10('10');  // false
is10(10);    // true
```

#### **deno/esm**

```ts
import { isexact } from 'https://cdn.skypack.dev/tiinvo';

const tg = istuple(isstring, isstring, isnumber);

const is10 = isexact(10);

is10(2);     // false
is10('10');  // false
is10(10);    // true
```

<!-- tabs:end -->
