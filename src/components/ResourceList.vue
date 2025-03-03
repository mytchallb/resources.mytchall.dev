<template>
  <div class="w-full h-full overflow-y-auto bg-background">
    <InnerNav :tags="tags" class="bg-background z-10" />
    <div class="grid auto-fit-grid gap-4 px-6 pt-2 pb-6">
      <template v-for="item in resources" :key="item.resource?.slug || item.categoryName">
        <ResourceCard :resource="item.resource" />
      </template>
      <span class="text-copy text-center text-sm mt-10" v-if="resources.length === 0">No resources found</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import ResourceCard from "./ResourceCard.vue"
import { useStore } from "@nanostores/vue"
import { selectedCategories, sortBy, selectedTags, searchQuery } from "../store/store"
import InnerNav from "./Nav/InnerNav.vue"
const props = defineProps(["resources", "categories", "tags"])

const $selectedCategories = useStore(selectedCategories)
const $sortBy = useStore(sortBy)
const $selectedTags = useStore(selectedTags)
const $searchQuery = useStore(searchQuery)
const filteredCategories = computed(() => {
  if ($selectedCategories.value.length === 0) {
    return props.categories
  }
  // Filter categories based on selection
  return props.categories.filter((category) => {
    return $selectedCategories.value.includes(category.name)
  })
})

const resources = computed(() => {
  let result = []

  // get a list of resources and selected categories
  filteredCategories.value.forEach((category) => {
    const categoryResources = props.resources.filter((resource) => resource.data.category === category.name)

    if (categoryResources.length > 0) {
      let addedCategory = false

      categoryResources.forEach((resource) => {
        if (!addedCategory) {
          result.push({ categoryName: category.name, resource })
          addedCategory = true
        } else {
          result.push({ categoryName: "", resource })
        }
      })
    }
  })

  // sort the resources by the sortBy value
  result.sort((a, b) => {
    switch ($sortBy.value) {
      case "category-asc":
        return a.categoryName.localeCompare(b.categoryName)
      case "category-desc":
        return b.categoryName.localeCompare(a.categoryName)
      case "a-z":
        return a.resource.data.title.localeCompare(b.resource.data.title)
      case "z-a":
        return b.resource.data.title.localeCompare(a.resource.data.title)
      case "new-old":
        const dateB = b.resource.data.date ? new Date(b.resource.data.date).getTime() : 0
        const dateA = a.resource.data.date ? new Date(a.resource.data.date).getTime() : 0
        return dateB - dateA
      case "old-new":
        const dateB2 = b.resource.data.date ? new Date(b.resource.data.date).getTime() : 0
        const dateA2 = a.resource.data.date ? new Date(a.resource.data.date).getTime() : 0
        return dateA2 - dateB2
    }
  })

  // filter the resources by the searchQuery value
  result = result.filter((item) => {
    if ($searchQuery.value === "") {
      return true
    }
    const searchTerm = $searchQuery.value.toLowerCase()
    const title = item.resource.data.title.toLowerCase()
    const excerpt = (item.resource.data.excerpt || "").toLowerCase()

    return title.includes(searchTerm) || excerpt.includes(searchTerm)
  })

  // filter the resources by the selectedTags value
  result = result.filter((item) => {
    if ($selectedTags.value.length === 0) {
      return true
    }

    return $selectedTags.value.every((selectedTag) => {
      // Handle special pricing tags
      if (selectedTag === "free") {
        return item.resource.data.pricing === "free"
      }
      if (selectedTag === "freemium") {
        return item.resource.data.pricing === "freemium"
      }
      // Handle regular tags
      return item.resource.data.tags.includes(selectedTag)
    })
  })

  console.log("result", result)
  return result
})
</script>

<style>
.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  max-width: 1600px;
  margin: 0 auto;
}

.auto-fit-grid > * {
  max-width: 500px;
  justify-self: center;
  width: 100%;
}
</style>
