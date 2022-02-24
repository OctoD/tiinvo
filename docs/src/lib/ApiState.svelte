<script>
  import Version from "./Version.svelte";

  const stable = "stable";
  const unstable = "unstable";

  export let status = stable;
  export let version;

  $: isstable = status === stable;
  $: isunstable = status === unstable;
</script>

<span class="inline-flex items-center font-light">
  <span
    class="rounded-md text-xs px-1 h-3 flex items-center justify-center mr-2 text-black"
    class:bg-green-400={isstable}
    class:bg-red-400={isunstable}
  >
    {#if isstable}
      Stable
    {/if}
    {#if isunstable}
      Unstable
    {/if}
  </span>
  {#if version}
    <Version>Since {version}</Version>
  {/if}
</span>
