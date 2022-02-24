<script>
  import { onDestroy, onMount } from "svelte";

  export let language;
  export let code;

  let langscript
  let script
  
  onDestroy(() => {
    if (script) {
      document.head.removeChild(script)
    }
    if (langscript) {
      document.head.removeChild(langscript)
    }
  })

  onMount(() => {
      //@ts-ignore
      Prism.highlightAll();
    // };
  });
</script>

<pre class="rounded-xl p-3 text-xs overflow-x-auto">
  <code class="language-{language}">{code}</code>
</pre>

<style lang="postcss">
  :global(pre) {
    background-color: theme('backgroundColor.slate.100');
    color: theme('textColor.slate.900');
  }

  :global(.dark pre) {
    background-color: theme('backgroundColor.slate.900');
    color: theme('textColor.slate.200');
  }
  
  :global(.token.keyword) {
    color: theme('textColor.primary.800');
  }
  
  :global(.dark .token.keyword) {
    color: theme('textColor.primary.400');
  }
  
  :global(.token.string) {
    color: theme('textColor.green.800');
  }
  
  :global(.dark .token.string) {
    color: theme('textColor.green.200');
  }

  :global(.token.punctuation) {
    color: theme('textColor.primary.400');
  }

  :global(.token.function) {
    color: theme('textColor.blue.800');
  }

  :global(.dark .token.function) {
    color: theme('textColor.blue.400');
  }

  :global(.token.comment) {
    opacity: theme('opacity.50');
  }
</style>
