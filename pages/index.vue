<template>
    <div class="mb-20 mx-5 xs:mx-10" id="home">
        <HeroSection/>
        <div class="flex justify-center">
            <div class="max-w-7xl w-full">
                <Technologies/>
                <WhoWeAre/>
                <ServiceSection/>
                <HowSection/>
<!--                <NumbersSection/>-->
<!--                <TestimonialSection/>-->
                <OurWork/>
                <WorkWithUs class="mt-36"/>
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
// import NumbersSection from "~/components/home/NumbersSection.vue";
// import TestimonialSection from "~/components/home/TestimonialSection.vue";
import WorkWithUs from "~/components/home/WorkWithUs.vue";

useHead({
    title: 'Shark Technologies | Microsoft D365 F&O, Software Development, Cyber Security in Albania',
    meta: [
        { name: 'description', content: 'Shark Technologies offers top-tier web development, D365 implementations, and custom solutions for businesses globally.' },
        { property: 'og:title', content: 'Shark Technologies - Web Development & D365 Experts' },
        { property: 'og:description', content: 'We build professional websites and web applications tailored to business needs.' },
        { property: 'og:image', content: 'https://shark-technologies.com/images/default-social-image.png' },
        { name: 'twitter:title', content: 'Shark Technologies' },
        { name: 'twitter:description', content: 'Shark Technologies offers high-quality web development and D365 solutions.' },
        { name: 'twitter:image', content: 'https://shark-technologies.com/images/default-social-image.png' }
    ]
})
definePageMeta({
    layout: 'home'
})
</script>
