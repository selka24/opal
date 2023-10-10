<template>
    <div class="mb-20 mx-10">
        <HomeHeroSection/>
        <div class="flex justify-center">
            <div class="max-w-[1280px] w-full">
                <HomeTechnologies/>
                <HomeWhoWeAre/>
                <HomeServiceSection/>
                <HomeOurWork/>
                <HomeHowSection/>
                <HomeNumbersSection/>
                <HomeTestimonialSection/>
                <div class="mt-36 flex flex-col items-center text-white relative">
                    <nuxt-icon name="circle" class="text-[376px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" filled/>
                    <h1 class="leading-normal text-6xl font-bold">Have a project in mind?</h1>
                    <h1 class="leading-normal text-6xl font-bold">Let's get to work.</h1>
                    <NuxtLink to="/contact" class="mt-16">
                        <button-default>CONTACT US</button-default>
                    </NuxtLink>
                </div>
                <hr class="h-[0.5px] my-14 bg-white opacity-10 border-0 w-full">
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
