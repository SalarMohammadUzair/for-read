<template>
  <div class="reader-container">
    <div class="top-bar">

      <button class="back-button" @click="$router.push('/')">← Back</button>
      <h2 class="book-title">Iqbal - The Reconstruction</h2>
    </div>


    <div id="reader-view"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBookStore } from '../stores/bookStore.js'

const router = useRouter()
const bookStore = useBookStore()

onMounted(async () => {
  if (!bookStore.selectedBook || !bookStore.selectedBook.fileUrl) {
    console.error('No book selected or file URL is missing')
    router.push('/')
    return

  }
// xii.. foliate apparently does not know what book we are handing it over, we must tell it what type it is
//   await import('/foliate-js/view.js')

  const container = document.getElementById('reader-view')
  if (container) {

    const view = document.createElement('foliate-view')
    container.appendChild(view)
    console.log("downloading book from appwrite")
    const response = await fetch(bookStore.selectedBook.fileUrl)
    const blob = await response.blob()
    // check book type
    let extension = '.epub'
    if (blob.type === 'application/pdf') {
      extension = '.pdf'
    } else if (blob.type === 'application/x-mobipocket-ebook') {
      extension = '.mobi'
    } else if (blob.type === 'application/x-cbz') {
      extension = '.cbz'
    }
    const file = new File([blob], `book${extension}`, { type: blob.type })
    await view.open(file)
    await view.init({ lastLocation: null}) // had to initialise the reader...
    console.log(`book downloaded and opened as ${extension}`)
  }
})
</script>

<style scoped>
.reader-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #f8e8c9;
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.15rem solid #0b0b0b;
}

.back-button {
  background: transparent;
  border: 0.15rem solid #0b0b0b;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}

#reader-view {
  flex-grow: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
}
#reader-view :deep(foliate-view) {
  display: block;
  width: 100%;
  height: 100%;
}


</style>
