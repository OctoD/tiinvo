<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<svelte:head>
  <title>tiinvo - docs - Boolean</title>
  <meta name="description" content="Boolean methods" />
</svelte:head>

<h2>Boolean</h2>

<article>
  <DocItemTitle title="cmp" />
  <p>Compares two booleans.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Boolean } 'tiinvo';

console.log(Boolean.cmp(true, true)) // 0
console.log(Boolean.cmp(true, false)) // 1
console.log(Boolean.cmp(false, true)) // -1
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="eq" />
  <p>
    Returns <code>true</code> if two booleans are equal, otherwise
    <code>false</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Boolean } 'tiinvo';

console.log(Boolean.eq(true, true)) // true
console.log(Boolean.eq(true, false)) // false
console.log(Boolean.eq(false, true)) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="flip" />
  <p>Flips a boolean.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Boolean } 'tiinvo';

console.log(Boolean.eq(true, true)) // true
console.log(Boolean.eq(true, false)) // false
console.log(Boolean.eq(false, true)) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Returns <code>true</code> if the given value is a <code>boolean</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Boolean } 'tiinvo';

console.log(Boolean.guard(true)) // true
console.log(Boolean.guard(false)) // true
console.log(Boolean.guard(1)) // false
console.log(Boolean.guard(null)) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="toBit" />
  <p>
    Converts a <code>boolean</code> to a <code>bit</code> (<code>0 | 1</code>).
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Boolean } 'tiinvo';

console.log(Boolean.toBit(true)) // 1
console.log(Boolean.toBit(false)) // 0
 `}
    language="ts"
  />
</article>
