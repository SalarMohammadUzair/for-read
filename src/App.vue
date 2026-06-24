<script setup>
// From what i understand so far, this is where our JavaScript logic goes, so we do not touch it rn
</script>

<template>
  <div class="preview container">
    <div class="brutalist-card">
      <h1>for read</h1>
      <p class="card-description">
        This is a brutalist card, we used html tags to create the text and css classes to style, i
        think i understand how this stuff works just a tad bit more
      </p>
    </div>
    <button class="brutalist-button">start reading?</button>
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
.brutalist-button {
  background-color: #ffd60a;
  border: 3px solid #000000;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 16px;
}
.brutalist-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #000000;
}
.brutalist-button:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px #000000;
}
</style>
