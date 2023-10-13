<template>
    <div class="flex flex-col">
        <label v-if="label" :for="id" class="mb-3 font-light text-[16px] text-start">{{label}}</label>
        <textarea v-if="textarea"
                  :name="label"
                  :id="id"
                  class="resize-none font-light rounded-md focus:outline-none focus:ring focus:border-secondary-content/10 outline- leading-normal border border-white/10 p-5 bg-transparent text-[17px] h-full"
                  :placeholder="placeholder"
                  @input="(e) => emit('update:modelValue', e.currentTarget.value)">{{modelValue}}</textarea>
        <input v-else
               type="text"
               :id="id"
               class="font-light rounded-md focus:outline-none focus:ring focus:border-secondary-content/10 outline- leading-normal border border-white/10 p-5 bg-transparent text-[17px] h-full"
               :placeholder="placeholder"
               :value="modelValue"
               @input="(e) => emit('update:modelValue', e.currentTarget.value)">
    </div>
</template>
<script setup>
    defineProps({
        modelValue: String,
        placeholder: String,
        label: String,
        id: String,
        textarea: Boolean
    })

    const emit = defineEmits(['update:modelValue']);

</script>
<style scoped>

</style>
