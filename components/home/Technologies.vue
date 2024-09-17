<template>
    <div class="flex mt-40 flex-wrap w-full gap-8 xs:gap-20 justify-center">
        <div v-for="tech in technologies" :key="tech">
            <NuxtIcon :name="`technologies/${tech}`" class="text-6xl sm:text-[5rem]" filled/>
        </div>
    </div>
</template>
<script setup>
const technologies = [
    'dot-net-core-7',
    'c--4',
    'laravel-2',
    'vue-9',
    'angular-icon-1',
    'dynamics',
]
</script>
