<template>
    <div class="flex mt-72 justify-center">
        <div class="flex flex-wrap justify-between w-full gap-y-4">
            <div v-for="tech in technologies" :key="tech">
                <nuxt-icon :name="`technologies/${tech}`" class="text-[5rem]" filled/>
            </div>
        </div>
    </div>
</template>
<script setup>
const technologies = [
    'css-3',
    'laravel-2',
    'logo-javascript',
    'nuxt-2',
    'postgresql',
    'vitejs'
]
</script>
