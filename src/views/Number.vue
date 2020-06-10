<template>
  <v-container>
    <v-row>
      <properties class="mx-auto mt-n12" style="z-index: 20" />
    </v-row>
  </v-container>
</template>

<script>
import properties from "../components/NumberInfo/properties";

export default {
  components: { properties },
  metaInfo() {
    return {
      title: this.$route.params.number
    };
  }
};
</script>
