import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartMoney: 0,
    items: [],
    itemsFavorite: [],
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    optionsFilter: [{ title: 'По названию', value: 'name' }, { title: 'По цене (дешевые)', value: 'price' }, { title: 'По цене (дорогие)', value: '-price' }],
    isShowCart: false,
    userIdCookie: null
  },
  getters: {
    cartMoney (state) {
      if (state.cartItems) {
        return state.cartItems.reduce((acc, el) => {
          return acc + el.price
        }, 0)
      } else {
        return 0
      }
    },
    getItemsFavorite (state) {
      state.items.forEach((el) => {
        if (el.favoriteId.find((id) => id === state.userIdCookie)) {
          if (state.itemsFavorite.includes(el)) {
            return state.itemsFavorite
          } else {
            state.itemsFavorite.push(el)
          }
        }
      })
      return state.itemsFavorite
    }
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    },
    openCart (state) {
      state.isShowCart = !state.isShowCart
    },
    onClickAdded (state, item) {
      if (state.cartItems.find(product => item.id === product.id)) {
        state.cartItems.splice(state.cartItems.indexOf(item), 1)
      } else {
        state.cartItems.push(item)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      this.$store.state.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    },
    async onClickFavorite (state, item) {
      if (!item.favoriteId.includes(state.userIdCookie)) {
        item.favoriteId.push(state.userIdCookie)
      } else {
        state.itemsFavorite.splice(state.itemsFavorite.indexOf(item), 1)
        item.favoriteId.splice(item.favoriteId.indexOf(state.userIdCookie), 1)
      }
      await axios.patch(
        `https://6a334d4f8b40d716.mokky.dev/stepbystep/${item.id}`,
        item
      )
    }
  },
  actions: {
    async showInfo () {
      const snap = await axios.get('https://6a334d4f8b40d716.mokky.dev/stepbystep')
      this.commit('SET_ITEMS', snap.data)
    }
  },
  modules: {
  }
})
