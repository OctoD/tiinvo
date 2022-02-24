<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import DocTitle from "$lib/DocTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - String" description="String methods" />

<article>
  <DocTitle>String</DocTitle>
  <p>
    Has almost all native methods of native <code>String</code> API, along with many
    new one.
  </p>
</article>

<article>
  <DocItemTitle title="guard" />
  <p>Checks if the given value is a string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.guard('hello'); // true
String.guard(10); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="cmp" />
  <p>Compares a to b.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.cmp('a', 'b'); // -1
String.cmp('b', 'a'); // 1
String.cmp('a', 'a'); // 0
  `}
  />
</article>
<article>
  <DocItemTitle title="eq" />
  <p>Returns true if a equals to b.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.eq('a', 'a'); // true
String.eq('a', 'b'); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="empty" />
  <p>Returns true if a string is empty.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.empty(''); // true
String.empty('a'); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="asc" />
  <p>Used to sort strings in ascending order.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

const array = ['c', 'b', 'a'];
console.log(array.sort(String.asc)); // ['a', 'b', 'c']
  `}
  />
</article>
<article>
  <DocItemTitle title="desc" />
  <p>Used to sort strings in descending order.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

const array = ['b', 'A', 'c', 'D'];
console.log(array.sort(String.desc)); // ['D', 'c', 'b', 'A']
  `}
  />
</article>
<article>
  <DocItemTitle title="ucharAt" />
  <p>Returns the character at the specified index.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.ucharAt(0)('hello'); // 'h'
String.ucharAt(1)('hello'); // 'e'
String.ucharAt(2)('hello'); // 'l'
String.ucharAt(3)('hello'); // 'l'
String.ucharAt(4)('hello'); // 'o'
String.ucharAt(5)('hello'); // ''
  `}
  />
</article>
<article>
  <DocItemTitle title="ucharCodeAt" />
  <p>Returns the Unicode value of the character at the specified location.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.ucharCodeAt(0)('hello'); // 72
String.ucharCodeAt(1)('hello'); // 101
String.ucharCodeAt(2)('hello'); // 108
String.ucharCodeAt(3)('hello'); // 108
String.ucharCodeAt(4)('hello'); // 111
String.ucharCodeAt(5)('hello'); // null
  `}
  />
</article>
<article>
  <DocItemTitle title="fromCharCode" />
  <p>Returns a string created from the specified UTF-16 code unit.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.fromCharCode(72); // 'H'
String.fromCharCode(0x0041); // 'A'
String.fromCharCode(0x0061); // 'a'
  `}
  />
</article>
<article>
  <DocItemTitle title="uconcat" />
  <p>Concatenates b and a.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.concat('a')('b'); // 'ba'
  `}
  />
</article>
<article>
  <DocItemTitle title="bconcat" />
  <p>Concatenates a and b.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.bconcat('a', 'b'); // 'ab'
  `}
  />
</article>
<article>
  <DocItemTitle title="uendsWith" />
  <p>
    Returns true if the sequence of elements of searchString converted to a
    String is the same as the corresponding elements of this object (converted
    to a String) starting at endPosition – length(this). Otherwise returns
    false.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.uendsWith('lo')('hello'); // true
String.uendsWith('ll')('hello'); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="uincludes" />
  <p>
    Returns true if `a` appears as a substring of `b`, returs false otherwise.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.uincludes('lo')('hello'); // true
String.uincludes('ll')('hello'); // true
String.uincludes('x')('hello'); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="includes" />
  <p>
    Returns true if `a` appears as a substring of `b`, returs false otherwise.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.includes('hello', 'lo'); // true
String.includes('hello', 'll'); // true
String.includes('hello', 'x'); // false
  `}
  />
</article>
<article>
  <DocItemTitle title="uindexOf" />
  <p>Returns the position of the first occurrence of `a` in `b`.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.indexOf('lo')('hello'); // 2
String.indexOf('ll')('hello'); // 2
String.indexOf('x')('hello'); // -1
  `}
  />
</article>
<article>
  <DocItemTitle title="indexOf" />
  <p>Returns the position of the first occurrence of `a` in `b`.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.indexOf('lo')('hello'); // 2
String.indexOf('ll')('hello'); // 2
String.indexOf('x')('hello'); // -1
  `}
  />
</article>
<article>
  <DocItemTitle title="ulastIndexOf" />
  <p>Returns the last occurrence of a substring in the string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.lastIndexOf('lo')('hello'); // 2
String.lastIndexOf('ll')('hello'); // 2
String.lastIndexOf('l', 2)('hello'); // 2
String.lastIndexOf('l', 3)('hello'); // 3
  `}
  />
</article>
<article>
  <DocItemTitle title="lastIndexOf" />
  <p>Returns the last occurrence of a substring in the string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.lastIndexOf('lo', 'hello'); // 2
String.lastIndexOf('ll', 'hello'); // 2
String.lastIndexOf('l', 'hello', 2); // 2
String.lastIndexOf('l', 'hello', 3); // 3
  `}
  />
</article>
<article>
  <DocItemTitle title="umatch" />
  <p>
    Matches a string or an object that supports being matched against, and
    returns an array containing the results of that search, or null if no
    matches are found.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.umatch(/ll/)('hello'); // ['ll']
String.umatch(/l/g)('hello'); // ['l', 'l']
String.umatch(/x/g)('hello'); // null
  `}
  />
</article>
<article>
  <DocItemTitle title="match" />
  <p>
    Matches a string or an object that supports being matched against, and
    returns an array containing the results of that search, or null if no
    matches are found.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.match('hello', /ll/); // ['ll']
String.match('hello', /l/g); // ['l', 'l']
String.match('hello', /x/g); // null
  `}
  />
</article>
<article>
  <DocItemTitle title="upadstart" />
  <p>
    Pads the current string with a given string (possibly repeated) so that the
    resulting string reaches a given length. The padding is applied from the
    start (left) of the current string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.padStart(5, '0')('1'); // '00001'
String.padStart(6, '0')('1'); // '000001'
  `}
  />
</article>
<article>
  <DocItemTitle title="padstart" />
  <p>
    Pads the current string with a given string (possibly repeated) so that the
    resulting string reaches a given length. The padding is applied from the
    start (left) of the current string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.padStart('1', 5); // '    1'
String.padStart('1', 5, '0'); // '00001'
String.padStart('1', 6, '0'); // '000001'
  `}
  />
</article>
<article>
  <DocItemTitle title="upadEnd" />
  <p>
    Pads the current string with a given string (possibly repeated) so that the
    resulting string reaches a given length. The padding is applied from the end
    (right) of the current string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.upadEnd(5, '0')('1'); // '10000'
String.upadEnd(6, '0')('1'); // '100000'
  `}
  />
</article>
<article>
  <DocItemTitle title="padEnd" />
  <p>
    Pads the current string with a given string (possibly repeated) so that the
    resulting string reaches a given length. The padding is applied from the end
    (right) of the current string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.padEnd('1', 5); // '1    '
String.padEnd('1', 5, '0'); // '10000'
String.padEnd('1', 6, '0'); // '100000'
  `}
  />
</article>
<article>
  <DocItemTitle title="urepeat" />
  <p>
    Returns a String value that is made from count copies appended together. If
    count is 0, the empty string is returned.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.urepeat(3)('x'); // 'xxx'
String.urepeat(0)('x'); // ''
  `}
  />
</article>
<article>
  <DocItemTitle title="repeat" />
  <p>
    Returns a String value that is made from count copies appended together. If
    count is 0, the empty string is returned.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.repeat('x', 3); // 'xxx'
String.repeat('x', 0); // ''
  `}
  />
</article>
<article>
  <DocItemTitle title="ureplace" />
  <p>Replaces text in a string, using a regular expression or search string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.ureplace('ll', 'hh')('hello'); // 'hehho'
String.ureplace('ll', arg => arg.length)('hello'); // 'he2o'
  `}
  />
</article>
<article>
  <DocItemTitle title="replace" />
  <p>Replaces text in a string, using a regular expression or search string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.replace('hello', 'll', 'hh'); // 'hehho'
String.replace('hello', 'll', arg => arg.length); // 'he2o'
  `}
  />
</article>
<article>
  <DocItemTitle title="usearch" />
  <p>Finds the first substring match in a regular expression search.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.usearch('ll')('hello'); // 1
String.usearch(/l/g)('hello'); // 1
  `}
  />
</article>
<article>
  <DocItemTitle title="search" />
  <p>Finds the first substring match in a regular expression search.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.search('hello', 'll'); // 1
String.search('hello', /l/g); // 1
  `}
  />
</article>
<article>
  <DocItemTitle title="uslice" />
  <p>Returns a section of a string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.uslice(1, 3)('hello'); // 'el'
String.uslice(1)('hello'); // 'ello'
  `}
  />
</article>
<article>
  <DocItemTitle title="slice" />
  <p>Returns a section of a string.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.slice('hello', 1, 3); // 'el'
String.slice('hello', 1); // 'ello'
  `}
  />
</article>
<article>
  <DocItemTitle title="usplit" />
  <p>
    Split `b` into substrings using the specified separator `rx` and return them
    as an array.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.usplit(' ')('hello world'); // ['hello', 'world']
String.usplit(/\s+/)('hello world'); // ['hello', 'world']
  `}
  />
</article>
<article>
  <DocItemTitle title="bsplit" />
  <p>
    Split `b` into substrings using the specified separator `rx` and return them
    as an array.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.split('hello', ' '); // ['hello', 'world']
String.split('hello', /\s+/); // ['hello', 'world']
  `}
  />
</article>
<article>
  <DocItemTitle title="trim" />
  <p>
    Removes the leading and trailing white space and line terminator characters
    from a string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.trim('  hello world  '); // 'hello world'
  `}
  />
</article>
<article>
  <DocItemTitle title="trimEnd" />
  <p>
    Removes the trailing white space and line terminator characters from a
    string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.trimEnd('  hello world  '); // '  hello world'
  `}
  />
</article>
<article>
  <DocItemTitle title="trimStart" />
  <p>
    Removes the leading white space and line terminator characters from a
    string.
  </p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.trimStart('  hello world  '); // 'hello world  '
  `}
  />
</article>
<article>
  <DocItemTitle title="length" />
  <p>Returns a string length</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.length('hello'); // 5
  `}
  />
</article>
<article>
  <DocItemTitle title="lower" />
  <p>Converts all the alphabetic characters in a string to lowercase.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.lower('HELLO WORLD'); // 'hello world'
  `}
  />
</article>
<article>
  <DocItemTitle title="upper" />
  <p>Converts all the alphabetic characters in a string to uppercase.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.upper('hello world'); // 'HELLO WORLD'
  `}
  />
</article>
<article>
  <DocItemTitle title="camel" />
  <p>Formats a string to camel case.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.camel('hello world'); // 'helloWorld'
  `}
  />
</article>
<article>
  <DocItemTitle title="pascal" />
  <p>Formats a string to pascal case.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.pascal('hello world'); // 'HelloWorld'
  `}
  />
</article>
<article>
  <DocItemTitle title="kebab" />
  <p>Formats a string to kebab case.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.kebab('hello world'); // 'hello-world'
  `}
  />
</article>
<article>
  <DocItemTitle title="snake" />
  <p>Formats a string to snake case.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.snake('hello world'); // 'hello_world'
  `}
  />
</article>

<article>
  <DocItemTitle title="chars" />
  <p>Returns an array of chars in a string.</p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.chars('hello'); // ['h', 'e', 'l', 'l', 'o']
  `}
  />
</article>

<article>
  <DocItemTitle title="lines" />
  <p>Returns an array of lines in a string.</p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.lines('hello\nworld'); // ['hello', 'world']
  `}
  />
</article>

<article>
  <DocItemTitle title="words" />
  <p>Returns an array of words in a string.</p>
  <SinceVersion>3.1.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { String } from 'tiinvo';

String.words('hello world'); // ['hello', 'world']
  `}
  />
</article>
