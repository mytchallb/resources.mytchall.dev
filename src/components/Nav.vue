<template>
  <div class="bg-secondary p-2 pl-6 w-full">
    <div class="flex gap-2 justify-between items-center h-full w-full">
      <!-- Tags container with flex-1 to take available space -->
      <div class="flex-1 min-w-0">
        <!-- min-w-0 allows flex child to shrink below content size -->
        <div class="flex gap-1 overflow-x-auto">
          <span
            v-for="tag in hardcodedTags"
            :key="tag"
            class="capitalize bg-primary text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap"
            >{{ tag }}</span
          >
          <div class="flex gap-1 border-l border-primary pl-2 ml-2">
            <span
              v-for="tag in tags"
              :key="tag"
              class="capitalize bg-primary text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Right controls with flex-shrink-0 to prevent shrinking -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <!-- Sort -->
        <select
          class="bg-background h-full text-copy border-2 border-primary rounded-md px-2 py-1"
        >
          <option value="category-a-z">Category (A-Z)</option>
          <option value="category-z-a">Category (Z-A)</option>
          <option value="new-old">Date (Newest)</option>
          <option value="old-new">Date (Oldest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
          <option value="free">Price (Free)</option>
          <option value="paid">Price (Paid)</option>
        </select>
        <!-- Search -->
        <input
          ref="searchInput"
          type="text"
          class="bg-background h-full text-copy border-2 border-primary rounded-md px-2 py-1"
          placeholder="search '/'"
        />
        <!-- Theme switcher -->
        <div class="h-full aspect-square p-2">
          <button
            class="w-full h-full rounded-md flex overflow-hidden cursor-pointer"
            @click="cycleTheme"
          >
            <span class="bg-primary flex-1"></span>
            <span class="bg-secondary flex-1"></span>
            <span class="bg-accent flex-1"></span>
            <span class="bg-accent-secondary flex-1"></span>
            <span class="bg-copy flex-1"></span>
          </button>
        </div>
        <!-- Github -->
        <a
          href="https://github.com/mytchallb/resources.mytchall.dev"
          target="_blank"
        >
          <img :src="github.src" alt="github" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import github from "../assets/logo-github.svg";
import { isSidebarOpen } from "../store/store";
import { useStore } from "@nanostores/vue";

const $isSidebarOpen = useStore(isSidebarOpen);
// if press "/" key then focus on the search input
const searchInput = ref(null);

const props = defineProps(["tags"]);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      searchInput.value.focus();
    }
  });
});

const cycleTheme = () => {
  console.log("cycle theme");
};

const hardcodedTags = ref(["free", "open source"]);
const tags = ref(props.tags);
</script>
