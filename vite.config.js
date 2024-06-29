import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),eslint()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base:"/threejs-typescript-template"
})
