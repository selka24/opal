<template>
    <div class="h-[300px] flex justify-center items-center px-5">
        <div class="bgImage w-full h-[300px] absolute z-1"/>
        <div class="max-w-7xl z-10 w-full">
            <h2 class="text-white mb-5">{{ page }}</h2>
<!--            <p class="text-white opacity-100 font-normal">Home - Pages - <span class="text-secondary-content">{{page}}</span></p>-->
        </div>
    </div>
</template>
<script setup>
    defineProps({
        page: String
    })
</script>
<style scoped>
.bgImage{
    background: #104CBA;
    mask-image: url("/images/BgImage.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
}
</style>
