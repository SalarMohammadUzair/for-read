<style>
@import 'tailwindcss';
</style>
<script setup>
import { ref } from 'vue'

// From what i understand so far, this is where our JavaScript logic goes, so we do not touch it rn
import topbar from './Components/layout/Topbar.vue'
import rightpanel from './Components/layout/rightpanel.vue'
import sidebar from './Components/layout/sidebar.vue'
// we be add the toggles to hide the sidebars.

</script>

<template>
  <div class="app-container">
    <sidebar></sidebar>
    <topbar></topbar>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <rightpanel></rightpanel>

  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: 4% 1fr 12%;
  grid-template-rows: 5% 1fr;
  background-color: #faf6ee;
  height: 100vh;
}

.main-content {
  grid-column: 2;
  grid-row: 2;
  padding: 40px;
  overflow-y: auto;
}
</style>
