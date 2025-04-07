import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

// Get the directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const resourcesDir = path.join(__dirname, "src/content/resources")
const outputFile = path.join(__dirname, "Resources.md")

async function createResourceContents() {
  let existingIntro = ""

  // Try to read existing content and preserve introduction
  try {
    const existingContent = await fs.readFile(outputFile, "utf-8")
    const introParts = existingContent.split("## Categories")
    if (introParts.length > 1) {
      existingIntro = introParts[0]
    }
  } catch (error) {
    // File doesn't exist yet, use default intro
    existingIntro = "# Resources\n\n"
  }

  // Read all .md files from the resources directory
  const files = await fs.readdir(resourcesDir)
  const mdFiles = files.filter((file) => file.endsWith(".md"))

  // Store resources by category
  const categoryMap = new Map()

  // Parse each markdown file
  for (const file of mdFiles) {
    const content = await fs.readFile(path.join(resourcesDir, file), "utf-8")
    const frontmatter = content.split("---")[1]

    // Parse the frontmatter
    const data = {}
    frontmatter.split("\n").forEach((line) => {
      const match = line.match(/^(\w+):\s*"?([^"]*)"?$/)
      if (match) {
        data[match[1]] = match[2]
      }
    })

    // Add to category map
    if (!categoryMap.has(data.category)) {
      categoryMap.set(data.category, [])
    }
    categoryMap.get(data.category).push({
      title: data.title,
      url: data.url,
      excerpt: data.excerpt,
    })
  }

  // Generate the markdown content
  let output = existingIntro
  if (!output.endsWith("\n\n")) {
    output += "\n\n" // Ensure proper spacing before categories
  }
  output += "## Categories\n\n"

  // Sort categories alphabetically
  const sortedCategories = Array.from(categoryMap.keys()).sort((a, b) => a.localeCompare(b))

  // Add category links
  for (const category of sortedCategories) {
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)
    output += `- [${capitalizedCategory}](#${category.toLowerCase()})\n`
  }

  output += "\n"

  // Add resources by category
  for (const category of sortedCategories) {
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)
    output += `## ${capitalizedCategory}\n\n`
    // Sort resources alphabetically by title
    const sortedResources = categoryMap.get(category).sort((a, b) => a.title.localeCompare(b.title))
    for (const resource of sortedResources) {
      output += `- [${resource.title}](${resource.url}) - ${resource.excerpt}\n\n`
    }
    output += "\n"
  }

  // Write to Resources.md
  await fs.writeFile(outputFile, output)
}

createResourceContents()
