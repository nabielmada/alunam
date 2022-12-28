import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KatalogView from '../views/KatalogView.vue'
import UnlockView from '../views/UnlockView.vue'
import PembayaranView from '../views/PembayaranView.vue'
import UndanganView from '../views/UndanganView.vue'
import PageNotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/katalog/:url_type',
    name: 'katalog',
    component: KatalogView,
    props: (route) => ({ url_type: route.params.url_type }),  
  },
  {
    path: '/unlock/:url_type',
    name: 'unlock',
    component: UnlockView,
    props: (route) => ({ url_type: route.params.url_type }),  
  },
  {
    path: '/pembayaran/:no_invoice',
    name: 'pembayaran',
    component: PembayaranView
  },
  // Real Invitation
  {
    path: '/:url_params',
    name: 'Undangan',
    component: UndanganView,
    props: (route) => ({ mempelai: route.params.url_params, to: route.query.to }),  
  },
  // Page Not Found
  { 
    path: '/404',
    name: '404',
    component: PageNotFound 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
