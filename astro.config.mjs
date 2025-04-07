// @ts-check
import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwindcss from "@tailwindcss/vite"
import node from "@astrojs/node"

console.log("process.env.ASTRO_SSR", process.env.ASTRO_SSR)

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  publicDir: "static",
  outDir: "public",
  output: (process.env.ASTRO_SSR || "false") === "true" ? "server" : "static",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
})
