import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KatalogView from '../views/KatalogView.vue'
import UnlockView from '../views/UnlockView.vue'
import PembayaranView from '../views/PembayaranView.vue'
import UndanganView from '../views/UndanganView.vue'

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
    path: '/pembayaran/:noInvoice',
    name: 'pembayaran',
    component: PembayaranView
  },

  // Real Invitation
  {
    path: '/:q',
    name: 'Undangan',
    component: UndanganView,
    props: (route) => ({ to: route.query.to, mempelai: route.params.q }),  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
