<template>
    <div class="relative min-h-[376px]" id="work-with">
        <NuxtIcon name="circle" class="text-[260px] sm:text-[376px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" filled/>
        <div class="flex h-full flex-col text-center justify-center items-center relative z-10 max-w-screen-lg mx-auto">
            <h4 class="tracking-wider leading-relaxed">For customer support or to request a demo of our solutions, please fill out the form below, and one of our team members will get back to you as soon as possible.</h4>
            <NuxtLink to="/contact#contact" class="mt-16" v-if="!hideButton">
                <ButtonDefault>CONTACT US</ButtonDefault>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
defineProps(['hideButton'])
</script>
