import type { APIRoute } from "astro"
import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  if (process.env.ASTRO_SSR !== "true") {
    return new Response("API endpoints are only available in SSR mode", { status: 403 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    // Generate a unique filename
    const extension = path.extname(file.name)
    const filename = `${uuidv4()}${extension}`
    const uploadPath = path.join(process.cwd(), "public/images", filename)

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Write file to disk
    await fs.writeFile(uploadPath, buffer)

    return new Response(
      JSON.stringify({
        success: true,
        path: `/images/${filename}`,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  } catch (error) {
    console.error("Error uploading file:", error)
    return new Response(JSON.stringify({ error: "Failed to upload file" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
} 