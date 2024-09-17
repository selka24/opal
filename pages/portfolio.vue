<template>
    <div id="portfolio">
        <BgImage page="Portfolio"/>
        <div class="flex flex-col items-center px-5">
            <div class="max-w-screen-md mt-32 text-center">
                <h2 class="mb-6">Our Portfolio Highlights</h2>
                <p class="text-justify">We specialize in delivering complex, high-performance web solutions that are tailored to meet the specific needs of our clients. Below are some of our recent projects that showcase our capabilities across a variety of industries and technologies.</p>
            </div>
            <div class="max-w-7xl w-full mt-16 flex flex-col items-center gap-10">
                <div class="p-5 bg-white/10 gap-10 rounded w-full justify-between grid grid-cols-7" v-for="(project, idx) in projectPortfolio" :key="idx + 'project'">
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
                            <ul v-for="(feature, fIdx) in project.keyFeatures" :key="`${fIdx}-${idx}-feature`" class="list-disc">
                                <li class="list-item ml-4">{{ feature }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
<!--                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">-->
<!--                    <WorkProject-->
<!--                        v-for="(project, idx) in projects"-->
<!--                        :key="idx + '-project'"-->
<!--                        :project="project"-->
<!--                    />-->
<!--                    <WorkProject-->
<!--                        v-for="(project, idx) in projects"-->
<!--                        :key="idx + '-project1'"-->
<!--                        :project="project"-->
<!--                    />-->
<!--                    <WorkProject-->
<!--                        v-for="(project, idx) in projects"-->
<!--                        :key="idx + '-project2'"-->
<!--                        :project="project"-->
<!--                    />-->
<!--                </div>-->
<!--                <ButtonDefault class="mt-16">LOAD MORE</ButtonDefault>-->
            </div>
        </div>
        <div class="bg-primary/10 flex w-full justify-center py-16 px-5 mt-36">
            <WorkWithUs/>
        </div>
    </div>
</template>
<script setup>
import {projects} from "~/constants.js";
import {projectPortfolio} from "~/constants.js";
import WorkWithUs from "~/components/home/WorkWithUs.vue";

useHead({
    title: 'Portfolio',
    meta: [
        { name: 'description', content: 'Our work portfolio.' }
    ],
})
</script>
