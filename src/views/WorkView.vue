<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import AppModal from '../components/AppModal.vue'
import { XMarkIcon, DocumentPlusIcon, BuildingOfficeIcon, CpuChipIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid'
import { ref, watch, type Ref } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import { getRandomColorName } from '@/helpers/random';

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

const modalStore = useModalStore()
interface Project {role: string, img: string, shortDescription: string, name: string,
    techs: string, company: string, previewUrl?: string, description: string, className?: string}
const projects: Ref<Project[]> = ref([
    {
        role: 'Frontend Developer',
        img: new URL('../assets/Platform28Featured.webp', import.meta.url).toString(),
        shortDescription: 'Maintaining and Migrating a dashboard',
        name: 'Frontend developer for a dashboard of Platform 28',
        techs: 'Angular, Angular Material, Vue.js, Tailwind CSS, TypeScript',
        previewUrl: 'https://www.platform28.com/',
        company: 'Platform 28',
        description: `Platform 28 is a robust cloud contact center solution for
        enterprise customers, government agencies and telcos. In this project, I served as a Frontend Developer. 
        In this role, I were responsible for optimizing front-end performance, mentoring junior developers, collaborating with the CTO to resolve client issues.
        I also helped with migrating a complex multi-page application into a Single Page Application using Angular and micro front-end architecture.`
    },{
        role: 'Junior Web Developer',
        img: new URL('../assets/dinhduongmevabe.png', import.meta.url).toString(),
        shortDescription: 'Maintaining both Frontend and Backend of domain dinhduongmevabe',
        name: 'Fullstack role for dashboard dinhduongmevabe',
        company: 'Precio Fishbone Vietnam',
        techs: '.Net, Angular, PWA, TypeScript, Material Design',
        previewUrl: 'https://dinhduongmevabe.com.vn/',
        description: `dinhduongmevabe.com.vn is a website that provides nutrition information and resources for pregnant women,
        breastfeeding mothers, and children under 5 years old in Vietnam. As part of the development team,
        I played a key role in building the single-page application dashboard. This involved collaborating with UX/UI designers
        to ensure a user-friendly experience, and implementing RESTful API services to enable features for creating, reading,
        updating, and deleting data. My technical expertise included utilizing Angular, Typescript, and Progressive Web App
        (PWA) technologies on the front-end, while leveraging ASP.NET, MSSQL on the back-end.`
    },{
        role: 'Fresher Web Developer',
        img: new URL('../assets/tera-logo.webp', import.meta.url).toString(),
        shortDescription: 'Maintaining both Frontend and Backend of domain tera.vn',
        name: 'Fullstack role for domain tera.vn',
        company: 'TERA',
        techs: 'Java, React, Javascript, Bootstrap',
        description: `I landed an internship opportunity at Tera, and after a successful internship,
        I transitioned into a part-time role as a Fresher Web Developer. During my time there,
        I actively participated in training courses on OOP concepts, clean code practices, CSS frameworks, and JavaScript frameworks.
        I also played a hands-on role in fixing UI issues and developing new features based on project requirements.`
    },
])
const modalData = ref<Project>(projects.value[0])
const updateColor = () => {
    projects.value.forEach(e => {
        if (theme.value === 'dark') {
            e.className = 'bg-home-card-bg border-home-card-border'
        } else {
            const random = getRandomColorName()
            e.className = 'bg-' + random + '-100' + ' border-' + random + '-100'
        }
        return e
    })
}
watch(theme, () => {
    updateColor()
})
</script>

<template>
    <div class="flex items-center mb-5">
        <span class="text-3xl font-bold mr-5 text-heading-color">Portfolio</span>
        <div class="border-solid border-2 border-primary-bg w-1/4 rounded"></div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mb-8">
        <div v-for="p of projects" :key="p.name" class="p-5 rounded-lg cursor-pointer h-fit bg-home-card-bg border-home-card-border border-2 border-solid"
        @click="modalStore.toggleModal(); modalData = p" v-hover="{className: 'bounce2'}" :class="p.className">
            <img :src="p.img" class="mb-2 mx-auto bg-card-bg rounded-md p-3 bg-white">
            <p class="text-paragraph-color dark:text-[#A6A6A6] mb-2">{{ p.shortDescription }}</p>
            <p class="font-semibold text-lg text-text-default">{{ p.role }}</p>
        </div>
    </div>
    <AppModal class="border-home-card-border">
        <div class="text-center flex-auto justify-center leading-6 relative overflow-auto no-scrollbar project-modal">
            <h2 class="text-3xl font-bold flex justify-center items-center text-primary-bg mb-5">
                {{ modalData.role }}
            </h2>
            <XMarkIcon class="h-6 ml-auto cursor-pointer text-heading-color fixed top-4 right-4"
            @click="modalStore.toggleModal()"></XMarkIcon>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 mb-3">
                <div class="flex text-heading-color">
                    <DocumentPlusIcon class="h-7"></DocumentPlusIcon>
                    Project:&nbsp; <span class="font-semibold">{{ modalData.name }}</span>
                </div>
                <div class="flex text-heading-color">
                    <BuildingOfficeIcon class="h-7"></BuildingOfficeIcon>
                    Company:&nbsp; <span class="font-semibold">{{ modalData.company }}</span>
                </div>
                <div class="flex text-heading-color">
                    <CpuChipIcon class="h-7"></CpuChipIcon>
                    Technologies:&nbsp; <span class="font-semibold text-left">{{ modalData.techs }}</span>
                </div>
                <div class="flex text-heading-color" v-if="modalData.previewUrl">
                    <ArrowTopRightOnSquareIcon class="h-7"></ArrowTopRightOnSquareIcon>
                    Preview:&nbsp; <a :href="modalData.previewUrl" target="_blank" class="p-0 hover:text-primary-bg hover:bg-card-bg">{{ modalData.previewUrl }}</a>
                </div>
            </div>
            <div class="text-paragraph-color dark:text-[#A6A6A6] text-left mb-3">
                {{ modalData.description }}
            </div>
            <img :src="modalData.img" width="500" class="mx-auto bg-white rounded">
        </div>
    </AppModal>
</template>
<style >
    .no-scrollbar::-webkit-scrollbar { 
        display: none; 
    } 
    .project-modal {
        max-height: 600px;
        height: 450px;
    }
</style>