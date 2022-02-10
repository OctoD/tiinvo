<script>
  export let href
  export let target = "_self"
</script>

<a {href} {target}>
  <article>
    <h4 class="font-semibold">
      <slot name="title" />
    </h4>
    <p class="text-sm">
      <slot name="description" />
    </p>
  </article>
</a>

<style>
  article {
    @apply bg-slate-100;
    @apply px-4;
    @apply py-8;
    @apply rounded-xl;
    @apply shadow-lg;
    @apply shadow-slate-50;
    @apply transition-all;
    @apply w-full;
  }

  article:hover {
    @apply bg-white;
    @apply shadow-slate-100;
  }
  
  :global(.dark) article {
    @apply bg-slate-800;
    @apply shadow-slate-900;
  }
  
  :global(.dark) article:hover {
    @apply bg-slate-900;
    @apply shadow-black;
  }
</style>