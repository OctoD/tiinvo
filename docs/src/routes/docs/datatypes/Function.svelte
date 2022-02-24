<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Function" description="Function methods" />

<article>
  <DocTitle version="3.2.0">Function</DocTitle>
</article>

<article>
  <DocItemTitle title="map" />
  <p>
    Maps an array of functions <code>a</code> over an argument <code>b</code>.
  </p>
  <SinceVersion>3.2.0</SinceVersion>
  <PrismJs
    code={`
import { Function, Number, String, Array, Pipe } from 'tiinvo'

const chars = String.chars;
const upperc = Pipe.pipe(String.chars, Array.map(String.upper));
const m = Function.map(chars, upperc);

m('abc') // [['a', 'b', 'c'], ['A', 'B', 'C']]
 `}
    language="ts"
  />
</article>
