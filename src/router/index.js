import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  // Tambahkan rute lain di sini
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
