import { selectedTheme, setSortBy, setCategories, setTags, setSearchQuery } from "../store/store"

export const applyThemeIndexToDom = (themeIndex) => {
  const body = document.querySelector("body")
  // Remove all theme classes using regex
  body.classList.remove(...Array.from(body.classList).filter((className) => className.startsWith("theme-")))
  // Add the new theme class
  body.classList.add(`theme-${themeIndex}`)
}

export const cycleTheme = () => {
  const currentTheme = Number(selectedTheme.get())
  console.log("currentTheme", currentTheme)

  const root = document.documentElement
  const maxThemes = parseInt(getComputedStyle(root).getPropertyValue("--max-themes").trim())
  console.log("maxThemes", maxThemes)

  const nextIndex = (currentTheme + 1) % maxThemes
  console.log("nextIndex", nextIndex)

  const body = document.querySelector("body")
  console.log("Current body classes:", body.classList)

  selectedTheme.set(nextIndex)
  applyThemeIndexToDom(nextIndex)

  console.log("New body classes:", body.classList)
}

export const updateUrl = (type, params = []) => {
  const url = new URL(window.location.href)
  // Convert array to comma-separated string if params is an array
  const paramValue = Array.isArray(params) ? params.join(",") : params

  if (paramValue.length === 0 || paramValue === "category-asc") {
    url.searchParams.delete(type)
  } else {
    url.searchParams.set(type, paramValue)
  }

  // Use replaceState and decode the URL to show commas instead of %2C
  window.history.replaceState({}, "", decodeURIComponent(url.toString()))
}

export const applyUrlParamsToStore = () => {
  console.log("applyUrlParamsToStore")
  const url = new URL(window.location.href)

  const sortBy = url.searchParams.get("sortBy")
  console.log("sortBy", sortBy)
  if (sortBy) setSortBy(sortBy)

  const categories = url.searchParams.get("categories")
  // Make sure categories is an array
  const categoriesArray = categories ? categories.split(",") : []
  console.log("categories", categoriesArray)
  if (categoriesArray) setCategories(categoriesArray)

  const tags = url.searchParams.get("tags")
  // Make sure tags is an array
  const tagsArray = tags ? tags.split(",") : []
  console.log("tags", tagsArray)
  if (tagsArray) setTags(tagsArray)

  const searchQuery = url.searchParams.get("search")
  console.log("searchQuery", searchQuery)
  if (searchQuery) setSearchQuery(searchQuery)
}
