<template>
    <div class="flex items-center">
        <div class="w-[100px] h-[100px] rounded-full bg-slate-600 mr-5"></div>
        <div class="flex flex-col text-left">
            <h2 class="text-3xl leading-normal">{{ avatar.fullName }}</h2>
            <p class="text-lg font-light leading-normal">{{avatar.job}}</p>
        </div>
    </div>
</template>
<script setup>
    defineProps({
        avatar: {
            type: Object,
            default: {
                image: '',
                fullName: 'Wade Warren',
                job: 'UX/UI Designer'
            }
        }
    })
</script>
