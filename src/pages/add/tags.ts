import type { APIRoute } from "astro"

export const prerender = false

export const GET: APIRoute = async () => {
  const tags = [
    "source-available",
    "php",
    "javascript",
    "typescript",
    "python",
    "ruby",
    "go",
    "rust",
    "java",
    "csharp"
  ]

  const categories = [
    "cms",
    "framework",
    "library",
    "tool",
    "service",
    "platform",
    "database",
    "devops",
    "design",
    "analytics"
  ]

  return new Response(JSON.stringify({ tags, categories }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
} 