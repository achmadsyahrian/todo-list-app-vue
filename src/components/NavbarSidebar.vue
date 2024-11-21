<template>
   <div>
      <nav class="fixed top-0 z-50 w-full bg-light-secondary border-b border-light-tertiary dark:bg-dark-secondary dark:border-dark-tertiary">
         <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
               <div class="flex items-center justify-start rtl:justify-end">
                  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                     aria-controls="logo-sidebar" type="button"
                     class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-light-tertiary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-dark-tertiary dark:focus:ring-gray-600">
                     <span class="sr-only">Open sidebar</span>
                     <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                           d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                     </svg>
                  </button>
                  <a href="/dashboard" class="flex ms-2 md:me-24">
                     <img src="/images/logo-app.png" class="h-8 me-3 rounded-full border-2 border-light-tertiary dark:border-dark-tertiary shadow-sm"
                        alt="FlowBite Logo" />
                     <span
                        class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-dark-primary dark:text-light-secondary">Taskly</span>
                  </a>
               </div>
               
               <div class="flex items-center">
                  <!-- Dark Mode Toggle -->
                  <!-- <ThemeToggle/> -->
                  
                  <div class="flex items-center ms-5">
                     <div>
                        <button type="button"
                           class="flex text-sm bg-dark-secondary rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-dark-tertiary"
                           aria-expanded="false" data-dropdown-toggle="dropdown-user">
                           <span class="sr-only">Open user menu</span>
                           <img class="w-8 h-8 rounded-full border-2 border-light-tertiary dark:border-dark-tertiary shadow-sm"
                              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                        </button>
                     </div>
                     <div
                        class="z-50 hidden my-4 text-base list-none bg-light-secondary divide-y divide-gray-100 rounded shadow dark:bg-dark-tertiary dark:divide-dark-secondary"
                        id="dropdown-user">
                        <div class="px-4 py-3" role="none">
                           <p class="text-sm text-dark-primary dark:text-light-primary" role="none">
                              Achmad Syahrian
                           </p>
                           <p class="text-sm font-medium text-dark-primary truncate dark:text-light-tertiary" role="none">
                              syahrian@gmail.com
                           </p>
                        </div>
                        <ul class="py-1" role="none">
                           <li>
                              <a href="#"
                                 class="block px-4 py-2 text-sm text-dark-tertiary hover:bg-light-tertiary dark:text-light-tertiary dark:hover:bg-dark-secondary dark:hover:text-white"
                                 role="menuitem">Profile</a>
                           </li>
                           <li>
                              <form @submit.prevent="logout">
                                 <button type="submit"
                                          class="block w-full text-left px-4 py-2 text-sm text-dark-tertiary hover:bg-light-tertiary dark:text-light-tertiary dark:hover:bg-dark-secondary dark:hover:text-white">
                                    Sign out
                                 </button>
                              </form>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   
      <aside id="logo-sidebar"
         class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-light-secondary border-r border-light-tertiary sm:translate-x-0 dark:bg-dark-secondary dark:border-dark-tertiary"
         aria-label="Sidebar">
         <div class="h-full px-3 pb-4 overflow-y-auto bg-light-secondary dark:bg-dark-secondary">
            <ul class="space-y-2 font-medium">
               <li>
                  <a href="/dashboard"
                     class="flex items-center p-2 text-dark-primary rounded-lg dark:text-light-primary hover:bg-light-tertiary dark:hover:bg-dark-tertiary group">
                     <i
                        class="fas fa-home flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-dark-primary dark:group-hover:text-white"></i>
                     <span class="ms-3">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href="/tasks"
                     class="flex items-center p-2 text-dark-primary rounded-lg dark:text-light-primary hover:bg-light-tertiary dark:hover:bg-dark-tertiary group">
                     <i
                        class="fas fa-tasks flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-dark-primary dark:group-hover:text-white"></i>
                     <span class="flex-1 ms-3 whitespace-nowrap">Tasks</span>
                     <span
                        class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full bg-base-secondary bg-opacity-80 text-base-primary">3</span>
                  </a>
               </li>
            </ul>
         </div>
      </aside>
   </div>
</template>

<script>
// // import ThemeToggle from './ThemeToggle.vue';

export default {
  name: "NavbarSidebar",
  components: {
   // ThemeToggle
  },
  methods: {
    async logout() {
        // Ambil token dari localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan");
        }

        // Kirim permintaan logout ke API Laravel
        await this.$axios.post(
          "/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // Sertakan Bearer Token
              Accept: "application/json", // Pastikan format JSON
            },
          }
        )
        .then(() => {
         localStorage.removeItem("token");
         this.$router.push("/login");
        })
        .catch((error) => {
         console.log(error.message);
        })
    },
  },
};
</script>


<style></style>