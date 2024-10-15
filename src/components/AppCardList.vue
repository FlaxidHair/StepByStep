<template>
  <div>
  <FilterComponent></FilterComponent>
  <transition-group tag="div" name="fade" class="grid grid-cols-4 gap-3">
    <div v-for="item in $store.state.items" :key="item.id">
      <div
        class="relative m-10 bg-white border border-opacity-40 border-gray-light rounded-2xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
      >
        <img
          :src="item.favoriteId.includes($store.state.userIdCookie) ? '/like-2.svg' : '/like-1.svg'"
          @click="$store.commit('onClickFavorite',item)"
          class="absolute top-8 left-8 cursor-pointer active:-translate-y-2 rounded-lg hover:shadow-md transition"
          alt="like"
        />
        <img :src="item.imageUrl" alt="Sneacker" />
        <p>{{ item.title }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-gray">Цена:</span>
            <b>{{ item.price + " руб." }}</b>
          </div>
          <img
            :src="$store.state.cartItems.find(product => item.id === product.id) ? '/checked.svg' : '/plus.svg'"
            @click="$store.commit('onClickAdded',item)"
            class="active:-translate-y-2 rounded-lg h-full hover:shadow-md transition"
            alt="Plus"
          />
        </div>
      </div>
    </div>
  </transition-group>
</div>
</template>

<script>
// import axios from 'axios'
import FilterComponent from './AppFilter.vue'
export default {
  data () {
    return {}
  },
  methods: {
    // async onClickFavorite (item) {
    //   if (!item.favoriteId.includes(this.$store.state.userIdCookie)) {
    //     item.favoriteId.push(this.$store.state.userIdCookie)
    //   } else {
    //     item.favoriteId.splice(item.favoriteId.indexOf(this.$store.state.userIdCookie), 1)
    //   }
    //   await axios.patch(
    //     `https://6a334d4f8b40d716.mokky.dev/stepbystep/${item.id}`,
    //     item
    //   )
    // }
  },
  components: {
    FilterComponent
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
