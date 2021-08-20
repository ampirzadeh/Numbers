<script lang="ts">
  export let numb: number;
  $: num = +numb;
  const bases = {
    Binary: 2,
    Ternary: 3,
    Quaternary: 4,
    Quinary: 5,
    Senary: 6,
    Octal: 8,
    Decimal: 10,
    Duodecimal: 12,
    Hexadecimal: 16,
    Vigesimal: 20,
    Base36: 36,
  };

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="base-conversion">
  <h3 class="text-lg" slot="title">Base conversion ({num})</h3>

  <table slot="body" class="w-full">
    <thead class="bg-cyan-600">
      <th class="rounded-tl border-l-6 border-solid border-cyan-600">Base</th>
      <th>System</th>
      <th class="rounded-tr">Value</th>
    </thead>
    <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
      {#each Object.entries(bases) as [bName, bNumber], i}
        <tr>
          <td
            class="px-5 py-2 text-center bg-cyan-500 bg-opacity-30 w-1/8 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
          >
            <span class="text-xs md:(text-sm font-bold)"> {bNumber} </span>
          </td>
          <td class="px-5 py-2 w-1/4">
            <span class="text-xs md:(text-sm font-bold)"> {bName} </span>
          </td>
          <td class="px-6 py-2 not-last:rounded-tl-none">
            <span class="text-sm">
              {num.toString(bNumber)}
            </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</BaseSection>
