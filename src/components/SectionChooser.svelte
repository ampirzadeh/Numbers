<script lang="ts">
  import { scrollto } from "svelte-scrollto";

  const sections = [
    "Properties",
    "Name",
    "Notation",
    "Prime Factorization",
    "Divisors",
    "Other Arithmetic Functions",
    "Divisibility test",
    "Base converter",
    "Classification",
  ];
</script>

<ul class="mt-3 flex flex-wrap content-center">
  {#each sections as section}
    <li
      class="bg-cyan-500 bg-opacity-30 cursor-pointer text-sm px-3 text-center rounded-xl text-center m-1"
      use:scrollto={{ element: section.toLocaleLowerCase() }}
    >
      {section}
    </li>
  {/each}
</ul>
