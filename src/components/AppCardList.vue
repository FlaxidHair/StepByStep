<template>
  <div>
  <FilterComponent></FilterComponent>
  <transition-group tag="div" name="fade" class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg gap-3">
    <div v-for="item in $store.state.items" :key="item.id">
      <div
        class="relative m-8 bg-white border border-opacity-40 h-5/6 border-gray-light rounded-2xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
      >
        <img
          :src="item.favoriteId.includes($store.state.userIdCookie) ? '/like-2.svg' : '/like-1.svg'"
          @click="$store.commit('onClickFavorite', item)"
          class="absolute top-8 left-8 cursor-pointer active:-translate-y-2 rounded-lg hover:shadow-md transition"
          alt="like"
        />
        <img :src="item.imageUrl" alt="Sneacker" />
        <p class="mt-2">{{ item.title }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex gap-1 flex-wrap text-nowrap mr-2">
            <span class="text-gray">Цена:</span>
            <b>{{ item.price + " руб." }}</b>
          </div>
          <img
            :src="$store.state.cartItems.find(product => item.id === product.id) ? '/checked.svg' : '/plus.svg' || ''"
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
import FilterComponent from './AppFilter.vue'
export default {
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
