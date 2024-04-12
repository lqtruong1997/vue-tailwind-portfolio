<script setup lang="ts">
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore()
</script>
<template>
    <transition name="fade">
        <div v-if="modalStore.modal" class="h-full w-full fixed top-0 left-0">
            <div
                @click="modalStore.toggleModal()"
                class="absolute bg-black opacity-70 inset-0 z-1000 h-full w-full left-0 bottom-0"
            ></div>
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg bg-card-bg p-5 w-2/3">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    .fade-enter,
    .fade-leave-to {
    opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 500ms ease-out;
    }
</style>