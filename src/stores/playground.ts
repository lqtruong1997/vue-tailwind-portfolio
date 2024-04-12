import { defineStore } from 'pinia'
import http from '@/services/http'
import type { Entries } from '@/models/Entries.interface'

export const usePlaygroundStore = defineStore({
  id: 'playground',
  state: () => ({entries: {} as Entries}),
  getters: {},
  actions: {
    async getEntries () {
        const result = await http.get<Entries>('https://api.publicapis.org/entries')
        this.entries = result.data
    }
  }
})