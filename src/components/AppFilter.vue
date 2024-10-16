<template>
        <div class="p-10">
      <div class="flex justify-between items-center xl:mb-8 lg:mb-6 md:mb-4 sm:mb-2 mb-2 flex-wrap gap-y-3">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>
        <div class="relative flex">
          <img src="./search.svg" alt="Search" class="absolute left-3 top-3">
          <input type="text" @input="timeoutRequest" v-model="searchValue" placeholder="Поиск" class="border border-gray-light rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray">
        </div>
          <select @change="filter()" v-model="selectedFilter" class="py-3 px-5 border rounded-lg border-gray-light focus:border-gray outline-none">
          <option v-for="filter in $store.state.optionsFilter" :key="filter.title" :value="filter.value">{{filter.title}}</option>
        </select>
      </div>
    </div>
</template>

<script>
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
    }
  }
}

</script>
