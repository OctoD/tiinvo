<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Predicate" description="Predicate methods" />

<article>
  <DocTitle>Predicate</DocTitle>
  <p class="mb-4">
    Predicates are functions which usually accept one argument and always return a <code>boolean</code>.
  </p>
  <p class="mb-4">
    They are used as argument by other functions like <code>Option.filter</code> or <code>Array.some</code> to determine if some conditions are met.
  </p>
</article>

<article>
  <DocItemTitle title="and" />
  <p>Combines two or more predicates in one.</p>
  <p>If all predicates are satisfied returns true, otherwise return false</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate, Number } from 'tiinvo';

const and = Predicate.and(Number.gt(3), Number.lt(10));

and(5) // true
and(2) // false
    `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Returns true if <code>b</code> strictly equals to <code>a</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate } from 'tiinvo';

const eq = Predicate.eq(0)

eq(10)  // false
eq(0)   // true
    `}
  />
</article>
<article>
  <DocItemTitle title="invert" />
  <p>Inverts the result of a Predicate</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate, Number } from 'tiinvo';

const i = Predicate.invert(Number.gt(0))

i(10) // false
i(-1) // true
    `}
  />
</article>
<article>
  <DocItemTitle title="neq" />
  <p>Returns true if <code>b</code> is not stricly equal to <code>a</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate } from 'tiinvo';

const neq = Predicate.neq(0)

neq(10) // true
neq(0)  // false
    `}
  />
</article>
<article>
  <DocItemTitle title="noneof" />
  <p>Combines two or more predicates in one.</p>
  <p>Returns true if none of them is satisfied, otherwise returns false</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate, Number } from 'tiinvo';

const n = Predicate.noneof(Number.gt(0), Number.isEven);

n(4)  // false
n(5)  // false
n(-4) // false
n(-5) // true
    `}
  />
</article>
<article>
  <DocItemTitle title="or" />
  <p>Combines two or more predicates in one.</p>
  <p>
    Returns true if at least one predicate is satisfied, otherwise returns false
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Predicate, Number } from 'tiinvo';

const or = Predicate.or(Number.gt(0), Number.isEven);

or(0) // false
or(1) // false
or(2) // true
    `}
  />
</article>
