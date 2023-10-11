<template>
    <div class="flex pt-14 justify-center relative z-10">
        <div class=" text-[28px] font-bold uppercase absolute left-6 md:left-20 top-[48px]">
            OPAL .
        </div>
        <div class="hidden sm:flex justify-between items-center sm:gap-10 sm:ml-auto sm:mr-5 md:mr-20 lg:gap-20 lg:ml-0 lg:mr-0">
            <NuxtLink v-for="page in pages" :key="page.name" :to="page.path" class=" text-base font-medium uppercase">
                {{page.name}}
            </NuxtLink>
        </div>
        <Hamburger/>
    </div>
</template>
<script setup>
import {pages} from "~/constants.js";
</script>
