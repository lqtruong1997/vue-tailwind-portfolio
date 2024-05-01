<script setup lang="ts">
import { ref, computed } from 'vue'
import {useRoute} from 'vue-router'
import { HomeIcon, DocumentTextIcon, ComputerDesktopIcon, CubeIcon, IdentificationIcon } from '@heroicons/vue/24/solid'

const navigationItems = ref([
    {
        icon: HomeIcon,
        text: 'Home',
        url: '/home'
    },{
        icon: DocumentTextIcon,
        text: 'Resume',
        url: '/resume'
    },{
        icon: ComputerDesktopIcon,
        text: 'Works',
        url: '/works'
    },{
        icon: CubeIcon,
        text: 'Playground',
        url: '/playground'
    },{
        icon: IdentificationIcon,
        text: 'Contact',
        url: '/contact'
    }
])

const route = useRoute();
const path = computed(() =>route.path)

</script>

<template>
    <div class="bg-card-bg rounded-2xl lg:px-8 py-8 px-0 flex">
        <a v-for="item of navigationItems" :key="item.text" @click="$router.push(item.url)"
        :class="{'bg-primary-bg text-white': item.url === path, 'bg-item-bg text-paragraph-color hover:text-button-text-color': item.url !== path}" 
        class="cursor-pointer lg:mx-2 mx-1 w-1/5 h-20 rounded-xl flex flex-col align-middle justify-center hover:bg-primary-bg lg:text-base text-xs">
            <component class="h-6" :is="item.icon"></component>
            <span class="text-center">{{ item.text }}</span>
        </a>
    </div>
</template>