<template>
  <div id="app" class="w-4/5 m-auto bg-white rounded-xl shadow-xl my-10">
  <Drawer></Drawer>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
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
      return Math.random().toString(36).substr(2, 9)
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
    Drawer
  },
  mounted () {
    this.$store.dispatch('showInfo')
    this.setCookie()
    this.$store.dispatch('getUserOrder')
  }
}
</script>
