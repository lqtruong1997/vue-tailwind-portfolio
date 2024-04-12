<script setup lang="ts">
import { CodeBracketIcon } from '@heroicons/vue/24/solid'

</script>

<template>
    <div class="flex items-center mb-5">
        <span class="text-3xl font-bold mr-5 text-heading-color">About Me </span>
        <div class="border-solid border-2 border-primary-bg w-1/4 rounded"></div>
    </div>
    <p class="text-paragraph-color mb-5">
        My experience transcends various technologies, including Angular, Javascript, HTML, CSS, Node.js, Express.js, and MongoDB.
        I am proficient in Vanilla JS and JS Frameworks, with a deep understanding of UX principles and user psychology for crafting intuitive and engaging user experiences.
        Additionally, I possess a solid grasp of Angular app performance optimization, ensuring websites load quickly and deliver a seamless user experience.
    </p>
    <div class="text-2xl font-semibold mb-5 text-heading-color">
        What I do!
    </div>
    <div class="flex flex-wrap mb-5">
        <div class="flex rounded-xl bg-home-card-bg border-home-card-border border-solid border-2 p-5 w-full lg:w-1/2" v-in-viewport="{className: 'roll-in'}">
            <CodeBracketIcon class="h-10 font-extrabold text-blue-400 min-w-9"></CodeBracketIcon>
            <div class="ml-3">
                <p class="font-bold text-xl mb-3 text-heading-color">Web Development</p>
                <p class="text-paragraph-color">
                    As a Frontend Engineer with over 4 years of experience building and maintaining responsive websites.
                    I have a diverse range of experience in the Web development field, having participated in both the initial development of projects from scratch and the ongoing development and maintenance of large projects that have been in operation for many years.
                </p>
            </div>
        </div>
        
    </div>
    <div class="text-2xl font-semibold mb-5 text-heading-color">
        Worked Company
    </div>
    <div class="bg-item-bg p-5 rounded-2xl mb-4 flex justify-evenly">
        <a target="_blank" href="https://www.platform28.com/" v-in-viewport="{className: 'flip'}" class="bg-white hover:bg-white rounded-md">
            <img src="../assets/Platform28Featured.webp" width="150">
        </a>
        <a target="_blank" href="https://www.preciofishbone.vn/" v-in-viewport="{className: 'flip'}" class="bg-white hover:bg-white rounded-md">
            <img src="../assets/precio_logga_rgb_1600px.png" width="200" class="scale-75">
        </a>
        <a class="hover:bg-item-bg" v-in-viewport="{className: 'flip'}">
            <img src="../assets/tera-logo.webp" class="rounded-md" width="80">
        </a>
    </div>
</template>