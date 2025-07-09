import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CartPage from '../components/CartPage.vue'
import AdminPage from '../components/AdminPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
  { path: '/admin', component: AdminPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
