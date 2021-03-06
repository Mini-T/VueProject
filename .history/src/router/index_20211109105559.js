import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: () => import('../pages/concerts.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;