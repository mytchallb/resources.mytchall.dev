<template>
  <li class="bg-white p-4 shadow-md rounded-md">
      <h2>{{ tool.data.title }}</h2>
      <p>{{ tool.data.excerpt }}</p>
  </li>
</template>
<script setup>
const props = defineProps(['tool'])

</script>

