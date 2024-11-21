<template>
  <div class="px-4 sm:ml-64">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex items-center justify-center min-h-screen">
      <div>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark-primary md:text-5xl lg:text-6xl dark:text-light-primary">Manage Your Tasks Efficiently</h1>
          <p class="mb-8 text-md font-normal text-dark-quaternary dark:text-light-quaternary lg:text-xl sm:px-16 lg:px-48">With our task management platform, you can easily organize, track, and complete your daily goals. Stay focused, be productive, and never miss a deadline.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="/tasks" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-light-primary rounded-lg bg-base-primary hover:opacity-90 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                  Get started
                  <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
              <a href="https://www.instagram.com/_achrian" class="py-3 px-5 sm:ms-4 text-sm font-medium text-dark-primary focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-dark-secondary dark:text-light-quaternary dark:border-gray-600 dark:hover:text-white dark:hover:bg-dark-tertiary">
                  Contact Dev <i class="fab fa-instagram"></i>
              </a>  
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "DashboardView"
}
</script>

<style>

</style>