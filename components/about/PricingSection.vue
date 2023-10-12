<template>
    <div class="flex justify-center px-5">
        <div class="max-w-7xl flex flex-col items-center relative">
            <div class="mt-24 mb-14 max-w-2xl relative w-full flex flex-col items-center px-5">
                <div class="text-lg text-secondary-content font-medium leading-normal">
                    Pricing List
                </div>
                <h2 class="mt-5 mb-10">Our Simple & Easy Pricing</h2>
                <ToggleBox v-model="yearlyPricing" :options="['monthly', 'yearly']"/>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 justify-center relative z-10">
                <pricing-card v-for="option in pricingOptions"
                              :pricing-info="option"
                              :yearly="yearlyPricing"
                              :top-option="option.title === 'Medium'"
                />
            </div>
            <div class="w-[100%] max-w-md m-auto absolute top-56 left-0 z-0">
                <div class="h-0 pb-[100%] rounded-full bg-primary opacity-20 blur-[150px]"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ToggleBox from "~/components/ToggleBox.vue";
import {pricingOptions} from "~/constants.js";
import PricingCard from "~/components/PricingCard.vue";
const yearlyPricing = ref(false)
</script>
