<template>
    <div class="border border-secondary-content/10 flex flex-col px-16 py-10 contactCard justify-center items-center text-center gap-7">
        <div class="w-20 h-20 rounded-full bg-white flex justify-center items-center">
            <NuxtIcon :name="info.icon" class="text-3xl text-secondary-content"/>
        </div>
        <h5 v-html="info.content"/>
    </div>
</template>
<script setup>
    defineProps({
        info: {
            type:Object,
            default: {
                icon: '',
                content: ''
            }
        }
    })
</script>
<style scoped>
</style>
