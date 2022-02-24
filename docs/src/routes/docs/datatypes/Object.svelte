<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Object" description="Object methods" />

<article>
  <DocTitle>Object</DocTitle>
  <p>
    Has almost all native methods of native <code>Object</code> API, along with many new one.
  </p>
</article>

<article>
  <DocItemTitle title="assign" />
  <p>
    Copy the values of all of the enumerable own properties from one or more
    source objects to a target object. Returns the target object.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = { c: 5, d: 6 };

Object.assign(a, b, c);      // { a: 1, b: 3, c: 5, d: 6 }
  `}
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares two objects deeply.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const a = { a: 1, b: { c: 2 } };
const b = { a: 1, b: { c: 2 } };
const c = { a: 1, b: { c: 3 } };

Object.cmp(a, b); // 0
Object.cmp(a, c); // -1
Object.cmp(c, a); // 1
  `}
  />
</article>
<article>
  <DocItemTitle title="defineProperty" />
  <p>
    Adds a property to an object, or modifies attributes of an existing
    property.
  </p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const a = { a: 1, b: 2 };
Obj.defineProperty(a, 'c', { value: 3, enumerable: true, configurable: true, writable: true });
// { a: 1, b: 2, c: 3 }
  `}
  />
</article>
<article>
  <DocItemTitle title="flat" />
  <p>Returns a flat representation for <code>a</code>.</p>
  <p>Ideal to use it for diff or for mongodb queries/inserts.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const myobject = {
   a: {
     b: {
       c: 100
     }
   },
   d: 20
}

Object.flat(myobject) // { 'a.b.c': 100, d: 20 }
  `}
  />
</article>
<article>
  <DocItemTitle title="freeze" />
  <p>
    Prevents the modification of existing property attributes and values, and
    prevents the addition of new properties.
  </p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const a = { a: 1, b: 2 };
Obj.freeze(a);
a.a = 100; // throws;
  `}
  />
</article>
<article>
  <DocItemTitle title="fromEntries" />
  <p>
    Returns an object created by key-value entries for properties and methods.
  </p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const fromEntries = Object.fromEntries([
  ['a', 1], 
  ['b', 2]
]);

console.log(fromEntries); // { a: 1, b: 2 }
  `}
  />
</article>
<article>
  <DocItemTitle title="get" />
  <p>
    Gets a property <code>a</code> from an object <code>b</code> and returns a
    <code>option&lt;c&gt;</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const get = Object.get("foo");

console.log(get({ foo: "bar" })); // some<"bar">
console.log(get({})); // none
  `}
  />
</article>
<article>
  <DocItemTitle title="guard" />
  <p>Returns true if a is a <code>object</code> and not null</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

console.log(Object.isobject({})); // true
console.log(Object.isobject(null)); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="guardOf" />
  <p>
    Returns <code>true</code> if a value <code>v</code> implements a shape
    <code>s</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Obj, String, Number, Boolean } from 'tiinvo';

const isshape = Object.guardOf({
   a: String.guard,
   b: Number.guard,
   c: Boolean.guard
});

console.log(isshape({ a: "foo", b: 1, c: true })); // true
console.log(isshape({ a: "foo", b: false, c: 1 })); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="entries" />
  <p>Returns object entries</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const entries = Object.entries({ a: 1, b: 2 });
console.log(entries); // [ ['a', 1], ['b', 2] ]
  `}
  />
</article>
<article>
  <DocItemTitle title="haskey" />
  <p>
    Returns true if a is a <code>object</code> and has property <code>k</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const hasa = Object.haskey('a');
console.log(hasa({})); // false
console.log(hasa({ a: 1 })); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="haskeyOf" />
  <p>
    Returns true if a is a <code>object</code> and has property <code>k</code>
    of type <code>g</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const hasa = Object.haskeyOf('a', num.guard);

console.log(hasa({})); // false
console.log(hasa({ a: 1 })); // true
console.log(hasa({ a: "nope" })); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="keys" />
  <p>
    Returns the names of the enumerable string properties and methods of an
    object.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

console.log(Object.keys({ a: 1, b: 2 })); // ['a', 'b']
console.log(Object.keys({})); // []
  `}
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>Maps a function over the entries of an object.</p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object, Number } from 'tiinvo';

const map = Object.map(Number.umul(2));
const map2 = obj.map((a: number | string | boolean) => {
  switch (typeof a) {
    case 'number': return a * 2;
    case 'string': return a + a;
    case 'boolean': return !a;
  }
})
console.log(map({ a: 1, b: 2 })); // { a: 2, b: 4 }
console.log(map2({ a: 2, b: 'hello', c: true })); // { a: 4, b: 'hellohello', c: false }
  `}
  />
</article>
<article>
  <DocItemTitle title="mapkeys" />
  <p>Maps a function over the keys of an object.</p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object, String } from 'tiinvo';

const map = Object.mapkeys(String.upper);
console.log(map({ a: 1, b: 2 })); // { A: 1, B: 2 }
  `}
  />
</article>
<article>
  <DocItemTitle title="omit" />
  <p>Omits the keys in <code>a</code> that are in <code>b</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const omit = Object.omit(['a', 'b']);
console.log(omit({ a: 1, b: 2, c: 3 })); // { c: 3 }
console.log(omit({ a: 1, b: 2 })); // {}
  `}
  />
</article>
<article>
  <DocItemTitle title="pick" />
  <p>
    Returns a new object with the keys of <code>a</code> that are in
    <code>b</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

const pick = Object.pick(['a', 'b']);
console.log(pick({ a: 1, b: 2, c: 3 })); // { a: 1, b: 2 }
console.log(pick({ a: 1, b: 2 })); // { a: 1, b: 2 }
  `}
  />
</article>
<article>
  <DocItemTitle title="size" />
  <p>Returns an object size</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

console.log(Object.size({ a: 1, b: 2 })); // 2
console.log(Object.size({})); // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="values" />
  <p>Returns an array of values of the enumerable properties of an object</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Object } from 'tiinvo';

console.log(Object.values({ a: 1, b: 2 })); // [1, 2]
console.log(Object.values({})); // []
  `}
  />
</article>
