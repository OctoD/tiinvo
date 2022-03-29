<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Array" description="Array methods" keywords="" />

<article>
  <DocTitle>Array</DocTitle>

  <p>Array takes care of all operations with arrays.</p>
  <p>
    It provides native "static" methods (like <code>Array.from</code>) and
    "instance" (like <code>Array.prototype.map</code>) methods as well.
  </p>
</article>

<article>
  <DocItemTitle title="cmp" />
  <p>Compares two arrays.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.cmp(['a'], ['a'])) // 0
console.log(Array.cmp(['a'], ['b'])) // -1
console.log(Array.cmp(['b'], ['a'])) // 1
console.log(Array.cmp(['a'], ['a', 'b'])) // -1
console.log(Array.cmp(['a', 'b'], ['a'])) // 1
console.log(Array.cmp(['a', 'b'], ['a', 'b'])) // 0
console.log(Array.cmp(['a', 'b', 'c'], ['a', 'b'])) // 1
console.log(Array.cmp(['a', 'b', 'c'], ['a', 'b', 'c'])) // 0
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="eq" />
  <p>Returns true if two arrays are identical.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.eq(['a'], ['a'])) // true
console.log(Array.eq(['a'], ['b'])) // false
console.log(Array.eq(['b'], ['a'])) // false
console.log(Array.eq(['a'], ['a', 'b'])) // false
console.log(Array.eq(['a', 'b'], ['a'])) // false
console.log(Array.eq(['a', 'b'], ['a', 'b'])) // true
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="empty" />
  <p>Returns <code>true</code> if the array <code>a</code> is empty.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.empty([])) // true
console.log(Array.empty(['a'])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Returns <code>true</code> if <code>a</code> is an array.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.guard([])) // true
console.log(Array.guard(null)) // false
console.log(Array.guard(undefined)) // false
console.log(Array.guard(0)) // false
console.log(Array.guard('')) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guardOf" />
  <p>
    Returns <code>true</code> if <code>b</code> is an array of <code>a</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Str } 'tiinvo';

const isstrarr = Array.guardOf(Str.guard);

console.log(isstrarr([])) // true
console.log(isstrarr(['a'])) // true
console.log(isstrarr(['a', 'b'])) // true
console.log(isstrarr(['a', 'b', 'c'])) // true
console.log(isstrarr(['a', 'b', 'c', 1])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="concat" />
  <p>
    Concates <code>b</code> and <code>a</code> without modifying the original arrays.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.concat(['a'])(['b'])) // ['b', 'a']
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="contains" />
  <p>
    Returns <code>true</code> if an array <code>b</code> contains
    <code>a</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.contains('a')(['a'])) // true
console.log(Array.contains('a')(['b'])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="every" />
  <p>
    Determines whether all the members of an array <code>a</code> satisfy the
    specified predicate <code>p</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Num } 'tiinvo';

const everyeven = Array.every(Num.iseven);

console.log(everyeven([2, 4, 6])) // true
console.log(everyeven([2, 4, 5])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="from" />
  <p>Creates an array from an array-like object.</p>
  <SinceVersion>3.0.8</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.from([1, 2, 3])) // [1, 2, 3]
console.log(Array.from(new Set([1, 2, 3]))) // [1, 2, 3]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="get" />
  <p>
    Returns the element <code>result&lt;a&gt;</code> at index <code>i</code> of
    an array <code>a[]</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.get(1)(['a', 'b', 'c'])) // 'b'
console.log(Array.get(2)(['a'])) // Error('Index 2 is out of bounds for length 1')
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="get" />
  <p>
    Fills an array <code>b</code> with <code>a</code> from index
    <code>start</code>
    to <code>end</code>.
  </p>
  <SinceVersion>3.3.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

const f = Array.fill(0, 1, 2);

console.log(f([10, 20, 30, 40])) // [10, 0, 0, 40]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="filter" />
  <p>
    Returns the elements of an array <code>a</code> that meet the condition
    specified in a predicate <code>p</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.filter(Predicate.eq('a'))(['a', 'b'])) // ['a']
console.log(Array.filter(Predicate.eq('b'))(['a', 'b'])) // ['b']
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="filter" />
  <p>
    Returns the value of the first <code>option&lt;a&gt;</code> in the array
    <code>a</code>
    where predicate <code>p</code> is <code>true</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Num } 'tiinvo';

const p = Num.gt(1);

console.log(Array.find(p)([1, 2, 3])) // 2
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="first" />
  <p>
    Returns the first element of an array <code>a</code>. If the array is empty,
    returns <code>none</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.first(['a', 'b'])) // 'a';
console.log(Array.first([])) // null;
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="firstOr" />
  <p>
    Returns the first element of an array <code>b</code> or <code>a</code> if the
    array is empty.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

const firstor = a.firstOr('not found');

console.log(firstor(['a', 'b'])) // 'a'
console.log(firstor([])) // 'not found'
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="filtermap" />
  <p>
    Maps an array <code>a</code> by removing all elements that do not satisfy
    the predicate <code>p</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

const fm = Array.filtermap(Number.umul(2), Number.gt(3));

fm([1, 2, 3, 4, 5]) // [6, 8, 10]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="flat" />
  <p>Flatterns an array</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.flat(['a', ['b', 'c']])) // ['a', 'b', 'c']
console.log(Array.flat(['a', ['b', 'c'], 'd'])) // ['a', 'b', 'c', 'd']
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="flatmap" />
  <p>
    Maps a matrix <code>a[][]</code> to a <code>b[]</code> using the mapping
    function <code>f</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Str } 'tiinvo';

const map = Array.flatmap(Str.length);

console.log(map([['abc'], ['cdef']])) // [3, 4]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="fromfunctions" />
  <p>
    Calls all functions in the array <code>a</code> with the related index of
    arguments <code>b</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Num, Str } 'tiinvo';

console.log(Array.fromfunctions([Num.add(1), Str.upper])([1, 'a'])) // ['2', 'A']
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="includes" />
  <p>
    Determines whether an array includes a certain element, returning true or
    false as appropriate.
  </p>
  <SinceVersion>3.2.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Num, Str } 'tiinvo';

console.log(Array.includes('a')(['a', 'b'])) // true
console.log(Array.includes('c')(['a', 'b'])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="last" />
  <p>
    Returns the last element of an array <code>a</code>. If the array is empty,
    returns <code>none</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.last(['a', 'b'])) // 'b';
console.log(Array.last([])) // null;
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="lastOr" />
  <p>
    Returns the last element of an array <code>b</code> or <code>a</code> if the
    array is empty.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

const lastor = Array.lastOr('not found');

console.log(lastor(['a', 'b'])) // 'b'
console.log(lastor([])) // 'not found'
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="length" />
  <p>
    Gets the length of the array. This is a number one higher than the highest
    index in the array.
  </p>
  <SinceVersion>3.0.8</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.length(['a', 'b'])) // 2
console.log(Array.length([])) // 0
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="join" />
  <p>
    Adds all the elements of an array into a string, separated by the specified
    separator string.
  </p>
  <p>By default the `separator` is an empty string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.join()(['a', 'b', 'c'])) // 'abc'
console.log(Array.join(' ')(['a', 'b', 'c'])) // 'a b c'
console.log(Array.join('-')(['a', 'b', 'c'])) // 'a-b-c'
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="join" />
  <p>Creates a new array of a given size.</p>
  <SinceVersion>3.2.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

Array.make(4, 'hello') // ['hello', 'hello', 'hello', 'hello']
Array.make(2)          // [undefined, undefined]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="map" />
  <p>
    Maps an array of elements <code>a</code> to an array of elements
    <code>b</code>
    using the mapping function <code>f</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, String } 'tiinvo';

console.log(Array.map(String.uconcat('!'))(['a', 'b', 'c'])) // ['a!', 'b!', 'c!']
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapfilter" />
  <SinceVersion>3.6.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

const fm = Array.filtermap(Number.umul(2), Number.gt(3));

fm([1, 2, 3]) // [4, 6]
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="none" />
  <p>
    Returns <code>true</code> if all elements of <code>a</code> do not meet the
    condition specified in the predicate <code>p</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Num } 'tiinvo';

console.log(Array.none(Number.isEven)([1, 2, 3])) // false
console.log(Array.none(Number.isEven)([1, 3, 5])) // true
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="rand" />
  <p>Returns a random element of an array <code>a</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.random(['a', 'b', 'c'])) // 'a' or 'b' or 'c'
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="reduce" />
  <p>
    Aggregates array of type <code>a[]</code> into a value of type
    <code>b</code>
    using a function <code>f</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

const red = Array.reduce(Number.badd);

console.log(red(0)([1, 2, 3])) // 6
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="reduceright" />
  <p>
    Aggregates array of type <code>a[]</code> into a value of type
    <code>b</code>
    using a function <code>f</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

const red = Array.reduceright(Number.bsub);

console.log(red(0)([1, 2, 3])) // -6
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="reverse" />
  <p>
    Reverses the elements in an array in place without mutating the original
    array.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.reverse([1, 2, 3])) // [3, 2, 1]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="shuffle" />
  <p>Shuffles an array</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.shuffle([1, 2, 3])) // [1, 3, 2]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="slice" />
  <p>
    Returns a slice of an array <code>a</code> from <code>start</code> to
    <code>end</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array } 'tiinvo';

console.log(Array.slice(1)([1, 2, 3, 4, 5])) // [2, 3, 4, 5]
console.log(Array.slice(1, 3)([1, 2, 3, 4, 5])) // [2, 3]
console.log(Array.slice(undefined, 3)([1, 2, 3, 4, 5])) // [1, 2, 3]
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="some" />
  <p>
    Determines whether some members of an array <code>a</code> satisfy the
    specified predicate <code>p</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

const someeven = Array.some(Number.isEven);

console.log(someeven([2, 4, 6])) // true
console.log(someeven([2, 4, 5])) // true
console.log(someeven([1, 3, 7])) // false
 `}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="sort" />
  <p>
    Sorts an array of elements <code>a</code> using the specified comparator
    <code>f</code>.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Array, Number } 'tiinvo';

console.log(Array.sort(Number.asc)([3, 2, 1])) // [1, 2, 3]
console.log(Array.sort(Number.desc)([1, 2, 3])) // [3, 2, 1]
 `}
    language="ts"
  />
</article>
