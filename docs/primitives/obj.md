## entries

Returns an array of key/values of the enumerable properties of an object

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

obj.entries({ foo: 10, bar: 20 }) // [["foo", 10], ["bar", 20]]
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

obj.entries({ foo: 10, bar: 20 }) // [["foo", 10], ["bar", 20]]
```

<!-- tabs:end --->

## flattern

Returns a flat object of `T`. 
Ideal to use it for mongodb queries/inserts.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const myobject = {
   a: {
     b: {
       c: 100
     }
   },
   d: 20
}

obj.flattern(myobject) // { 'a.b.c': 100, d: 20 }
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const myobject = {
   a: {
     b: {
       c: 100
     }
   },
   d: 20
}

obj.flattern(myobject) // { 'a.b.c': 100, d: 20 }
```

<!-- tabs:end --->

## is

Returns `true` if the object `T` and object `U` values are the same, `false` otherwise.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

obj.is({ lorem: "ipsum" })({ lorem: "ipsum" }) // true
obj.is({ foo: 100 })({ bar: 200 }) // false
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

obj.is({ lorem: "ipsum" })({ lorem: "ipsum" }) // true
obj.is({ foo: 100 })({ bar: 200 }) // false
```

<!-- tabs:end --->

## isExtensible

Returns a value that indicates whether new properties can be added to an object.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isExtensible(test) // true

Object.preventExtensions(test);

obj.isExtensible(test) // false
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = { foo: 100 }

obj.isExtensible(test) // true

Object.preventExtensions(test);

obj.isExtensible(test) // false
```

<!-- tabs:end --->

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

## isFrozen

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isFrozen(test) // false

Object.freeze(test);

obj.isFrozen(test) // true
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = { foo: 100 }

obj.isFrozen(test) // false

Object.freeze(test);

obj.isFrozen(test) // true
```

<!-- tabs:end --->

## isSealed

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const test = { foo: 100 }

obj.isSealed(test) // false

Object.seal(test);

obj.isSealed(test) // true
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = { foo: 100 }

obj.isSealed(test) // false

Object.seal(test);

obj.isSealed(test) // true
```

<!-- tabs:end --->

## keys

Returns the names of the enumerable string properties and methods of an object.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

obj.keys({ foo: 1, bar: 2, baz: 3 }) // ["foo", "bar", "baz"]
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

obj.keys({ foo: 1, bar: 2, baz: 3 }) // ["foo", "bar", "baz"]
```

<!-- tabs:end --->

## mapkey

Creates a mapper function for the type `T`. 

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const test = { foo: 200, bar: 'baz' };

const map = obj.mapkey<typeof test>('foo')

map(test) // 200
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = { foo: 200, bar: 'baz' };

const map = obj.mapkey<typeof test>('foo')

map(test) // 200
```

<!-- tabs:end --->

## omit

Omits from a set of keys `Keys` from an object `o`.

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const myobject = { foo: 10, bar: 20, baz: 'qwerty' };

omit('foo', 'bar')(myobject) // { baz: 'qwerty' }
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const myobject = { foo: 10, bar: 20, baz: 'qwerty' };

omit('foo', 'bar')(myobject) // { baz: 'qwerty' }
```

<!-- tabs:end --->

## pick

Given a set of properties `T` whose keys are in the object `U`, returns a new object with all picked properties

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

const test = { foo: 100, bar: 200, baz: 300 };

obj.pick(`foo`, `baz`)(test) // { foo: 100, baz: 300 }
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

const test = { foo: 100, bar: 200, baz: 300 };

obj.pick(`foo`, `baz`)(test) // { foo: 100, baz: 300 }
```

<!-- tabs:end --->

## values

Returns an array of values of the enumerable properties of an object

<!-- tabs:start --->

#### **node**

```ts
import { obj } from 'tiinvo';

obj.values({ foo: 1, bar: 2, baz: 3 }) // [1, 2, 3]
```

#### **deno/esm**

```ts
import { obj } from 'https://cdn.skypack.dev/tiinvo?dts';

obj.values({ foo: 1, bar: 2, baz: 3 }) // [1, 2, 3]
```

<!-- tabs:end --->
