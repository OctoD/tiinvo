Either represents a value of one of two possible types (a disjoint union).

Usually it's used to return two possible values/types from a function, where by convenience `Left<T>` is used for the incorrect behavior, whilst `Right<T>` for the correct one. 

You can import the `either` module this way

```ts
import { either } from 'tiinvo';
```

or if you work on deno

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

## isEither 

Checks if a variable is Either

```ts
either.isEither(either.left(10))    // true
either.isEither(either.right(10))   // true
either.isEither(option.option(20))  // false
```

## isLeft 

Checks if a variable is Left

```ts
either.isLeft(either.left(10))    // true
either.isLeft(either.right(10))   // false
```

## isRight 

Checks if a variable is Right

```ts
either.isRight(either.left(10))    // false
either.isRight(either.right(10))   // true
```

## isEitherOf 

Checks if a variable is Either with a value of a given type

<!-- tabs:start -->

#### **node**

```ts
import { either, isstring } from 'tiinvo';

const isstringeither = either.isEitherOf(isstring)

isstringeither(either.left('hello'))    // true
isstringeither(either.right('world'))   // true
isstringeither(either.right(10))        // false
```

#### **deno**

```ts
import { either, isstring } from 'https://cdn.skypack.dev/tiinvo?dts';

const isstringeither = either.isEitherOf(isstring)

isstringeither(either.left('hello'))    // true
isstringeither(either.right('world'))   // true
isstringeither(either.right(10))        // false
```

<!-- tabs:end -->

## isLeftOf 

Same of `isEitherOf`, but will typecheck if it's `Left`

## isRightOf 

Same of `isEitherOf`, but will typecheck if it's `Right`

## left 

Creates a `Left<T>`

## right 

Creates a `Right<T>`

## filterLeft 

Filters only `Left<T>` values by a given `Predicate<T>`. 

If `Either<T>` is `Left<T>` and the `Predicate<T>` is not satisfied, 
it will return `Right<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const filter = either.filterLeft(num.iseven);

filter(either.left(10))   // Right<10>;
filter(either.left(9))    // Left<9>;
filter(either.right(5))   // Right<5>;
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = either.filterLeft(num.iseven);

filter(either.left(10))   // Right<10>;
filter(either.left(9))    // Left<9>;
filter(either.right(5))   // Right<5>;
```

<!-- tabs:end -->

## filterLeftOr 

Similar to `filterLeft`, but it will return the fallback `or` if filtered.

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const filter = either.filterLeftOr(either.left(10), num.lessthan(10));

filter(either.left(10))   // Left<10>
filter(either.left(11))   // Left<10>
filter(either.right(1))   // Right<1>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = either.filterLeftOr(either.left(10), num.lessthan(10));

filter(either.left(10))   // Left<10>
filter(either.left(11))   // Left<10>
filter(either.right(1))   // Right<1>
```

<!-- tabs:end -->

## filterRight 

Filters only `Right<T>` values by a given `Predicate<T>`. 

If `Either<T>` is `Right<T>` and the `Predicate<T>` is not satisfied, 
it will return `Left<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const filter = either.filterRight(num.iseven);

filter(either.right(10))   // Left<10>;
filter(either.right(9))    // Right<9>;
filter(either.left(5))     // Left<5>;
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = either.filterRight(num.iseven);

filter(either.right(10))   // Left<10>;
filter(either.right(9))    // Right<9>;
filter(either.left(5))     // Left<5>;
```

<!-- tabs:end -->

## filterRightOr 

Similar to `filterRight`, but it will return the fallback `or` if filtered.

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const filter = either.filterRightOr(either.right(10), num.lessthan(10));

filter(either.right(50))   // Right<10>
filter(either.right(11))   // Right<10>
filter(either.left(1))     // Left<1>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const filter = either.filterRightOr(either.right(10), num.lessthan(10));

filter(either.right(50))   // Right<10>
filter(either.right(11))   // Right<10>
filter(either.left(1))     // Left<1>
```

<!-- tabs:end -->



## fold 

Folds current `Either<T>`. It accepts two arguments `L` or `FnUnary<T, L>` and `R` or `FnUnary<T, R>`.

If `Either<T>` is `Left<T>`, it will return `L` or call `FnUnary<T, L>`.

If `Either<T>` is `Right<T>`, it will return `R` or call `FnUnary<T, R>`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

const unfold1 = either.fold('is left', 'is right');
const unfold2 = either.fold(() => 'is left', 'is right');
const unfold3 = either.fold('is left', () => 'is right');
const unfold4 = either.fold(() => 'is left', () => 'is right');

const test1 = either.left(10);
const test2 = either.right(10);

unfold1(test1); // 'is left'
unfold2(test1); // 'is left'
unfold3(test1); // 'is left'
unfold4(test1); // 'is left'
unfold1(test2); // 'is right'
unfold2(test2); // 'is right'
unfold3(test2); // 'is right'
unfold4(test2); // 'is right'
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

const unfold1 = either.fold('is left', 'is right');
const unfold2 = either.fold(() => 'is left', 'is right');
const unfold3 = either.fold('is left', () => 'is right');
const unfold4 = either.fold(() => 'is left', () => 'is right');

const test1 = either.left(10);
const test2 = either.right(10);

unfold1(test1); // 'is left'
unfold2(test1); // 'is left'
unfold3(test1); // 'is left'
unfold4(test1); // 'is left'
unfold1(test2); // 'is right'
unfold2(test2); // 'is right'
unfold3(test2); // 'is right'
unfold4(test2); // 'is right'
```

<!-- tabs:end -->

## swap 

Swaps `Left<T>` to `Right<T>` is `Either<T>` is `Left`, otherwise swaps `Right<T>` to `Left<T>` is `Either<T>` is `Right`

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.swap(either.left(10))  // Right<10>
either.swap(either.right(10)) // Left<10>
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.swap(either.left(10))  // Right<10>
either.swap(either.right(10)) // Left<10>
```

<!-- tabs:end -->



## mapLeft 

Maps `Either<T>` to `Left<R>` if is `Left`, otherwise returns `Right<T>`.

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const mapleft = either.mapLeft(num.umultiply(2));

mapleft(either.left(5))   // Left<10>
mapleft(either.right(5))  // Right<5>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const mapleft = either.mapLeft(num.umultiply(2));

mapleft(either.left(5))   // Left<10>
mapleft(either.right(5))  // Right<5>
```

<!-- tabs:end -->

## mapRight 

Maps `Either<T>` to `Right<R>` if is `Right`, otherwise returns `Left<T>`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

const mapright = either.mapRight(num.umultiply(2));

mapright(either.left(5))   // Left<5>
mapright(either.right(5))  // Right<10>
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

const mapright = either.mapRight(num.umultiply(2));

mapright(either.left(5))   // Left<5>
mapright(either.right(5))  // Right<10>
```

<!-- tabs:end -->

## mapLeftOr 

Maps `Either<T>` to `Left<R>` if is `Left`, otherwise returns `or` as `Left<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const mapleftor = either.mapLeftOr(either.left(0), num.udivide(2));

mapleftor(either.left(10))    //  Left<5>
mapleftor(either.right(20))   //  Left<0>
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapRightOr 

Maps `Either<T>` to `Right<R>` if is `Right`, otherwise returns `or` as `Right<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const maprightor = either.mapRightOr(either.right(0), num.udivide(2));

maprightor(either.left(10))    //  Right<0>
maprightor(either.right(20))   //  Right<10>
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

const maprightor = either.mapRightOr(either.right(0), num.udivide(2));

maprightor(either.left(10))    //  Right<0>
maprightor(either.right(20))   //  Right<10>
```

<!-- tabs:end -->

## mapLeftOrElse 

Maps `Either<T>` to `Left<R>` if is `Left`, otherwise calls `orfn` and returns `Left<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num, fallback, predicate } from 'tiinvo';

const m = either.mapLeftOrElse(
  fallback(false), 
  predicate.and(
    num.greaterthan(0), 
    num.lessthan(10)
  )
);

m(either.right(5))    // Left<false>
m(either.left(5))     // Left<true>
```

#### **deno/esm**

```ts
import { either, num, fallback, predicate } from 'https://cdn.skypack.dev/tiinvo?dts';

const m = either.mapLeftOrElse(
  fallback(false), 
  predicate.and(
    num.greaterthan(0), 
    num.lessthan(10)
  )
);

m(either.right(5))    // Left<false>
m(either.left(5))     // Left<true>
```

<!-- tabs:end -->

## mapRigthOrElse 

Maps `Either<T>` to `Right<R>` if is `Right`, otherwise calls `orfn` and returns `Right<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num, fallback, predicate } from 'tiinvo';

const m = either.mapRightOrElse(
  fallback(false), 
  predicate.and(
    num.greaterthan(0), 
    num.lessthan(10)
  )
);

m(either.right(5))    // Right<true>
m(either.left(5))     // Right<false>
```

#### **deno/esm**

```ts
import { either, num, fallback, predicate } from 'https://cdn.skypack.dev/tiinvo?dts';

const m = either.mapRightOrElse(
  fallback(false), 
  predicate.and(
    num.greaterthan(0), 
    num.lessthan(10)
  )
);

m(either.right(5))    // Right<true>
m(either.left(5))     // Right<false>
```

<!-- tabs:end -->

## unwrapEither

Unwraps either `Left` or `Right`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapEither(either.left(10)) // 10
either.unwrapEither(either.right(1)) // 1
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapEither(either.left(10)) // 10
either.unwrapEither(either.right(1)) // 1
```

<!-- tabs:end -->

## unwrapLeft

Unwraps value if `Either` is `Left`, otherwise throws an error.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapLeft(left(10)) // 10
either.unwrapLeft(right(1)) // throws
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapLeft(left(10)) // 10
either.unwrapLeft(right(1)) // throws
```

<!-- tabs:end -->

## unwrapRight

Unwraps value if `Either` is `Right`, otherwise throws an error.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapRight(left(10)) // throws
either.unwrapRight(right(1)) // 1
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapRight(left(10)) // throws
either.unwrapRight(right(1)) // 1
```

<!-- tabs:end -->

## unwrapLeftOr

Unwraps `Left<T>` value `T` if `Either<T>` is `Left`, otherwise returns the fallback `T`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapLeftOr(20)(left(10)) // 10
either.unwrapLeftOr(20)(right(1)) // 20
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapLeftOr(20)(left(10)) // 10
either.unwrapLeftOr(20)(right(1)) // 20
```

<!-- tabs:end -->

## unwrapRightOr

Unwraps `Right<T>` value `T` if `Either<T>` is `Right`, otherwise returns the fallback `T`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapRightOr(20)(left(10)) // 20
either.unwrapRightOr(20)(right(1)) // 1
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapRightOr(20)(left(10)) // 20
either.unwrapRightOr(20)(right(1)) // 1
```

<!-- tabs:end -->

## unwrapLeftOrElse

Unwraps `Left<T>` value `T` if `Either<T>` is `Left`, otherwise calls the fallback `FnNullary<T>`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapLeftOrElse(fallback(20))(left(10)) // 10
either.unwrapLeftOrElse(fallback(30))(right(1)) // 30
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapLeftOrElse(fallback(20))(left(10)) // 10
either.unwrapLeftOrElse(fallback(30))(right(1)) // 30
```

<!-- tabs:end -->

## unwrapRightOrElse

Unwraps `Right<T>` value `T` if `Either<T>` is `Right`, otherwise calls the fallback `FnNullary<T>`.

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';

either.unwrapRightOrElse(fallback(20))(left(10)) // 20
either.unwrapRightOrElse(fallback(30))(right(1)) // 1
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';

either.unwrapRightOrElse(fallback(20))(left(10)) // 20
either.unwrapRightOrElse(fallback(30))(right(1)) // 1
```

<!-- tabs:end -->


## frompredicate

Creates a new `Either<T>` from a given `Predicate<T>`. 
If the predicate is satisfied, it returns `Right<T>`, otherwise returns `Left<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

either.frompredicate(num.iseven)(20) // Right<20>
either.frompredicate(num.iseven)(11) // Left<11>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

either.frompredicate(num.iseven)(20) // Right<20>
either.frompredicate(num.iseven)(11) // Left<11>
```

<!-- tabs:end -->


## leftfromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Left<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const fn = either.leftfromfunction(num.uadd(5));

fn(10) // Left<15>
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->


## rightfromfunction

Wraps a function `FnUnary<A, T>`, and once called it returns a `Right<T>`

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const fn = either.rightfromfunction(num.uadd(5));

fn(10) // Right<15>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const fn = either.rightfromfunction(num.uadd(5));

fn(10) // Right<15>
```

<!-- tabs:end -->


## fromfunction

Wraps a function `FnUnary<A, T>` and if the given `Predicate<T>` is satisfied, returns `Right<T>`. Otherwise returns `Left<T>`.

<!-- tabs:start -->

#### **node**

```ts
import { either, num } from 'tiinvo';

const fn = either.fromfunction(num.usubtract(1), num.iseven);

fn(10) // Left<9>
fn(11) // Right<10>
```

#### **deno/esm**

```ts
import { either, num } from 'https://cdn.skypack.dev/tiinvo?dts';

const fn = either.fromfunction(num.usubtract(1), num.iseven);

fn(10) // Left<9>
fn(11) // Right<10>
```

<!-- tabs:end -->

