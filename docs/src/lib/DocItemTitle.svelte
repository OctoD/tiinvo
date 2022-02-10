<script>
  import { browser } from "$app/env";
  import { onMount } from "svelte";

  export let title = "";

  onMount(() => {
    if (browser && window.location.hash.includes(title)) {
      const element = document.querySelector(`a[href="#${title}"]`);
      const sitenavigation = document.querySelector("#site-navigation");
      const height = sitenavigation?.getBoundingClientRect().height ?? 0;
      const top = element?.getBoundingClientRect().top ?? 0;

      window.scrollTo({
        behavior: "auto",
        top: top - height,
      });
    }
  });
</script>

<a class="flex items-center hover:underline font-semibold mb-2 text-lg" href="#{title}">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
      clip-rule="evenodd"
    />
  </svg>
  <h4>
    {title}
  </h4>
</a>
