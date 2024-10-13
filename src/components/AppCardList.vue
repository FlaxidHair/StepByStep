<template>
<div class="grid grid-cols-4 gap-5">
  <div  v-for="(item,index) in $store.state.items" :key="index">
      <Card :textName="item.title" :imageUrl="item.imageUrl" :textPrice="item.price"></Card>
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
  },
  components: {
    Card
  }
}
</script>
