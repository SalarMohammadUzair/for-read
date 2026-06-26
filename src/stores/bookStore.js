import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref([])
