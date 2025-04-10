<template>
  <div class="bg-black h-screen overflow-y-auto">
    <div class="max-w-screen-2xl mx-auto p-8 pb-10 h-full flex flex-col">
      <h1 class="text-2xl font-bold mb-6 text-white">Add Resource</h1>

      <form @submit.prevent="submitForm" class="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        <!-- Left Column -->
        <div class="space-y-4 flex flex-col">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              id="title"
              v-model="title"
              required
              class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>

          <div>
            z
            <label for="excerpt" class="block text-sm font-medium text-gray-300">Excerpt</label>
            <textarea
              rows="3"
              id="excerpt"
              v-model="excerpt"
              required
              class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter excerpt"
            />
          </div>

          <div class="flex-1 pb-8">
            <label for="content" class="block text-sm font-medium text-gray-300">Content</label>
            <textarea
              id="content"
              v-model="content"
              required
              rows="10"
              class="h-full mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter markdown content"
            ></textarea>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="url" class="block text-sm font-medium text-gray-300">Full URL</label>
              <input
                type="text"
                id="url"
                v-model="url"
                required
                class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter URL"
              />
            </div>

            <div>
              <label for="category" class="block text-sm font-medium text-gray-300">Category</label>
              <input
                type="text"
                id="category"
                v-model="category"
                required
                list="category-list"
                class="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Select or type a category"
              />
              <datalist id="category-list">
                <option v-for="cat in categories" :key="cat" :value="cat" class="capitalize">{{ cat }}</option>
              </datalist>
            </div>
          </div>

          <!-- Pricing & Cost -->
          <div>
            <label class="block text-sm font-medium text-gray-300">Pricing & Cost</label>
            <div class="mt-2 flex gap-4 items-center">
              <div class="flex gap-4">
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="pricing" value="free" class="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500" />
                  <span class="ml-2 text-gray-300">Free</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="pricing" value="paid" class="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500" />
                  <span class="ml-2 text-gray-300">Paid</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="pricing" value="freemium" class="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500" />
                  <span class="ml-2 text-gray-300">Freemium</span>
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  v-model="cost"
                  class="block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter price range"
                />
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-col">
            <label class="block text-sm font-medium text-gray-300">Tags</label>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                v-for="tag in tags"
                :key="tag"
                type="button"
                @click="toggleTag(tag)"
                :class="[
                  'px-3 py-1 rounded-full text-sm transition-colors duration-200',
                  selectedTags.includes(tag) ? 'bg-blue-600 text-white border border-blue-600' : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800',
                ]"
              >
                {{ tag }}
              </button>
              <div class="relative">
                <input
                  type="text"
                  v-model="newTag"
                  @keydown.enter.prevent="addNewTag"
                  class="px-3 py-1 rounded-full text-sm border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-blue-500"
                  placeholder="+ Add tag"
                />
                <button v-if="newTag" @click="addNewTag" class="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Images -->
          <div>
            <label class="block text-sm font-medium text-gray-300">Images</label>
            <div class="mt-2 relative cursor-pointer" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="handleDrop">
              <div class="flex flex-col px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md" :class="{ 'border-blue-500': isDragging }">
                <label for="file-upload" class="w-full cursor-pointer">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-400 justify-center">
                      <span class="font-medium text-blue-500 hover:text-blue-400">Upload files</span>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input id="file-upload" type="file" class="sr-only" multiple accept="image/*" @change="handleFileSelect" />
                </label>

                <div v-if="uploadedImages.length > 0" class="mt-4">
                  <div class="flex gap-2 overflow-x-auto pb-2" style="scrollbar-width: none; -ms-overflow-style: none">
                    <div
                      v-for="(image, index) in uploadedImages"
                      :key="index"
                      class="relative aspect-square flex-shrink-0 w-32 cursor-move"
                      draggable="true"
                      @dragstart="dragStart(index)"
                      @dragover.prevent
                      @drop.prevent="dropImage(index)"
                    >
                      <img :src="image.preview" class="w-full h-full object-cover rounded" />
                      <button type="button" @click="removeImage(index)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <div class="flex justify-center items-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex justify-center cursor-pointer rounded-md border border-transparent bg-blue-600 py-4 px-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {{ isSubmitting ? "Creating..." : "Create Resource" }}
            </button>
          </div>
        </div>
      </form>

      <div v-if="successMessage" class="mt-4 p-4 bg-green-900 text-green-300 rounded-md">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 p-4 bg-red-900 text-red-300 rounded-md">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import draggable from "vuedraggable"

const title = ref("")
const url = ref("")
const excerpt = ref("")
const pricing = ref("")
const cost = ref("")
const category = ref("")
const selectedTags = ref([])
const content = ref("")
const successMessage = ref("")
const errorMessage = ref("")
const isSubmitting = ref(false)
const isDragging = ref(false)
const uploadedImages = ref([])
const tags = ref([])
const categories = ref([])
const newTag = ref("")

onMounted(async () => {
  try {
    const response = await fetch("/add/tags")
    const data = await response.json()
    tags.value = data.tags
    categories.value = data.categories
  } catch (error) {
    console.error("Error fetching tags and categories:", error)
  }
})

const dragOver = () => {
  isDragging.value = true
}

const dragLeave = () => {
  isDragging.value = false
}

const handleDrop = (e) => {
  isDragging.value = false
  const files = Array.from(e.dataTransfer.files)
  handleFiles(files)
}

const handleFileSelect = (e) => {
  const files = Array.from(e.target.files)
  handleFiles(files)
}

const handleFiles = (files) => {
  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        uploadedImages.value.push({
          file,
          preview: e.target.result,
        })
      }
      reader.readAsDataURL(file)
    }
  })
}

const removeImage = (index) => {
  uploadedImages.value.splice(index, 1)
}

const toggleTag = (tag) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const addNewTag = () => {
  if (newTag.value.trim() && !tags.value.includes(newTag.value.trim())) {
    tags.value.push(newTag.value.trim())
    selectedTags.value.push(newTag.value.trim())
    newTag.value = ""
  }
}

const dragStart = (index) => {
  event.dataTransfer.setData("text/plain", index)
}

const dropImage = (dropIndex) => {
  const dragIndex = parseInt(event.dataTransfer.getData("text/plain"))
  const images = [...uploadedImages.value]
  const [draggedImage] = images.splice(dragIndex, 1)
  images.splice(dropIndex, 0, draggedImage)
  uploadedImages.value = images
}

const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ""
  successMessage.value = ""

  const filename =
    title.value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") + ".md"

  // Upload images first
  const imagePaths = []
  for (const image of uploadedImages.value) {
    const formData = new FormData()
    formData.append("file", image.file)

    try {
      const response = await fetch("/add/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload image")
      }

      const data = await response.json()
      imagePaths.push(data.path)
    } catch (error) {
      console.error("Error uploading image:", error)
      errorMessage.value = "Failed to upload images. Please try again."
      isSubmitting.value = false
      return
    }
  }

  const markdownContent = `---
title: "${title.value}"
tags: ${JSON.stringify(selectedTags.value)}
images: ${JSON.stringify(imagePaths)}
category: "${category.value}"
url: "${url.value}"
cost: "${cost.value}"
pricing: "${pricing.value}"
date: "${new Date().toISOString()}"
excerpt: "${excerpt.value}"
---

${content.value}`

  try {
    const response = await fetch("/add/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename, content: markdownContent }),
    })

    if (!response.ok) {
      throw new Error("Failed to create file")
    }

    successMessage.value = `Successfully created ${filename}`
    // Reset form
    title.value = ""
    url.value = ""
    excerpt.value = ""
    pricing.value = ""
    cost.value = ""
    category.value = ""
    selectedTags.value = []
    content.value = ""
    uploadedImages.value = []
  } catch (error) {
    errorMessage.value = "Failed to create file. Please try again."
    console.error("Error:", error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
