<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Try" description="Try methods" />

<h2>Try</h2>

<article>
  <DocItemTitle title="maybe" />
  <p>
    Calls a function <code>fn</code> with it's arguments and returns a
    <code>maybe&lt;returnTypeOf&lt;fn&gt;&gt;</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Try, Maybe, Number } from 'tiinvo';

const fn = (arg: number) => {
  if (Number.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(\`\${arg} is not even\`);
}

const safe = Try.maybe(fn);

console.log(safe(2)); // 4
console.log(safe(3)); // null

console.log(Maybe.isJust(safe(2))); // true
console.log(Maybe.isNothing(safe(3))); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="maybeAsync" />
  <p>The async version of <code>trymaybe</code></p>
  <SinceVersion>3.0.0</SinceVersion>
</article>
<article>
  <DocItemTitle title="option" />
  <p>
    Calls a function <code>fn</code> with it's arguments and returns a
    <code>option&lt;returnTypeOf&lt;fn&gt;&gt;</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Try, Option, Number } from 'tiinvo';

const fn = (arg: number) => {
  if (Number.isEven(arg)) {  
    return arg * 2;  
  }
 
  throw new Error(\`\${arg} is not even\`);
}

const safe = Try.option(fn);

console.log(safe(2)); // 4
console.log(safe(3)); // null

console.log(Option.isSome(safe(2))); // true
console.log(Option.isNone(safe(3))); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="optionAsync" />
  <p>The async version of `tryoption`</p>
  <SinceVersion>3.0.0</SinceVersion>
</article>
<article>
  <DocItemTitle title="result" />
  <p>
    Calls a function <code>fn</code> with it's arguments and returns a
    <code>result&lt;returnTypeOf&lt;fn&gt;&gt;</code>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Try, Option, Number } from 'tiinvo';

const fn = (arg: number) => {
  if (Number.isEven(arg)) {
    return arg * 2;
  }

  throw new Error(\`\${arg} is not even\`);
}

const safe = Try.result(fn);

console.log(safe(2)); // 4
console.log(safe(3)); // Error: 3 is not even

console.log(r.isOk(safe(2))); // true
console.log(r.isErr(safe(3))); // true
  `}
  />
</article>
<article>
  <DocItemTitle title="resultAsync" />
  <p>The async version of `tryresult`</p>
  <SinceVersion>3.0.0</SinceVersion>
</article>
