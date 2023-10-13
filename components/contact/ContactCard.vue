<template>
    <div class="border border-secondary-content/20 flex px-16 py-10 justify-center items-center text-center relative">
        <div class="rad-gradient w-full h-full absolute z-0"/>
        <div class="flex flex-col justify-center items-center gap-7 min-w-max relative z-10">
            <div class="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                <NuxtIcon :name="getIcon" class="text-3xl text-secondary-content"/>
            </div>
            <h5 v-html="info.content"/>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        info: {
            type:Object,
            default: {
                key: '',
                content: ''
            }
        }
    })

    const getIcon = computed(() => {
        switch (props.info.key) {
            case "email":
                return "email";
            case "location":
                return "location2";
            case "time":
                return "time";
            case "phone":
                return "phone2";
        }
    })
</script>
<style scoped>
.rad-gradient{
    background: radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(16, 76, 186, 0.40) 0%, rgba(16, 76, 186, 0.00) 100%);
    opacity: 0.3;
}
</style>
