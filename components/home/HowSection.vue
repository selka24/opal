<template>
    <div class="mt-40">
        <SectionHeader
            title="Why Choose Us"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
            <HowStep
                v-for="(step, idx) in coreValues"
                :step="{idx, ...step}"
            />
        </div>
    </div>
</template>
<script setup>
import {coreValues} from "~/constants.js";
    // const steps = [
    //     {icon: 'Tick-Square', title: 'Create Account', description: 'Interactively provide access to world-class materials for catalysts.'},
    //     {icon: 'Paper', title: 'Read Rules', description: 'Interactively provide access to world-class materials for catalysts.'},
    //     {icon: 'More-Square', title: 'Ask Problem', description: 'Interactively provide access to world-class materials for catalysts.'},
    //     {icon: 'Shield-Done', title: 'Get Solution', description: 'Interactively provide access to world-class materials for catalysts.'},
    //     {icon: 'Paper', title: 'Well Document', description: 'Interactively provide access to world-class materials for catalysts.'},
    // ]
</script>
