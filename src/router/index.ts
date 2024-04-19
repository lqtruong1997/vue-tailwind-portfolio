import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'
import SplashScreen from '@/views/SplashScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SplashScreen
    },
    {
      path: '/details',
      redirect: '/details/home',
      component: AppLayout,
      children: [
        {
          path: '/details/home',
          component: HomeView
        },{
          path: '/details/resume',
          component: () => import('../views/ResumeView.vue')
        },{
          path: '/details/works',
          component: () => import('../views/WorkView.vue')
        },{
          path: '/details/playground',
          component: () => import('../views/PlaygroundView.vue')
        },{
          path: '/details/contact',
          component: () => import('../views/ContactView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
  ]
})

export default router
