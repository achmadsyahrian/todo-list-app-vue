<template>
   <div class="mb-4">
     <label :for="id" class="text-sm font-medium text-gray-700 dark:text-slate-300">
       {{ label }}
       <span v-if="required" class="text-red-500">*</span>
     </label>
     <input
       :id="id"
       :type="type"
       :value="modelValue"
       :placeholder="placeholder"
       class="w-full p-2 mt-1 border rounded-md ring-input placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:text-sm sm:text-sm/6 dark:bg-dark-tertiary dark:text-slate-100"
       :class="{
        'border-gray-300 dark:border-dark-tertiary': !error, 
        'border-red-500': error // Jika ada error, ubah border menjadi merah
      }"
       @input="$emit('update:modelValue', $event.target.value)"
     />
     
     <!-- Slot untuk pesan error -->
     <p v-if="error" class="mt-1 text-xs text-red-500">{{ error[0] }}</p>
   </div>
 </template>
 
 <script>
 export default {
   props: {
     modelValue: {
       type: String,
       required: true,
     },
     label: {
       type: String,
       required: true,
     },
     id: {
       type: String,
       required: true,
     },
     type: {
       type: String,
       default: "text",
     },
     placeholder: {
       type: String,
       default: "",
     },
     required: {
       type: Boolean,
       default: false,
     },
     error: Array, //Menerima pesan error
   },
 };
 </script> 