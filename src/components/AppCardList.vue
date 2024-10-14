<template>
<div class="grid grid-cols-4 gap-3">
  <div v-for="(item,index) in $store.state.items" :key="index">
    {{ item.isFavorite }}
    {{ item.isAdded }}
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
    onClickAdded () {
      alert(1)
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
