<script setup>
</script>
<template>
  <div class="reader-container">
    <div class="top-bar">
      <button class="back-button" @click="$router.push('/')">Back</button>
      <h2 class="book-title"> something something</h2>
    </div>
    <div id="reader-view"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  console.log("Reader mounted ready for foliate")

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
  background-color: transparent;
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
</style>
