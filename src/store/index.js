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
    userIdCookie: null,
    orderCheck: false,
    generateId: 0,
    emailUser: ''
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
    getPerCentCount (state, getters) {
      return Math.floor(getters.cartMoney * 0.05)
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
    },
    generateIdOrder (state) {
      return '#' + Math.floor(Math.random() * 1000) + state.generateId
    }
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    },
    openCart (state) {
      state.isShowCart = !state.isShowCart
      state.orderCheck = false
    },
    onClickAdded (state, item) {
      if (state.cartItems.find(product => item.id === product.id)) {
        state.cartItems.splice(state.cartItems.indexOf(item), 1)
      } else {
        state.cartItems.push(item)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      state.cartItems = JSON.parse(localStorage.getItem('cartItems'))
    },
    onClickFavorite (state, item) {
      if (!item.favoriteId.includes(state.userIdCookie)) {
        item.favoriteId.push(state.userIdCookie)
        this.dispatch('addFavoriteItem', item)
      } else {
        state.itemsFavorite.splice(state.itemsFavorite.indexOf(item), 1)
        item.favoriteId.splice(item.favoriteId.indexOf(state.userIdCookie), 1)
        this.dispatch('addFavoriteItem', item)
      }
    },
    getOrder (state) {
      const data = this.dispatch('addOrder')
      if (data) {
        state.emailUser = ''
        state.orderCheck = true
        state.cartItems = []
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        state.generateId++
      }
    }
  },
  actions: {
    async showInfo () {
      const snap = await axios.get('https://6a334d4f8b40d716.mokky.dev/stepbystep')
      this.commit('SET_ITEMS', snap.data)
    },
    async addFavoriteItem (_, item) {
      await axios.patch(
        `https://6a334d4f8b40d716.mokky.dev/stepbystep/${item.id}`,
        item
      )
    },
    async addOrder ({ _, state }) {
      const data = await axios.post('https://6a334d4f8b40d716.mokky.dev/StepByStepOrders', { items: state.cartItems, userId: state.userIdCookie, email: state.emailUser })
      return data
    }
  }
})
