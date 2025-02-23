import { getCollection } from "astro:content"

export async function getResourceData() {
  const resources = await getCollection("resources")

  const categories = resources.map((resource) => resource.data.category ?? "Unset")
  const uniqueCategories = [...new Set(categories)].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  const categoriesWithCount = uniqueCategories.map((category) => ({
    name: category,
    count: categories.filter((c) => c === category).length,
  }))

  let tags = resources.flatMap((resource) => resource.data.tags ?? [])
  let uniqueTags = [...new Set(tags)].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  uniqueTags = uniqueTags.filter((tag) => !["free", "freemium", "open-source"].includes(tag))
  uniqueTags.unshift("free", "freemium", "open-source")

  return {
    resources,
    categoriesWithCount,
    uniqueTags,
  }
}
