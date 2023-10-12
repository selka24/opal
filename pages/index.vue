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
                <WorkWithUs/>
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
import WorkWithUs from "~/components/home/WorkWithUs.vue";

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
