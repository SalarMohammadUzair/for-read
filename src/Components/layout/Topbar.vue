Defining variables class: showModal = the popup that appears when we click on the add book button
topbar = defines the entire horizontal top bar, it's styling etc top-bar-title = defines the title
of the top bar, it's styling etc

<script setup>
import { ref } from 'vue'
import { useBookStore } from '@/stores/bookStore.js'
import BrutalistButton from '@/Components/ui/BrutalistButton.vue'
const bookStore = useBookStore()
const showModal = ref(false)
const newBook = ref({ title: '', author: '', coverClass: '!bg-slate-100' })
// lots of space

async function addBook() {
  const success = await bookStore.addBook(newBook.value)
  if (success) {
    showModal.value = false
    newBook.value = { title: '', author: '', coverClass: '!bg-slate-100' }
  }
}
</script>

<template>
  <div class="topbar">
    <h1 class="top-bar-title">
      DISCLAIMER, THIS ONLY WORKS FOR EPUBS SO FAR, PLEASE DO NOT USE PDFS OR ANY OTHER DOCUMENTS
    </h1>
    <BrutalistButton @click="showModal = true"> Add book </BrutalistButton>
  </div>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2 class="modal-title">Add book</h2>
      <input v-model="newBook.title" placeholder="Book title" class="brutalist-input" />
      <input v-model="newBook.author" placeholder="Author" class="brutalist-input" />
      <select v-model="newBook.coverClass" class="brutalist-input">
        <option value="!bg-slate-100">Slate (Blue/Grey)</option>
        <option value="!bg-rose-100">Rose (Pink)</option>
        <option value="!bg-stone-200">Stone (Beige)</option>
        <option value="!bg-emerald-100">Emerald (Green)</option>
        <option value="!bg-amber-100">Amber (Yellow)</option>
        <option value="!bg-violet-100">Violet (Purple)</option>
      </select>

      <div style="display: flex; gap: 8px; margin-top: 16px">
        <BrutalistButton @click="addBook">Save to library</BrutalistButton>
        <BrutalistButton @click="showModal = false">Cancel</BrutalistButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1.5px solid #1a1a1a;
  background-color: #f4ecd8;
  grid-column: 2;
  grid-row: 1;
}
.top-bar-title {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
}
.top-bar-button {
  background-color: #000000;
  border: 3px solid #000000;
  padding: 8px 16px;
  font-weight: 900;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 3px 3px 0px 0px #000000;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}
.top-bar-button:hover {
  transform: scale(1.1);
  box-shadow: 5px 5px 0px 0px #000000;
}
.top-bar-button:active {
  transform: scale(0.9);
  box-shadow: 1px 1px 0px 0px #000000;
}
/*modal css*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* always stay on top */
}
.modal-content {
  background-color: #f4ecd8;
  padding: 32px;
  border: 1.5px solid #1a1a1a;
  box-shadow: 4px 4px 0px #1a1a1a;
  width: 21%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.modal-title {
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}
.brutalist-input {
  background: transparent;
  border: 1.5px solid #1a1a1a;
  padding: 12px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
}
.brutalist-input:focus {
  outline: none;
  background: #ffffff;
}
</style>
