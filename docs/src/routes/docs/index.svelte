<script>
  import Doclink from "$lib/Doclink.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
</script>

<h1>Documentation</h1>
<hr />

<h2>Introduction</h2>

<article>
  <h4>What is tiinvo?</h4>
  <p>
    tiinvo a library which aims to provide a standardized Javascript API.
  </p>
  <p>It adds functions and new data types to the existing ones.</p>
</article>

<h2>Installing tiinvo</h2>

<article>
  <h4>Node.js</h4>

  <p class="mb-2 mt-8 italic opacity-60">Using npm</p>
  <PrismJs language="bash" code="npm i tiinvo" />

  <p class="mb-2 mt-8 italic opacity-60">or if you use yarn</p>
  <PrismJs language="bash" code="yarn add tiinvo" />
</article>

<article>
  <h4>Deno</h4>

  <p class="mb-2 mt-8 italic opacity-60">
    If your runtime is Deno, you can simply import what you need
  </p>
  <PrismJs
    language="ts"
    code={`import { Option } from 'https://cdn.skypack.dev/tiinvo?dts'`}
  />
</article>

<h2 class="mt-10">Library contents</h2>

<p>This library contains several data types and utility functions.</p>

<p>
  Each datatype is a replacement or an addtition to a native JavaScript type
</p>

<h4 class="mt-6">Data types</h4>

<ul class="list-disc underline px-4">
  <li>
    <Doclink href="/docs/datatypes/Array">Array</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Boolean">Boolean</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Date">Date</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Either">Either</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Maybe">Maybe</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Number">Number</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Object">Object</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Option">Option</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Predicate">Predicate</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Promise">Promise</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Result">Result</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/String">String</Doclink>
  </li>
  <li>
    <Doclink href="/docs/datatypes/Tuple">Tuple</Doclink>
  </li>
</ul>

<h4 class="mt-6">Utilities</h4>

<ul class="list-disc underline px-4">
  <li>
    <Doclink href="/docs/utilities/Pipe">Pipe</Doclink>
  </li>
  <li>
    <Doclink href="/docs/utilities/Try">Try</Doclink>
  </li>
</ul>
