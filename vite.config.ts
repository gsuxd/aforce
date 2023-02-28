import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      }
    ]
  }
})
