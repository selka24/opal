<script setup>
import {termsOfService} from "~/constants";
import NumberList from "~/components/NumberList.vue";
</script>

<template>
    <div>
        <BgImage page="Privacy and Policy" />
        <div class="flex flex-col gap-8 max-w-7xl mx-auto mt-10 px-5">
            <div>
                <h6 class="font-bold">Effective Date: &nbsp;&nbsp; <span class="font-semibold">20.10.2023</span></h6>
            </div>
            <h6>
                Welcome to <b>Shark Technologies</b>. By accessing or using our website, you agree to the following terms and conditions. Please read them carefully before using our services.
            </h6>
            <div>
               <NumberList :list="termsOfService"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
