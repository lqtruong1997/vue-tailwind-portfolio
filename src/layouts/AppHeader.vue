<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref } from 'vue'
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()

const rotate = ref(false)
const currentTheme = ref('light')

onMounted(() => {
  let theme = localStorage.getItem('theme')
  if (!theme) {
    localStorage.setItem('theme', 'light')
    theme = 'light'
  }
  currentTheme.value = theme;

  themeStore.setTheme(theme)

  const rootHtml = document.getElementById('root-html')
  rootHtml?.setAttribute('data-theme', currentTheme.value)
})

const onChangeTheme = () => {
    setTimeout(() => {
        rotate.value = !rotate.value
    }, 0)
    switch (currentTheme.value) {
        case 'light':
            currentTheme.value = 'dark'
            localStorage.setItem('theme', 'dark')
            break;
        case 'dark':
            currentTheme.value = 'light'
            localStorage.setItem('theme', 'light')
            break;
        default:
            break;
    }
    const rootHtml = document.getElementById('root-html')
    rootHtml?.setAttribute('data-theme', currentTheme.value)
    themeStore.setTheme(currentTheme.value)
}

</script>

<template>
    <header class="flex justify-between align-middle lg:px-0 px-3">
        <h3 className="font-bold text-5xl text-heading-color">Andy Le</h3>
        <button className="rounded-full w-12 bg-card-bg text-xs text-heading-color hover:bg-primary-bg hover:text-button-text-color outline-none border-none p-2">
            <ArrowPathIcon @click="onChangeTheme()" :class="{'rotate-180': rotate}" class="duration-200"></ArrowPathIcon>
        </button>
    </header>
</template>