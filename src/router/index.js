import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KatalogView from '../views/KatalogView.vue'
import UnlockView from '../views/UnlockView.vue'
import PembayaranView from '../views/PembayaranView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/katalog',
    name: 'katalog',
    component: KatalogView
  },
  {
    path: '/unlock',
    name: 'unlock',
    component: UnlockView
  },
  {
    path: '/pembayaran',
    name: 'pembayaran',
    component: PembayaranView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
