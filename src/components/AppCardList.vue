<template>
<div class="grid grid-cols-4 gap-3">
  <div v-for="item in $store.state.items" :key="item.id">
      <Card :textName="item.title" :imageUrl="item.imageUrl" :textPrice="item.price" :isFavorite="item.isFavorite" :onClickAdded="onClickAdded" :onClickFavorite="onClickFavorite" :isAdded="item.isAdded"></Card>
  </div>
</div>
</template>

<script>
import Card from './AppCard.vue'

export default {
  data () {
    return {
    }
  },
  methods: {
    onClickAdded (item) {
      item = !item
      console.log(item)
      // await fetch('https://6a334d4f8b40d716.mokky.dev/stepbystep', {
      //   method: 'PATCH',
      //   body: JSON.stringify(this.$store.state.items)
      // })
    },
    onClickFavorite () {
      alert(1)
    }
  },
  computed: {
  },
  components: {
    Card
  }
}
</script>
