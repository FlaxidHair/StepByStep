import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartMoney: 0,
    generateId: 0,
    items: [],
    itemsFavorite: [],
    userOrders: [],
    allOrderUser: [],
    optionsFilter: [{ title: 'По названию', value: 'name' }, { title: 'По цене (дешевые)', value: 'price' }, { title: 'По цене (дорогие)', value: '-price' }],
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    userIdCookie: null,
    isShowCart: false,
    orderCheck: false,
    emailUser: '',
    quantity: ''
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
    },
    getUserOrders (state) {
      state.userOrders.forEach((el) => {
        el.items.forEach((element) => {
          state.allOrderUser.push(element)
        })
      })
      const table = {}
      const result = state.allOrderUser.filter(({ id }) => (!table[id] && (table[id] = 1)))
      return result
    }
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items || []
    },
    SET_ORDERS (state, orders) {
      state.userOrders = orders || []
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
      this.dispatch('getUserOrder')
      return data
    },
    async getUserOrder ({ _, state }) {
      const snap = await axios.get(`https://6a334d4f8b40d716.mokky.dev/StepByStepOrders?userId=${state.userIdCookie}`)
      this.commit('SET_ORDERS', snap.data)
    }
  }
})
