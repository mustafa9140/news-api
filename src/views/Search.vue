<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Search Here"
            v-model="text"
            @keyup="getSearchResult"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in news" cols="12">
          {{ n.title }}
        </v-col>
        <v-col v-if="news.length == 0">
          <p>Please enter valid text to search</p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import apiKey from "../key";

export default {
  data() {
    return {
      text: "",
      news: [],
    };
  },
  methods: {
    getSearchResult() {
      let self = this;
      axios(
        "https://newsapi.org/v2/top-headlines?q=" +
          this.text +
          "&apiKey=" +
          apiKey
      ).then((res) => {
        console.log(res);
        self.news = res.data.articles;
        // commit("setSources", res.data.sources);
      });
    },
  },
};
</script>

<style></style>
