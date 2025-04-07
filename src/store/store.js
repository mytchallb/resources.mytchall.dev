import { atom } from "nanostores"
import { persistentAtom } from "@nanostores/persistent"
import { updateUrl } from "../lib/methods"
// Initialize with the value from localStorage or 0
const initialTheme = typeof window !== "undefined" ? Number(localStorage.getItem("selectedTheme")) || 0 : 0

export const selectedTheme = persistentAtom("selectedTheme", initialTheme)

export const isSidebarOpen = atom(false)

export const selectedCategories = atom([])
export const selectedTags = atom([])
export const searchQuery = atom("")
export const sortBy = atom("category-asc")

export const resetFilters = () => {
  setCategories([])
  setTags([])
  setSearchQuery("")
  setSortBy("category-asc")
}

export const setTheme = (theme) => {
  selectedTheme.set(theme)
}

export const setCategories = (categories) => {
  selectedCategories.set(categories)
  updateUrl("categories", categories)
}

export const setTags = (tags) => {
  selectedTags.set(tags)
  updateUrl("tags", tags)
}

export const setSearchQuery = (query) => {
  console.log("updating searchQuery with ", query)
  searchQuery.set(query)
  updateUrl("search", query)
}

export const setSortBy = (value) => {
  sortBy.set(value)
  updateUrl("sortBy", value)
}
