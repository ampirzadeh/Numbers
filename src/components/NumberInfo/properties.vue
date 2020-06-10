<template>
  <v-card max-width="1000">
    <v-toolbar flat>
      <v-toolbar-title>{{ $route.params.number }}</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn icon tile :to="(Number($route.params.number) - 1).toString()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn icon tile :to="(Number($route.params.number) + 1).toString()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-divider />

    <v-card-text class="subtitle-1">
      {{ $route.params.number }} is a
      {{ $route.params.number > 0 ? "positive" : "negative" }}
      {{ $route.params.number % 2 == 0 ? "even" : "odd" }}
      {{ numberOfDigits }}-{{ numberOfDigits > 1 ? "digits" : "digit" }} number
      following
      <router-link :to="Number($route.params.number - 1).toString()">
        {{ Number($route.params.number - 1).toString() }}
      </router-link>
      and preceding
      <router-link :to="(Number($route.params.number) + 1).toString()">
        {{ (Number($route.params.number) + 1).toString() }}
      </router-link>
      . The sum of its digits is {{ sumOfDigits }}. It has a total of
      {{ numberOfPrimeFactors }}
      prime factors and {{ numberOfDivisors }} positive divisors.
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from "vue";
import pf from "primes-and-factors";
Vue.use(pf);

export default {
  name: "basic-properties",
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
      return pf.getUniqueFactors(Number(this.$route.params.number)).length;
    },
    numberOfDivisors() {
      return 0;
    }
  }
};
</script>
