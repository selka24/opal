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
    title: 'About Us',
    meta: [
        { name: 'description', content: 'About us.' }
    ],
})
</script>
