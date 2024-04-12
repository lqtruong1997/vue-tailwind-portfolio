<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, type Ref } from 'vue'
import { usePlaygroundStore } from '@/stores/playground'
import type { Entries } from '@/models/Entries.interface'
import { computedAsync, useVirtualList } from '@vueuse/core'
import type { Entry } from '@/models/Entry.interface';

const entryList: Ref<Entry[]> = ref([])

const playgroundStore = usePlaygroundStore()

const virtualList = computedAsync(async () => {
    await playgroundStore.getEntries()
    const entries =  playgroundStore.entries.entries
    const { list, containerProps, wrapperProps } = useVirtualList(
        entries,
        {
            itemHeight: 22,
        },
    )
    console.log(list)
    return { list, containerProps, wrapperProps }
})

const checkAll = () => {
    if (entryList.value) {
        entryList.value.forEach(e => {
            e.selected = !e.selected;
        })
    }
}

</script>

<template>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg playground-table">
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-5 h-5 text-text-light" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-border-light rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for items">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-text-light" v-bind="virtualList?.containerProps" style="height: 500px">
        <thead class="text-xs text-text-dark uppercase bg-gray-50">
            <tr>
                <th scope="col" class="p-4 font-medium text-gray-900">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" @click="checkAll()"
                        class="w-4 h-4 text-blue-600 bg-item-bg border-border-light rounded focus:ring-blue-500 ">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    API
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    Description
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    Auth
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    HTTPS
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    Cors
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    Link
                </th>
                <th scope="col" class="px-6 py-3 font-medium text-gray-900">
                    Category
                </th>
            </tr>
        </thead>
        <tbody v-bind="virtualList?.wrapperProps">
            <tr v-for="(entry, index) in virtualList?.list" :key="index" style="height: 22px" class="bg-card-bg border-b ">
                <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" @click="entry.data.selected = !entry.data.selected" type="checkbox" :checked="entry.data.selected"
                        class="w-4 h-4 text-blue-600 bg-item-bg border-border-light rounded focus:ring-blue-500">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4">
                    {{ entry.data.API }}
                </th>
                <td class="px-6 py-4">
                    {{ entry.data.Auth }}
                </td>
                <td class="px-6 py-4">
                    {{ entry.data.Category }}
                </td>
                <td class="px-6 py-4">
                    {{ entry.data.Cors }}
                </td>
                <td class="px-6 py-4">
                    {{ entry.data.Description }}
                </td>
                <td class="px-6 py-4">
                    {{ entry.data.HTTPS }}
                </td>
                <td class="px-6 py-4">
                    {{ entry.data.Link }}
                </td> -->
                <td class="px-6 py-4">
                    {{ entry }}
                </td>
            </tr>
        </tbody>
    </table>
    <div v-bind="virtualList?.containerProps" style="height: 300px; visibility:hidden">
    <div v-bind="virtualList?.wrapperProps">
        {{ virtualList?.list }}
      <div v-for="(item, index) of virtualList?.list" :key="index" style="height: 22px">
        Row: {{ item }}
      </div>
    </div>
  </div>
</div>
<nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-text-light mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900">1-10</span> of <span class="font-semibold text-gray-900">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-text-light bg-card-bg border border-border-light rounded-s-lg hover:bg-item-bg hover:text-text-dark">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-text-light bg-card-bg border border-border-light hover:bg-item-bg hover:text-text-dark">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-text-light bg-card-bg border border-border-light hover:bg-item-bg hover:text-text-dark">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-border-light bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-text-dark dark:bg-text-dark">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-text-light bg-card-bg border border-border-light hover:bg-item-bg hover:text-text-dark">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-text-light bg-card-bg border border-border-light hover:bg-item-bg hover:text-text-dark">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-text-light bg-card-bg border border-border-light rounded-e-lg hover:bg-item-bg hover:text-text-dark">Next</a>
            </li>
        </ul>
</nav>
</template>
<style>
    .playground-table {
        max-height: 500px;
    }
</style>