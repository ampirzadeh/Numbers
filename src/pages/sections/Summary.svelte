<script lang="ts">
  import { link } from "svelte-spa-router";
  import SectionChooser from "../../components/SectionChooser.svelte";
  import {
    allPositiveDivisors,
    coprime,
    isPrime,
    primeFactors,
    say,
    sumOfDigits,
  } from "@ampirzadeh/math";

  export let numb: number;

  $: num = +numb;

  const S = (n: number) => (n === 1 ? "" : "s");
  $: primeFact = primeFactors(num, false);
  $: positiveDiv = allPositiveDivisors(num);
  $: coPr = coprime(num);
  const formatter = new Intl.NumberFormat();
  $: info = {
    formatted: formatter.format(num),
    say: say(num, false),
    parity: num % 2 === 0 ? "even" : "odd",
    numberOfDigits: say(num.toString().length, false),
    primarity: isPrime(num) ? "prime" : "composite",
    sciNo: num.toExponential().split("e+"),
    sumOfDigits: sumOfDigits(num),
    nOfPrimeFactors: primeFact.length,
    primeFactorsS: S(primeFact.length),
    nOfPositiveDivisors: positiveDiv.length,
    positiveDivisorsS: S(positiveDiv.length),
    nOfCoPrimes: coPr.length,
    coPrimeS: S(coPr.length),
    coPrimesIsAre: coPr.length === 1 ? "is" : "are",
  };
</script>

<section class="bg-warm-gray-800 rounded p-5 w-full" id="summary">
  <p>
    <span class="font-semibold">{info.formatted}</span>
    (<span class="text-cyan-500 text-sm">{info.say}</span>) is an {info.parity}
    {info.numberOfDigits}-digit {info.primarity} number following
    <a use:link class="text-cyan-500" href={`/${(num - 1).toString()}`}
      >{num - 1}</a
    >
    and preceding
    <a use:link class="text-cyan-500" href={`/${(num + 1).toString()}`}
      >{num + 1}</a
    >. In scientific notation, it is written as {info.sciNo[0]} × 10<sup
      >{info.sciNo[1]}</sup
    >. The sum of it's digits is {info.sumOfDigits}. It has a total of {info.nOfPrimeFactors}
    prime factor{info.primeFactorsS} and {info.nOfPositiveDivisors} positive divisor{info.positiveDivisorsS}.
    There {info.coPrimesIsAre}
    {formatter.format(info.nOfCoPrimes)} positive integer{info.coPrimeS} (up to {num})
    that are relativly prime to {num}.
  </p>

  <SectionChooser />
</section>
