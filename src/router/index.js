import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';

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
    beforeEnter: (to, from, next) => {
      // Jika sudah login, alihkan ke halaman home atau dashboard
      if (isAuthenticated()) {
        next({ name: 'Home' }); // Ganti 'Home' dengan nama route halaman utama Anda
      } else {
        next(); // Lanjutkan ke halaman register jika belum login
      }
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next({ name: 'Home' });
      } else {
        next(); 
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
