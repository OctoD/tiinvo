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

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## swap 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->



## mapLeft 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapRight 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapLeftOr 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapRightOr 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapLeftOrElse 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## mapRigthOrElse 

<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapEither



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapLeft



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapRight



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapLeftOr



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapRightOr



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapLeftOrElse



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

## unwrapRightOrElse



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->


## frompredicate



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->


## leftfromfunction



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->


## rightfromfunction



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->


## fromfunction



<!-- tabs:start -->

#### **node**

```ts
import { either } from 'tiinvo';
```

#### **deno/esm**

```ts
import { either } from 'https://cdn.skypack.dev/tiinvo?dts';
```

<!-- tabs:end -->

