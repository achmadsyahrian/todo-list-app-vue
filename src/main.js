import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from './plugins/axios';
import './assets/css/tailwind.css';

const app = createApp(App);

// Menambahkan Axios ke properti global
app.config.globalProperties.$axios = axios; // penulisan Vue 3

// Dapatkan token dari localStorage
const token = localStorage.getItem('token');
// Setel header Authorization global
if (token) {
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 }
 
// Menggunakan router dan mount aplikasi
app.use(router).mount('#app');
