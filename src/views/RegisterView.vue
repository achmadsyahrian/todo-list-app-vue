<template>
  <div class="register min-h-screen flex flex-col items-center justify-center">
    <img src="/images/logo-app.png" alt="Logo" class="mb-6 w-24 h-auto rounded-full border-4 border-light-secondary dark:border-dark-tertiary shadow-md" />
    
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
        <form @submit.prevent="handleRegister" class="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-md">
          <div class="mb-6">
            <h2 class="text-base/7 font-semibold text-gray-900 dark:text-slate-100">Register Your Account</h2>
            <p class="mt-1 text-sm/6 text-gray-500 dark:text-gray-400">Please provide accurate information for your account.</p>
          </div>
          <BaseInput v-model="name" id="name" label="Name" placeholder="Enter your name" :error="errors.name" :required="true" />
          <BaseInput v-model="email" id="email" label="Email" placeholder="Enter your email" :error="errors.email" :required="true" />
          <BaseInput v-model="password" id="password" label="Password" placeholder="●●●●●●●●" :type="showPassword ? 'text' : 'password'" :error="errors.password" :required="true" />
          <div class="relative flex gap-x-2">
            <div class="flex h-6 items-center">
              <input id="comments" name="comments" type="checkbox" class="size-4 rounded border-gray-300 dark:bg-dark-secondary accent-base-primary" v-model="showPassword" />
            </div>
            <div class="text-sm/6">
              <label for="comments" class="font-medium text-gray-900 dark:text-slate-100">Show Password</label>
            </div>
          </div>

          <BaseButton customClass="w-full" type="submit">Register</BaseButton>

          <p class="mt-6 text-center text-sm/6 text-gray-500 dark:text-gray-400">
            Already have an account? <a href="/login" class="font-medium text-base-primary hover:opacity-90">Login</a>
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
      name: '',
      email: '',
      password: '',

      showPassword: false,
      errors: {}, // menampung respon error jika ada

      // Alert Config
      countdown: 5,
      showAlert: false,
      message: '',
      type: 'success', //default
    };
  },
  methods: {
    async handleRegistrationSuccess() {
      this.type = 'success';
      this.showAlert = true;
      await this.startCountdown(); 
    },

    async startCountdown() {
      let countdown = this.countdown;
      for (let i = countdown; i > 0; i--) {
        this.message = `You will be redirected to the Dashboard in ${i} seconds.`;
        await this.delay(1000); // Tunggu 1 detik
      }
      this.message = 'You will be redirected to the Dashboard now.'; // Update message terakhir
      this.redirectToDashboard();
    },


    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms)); // Delay menggunakan Promise
    },

    redirectToDashboard() {
      this.$router.push('/dashboard');
    },

    handleRegister() {
      // Kirim data ke API untuk registrasi
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      // Misal menggunakan axios untuk melakukan POST request
      this.$axios.post('/register', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(() => {
          this.errors = {};
          this.handleRegistrationSuccess(); 
        })
        .catch(error => {
          if (error.response && error.response.status === 422) {
            this.errors = error.response.data.errors || {}
          } else {
            this.message = error.response.statusText
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