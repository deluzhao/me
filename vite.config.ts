import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 3001,
  },
  // for dev
  server: {
    port: 2003,
  },
  plugins: [react()],
})
  