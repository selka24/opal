<script setup>
defineProps(['project']);
</script>

<template>
    <div class="p-5 bg-white/10 gap-10 rounded w-full justify-between grid grid-cols-7">
        <div class="col-span-7 sm:col-span-4 md:col-span-4 flex flex-col gap-3">
            <div>
                <div class="font-light">{{project.industry}}</div>
                <h6 class="font-semibold">{{ project.title }}</h6>
            </div>
            <div class="font-semibold">{{project.projectType}}</div>
            <p class="text-justify">{{project.overview}}</p>
        </div>
        <div class="from-white/30 to-white/5 bg-gradient-to-r rounded p-5 col-span-7 sm:col-span-3 lg:col-span-3">
            <h6>Key Features</h6>
            <div class="flex flex-col gap-3 mt-4">
                <ul v-for="(feature, fIdx) in project.keyFeatures" :key="`${fIdx}-feature-${project.title}`" class="list-disc">
                    <li class="list-item ml-4">{{ feature }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
