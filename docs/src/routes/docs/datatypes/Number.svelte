<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Number" description="Number methods" />

<h2>Number</h2>

<article>
  <DocItemTitle title="guard" />
  <p>Checks if the given value is a number.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.guard(10)) // true
console.log(Number.guard('')) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares two numbers.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.compare(10, 5)) // 1
console.log(Number.compare(5, 10)) // -1
console.log(Number.compare(5, 5)) // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="isEven" />
  <p>Returns true if is even</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.isEven(10)) // true
console.log(Number.isEven(11)) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="isOdd" />
  <p>Returns true if is odd</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.isOdd(10)) // false
console.log(Number.isOdd(11)) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="asc" />
  <p>Used to sort numbers asceding.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

const array = [10, 5, 3, 1];
console.log(array.sort(n.asc)) // [1, 3, 5, 10]
  `}
  />
</article>
<article>
  <DocItemTitle title="desc" />
  <p>Used to sort numbers descending.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

const array = [1, 5, 3, 10];
console.log(array.sort(n.desc)) // [10, 5, 3, 1]
  `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Returns true if two numbers are equal</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.eq(10, 10)) // true
console.log(Number.eq(10, 11)) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="ge" />
  <p>Returns true if b is greater or equal to a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.gte(10)(10)) // true
console.log(Number.gte(10)(11)) // true
console.log(Number.gte(10)(9)) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="gt" />
  <p>Returns true if b is greater than a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.gt(10)(10)) // false
console.log(Number.gt(10)(11)) // true
console.log(Number.gt(10)(9)) // false
  `}
  />
</article>
<article>
  <DocItemTitle title="le" />
  <p>Returns true if b is less or equal to a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.lt(5)(10)) // false
console.log(Number.lt(10)(10)) // true
console.log(Number.lt(10)(5)) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="lt" />
  <p>Returns true if b is less than a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.lt(5)(10)) // false
console.log(Number.lt(10)(10)) // false
console.log(Number.lt(10)(5)) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="ne" />
  <p>Returns true if b is not equal to a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.ne(10)(10)) // false
console.log(Number.ne(10)(11)) // true
  `}
  />
</article>
<article>
  <DocItemTitle title="toExponentialF" />
  <p>
    Returns a string containing a number represented in exponential notation.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toExponentialF(10)(1)) // '1.0000000000e+1'
  `}
  />
</article>
<article>
  <DocItemTitle title="toFixed" />
  <p>Returns a string representing a number in fixed-point notation.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toFixed(1)) // '1.00'
  `}
  />
</article>
<article>
  <DocItemTitle title="toFixedF" />
  <p>Returns a string representing a number in fixed-point notation.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toFixedF(10)(1)) // '1.0000000000'
  `}
  />
</article>
<article>
  <DocItemTitle title="toPrecision" />
  <p>
    Returns a string containing a number represented either in exponential or
    fixed-point notation with a specified number of digits.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toPrecision(1)) // '1.0'
  `}
  />
</article>
<article>
  <DocItemTitle title="toPrecisionP" />
  <p>
    Returns a string containing a number represented either in exponential or
    fixed-point notation with a specified number of digits.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toPrecisionP(10)(1)) // '1.0000000000'
  `}
  />
</article>
<article>
  <DocItemTitle title="toString" />
  <p>Returns a string representation of a number.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toString()) // '1'
  `}
  />
</article>
<article>
  <DocItemTitle title="toStringR" />
  <p>Returns a string representation of a number.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.toString(16)(4bc)) // '4bc'
  `}
  />
</article>
<article>
  <DocItemTitle title="uadd" />
  <p>Adds b to a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.uadd(10)(5)) // 15
  `}
  />
</article>
<article>
  <DocItemTitle title="udiv" />
  <p>Divides b by a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.udiv(10)(5)) // 2
  `}
  />
</article>
<article>
  <DocItemTitle title="umod" />
  <p>Returns the modulus of b by a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.umod(10)(5)) // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="umul" />
  <p>Multiplies b by a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.umul(10)(5)) // 50
  `}
  />
</article>
<article>
  <DocItemTitle title="upow" />
  <p>Exponentiates b by a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.upow(3)(5)) // 125
  `}
  />
</article>
<article>
  <DocItemTitle title="urand" />
  <p>Returns a random number between b and a (inclusive)</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.urand(10)(5)) // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="uroot" />
  <p>Returns the root of b by a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.uroot(2)(25)) // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="usub" />
  <p>Subtracts a from b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.usub(10)(5)) // -5
  `}
  />
</article>
<article>
  <DocItemTitle title="badd" />
  <p>Adds a and b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.badd(10, 5)) // 15
  `}
  />
</article>
<article>
  <DocItemTitle title="bdiv" />
  <p>Divides a by b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.bdiv(10, 5)) // 2
  `}
  />
</article>
<article>
  <DocItemTitle title="bmod" />
  <p>Returns the modulus of a by b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.bmod(10, 5)) // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="bmul" />
  <p>Multiplies a by b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.bmul(10, 5)) // 50
  `}
  />
</article>
<article>
  <DocItemTitle title="bpow" />
  <p>Elevates a to the power of b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.bpow(3, 5)) // 125
  `}
  />
</article>
<article>
  <DocItemTitle title="brand" />
  <p>Returns a random number between a and b (inclusive)</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.brand(10, 5)) // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="broot" />
  <p>Returns the root of a by b</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.broot(25, 2)) // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="bsub" />
  <p>Subtracts b from a</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Number } from 'tiinvo';

console.log(Number.bsub(10, 5)) // 5
  `}
  />
</article>
