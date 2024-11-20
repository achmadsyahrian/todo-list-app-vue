<template>
   <button
     :type="type"
     :class="['w-full py-2 mt-4 bg-base-primary text-white font-semibold rounded-md hover:opacity-90', customClass]"
     @click="$emit('click')"
   >
     <slot></slot>
   </button>
 </template>
 
 <script>
 export default {
   name: 'BaseButton',
   props: {
     type: {
       type: String,
       default: 'button', // Default button type
     },
     customClass: {
       type: String,
       default: '', // Add any additional classes
     },
   },
 };
 </script>
 
 <style scoped>
 /* Custom styles for BaseButton (if needed) */
 </style>
 