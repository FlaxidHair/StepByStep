import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartMoney: 0,
    items: [],
    optionsFilter: ['По названию', 'По цене (дешевые)', 'По цене (дорогие)'],
    selectedFilter: 'По названию'
  },
  getters: {
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
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
