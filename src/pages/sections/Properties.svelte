<script lang="ts">
  import { sumOfDigits, digitalRoot, isPrime } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;

  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="properties">
  <h3 class="text-lg" slot="title">Basic Properties</h3>

  <div slot="body" class="flex flex-col lg:flex-row flex-wrap gap-5">
    <div
      class="flex-1 text-center bg-gray-800 rounded flex flex-col justify-between"
    >
      <code class="text-sm font-semibold my-2">Is Prime?</code>
      <span class="bg-cyan-500 bg-opacity-30 p-1 rounded-b">
        {isPrime(num) ? "Yes" : "No"}
      </span>
    </div>
    <div
      class="flex-1 text-center bg-gray-800 rounded flex flex-col justify-between"
    >
      <code class="text-sm font-semibold my-2">Number parity</code>
      <span class="bg-cyan-500 bg-opacity-30 p-1 rounded-b">
        {num % 2 === 0 ? "Even" : "Odd"}
      </span>
    </div>
    <div
      class="flex-1 text-center bg-gray-800 rounded flex flex-col justify-between"
    >
      <code class="text-sm font-semibold my-2">Number length</code>
      <span class="bg-cyan-500 bg-opacity-30 p-1 rounded-b">
        {num.toString().length}
      </span>
    </div>
    <div
      class="flex-1 text-center bg-gray-800 rounded flex flex-col justify-between"
    >
      <code class="text-sm font-semibold my-2">Sum of Digits</code>
      <span class="bg-cyan-500 bg-opacity-30 p-1 rounded-b"
        >{sumOfDigits(num)}</span
      >
    </div>
    <div
      class="flex-1 text-center bg-gray-800 rounded flex flex-col justify-between"
    >
      <code class="text-sm font-semibold my-2">Digital Root</code>
      <span class="bg-cyan-500 bg-opacity-30 p-1 rounded-b"
        >{digitalRoot(num)}</span
      >
    </div>
  </div>
</BaseSection>
