<template>
    <div class="flex pt-14 justify-center relative">
        <div class="text-white text-[28px] font-bold uppercase absolute left-20 top-[48px]">
            OPAL .
        </div>
        <div class="hidden md:flex justify-between items-center md:gap-10 md:ml-auto md:mr-20 lg:gap-20 lg:ml-0 lg:mr-0">
            <NuxtLink v-for="page in pages" :key="page.name" :to="page.path" class="text-white text-base font-medium uppercase">
                {{page.name}}
            </NuxtLink>
        </div>
        <div class="max-w-max ml-auto text-white md:hidden block mr-20">
            Hamburger
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
