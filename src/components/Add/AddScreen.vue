<template>
  <div class="bg-black h-screen flex items-center justify-center">
    <div class="max-w-screen-2xl mx-auto p-8 h-full flex flex-col">
      <h1 class="text-2xl font-bold mb-6">Add Resource</h1>

      <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-8 flex-1">
        <!-- Left Column -->
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-1">
              <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                v-model="title"
                required
                class="mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Enter title"
              />
            </div>

            <div class="flex-1">
              <label for="url" class="block text-sm font-medium text-gray-700">URL</label>
              <input
                type="url"
                id="url"
                v-model="url"
                required
                class="mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Enter URL"
              />
            </div>
          </div>

          <div>
            <label for="excerpt" class="block text-sm font-medium text-gray-700">Excerpt</label>
            <textarea
              rows="3"
              id="excerpt"
              v-model="excerpt"
              required
              class="mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Enter excerpt"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Pricing</label>
            <div class="mt-2 flex gap-4">
              <label class="flex items-center cursor-pointer">
                <input type="radio" v-model="pricing" value="free" class="form-radio h-4 w-4 text-primary focus:ring-primary" />
                <span class="ml-2">Free</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input type="radio" v-model="pricing" value="paid" class="form-radio h-4 w-4 text-primary focus:ring-primary" />
                <span class="ml-2">Paid</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input type="radio" v-model="pricing" value="freemium" class="form-radio h-4 w-4 text-primary focus:ring-primary" />
                <span class="ml-2">Freemium</span>
              </label>
            </div>
          </div>

          <div>
            <label for="cost" class="block text-sm font-medium text-gray-700">Cost Range</label>
            <input
              type="text"
              v-model="cost"
              class="mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Enter cost"
            />
          </div>

          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select
              v-model="category"
              required
              class="mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="">Select a category</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Tags</label>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                v-for="tag in tags"
                :key="tag"
                type="button"
                @click="toggleTag(tag)"
                :class="[
                  'px-3 py-1 rounded-full text-sm transition-colors duration-200',
                  selectedTags.includes(tag) ? 'bg-primary text-white border border-primary' : 'bg-background text-copy border border-secondary/20 hover:bg-secondary/20',
                ]"
              >
                {{ tag }}
              </button>
              <div class="relative">
                <input
                  type="text"
                  v-model="newTag"
                  @keydown.enter.prevent="addNewTag"
                  class="px-3 py-1 rounded-full text-sm border border-secondary/20 bg-background text-copy focus:outline-none focus:border-accent"
                  placeholder="+ Add tag"
                />
                <button v-if="newTag" @click="addNewTag" class="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-accent">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-4 h-full flex flex-col">
          <div>
            <label class="block text-sm font-medium text-gray-700">Images</label>
            <div
              class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              @dragover.prevent="dragOver"
              @dragleave.prevent="dragLeave"
              @drop.prevent="handleDrop"
              :class="{ 'border-indigo-500': isDragging }"
            >
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload files</span>
                    <input id="file-upload" type="file" class="sr-only" multiple accept="image/*" @change="handleFileSelect" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <div v-if="uploadedImages.length > 0" class="mt-4 grid grid-cols-3 gap-4">
              <div v-for="(image, index) in uploadedImages" :key="index" class="relative">
                <img :src="image.preview" class="w-full h-32 object-cover rounded" />
                <button type="button" @click="removeImage(index)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="flex-1">
            <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              v-model="content"
              required
              rows="10"
              class="h-full mt-1 block w-full rounded-md border border-secondary bg-background px-3 py-2 text-copy shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Enter markdown content"
            ></textarea>
          </div>
        </div>
      </form>
      <!-- Submit -->
      <div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          {{ isSubmitting ? "Creating..." : "Create Resource" }}
        </button>
      </div>

      <div v-if="successMessage" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

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
