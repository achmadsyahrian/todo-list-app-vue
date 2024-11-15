<template>
   <div class="mb-4">
     <label :for="id" class="text-sm font-medium text-gray-700 dark:text-slate-300">
       {{ label }}
     </label>
     <input
       :id="id"
       :type="type"
       :value="modelValue"
       :placeholder="placeholder"
       class="w-full p-2 mt-1 border border-gray-300 dark:border-slate-700 rounded-md ring-input placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:text-sm sm:text-sm/6 dark:bg-slate-700 dark:text-slate-100"
       @input="$emit('update:modelValue', $event.target.value)"
     />
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
   },
 };
 </script> 