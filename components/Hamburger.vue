<template>
    <div class="w-full sm:hidden">
        <Transition name="slide-fade">
            <div v-if="showMenu" @click="() => {showMenu = !showMenu}" class="flex z-10 w-full fixed bg-secondary top-0 left-0 sm:hidden">
                <div class="flex w-full h-full flex-col justify-center items-center gap-y-6 bg-primary/5 shadow-2xl py-7">
                   <RouteLinks/>
                </div>
            </div>
        </Transition>
        <div class="max-w-max ml-auto block mr-6 md:mr-20">
            <NuxtIcon @click="() => {showMenu = !showMenu}" name="Menu" filled class="text-5xl cursor-pointer"/>
        </div>
    </div>
</template>
<script setup>
    const showMenu = ref(false);
</script>
