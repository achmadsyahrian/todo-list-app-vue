<template>
   <div v-if="showAlert" :class="alertClass" class="w-full flex items-center p-4 mb-4 text-sm rounded-lg">
     <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
     </svg>
     <div>
       <span class="font-medium">{{ title }}</span> <br />
       <span v-html="message"></span>
     </div>
   </div>
 </template>
 
 <script>
 export default {
  name: 'NotificationAlert',
   props: {
     // Props untuk mengatur warna alert
     type: {
       type: String,
       default: 'success', // default ke success
     },
     // Pesan yang akan ditampilkan
     message: {
       type: String,
       required: true,
     },
     // Countdown jika ada, untuk pesan yang bisa dihitung mundur
     countdown: {
       type: Number,
       default: 0,
     },
   },
   data() {
     return {
       showAlert: true, // Menampilkan alert
     };
   },
   computed: {
     // Menentukan kelas alert berdasarkan tipe
     alertClass() {
       const alertClasses = {
         success: 'text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800',
         error: 'text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800',
         warning: 'text-yellow-800 border-yellow-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800',
         info: 'text-blue-800 border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800',
       };
       return `flex items-center p-4 mb-4 border rounded-lg ${alertClasses[this.type]}`;
     },
     title() {
       const titles = {
         success: "Success!",
         error: "Error!",
         warning: "Warning!",
         info: "Info",
       };
       return titles[this.type];
     },
     messageWithCountdown() {
       if (this.countdown > 0) {
         return `You will be redirected to the Dashboard in ${this.countdown} seconds.`;
       }
       return this.message;
     }
   },
   watch: {
     countdown(newCountdown) {
       if (newCountdown === 0) {
         this.showAlert = false;
       }
     }
   }
 };
 </script>
 
 <style scoped>
 /* Tambahkan styling sesuai kebutuhan */
 </style>
 