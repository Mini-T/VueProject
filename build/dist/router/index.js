import { createRouter, createWebHistory } from '../../_snowpack/pkg/vue-router.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../pages/index.vue.js"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../pages/about.vue.js"),
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: () => import("../pages/concerts.vue.js"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;