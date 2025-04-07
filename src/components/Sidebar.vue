<template>
  <!-- Overlay -->
  <div class="absolute w-full h-full z-20 inset-0 bg-black/40 lg:hidden" :class="[$isOpen ? '' : 'hidden']" @click="toggleSidebar"></div>
  <div
    class="h-full shadow-md top-0 left-0 bg-primary py-4 overflow-hidden z-30"
    :class="[$isOpen ? 'w-[160px] absolute lg:relative px-2' : 'w-[0px] absolute lg:relative lg:w-[160px] lg:px-2']"
  >
    <!-- Contents -->
    <div class="relative z-30">
      <h1 class="text-xl mb-4 px-4 font-bold overflow-hidden relative">
        <IconLogo />
      </h1>
      <!-- Buttons -->
      <div class="flex gap-4 my-4 items-center justify-center overflow-hidden">
        <!-- Theme switcher -->
        <div class="h-[30px] w-[30px] aspect-square">
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
      <!-- Categories -->
      <ul class="flex flex-col gap-1">
        <li
          v-for="category in categories"
          :key="category.name"
          class="cursor-pointer rounded-md p-2 relative whitespace-nowrap overflow-hidden"
          :class="[$selectedCategories.includes(category.name) ? 'bg-accent hover:bg-accent/80' : 'hover:bg-secondary']"
          @click="clickCategory(category.name)"
        >
          <div class="flex items-center gap-2">
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
  </div>
</template>

<script setup>
import { ref } from "vue"
import IconLogo from "./Icons/IconLogo.vue"
import github from "../assets/logo-github.svg"
import { useStore } from "@nanostores/vue"
import { cycleTheme, applyThemeIndexToDom } from "../lib/methods"
import { isSidebarOpen, selectedCategories, selectedTheme, setCategories } from "../store/store"
import { onMounted } from "vue"

const props = defineProps(["categories"])
const $isOpen = useStore(isSidebarOpen)
const $selectedCategories = useStore(selectedCategories)
const $selectedTheme = useStore(selectedTheme)

onMounted(() => {
  console.log("selectedTheme", selectedTheme.get())
  // applyThemeIndexToDom(selectedTheme.get())
})
const toggleSidebar = () => {
  console.log("toggleSidebar")
  isSidebarOpen.set(!isSidebarOpen.get())
}

const clickCategory = (category) => {
  console.log("selectCategory", category)

  const currentCategories = selectedCategories.get()
  if (currentCategories.includes(category)) {
    setCategories(currentCategories.filter((c) => c !== category))
  } else {
    setCategories([...currentCategories, category])
  }
  console.log("selectedCategories", selectedCategories.get())
}
</script>
