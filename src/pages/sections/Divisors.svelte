<script lang="ts">
  import { allPositiveDivisors } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;
  $: divisors = allPositiveDivisors(num);

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="divisors">
  <h3 class="text-lg" slot="title">Divisors of {num}</h3>

  <div slot="body">
    <p
      class="bg-cyan-500 text-gray-900 w-full text-center py-4 mb-5 rounded relative after:(bg-cyan-500 -bottom-2 content absolute transform -translate-1/2 block w-5 h-5 rotate-45 left-1/2)"
    >
      {divisors.join(", ")}
    </p>
    <p class="text-center">
      <span class="text-cyan-400"> {divisors.length}</span>
      divisor{divisors.length === 1 ? "" : "s"}
    </p>

    <div class="flex flex-col gap-3 lg:flex-row flex-wrap mt-6">
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Total Divisors </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {divisors.length}
        </span>
      </div>
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Arithmetic Mean </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {(divisors.reduce((a, b) => a + b) / divisors.length).toFixed(4)}
        </span>
      </div>
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Sum of Divisors </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {divisors.reduce((a, b) => a + b)}
        </span>
      </div>
    </div>
  </div>
</BaseSection>
