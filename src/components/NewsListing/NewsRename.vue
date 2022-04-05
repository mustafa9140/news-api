<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="anchor" color="" dark v-bind="attrs" v-on="on">
          Rename
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Rename </v-card-title>

        <v-text-field
          label="Main input"
          :rules="rules"
          hide-details="auto"
          v-model="title2"
        ></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="updated"> Update </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["id", "title"],
  data() {
    return {
      title2: this.title,
      dialog: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
        (value) => (value && value.length <= 255) || "Mx 255 characters",
      ],
    };
  },
  created() {},
  methods: {
    updated() {
      let self = this;
      if (self.title2.length > 2 && self.title2.length < 256) {
        self.dialog = false;
        let payload = {
          title: self.title2,
          id: self.id,
        };
        this.$store.commit("updateNews", payload);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.anchor {
  background-color: transparent !important;
  color: #313131;
  float: right;
  border: 0;
  box-shadow: none;
  margin-top: 15px;
}
.v-input {
  padding: 10px;
}
</style>
