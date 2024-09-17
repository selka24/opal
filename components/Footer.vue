<template>
    <div>
<!--        <div class="flex justify-center px-5 xs:px-10">-->
<!--            <HrBreak class="mb-36 max-w-7xl"/>-->
<!--        </div>-->
        <div class="px-5 xs:px-10 mt-36 mb-24 flex justify-center">
            <div>
                <div class="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 max-w-7xl relative">
                    <div class="order-1">
                        <div class="z-2">
                            <h5>Innovative Solutions <br> for a Digital World</h5>
                            <div class="relative w-max">
                                <NuxtLink class="flex items-center gap-4 mt-10" to="/contact">
                                    <h2 class="text-2xl xs:text-4xl sm:text-6xl">Let's Connect</h2>
                                    <NuxtIcon name="ArrowUp" filled class="text-4xl"/>
                                </NuxtLink>
                                <NuxtIcon name="circle" filled class="hidden md:block text-[200px] absolute -right-7 -bottom-20 z-1"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center col-span-1 md:col-span-2 order-3 lg:order-2 lg:col-span-1">
                        <div class="flex flex-wrap lg:flex-col gap-7">
                            <RouteLinks class-override="text-base"/>
                        </div>
                    </div>
                    <div class="order-2 lg:order-3">
                        <h6 class="font-bold mb-10">{{sharkInfo.email}}</h6>
                        <h6 v-html="sharkInfo.location"/>
                    </div>
                </div>
                <HrBreak class="my-14"/>
                <div class="flex flex-wrap gap-11 justify-between max-w-7xl items-center">
                <p>© 2024 Shark Technologies. All Rights Reserved. &nbsp;&nbsp; | &nbsp;&nbsp; <router-link to="/privacy-policy">Privacy Policy</router-link>  &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/terms-of-service">Terms of Service</router-link></p>
                <div class="flex flex-wrap gap-5 items-center">
                    <SocialNetwork v-for="social in socialNetworks" :social="social"/>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
    import {sharkInfo, socialNetworks} from "~/constants.js";
</script>
