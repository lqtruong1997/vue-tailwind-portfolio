import { defineStore } from 'pinia'

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    modal: false
  }),
  getters: {},
  actions: {
    toggleModal() {
      this.modal = !this.modal
    }
  }
})