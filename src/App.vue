<style>
@import 'tailwindcss';
</style>
<script setup>
// From what i understand so far, this is where our JavaScript logic goes, so we do not touch it rn

import sidebar from './Components/layout/sidebar.vue'
</script>

<template>
  <div class="app-container">
    <sidebar></sidebar>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  background-color: #faf6ee;
}
.main-content {
  flex-grow: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
