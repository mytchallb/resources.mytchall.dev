<template>
  <div class="flex-1 min-w-0">
    <div class="flex flex-col gap-1">
      <div class="overflow-x-auto scrollbar-hide px-4">
        <div class="flex flex-col gap-1">
          <div class="flex gap-1">
            <span
              v-for="(tag, index) in tags"
              :key="tag"
              v-show="index % 2 === 0"
              @click="selectTag(tag)"
              :class="`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${$selectedTags.includes(tag) ? 'bg-accent' : 'bg-primary'}`"
            >
              {{ tag }}
            </span>
          </div>
          <div class="flex gap-1">
            <span
              v-for="(tag, index) in tags"
              :key="tag"
              v-show="index % 2 === 1"
              @click="selectTag(tag)"
              :class="`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${$selectedTags.includes(tag) ? 'bg-accent' : 'bg-primary'}`"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "@nanostores/vue"
import { selectedTags } from "../../store/store"
const $selectedTags = useStore(selectedTags)

const props = defineProps(["tags"])

const tags = ref(props.tags)

const selectTag = (tag) => {
  console.log("clicked tag", tag)
  const currentTags = selectedTags.get()
  if (currentTags.includes(tag)) {
    selectedTags.set(currentTags.filter((t) => t !== tag))
  } else {
    selectedTags.set([...currentTags, tag])
  }
  console.log("selectedTags", selectedTags.get())
}
</script>

<style>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
