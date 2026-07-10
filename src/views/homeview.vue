<style>
@import 'tailwindcss';
</style>
<!---->

<script setup>
import { onMounted } from 'vue'
import brutalistcard from '../Components/ui/brutalistcard.vue'
import { useBookStore } from '../stores/bookStore.js'

const bookStore = useBookStore()

// Tell the whiteboard to fetch the books when the page loads
onMounted(() => {
  bookStore.fetchBooks()
})
</script>

<template>
  <div class="homepage">
    <brutalistcard
      v-for="book in bookStore.books"
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
  colour: #676767 radius;
}
.cover-frame {
  margin: 0;
  pointer-events: none;
  border-block-clip: 66px;
  box-decoration-break: inherit;
  border-radius: 10px;
}
</style>
