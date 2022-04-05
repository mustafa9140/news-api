import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'
import apiKey from "../key"


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    news: [],
    sources: [],
    selectedSource: "",
    history: []
  },
  mutations: {
    setNews(state, articles) {
      state.news = [...articles]
    },
    setSources(state, sources) {
      state.sources = sources.map((s) => {
        return s.name
      })
    },
    updateSelectedFilter(state, newValue) {
      state.selectedSource = newValue
    },
    updateHistory(state, article) {
      state.history.push(article)
    },
    updateNews(state, payload) {

      console.log(payload.title)
      console.log(payload.id)
      console.log(state.news)
      state.news[payload.id].title = payload.title

    }
  },
  actions: {
    setNews({
      commit
    }) {
      axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey).then((res) => {
        console.log(res.data.articles)
        commit('setNews', res.data.articles)
      })
    },
    setSources({
      commit
    }) {
      axios('https://newsapi.org/v2/sources?apiKey=' + apiKey)
        .then((res) => {
          console.log(res.data.sources)
          commit('setSources', res.data.sources)
        })
    }
  },
  getters: {
    news(state) {
      return state.news
    },
    history(state) {
      return state.history
    },
    selectedSource(state){
      return state.selectedSource
    }
  },
  modules: {}
})