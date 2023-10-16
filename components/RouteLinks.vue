<template>
    <NuxtLink v-for="page in pages"
              :key="page.name"
              :to="{path: page.path}"
              :class="classOverride || 'text-base font-medium uppercase'">
        {{page.name}}
    </NuxtLink>
</template>
<script setup>
    //, hash: `#${page.path === '/' ? 'home' : page.path.replace('/', '')}`
    //${page.path === '/' ? 'home' : page.path.replace('/', '')}
    import {pages} from "~/constants";
    defineProps({
        classOverride: String
    })
</script>
