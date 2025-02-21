<template>
  <div class="h-full shadow-md transition-all duration-300 relative bg-gray-600 px-2 py-10" 
       :class="[isOpen ? 'w-[160px]' : 'w-[30px]']">
    
    <button 
      @click="toggleSidebar" 
      class="cursor-pointer absolute -right-2 top-2 p-1 bg-gray-400 hover:bg-gray-100 shadow-md rounded z-20"
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
      <li v-for="category in categories" 
          :key="category.name" 
          class="cursor-pointer hover:bg-gray-500 rounded-md p-2 relative whitespace-nowrap overflow-hidden">
        <div class="flex items-center gap-2 transition-opacity duration-300" :class="{ 'opacity-0': !isOpen }">
          <svg 
            class="flex-shrink-0 w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div class="flex items-center gap-1 flex-1 justify-between">
            <span class="capitalize text-gray-200">{{ category.name }}</span>
            <span v-if="category.count" class="text-sm px-2 py-0.5 bg-gray-500 text-gray-300 rounded-full">
              {{ category.count }}
            </span>
          </div>
        </div>
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