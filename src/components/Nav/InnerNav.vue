<template>
  <div class="flex gap-2 justify-between items-center w-full py-1 px-2">
    <div class="flex items-center gap-2">
      <!-- Open Nav button -->
      <button class="cursor-pointer lg:hidden" @click="toggleSidebar">
        <svg class="flex-shrink-0 w-7 h-7 text-copy stroke-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- Reset filters -->
      <div @click="resetFilters" class="h-full aspect-square p-2 cursor-pointer">
        <svg class="fill-secondary w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
          />
        </svg>
      </div>
    </div>

    <!-- Right controls with flex-shrink-0 to prevent shrinking -->
    <div class="flex items-center gap-2 flex-shrink-0">
      <!-- Sort -->
      <!-- <svg class="fill-secondary w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"
        />
      </svg> -->

      <select
        class="bg-background h-full text-copy border-2 border-primary rounded-md p-2 appearance-none"
        :value="$sortBy"
        @change="(e) => sortBy.set(e.target.value)"
        style="height: 100%; -webkit-appearance: none"
      >
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>

      <!-- Search -->
      <input
        ref="searchInput"
        type="text"
        :value="$searchQuery"
        @input="
          (e) => {
            searchQuery.set(e.target.value)
          }
        "
        class="bg-background h-full min-w-20 w-full max-w-30 text-copy border-2 border-primary rounded-md p-2 appearance-none"
        placeholder="Search '/'"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue"

import { resetFilters, searchQuery, sortBy, setSearchQuery, setSortBy } from "../../store/store"
import { useStore } from "@nanostores/vue"
import { isSidebarOpen } from "../../store/store"

const $searchQuery = useStore(searchQuery)
const $sortBy = useStore(sortBy)
const searchInput = ref(null)

watch($searchQuery, (newVal) => {
  setSearchQuery(newVal)
})

watch($sortBy, (newVal) => {
  setSortBy(newVal)
})

const props = defineProps(["tags"])

const sortOptions = ref([
  { value: "category-asc", label: "Category (A-Z)" },
  { value: "category-desc", label: "Category (Z-A)" },
  { value: "new-old", label: "Date (Newest)" },
  { value: "old-new", label: "Date (Oldest)" },
  { value: "a-z", label: "Name (A-Z)" },
  { value: "z-a", label: "Name (Z-A)" },
])

const toggleSidebar = () => {
  console.log("toggleSidebar")
  isSidebarOpen.set(!isSidebarOpen.get())
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault()
      searchInput.value.focus()
    }
  })
})
</script>
