<template>
    <div class="mt-60  relative">
        <div class="w-[50%] m-auto absolute top-[10%] right-[10%] z-1">
            <div class="h-0 pb-[100%] rounded-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <div class="z-2 relative">
            <SectionHeader
                title="Featured Works"
            />
            <div class="flex flex-col items-center gap-10">
                <ProjectCard v-for="(project, idx) in threeProjects" :key="idx + 'project'" :project="project"/>

                <!--                <WorkProject-->
<!--                    v-for="(project, idx) in projects"-->
<!--                    :key="idx + '-project'"-->
<!--                    :project="project"-->
<!--                />-->
            </div>
        </div>
    </div>
</template>
<script setup>
import {projectPortfolio} from "~/constants.js";
import ProjectCard from "~/components/ProjectCard.vue";

const threeProjects = [projectPortfolio[0], projectPortfolio[1], projectPortfolio[4]];
</script>
