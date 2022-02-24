<script>
  import ApiState from "./ApiState.svelte";

  export let status = "stable";
  export let version = "3.0.0";
</script>

<h2>
  <slot />
  <ApiState {status} {version} />
</h2>
