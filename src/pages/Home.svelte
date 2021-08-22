<script lang="ts">
  import { push, link } from "svelte-spa-router";
  let numb: number = Math.round(Math.random() * 2000);
</script>

<form class="mx-auto w-3/4" on:submit|preventDefault={() => push(`/${numb}`)}>
  <input
    min="0"
    type="number"
    id="number"
    name="number"
    bind:value={numb}
    class="text-black rounded-md w-full px-2 py-1 text-center bg-gray-800 text-white focus:(outline-none ring) transition-shadow duration-200"
  />
</form>

<div class="flex gap-4 flex-wrap mt-10">
  {#each Array(999) as _, i}
    <a
      class="text-cyan-500 underline-cyan-500 underline btn"
      use:link
      href={`/${i + 2}`}>{i + 2}</a
    >
  {/each}
</div>
