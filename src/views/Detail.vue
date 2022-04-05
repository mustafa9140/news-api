<template>
  <div class="about">
    <h1>{{ article.title }}</h1>
    <div class="image-wrapper">
      <img :src="article.urlToImage" alt="" />
    </div>
    <p>{{ article.description }}</p>
    <p>{{ article.content }}</p>
    <br />
    <br />
    <p v-if="article.author != null ">Author: {{ article.author }}</p>
    <p v-if="typeof article.source != 'undefined' 
    ">
      Source: {{ article.source.name }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: [],
    };
  },

  created() {
    // console.log("The id is: " + this.$route.params.id);
    // console.log(this.$store.getters.news[this.$route.params.id]);
    // this.article = this.$store.getters.news[this.$route.params.id];
  },
  mounted() {
    let self = this;
    setTimeout(function () {
      self.article = self.$store.getters.news[self.$route.params.id];
      self.$store.commit("updateHistory", self.article.title);
    }, 350);
  },
};
</script>
<style lang="scss" scoped>
.image-wrapper {
  img {
    max-width: 100%;
  }
}
</style>
