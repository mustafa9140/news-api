<template>
  <v-card height="200">
    <div class="image-wrapper">
      <img :src="content.urlToImage" />
    </div>

    {{ content.title }}

    <NewsRename :id="index" :title="content.title" />
    <!-- <v-btn text="">See More</v-btn> -->
    <router-link
      class="anchor v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default"
      :to="'/detail/' + index"
      ><span class="v-btn__content">See More</span></router-link
    >
  </v-card>
</template>

<script>
import NewsRename from "./NewsRename";
export default {
  components: {
    NewsRename,
  },
  props: ["content", "index"],
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  text-align: center;
  img {
    width: 50%;
    margin: auto;
  }
}

.v-card {
  margin-bottom: 100px;
  padding: 10px;
  height: 300px !important;
}
.anchor {
  background-color: transparent !important;
  color: #313131;
  float: left;
  border: 0;
  box-shadow: none;
  margin-top: 15px;
}
</style>
