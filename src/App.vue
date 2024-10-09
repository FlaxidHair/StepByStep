<template>
  <div id="app" class="w-4/5 m-auto bg-white h-screen rounded-xl shadow-xl mt-10">
    <Header></Header>
  </div>
</template>

<style>

</style>

<script>
import Header from './components/AppHeader.vue'
export default {
  data () {
    return {
      info: '1231232'
    }
  },
  methods: {
    async showInfo () {
      const snap = await fetch('https://6a334d4f8b40d716.mokky.dev/stepbystep')
      const data = await snap.json()
      console.log(data)
    }
  },
  components: {
    Header
  }
}
</script>
