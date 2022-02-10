<script>
  import DarkMode from "$lib/DarkMode.svelte";
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
  <header
    class="sticky top-0 bg-violet-500 dark:bg-slate-900 text-white text-sm z-40"
    id="site-navigation"
  >
    <nav
      class="container mx-auto flex items-center space-x-5 font-semibold px-4"
    >
      <a href="/">Home</a>
      <a class="py-2" href="/docs"> Documentation </a>
      <a class="py-2" href="https://github.com/OctoD/tiinvo" target="_blank">
        Github
      </a>
      <div class="flex-1 flex justify-end">
        <DarkMode />
      </div>
    </nav>
  </header>

  <main class="container mx-auto py-5 flex-1 flex flex-col px-4">
    <slot />
  </main>

  <footer class="py-10 bg-slate-800 dark:bg-black text-white">
    <div class="container mx-auto flex items-start space-x-4 text-xs px-4">
      <span> tiinvo &copy; Paolo Roth </span>
      <nav class="underline space-x-2">
        <a href="https://github.com/OctoD/tiinvo" target="_blank">Github</a>
        <a href="/docs">Documentation</a>
      </nav>
    </div>
  </footer>
</div>
