<script setup lang="ts">
import NumberList from "~/components/NumberList.vue";

const privacyPolicy = [
    {
        title: 'Information We Collect',
        description: 'We collect minimal personal information necessary to provide our services, including contact information and technical data such as IP address and browser type.'
    },
    {
        title: 'How We Use Your Information',
        description: 'We use the information for communication, service improvement, and legal compliance purposes.'
    },
    {
        title: 'Cookies and Tracking',
        description: 'Our website uses cookies to enhance your browsing experience and gather analytics data, which can be disabled through your browser settings.'
    },
    {
        title: 'Data Sharing',
        description: 'We do not sell, trade, or rent your personal information to third parties but may share data with trusted service providers who keep it confidential.'
    },
    {
        title: 'Data Protection',
        description: 'We implement security measures to protect your personal information but cannot guarantee absolute security due to the nature of internet transmission.'
    },
    {
        title: 'Your Rights',
        description: 'You have the right to access, request correction, or deletion of the personal data we hold about you.'
    },
    {
        title: 'Changes to This Policy',
        description: 'We reserve the right to update this Privacy Policy, with changes posted on this page and an updated effective date.'
    },
    {
        title: 'Contact Us',
        description: 'For any questions about this Privacy Policy, contact us at: &nbsp;&nbsp; <a href="mailto:compliance@shark-technologies.com">compliance@shark-technologies.com</a>'
    }
];
</script>

<template>
    <div>
        <BgImage page="Privacy and Policy" />
        <div class="flex flex-col gap-8 max-w-7xl mx-auto mt-10 px-5">
            <div>
                <h6 class="font-bold">Effective Date: &nbsp;&nbsp; <span class="font-semibold">20.10.2023</span></h6>
            </div>
            <h6>
                At Shark Technologies, we are committed to safeguarding the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services.
            </h6>
            <div>
               <NumberList :list="privacyPolicy"></NumberList>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
