Filterables are functions for `TaggedType`s which filter them with a `Predicate` and,
if it's not satisfied, return another `TaggedType`.

A good example of it's implementation is the `filter` in `Option`.

```ts

const myfilter = option.filter(num.greaterthan(10));
const max10 = option.filter(
  option.some(10), 
  num.lessthan(10)
);

myfilter(option.some(10)) // returns `None`
myfilter(option.some(11)) // returns `Some<11>`

max10(option.some(10))    // returns `Some<10>`
max10(option.some(18))    // returns `Some<10>`
max10(option.some(5))     // returns `Some<5>`
```

If you created a new `TaggedType`, you can create your filter and filterOr functions using `createFilter` and `createFilterOr`.

<!-- tabs:start --->

#### **node**

```ts
import { createFilter, createFilterOr, isTaggedWith, taggedFactory, Tagged } from 'tiinvo';

const tag1 = `tag1`
const tag2 = `tag2`

type tag1 = typeof tag1;
type tag2 = typeof tag2;
type mytagged = tag1 | tag2;

const mytagged1 = taggedFactory(tag1)
const mytagged2 = taggedFactory(tag2)
const mytagged = <T>(arg: T) => typeof arg === 'object' ? mytagged1(arg) : mytagged2(arg);

interface Mytagged1<T> extends Tagged<T, tag1> { }
interface Mytagged2<T> extends Tagged<T, tag2> { }
type Mytagged<T = any> = Mytagged1<T> | Mytagged2<T>;

const istagged1 = isTaggedWith(tag1);

const filter = createFilter<Mytagged, mytagged>(istagged1, mytagged1, mytagged2);
const filterOr = createFilterOr<Mytagged, mytagged>(istagged1, mytagged1);

filter(mytagged({ hello: `world` }))  // Mytagged1<{ hello: "world" }>
filter(mytagged(100))                 // Mytagged2<100>
filterOr(
  mytagged1({}), 
  mytagged({ hello: `world` })
)                                     // Mytagged1<{ hello: "world" }>
filterOr(
  mytagged1({}), 
  mytagged(100)
)                                     // Mytagged1<{}>
```

#### **deno/esm**

```ts
import { createFilter, createFilterOr, isTaggedWith, taggedFactory, Tagged } from 'https://cdn.skypack.dev/tiinvo?dts';

const tag1 = `tag1`
const tag2 = `tag2`

type tag1 = typeof tag1;
type tag2 = typeof tag2;
type mytagged = tag1 | tag2;

const mytagged1 = taggedFactory(tag1)
const mytagged2 = taggedFactory(tag2)
const mytagged = <T>(arg: T) => typeof arg === 'object' ? mytagged1(arg) : mytagged2(arg);

interface Mytagged1<T> extends Tagged<T, tag1> { }
interface Mytagged2<T> extends Tagged<T, tag2> { }
type Mytagged<T = any> = Mytagged1<T> | Mytagged2<T>;

const istagged1 = isTaggedWith(tag1);

const filter = createFilter<Mytagged, mytagged>(istagged1, mytagged1, mytagged2);
const filterOr = createFilterOr<Mytagged, mytagged>(istagged1, mytagged1);

filter(mytagged({ hello: `world` }))  // Mytagged1<{ hello: "world" }>
filter(mytagged(100))                 // Mytagged2<100>
filterOr(
  mytagged1({}), 
  mytagged({ hello: `world` })
)                                     // Mytagged1<{ hello: "world" }>
filterOr(
  mytagged1({}), 
  mytagged(100)
)                                     // Mytagged1<{}>
```

<!-- tabs:end --->