import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// The example imports the component directly from `../src` so edits to the
// library show up instantly in the dev server with no rebuild step.
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      'react-image-annotator-canvas': path.resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
