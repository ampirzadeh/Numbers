<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";

  import Hero from "./components/Hero.svelte";
  // import Debug from "./components/Debug.svelte";
</script>

<Hero />
<!-- <Debug /> -->
<main class="px-4 w-full sm:w-4/5 2xl:w-1/2 mx-auto">
  <Router {routes} />
</main>

<style
  global
  windi:global
  windi:preflights:global
  windi:safelist:global
  lang="postcss">
  body {
    @apply bg-warm-gray-900 text-gray-50;
  }
  /* .debug *:not(body):not(html) {
    @apply border-red-600 border border-solid;
  }
  .btn {
    @apply !border-none outline-none py-2 px-4 font-semibold rounded-lg shadow-md transition-all duration-300;
  }
  .btn:focus,
  .btn:focus-within {
    @apply outline-none;
  } */
</style>
