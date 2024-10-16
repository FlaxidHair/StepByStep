import Vue from 'vue'
import VueRouter from 'vue-router'
import CardList from '../views/AppCardList.vue'
import Favorites from '../views/AppFavoriteItems.vue'
import MyOrder from '../views/AppMyOrder.vue'

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
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: MyOrder
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
