<template>
  <div id="app" class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-10">
  <Drawer></Drawer>
    <Header></Header>
    <div class="p-10">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-y-3">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>
        <div class="relative flex">
          <img src="/search.svg" alt="Search" class="absolute left-3 top-3">
          <input type="text" @input="timeoutRequest" v-model="searchValue" placeholder="Поиск" class="border border-gray-light rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray">
        </div>
          <select @change="filter()" v-model="selectedFilter" class="py-3 px-5 border rounded-lg border-gray-light focus:border-gray outline-none">
          <option v-for="filter in $store.state.optionsFilter" :key="filter.title" :value="filter.value">{{filter.title}}</option>
        </select>
      </div>
<CardList></CardList>
  </div>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
import CardList from './components/AppCardList.vue'
import Drawer from './components/AppDrawer.vue'
import axios from 'axios'

export default {
  data () {
    return {
      selectedFilter: 'name',
      searchValue: '',
      timeout: null
    }
  },
  methods: {
    timeoutRequest () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.filter()
      }, 750)
    },
    async filter () {
      const snap = await axios(`https://6a334d4f8b40d716.mokky.dev/stepbystep?title=*${this.searchValue}*&sortBy=${this.selectedFilter}`)
      this.$store.state.items = snap.data
    },
    generateSessionId () {
      return 'session-' + Math.random().toString(36).substr(2, 9)
    },
    setCookie (name, value, days) {
      const expires = new Date(Date.now() + days * 864e5).toUTCString()
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
      let sessionId = this.getCookie('sessionId')
      if (!sessionId) {
        sessionId = this.generateSessionId()
        this.setCookie('sessionId', sessionId, 360)
      }
      this.$store.state.userIdCookie = sessionId
    },
    getCookie (name) {
      return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
      }, '')
    }
  },
  components: {
    Header,
    CardList,
    Drawer
  },
  mounted () {
    this.$store.dispatch('showInfo')
    this.setCookie()
  }
}
</script>
