

import { defineStore } from 'pinia'
import { ref } from 'vue'

// We are creating a Whiteboard specifically for managing Books
export const useBookStore = defineStore('book', () => {

  // 1. STATE (What is written on the whiteboard)
  const selectedBook = ref(null)

  // 2. ACTION (The marker used to change the whiteboard)
  function selectBook(book) {
    selectedBook.value = book
  }

  // 3. EXPORT (Make the whiteboard visible to the house)
  return { selectedBook, selectBook }
})




