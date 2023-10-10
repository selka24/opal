<template>
    <div class="flex gap-1 mb-12 items-center justify-center text-center">
        <div v-for="idx in 5">
            <NuxtIcon v-if="idx <= rating" name="RateStar" class="text-yellow-500"/>
            <NuxtIcon v-else name="RateStar" class="text-gray-700"/>
<!--            <NuxtIcon :name="(idx + 1) <= rating ? 'RateStar' : 'RateStarHalf'"-->
<!--                :class="(idx + 1) >= rating ? `text-[${color}]` : `text-[${yellow}]`"-->
<!--            />-->
        </div>
        <div class="text-[18px] leading-normal">{{rating}}</div>
    </div>
</template>
<script setup>
    defineProps({
        rating: {
            type: Number,
            default: 4.5
        }
    })
</script>
