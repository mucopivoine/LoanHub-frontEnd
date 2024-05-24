import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'build',
    chunkSizeWarningLimit: 2000,
  },
  server:{
 port: 5003,
 define:{
  'process.env':process.env,
 }
  }
})
