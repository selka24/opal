<template>
    <section class="flex flex-col items-center relative">
        <div class="absolute bottom-0 left-[10rem] lg:block hidden">
            <div
                class="-rotate-90 opacity-10 text-6xl text-nowrap font-bold uppercase tracking-[36px] origin-top-left text-transparent bg-clip-text bg-gradient-to-r from-white absolute bottom-[-12rem]">
                SHARK TECHNOLOGIES
            </div>
        </div>
        <div class="w-[30%] m-auto absolute bottom-0 left-0">
            <div class="h-0 pb-[100%] rounded-tr-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <div class="relative w-full max-w-7xl justify-center flex mt-[200px]">
            <div
                class="flex flex-col relative leading-tight items-center  lg:text-[100px] md:text-[6rem] xs:text-[3.75rem] text-[2.5rem] font-bold">
                <div class="absolute items-center flex flex-col top-[-90px] z-0">
                    <nuxt-icon name="sparkle" class="text-[40px] mb-2 text-secondary-content top-[-50px]"/>
                    <nuxt-icon name="circle" class="text-[200px] xs:text-[276px]" filled/>
                </div>
                <div class="text-center z-10">
                    <div>
                        Innovative Solutions
                        <br>
                        for a
                        <br>
                        Digital World
                    </div>
                </div>
<!--                <nuxt-link class="leading-[0]" to="/contact">-->
<!--                    <ButtonDefault class="w-max mt-8 z-10">-->
<!--                        GET OUR QUOTE-->
<!--                    </ButtonDefault>-->
<!--                </nuxt-link>-->
            </div>
            <nuxt-icon name="star" filled class="absolute text-[200px] right-0 lg:block hidden"/>
        </div>
        <!--        rotate-[-5deg]-->
        <!--        <div class=" bg-secondary-content max-h-min w-full uppercase text-[2rem] text-center mt-32">-->
        <!--            Technology to elevate our human experience. Your Next It Solution Agency & Explore More-->
        <!--        </div>-->
    </section>
</template>
<script setup>

</script>
