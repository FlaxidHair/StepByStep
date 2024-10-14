<template>
    <Transition>
    <div class="absolute top-0 left-0 z-10 h-full w-full" v-if="$store.state.isShowCart">
        <div @click="$store.commit('openCart')" class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-60"></div>
        <div  class="bg-white w-96 h-full fixed z-20 right-0 top-0 p-8">
            <div class="flex items-center justify-center mb-5">
                <ArrowNext class="mr-auto"></ArrowNext>
                <h2 class="text-2xl mr-auto font-bold">Корзина</h2>
            </div>
            <div>
                <CartItem></CartItem>
            </div>
        </div>
    </div>
</Transition>
</template>

<script>
import ArrowNext from './icons/ArrowNext.vue'
import CartItem from './AppCartItems.vue'
export default {
  methods: {
  },
  components: {
    ArrowNext,
    CartItem
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
