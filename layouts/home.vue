<template>
    <div>
        <Header/>
        <div class="w-[30%] m-auto absolute top-0 right-0">
            <div class="h-0 pb-[100%] rounded-bl-full bg-primary opacity-20 blur-[150px]"></div>
        </div>
        <div class="absolute left-0 max-w-[500px] w-full top-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 757 549" fill="none">
                <path opacity="0.1" d="M752 -20C732.473 42.875 657.999 145.981 516.323 55.4049C339.227 -57.815 407.046 153.094 252.03 185.507C97.0152 217.919 168.665 426.352 74.9345 404.068C-0.0496433 386.241 -44.932 491.928 -58.0001 547" stroke="#104CBA" stroke-width="10"/>
            </svg>
        </div>
        <slot/>
    </div>
</template>
