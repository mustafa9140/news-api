<template>
  <v-row>
    <Filterer></Filterer>
    <v-col
      v-for="(n, i) in news"
      :key="n.urlToImage"
      cols="12"
      xs="12"
      sm="6"
      md="4"
    >
      <NewsCard :content="n" :index="i" />
    </v-col>
    <div v-if="news.length == 0">No news found in this category</div>
  </v-row>
</template>

<script>
import NewsCard from "./NewsCard";
import Filterer from "../Filter/Filter";

export default {
  name: "NewsListing",
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    let self = this;
    setTimeout(function () {
      self.news = self.$store.getters.news;
      if (self.$store.state.selectedSource != "") {
        self.news = self.$store.getters.news.filter(function (el) {
          return el.source.name == self.$store.state.selectedSource;
        });
      }
    }, 1000);
  },
  components: {
    NewsCard,
    Filterer,
  },
  computed: {
    filter() {
      return this.$store.getters.selectedSource;
    },
    newws(){
      return this.$store.getters.selectedSource;
    }
  },
  watch: {
    filter(newfilter, oldfilter) {
      this.news = this.$store.getters.news.filter(function (el) {
        return el.source.name == newfilter;
      });
    },
  },
};
</script>

<style></style>
