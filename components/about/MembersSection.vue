<template>
    <div class="bg-gradient-to-b from-primary/10 w-full mt-40 relative flex justify-center overflow-x-hidden px-5">
        <div class="max-w-7xl flex flex-col items-center relative z-10 w-full">
            <div class="mt-24 max-w-2xl relative w-full flex flex-col items-center px-5">
                <NuxtIcon name="sparkle" class="text-secondary-content text-4xl absolute left-0 top-0"/>
                <div class="text-lg text-secondary-content font-medium leading-normal">
                    Our Team
                </div>
                <h2 class="mt-5">Expert Team Member</h2>
                <NuxtIcon name="sparkle" class="text-white/20 text-3xl absolute right-0 bottom-0"/>
            </div>
            <div class="flex flex-wrap justify-center gap-11 mt-16">
                <TeamMember v-for="(member, idx) in members"
                            :member="member"
                            :key="idx + 'member'"
                />
            </div>
            <ButtonDefault class="mt-14 mb-24">SEE ALL MEMBER</ButtonDefault>
        </div>
        <div class="w-[100%] max-w-[435px] m-auto absolute bottom-20 left-0 2xl:left-[10%]">
            <div class="h-0 pb-[100%] rounded-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <div class="w-[100%] max-w-[435px] m-auto absolute top-28 right-0 2xl:right-[10%]">
            <div class="h-0 pb-[100%] rounded-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <NuxtIcon name="circle" class="text-[300px] absolute -right-28 rotate-180 top-1/4 z-0" filled/>
        <NuxtIcon name="sparkle" class="text-primary text-3xl absolute right-[5%] bottom-16"/>
        <NuxtIcon name="sparkle" filled class="text-4xl absolute left-10 top-1/2 z-0"/>
    </div>
</template>
<script setup>
    import {members} from "~/constants.js";
    import ButtonDefault from "~/components/ButtonDefault.vue";
</script>
