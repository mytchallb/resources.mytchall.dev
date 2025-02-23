<template>
  <div class="bg-secondary p-2 pl-6 w-full flex flex-col">
    <!-- tags -->
    <div class="">
      <NavTags :tags="props.tags" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import NavTags from "./Nav/NavTags.vue"

const props = defineProps(["tags"])
</script>
