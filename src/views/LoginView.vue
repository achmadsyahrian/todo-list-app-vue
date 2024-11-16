<template>
   <div class="register min-h-screen flex flex-col items-center justify-center">
     <img src="/images/logo-app.png" alt="Logo" class="mb-6 w-24 h-auto rounded-full border-4 border-white dark:border-slate-800 shadow-md" />
     
     <!-- Container untuk alert dan form dengan lebar yang disesuaikan -->
     <div class="max-w-md w-full mx-auto">
         <!-- Alert dengan lebar yang disesuaikan dengan form -->
         <NotificationAlert 
           v-if="showAlert"
           :type="type"
           :countdown="countdown"
           :message="message"
         ></NotificationAlert>
 
         <!-- Form Registrasi -->
         <form @submit.prevent="handleLogin" class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <div class="mb-6">
               <h2 class="text-base/7 font-semibold text-gray-900 dark:text-slate-100">Welcome Back!</h2>
               <p class="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">Log in to access your account and manage your dashboard.</p>
            </div>
           <BaseInput v-model="email" id="email" label="Email" placeholder="Enter your email" :error="errors.email" />
           <BaseInput v-model="password" id="password" label="Password" placeholder="●●●●●●●●" :type="showPassword ? 'text' : 'password'" :error="errors.password" />
           <div class="relative flex gap-x-2">
             <div class="flex h-6 items-center">
               <input id="comments" name="comments" type="checkbox" class="size-4 rounded border-gray-300 dark:bg-slate-800" v-model="showPassword" />
             </div>
             <div class="text-sm/6">
               <label for="comments" class="font-medium text-gray-900 dark:text-slate-100">Show Password</label>
             </div>
           </div>
           <!-- <button type="submit" class="w-full py-2 mt-4 bg-primary text-white font-semibold rounded-md hover:opacity-90">Register</button> -->
 
           <BaseButton type="submit">Log In</BaseButton>
 
           <p class="mt-6 text-center text-sm/6 text-gray-500 dark:text-gray-400">
             Don't have an account yet? <a href="/register" class="font-medium text-primary hover:opacity-90">Register</a>
           </p>

         </form>
     </div>
   </div>
 
 </template>
 
 <script>
 import BaseButton from '@/components/BaseButton.vue';
 import BaseInput from '@/components/BaseInput.vue';
 import NotificationAlert from '@/components/NotificationAlert.vue';
 
 export default {
   name: 'RegisterView',
   components: {
     BaseInput,
     NotificationAlert,
     BaseButton,
   },
   data() {
     return {
       email: '',
       password: '',
 
       showPassword: false,
       errors: {}, // menampung respon error jika ada
 
       // Alert Config
       showAlert: false,
       message: '',
       type: 'success', //default
     };
   },
   methods: {
     redirectToDashboard() {
       this.$router.push('/dashboard');
     },
 
     handleLogin() {
       // Kirim data ke API untuk login
       const data = {
         email: this.email,
         password: this.password,
       };
       this.$axios.post('/login', data, {
         headers: {
           'Content-Type': 'application/json',
         }
       })
         .then((response) => {
            // Simpan Token
           localStorage.setItem('token', response.data.data.token);
            
           this.errors = {};
           this.redirectToDashboard(); 
         })
         .catch(error => {
           if (error.response && error.response.status === 422) {
             this.errors = error.response.data.errors || {}
           } else {
            if (error.response && error.response.status >= 500) {
               this.message = error.response.statusText || 'Internal Server Error';
            } else {
               this.message = error.response.data?.message || 'An error occurred';
            }

             this.type = 'error'
             this.showAlert = true
 
             // Sembunyikan alert setelah 3 detik
             setTimeout(() => {
               this.showAlert = false;
             }, 5000);
           }
         });
     },
   },
 };
 </script>
 
 <style scoped></style>