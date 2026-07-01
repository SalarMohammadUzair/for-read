<script setup>
import { Home } from '@lucide/vue'
</script>

<template>
  <nav class="sidebar">

    <!-- We stack the Icon and the Text inside this link -->
    <RouterLink to="/" class="nav-item">
      <Home :size="21" :stroke-width="2.1" />
      <span>Home</span>
    </RouterLink>

  </nav>
</template>

<style scoped>
.sidebar {
  background-color: #ffffff;
  border-right: 4px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  grid-row: 1 / 3;
}

.nav-item {
  color: #000000;
  text-decoration: none;
  display: flex;
  flex-direction: column; /* Stacks the icon above the text */
  align-items: center;    /* Centers them horizontally */
  gap: 4px;               /* Adds a tiny gap between icon and text */
  padding: 8px;
  cursor: pointer;
}

.nav-item span {
  font-size: 0.6rem;      /* Tiny text! */
  font-weight: 700;
  text-transform: uppercase;
}

.nav-item:hover {
  color: #ffd60a;
}
</style>
