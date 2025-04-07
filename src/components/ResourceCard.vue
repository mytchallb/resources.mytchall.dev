<template>
  <div class="relative">
    <div v-if="resource" class="bg-background/85 border border-secondary shadow-md rounded-md overflow-hidden h-full">
      <a :href="'/resources/' + resource.slug">
        <img :src="resource.data.images[0]" :alt="resource.data.title" class="w-full aspect-video object-cover shadow-md" />
      </a>
      <div class="flex gap-2 flex-col p-4">
        <h2 class="text-lg font-bold text-copy">{{ resource.data.title }}</h2>

        <!-- Tags -->
        <div class="overflow-x-auto scrollbar-hide">
          <div class="flex flex-col gap-1">
            <div class="flex gap-1">
              <span v-for="(tag, index) in tags" :key="tag.text" v-show="index % 2 === 0" :class="`inline-flex w-fit tag ${tag.type} whitespace-nowrap`">
                {{ tag.text }}
              </span>
            </div>
            <div class="flex gap-1">
              <span v-for="(tag, index) in tags" :key="tag.text" v-show="index % 2 === 1" :class="`inline-flex w-fit tag ${tag.type} whitespace-nowrap`">
                {{ tag.text }}
              </span>
            </div>
          </div>
        </div>

        <!-- excerpt -->
        <p class="text-sm overflow-hidden text-ellipsis line-clamp-4 text-copy">
          {{ resource.data.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue"
import { simpleUrl } from "../lib/utils"
const props = defineProps(["resource"])

// console.log(props.resource)

const tags = computed(() => {
  let group = []
  if (props.resource.data.url) {
    group.push({ text: simpleUrl(props.resource.data.url), type: "url" })
  }
  if (props.resource.data.pricing) {
    group.push({ text: props.resource.data.pricing, type: "pricing" })
  }
  if (props.resource.data.cost) {
    group.push({ text: props.resource.data.cost, type: "cost" })
  }

  // Sort tags alphabetically and add type
  const sortedTags = [...props.resource.data.tags].sort()
  sortedTags.forEach((tag, index) => {
    if (tag) group.push({ text: tag, type: "tag", index })
  })

  return group
})
</script>
