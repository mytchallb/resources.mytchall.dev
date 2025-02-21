<template>
  <a :href="tool.data.url" class="bg-white  shadow-md rounded-md overflow-hidden">
    <img :src="tool.data.image" :alt="tool.data.title" class="w-full aspect-video object-cover">
    <div class="flex gap-2 flex-col p-4">
      <h2 class="text-lg font-bold">{{ tool.data.title }}</h2>
      <!-- tags -->
       <div class="flex gap-2">
         <a v-if="tool.data.url" :href="tool.data.url" target="_blank" class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{{ simpleUrl(tool.data.url) }}</a>
         <span v-if="tool.data.pricing" class="capitalize text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{{ tool.data.pricing }}</span>
        </div>
      <p class="h-[150px] overflow-hidden text-ellipsis line-clamp-4">{{ tool.data.excerpt }}</p>
    </div>
  </a>
</template>
<script setup>
const props = defineProps(['tool'])

const simpleUrl = (url) => {
  let simpleUrl = url.replace('https://', '').replace('http://', '').replace('www.', '')
  simpleUrl = simpleUrl.replace(/\/$/, '')
  return simpleUrl.length > 30 ? simpleUrl.slice(0, 30) + '...' : simpleUrl
}

</script>

