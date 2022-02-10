<script>
  export let title = "";
</script>

<div>
  <h4 class="font-semibold text-xs text-slate-700 dark:text-slate-100 mb-3">{title}</h4>
  <div class="text-sm flex flex-col space-y-2">
    <slot />
  </div>
</div>