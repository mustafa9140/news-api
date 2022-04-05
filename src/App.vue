<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <History />
    </v-navigation-drawer>

    <v-app-bar app dense shrink-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>News</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/search">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import History from "@/components/History/History";
import Filterer from "@/components/Filter/Filter";
export default {
  data: () => ({ drawer: false }),
  components: {
    History,
    Filterer,
  },
  created() {
    this.$store.dispatch("setNews");
    this.$store.dispatch("setSources");
  },
};
</script>
