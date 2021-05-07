# Conversion

## toExponential

Returns a string containing a number represented in exponential notation.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.toExponential(2) // '2e+0'
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.toExponential(2) // '2e+0'
```

<!-- tabs:end --->

## toFixed

Returns a string representing a number in fixed-point notation.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.toFixed(2)(2) // '2.00'
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.toFixed(2)(2) // '2.00'
```

<!-- tabs:end --->

## toPrecision

Returns a string representing a number in fixed-point notation.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.toPrecision(2)(2) // '2.0'
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.toPrecision(2)(2) // '2.0'
```

<!-- tabs:end --->

## toString

Converts a numeric to a string type

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.toString()(2) // '2'
num.toString(2)(2) // '10'
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.toString()(2) // '2'
num.toString(2)(2) // '10'
```

<!-- tabs:end --->

## Predicates

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.equals(2)(3)            // false
num.greaterthan(2)(3)       // true
num.greaterequalthan(2)(3)  // true
num.lessthan(2)(3)          // false
num.lessequalthan(2)(3)     // false
num.inrange(0,5)(3)         // true
num.outofrange(0,2)(3)      // true
num.iseven(3)               // false
num.isodd(3)                // true
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.equals(2)(3)            // false
num.greaterthan(2)(3)       // true
num.greaterequalthan(2)(3)  // true
num.lessthan(2)(3)          // false
num.lessequalthan(2)(3)     // false
num.inrange(0,5)(3)         // true
num.outofrange(0,2)(3)      // true
num.iseven(3)               // false
num.isodd(3)                // true
```

<!-- tabs:end --->


## Unary operations

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.uadd(2)(2)                // 4
num.udivide(5)(10)            // 2
num.umax(5)(2)                // 5
num.umin(2)(5)                // 2
num.umultiply(2)(2)           // 4  
num.upow(8)(2)                // 256
num.uremainder(4.5)(2)        // .5    
num.uroot(2)(9)               // 3
num.usubtract(2)(6)           // 4  
num.urandomint(0)(5)          // a random int between 0 and 5    
num.urandomfloat(0)(5)        // a random float between 0 and 5    
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.uadd(2)(2)                // 4
num.udivide(5)(10)            // 2
num.umax(5)(2)                // 5
num.umin(2)(5)                // 2
num.umultiply(2)(2)           // 4  
num.upow(8)(2)                // 256
num.uremainder(4.5)(2)        // .5    
num.uroot(2)(9)               // 3
num.usubtract(2)(6)           // 4  
num.urandomint(0)(5)          // a random int between 0 and 5    
num.urandomfloat(0)(5)        // a random float between 0 and 5    
```

<!-- tabs:end --->

## Binary operations

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.badd(2, 2)                // 4
num.bdivide(10, 5)            // 2
num.bmax(2, 5)                // 5
num.bmin(2, 5)                // 2
num.bmultiply(2, 2)           // 4  
num.bpow(2, 8)                // 256
num.bremainder(4.5, 2)        // .5    
num.broot(9, 2)               // 3
num.bsubtract(6, 2)           // 4  
num.brandomint(0, 5)          // a random int between 0 and 5    
num.brandomfloat(0, 5)        // a random float between 0 and 5    
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.badd(2, 2)                // 4
num.bdivide(10, 5)            // 2
num.bmax(2, 5)                // 5
num.bmin(2, 5)                // 2
num.bmultiply(2, 2)           // 4  
num.bpow(2, 8)                // 256
num.bremainder(4.5, 2)        // .5    
num.broot(9, 2)               // 3
num.bsubtract(6, 2)           // 4  
num.brandomint(0, 5)          // a random int between 0 and 5    
num.brandomfloat(0, 5)        // a random float between 0 and 5    
```

<!-- tabs:end --->


## brangeint

Returns an array for the given numeric range. Each number in range is integer.
It throws if `min` is greater than `max`.
Note: the range is always inclusive, so if you set the min to `0` and max to `5`, you
will get all integer numbers between `0` and `5 `included.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.brangeint(0, 5) // [0, 1, 2, 3, 4, 5];   
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.brangeint(0, 5) // [0, 1, 2, 3, 4, 5];   
```

<!-- tabs:end --->


## urangeint

The unary version for `num.brangeint`.
First function accepts the `min`, returned function accepts `max`.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.urangeint(0)(5) // [0, 1, 2, 3, 4, 5];   
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.urangeint(0)(5) // [0, 1, 2, 3, 4, 5];   
```

<!-- tabs:end --->

## urangeint2

The unary version for `num.brangeint`.
First function accepts the `min`, returned function accepts `max`.

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

num.urangeint2(5)(0) // [0, 1, 2, 3, 4, 5];   
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

num.urangeint2(5)(0) // [0, 1, 2, 3, 4, 5];   
```

<!-- tabs:end --->

## Sort functions

<!-- tabs:start --->

#### **node**

```ts
import { num } from 'tiinvo';

const test = [0, 2, 5, 3, 1, 4]

test.sort(num.sortasc);   // [0, 1, 2, 3, 4, 5];
test.sort(num.sortdesc);  // [5, 4, 3, 2, 1, 0];
```

#### **deno/esm**

```ts
import { num } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = [0, 2, 5, 3, 1, 4]

test.sort(num.sortasc);   // [0, 1, 2, 3, 4, 5];
test.sort(num.sortdesc);  // [5, 4, 3, 2, 1, 0];
```

<!-- tabs:end --->