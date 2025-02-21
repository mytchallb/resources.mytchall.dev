<template>
  <div class="bg-gray-200 p-2 pl-6 w-full">
    <div class="flex gap-4 justify-between items-center">
      <!-- Tags -->
      <div class="flex gap-1 flex-1">
        <span v-for="tag in tags" :key="tag" class="capitalize bg-gray-300 px-2 py-2 rounded-md cursor-pointer">{{ tag }}</span>
      </div>
      <select>
        <option value="category-a-z">Category (A-Z)</option>
        <option value="category-z-a">Category (Z-A)</option>
        <option value="new-old">Date (Newest)</option>
        <option value="old-new">Date (Oldest)</option>
        <option value="a-z">Name (A-Z)</option>
        <option value="z-a">Name (Z-A)</option>
        <option value="free">Price (Free)</option>
        <option value="paid">Price (Paid)</option>
      </select>
      <input ref="searchInput" type="text" class="border-2 border-gray-300 rounded-md px-2 py-1" placeholder="search '/'">
      <a href="https://github.com/mytchallb/resources.mytchall.dev" target="_blank">
        <img :src="github.src" alt="github" class="w-6 h-6">
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import github from "../assets/logo-github.svg";

// if press "/" key then focus on the search input
const searchInput = ref(null);

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === '/') {
      e.preventDefault();
      searchInput.value.focus();
    }
  });
});

const tags = ref([
  'free',
  'paid',
  'freemium',
  'open source',
  'source-available',
])
</script>