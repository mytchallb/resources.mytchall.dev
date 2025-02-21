<template>
  <div>
    <h1>Tool List</h1>
    <ul>
      <li v-for="tool in tools" :key="tool.slug" class="bg-white p-4 rounded-md">
        {{ tool.data.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  tools: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  console.log("heloo")
  console.log('Client-side tools:', props.tools)
})
</script>
