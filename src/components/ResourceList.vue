<template>
  <div class="w-full h-full overflow-y-auto bg-background">
    <div
      v-for="category in filteredCategories"
      :key="category.name"
      class="p-4"
    >
      <div class="flex items-center justify-between">
        <hr class="w-full border-2 border-secondary" />
        <h2 class="text-xl mx-6 text-secondary font-bold uppercase mb-2">
          {{ category.name }}
        </h2>
        <hr class="w-full border-2 border-secondary" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <template v-for="resource in resources">
          <ResourceCard
            v-if="resource.data.category === category.name"
            :resource="resource"
            :key="resource.slug"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ResourceCard from "./ResourceCard.vue";
import { useStore } from "@nanostores/vue";
import { selectedCategories } from "../store/store";

const props = defineProps(["resources", "categories"]);

const $selectedCategories = useStore(selectedCategories);

const filteredCategories = computed(() => {
  if ($selectedCategories.value.length === 0) {
    return props.categories;
  }
  // Filter categories based on selection
  return props.categories.filter((category) => {
    return $selectedCategories.value.includes(category.name);
  });
});
</script>
