<template>
    <div class="bg-secondary-content py-24 px-16 mt-40">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32">
            <div v-for="info in infoNumbers" class="flex flex-col justify-center items-center text-white text-center">
                <h3 class="text-5xl font-bold leading-7">{{info.number}}</h3>
                <hr class="h-[3px] my-5 bg-secondary border-0 w-12">
                <div class="text-2xl leading-7 min-h-[60px]">{{info.description}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const infoNumbers = [
        {number: '276K', description: 'Worldwide Students'},
        {number: '23+', description: 'Years Experience'},
        {number: '735+', description: 'Professional Courses'},
        {number: '4.7K', description: 'Beautiful Review'},
    ]
</script>
