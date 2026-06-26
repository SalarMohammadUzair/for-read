import { createRouter, createWebHistory } from 'vue-router'
import webview from '../views/homeview.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeview,
    },
  ],
})

export default router
