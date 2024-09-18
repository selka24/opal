<template>
    <div class="max-w-md mb-14 ">
        <h2>{{ title }}</h2>
        <p class="text-sm mt-6">
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
            default: ''
        }
    })
</script>
