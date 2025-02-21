<template>
  <div class="w-full h-full overflow-y-auto">
    <div v-for="category in categories" :key="category.name" class="p-4">
      
      <div class="flex items-center justify-between">
        <hr class="w-full border-2 border-gray-200">
        <h2 class="text-2xl mx-6 font-bold capitalize text-gray-200 mb-2">{{ category.name }}</h2>
        <hr class="w-full border-2 border-gray-200">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <template v-for="resource in resources">
          <ResourceCard v-if="resource.data.category === category.name" :resource="resource" :key="resource.slug" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ResourceCard from './ResourceCard.vue'

const props = defineProps(['resources', 'categories'])

onMounted(() => {
  console.log("heloo")
  console.log('Client-side resources:', props)
})
</script>
