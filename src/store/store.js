import { atom } from "nanostores"
import { persistentAtom } from "@nanostores/persistent"

// Initialize with the value from localStorage or 0
const initialTheme = typeof window !== "undefined" ? Number(localStorage.getItem("selectedTheme")) || 0 : 0

export const selectedTheme = persistentAtom("selectedTheme", initialTheme)

export const isSidebarOpen = atom(false)

export const selectedCategories = atom([])
export const selectedTags = atom([])
export const searchQuery = atom("")
export const sortBy = atom("category-asc")

export const resetFilters = () => {
  selectedCategories.set([])
  selectedTags.set([])
  searchQuery.set("")
  sortBy.set("category-asc")
}

export const setTheme = (theme) => {
  selectedTheme.set(theme)
}
