<template>
  <v-card color="blue lighten-5" max-width="1250" min-width="1100" flat>
    <v-toolbar flat color="blue lighten-5">
      <v-toolbar-title>
        Basic properties
      </v-toolbar-title>
    </v-toolbar>

    <v-divider />

    <v-list color="blue lighten-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Is Prime</v-list-item-title>
          <v-list-item-subtitle>
            {{ isprime ? "No" : "Yes" }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Number parity</v-list-item-title>
          <v-list-item-subtitle>
            {{ $route.params.number % 2 == 0 ? "Even" : "Odd" }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Number length</v-list-item-title>
          <v-list-item-subtitle>
            {{ $route.params.number.toString().length }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Sum of Digits</v-list-item-title>
          <v-list-item-subtitle>{{ sumOfDigits }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-card-text />
  </v-card>
</template>

<script>
export default {
  name: "basic-properties",
  computed: {
    isprime() {
      let num = this.$route.params.number;
      if (num === 2) {
        return true;
      } else if (num > 1) {
        for (var i = 2; i < num; i++) {
          if (num % i !== 0) {
            return true;
          } else if (num === i * i) {
            return false;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
      return 0;
    },
    sumOfDigits() {
      let dsum = 0;

      for (let i = 0; i < this.$route.params.number.toString().length; i++) {
        if (/[0-9]/.test(this.$route.params.number.toString()[i]))
          dsum += parseInt(this.$route.params.number.toString()[i]);
      }
      return dsum;
    },
  },
};
</script>
