<template>
    <div class="mt-60 text-white relative">
        <div class="w-[50%] m-auto absolute top-[10%] right-[10%] z-1">
            <div class="h-0 pb-[100%] rounded-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <div class="z-2 relative">
            <SectionHeader
                title="Featured Works"
                description="Dramatically supply transparent backward deliverables before caward comp internal organic sources"
            />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <WorkProject
                    v-for="(project, idx) in projects"
                    :key="idx + '-project'"
                    :project="project"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
    const projects = [
        {title: 'Web Analytics', description : 'Web Design', image: ''},
        {title: 'Cyber Secure', description : 'Cyber Security Core', image: ''},
        {title: 'Mobile info', description : 'Upcoming Phone', image: ''},
    ]
</script>
