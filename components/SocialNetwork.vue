<template>
    <a class="flex justify-center items-center border-2 rounded-md border-white/10 hover:bg-secondary-content hover:border-secondary-content p-4"
              :href="`https://${social.link}`"
              target="_blank">
        <NuxtIcon :name="`socials/${social.name}`" :class="`text-xl text-white ${iconStyle}`"/>
    </a>
</template>
<script setup>
defineProps({
    social: {
        type: Object,
        default: {
            name: 'facebook',
            link: 'www.facebook.com'
        }
    },
    iconStyle: String
})
</script>
