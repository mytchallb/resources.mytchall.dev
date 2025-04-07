import { themes } from "./themes"
import { selectedTheme } from "../store/store"

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
