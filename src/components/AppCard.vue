<template>
      <div class="relative m-10 bg-white border border-opacity-40 border-gray-light rounded-2xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <img src="/like-2.svg" class="absolute top-8 left-8 cursor-pointer" alt="Sneacker">
        <img :src="imageUrl" alt="Sneacker">
        <p>{{textName}}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-gray">Цена:</span>
            <b>{{textPrice}}</b>
          </div>
          <img src="/plus.svg" alt="Plus">
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    textPrice: {
      type: Number || String,
      required: true
    },
    textName: {
      type: String,
      required: true
    }
  }
}
</script>
