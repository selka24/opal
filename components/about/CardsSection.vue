<script setup>
import {aboutCards} from "~/constants.js";
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11" id="solutions">
        <InfoCard v-for="card in aboutCards" :info="card"/>
    </div>
</template>

<style scoped>

</style>
