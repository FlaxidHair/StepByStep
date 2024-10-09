<template>
    <header class="px-11 py-11 border-b border-gray-light">
        <div class="flex gap-3 items-center">
            <img src="/logo.png" alt="Logotype">
            <div class="mr-auto">
                <h1 class="text-2xl font-bold uppercase">Step By Step</h1>
                <span class="text-sm text-gray">Магазин лучших  кроссовок</span>
            </div>
            <div class="text-gray flex">
                <button class="flex gap-2 cursor-pointer items-center mr-10 hover:text-black hover:scale-110 active:scale-125 transition-transform"><img src="/cart.svg" alt="Cart"><b>{{ this.$store.state.cartMoney +' руб.'}}</b></button>
                <button class="flex gap-2 cursor-pointer items-center hover:text-black hover:scale-110  active:scale-125 transition-transform"><img src="/heart.svg" alt="Favorites">Закладки</button>
            </div>
        </div>
    </header>
</template>

<script>
</script>
