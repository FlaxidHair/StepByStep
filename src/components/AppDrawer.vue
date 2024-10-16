<template>
    <Transition>
    <div class="fixed top-0 left-0 z-10 h-full w-full" v-if="$store.state.isShowCart">
        <div @click="$store.commit('openCart')" class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-60"></div>
        <div class="bg-white w-96 h-full fixed z-20 right-0 top-0 p-8 ">
            <div class="flex items-center justify-center mb-5">
                <ArrowNext class="mr-auto"></ArrowNext>
                <h2 class="text-2xl mr-auto font-bold">Корзина</h2>
            </div>
            <div class="flex flex-col items-center justify-center text-center gap-2 h-full" v-if="!$store.state.cartItems.length && !$store.state.orderCheck">
              <img src="/package-icon.png" alt="Empty Cart">
              <h2 class="font-bold text-2xl">Корзина пустая</h2>
              <p class="text-gray">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button @click="$store.commit('openCart')" class="transition hover:-translate-y-1 active:scale-110 mt-5 rounded-lg outline-none text-white p-3 flex items-center gap-3 bg-green"><img src="/arrow-next.svg" alt="ArrowBack" class="rotate-180">Вернуться назад</button>
          </div>
            <div class="flex flex-col gap-3 h-full justify-between">
              <div class="overflow-y-auto shadow-sm rounded-xl">
                <CartItem class="w-full"></CartItem>
              </div>
                <div v-if="$store.state.cartItems.length && !$store.state.orderCheck" class="flex flex-col gap-3 mb-16">
              <p class="flex flex-nowrap text-nowrap">Итого: <span class="border mb-1 mx-1 border-gray-light w-full h-0 self-end border-dotted"></span><span class="font-bold text-xl">{{ $store.getters.cartMoney + $store.getters.getPerCentCount + ' руб.' }}</span></p>
              <p class="flex flex-nowrap text-nowrap">Налог 5%: <span class="border mb-1 mx-1 border-gray-light w-full h-0 self-end border-dotted"></span>  <span class="font-bold text-xl">{{ $store.getters.getPerCentCount + ' руб.' }}</span></p>
              <form @submit.prevent="valid ? $store.commit('getOrder') : null">
              <input :class="{ 'border-orange focus:border-orange': !valid }" @input="validationInput()" type="text" v-model="$store.state.emailUser" placeholder="Введите свой Email"  required class="border w-full border-gray-light outline-none focus:border-gray p-3 rounded-lg">
              <p v-show="!valid" class="text-xs ml-1 text-orange">Введите корректный Email !</p>
              <button type="submit" class="transition w-full mt-2 justify-center hover:-translate-y-1 active:scale-110 rounded-2xl outline-none text-white p-3 flex  gap-3 bg-green">Оформить заказ<img src="/arrow-next.svg" alt="ArrowBack" class=""></button>
            </form>

            </div>
            <div v-if="$store.state.orderCheck" class="flex flex-col justify-center h-full w-full items-center gap-3 mb-16">
              <img src="/order-success-icon.png" class="h-1/4 w-1/2 mb-2" alt="Order Success">
              <h2 class="text-2xl font-bold text-green">Заказ оформлен!</h2>
              <p class="text-gray text-center">Ваш заказ {{ $store.getters.generateIdOrder }} оформлен и будет передан в обработку!</p>
            </div>
            </div>
        </div>
    </div>
</Transition>
</template>

<script>
import ArrowNext from './icons/ArrowNext.vue'
import CartItem from './AppCartItems.vue'
export default {
  data () {
    return {
      valid: true
    }
  },
  methods: {
    validationInput () {
      const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.$store.state.emailUser) {
        this.valid = false
      } if (!reg.test(String(this.$store.state.emailUser).toLocaleLowerCase())) {
        this.valid = false
      } else {
        this.valid = true
      }
    }
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
