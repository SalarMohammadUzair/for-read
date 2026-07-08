

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ID } from 'appwrite'
import { databases } from '../appwrite.js'

// We are creating a Whiteboard specifically for managing Books
export const useBookStore = defineStore('book', () => {
  // 1. STATE (What is written on the whiteboard) (human writer)
  const selectedBook = ref(null)
  const books = ref([]) // This is now the official, global shelf , we have decided to move the database logic out of homeview to here.

  // 2. ACTION (The marker used to change the whiteboard) ( humarn writer)
  function selectBook(book) {
    selectedBook.value = book
  }
  // fetch from database
  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID
      )
      books.value = response.documents

    } catch ( error) {
      console.error("failed to fetch books", error)
    }
  }
  // write to database
  async function addBook(newBookData) {
    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        ID.unique(),
        newBookData
      )
    } catch (error) {
      console.error("failed to add book", error)
      return(false)

    }
    return{ selectedBook, selectBook, fetchBooks , addBook }

  }

  // 3. EXPORT (Make the whiteboard visible to the house)
  return { selectedBook, selectBook }
})




