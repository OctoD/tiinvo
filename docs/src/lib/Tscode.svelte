<script>
  import PrismJs from "./PrismJS.svelte";

  export let code = "";
</script>

<PrismJs language="ts" {code} />
