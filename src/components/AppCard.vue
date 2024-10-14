<template>
      <div class="relative m-10 bg-white border border-opacity-40 border-gray-light rounded-2xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <img :src="imageLike" @click="onClickFavorite()" class="absolute top-8 left-8 cursor-pointer active:-translate-y-2 rounded-lg hover:shadow-md transition" alt="like">
        <img :src="imageUrl" alt="Sneacker">
        <p>{{ textName }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-gray">Цена:</span>
            <b>{{ textPrice + ' руб.' }}</b>
          </div>
          <img :src="imagePlus" class="active:-translate-y-2 rounded-lg h-full hover:shadow-md transition" alt="Plus">
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
    },
    isFavorite: {
      type: Boolean,
      required: true
    },
    isAdded: {
      type: Boolean,
      required: true
    },
    onClickFavorite: {
      type: Function,
      required: true
    },
    onClickAdded: {
      type: Function,
      required: true
    }
  },
  computed: {
    imageLike () {
      return this.$props.isFavorite ? '/like-2.svg' : '/like-1.svg'
    },
    imagePlus () {
      return this.$props.isAdded ? '/checked.svg' : '/plus.svg'
    }
  }
}
</script>
