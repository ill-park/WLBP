import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/layout/login/LoginLayout.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/layout/cmm/MainLayout.vue'),
    redirect: '/mainPage',
    children: [
      {
        path: '/mainPage',
        name: 'mainPage',
        component: () => import('@/pages/MainPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
