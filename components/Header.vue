<template>
    <div class="flex pt-14">
        <div class="text-white text-[28px] flex-1 text-center font-bold uppercase">
            OPAL .
        </div>
        <div class="hidden md:flex justify-between gap-20 items-center">
            <NuxtLink v-for="page in pages" :key="page.name" :to="page.path" class="text-white text-base font-medium uppercase">
                {{page.name}}
            </NuxtLink>
        </div>
        <div class="flex-1">
            <div class="max-w-max ml-auto text-white md:hidden block">
                Hamburger
            </div>
        </div>
    </div>
</template>
<script setup>
const pages = [
    {name: 'HOME', path: '/'},
    {name: 'ABOUT US', path: '/about'},
    {name: 'PORTFOLIO', path: '/portfolio'},
    {name: 'CONTACT', path: '/contact'},
]
</script>
