<template>
    <div class="mb-20 mx-5 xs:mx-10">
        <HeroSection/>
        <div class="flex justify-center">
            <div class="max-w-7xl w-full">
                <Technologies/>
                <WhoWeAre/>
                <ServiceSection/>
                <OurWork/>
                <HowSection/>
                <NumbersSection/>
                <TestimonialSection/>
                <div class="mt-36 relative">
                    <NuxtIcon name="circle" class="hidden sm:block text-[376px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-1" filled/>
                    <div class="flex flex-col items-center  z-2 relative">
                        <h1>Have a project in mind?</h1>
                        <h1>Let's get to work.</h1>
                        <NuxtLink to="/contact" class="mt-16">
                            <ButtonDefault>CONTACT US</ButtonDefault>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Technologies from "~/components/home/Technologies.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import WhoWeAre from "~/components/home/WhoWeAre.vue";
import ServiceSection from "~/components/home/ServiceSection.vue";
import OurWork from "~/components/home/OurWork.vue";
import HowSection from "~/components/home/HowSection.vue";
import NumbersSection from "~/components/home/NumbersSection.vue";
import TestimonialSection from "~/components/home/TestimonialSection.vue";

useHead({
    title: 'Opal',
    meta: [
        { name: 'description', content: 'Opal technologies. We\'re a innovative IT solutions.' }
    ],
})

definePageMeta({
    layout: 'home'
})
</script>
