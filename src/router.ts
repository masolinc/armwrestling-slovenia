import { createRouter, createWebHistory } from 'vue-router'
import LayoutShell from '@/components/LayoutShell.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: LayoutShell },
    { path: '/regija/:region', name: 'region', component: LayoutShell },
  ],
})
