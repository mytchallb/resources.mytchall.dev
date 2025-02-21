<template>
  <div class="w-full h-full overflow-y-auto">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4">
      <ToolCard v-for="tool in tools" :tool="tool" :key="tool.slug" />
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ToolCard from './ToolCard.vue'

const props = defineProps(['tools'])

onMounted(() => {
  console.log("heloo")
  console.log('Client-side tools:', props.tools)
})
</script>
