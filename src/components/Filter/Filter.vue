<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="$store.state.sources"
          label="Filter News"
          :value="$store.state.selectedSource"
          dense
          v-model="selected"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Filterer",
  computed: {
    selected: {
      get() {
        return this.$store.state.selectedSource;
      },
      set(newValue) {
        this.$store.commit("updateSelectedFilter", newValue);
      },
    },
  },

  methods: {
    selectedM() {
      console.log("clicked");
    },
  },
};
</script>
