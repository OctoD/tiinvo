<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Promise" description="Promise methods" />

<article>
  <DocTitle version="3.0.10">Promise</DocTitle>
</article>

<article>
  <DocItemTitle title="all" />
  <p>
    Creates a Promise that is resolved with an array of results when all of the
    provided Promises resolve, or rejected when any Promise is rejected.
  </p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

const p1 = Promise.resolve('hello');
const p2 = Promise.resolve('world');

Promise.all([p1, p2]).then(console.log); // => [ 'hello', 'world' ]
    `}
  />
</article>
<article>
  <DocItemTitle title="make" />
  <p>Creates a new Promise.</p>
  <SinceVersion>3.4.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

Promise.make(r => r(1)).then(console.log); // => 1
Promise.make((_, r) => r(1)).catch(console.error); // => 1
    `}
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>Maps a promise to a new promise.</p>
  <p>
    If the promise catches, the new promise returns <code>err</code>, otherwise
    returns <code>ok&lt;b&gt;</code>.
  </p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

const p1 = Promise.resolve('hello');
const p2 = Promise.reject('whoops');
const map = Promise.map((a: string) => a.length);

map(p1).then(console.log); // => 5
map(p2).then(console.log); // => Error('whoops')
    `}
  />
</article>
<article>
  <DocItemTitle title="mapOr" />
  <p>
    Maps a <code>promise&lt;a&gt;</code> to a new <code>promise&lt;b&gt;</code>
    if it does not catch, otherwise maps to a <code>promise&lt;or&gt;</code>.
  </p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

const p1 = Promise.resolve('hello');
const p2 = Promise.reject('whoops');
const fn = (a: string) => a.length;
const map = Promise.mapOr(0, fn);

map(p1).then(console.log); // => 5
map(p2).then(console.log); // => 0
    `}
  />
</article>
<article>
  <DocItemTitle title="mapOrElse" />
  <p>
    Maps a <code>promise&lt;a&gt;</code> to a new <code>promise&lt;b&gt;</code>
    if it does not catch, otherwise maps to a <code>promise&lt;or&gt;</code>.
  </p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise, Number } from 'tiinvo';

const el = Promise.mapOrElse(() => 0, Number.uadd(1));

el(Promise.resolve(0))      // Promise<1>
el(Promise.reject('aaaa'))  // Promise<0>
    `}
  />
</article>
<article>
  <DocItemTitle title="resolve" />
  <p>Creates a new resolved promise.</p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

Promise.resolve(100) // Promise<100>
    `}
  />
</article>
<article>
  <DocItemTitle title="reject" />
  <p>Creates a new rejected promise for the provided reason.</p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Promise } from 'tiinvo';

Promise.reject('arg') // Promise { <state>: "rejected", <reason>: "arg" }
    `}
  />
</article>
