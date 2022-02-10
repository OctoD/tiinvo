<script>
  export let title = "";
  export let description = "";
  export let keywords = "";

  let pagetitle = `tiinvo${title.length > 0 ? ` - ${title}` : ""}`;
</script>

<svelte:head>
  <title>
    {pagetitle}
  </title>
  <meta name="og:title" content={pagetitle} />
  <meta name="twitter:title" content={pagetitle} />
  <meta name="og:site_name" content="tiinvo" />
  <meta name="og:type" content="website" />

  {#if description}
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}
  {#if keywords}
    <meta name="keywords" content={`javascript,typescript,library,tiinvo,${keywords}`} />
  {/if}
</svelte:head>
