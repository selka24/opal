
<template>
    <div class="group bg-gradient-to-b from-white/30 hover:from-secondary-content hover:to-secondary-content rounded-none p-0.5">
        <div class="flex flex-col bg-secondary group-hover:bg-secondary-content px-7 pt-7 pb-10">
            <NuxtLink class="ml-auto" :to="service.link || '/contact'">
                <nuxt-icon name="ArrowUp" class="text-xl" filled/>
            </NuxtLink>
            <nuxt-icon :name="`serviceCards/${service.icon}`" class="text-6xl text-primary group-hover:text-white"/>
            <div class="text-xl xs:text-3xl mt-7">
                {{service.title}}
            </div>
            <p class="text-sm mt-5">
                {{service.description}}
            </p>
        </div>
    </div>
</template>
<script setup>
    defineProps({
        service: {
            type: Object,
            default: {
                icon: 'CodeSlash',
                title: 'Service Title',
                description: 'Service description',
                link: '/contact'
            }
        }
    })
</script>
<style scoped>

</style>
