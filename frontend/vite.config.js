import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      "/api/v1": "http://192.168.1.42:3000/",
    },
  },
  plugins: [react()],
})
