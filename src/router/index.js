import { createRouter, createWebHistory } from 'vue-router'
import homeview from '../views/homeview.vue'
import ReaderView from '../views/ReaderView.vue'
import readerView from '@/views/ReaderView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeview,
    },
    {
      path: '/read',
      name: 'read',
      component: ReaderView,
    }
  ],
})

export default router
