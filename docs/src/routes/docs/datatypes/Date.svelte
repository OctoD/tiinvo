<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
import DocTitle from '$lib/DocTitle.svelte';
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Date" description="Date methods" />

<article>
  <DocTitle status="unstable">Date</DocTitle>

  <p>A different Date implementation.</p>
  <p class="my-4">Differs from native Date data type in different ways:</p>
  <ul class="px-4 list-disc">
    <li>It does not take care of time</li>
    <li>Months starts from 1 and end to 12</li>
    <li>
      Mutation functions do not affect original object, they return a new one
      instead
    </li>
    <li>Has a an enum for months (both in short and long english notation)</li>
  </ul>
</article>

<article>
  <DocItemTitle title="cmp" />
  <p>Compares two dates.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, 0, 1);
const d2 = Date.make(2018, 0, 2);

d.cmp(d1, d2); // -1
d.cmp(d2, d1); // 1
d.cmp(d1, d1); // 0
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Checks if a value <code>a</code> is a date.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

d.guard(Date.make(2018, 1, 1)); // true
d.guard(Date.fromstring('2018-01-01')); // true
d.guard({}); // false
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="eq" />
  <p>Checks if two dates are equal.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.Jan, 1);
const d2 = Date.make(2018, Date.Month.Jan, 1);
const d3 = Date.make(2018, Date.Month.Feb, 1);

d.eq(d1, d2); // true
d.eq(d1, d3); // false
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="make" />
  <p>Makes a date from a year, month and day.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

Date.make(2018, Date.Month.Jan, 1); // 2018-01-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="fromstr" />
  <p>Makes a date from a string</p>
  <SinceVersion>3.0.10</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

Date.fromstr('2018-01-01'); // 2018-01-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="inrange" />
  <p>
    Checks if a date <code>c</code> is between two dates <code>a</code> and
    <code>b</code> included.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, 0, 1);
const d2 = Date.make(2018, 0, 2);
const d3 = Date.make(2018, 0, 3);

Date.inrange(d1, d3)(d2); // true
Date.inrange(d1, d3)(d1); // true
Date.inrange(d1, d3)(d3); // true
Date.inrange(d1, d2)(d3); // false
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="invalid" />
  <p>Checks if a date is invalid</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date as d } from 'tiinvo';

d.invalid(new Date()); // false
d.invalid(new Date(2018, 0, 1)); // false
d.invalid(new Date(2018, 0, 1, 12, 0, 0)); // false
d.invalid(new Date('a')); // true
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="isleap" />
  <p>Checks if a date is in a leap year.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

console.log(Date.isleap(Date.make(2018, 0, 1))); // false
console.log(Date.isleap(Date.make(2016, 0, 1))); // true
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="notinrange" />
  <p>
    Checks if a date <code>c</code> is not in a range between <code>a</code> and
    <code>b</code> included.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, 0, 1);
const d2 = Date.make(2018, 0, 2);
const d3 = Date.make(2018, 0, 3);

Date.notinrange(d1, d3)(d2); // false
Date.notinrange(d1, d3)(d1); // false
Date.notinrange(d1, d3)(d3); // false
Date.notinrange(d1, d2)(d3); // true
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="valid" />
  <p>Checks if a date is valid</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date as d } from 'tiinvo';

d.valid(new Date()); // true
d.valid(new Date(2018, 0, 1)); // true
d.valid(new Date(2018, 0, 1, 12, 0, 0)); // true
d.valid(new Date('a')); // false
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="add" />
  <p>
    Adds a number of years, months and days to a date without mutating the
    original date.
  </p>
  <p>All parameters are optional.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.add(1, 1, 1)(d1); // 2019-02-02T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="addYears" />
  <p>Adds a number of years to a date without mutating the original date.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.addYears(1)(d1); // 2019-01-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="addMonths" />
  <p>Adds a number of months to a date without mutating the original date.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.addMonths(1)(d1); // 2018-02-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="addDays" />
  <p>Adds a number of days to a date without mutating the original date.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.addDays(1)(d1); // 2018-01-02T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="sub" />
  <p>
    Subtracts a number of years, months and days from a date without mutating
    the original date.
  </p>
  <p>All parameters are optional.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.sub(1, 1, 1)(d1); // 2017-11-30T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="subYears" />
  <p>
    Subtracts a number of years from a date without mutating the original date.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.subYears(1)(d1); // 2017-01-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="subMonths" />
  <p>
    Subtracts a number of months from a date without mutating the original date.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.subMonths(1)(d1); // 2017-12-01T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="subDays" />
  <p>
    Subtracts a number of days from a date without mutating the original date.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.subDays(1)(d1); // 2017-12-31T00:00:00.000Z
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="getters" />
  <p>Get year, month or date</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 21);
Date.getYear(d1) // 2018
Date.getMonth(d1) // 1
Date.getDay(d1) // 21
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="asc" />
  <p>Used to sort dates in ascending order.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
const d2 = Date.make(2018, Date.Month.January, 2);
Date.asc(d1, d2); // -1
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="desc" />
  <p>Used to sort dates in descending order.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
const d2 = Date.make(2018, Date.Month.January, 2);
Date.desc(d1, d2); // 1
`}
    language="ts"
  />
</article>

<article>
  <DocItemTitle title="toString" />
  <p>Stringifies a date.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    code={`
import { Date } from 'tiinvo';

const d1 = Date.make(2018, Date.Month.January, 1);
Date.toString(d1); // 2018-01-01
`}
    language="ts"
  />
</article>
