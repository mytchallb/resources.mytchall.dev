<template>
  <!-- Image -->
  <div class="w-full h-[40dvh] flex flex-col items-center justify-center p-2">
    <div class="h-full">
      <img class="h-full aspect-video object-cover rounded-lg" :src="resource.image" alt="" />
      <p>thumbnails here..</p>
    </div>
  </div>

  <!-- Title -->
  <h1 class="text-4xl text-center font-bold mb-4">{{ resource.title }}</h1>

  <!-- Tags -->
  <div class="w-full mb-4 pl-1">
    <div class="gap-1 flex flex-wrap justify-center">
      <span v-for="tag in resource.tags" :key="tag" class="inline-block bg-gray-200 rounded px-2 py-1">
        {{ tag }}
      </span>
    </div>
  </div>

  <!-- Content -->
  <div class="w-full max-w-screen-md mx-auto p-6">
    <!-- content -->
    <div class="prose">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["resource"])
</script>
