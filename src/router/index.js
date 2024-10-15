import Vue from 'vue'
import VueRouter from 'vue-router'
import CardList from '../components/AppCardList.vue'
import Favorites from '../components/AppFavoriteItems.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CardList
  },
  {
    path: '/Favorites',
    name: 'favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
