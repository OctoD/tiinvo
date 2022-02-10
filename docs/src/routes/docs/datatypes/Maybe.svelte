<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Maybe" description="Maybe methods" />

<h2>Maybe</h2>

<article>
  <DocItemTitle title="isJust" />
  <p>Checks if a value is <code>just</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

console.log(Maybe.isJust("hello"))  // true
console.log(Maybe.isJust(10))       // true
console.log(Maybe.isJust(true))     // true
console.log(Maybe.isJust(false))    // false
console.log(Maybe.isJust(0))        // false
console.log(Maybe.isJust(""))       // false
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="isNothing" />
  <p>Checks if a value is <code>nothing</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

console.log(Maybe.isNothing("hello"))  // false
console.log(Maybe.isNothing(10))       // false
console.log(Maybe.isNothing(true))     // false
console.log(Maybe.isNothing(false))    // true
console.log(Maybe.isNothing(0))        // true
console.log(Maybe.isNothing(""))       // true
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="isMaybeOf" />
  <p>
    If a <code>maybe</code> is <code>just</code>, checks that the
    <code>guard</code> is satisfied
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe, Number } from 'tiinvo'

const isJustANumber = Maybe.isMaybeOf(Number.guard);

console.log(isJustANumber(10))              // true
console.log(isJustANumber(null))            // true
console.log(isJustANumber("hello world"))   // false
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares two <code>maybe</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

Maybe.cmp(10, 10)       // 0
Maybe.cmp(10, 20)       // -1
Maybe.cmp(20, 10)       // 1
Maybe.cmp(0, 0)         // 0
Maybe.cmp(0, null)      // 0
Maybe.cmp(null, null)   // 0
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Checks if two <code>maybe</code> are equal</p>
  <p>
    Two <code>maybe</code> are equal when both are <code>nothing</code> or when
    both are <code>just</code> and have the same type and value (if primitives) or
    the same pointer (in case of other objects)
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

Maybe.cmp(10, 10)       // true
Maybe.cmp(10, 20)       // false
Maybe.cmp(20, 10)       // false
Maybe.cmp(0, 0)         // true
Maybe.cmp(0, null)      // true
Maybe.cmp(null, null)   // true
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="filter" />
  <p>
    Returns <code>value</code> if <code>just</code> and the predicate
    <code>filter</code>
    is satisfied, otherwise returns <code>nothing</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe, Number } from 'tiinvo'

const f = Maybe.filter(Number.gt(5));

f(10)   // 10
f(5)    // null
f(3)    // null
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="map" />
  <p>
    Maps a value <code>a</code> to a value <code>b</code> if <code>just</code>,
    otherwise returns <code>nothing</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe, String } from 'tiinvo'

const m = Maybe.map(String.upper)

m("hello")      // "HELLO"
m(undefined)    // null
m(0)            // null
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="mapOr" />
  <p>
    Maps a value <code>a</code> to a value <code>b</code> if <code>just</code>,
    otherwise returns <code>or</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe, String } from 'tiinvo'

const m = Maybe.mapOr("BYE", String.upper)

m("hello")      // "HELLO"
m(undefined)    // "BYE"
m(0)            // "BYE"

      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="mapOrElse" />
  <p>
    Maps a value <code>a</code> to a value <code>b</code> if <code>just</code>,
    otherwise calls <code>or</code> and returns it
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe, String } from 'tiinvo'

const m = Maybe.mapOrElse(() => "BYE BYE", String.upper)

m("hello")      // "HELLO"
m(undefined)    // "BYE BYE"
m(0)            // "BYE BYE"
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="unwrap" />
  <p>Unwraps value <code>a</code> if <code>just</code>, otherwise throws</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

Maybe.unwrap("hello") // "hello"
Maybe.unwrap("")      // throws
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="unwrapOr" />
  <p>
    Unwraps value <code>a</code> if <code>just</code>, otherwise returns
    <code>or</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

const u = Maybe.unwrapOr("bye")

u("hello") // "hello"
u("")      // "bye"
      `}
    language="ts"
  />
</article>
<article>
  <DocItemTitle title="unwrapOrElse" />
  <p>
    Unwraps value <code>a</code> if <code>just</code>, otherwise calls and
    return <code>or</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Maybe } from 'tiinvo'

const u = Maybe.unwrapOrElse(() => "world")

u("hello") // "hello"
u("")      // "world"
      `}
    language="ts"
  />
</article>
