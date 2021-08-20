<script lang="ts">
  import { location } from "svelte-spa-router";

  $: isAtHome = $location === "/";
  $: LINK = isAtHome ? window.location.host : "/";
  $: LINK_TEXT = isAtHome ? "ampirzadeh's" : "Home";
  $: TITLE = isAtHome ? "Numbers" : $location.replace("/", "");
  // $: num = +$location.replace(/\D/g, "");

  // let num: number = +params.num;
</script>

<header class="text-center py-12 mx-auto">
  <a href={LINK} class="text-sm font-semibold mb-2 font-mono">
    {LINK_TEXT}
  </a>
  <h1
    class="font-extrabold tracking-wide text-6xl text-cyan-500 w-auto leading-tight"
  >
    {TITLE}
  </h1>

  <!-- <form on:submit={() => push(`/${num}`)}>
    <input class="text-black" type="text" bind:value={num} />

    <button type="submit">H</button>
  </form> -->
</header>
