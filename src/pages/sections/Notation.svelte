<script lang="ts">
  import { engineeringNotation } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;
  $: sciNo = num.toExponential().split("e+");
  $: engNo = Object.values(engineeringNotation(num));

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="notation">
  <h3 class="text-lg" slot="title">Notation</h3>

  <table slot="body" class="w-full">
    <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
      <tr>
        <td
          class="px-5 py-2 rounded-tl bg-cyan-500 bg-opacity-30 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
        >
          <span class="text-xs md:(text-sm font-bold)">
            Scientific notation
          </span>
        </td>
        <td class="px-6 py-2 rounded-tr">
          <span class="text-sm">
            {sciNo[0]} × 10
            <sup>{sciNo[1]}</sup>
          </span>
        </td>
      </tr>

      <tr>
        <td
          class="px-5 py-2 rounded-bl bg-cyan-500 bg-opacity-30 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
        >
          <span class="text-xs md:(text-sm font-bold)">
            Engineering notation
          </span>
        </td>
        <td class="px-6 py-2 rounded-tr">
          <span class="text-sm">
            {engNo[0]} × 10
            <sup>{engNo[1]}</sup>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</BaseSection>
