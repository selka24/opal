
<template>
    <div class=" mt-36">
        <SectionHeader
            title="Our Services"
            description="Dramatically supply transparent backward deliverables before caward comp internal or organic sources"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
            <Service v-for="(service, idx) in services" :key="idx + '-service'" :service="service"/>
        </div>
    </div>
</template>
<script setup>
    const services = [
        {icon: 'CodeSlash', title: 'Web Design', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
        {icon: 'FileEarmarkCode', title: 'Web Development', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
        {icon: 'BoxArrowUpRight', title: 'UI/UX Design', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
        {icon: 'ShieldLock', title: 'Web Security', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
        {icon: 'Dice5', title: 'Digital Marketing', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
        {icon: 'Command', title: 'Programming', description: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.', link: '/contact'},
    ]
</script>
