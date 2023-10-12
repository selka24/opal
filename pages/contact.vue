<template>
    <div>
        <BgImage page="Contact Us"/>
        <div class="flex justify-center mt-36">
            <div class="max-w-7xl">
                <div class="grid grid-cols-6">
                    <div class="col-span-2">
                        <div class="grid gap-10">
                            <h2>Let’s Get Connect With Us</h2>
                            <ContactCard v-for="(info, key) in opalInfo"
                                :info="{content: info, icon: key}"
                            />
                        </div>
                    </div>
                    <div class="col-span-4">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {opalInfo} from "~/constants.js";
import ContactCard from "~/components/contact/ContactCard.vue";
useHead({
    title: 'Contact',
    meta: [
        { name: 'description', content: 'Contact us.' }
    ],
})
</script>
