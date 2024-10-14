<template>
  <div id="app" class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-10">
  <Drawer></Drawer>
    <Header></Header>
    <div class="p-10">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-y-3">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>
        <div class="relative flex">
          <img src="/search.svg" alt="Search" class="absolute left-3 top-3">
          <input type="text" placeholder="Поиск" class="border border-gray-light rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray">
        </div>
          <select v-model="$store.state.selectedFilter" class="py-3 px-5 border rounded-lg border-gray-light focus:border-gray outline-none">
          <option v-for="filter in $store.state.optionsFilter" :key="filter">{{filter}}</option>
        </select>
      </div>
<CardList></CardList>
  </div>
  </div>
</template>

<style>

</style>

<script>
import Header from './components/AppHeader.vue'
import CardList from './components/AppCardList.vue'
import Drawer from './components/AppDrawer.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    CardList,
    Drawer
  },
  mounted () {
    this.$store.dispatch('showInfo')
  }
}
</script>
