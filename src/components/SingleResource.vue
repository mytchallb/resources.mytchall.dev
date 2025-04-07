<template>
  <div class="w-full min-h-screen overflow-y-auto flex flex-col justify-between">
    <div>
      <!-- Nav -->
      <div class="w-full">
        <div class="w-full flex flex-row items-center justify-between p-2 max-w-screen-lg mx-auto">
          <!-- Back Arrow -->
          <div class="p-2">
            <svg class="w-6 h-6 cursor-pointer fill-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" @click="goBack">
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </div>
          <!-- Title -->
          <span class="text-lg text-center font-bold">Dev Resources</span>
          <span></span>
        </div>
      </div>
      <!-- Image -->
      <div class="w-full flex flex-col items-center justify-center p-2">
        <div class="h-full lg:w-[75vw] max-w-[1200px]">
          <img class="aspect-video object-cover w-full h-full rounded-lg shadow-md" :src="activeImage" alt="" />
        </div>
      </div>

      <!-- Thumbnails -->
      <div v-if="resource.images.length > 1" class="w-full flex flex-row items-center justify-center p-2">
        <div class="flex flex-row items-center justify-center gap-2 overflow-x-auto overflow-y-hidden p-2 h-[100px]">
          <div
            v-for="image in resource.images"
            :key="image"
            @click="selectImage(image)"
            class="cursor-pointer flex-shrink-0 aspect-video duration-200 min-w-[80px] h-full rounded-lg overflow-hidden shadow-sm"
            :class="activeImage === image ? '' : 'opacity-70'"
          >
            <img class="aspect-video object-cover w-full h-full" :src="image" alt="" />
          </div>
        </div>
      </div>

      <!-- Title -->
      <div class="text-center flex flex-col gap-4 my-4">
        <h1 class="text-4xl text-center font-bold">{{ resource.title }}</h1>
        <!-- URL and Pricing -->
        <div class="flex flex-col gap-2">
          <a :href="resource.url" class="text-sm text-center font-bold hover:underline">/{{ simpleUrl(resource.url) }}</a>
          <div class="w-full flex items-center justify-center gap-2 text-sm text-center font-bold">
            <span class="capitalize">{{ resource.pricing }}</span>
            <span v-if="resource.cost" class="">-</span>
            <span v-if="resource.cost" class="">{{ resource.cost }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="w-full max-w-screen-md mx-auto p-6 pt-0">
      <!-- content -->
      <div class="prose">
        <slot name="content" />
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full flex flex-row items-center justify-center p-2 bg-secondary mt-20">
      <span class="text-sm text-center font-bold my-4">resources.mytchall.dev</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { simpleUrl } from "../lib/utils"

const props = defineProps(["resource"])

const activeImage = ref(props.resource.images[0])

const selectImage = (image) => {
  activeImage.value = image
}

const goBack = () => {
  // navigate to the previous page
  window.history.back()
}

onMounted(() => {
  // Set up listener for arrow keys, to navigate between images
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (props.resource.images.indexOf(activeImage.value) < props.resource.images.length - 1) {
        selectImage(props.resource.images[props.resource.images.indexOf(activeImage.value) + 1])
      }
    }
    if (e.key === "ArrowLeft") {
      if (props.resource.images.indexOf(activeImage.value) > 0) {
        selectImage(props.resource.images[props.resource.images.indexOf(activeImage.value) - 1])
      }
    }
    if (e.key === "Backspace") {
      goBack()
    }
  })
})
</script>
