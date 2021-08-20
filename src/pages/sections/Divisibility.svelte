<script lang="ts">
  import { divisibility } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;
  $: divis = divisibility(num);

  const makeString = (arr: Array<any>) => {
    if (arr.length === 1) return arr[0];
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return `${firsts.join(", ")} and ${last}`;
  };

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="divisibility">
  <h3 class="text-lg" slot="title">Divisibility of {num}</h3>

  <div slot="body">
    <table class="w-full">
      <tbody class="bg-gray-800">
        <tr>
          <td
            class="px-5 py-2 rounded-tl bg-cyan-500 bg-opacity-25 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
          >
            <span class="text-xs md:(text-sm font-bold)"> m </span>
          </td>
          {#each divis as di, i}
            <td
              class="px-6 py-2 text-center last-of-type:rounded-r"
              class:bg-gray-900={i % 2}
              class:bg-opacity-85={i % 2 && !di.remainder}
              class:bg-cyan-500={!di.remainder}
              class:text-gray-900={!di.remainder}
            >
              <span class="text-sm">
                {di.number}
              </span>
            </td>
          {/each}
        </tr>

        <tr>
          <td
            class="px-5 py-2 rounded-bl bg-cyan-500 bg-opacity-30 w-1/4 border-l-6 border-solid border-cyan-600 transition-all duration-200 hover:pl-6"
          >
            <span class="text-xs md:(text-sm font-bold)"> n mod m </span>
          </td>

          {#each divis as di, i}
            <td
              class="px-6 py-2 text-center last-of-type:rounded-r"
              class:bg-gray-900={i % 2}
              class:bg-opacity-85={i % 2 && !di.remainder}
              class:bg-cyan-400={!di.remainder}
              class:text-gray-900={!di.remainder}
            >
              <span class="text-sm">
                {di.remainder}
              </span>
            </td>
          {/each}
        </tr>
      </tbody>
    </table>
    <p
      class="relative pl-10 mt-4 before:(content-i bg-cyan-500 bg-opacity-30 rounded-1 block font-serif h-8 w-8 leading-8 absolute left-0 text-center)"
    >
      The number {num} is divisible by {makeString(
        divis.filter((a) => !a.remainder).map((a) => a.number)
      )}.
    </p>
  </div>
</BaseSection>
