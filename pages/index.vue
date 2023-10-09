<template>
    <div class="mb-20 px-10">
        <HeroSection/>
        <div class="flex justify-center">
            <div class="max-w-[1280px] w-full">
                <Companies/>
                <WhoWeAre/>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    title: 'Opal',
    meta: [
        { name: 'description', content: 'Opal technologies. We\'re a innovative IT solutions.' }
    ],
})
</script>
