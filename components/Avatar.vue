<template>
    <div class="flex items-center">
        <div class="w-[100px] h-[100px] rounded-full bg-slate-600 mr-5"></div>
        <div class="flex flex-col text-left">
            <h4>{{ avatar.fullName }}</h4>
            <p class="text-lg">{{avatar.job}}</p>
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
