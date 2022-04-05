<template>
  <div>
    <h3>History</h3>
    <ul>
      <li
        v-for="(a, i) in articles.slice().reverse()"
        :key="a + (Math.random() + 1).toString(36).substring(7)"
      >
        <strong>{{ i+1 }}</strong> {{ a }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    articles: {
      get() {
        return this.$store.getters.history;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  width: 100%;
  text-align: center;
}
ul {
  list-style: none;
  padding: 15px !important;
  li {
    margin-bottom: 20px;
  }
}
</style>
