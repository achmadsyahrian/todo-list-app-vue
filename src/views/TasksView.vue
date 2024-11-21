<template>
  <div class="px-4 sm:ml-64">
    <!-- Container utama -->
    <div class="py-20 px-4 mx-auto max-w-screen-xl text-center flex min-h-screen flex-col">
        <!-- BreadCrumb -->
        <div class="flex justify-between items-center">
            <BreadcrumbNav
                :breadcrumbs="[
                    { label: 'Home', link: '/dashboard' },
                    { label: 'Tasks', link: '/tasks' },
                    { label: 'List', link: null }
                ]"
                title="Tasks"
            />
            <BaseButton customClass="w-20 text-xs">New Task</BaseButton>
        </div>

        <!-- Elemen Bawah (Tabel) -->
        <div class="overflow-x-auto whitespace-nowrap">
            <table id="pagination-table" class="w-full text-sm text-left rtl:text-right text-dark-quaternary dark:text-gray-400 shadow-lg rounded-md overflow-hidden">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white bg-dark-secondary">
                    <div class="flex flex-row sm:flex-row items-center justify-end gap-3">
                        <!-- (Search) -->
                        <div class="relative w-full sm:w-auto">
                            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-5 h-5 text-dark-quaternary dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 rounded-lg w-full sm:w-80 bg-gray-50 dark:bg-dark-tertiary dark:placeholder-gray-400 dark:text-white focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-base-primary" placeholder="Search for tasks">
                        </div>

                        <!-- (Filter) -->
                        <div class="relative w-full sm:w-auto">
                            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex font-medium rounded-lg text-lg text-light-primary opacity-50 hover:opacity-60" type="button">
                                <i class="fas fa-filter"></i>
                            </button>
                            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-tertiary dark:divide-gray-600 text-left" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-dark-secondary">
                                            <input id="status-all" type="radio" value="" name="filter-radio" class="w-4 h-4 accent-base-primary dark:bg-dark-tertiary dark:border-gray-600">
                                            <label for="status-all" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Alls</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-dark-secondary">
                                            <input id="status-pending" type="radio" value="" name="filter-radio" class="w-4 h-4 accent-base-primary dark:bg-dark-tertiary dark:border-gray-600">
                                            <label for="status-pending" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Pending</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-dark-secondary">
                                            <input id="status-complete" type="radio" value="" name="filter-radio" class="w-4 h-4 accent-base-primary dark:bg-dark-tertiary dark:border-gray-600">
                                            <label for="status-complete" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Complete</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-tertiary border-b border-b-dark-tertiary dark:text-gray-400 w-auto">
                    <tr>
                        <th colspan="1" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th colspan="1" class="px-6 py-3">
                            Title
                        </th>
                        <th colspan="1" class="px-6 py-3">
                            Status
                        </th>
                        <th colspan="1" class="px-6 py-3">
                            Created At
                        </th>
                        <th colspan="1" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-dark-secondary dark:border-dark-tertiary hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 ring-0 dark:checked:accent-base-primary dark:ring-offset-dark-secondary dark:bg-dark-tertiary dark:border-gray-600">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ujian Tengah Semester
                        </th>
                        <td class="px-6 py-4">
                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-400">Complete</span>
                        </td>
                        <td class="px-6 py-4">
                            Oct 24, 2020
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline"><i class="far fa-check-circle text-xs"></i> Complete Task</a>
                            <a href="#" class="font-medium text-orange-600 hover:underline ml-4"><i class="fas fa-edit text-xs"></i> Edit</a>
                            <a href="#" class="font-medium text-red-600 hover:underline ml-4"><i class="far fa-trash-alt text-xs"></i> Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="flex flex-col sm:flex-row items-center justify-between px-4 py-3 space-y-3 sm:space-y-0">
            <!-- Left: Entries info -->
            <div class="flex items-center space-x-3">
                <p class="text-sm text-dark-quaternary dark:text-gray-400">
                    Showing <span class="font-medium">1</span> to <span class="font-medium">5</span> of <span class="font-medium">27</span> entries
                </p>
            </div>

            <!-- Right: Pagination -->
            <nav class="flex justify-center space-x-1" aria-label="Pagination">
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    <i class="fas fa-angle-left"></i>
                </button>
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    1
                </button>
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    2
                </button>
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    3
                </button>
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    ...
                </button>
                <button class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-dark-tertiary rounded-md hover:bg-gray-200 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-tertiary">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </nav>
        </div>
    </div>
  </div>
</template>


<script>
import { initFlowbite } from 'flowbite'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: "TasksView",
  components: {
    BreadcrumbNav,
    BaseButton
  },
  mounted() {
    initFlowbite()
  }
}
</script>

<style></style>