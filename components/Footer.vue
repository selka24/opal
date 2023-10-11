<template>
    <div>
        <div class="flex justify-center px-5 xs:px-10">
            <hr class="h-[0.5px] mt-28 mb-36 bg-white opacity-10 border-0 w-full max-w-7xl">
        </div>
        <div class="px-5 xs:px-10 mb-24 flex justify-center">
            <div>
                <div class="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 max-w-7xl relative">
                    <div class="order-1">
                        <div class="z-2">
                            <h4>An influencal creative agency.</h4>
                            <h4>Get’s IT Solutions For Expert Consultants</h4>
                            <div class="relative w-max">
                                <NuxtLink class="flex items-center gap-4 mt-10" to="/contact">
                                    <h1 class="text-2xl xs:text-4xl sm:text-6xl">Let’s Chat</h1>
                                    <NuxtIcon name="ArrowUp" filled class="text-4xl"/>
                                </NuxtLink>
                                <NuxtIcon name="circle" filled class="hidden md:block text-[200px] absolute -right-7 -bottom-20 z-1"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center col-span-1 md:col-span-2 order-3 lg:order-2 lg:col-span-1">
                        <div class="flex flex-wrap lg:flex-col gap-7">
                            <NuxtLink v-for="page in pages" :to="page.path">
                                {{page.name}}
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="order-2 lg:order-3">
                        <h4 class="font-bold mb-10">{{opalInfo.email}}</h4>
                        <h5 v-html="opalInfo.address"/>
                    </div>
                </div>
                <hr class="h-[0.5px] my-14 bg-white opacity-10 border-0">
                <div class="flex flex-wrap gap-11 justify-between max-w-7xl items-center">
                <p>Opal© 2023, All Rights Reserved</p>
                <div class="flex flex-wrap gap-5 items-center">
                    <SocialNetwork v-for="social in socialNetworks" :social="social"/>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
    import {pages, opalInfo, socialNetworks} from "~/constants.js";
</script>
