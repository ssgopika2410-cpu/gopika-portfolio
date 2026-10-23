import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is set relative so the build works from any GitHub Pages
// subpath (https://username.github.io/repo-name/) without hardcoding
// a domain or repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsInlineLimit: 0,
  },
})
