<template>
  <div
    class="bg-background border border-secondary shadow-md rounded-md overflow-hidden"
  >
    <a :href="'/resources/' + resource.slug">
      <img
        :src="resource.data.image"
        :alt="resource.data.title"
        class="w-full aspect-video object-cover shadow-md"
      />
    </a>
    <div class="flex gap-2 flex-col p-4">
      <h2 class="text-lg font-bold text-copy">{{ resource.data.title }}</h2>

      <!-- Tags -->
      <div class="relative w-full overflow-x-auto">
        <div class="inline-flex min-w-full flex-col flex-wrap h-[4.5rem] gap-1">
          <span
            v-for="tag in tags"
            :key="tag.text"
            :class="`inline-flex w-fit tag ${tag.type}`"
          >
            {{ tag.text }}
          </span>
        </div>
      </div>

      <!-- excerpt -->
      <p
        class="h-[150px] text-sm overflow-hidden text-ellipsis line-clamp-4 text-copy"
      >
        {{ resource.data.excerpt }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps(["resource"]);

console.log(props.resource);

const simpleUrl = (url) => {
  let simpleUrl = url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "");
  simpleUrl = simpleUrl.replace(/\/$/, "");
  return simpleUrl.length > 30 ? simpleUrl.slice(0, 30) + "..." : simpleUrl;
};

const tags = computed(() => {
  let group = [];
  if (props.resource.data.url) {
    group.push({ text: simpleUrl(props.resource.data.url), type: "url" });
  }
  if (props.resource.data.pricing) {
    group.push({ text: props.resource.data.pricing, type: "pricing" });
  }
  if (props.resource.data.cost) {
    group.push({ text: props.resource.data.cost, type: "cost" });
  }

  // Sort tags alphabetically and add type
  const sortedTags = [...props.resource.data.tags].sort();
  sortedTags.forEach((tag, index) => {
    if (tag) group.push({ text: tag, type: "tag", index });
  });

  return group;
});
</script>
