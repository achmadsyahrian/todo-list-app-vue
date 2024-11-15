<template>
  <div class="register min-h-screen flex flex-col items-center justify-center">
    <img src="/images/logo-app.png" alt="Logo" class="mb-6 w-24 h-auto rounded-full border-4 border-white dark:border-slate-800 shadow-md" />
    <form @submit.prevent="handleRegister" class="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
      <div class="mb-6">
        <h2 class="text-base/7 font-semibold text-gray-900 dark:text-slate-100">Register Your Account</h2>
        <p class="mt-1 text-sm/6 text-gray-400">Please provide accurate information for your account.</p>
      </div>
      <BaseInput v-model="username" id="username" label="Name:" placeholder="Enter your username" />
      <BaseInput v-model="email" id="email" label="Email:" placeholder="Enter your email" />
      <BaseInput v-model="password" id="password" label="Password:" placeholder="●●●●●●●●" :type="showPassword ? 'text' : 'password'" />
      <div class="relative flex gap-x-2">
        <div class="flex h-6 items-center">
          <input id="comments" name="comments" type="checkbox" class="size-4 rounded border-gray-300 dark:bg-slate-800" v-model="showPassword" />
        </div>
        <div class="text-sm/6">
          <label for="comments" class="font-medium text-gray-900 dark:text-slate-100">Show Password</label>
        </div>
      </div>
      <button type="submit" class="w-full py-2 mt-4 bg-primary text-white font-semibold rounded-md hover:opacity-90">Register</button>

      <p class="mt-6 text-center text-sm/6 text-gray-500">
        Already have an account? <a href="/login" class="font-medium text-primary hover:opacity-90">Login</a>
      </p>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'RegisterView',
  components: {
    BaseInput,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    handleRegister() {
      // Kirim data ke API untuk registrasi
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      // Misal menggunakan axios untuk melakukan POST request
      this.$axios.post('/api/register', data)
        .then(response => {
          // Lakukan sesuatu setelah berhasil, misalnya redirect atau tampilkan pesan
          console.log('Registration success', response);
        })
        .catch(error => {
          // Tangani error
          console.error('Registration error', error);
        });
    },
  },
};
</script>

<style scoped></style>