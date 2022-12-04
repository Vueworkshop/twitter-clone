import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import TrendsHashtag from '../views/Trends/[hashtag].vue'
import Timeline from '@/views/Timeline.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Timeline',
          component: Timeline
        },
        {
          path: '/trends/:hashtag',
          name: 'TrendsHashtag',
          component: TrendsHashtag
        }
      ],
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
