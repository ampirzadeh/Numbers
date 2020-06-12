<template>
  <v-container>
    <v-row>
      <number-summary class="mx-auto my-3" />
      <basic-properties id="#properties" class="mx-auto my-3" />
    </v-row>
  </v-container>
</template>

<script>
import numberSummary from "../components/NumberInfo/numberSummary";
import basicProperties from "../components/NumberInfo/basicProperties";

export default {
  components: { numberSummary, basicProperties },
  metaInfo() {
    return {
      title: this.$route.params.number,
    };
  },
};
</script>
