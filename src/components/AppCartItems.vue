<template>
    <div>
    <div v-for="item,index in $store.getters.cartItems" :key="index" class="w-full flex border rounded-xl p-4 border-gray-light">
        <img :src="item.imageUrl" class="w-3/12" alt="Sneacker">
        <div>
            <p>{{ item.title }}</p>
            <b>{{ item.price + ' руб.'}}</b>
        </div>
        <img src="/close.svg" class="mt-8 cursor-pointer h-full hover:shadow-md active:-translate-y-2 rounded-lg transition" alt="Close">
    </div>
    </div>

</template>

<script>
export default {

}
</script>
