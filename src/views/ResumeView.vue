<script setup lang="ts">
import { getRandomColorName } from '../helpers/random'
import { BriefcaseIcon, AcademicCapIcon, FlagIcon } from '@heroicons/vue/24/solid'
import type { SkillChip } from '../models/Skill.interface'
import type { Experience } from '../models/Experience.interface'
import { useThemeStore } from '@/stores/theme';
import { onBeforeMount, ref, watch, type Ref } from 'vue';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const experiencesDefault: Ref<Experience[]> = ref([
    {
        startTime: '3/2024',
        endTime: 'Present',
        company: 'Platform 28',
        position: 'Front end Developer specializing in Vue.js'
    },{
        startTime: '1/2020',
        endTime: '2/2022',
        company: 'Platform 28',
        position: 'Front end Developer specializing in Angular'
    },{
        startTime: '4/2019',
        endTime: '12/2019',
        company: 'Precio Fishbone Vietnam',
        position: 'Junior Web Developer'
    },
    {
        startTime: '6/2018',
        endTime: '3/2019',
        company: 'VIETNAM REAL ESTATE TECHNOLOGY JOINT STOCK COMPANY (TERA)',
        position: 'Fresher Web Developer'
    } 
]) 
const skillsDefault: Ref<SkillChip[]> = ref([
        {
            title: 'Angular',
            textColor: 'text-black',
            logo: new URL('../assets/angular.png', import.meta.url).toString()
        },
        {
            title: 'Vue.js',
            textColor: 'text-black',
            logo: new URL('/src/assets/vue.svg', import.meta.url).toString()
        },
        {
            title: 'TypeScript',
            textColor: 'text-black',
            logo: new URL('../assets/typescript.png', import.meta.url).toString()
        },
        {
            title: 'JavaScript',
            textColor: 'text-black',
            logo: new URL('../assets/javascript.png', import.meta.url).toString()
        }, 
        {
            title: 'Bootstrap',
            textColor: 'text-black',
            logo: new URL('../assets/bootstrap.webp', import.meta.url).toString()
        }, {
            title: 'Material',
            textColor: 'text-black',
            logo: new URL('../assets/angular-material.png', import.meta.url).toString()
        },
        {
            title: 'Tailwind',
            textColor: 'text-black',
            logo: new URL('../assets/tailwind.svg', import.meta.url).toString()
        },{
            title: 'Micro Frontend',
            textColor: 'text-black'
        },
    ])
const educationStyle = ref({
    bg: 'bg-blue-100',
    border: 'bg-blue-100'
})

onBeforeMount(() => {
    updateColor()
})
watch(theme, () => {
    updateColor()
})

const updateColor = () => {
    if (theme.value === 'dark') {
        educationStyle.value.bg = 'bg-home-card-bg'
        educationStyle.value.border = 'border-home-card-border'
    } else {
        const random = getRandomColorName()
        educationStyle.value.bg = 'bg-' + random + '-100'
        educationStyle.value.border = 'border-' + random + '-100'
    }
    experiencesDefault.value.forEach(e => {
        if (theme.value === 'dark') {
            e.color = 'bg-home-card-bg'
            e.borderColor = 'border-home-card-border'
        } else {
            const random = getRandomColorName()
            e.color = 'bg-' + random + '-100'
            e.borderColor = 'border-' + random + '-100'
        }
        return e
    })
    skillsDefault.value.forEach(e => {
        if (theme.value === 'dark') {
            e.bgColor = 'bg-home-card-bg'
            e.borderColor = 'border-home-card-border'
        } else {
            const random = getRandomColorName()
            e.bgColor = 'bg-' + random + '-100'
            e.borderColor = 'border-' + random + '-100'
        }
        return e
    })
}

</script>

<template>
    <div class="flex items-center mb-5">
        <span class="text-3xl font-bold mr-5 text-heading-color">Resume</span>
        <div class="border-solid border-2 border-primary-bg w-1/4 rounded"></div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mb-8">
        <div>
            <div class="flex mb-5">
                <BriefcaseIcon class="h-7 text-primary-bg min-w-9"></BriefcaseIcon>
                <p class="font-semibold text-2xl text-heading-color">Experience</p>
            </div>
            <div v-for="e of experiencesDefault" :key="e.startTime" :class="e.color + ' ' + e.borderColor" v-in-viewport="{className: 'roll-in'}"
            class="rounded-xl p-5 mb-7 last:mb-0 experience border-solid border-2">
                <p class="text-sm font-medium text-paragraph-color mb-2">
                    {{ e.startTime }} - {{ e.endTime }}
                </p>
                <p class="text-lg font-semibold text-heading-color">
                    {{ e.company }}
                </p>
                <p class="text-text-default">
                    {{ e.position }}
                </p>
            </div>
        </div>
        <div>
            <div class="flex mb-5">
                <AcademicCapIcon class="h-7 text-primary-bg min-w-9"></AcademicCapIcon>
                <p class="font-semibold text-2xl text-heading-color">Education</p>
            </div>
            <div class="rounded-xl p-5 border-2 border-solid" v-in-viewport="{className: 'roll-in-right'}" :class="educationStyle.bg + ' ' + educationStyle.border">
                <p class="text-sm font-medium text-paragraph-color mb-2">2015 - 2019</p>
                <p class="text-lg font-semibold text-heading-color">
                    Computer Science
                </p>
                <p class="text-text-default">
                    Bach Khoa University <br> Vietnam National University, Ho Chi Minh City
                </p>
            </div>
        </div>
    </div>
    <div class="flex mb-5">
        <FlagIcon class="h-7 text-primary-bg min-w-9"></FlagIcon>
        <p class="font-semibold text-2xl text-heading-color">Skills</p>
    </div>
    <div class="flex flex-wrap">
        <div v-for="s of skillsDefault" :key="s.title" :class="s.bgColor + ' ' + s.borderColor" v-in-viewport="{className: 'rotate-in-up-left'}"
        class="rounded-lg p-3 mb-3 text-paragraph-color font-medium cursor-default mr-3 last:mr-0 flex items-center border-solid border-2">
        <img v-if="s.logo" :src="s.logo" class="w-8 h-8"/>&nbsp;
        {{ s.title }}
    </div>
    </div>
</template>