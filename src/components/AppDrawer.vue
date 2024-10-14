<template>
    <div class="absolute top-0 left-0 h-full w-full">
        <div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-60"></div>
        <div class="bg-white w-96 h-full fixed z-20 right-0 top-0 p-8">
            <div class="flex items-center gap-5">
                <ArrowNext></ArrowNext>
                <h2 class="text-2xl font-bold">Корзина</h2>
            </div>

        </div>
    </div>
</template>

<script>
import ArrowNext from './icons/ArrowNext.vue'
export default {
  components: {
    ArrowNext
  }
}
</script>

<style scoped>

</style>
