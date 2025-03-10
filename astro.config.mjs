// @ts-check
import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  publicDir: "static",
  outDir: "public",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
})
