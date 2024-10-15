<template>
    <div class="h-full pb-40">
        <h2 class="text-2xl font-bold mt-10 ml-10">Мои закладки</h2>
        <Transition>
            <div class="w-full h-full flex flex-col gap-2 items-center mt-32" v-if="!$store.state.itemsFavorite.length">
                <img src="/emoji-1.png" alt="emojiEmpty">
                <h2 class="font-bold text-2xl">Закладок нет</h2>
                <p class="text-gray">Вы ничего не добавляли в закладки</p>
                <RouterLink to="/"><button class="transition hover:-translate-y-1 active:scale-110 rounded-lg outline-none text-white p-3 flex items-center gap-3 bg-green"><img src="/arrow-next.svg" alt="ArrowBack" class="rotate-180">Вернуться назад</button></RouterLink>
        </div>
        </Transition>

        <transition-group tag="div" name="fade" class="grid grid-cols-4 gap-3">
    <div v-for="item in $store.getters.getItemsFavorite" :key="item.id">
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
import { RouterLink } from 'vue-router'
export default {
  comments: {
    RouterLink
  }
}
</script>
