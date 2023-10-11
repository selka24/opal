
<template>
    <NuxtLink to="/portfolio">
<!--        rounded-none bg-gradient-to-b from-white/30 p-0.5 pb-0 hover:from-secondary-content hover:to-secondary-content-->
        <div class="group border-gradient">
            <div class="pt-7 pl-7 hover:bg-secondary-content">
                <img src="/images/business.webp" class="w-full h-auto" alt="project"/>
            </div>
        </div>
        <div class="mt-9">
            <p class="mb-4">
                {{project.description}}
            </p>
            <h3 class="font-semibold">{{project.title}}</h3>
        </div>
    </NuxtLink>
</template>
<script setup>
    defineProps({
        project: {
            type: Object,
            default: {
                image: null,
                title: '',
                description: ''
            }
        }
    })
</script>
<style scoped>
.border-gradient {
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
}
</style>

