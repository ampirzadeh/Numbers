<script lang="ts">
  import { isPrime } from "@ampirzadeh/math";
  import { liouvilleLambda } from "@ampirzadeh/math";

  import { primeFactors, countOccurrences } from "@ampirzadeh/math";

  export let numb: number;
  $: num = +numb;
  $: factors = primeFactors(num);
  $: factorCount = countOccurrences(factors);
  $: primeOrComp = isPrime(num) ? "Prime" : "Composite";
  import BaseSection from "../../components/SectionBase.svelte";
</script>

<BaseSection id="prime-factorization">
  <h3 class="text-lg" slot="title">Prime Factorization</h3>

  <div slot="body">
    <section
      class="w-full bg-gradient-to-br from-cyan-500 to-cyan-900 pt-5 text-center text-lg rounded mb-5"
    >
      <h3>
        <strong class="font-bold">
          {#each Object.entries(factorCount) as [base, pow], i}
            {base}
            {#if pow.length > 1}
              <sup>{pow.length}</sup>
            {/if}
            {#if i !== [...new Set(factors)].length - 1} × {/if}{/each}
        </strong>
      </h3>

      <footer
        class="bg-gradient-to-tr from bg-cyan-700 to-cyan-900 w-full text-right mt-5 px-2 rounded"
      >
        <small>
          {primeOrComp} Number
        </small>
      </footer>
    </section>

    <div class="flex flex-col gap-3 lg:flex-row flex-wrap">
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Distinct Factors </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {Object.keys(factorCount).length}
        </span>
      </div>
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Total Factors </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {factors.length}
        </span>
      </div>
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Radical </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {Object.keys(factorCount)
            .map((k) => +k)
            .reduce((a, b) => a * b)}
        </span>
      </div>
      <div class="flex-1 rounded bg-gray-800 flex justify-between">
        <span class="w-3/4 m-2"> Liouville Lambda </span>
        <span
          class="text-cyan-50 bg-cyan-500 bg-opacity-30 rounded-r text-center flex-1 p-2"
        >
          {liouvilleLambda(num)}
        </span>
      </div>
    </div>

    <p
      class="relative pl-10 mt-4 before:(content-i bg-cyan-500 bg-opacity-30 rounded-1 block font-serif h-8 w-8 leading-8 absolute left-0 text-center)"
    >
      The prime factorization of {num} is
      {#each Object.keys(factorCount) as base, i}{base}
        {#if i !== [...new Set(factors)].length - 1}
          ×
        {/if}{/each}. Since it has a total of {factors.length} prime factors, {num}
      is a
      {primeOrComp.toLocaleLowerCase()} number.
    </p>
  </div>
</BaseSection>
