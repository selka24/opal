<script setup>
 defineProps({
     info: {
         type: Object,
         default: {
             icon: '',
             title: '',
             description: ''
         }
     }
 })
</script>

<template>
    <div class="bg-gradient-to-b from-primary/10 text-center flex flex-col items-center p-10">
        <div class="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 mb-6 p-3.5">
            <NuxtIcon :name="info.icon" filled class="text-[70px]"/>
        </div>
        <h4 class="font-semibold mb-5">{{info.title}}</h4>
        <p>{{info.description}}</p>
    </div>
</template>

<style scoped>

</style>
