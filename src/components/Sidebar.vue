<template>
  <div class="h-full shadow-md transition-all duration-300 relative bg-gray-600 px-2 py-6" 
       :class="[isOpen ? 'w-[160px]' : 'w-[30px]']">
    
    <button 
      @click="toggleSidebar" 
      class="cursor-pointer absolute -right-2 top-2 p-1 bg-gray-400 hover:bg-gray-100 shadow-md rounded"
      :class="{ 'rotate-180': !isOpen }"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
        <polyline points="11 18 5 12 11 6" />
      </svg>
    </button>
    <ul class="flex flex-col gap-1">
      <li v-for="category in categories" :key="category.name" class="cursor-pointer hover:bg-gray-500 rounded-md p-2">
        <span class="capitalize">{{ category.name }}</span> <span v-if="category.count" class="text-gray-400">({{ category.count }})</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['categories']);

const isOpen = ref(true);

const toggleSidebar = () => {
  console.log('toggleSidebar');
  isOpen.value = !isOpen.value;
};

</script>