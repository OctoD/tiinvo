<script>
  import { browser } from "$app/env";
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";

  let darkmode = `darkmode`;
  let truev = "true";
  let enabled = writable(browser && localStorage[darkmode] === truev);
  let unsub = enabled.subscribe((v) => {
    if (browser) {
      const cname = "dark";
      const clist = document.querySelector("html").classList;

      if (v) {
        clist.add(cname);
        localStorage.setItem(darkmode, truev);
      } else {
        localStorage.removeItem(darkmode);
        clist.remove(cname);
      }
    }
  });

  onDestroy(unsub);
</script>

<button aria-label="darkmode" on:click={(_) => ($enabled = !$enabled)}>
  {#if $enabled}
    <svg
      aria-label="enabled"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
  {:else}
    <svg
      aria-label="disabled"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
  {/if}
</button>
