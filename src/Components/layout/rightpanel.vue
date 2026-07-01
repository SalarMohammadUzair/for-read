<script setup>
import { useBookStore } from '../../stores/bookStore.js'
import BrutalistButton from '../ui/BrutalistButton.vue'
const bookStore = useBookStore()
</script>



<template>
  <aside class="right-panel">
    <h3 class="panel-title">Right Panel</h3>
    <div v-if="bookStore.selectedBook">
      <h2 class="book-name">{{ bookStore.selectedBook }}</h2>
      <p>progress: 42%</p>
    <br>
    </div>
    <div v-else>
      <p>select a book to track reading progress</p>
    </div>
  </aside>
</template>
<style scoped>
.right-panel {
  background-color: #ffffff;
  border-left: 4px solid #000000;
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
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 16px;
}
</style>
