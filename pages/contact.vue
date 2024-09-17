<template>
    <div id="contact">
        <BgImage page="Contact Us"/>
        <div class="flex justify-center mt-36 px-5">
            <div class="max-w-7xl flex flex-col">
                <div class="grid grid-cols-1 lg:grid-cols-6 gap-24">
                    <div class="lg:col-span-2">
                        <h2 class="mb-10 max-w-md">Let's Talk</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                            <ContactCard v-for="(info, key) in sharkInfo"
                                :info="{content: info, key }"
                            />
                        </div>
                    </div>
                    <div class="lg:col-span-4">
                        <div class="flex flex-col h-full gap-10">
                            <div class="flex justify-between flex-wrap items-center gap-y-10">
                                <p class="max-w-[650px]">We're always ready to help with your inquiries, feedback, or support needs. Whether you’re looking for more information about our innovative solutions or need assistance with a current service, feel free to reach out.</p>
                                <div class="flex gap-2.5">
                                    <SocialNetwork v-for="social in socialNetworks"
                                                   :social="social"
                                                   class="!rounded-full w-10 h-10"
                                    />
                                </div>
                            </div>
                            <GoogleMaps class="h-full min-h-[300px] max-h-[550px]"/>
                            <ContactForm/>
                            <ButtonDefault class="max-w-max mt-auto">SUBMIT NOW</ButtonDefault>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-primary/10 flex w-full justify-center py-16 px-5 mt-36">
            <WorkWithUs/>
        </div>
    </div>
</template>
<script setup>
import {sharkInfo, socialNetworks} from "~/constants.js";
import ContactCard from "~/components/contact/ContactCard.vue";
import ContactForm from "~/components/contact/ContactForm.vue";
import WorkWithUs from "~/components/home/WorkWithUs.vue";
useHead({
    title: 'Contact',
    meta: [
        { name: 'description', content: 'Contact us.' }
    ],
})
</script>
