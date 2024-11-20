import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';

// Fungsi untuk memeriksa apakah pengguna sudah login
const isAuthenticated = () => {
  // Misalnya, memeriksa apakah ada token di localStorage
  return localStorage.getItem('token') !== null;
};

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { hideNavbar: true }
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { hideNavbar: true }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']; // Halaman publik yang tidak memerlukan autentikasi
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !isAuthenticated()) {
    next({ name: 'Login' });
  } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated()) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;