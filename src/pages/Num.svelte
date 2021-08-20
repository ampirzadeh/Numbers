<script lang="ts">
  import Summary from "./sections/Summary.svelte";
  import Properties from "./sections/Properties.svelte";
  import Name from "./sections/Name.svelte";
  import Notation from "./sections/Notation.svelte";
  import PrimeFactorization from "./sections/PrimeFactorization.svelte";
  import Divisors from "./sections/Divisors.svelte";
  import Divisibility from "./sections/Divisibility.svelte";
  import BaseConversion from "./sections/BaseConversion.svelte";
  import BaseCalculations from "./sections/BaseCalculations.svelte";

  export let params: { num?: string } = {};
  const sections = [
    Summary,
    Properties,
    Name,
    Notation,
    PrimeFactorization,
    Divisors,
    Divisibility,
    BaseConversion,
    BaseCalculations,
  ];
</script>

{#each sections as section}
  <svelte:component this={section} numb={params.num} />
{/each}
