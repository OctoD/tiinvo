<script>
  import HomepageClickableBox from "$lib/HomepageClickableBox.svelte";
  import Version from "$lib/Version.svelte";

  const installcmd = `npm i tiinvo`;
  const copytoclipboard = () => navigator.clipboard.writeText(installcmd);
</script>

<div
  class="fixed top-0 left-0 h-screen w-screen bg-slate-50 dark:bg-slate-900 z-50 flex flex-col justify-center"
>
  <article class="mx-auto max-w-xs text-center">
    <h1 class="text-6xl text-violet-500">tiinvo</h1>
    <p class="mb-4">
      <Version>
        {#await fetch(`https://raw.githubusercontent.com/octod/tiinvo/master/package.json`).then( (r) => r.json() )}
          loading version
        {:then pkg}
          {pkg.version}
        {/await}
      </Version>
    </p>
    <p class="text-slate-600 mb-6">
      A lib of types and utilities for your TypeScript and JavaScript projects
    </p>
    <pre
      class="cursor-pointer bg-slate-100 dark:bg-violet-900 rounded-xl py-4 hover:bg-slate-200 dark:hover:bg-violet-800 transition-colors"
      on:click={copytoclipboard}>
        <code>
          {installcmd}
        </code>
      </pre>
  </article>

  <section
    class="mx-auto max-w-2xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-center w-full px-10"
  >
    <HomepageClickableBox href="/docs">
      <span slot="title">Documentation</span>
      <span slot="description">Read the docs</span>
    </HomepageClickableBox>
    <HomepageClickableBox
      href="https://github.com/OctoD/tiinvo"
      target="_blank"
    >
      <span slot="title">Github</span>
      <span slot="description">Read the source</span>
    </HomepageClickableBox>
  </section>
</div>
