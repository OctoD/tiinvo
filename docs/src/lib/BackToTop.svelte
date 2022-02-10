<script>
  import { onDestroy,onMount } from "svelte";
  import { fade } from 'svelte/transition'
  import { browser } from '$app/env'

  let onclick = () => window.scroll({ behavior: "smooth", top: 0 });
  let scrollhandler = (_) => (scrolly = window.scrollY);
  let scrolly = 0;

  onMount(() => {
    if (browser) {
      window.addEventListener("scroll", scrollhandler);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("scroll", scrollhandler);
    }
  });
</script>

{#if scrolly > 100}
<button
  class="rounded-full bg-primary-500 dark:text-primary-500 dark:bg-transparent text-white fixed bottom-8 hover:opacity-100 right-7 opacity-90 backdrop-blur-lg backdrop-filter bg-blend-color"
  transition:fade
  on:click={onclick}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-10 w-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
    />
  </svg>
</button>
{/if}
