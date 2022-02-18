<script>
  import BackToTop from '$lib/BackToTop.svelte';
  import Doclink from "$lib/Doclink.svelte";
  import Docnav from "$lib/Docnav.svelte";
</script>

<div class="grid md:grid-cols-5 gap-5">
  <aside class="col-span-1 bg-slate-100 dark:bg-slate-900 p-4 rounded-md">
    <nav class="flex flex-col space-y-4 sticky top-12">
      <Docnav title="Data types">
        <Doclink href="/docs/datatypes/Array">Array</Doclink>
        <Doclink href="/docs/datatypes/Boolean">Boolean</Doclink>
        <Doclink href="/docs/datatypes/Date">Date</Doclink>
        <Doclink href="/docs/datatypes/Either">Either</Doclink>
        <Doclink href="/docs/datatypes/Function">Function</Doclink>
        <Doclink href="/docs/datatypes/Maybe">Maybe</Doclink>
        <Doclink href="/docs/datatypes/Number">Number</Doclink>
        <Doclink href="/docs/datatypes/Object">Object</Doclink>
        <Doclink href="/docs/datatypes/Option">Option</Doclink>
        <Doclink href="/docs/datatypes/Predicate">Predicate</Doclink>
        <Doclink href="/docs/datatypes/Promise">Promise</Doclink>
        <Doclink href="/docs/datatypes/Result">Result</Doclink>
        <Doclink href="/docs/datatypes/String">String</Doclink>
        <Doclink href="/docs/datatypes/Tuple">Tuple</Doclink>
      </Docnav>
      <Docnav title="utilities">
        <Doclink href="/docs/utilities/Assert">Assert</Doclink>
        <Doclink href="/docs/utilities/Pipe">Pipe</Doclink>
        <Doclink href="/docs/utilities/Try">Try</Doclink>
      </Docnav>
    </nav>
  </aside>

  <section class="col-span-4 p-4" id="doc-content">
    <slot />
    <BackToTop />
  </section>
</div>

<style>
  :global(#doc-content h1) {
    @apply font-black;
    @apply mb-4;
    @apply text-4xl;
  }

  :global(#doc-content hr) {
    @apply my-10;
    @apply opacity-20;
    @apply border-black;
  }

  :global(#doc-content h2) {
    @apply font-black;
    @apply mb-4;
    @apply text-2xl;
  }

  :global(#doc-content article) {
    @apply mb-8;
  }

  :global(#doc-content p > code) {
    @apply bg-primary-100 ;
    @apply px-1;
    @apply rounded;
  }

  :global(.dark #doc-content p > code) {
    @apply bg-slate-700;
    @apply px-1;
    @apply rounded;
    @apply text-primary-50;
    @apply text-sm;
  }
</style>
