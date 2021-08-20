<script lang="ts">
  import { say } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="name">
  <h3 class="text-lg" slot="title">Name</h3>

  <table slot="body" class="w-full">
    <tbody class="bg-gray-800 divide-y divide-warm-gray-200">
      <tr>
        <td
          class="px-5 py-2 rounded-tl bg-cyan-500 bg-opacity-30 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
        >
          <span class="text-xs md:(text-sm font-bold)"> Short name </span>
        </td>
        <td class="px-6 py-2 rounded-tr">
          <span class="text-sm">
            {say(num, true)}
          </span>
        </td>
      </tr>

      <tr>
        <td
          class="px-5 py-2 rounded-bl bg-cyan-500 bg-opacity-30 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
        >
          <span class="text-xs md:(text-sm font-bold)"> Long name </span>
        </td>
        <td class="px-6 py-2 rounded-tr">
          <span class="text-sm">
            {say(num, false)}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</BaseSection>
