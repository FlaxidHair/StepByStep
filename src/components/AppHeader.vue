<template>
    <header class="2xl:px-11 xl:px-9 lg:px-7 px-3 py-11 sm:py-6 border-b border-gray-light">
        <div class="flex gap-3 items-center">
            <img src="/logo.png" class="2xl:w-auto sm:w-14 w-12" alt="Logotype">
            <div class="mr-auto">
                <h1 class="2xl:text-2xl xl:text-xl lg:text-lg font-bold uppercase">Step By Step</h1>
                <span class="text-sm  text-gray">Магазин лучших кроссовок</span>
            </div>
            <div class="text-gray 2xl:flex-row xl:flex-row gap-y-5 lg:flex-row md:flex-row sm:flex-col flex-col flex">
                <button class="flex gap-2 cursor-pointer items-center mr-10 hover:text-black hover:scale-110  active:scale-125 transition-transform"><img src="/heart.svg" alt="Favorites">Закладки</button>
                <button class="flex gap-2 cursor-pointer items-center hover:text-black hover:scale-110  active:scale-125 transition-transform"><img src="/cart.svg" alt="Cart"><b>{{ this.$store.state.cartMoney +' руб.'}}</b></button>
            </div>
        </div>
    </header>
</template>

<script>
</script>
