<template>
  <div id="app" class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-10">
    <Header></Header>
    <div class="p-10">
<h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
<CardList></CardList>
  </div>
  </div>
</template>

<style>

</style>

<script>
import Header from './components/AppHeader.vue'
import CardList from './components/AppCardList.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    CardList
  },
  mounted () {
    this.$store.dispatch('showInfo')
  }
}
</script>
