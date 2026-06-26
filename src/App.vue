<style>
@import 'tailwindcss';
</style>
<script setup>
// From what i understand so far, this is where our JavaScript logic goes, so we do not touch it rn
import BrutalistButton from './Components/ui/BrutalistButton.vue'
import brutalistcard from './Components/ui/brutalistcard.vue'
</script>

<template>
  <div class="preview-container">
    <brutalistcard>
      <title class="card-title">Brutalist Card</title>
      <h1>for read</h1>
      <p class="card-description">
        This is a brutalist card, we used html tags to create the text and css classes to style, i
        think i understand how this stuff works just a tad bit more
      </p>
      <!-- <button class="brutalist-button">start reading?</button> -->
      <BrutalistButton>Start reading?</BrutalistButton>
      <BrutalistButton>Add to Library</BrutalistButton>
    </brutalistcard>
    <brutalistcard>
      <h2>
        I wanted to see how two cards look stacked alongside each other?? What font should we use?
      </h2>
      <p class="card-description">Fascinting.</p>
    </brutalistcard>
  </div>
</template>

<style scoped>
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #faf6ee;
  font-family: sans-serif;
  margin: 0;
  gap: 16px;
}
.brutalist-card {
  background-color: #ffffff;
  border: 4px solid #000000;
  padding: 24px;
  width: 400px;
  box-shadow: 8px 8px 0px 0px #000000;
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
</style>
