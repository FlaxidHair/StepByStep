<template>
    <div class="flex flex-col gap-3">
    <div v-for="item in $store.state.cartItems" :key="item.id" class="w-full flex border rounded-xl p-4 border-gray-light">
        <img :src="item.imageUrl" class="w-3/12 mr-2" alt="Sneacker">
        <div class="flex flex-col gap-2">
            <p>{{ item.title }}</p>
            <b>{{ item.price + ' руб.'}}</b>
        </div>
        <img src="/close.svg" @click="removeCartItem(item)" class="mt-8 cursor-pointer h-full hover:shadow-md active:-translate-y-2 rounded-lg transition" alt="Close">
    </div>
    </div>

</template>

<script>
export default {
  methods: {
    removeCartItem (item) {
      const cartItems = this.$store.state.cartItems
      cartItems.splice(cartItems.indexOf(item), 1)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }
}
</script>
