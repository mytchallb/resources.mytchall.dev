const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Path to the Astro config file
const configPath = path.join(process.cwd(), "astro.config.mjs")

// Read the current config
let configContent = fs.readFileSync(configPath, "utf8")

// Add output: 'server' to the config
const modifiedConfig = configContent.replace("export default defineConfig({", 'export default defineConfig({\n  output: "server",')

// Write the modified config
fs.writeFileSync(configPath, modifiedConfig)

// Start the dev server
console.log("Starting dev server with API support...")
execSync("astro dev", { stdio: "inherit" })

// When the process exits, restore the original config
process.on("SIGINT", () => {
  fs.writeFileSync(configPath, configContent)
  process.exit()
})
