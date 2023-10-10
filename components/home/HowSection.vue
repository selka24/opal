<template>
    <div class="mt-60">
        <SectionHeader
            title="How It Works"
            description="Dramatically supply transparent backward deliverables before caward comp internal or organic sources."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
            <HowStep
                v-for="(step, idx) in steps"
                :step="{idx, ...step}"
            />
        </div>
    </div>
</template>
<script setup>
    const steps = [
        {icon: 'Tick-Square', title: 'Create Account', description: 'Interactively provide access to world-class materials for catalysts.'},
        {icon: 'Paper', title: 'Read Rules', description: 'Interactively provide access to world-class materials for catalysts.'},
        {icon: 'More-Square', title: 'Ask Problem', description: 'Interactively provide access to world-class materials for catalysts.'},
        {icon: 'Shield-Done', title: 'Get Solution', description: 'Interactively provide access to world-class materials for catalysts.'},
        {icon: 'Paper', title: 'Well Document', description: 'Interactively provide access to world-class materials for catalysts.'},
    ]
</script>
