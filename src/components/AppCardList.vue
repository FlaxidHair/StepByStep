<template>
<div class="grid grid-cols-4 gap-3">
  <div v-for="item in $store.state.items" :key="item.id">
    <div class="relative m-10 bg-white border border-opacity-40 border-gray-light rounded-2xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <img :src="item.isFavorite ? '/like-2.svg' : '/like-1.svg'" @click="onClickFavorite(item)" class="absolute top-8 left-8 cursor-pointer active:-translate-y-2 rounded-lg hover:shadow-md transition" alt="like">
        <img :src="item.imageUrl" alt="Sneacker">
        <p>{{ item.title }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-gray">Цена:</span>
            <b>{{ item.price + ' руб.' }}</b>
          </div>
          <img :src="item.isAdded ? '/checked.svg' : '/plus.svg'" @click="onClickAdded(item)" class="active:-translate-y-2 rounded-lg h-full hover:shadow-md transition" alt="Plus">
        </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    async onClickAdded (item) {
      item.isAdded = !item.isAdded
      await axios.patch(`https://6a334d4f8b40d716.mokky.dev/stepbystep/${item.id}`, item)
    },
    async onClickFavorite (item) {
      item.isFavorite = !item.isFavorite
      await axios.patch(`https://6a334d4f8b40d716.mokky.dev/stepbystep/${item.id}`, item)
    }
  }
}
</script>
