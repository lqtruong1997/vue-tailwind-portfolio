<script setup lang="ts">
import { ref, computed } from 'vue'
import {useRoute} from 'vue-router'
import { HomeIcon, DocumentTextIcon, ComputerDesktopIcon, CubeIcon, IdentificationIcon } from '@heroicons/vue/24/solid'

const navigationItems = ref([
    {
        icon: HomeIcon,
        text: 'Home',
        url: '/details/home'
    },{
        icon: DocumentTextIcon,
        text: 'Resume',
        url: '/details/resume'
    },{
        icon: ComputerDesktopIcon,
        text: 'Works',
        url: '/details/works'
    },{
        icon: CubeIcon,
        text: 'Playground',
        url: '/details/playground'
    },{
        icon: IdentificationIcon,
        text: 'Contact',
        url: '/details/contact'
    }
])

const route = useRoute();
const path = computed(() =>route.path)

</script>

<template>
    <div class="bg-card-bg rounded-2xl p-8 flex">
        <a v-for="item of navigationItems" :key="item.text" @click="$router.push(item.url)"
        :class="{'bg-primary-bg text-white': item.url === path, 'bg-item-bg text-paragraph-color hover:text-button-text-color': item.url !== path}" 
        class="cursor-pointer px-1 mx-2 w-1/5 h-20 rounded-xl flex flex-col align-middle justify-center hover:bg-primary-bg">
            <component class="h-6" :is="item.icon"></component>
            <span class="text-center">{{ item.text }}</span>
        </a>
    </div>
</template>