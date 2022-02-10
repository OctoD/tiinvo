<script lang="ts">
  export let href: string;
  export let target = "_self";

  let geturl = (href: string) => {
    let h = href;
    if (h.startsWith('/examples')) {
      return h;
    }
    else if (h.startsWith('/')) {
      h.replace('/', '')
    }

    return `/examples/${h}`
  }
</script>

<a href={geturl(href)} {target}>
  <article>
    <header>
      <slot name="title" />
    </header>
    <section>
      <slot class="" />
    </section>
  </article>
</a>

<style>
  article {
    @apply bg-slate-100;
    @apply p-5;
    @apply rounded;
    @apply shadow-slate-50;
    @apply shadow-xl;
    @apply space-y-2;
    @apply transition-all;
  }
  article:hover {
    @apply shadow-slate-200;
  }
  :global(.dark) article {
    @apply bg-slate-700;
    @apply shadow-slate-800;
  }
  :global(.dark) article:hover {
    @apply bg-slate-800;
    @apply shadow-slate-900;
  }
  header {
    @apply font-semibold;
    @apply text-2xl;
    @apply text-slate-900;
  }
  :global(.dark) header {
    @apply text-slate-200;
  }
  section {
    @apply text-sm;
    @apply text-slate-700;
  }
  :global(.dark) section {
    @apply text-slate-400;
  }
</style>
