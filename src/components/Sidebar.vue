<template>
  <div class="h-full shadow-md transition-all duration-300 relative bg-primary py-4" :class="[$isOpen ? 'w-[160px] px-2' : 'w-[10px] px-1']">
    <button
      @click="toggleSidebar"
      class="cursor-pointer absolute -right-2 top-2 p-1 bg-secondary hover:bg-accent text-copy shadow-md rounded z-20"
      :class="{ 'rotate-180 translate-x-2': !$isOpen }"
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

    <h1 class="text-xl mb-4 px-4 font-bold overflow-hidden">
      <div class="transition-opacity duration-300 text-copy" :class="{ 'opacity-0': !$isOpen }">Dev Resources</div>
    </h1>
    <!-- Buttons -->
    <div class="flex gap-4 my-4 items-center justify-center overflow-hidden transition-opacity duration-300" :class="{ 'opacity-0': !$isOpen }">
      <!-- Theme switcher -->
      <div class="h-full w-[30px] aspect-square">
        <button class="w-full h-full rounded-md flex overflow-hidden cursor-pointer border-2 border-[#808080]" @click="cycleTheme">
          <span class="bg-primary flex-1"></span>
          <span class="bg-secondary flex-1"></span>
          <span class="bg-accent flex-1"></span>
          <span class="bg-accent-secondary flex-1"></span>
          <span class="bg-copy flex-1"></span>
        </button>
      </div>
      <!-- Github -->
      <a href="https://github.com/mytchallb/resources.mytchall.dev" target="_blank">
        <img :src="github.src" alt="github" class="w-7 h-7" />
      </a>
    </div>
    <ul class="flex flex-col gap-1 transition-opacity duration-300" :class="{ 'opacity-0 pointer-events-none': !$isOpen }">
      <li
        v-for="category in categories"
        :key="category.name"
        class="cursor-pointer rounded-md p-2 relative whitespace-nowrap overflow-hidden"
        :class="[$selectedCategories.includes(category.name) ? 'bg-accent hover:bg-accent/80' : 'hover:bg-secondary']"
        @click="clickCategory(category.name)"
      >
        <div class="flex items-center gap-2">
          <svg class="flex-shrink-0 w-5 h-5 text-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div class="flex items-center gap-1 flex-1 justify-between">
            <span class="capitalize text-copy">{{ category.name }}</span>
            <span
              v-if="category.count"
              class="text-sm px-2 py-0.5 text-copy rounded-full"
              :class="$selectedCategories.includes(category.name) ? 'bg-accent-secondary' : 'bg-secondary'"
            >
              {{ category.count }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
import github from "../assets/logo-github.svg"
import { useStore } from "@nanostores/vue"
import { cycleTheme } from "../lib/methods"
import { isSidebarOpen, selectedCategories } from "../store/store"

const props = defineProps(["categories"])

const $isOpen = useStore(isSidebarOpen)
const $selectedCategories = useStore(selectedCategories)
const clickCategory = (category) => {
  console.log("selectCategory", category)

  const currentCategories = selectedCategories.get()
  if (currentCategories.includes(category)) {
    selectedCategories.set(currentCategories.filter((c) => c !== category))
  } else {
    selectedCategories.set([...currentCategories, category])
  }
  console.log("selectedCategories", selectedCategories.get())
}

const toggleSidebar = () => {
  console.log("toggleSidebar")
  isSidebarOpen.set(!isSidebarOpen.get())
}
</script>
