<script>
  export let href;
  import { page } from "$app/stores";

  $: current = $page.url.pathname === href;
</script>

<a
  class:text-violet-500={current}
  class:dark:text-violet-200={current}
  class:dark:font-semibold={current}
  {href}
>
  <slot />
</a>
