<style>
@import 'tailwindcss';
</style>

<script setup>
import BrutalistButton from '../Components/ui/BrutalistButton.vue'
import brutalistcard from '../Components/ui/brutalistcard.vue'
</script>

<template>
  <div class="homepage">
    <brutalistcard>
      <h1 class="card-title">Book Name</h1>
      <p class="card-description">
        Book Iono man what is the difference between title and description
      </p>
      <BrutalistButton>Start reading?</BrutalistButton>
    </brutalistcard>
    <brutalistcard>
      <h1 class="card-title">Another Book</h1>
      <p class="card-description">This is another brutalist card with a different book.</p>
      <BrutalistButton>Start reading?</BrutalistButton>
    </brutalistcard>
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: row;
  gap: 16px;
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
