<template>
    <NuxtLink class="border-2 rounded-md border-white/10 hover:bg-secondary-content hover:border-secondary-content p-4"
              :to="social.link"
              target="_blank">
        <NuxtIcon :name="`socials/${social.name}`" filled class="text-xl"/>
    </NuxtLink>
</template>
<script setup>
defineProps({
    social: {
        type: Object,
        default: {
            name: 'facebook',
            link: 'www.facebook.com'
        }
    }
})
</script>
