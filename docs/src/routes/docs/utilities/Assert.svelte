<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Assert" description="Assert" />

<h2>Assert</h2>

<article>
  <DocItemTitle title="check" />
  <p>Checks if a condition is true, otherwise throws an error.</p>
  <SinceVersion>3.3.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Assert } from 'tiinvo';

Assert.check(true, 'This will not throw an error'); // undefined
Assert.check(false, 'This will throw an error');    // throws an error
    `}
  />
</article>

<article>
  <DocItemTitle title="checkr" />
  <p>Checks if a condition is true, otherwise returns a err.</p>
  <SinceVersion>3.3.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Assert } from 'tiinvo';

Assert.checkr(true, 'This will not throw an error'); // undefined
Assert.checkr(false, 'This will throw an error');    // Error('This will throw an error')
    `}
  />
</article>

<article>
  <DocItemTitle title="make" />
  <p>Returns a function that checks if a predicate is satisfied, otherwise throws an error.</p>
  <SinceVersion>3.3.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Assert, Number } from 'tiinvo';

const check = Assert.make(Number.isEven, 'number is not even');

check(2); // undefined
check(3); // throws Error('number is not even')
    `}
  />
</article>

<article>
  <DocItemTitle title="make" />
  <p>Returns a function that checks if a predicate is satisfied, otherwise returns a err.</p>
  <SinceVersion>3.3.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Assert, Number } from 'tiinvo';

const check = Assert.maker(Number.isEven, 'number is not even');

check(2); // undefined
check(3); // Error('number is not even')
    `}
  />
</article>
