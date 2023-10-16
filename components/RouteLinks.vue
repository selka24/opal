<template>
    <NuxtLink v-for="page in pages"
              :key="page.name"
              :to="{path: page.path, hash: '#top'}"
              :class="classOverride || 'text-base font-medium uppercase'">
        {{page.name}}
    </NuxtLink>
</template>
<script setup>
    //${page.path === '/' ? 'home' : page.path.replace('/', '')}
    import {pages} from "~/constants";
    defineProps({
        classOverride: String
    })
</script>
