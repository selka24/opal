<script setup>
import {termsOfService} from "~/constants";
import NumberList from "~/components/NumberList.vue";

useHead({
    title: 'Terms of Service | Shark Technologies',
    meta: [
        { name: 'description', content: 'Review the terms of service of Shark Technologies. Understand the terms you agree to when using our website and services.' },

        // Open Graph (OG) Meta Tags for Social Sharing
        { property: 'og:title', content: 'Terms of Service | Shark Technologies' },
        { property: 'og:description', content: 'Learn about the terms and conditions for using Shark Technologies\' services and website.' },
        { property: 'og:image', content: 'https://shark-technologies.com/images/default-social-image.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://shark-technologies.com/terms-of-service' },

        // Twitter Meta Tags for Social Sharing
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Terms of Service | Shark Technologies' },
        { name: 'twitter:description', content: 'Understand the rules and conditions for using Shark Technologies\' website and services.' },
        { name: 'twitter:image', content: 'https://shark-technologies.com/images/default-social-image.png' }
    ]
});
</script>

<template>
    <div>
        <BgImage page="Terms of Service" />
        <div class="flex flex-col gap-8 max-w-7xl mx-auto mt-10 px-5">
            <div>
                <h6 class="font-bold">Effective Date: &nbsp;&nbsp; <span class="font-semibold">20.10.2023</span></h6>
            </div>
            <h6>
                Welcome to <b>Shark Technologies</b>. By accessing or using our website, you agree to the following terms and conditions. Please read them carefully before using our services.
            </h6>
            <div>
               <NumberList :list="termsOfService"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
