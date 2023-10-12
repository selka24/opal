<template>
    <div :class="`relative ${topOption ? 'bg-primary' : 'bg-primary/10'}`">
        <div v-if="topOption" class="maskBg bg-white/5 absolute h-full w-full z-0"/>
        <div class="flex flex-col p-12 relative z-10">
            <h3 class="mb-5">{{pricingInfo.title}}</h3>
            <p class="opacity-100">{{pricingInfo.description}}</p>
            <Transition mode="out-in">
                <div :key="yearly" class="flex text-center items-center gap-2.5">
                    <h3>${{yearly ? pricingInfo.price.yearly : pricingInfo.price.monthly}}</h3>
                    <p class="opacity-100">/{{yearly ? 'year' : 'month'}}</p>
                </div>
            </Transition>
            <HrBreak class="mt-7 mb-5"/>
            <div class="flex flex-col gap-y-4">
                <div v-for="service in pricingInfo.services" class="flex gap-3 items-center">
                    <div class="rounded-full w-6 h-6 bg-white/10 items-center flex justify-center">
                        <NuxtIcon name="Check" :class="`${topOption ? 'text-white' : 'text-primary'}`"/>
                    </div>
                    <p class="opacity-100">{{service.title}}</p>
                </div>
            </div>
            <ButtonDefault class="w-full mt-10">CHOOSE PLAN</ButtonDefault>
        </div>
    </div>
</template>
<script setup>
    import {productServices} from "~/constants.js";
    import HrBreak from "~/components/HrBreak.vue";
    import ButtonDefault from "~/components/ButtonDefault.vue";

    defineProps({
        topOption: Boolean,
        yearly: Boolean,
        pricingInfo: {
            type: Object,
            default: {
                title: 'Starter',
                description: 'For most businesses that want to the otpimize web queries',
                price: {monthly: '100', yearly: '1000'},
                services: [
                    ...productServices
                ]
            }
        }
    })
</script>
<style scoped>

.maskBg{
    mask-image: url("/images/MaskCircle.svg");
    mask-size: cover;
    mask-repeat: no-repeat;
}
</style>
