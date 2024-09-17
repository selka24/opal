<template>
    <div class="flex flex-row sm:flex-col items-center">
<!--        <Transition name="slide-fade">-->
<!--            <div v-if="showMenu" @click="() => {showMenu = !showMenu}" class="flex z-10 w-full fixed bg-secondary top-0">-->
<!--                <div class="flex w-full h-full flex-col justify-center items-center gap-y-6 bg-primary/5 shadow-2xl py-7">-->
<!--                    <NuxtLink v-for="page in pages"-->
<!--                              :key="page.name + 'menu'"-->
<!--                              :to="page.path"-->
<!--                              class="text-base font-medium uppercase">-->
<!--                        {{page.name}}-->
<!--                    </NuxtLink>-->
<!--                </div>-->
<!--            </div>-->
<!--        </Transition>-->
        <div class="flex my-10 px-5 items-center justify-center w-full">
            <div class="flex w-full max-w-7xl items-center">
                <div class="text-[22px] md:text-[28px] font-bold uppercase">
                    Shark Technologies
                </div>
                <div class="ml-auto hidden sm:flex">
                    <div v-for="(info, idx) in headerInfo" class="flex items-center">
                        <NuxtIcon :name="info.icon" class="hidden md:block text-4xl mr-2" filled/>
                        <div>
                            <p class="opacity-100">{{info.title}}</p>
                            <p class="font-bold opacity-100 text-sm">{{info.content}}</p>
                        </div>
                        <div v-if="(idx + 1) < headerInfo.length" class="border-r-2 border-white/20 h-7 mx-3.5 sm:mx-5 md:mx-7"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-secondary-content/10 hidden sm:flex justify-center w-full">
            <div class="max-w-7xl w-full gap-14 flex py-6 px-5">
                <RouteLinks/>
            </div>
        </div>
        <Hamburger/>
<!--        <div class="max-w-max ml-auto  md:hidden block mr-6 md:mr-20">-->
<!--            <NuxtIcon @click="() => {showMenu = !showMenu}" name="Menu" filled class="text-5xl cursor-pointer"/>-->
<!--        </div>-->
    </div>
</template>
<script setup>
import {sharkInfo} from "~/constants.js";

const showMenu = ref(false);

const headerInfo = [
    {icon: 'time', title: 'Time', content: sharkInfo.time},
    {icon: 'location', title: 'Location', content: 'AL, Tirana'},
    {icon: 'phone', title: 'Phone', content: sharkInfo.phone}
]
</script>
