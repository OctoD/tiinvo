<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Set" description="Set methods" />

<article>
  <DocTitle version="3.5.0">Set</DocTitle>
  <p>
    Has almost all native methods of native <code>Set</code> API, along with many
    new one.
  </p>
</article>

<article>
  <DocItemTitle title="add"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);
const add = Set.add(s);
const has4 = Set.has(4);

has4(s); // false

add(4);

has4(s); // true
    `}
  />
</article>
<article>
  <DocItemTitle title="clear"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);

Set.size(s); // 3
Set.clear(s);
Set.size(s); // 0
    `}
  />
</article>
<article>
  <DocItemTitle title="concat"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);
const s2 = Set.make(4, 5, 6);

Set.concat(s1, s2); // Set(1, 2, 3, 4, 5, 6)
    `}
  />
</article>
<article>
  <DocItemTitle title="delete_"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);

Set.delete(1)(s); // Set(2, 3)
    `}
  />
</article>
<article>
  <DocItemTitle title="entries"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);

Set.entries(s); // [[1,1], [2,2], [3,3]]
    `}
  />
</article>
<article>
  <DocItemTitle title="every"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);
const s2 = Set.make(1, 2, 0);
const p = Set.every(Number.gt(0));

p(s1); // true
p(s2); // false
    `}
  />
</article>
<article>
  <DocItemTitle title="filter"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.filter(Number.gt(0))(s1); // Set(1, 2, 3)
Set.filter(Number.lt(2))(s1); // Set(1)
    `}
  />
</article>
<article>
  <DocItemTitle title="forEach"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);

Set.forEach(console.log)(s);
// 1
// 2
// 3
    `}
  />
</article>
<article>
  <DocItemTitle title="guard"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

Set.guard(Set.make(1, 2, 3)); // true
Set.guard(1); // false
    `}
  />
</article>
<article>
  <DocItemTitle title="guardOf"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number, String, Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);
const s2 = Set.make('pineapple', 'on pizza', 'is a huge mistake');
const numberSet = Set.guardOf(Number.guard);
const stringSet = Set.guardOf(String.guard);

console.log(numberSet(s1)); // true
console.log(numberSet(s2)); // false
console.log(stringSet(s2)); // true
console.log(stringSet(s1)); // false
    `}
  />
</article>
<article>
  <DocItemTitle title="has"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.has(1)(s1); // true
Set.has(4)(s1); // false
    `}
  />
</article>
<article>
  <DocItemTitle title="intersect"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);
const s2 = Set.make(2, 3, 4);

Set.intersect(s1, s2); // Set(2, 3)
    `}
  />
</article>
<article>
  <DocItemTitle title="make"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

Set.make(1, 2, 3); // Set(1, 2, 3)
Set.make(1); // Set(1)
Set.make([1, 2, 3, 4]); // Set(1, 2, 3, 4)
    `}
  />
</article>
<article>
  <DocItemTitle title="map"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.map(Number.uadd(1))(s1); // Set(2, 3, 4)
    `}
  />
</article>
<article>
  <DocItemTitle title="none"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.none(Number.gt(0))(s1); // false
Set.none(Number.lt(2))(s1); // false
Set.none(Number.gt(4))(s1); // true
    `}
  />
</article>
<article>
  <DocItemTitle title="reduce"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.reduce(Number.badd, 0)(s1); // 6
    `}
  />
</article>
<article>
  <DocItemTitle title="reduceRight"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(3, 2, 1);

Set.reduceRight(Number.bsub, 5)(s1); // -1    
    `}
  />
</article>
<article>
  <DocItemTitle title="size"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.size(s1); // 3
    `}
  />
</article>
<article>
  <DocItemTitle title="some"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set, Number } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.some(Number.gt(0))(s1); // true
Set.some(Number.lt(2))(s1); // true
Set.some(Number.gt(4))(s1); // false 
    `}
  />
</article>
<article>
  <DocItemTitle title="toArray"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s1 = Set.make(1, 2, 3);

Set.toArray(s1); // [1, 2, 3]
    `}
  />
</article>
<article>
  <DocItemTitle title="union"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const a = Set.make(1, 2, 3);
const b = Set.make(3, 4, 5);

Set.union(a, b); // Set(1, 2, 3, 4, 5)
    `}
  />
</article>
<article>
  <DocItemTitle title="values"/>
  <p></p>
  <SinceVersion>3.5.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Set } from 'tiinvo';

const s = Set.make(1, 2, 3);
const v = Set.values(s);

for (const x of v) {
  console.log(x);
}  

// 1
// 2
// 3
    `}
  />
</article>