<template>
    <div>
        <BgImage page="Our Portfolio"/>
        <div class="flex flex-col items-center px-5">
            <div class="max-w-lg mt-40 text-center">
                <h2 class="mb-6">Featured Works</h2>
                <p>Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.</p>
            </div>
            <div class="max-w-7xl mt-16 flex flex-col items-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <WorkProject
                        v-for="(project, idx) in projects"
                        :key="idx + '-project'"
                        :project="project"
                    />
                    <WorkProject
                        v-for="(project, idx) in projects"
                        :key="idx + '-project1'"
                        :project="project"
                    />
                    <WorkProject
                        v-for="(project, idx) in projects"
                        :key="idx + '-project2'"
                        :project="project"
                    />
                </div>
                <ButtonDefault class="mt-16">LOAD MORE</ButtonDefault>
            </div>
            <WorkWithUs />
        </div>
    </div>
</template>
<script setup>
import {projects} from "~/constants.js";
import WorkWithUs from "~/components/home/WorkWithUs.vue";
import ButtonDefault from "~/components/ButtonDefault.vue";

useHead({
    title: 'Portfolio',
    meta: [
        { name: 'description', content: 'Our work portfolio.' }
    ],
})
</script>
