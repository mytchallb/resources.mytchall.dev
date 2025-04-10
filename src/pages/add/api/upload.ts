import type { APIRoute } from "astro"
import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import sharp from "sharp"

const CONVERT_TO_WEBP_TYPES = ["image/jpeg", "image/jpg", "image/png"]
const MAX_DIMENSION = 2000
const WEBP_QUALITY = 100

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
    const extension = CONVERT_TO_WEBP_TYPES.includes(file.type) ? ".webp" : path.extname(file.name)
    const filename = `${uuidv4()}${extension}`
    const uploadPath = path.join(process.cwd(), "static/images", filename)

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    if (CONVERT_TO_WEBP_TYPES.includes(file.type)) {
      // Process image with Sharp for JPG/JPEG/PNG
      await sharp(buffer)
        .resize(MAX_DIMENSION, MAX_DIMENSION, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: WEBP_QUALITY })
        .toFile(uploadPath)
    } else {
      // For other formats (WebP, GIF, etc.), just save the file
      await fs.writeFile(uploadPath, buffer)
    }

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