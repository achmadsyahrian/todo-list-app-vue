import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import TasksView from '@/views/TasksView.vue';
import axios from '../plugins/axios';

// Fungsi untuk memeriksa apakah pengguna sudah login
const isAuthenticated = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false; // Token tidak ada, langsung false
  }
  try {
    const response = await axios.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    
    // Jika respons berhasil, token valid
    return !!response.data;
  } catch (error) {
    console.log(error)
    return false;
  }
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

  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Global navigation guard
router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/register']; // Halaman publik yang tidak memerlukan autentikasi
  const authRequired = !publicPages.includes(to.path);

  if (authRequired) {
    const valid = await isAuthenticated();
    if (!valid) {
      return next({ name: 'Login' }); // Redirect ke login jika tidak valid
    }
  }

  if ((to.path === '/login' || to.path === '/register') && await isAuthenticated()) {
    return next({ name: 'Dashboard' }); // Redirect ke dashboard jika sudah login
  }

  next()
});

export default router;