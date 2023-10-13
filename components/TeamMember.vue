
<template>
    <div class="relative">
        <div class="flex flex-col items-center">
            <div class="bg-white/10 w-full h-[250px] absolute bottom-0 z-[1]"/>
            <div class="px-5 relative z-10 w-full flex justify-center group/image">
                <img width="250" height="250" :src="`/images/${member.image || 'avatar.webp'}`" class="w-auto h-[250px] object-cover" alt="profile image">
                <div class="absolute justify-center flex bottom-0 gap-2.5 transition-all ease-out duration-500 opacity-0 group-hover/image:opacity-100 group-hover/image:-translate-y-5">
                    <social-network v-for="social in (member.socialLinks || socialNetworks)"
                                    class="bg-white !p-3 group/icon"
                                    iconStyle="text-secondary-content text-lg group-hover/icon:text-white"
                                    :social="social"
                    />
                </div>
            </div>
            <div class="bg-white px-14 py-6 text-center w-full shadow-[0px_-4px_10px_rgba(0,_0,_0,_0.25)] relative z-20">
                <p class="text-secondary-content opacity-100">{{ member.job }}</p>
                <h4 class="text-secondary">{{member.fullName}}</h4>
            </div>
        </div>
    </div>
</template>
<script setup>
import {socialNetworks} from "~/constants.js";

defineProps({
    member: {
        type: Object,
        default: {
            image: '',
            socialLinks: [...socialNetworks],
            fullName: '',
            job: ''
        }
    }
})
</script>
<style>
.test {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
