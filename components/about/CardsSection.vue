<script setup>
    const aboutCards = [
        {icon: 'smartphone', title: 'Hybrid Apps', description: 'Authoritatively revolutionize the realise is performance based content.'},
        {icon: 'wallet', title: 'Hybrid Apps', description: 'Authoritatively revolutionize the realise is performance based content.'},
        {icon: 'headphones', title: 'Hybrid Apps', description: 'Authoritatively revolutionize the realise is performance based content.'}
    ]
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11" id="solutions">
        <InfoCard v-for="card in aboutCards" :info="card"/>
    </div>
</template>

<style scoped>

</style>
