<template>
   <label class="inline-flex items-center cursor-pointer">
     <input
       type="checkbox"
       class="sr-only peer"
       :checked="theme === 'dark'"
       @change="toggleTheme"
     />
     <span class="me-3 text-sm font-medium text-dark-tertiary opacity-80 dark:text-light-tertiary">
       <i class="far fa-sun"></i>
     </span>
     <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-red-300 dark:peer-focus:ring-base-secondary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-base-primary"></div>
     <span class="ms-3 text-sm font-medium text-dark-tertiary opacity-80 dark:text-light-tertiary">
       <i class="fas fa-moon"></i>
     </span>
   </label>
 </template>
 
 <script>
 export default {
   name: 'ThemeToggle',
   data() {
     return {
       theme: 'light', // Default theme
     };
   },
   mounted() {
     // Cek preferensi tema di localStorage saat komponen dimuat
     this.theme = localStorage.getItem('theme') || 'light';
     this.applyTheme();
   },
   methods: {
     toggleTheme() {
       // Ganti tema antara 'light' dan 'dark'
       this.theme = this.theme === 'light' ? 'dark' : 'light';
       localStorage.setItem('theme', this.theme); // Simpan ke localStorage
       this.applyTheme();
     },
     applyTheme() {
       // Tambahkan atau hapus class 'dark' pada <html>
       if (this.theme === 'dark') {
         document.documentElement.classList.add('dark');
       } else {
         document.documentElement.classList.remove('dark');
       }
     },
   },
 };
 </script>
 
 <style scoped>
 /* Tambahkan style custom jika diperlukan */
 </style>
 