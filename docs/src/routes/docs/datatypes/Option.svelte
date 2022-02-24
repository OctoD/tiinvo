<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
import DocTitle from '$lib/DocTitle.svelte';
import Note from '$lib/Note.svelte';
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle
  title="docs - Option"
  description="Option JavaScript type"
  keywords="option,null,undefined"
/>

<article>
  <DocTitle>Option</DocTitle>
  <p class="mb-4">
    Reprents a value that could be possible <code>a</code>, <code>null</code> or <code>undefined</code>.
  </p>
  <Note>
    Null and undefined are treated the same way. If a function could return none, the underlying value will be null.
  </Note>
</article>

<article>
  <DocItemTitle title="isNone" />
  <p>
    Returns <code>true</code> if the option is <code>none</code>,
    <code>false</code> otherwise.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

Option.isNone(1); // false
Option.isNone(null); // true
Option.isNone(undefined); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="isSome" />
  <p>
    Returns <code>true</code> if the option is <code>some</code>,
    <code>false</code> otherwise.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

Option.isSome(1); // true
Option.isSome(null); // false
Option.isSome(undefined); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="isOptionOf" />
  <p>
    Returns <code>true</code> if the option is <code>some</code> and the value
    type is satisfied by the guard, otherwise <code>false</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined
const w = "a"
 
const isnumsome = Option.isOptionOf(num.guard);
 
isnumsome(x); // true
isnumsome(y); // true
isnumsome(z); // true
isnumsome(w); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares two options for equality.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined
 
Option.eq(x, y); // 1
Option.eq(x, z); // 1
Option.eq(y, z); // 0
Option.eq(x, x); // 0
Option.eq(z, x); // -1
  `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Returns true if two options are equal.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined

Option.eq(x, y); // false
Option.eq(x, z); // false
Option.eq(y, z); // true
Option.eq(x, x); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="filter" />
  <p>
    Returns some if the value is some and the predicate returns true, otherwise
    returns none.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option, Number } from 'tiinvo';
 
const p = Number.gt(1);
const f = Option.filter(p);
 
f(1);    // null
f(2);    // 2
f(null); // null
  `}
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>
    Maps an <code>option&lt;a&gt;</code> to another <code>option&lt;b&gt;</code>
    if is <code>some&lt;a&gt;</code>, otherwise returns none.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option, Number } from 'tiinvo';
 
const m = Option.map(Number.uadd(1));
 
m(1);    // 2
m(null); // null
  `}
  />
</article>
<article>
  <DocItemTitle title="mapOr" />
  <p>
    Maps an <code>option&lt;a&gt;</code> to another <code>option&lt;b&gt;</code>
    if is <code>some&lt;a&gt;</code>, otherwise returns `or`.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option, Number } from 'tiinvo';

const m = Option.mapOr(0, Number.uadd(2));

m(1);    // 3
m(null); // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="mapOrElse" />
  <p>
    Maps an <code>option&lt;a&gt;</code> to another <code>option&lt;b&gt;</code>
    if is <code>some&lt;a&gt;</code>, otherwise calls `orElse`.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option, Number } from 'tiinvo';

const m = Option.mapOrElse(() => 0, Number.uadd(2));

m(1);    // 3
m(null); // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrap" />
  <p>
    Returns the boxed value if the option is <code>some</code>, otherwise throws
    an `Error`.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined

Option.unwrap(x); // 1
Option.unwrap(y); // throws Error
Option.unwrap(z); // throws Error
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrapOr" />
  <p>
    Returns the boxed value if the option is <code>some</code>, otherwise
    returns `or`.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined

const f = Option.unwrapOr(0);

f(x);    // 1
f(y);    // 0
f(z);    // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrapOrElse" />
  <p>
    Returns the boxed value if the option is <code>some</code>, otherwise calls
    `orElse`.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Option } from 'tiinvo';

const x = 1
const y = null
const z = undefined

const f = Option.unwrapOrElse(() => 0);

f(x);    // 1
f(y);    // 0
f(z);    // 0
  `}
  />
</article>
