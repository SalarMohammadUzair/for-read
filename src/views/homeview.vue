<style>
@import 'tailwindcss';
</style>
<!---->

<script setup>
import BrutalistButton from '../Components/ui/BrutalistButton.vue'
import brutalistcard from '../Components/ui/brutalistcard.vue'
import { useBookStore } from '../stores/bookStore.js'
const bookStore = useBookStore()
</script>

<template>
  <div class="homepage">
    <div class="book-container" @click="bookStore.selectBook('The Hobbit')">
      <div class="cover-frame"></div>
      <!-- Inner border ring -->
      <h2 class="cover-title">The Hobbit</h2>
      <span class="cover-author">J.R.R. Tolkien</span>
    </div>
  </div>
  <div class="homepage">
    <div class="book-container" @click="bookStore.selectBook('reconstruction of religious thought in islam')">
      <div class="cover-frame"></div>
      <!-- Inner border ring -->
      <h2 class="cover-title">the reconstruction of religious thought in islam</h2>
      <span class="cover-author">Allama Iqbal</span>
    </div>
  </div>
</template>

<style scoped>
.homepage {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
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
  top: 30px;
  left: 10x;
  right: 10px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  /* Truncate text with ... if the title is too long! */
  display: -webkit-box;
  -webkit-line-clamp: 2;
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

</style>
