<template>
    <div class="max-w-md mb-14 text-white">
        <h2 class="text-5xl leading-[60px] font-bold">{{ title }}</h2>
        <p class="opacity-70 text-sm leading-7 mt-6 font-light">
            {{ description }}
        </p>
    </div>
</template>
<script setup>
    defineProps({
        title: {
            type: String,
            default: 'title'
        },
        description: {
            type: String,
            default: 'description'
        }
    })
</script>
