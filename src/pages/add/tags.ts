import type { APIRoute } from "astro"
import fs from 'node:fs'
import matter from 'gray-matter'



export const GET: APIRoute = async () => {
  const allTags = new Set<string>()
  const allCategories = new Set<string>()

  // Read all .md files in content/resources and build up a list
  const files = fs.readdirSync('./src/content/resources')
  
  files.forEach(file => {
    if (!file.endsWith('.md')) return
    
    const content = fs.readFileSync(`./src/content/resources/${file}`, 'utf8')
    const { data } = matter(content)
    
    if (data.tags) {
      const tags = Array.isArray(data.tags) ? data.tags : [data.tags]
      tags.forEach((tag: string) => allTags.add(tag.trim().toLowerCase()))
    }
    
    if (data.category) {
      const categories = Array.isArray(data.category) ? data.category : [data.category]
      categories.forEach((category: string) => allCategories.add(category.trim().toLowerCase()))
    }
  })

  return new Response(JSON.stringify({ 
    tags: Array.from(allTags), 
    categories: Array.from(allCategories) 
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
} 