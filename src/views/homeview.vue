<style>
@import 'tailwindcss';
</style>
<!---->

<script setup>
import BrutalistButton from '../Components/ui/BrutalistButton.vue'
import brutalistcard from '../Components/ui/brutalistcard.vue'
//
import {ref, onMounted} from 'vue'
import { ID } from 'appwrite' // we need this to create new books/generate random IDS ( human mad this comment)

import {databases} from '../appwrite.js'
import { useBookStore } from '../stores/bookStore.js'
const bookStore = useBookStore()
const books = ref([]) // This starts as an empty shelf
// When the page loads, use the walkie-talkie to fetch books from the database
const showModal = ref(false) // Popup visible or not?
const newBook = ref({title: '', author:'', coverClass:'!bg-slate-100' }) // blank book template

//
onMounted(async () => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID
    )
    books.value = response.documents // Put the database books on our shelf
  } catch (error) {
    console.error("failed to fetch books", error)
  }
})
// Write books to database ( only details, not add the book thus far)
async function addBook() {
  try {
    const response = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID,
      ID.unique(), // appwrite will make a random 20 charecter ID
      {
        title: newBook.value.title,
        author: newBook.value.author,
        coverClass: newBook.value.coverClass,
      }
    )
    // Instantly push the book to the database
    books.value.push(response)
    showModal.value = false
    newBook.value = {title: '', author:'', coverClass:'!bg-slate-100' }
  } catch (error) {
    console.error("failed to add book", error)
  }
}
</script>

<template>
  <div class="homepage">
    <brutalistcard
      v-for="book in books"
      :key="book.$id"
      :class="['book-container', book.coverClass]"
      @click="bookStore.selectBook(book)"
      >
      <div class="cover-frame"></div>
      <h2 class="cover-title">{{ book.title }}</h2>
      <span class="cover-author">{{ book.author }}</span>
    </brutalistcard>

  </div>
</template>

<style scoped>
.homepage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 32px;
}
.book-container {
  cursor: pointer;
  transition: transform 0.1s ease;
}
.book-container:hover {
  transform: translateY(-4px);
}
/* --- The Typography Magic --- */

.cover-frame {
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.cover-title {
  position: absolute;
  top: 30px;
  left: 10px;
  right: 10px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  /* Truncate text with ... if the title is too long! */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cover-author {
  position: absolute;
  left: 10px;
  right: 10px;
  text-align: center;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
}
.card-title {
  margin-top: 0;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.card-description {
  color: #333333;
  /* font-size: 1rem; */
  line-height: 1.5;
  margin-bottom: 24px;
}
.cursor-pointer {
  cursor: pointer;
}
.book-cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: glow(any);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
}
.cover-art-1 {
  background: linear-gradient(#172923 0%, #1a1517 100%);
  color: #e8c457;
}
.cover-art-2 {
  background: radial-gradient(circle at 23% 17%, #31a46f 0 6px, transparent 7px), #f4efe6;
  color: #141414;
}
.cover-art-3 {
  background: #31a46f;
  colour: #676767
  radius
}
.cover-frame {
  margin: 0;
  pointer-events: none;
  border-block-clip: 66px;
  box-decoration-break: inherit;
  border-radius: 10px;

}
</style>
