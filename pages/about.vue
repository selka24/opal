<template>
    <div id="about">
        <BgImage page="About Us" />
        <div class="flex justify-center">
            <div class="flex flex-col items-center mt-40 px-5 xs:px-10 max-w-7xl">
                <CardsSection/>
                <WhoWeAre/>
<!--                <NumbersSection/>-->
            </div>
        </div>
<!--        <MembersSection/>-->
<!--        <PricingSection/>-->
        <WorkWithUs class="mt-36"/>
    </div>
</template>
<script setup>
import CardsSection from "~/components/about/CardsSection.vue";
import WhoWeAre from "~/components/home/WhoWeAre.vue";
import NumbersSection from "~/components/home/NumbersSection.vue";
import MembersSection from "~/components/about/MembersSection.vue";
import PricingSection from "~/components/about/PricingSection.vue";
import WorkWithUs from "~/components/home/WorkWithUs.vue";
useHead({
    title: 'About Us | Shark Technologies | Web & D365 Experts',
    meta: [
        { name: 'description', content: 'Learn more about Shark Technologies, our mission, and our expertise in web development and D365 solutions. We deliver high-quality services to businesses worldwide.' },

        // Open Graph (OG) Meta Tags for Social Sharing
        { property: 'og:title', content: 'About Us | Shark Technologies - Web & D365 Experts' },
        { property: 'og:description', content: 'Shark Technologies offers professional web development and D365 solutions tailored to business needs. Learn more about our mission and expertise.' },
        { property: 'og:image', content: '/og-image-about.jpg' }, // Upload your image to /public folder or use a CDN link
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://shark-technologies.com/images/default-social-image.png' },

        // Twitter Meta Tags for Social Sharing
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'About Us | Shark Technologies' },
        { name: 'twitter:description', content: 'Learn more about Shark Technologies and our professional web development and D365 solutions.' },
        { name: 'twitter:image', content: 'https://shark-technologies.com/images/default-social-image.png' }
    ]
});
</script>
