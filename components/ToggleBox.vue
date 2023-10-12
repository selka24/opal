<template>
    <label for="toggle-box" class="cursor-pointer select-none">
        <input class="hidden" id="toggle-box" type="checkbox" :value="modelValue" @input="handleToggleChange">
        <span class="block rounded-full bg-primary relative w-full">
            <span class="flex gap-14 py-3.5 px-7 text-base relative z-10 uppercase font-medium tracking-wider justify-between">
                <span>{{options[0]}}</span>
                <span>{{options[1]}}</span>
            </span>
            <span
                :class="`
                    rounded-full
                    w-1/2 bg-secondary-content h-[100%] absolute
                    left-0
                    top-0
                    transition-all
                    duration-500
                    ease-out
                    ${modelValue ? 'translate-x-full' : ''}
                `"
            />
        </span>
    </label>
</template>
<script setup>
    defineProps({
        modelValue: Boolean,
        options: {
            type: Array,
            default: ['false', 'true']
        }
    })

    const emit = defineEmits(['update:modelValue']);
    const handleToggleChange = (e) => {
        emit('update:modelValue', !JSON.parse(e.currentTarget.value))
    }
</script>
