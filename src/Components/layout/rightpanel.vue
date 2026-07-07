<script setup>
import { useBookStore } from '../../stores/bookStore.js'
import BrutalistButton from '../ui/BrutalistButton.vue'
import brutalistcard from '../ui/brutalistcard.vue'
const bookStore = useBookStore()
</script>



<template>
  <aside class="right-panel">
    <h3 class="panel-title">Chaptr</h3>
    <div v-if="bookStore.selectedBook" class="details-content">
      <brutalistcard :class="['book-container', bookStore.selectedBook.coverClass]">
        <div class="cover-frame"></div>
        <h2 class="cover-title">{{ bookStore.selectedBook.title }}</h2>
        <span class="cover-author">{{ bookStore.selectedBook.author }}</span>
      </brutalistcard>
      <div class="book-details">
        <h2 class="book-name">{{ bookStore.selectedBook.title }}</h2>
        <p class="book-author">By {{ bookStore.selectedBook.author }}</p>
      </div>
      <div class="progress-bar">
        <p>progress is 0 for now ( placeholder number, working on it)</p>
        <brutalist-button>Read now</brutalist-button>
      </div>

    <br>
    </div>
    <div v-else>
      <p>select a book to track reading progress</p>
    </div>
  </aside>
</template>



<style scoped>
.right-panel {
  background-color: #f4ecd8;
  border-left: 1.5px solid #1a1a1a;
  padding: 32px;
  grid-column: 3;
  grid-row: 1 / 3;
}
.panel-title {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.book-name {
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 16px;
}
.details-content {
  display: flex;
  flex-direction: column;
  gap: 24px;

}
.book-container {
  height: 200px;
  pointer-events: none;

}
.cover-frame {
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.cover-title {
  position: absolute;
  top: 30px;
  left: 10px;
  right: 10px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
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
</style>
