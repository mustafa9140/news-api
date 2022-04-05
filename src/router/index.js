import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
}, {
  path: '/detail/:id',
  name: 'Detail',
  component: Detail,
}, {
  path: '/search',
  name: 'Search',
  component: Search
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router