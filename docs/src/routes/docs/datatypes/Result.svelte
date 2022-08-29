<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Result" description="Result methods" />

<article>
  <DocTitle>Result</DocTitle>
  <p>
    Result represents a value that could be both <code>ok</code> or <code>err</code>.
  </p>
</article>

<article>
  <DocItemTitle title="err" />
  <p>Returns an <code>err</code></p>
  <SinceVersion>3.8.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.err(10)                    instanceof Error // true
Result.err(new TypeError('aaaa')) instanceof Error // true
Result.err({})                    instanceof Error // true
Result.err(10n)                   instanceof Error // true
Result.err([10, 20, 30])          instanceof Error // true
  `}
  />
</article>

<article>
  <DocItemTitle title="isErr" />
  <p>Checks if a value is <code>err</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.isErr(10)                    // false
Result.isErr(new TypeError('aaaa')) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="isOk" />
  <p>Checks if a value is <code>ok</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.isOk(10)                    // true
Result.isOk(new TypeError('aaaa')) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="isResultOf" />
  <p>
    Checks if a value is <code>ok</code> and satisfies the type
    <code>guard</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result, Number } from 'tiinvo';

const isnumok = Result.isResultOf(Number.guard);

isnumok(new Error(10)) // false
isnumok(1_000_000_000) // true
isnumok("lorem ipsum") // false
  `}
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares two <code>result</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.cmp(10, 0)                     // 1
Result.cmp(0, 10)                     // -1
Result.cmp(0, 0)                      // 0
Result.cmp(new Error(), 0)            // 0
Result.cmp(new Error(), new Error())  // 0
Result.cmp(0, new Error())            // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="filter" />
  <p>
    Filters <code>ok</code> with a predicate <code>p</code> if <code>ok</code>
  </p>
  <p>
    If the predicate is satisfied, returns <code>ok</code> otherwise
    <code>err</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result, Number } from 'tiinvo';

const o = Result.filter(Number.isOdd)

o(10)               // Error("10 is not ok")
o(11)               // 11
o(new Error())      // Error()
  `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Returns true if two results are equal, false otherwise.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.eq(0, 0)                         // true
Result.eq(new Error(), new TypeError()) // true
Result.eq(new Error(), 0)               // false
Result.eq(1_000_000, 0)                 // false
  `}
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>
    Maps <code>result&lt;a&gt;</code> to <code>result&lt;b&gt;</code> if ok,
    otherwise returns <code>err</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result, Number } from 'tiinvo';

const m = Result.map(Number.uadd(10))

m(10)                   // 20
m(new Error('foobar!')) // Error('foobar!')
  `}
  />
</article>
<article>
  <DocItemTitle title="mapOr" />
  <p>
    Maps <code>result&lt;a&gt;</code> to <code>result&lt;b&gt;</code> if ok,
    otherwise returns <code>or</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result, String } from 'tiinvo';

const map = Result.mapOr(0, String.length);

map('hello')        // 5
map(new Error())    // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="mapOrElse" />
  <p>
    Maps <code>result&lt;a&gt;</code> to <code>result&lt;b&gt;</code> if ok,
    otherwise calls and returns <code>or</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result, Boolean } from 'tiinvo';

const map = Result.mapOrElse(() => 0, Boolean.toBit)

map(true)           //  1
map(false)          //  0
map(new Error())    //  0
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrap" />
  <p>Unwraps value if ok, otherwise throws</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

Result.unwrap(10)           // 10
Result.unwrap(new Error())  // throws
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrapOr" />
  <p>Unwraps value if ok, otherwise returns or</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

const u = Result.unwrapOr(0);

u(10)           // 10
u(new Error())  // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="unwrapOrElse" />
  <p>Unwraps value if ok, otherwise calls and returns or</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Result } from 'tiinvo';

const u = Result.unwrapOrElse(() => 0);

u(10)           // 10
u(new Error())  // 0
  `}
  />
</article>
