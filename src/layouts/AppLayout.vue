<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import UserInfo from '../components/UserInfo.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref, watch } from 'vue';

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const oldTheme = ref('dark')

onBeforeMount(() => {
    oldTheme.value = theme.value
})
watch(theme, () => {
    setTimeout(() => {
        oldTheme.value = theme.value
    }, 1000)
})
</script>

<template>
    <div class="bg-page-bg-img bg-center bg-no-repeat bg-cover min-h-full" :class="{'fade-in': theme !== oldTheme}">
        <section class="container 2xl:max-w-screen-xl mx-auto py-10">
            <AppHeader class="pb-20"></AppHeader>
            <div class="lg:flex">
                <aside class="lg:w-1/3 w-full">
                    <UserInfo class="sticky top-10"></UserInfo>
                </aside>
                <section className="lg:w-2/3 lg:ml-10 lg:mt-28 mt-10 w-full">
                    <AppNavigation class="lg:w-2/3 w-full ml-auto mb-10"></AppNavigation>
                    <div class="bg-card-bg rounded-2xl p-10">
                        <RouterView />
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>