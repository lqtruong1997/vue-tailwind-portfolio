<script setup lang="ts">
import { ref, type Component } from 'vue'
const props = defineProps<{data: {title: String, value: String, icon: Component}}>()

</script>

<template>
    <div class="flex">
        <span class="shadow my-auto h-12 mr-2 rounded-lg w-12 bg-card-bg text-xs hover:bg-primary-bg outline-none border-none p-3.5 hover:text-white">
            <Component :is="data.icon" ></Component>
        </span>
        <div class="flex flex-col justify-center">
            <p class="text-xs text-paragraph-color">{{ data.title }}</p>
            <p class="break-all text-text-default">{{ data.value }}</p>
        </div>
    </div>
</template>