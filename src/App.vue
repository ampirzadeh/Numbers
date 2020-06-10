<template>
  <v-app>
    <v-app-bar
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      color="primary"
      extension-height="200"
      app
      dark
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, #2196F3, #D500F9" />
      </template>

      <v-toolbar-title id="title">AMPirzadeh Numbers</v-toolbar-title>

      <v-spacer />

      <template v-slot:extension>
        <v-row>
          <v-col class="mx-auto" md="6" sm="12">
            <v-text-field
              outlined
              type="number"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              v-model="$store.state.search"
              @keypress.enter="$router.push($store.state.search)"
              :rules="[rules.required, rules.min, rules.max]"
            />
          </v-col>
        </v-row>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "AMPirzadeh",
    titleTemplate: "%s | AMPirzadeh Numbers"
  },
  data() {
    return {
      rules: {
        required: value => !!value || "Required",
        max: value =>
          eval(value) < Number.MAX_SAFE_INTEGER || "The number is too big",
        min: value =>
          eval(value) > Number.MIN_SAFE_INTEGER || "The number is too small"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#title {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
}
.v-application {
  background: #e3f2fd !important;
}
</style>
