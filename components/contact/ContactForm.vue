<template>
    <div class="flex flex-col gap-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <InputDefault class="w-full"
                          v-model="contactForm.name"
                          placeholder="Enter Name"
                          id="name"
                          label="Name"
            />
            <InputDefault class="w-full"
                          v-model="contactForm.email"
                          placeholder="Email Address"
                          id="email"
                          label="Email"
            />
        </div>
        <div>
            <InputDefault class="w-full h-[220px]"
                          textarea
                          v-model="contactForm.comments"
                          placeholder="Write Your Message"
                          id="comment"
                          label="Comments"
            />
        </div>
    </div>
</template>
<script setup>
    import InputDefault from "~/components/InputDefault.vue";

    const contactForm = ref({
        name: '',
        email: '',
        comments: ''
    })
</script>
<style scoped>

</style>
