<template>
  <div class="reader-container">
    <div class="top-bar">
      <div class="left-controls">
        <button class="back-button" @click="$router.push('./')">back</button>
        <h2 class="book-title">{{ bookStore.selectedBook?.name}}</h2>
      </div>
      <div class="right-controls">
        <button class="settings-button" @click="showSettings = !showSettings">Settings</button>
        <div v-if="showSettings" class="settings-dropdown">
          <div class="settings-row">
            <label> Font Size: {{ fontSize }}px</label>
            <input type="range" min="12" max="36" v-model="fontSize" @change="updateStyles" />
          </div>
          <div class="settings-row">
            <label>columns</label>
            <select v-model="columns" @change="updateLayout">
              <option value="1"> 1</option>
              <option value="2"> 2</option>
            </select>
          </div>

          <div class="settings-row">
            <label>scroll mode</label>
            <select v-model="flow" @change="updateLayout">
              <option value="paginated">Paginated ( pages) </option>
              <option value="scrolled">Scrolled ( continuous)</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="reader-area">
      <button class="page-nav prev-page" @click="prevPage">‹</button>
      <div id="reader-view"></div>
      <button class="page-nav next-page" @click="nextPage">›</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBookStore } from '../stores/bookStore.js'

const router = useRouter()
const bookStore = useBookStore()

const viewRef = ref(null)
const showSettings = ref(false)
const fontSize = ref(18)
const columns = ref(2)
const flow = ref('paginated')

const updateStyles = () => {
    if (viewRef.value && viewRef.value.renderer) {
        viewRef.value.renderer.setStyles(`
            @namespace epub "http://www.idpf.org/2007/ops";
            p, li, blockquote, dd, div, span {
                font-size: ${fontSize.value}px !important;
                line-height: 1.6 !important;
            }
        `)
    }
}

const updateLayout = () => {
    if (viewRef.value && viewRef.value.renderer) {
        viewRef.value.renderer.setAttribute('max-column-count', columns.value)
        viewRef.value.renderer.setAttribute('flow', flow.value)
    }
}

const prevPage = () => { if (viewRef.value) viewRef.value.goLeft() }
const nextPage = () => { if (viewRef.value) viewRef.value.goRight() }

const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') prevPage()
    if (e.key === 'ArrowRight') nextPage()
}

onMounted(async () => {
  if (!bookStore.selectedBook || !bookStore.selectedBook.fileUrl) {
    console.error('No book selected or file URL is missing')
    router.push('/')
    return

  }
// xii.. foliate apparently does not know what book we are handing it over, we must tell it what type it is
//   await import('/foliate-js/view.js')

  window.addEventListener('keydown', handleKeydown)

  const container = document.getElementById('reader-view')
  if (container) {

    const view = document.createElement('foliate-view')
    viewRef.value = view
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
    updateLayout()
    updateStyles()
    await view.init({ lastLocation: null}) // had to initialise the reader...
    console.log(`book downloaded and opened as ${extension}`)
  }
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
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

.back-button, .settings-button {
  background: #fff;
  border: 0.15rem solid #0b0b0b;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0.2rem 0.2rem 0 #0b0b0b;
  transition: transform 0.1s, box-shadow 0.1s;
}
.back-button:active, .settings-button:active {
  transform: translate(0.2rem, 0.2rem);
  box-shadow: 0 0 0 #0b0b0b;
}
.left-controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.right-controls {
  position: relative;
}
.settings-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background: #fff;
  border: 0.2rem solid #0b0b0b;
  padding: 1.5rem;
  box-shadow: 0.4rem 0.4rem 0 #0b0b0b;
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 20;
}
.settings-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.settings-row label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #0b0b0b;
}
.settings-row input[type="range"] {
  width: 100%;
  cursor: pointer;
}
.settings-row select {
  padding: 0.5rem;
  border: 0.15rem solid #0b0b0b;
  font-weight: bold;
  background: #f8e8c9;
  cursor: pointer;
}
.reader-area {
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  position: relative;
  overflow: hidden;
}
.page-nav {
  width: 5rem;
  background: background;
  border: none;
  font-size: 3rem;
  font-weight: 300;
  color: #0b0b0b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.1s;
  z-index: 5;
}
.page-nav:hover {
  background: rgba(0, 0, 0, 0.05);
}
.page-nav:active {
  transform: scale(0.9);
}




.book-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color : #0b0b0b;
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
