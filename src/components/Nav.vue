<template>
  <div class="bg-secondary p-2 pl-6 w-full">
    <div class="flex gap-2 justify-between items-center h-full w-full">
      <!-- Reset filters -->
      <div
        @click="resetFilters"
        class="h-full aspect-square p-2 cursor-pointer"
      >
        <svg
          class="fill-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
          />
        </svg>
      </div>
      <!-- Tags container with flex-1 to take available space -->
      <div class="flex-1 min-w-0">
        <!-- min-w-0 allows flex child to shrink below content size -->
        <div class="flex gap-1 overflow-x-auto">
          <span
            v-for="tag in hardcodedTags"
            @click="selectTag(tag)"
            :key="tag"
            :class="`capitalize  text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${
              $selectedTags.includes(tag) ? 'bg-accent' : 'bg-primary'
            }`"
            >{{ tag }}</span
          >
          <div class="flex gap-1 border-l border-primary pl-2 ml-2">
            <span
              v-for="tag in tags"
              :key="tag"
              @click="selectTag(tag)"
              :class="`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${
                $selectedTags.includes(tag) ? 'bg-accent' : 'bg-primary'
              }`"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Right controls with flex-shrink-0 to prevent shrinking -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <!-- Sort -->
        <select
          class="bg-background h-full text-copy border-2 border-primary rounded-md p-2"
          :value="$sortBy"
          @change="(e) => sortBy.set(e.target.value)"
        >
          <option
            v-for="option in sortOptions"
            :key="option.value"
            :value="option.value"
          >
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
              console.log('Search input event:', e.target.value);
              searchQuery.set(e.target.value);
              console.log('Store value after update:', searchQuery.get());
            }
          "
          class="bg-background h-full w-30 text-copy border-2 border-primary rounded-md p-2"
          placeholder="search '/'"
        />
        <!-- Theme switcher -->
        <div class="h-full w-[40px] aspect-square p-2">
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
import {
  isSidebarOpen,
  resetFilters,
  searchQuery,
  selectedTags,
  sortBy,
} from "../store/store";
import { useStore } from "@nanostores/vue";
import { cycleTheme } from "../lib/methods";
const $isSidebarOpen = useStore(isSidebarOpen);
const $searchQuery = useStore(searchQuery);
const $selectedTags = useStore(selectedTags);
const $sortBy = useStore(sortBy);

const searchInput = ref(null);

const props = defineProps(["tags"]);

const sortOptions = ref([
  { value: "category-asc", label: "Category (A-Z)" },
  { value: "category-desc", label: "Category (Z-A)" },
  { value: "new-old", label: "Date (Newest)" },
  { value: "old-new", label: "Date (Oldest)" },
  { value: "a-z", label: "Name (A-Z)" },
  { value: "z-a", label: "Name (Z-A)" },
]);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      searchInput.value.focus();
    }
  });
});

const selectTag = (tag) => {
  console.log("clicked tag", tag);
  const currentTags = selectedTags.get();
  if (currentTags.includes(tag)) {
    selectedTags.set(currentTags.filter((t) => t !== tag));
  } else {
    selectedTags.set([...currentTags, tag]);
  }
  console.log("selectedTags", selectedTags.get());
};

const hardcodedTags = ref(["free", "freemium", "open-source"]);
const tags = ref(props.tags);
</script>
