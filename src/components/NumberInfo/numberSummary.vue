<template>
  <v-card max-width="1250" min-width="1100">
    <v-toolbar flat>
      <v-toolbar-title>{{ $route.params.number }}</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn icon tile :to="(parseInt($route.params.number) - 1).toString()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn icon tile :to="(parseInt($route.params.number) + 1).toString()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-divider />

    <v-card-text class="subtitle-1">
      <span>
        {{ new Intl.NumberFormat("en-US").format($route.params.number) }} is a
        {{ $route.params.number > 0 ? "positive" : "negative" }}
        {{ $route.params.number % 2 == 0 ? "even" : "odd" }}
        {{ numberOfDigits }}-{{ numberOfDigits > 1 ? "digits" : "digit" }}
        number following
        <router-link :to="parseInt($route.params.number - 1).toString()">
          {{ parseInt($route.params.number - 1).toString() }}
        </router-link>
        and preceding
        <router-link :to="(parseInt($route.params.number) + 1).toString()">
          {{ (parseInt($route.params.number) + 1).toString() }}
        </router-link>
        .</span
      >
      <span> The sum of its digits is {{ sumOfDigits }}. </span>
      <span>
        It has a total of
        {{ numberOfPrimeFactors }}
        prime factors and {{ numberOfDivisors }} positive divisors.
      </span>
      <span>
        {{ scino[0] }}
        x 10 <sup>{{ scino[1] }}</sup>
        .
      </span>
    </v-card-text>

    <v-card-actions>
      <v-chip-group column>
        <v-chip
          outlined
          v-for="chip in chips"
          :key="chip"
          :to="
            `#${encodeURIComponent(chip.toLowerCase()).replace(/%20/g, '-')}`
          "
          class="ml-2"
          color="primary"
          text-color="primary"
        >
          {{ chip }}
        </v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from "vue";
import pf from "primes-and-factors";

Vue.use(pf);

export default {
  name: "number-summary",
  data() {
    return {
      chips: [
        "Properties",
        "Name",
        "Notation",
        "Prime Factorization",
        "Divisors",
        "Divisibility test",
        "Base converter",
        "Basic calculations",
        "Geometrical shape",
        "Hash Functions",
      ],
    };
  },
  computed: {
    numberOfDigits() {
      switch (Math.abs(this.$route.params.number).toString().length) {
        case 1:
          return "one";
        case 2:
          return "two";
        case 3:
          return "three";
        case 4:
          return "four";
        case 5:
          return "five";
        case 6:
          return "six";
        case 7:
          return "seven";
        case 8:
          return "eight";
        case 9:
          return "nine";
        case 10:
          return "ten";
        case 11:
          return "eleven";
        case 12:
          return "twelve";
        case 13:
          return "thirteen";
        case 14:
          return "fourteen";
        case 15:
          return "fifthteen";
        case 16:
          return "sixteen";
        case 17:
          return "seventeen";
        case 18:
          return "eighteen";
        case 19:
          return "nineteen";
        case 20:
          return "twenty";
        case 21:
          return "twenty-one";
        case 22:
          return "twenty-two";
        case 23:
          return "twenty-three";
        case 24:
          return "twenty-four";
        default:
          return "twenty-five";
      }
    },
    sumOfDigits() {
      let dsum = 0;

      for (let i = 0; i < this.$route.params.number.toString().length; i++) {
        if (/[0-9]/.test(this.$route.params.number.toString()[i]))
          dsum += parseInt(this.$route.params.number.toString()[i]);
      }
      return dsum;
    },
    numberOfPrimeFactors() {
      return pf.getUniqueFactors(parseInt(this.$route.params.number)).length;
    },
    numberOfDivisors() {
      let numberOfDivisors = 1;

      for (let i = 0; i < this.$route.params.number / 2 + 2; i++) {
        if (this.$route.params.number % i == 0) {
          numberOfDivisors += 1;
        }
      }

      return numberOfDivisors;
    },
    scino() {
      return parseFloat(this.$route.params.number)
        .toExponential()
        .split("e+");
    },
  },
};
</script>
