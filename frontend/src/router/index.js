import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRegister',
    component: () => import ('../views/LoginRegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import ('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router