<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
import PageTitle from '$lib/PageTitle.svelte';
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Either" description="Either methods" />

<h2>Either</h2>

<article>
  <DocItemTitle title="isLeft" />
  <p>Checks if <code>a</code> is <code>left&lt;unknown&gt;</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.isLeft([1, null])).toBe(true);
expect(Either.isLeft([null, 2])).toBe(false);
expect(Either.isLeft([null, null])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="isLeftOf" />
  <p>
    Checks if <code>b</code> is `left&lt;a&gt;` if <code>b</code> is both
    <code>left</code>
    and it's value satisfies the <code>a</code> typeguard.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

const isnumleft = Either.isLeftOf(Num.guard);

expect(isnumleft([1, null])).toBe(true);
expect(isnumleft(["hello world", null])).toBe(false);
expect(isnumleft([null, 2])).toBe(false);
expect(isnumleft([null, null])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="isRight" />
  <p>Checks if <code>a</code> is <code>Right&lt;unknown&gt;</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.isRight([null, 2])).toBe(true);
expect(Either.isRight([1, null])).toBe(false);
expect(Either.isRight([null, null])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="isRightOf" />
  <p>
    Checks if <code>b</code> is `right&lt;a&gt;` if <code>b</code> is both
    <code>right</code>
    and it's value satisfies the <code>a</code> typeguard.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

const isnumRight = Either.isRightOf(Num.guard);

expect(isnumright([null, 2])).toBe(true);
expect(isnumright([1, null])).toBe(false);
expect(isnumright([null, null])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Checks if <code>a</code> is `either`.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.isEither([1, null])).toBe(true);
expect(Either.isEither([null, 2])).toBe(true);
expect(Either.isEither([null, null])).toBe(false);
expect(Either.isEither('hello world')).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Checks if <code>c</code> is <code>either&lt;a, b&gt;</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either, Number, String } from 'tiinvo';

const g = Either.guardOf(Number.guard, String.guard);

expect(g([1, null])).toBe(true);
expect(g([null, "hello world"])).toBe(true);
expect(g([null, null])).toBe(false);
expect(g([null, 1])).toBe(false);
expect(g(["hello world", null])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="right" />
  <p>Returns a <code>right&lt;a&gt;</code> from <code>a</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.right(1)).toEqual([null, 1]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="cmp" />
  <p>Compares two <code>either</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.cmp([1, null], [1, null])).toBe(0);
expect(Either.cmp([1, null], [null, 1])).toBe(-1);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="eq" />
  <p>Returns <code>true</code> if the value of two eithers are equal</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.eq([1, null], [1, null])).toBe(true);
expect(Either.eq([2, null], [1, null])).toBe(false);
expect(Either.eq([1, null], [null, 1])).toBe(false);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="filterLeft" />
  <p>
    Filters an <code>either&lt;a, b&gt</code> if it's <code>left</code> by a
    given predicate <code>f</code>.
  </p>
  <p>
    If the predicate returns <code>true</code> the <code>left&lt;a&gt;</code> is
    kept, otherwise it's dropped.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.filterLeft(a => a === 1)([1, null])).toEqual([1, null]);
expect(Either.filterLeft(a => a === 2)([1, null])).toEqual([null, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="filterRight" />
  <p>
    Filters an <code>either&lt;a, b&gt</code> if it's <code>right</code> by a
    given predicate <code>f</code>.
  </p>
  <p>
    If the predicate returns <code>true</code> the <code>right&lt;a&gt;</code> is
    kept, otherwise it's dropped.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.filterRight(a => a === 1)([null, 1])).toEqual([null, 1]);
expect(Either.filterRight(a => a === 2)([null, 1])).toEqual([null, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="fold" />
  <p>
    Folds an <code>either&lt;a, b&gt;</code> into a single value <code>c</code>
    if it's either <code>left&lt;a&gt;</code> or <code>right&lt;b&gt;</code>,
    otherwise it's dropped.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.fold(a => a + 1, b => b * 2)([1, null])).toBe(2);
expect(Either.fold(a => a + 1, b => b * 2)([null, 2])).toBe(4);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapLeft" />
  <p>
    Maps a <code>left&lt;a&gt;</code> into a <code>left&lt;b&gt;</code> with a
    mapper function <code>f</code> if <code>left&lt;a&gt;</code>, otherwise it's
    dropped.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.mapLeft(a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapLeft(a => a + 1)([null, 2])).toEqual([null, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapLeftOr" />
  <p>
    Maps a <code>left&lt;a&gt;</code> into a <code>left&lt;b&gt;</code> by a
    given mapper <code>f</code> if <code>left&lt;a&gt;</code>, otherwise returns
    a `left<b>` with the specified fallback value <code>or</code>.</b>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.mapLeftOr(0, a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapLeftOr(0, a => a + 1)([null, 2])).toEqual([0, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapLeftOrElse" />
  <p>
    Maps a <code>left&lt;a&gt;</code> into a <code>left&lt;b&gt;</code> by a
    given mapper <code>f</code> if <code>left&lt;a&gt;</code>, otherwise calls
    <code>or</code>
    returning `left<b>`.</b>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

const or = () => 0;

expect(Either.mapLeftOrElse(or, a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapLeftOrElse(or, a => a + 1)([null, 2])).toEqual([0, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapRight" />
  <p>
    Maps a <code>right&lt;a&gt;</code> into a <code>right&lt;b&gt;</code> with a
    mapper function <code>f</code> if <code>right&lt;a&gt;</code>, otherwise
    it's dropped.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.mapRight(a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapRight(a => a + 1)([null, 2])).toEqual([null, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapRightOr" />
  <p>
    Maps a <code>right&lt;a&gt;</code> into a <code>right&lt;b&gt;</code> by a
    given mapper <code>f</code> if <code>right&lt;a&gt;</code>, otherwise
    returns a `Right<b>` with the specified fallback value <code>or</code>.</b>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.mapRightOr(0, a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapRightOr(0, a => a + 1)([null, 2])).toEqual([0, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="mapRightOrElse" />
  <p>
    Maps a <code>right&lt;a&gt;</code> into a <code>right&lt;b&gt;</code> by a
    given mapper <code>f</code> if <code>right&lt;a&gt;</code>, otherwise calls
    <code>or</code>
    returning `Right<b>`.</b>
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

const or = () => 0;

expect(Either.mapRightOrElse(or, a => a + 1)([1, null])).toEqual([2, null]);
expect(Either.mapRightOrElse(or, a => a + 1)([null, 2])).toEqual([0, null]);
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="swap" />
  <p>Swaps left to right or right to left</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

const or = () => 0;

expect(Either.swap(Either.left('a'))).toEqual(Either.right('a'));
expect(Either.swap(Either.right('b'))).toEqual(Either.left('b'));
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapLeft" />
  <p>Unwraps left value if left, otherwise throws</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapLeft(Either.left('a')).toBe('a');
expect(() => Either.unwrapLeft(Either.right('b'))).toThrow();
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapLeftOr" />
  <p>Unwraps left value if left, otherwise returns <code>or</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapLeftOr('a', Either.right('b'))).toBe('a');
expect(Either.unwrapLeftOr('a', Either.left('b'))).toBe('b');
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapLeftOrElse" />
  <p>
    Unwraps left value if left, otherwise calls <code>or</code> and returns it's
    value
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapLeftOrElse(or, Either.right('b'))).toBe('a');
expect(Either.unwrapLeftOrElse(or, Either.left('b'))).toBe('b');
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapRight" />
  <p>Unwraps right value if right, otherwise throws</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapRight(Either.Right('a')).toBe('a');
expect(() => Either.unwrapRight(Either.right('b'))).toThrow();
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapRightOr" />
  <p>Unwraps right value if right, otherwise returns <code>or</code></p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapRightOr('a', Either.right('b'))).toBe('a');
expect(Either.unwrapRightOr('a', Either.Right('b'))).toBe('b');
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="unwrapRightOrElse" />
  <p>
    Unwraps right value if right, otherwise calls <code>or</code> and returns it's
    value
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Either } from 'tiinvo';

expect(Either.unwrapRightOrElse(or, Either.right('b'))).toBe('a');
expect(Either.unwrapRightOrElse(or, Either.left('b'))).toBe('b');
`}
    language="ts"
  />
</article>
