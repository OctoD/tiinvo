<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<svelte:head>
  <title>tiinvo - docs - Tuple</title>
  <meta name="description" content="Tuple methods" />
</svelte:head>

<h2>Tuple</h2>

<article>
  <DocItemTitle title="cmp" />
  <p>Compares two tuples.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
  import { Tuple } from 'tiinvo';

const a: Tuple.tuple<[number, number, number]> = [1, 2, 3]
const b: Tuple.tuple<[number, number, number]> = [1, 2, 3]
const c: Tuple.tuple<[number, number, number]> = [1, 2, 4]
const d: Tuple.tuple<[number, number]> = [1, 2];

console.log(Tuple.cmp(a, b)) // 0
console.log(Tuple.cmp(a, c)) // -1
console.log(Tuple.cmp(c, a)) // 1
console.log(Tuple.cmp(d, a)) // -1
console.log(Tuple.cmp(a, d)) // 1
console.log(Tuple.cmp(null, a)) // -1
console.log(Tuple.cmp(null, undefined)) // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>
    Returns <code>true</code> if the tuple are equal, otherwise
    <code>false</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
    import { Tuple } from 'tiinvo';

const a: Tuple.tuple<[number, number, number]> = [1, 2, 3]
const b: Tuple.tuple<[number, number, number]> = [1, 2, 3]
const c: Tuple.tuple<[number, number, number]> = [1, 2, 4]
const d: Tuple.tuple<[number, number]> = [1, 2];

console.log(Tuple.eq(a, b)) // true
console.log(Tuple.eq(a, c)) // false
console.log(Tuple.eq(c, a)) // false
console.log(Tuple.eq(d, a)) // false
console.log(Tuple.eq(a, d)) // false
console.log(Tuple.eq(null, a)) // false
console.log(Tuple.eq(null, undefined)) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="guardOf" />
  <p>Makes a guard function from a tuple of guards.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number, String, Tuple } from 'tiinvo';

const guard = Tuple.guardOf(Number.guard, String.guard, Number.guard);

guard([1, 'a', 2]); // true
guard([1, 'a', 'b']); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="get" />
  <p>
    Gets the first element <code>a</code> of a tuple as an
    <code>option&lt;a[i]&gt;</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Tuple } from 'tiinvo';

Tuple.get(2)([1, 2, 3]); // 3
Tuple.get(2)([1, 2]);    // null
  `}
  />
</article>
<article>
  <DocItemTitle title="intersect" />
  <p>
    Intersects two tuples <code>a</code> and <code>b</code> returning a new
    <code>tuple&lt;c&gt;</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Tuple } from 'tiinvo';

Tuple.intersect([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
Tuple.intersect([1, 2, 3])([1, 2, 4]); // [1, 2]
Tuple.intersect([1, 2, 3])([1, 2, 4, 5]); // [1, 2]
  `}
  />
</article>
<article>
  <DocItemTitle title="length" />
  <p>Returns tuple length</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Tuple } from 'tiinvo';

Tuple.length([1, 2, 3]); // 3
Tuple.length([1, 2, 3, 4, 5]); // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>
    Maps a <code>tuple&lt;a&gt;</code> to a <code>tuple&lt;b&gt;</code> using
    some functions <code>m[]</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Tuple } from 'tiinvo';

const m = [
  (a: number) => a + 1,
  (a: number) => a * 2,
  (a: number) => a * 3
];

Tuple.map(m)([1, 2, 3]); // [2, 4, 6]
  `}
  />
</article>
<article>
  <DocItemTitle title="union" />
  <p>Returns the union of two tuples <code>a</code> and <code>b</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Tuple } from 'tiinvo';

Tuple.union([1, 2, 3])([1, 2, 3]); // [1, 2, 3]
Tuple.union([1, 2, 3])([1, 2, 4]); // [1, 2, 3, 4]
Tuple.union([1, 2, 3])([1, 2, 4, 5]); // [1, 2, 3, 4, 5]
  `}
  />
</article>
