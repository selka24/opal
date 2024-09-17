<script setup>
import {termsOfService} from "~/constants.js";

defineProps(['list'])
</script>

<template>
    <div v-for="({title, description}, idx) in list" :key="idx + title">
        <ul>
            <li class="mb-6">
                <h6>{{idx + 1}}. {{title}}</h6>
                <p v-html="description"></p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
