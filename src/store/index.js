import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartMoney: 0,
    items: [],
    optionsFilter: [{ title: 'По названию', value: 'name' }, { title: 'По цене (дешевые)', value: 'price' }, { title: 'По цене (дорогие)', value: '--price' }],
    selectedFilter: 'name',
    isShowCart: false
  },
  getters: {
    cartItems (state) {
      const cartData = state.items.filter((el) => {
        return el.isAdded
      })
      return cartData
    }
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    },
    openCart (state) {
      state.isShowCart = !state.isShowCart
    }
  },
  actions: {
    async showInfo () {
      const snap = await fetch('https://6a334d4f8b40d716.mokky.dev/stepbystep')
      const data = await snap.json()
      this.commit('SET_ITEMS', data)
    }
  },
  modules: {
  }
})
