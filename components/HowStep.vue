<template>
    <div class="p-8 leading-7  bg-primary/5">
        <div class="rounded-full mb-14 w-32 h-32 relative border-2 border-white/30 hover:bg-secondary-content hover:border-secondary-content">
            <div class="rounded-full font-semibold w-10 h-10 bg-primary text-center absolute left-0 leading-10">0{{step.idx + 1}}</div>
            <NuxtIcon :name="`serviceCards/${step.icon}`" class="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <h4 class="mb-7">{{step.title}}</h4>
        <p class="text-justify">{{step.description}}</p>
    </div>
</template>
<script setup>
    defineProps({
        step: {
            type: Object,
            default: {
                icon: '',
                title: '',
                description: ''
            }
        }
    })
</script>
