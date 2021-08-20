<script lang="ts">
  export let numb: number;
  $: num = +numb;

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="base-calculations">
  <h3 class="text-lg" slot="title">Base conversion ({num})</h3>

  <div class="flex flex-col lg:flex-row flex-wrap gap-4" slot="body">
    <table class="w-full">
      <thead class="bg-cyan-600">
        <th class="rounded-tl border-l-6 border-solid border-cyan-600"
          >Multiplication</th
        >
        <th class="rounded-tr text-right pr-3">n.y</th>
      </thead>
      <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
        {#each Array(5) as _, i}
          <tr>
            <td
              class="px-5 py-2 text-center bg-cyan-500 bg-opacity-30 w-1/8 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
            >
              <span class="text-xs md:(text-sm font-bold)">
                n × {i + 2}
              </span>
            </td>
            <td class="px-5 py-2 w-1/4">
              <span class="text-xs md:(text-sm font-bold)">
                {num * (i + 2)}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    <table class="w-full">
      <thead class="bg-cyan-600">
        <th class="rounded-tl border-l-6 border-solid border-cyan-600"
          >Division</th
        >
        <th class="rounded-tr text-right pr-3">n÷y</th>
      </thead>
      <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
        {#each Array(5) as _, i}
          <tr>
            <td
              class="px-5 py-2 text-center bg-cyan-500 bg-opacity-30 w-1/8 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
            >
              <span class="text-xs md:(text-sm font-bold)">
                n ÷ {i + 2}
              </span>
            </td>
            <td class="px-5 py-2 w-1/4">
              <span class="text-xs md:(text-sm font-bold)">
                {num / (i + 2)}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    <table class="w-full">
      <thead class="bg-cyan-600">
        <th class="rounded-tl border-l-6 border-solid border-cyan-600"
          >Exponentiation</th
        >
        <th class="rounded-tr text-right pr-3">n <sup>y</sup></th>
      </thead>
      <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
        {#each Array(5) as _, i}
          <tr>
            <td
              class="px-5 py-2 text-center bg-cyan-500 bg-opacity-30 w-1/8 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
            >
              <span class="text-xs md:(text-sm font-bold)">
                n <sup> {i + 2} </sup>
              </span>
            </td>
            <td class="px-5 py-2 w-1/4">
              <span class="text-xs md:(text-sm font-bold)">
                {Math.pow(num, i + 2)}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</BaseSection>
