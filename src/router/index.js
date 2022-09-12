import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'main',
      component: MainView
    },
    {
      path: '/about/:id',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router