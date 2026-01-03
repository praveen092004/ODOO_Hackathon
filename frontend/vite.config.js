import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Your v4 plugin

export default defineConfig({
  plugins: [
    tailwindcss(),  // BEFORE react plugin
    react()
  ],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom']
  },
  optimizeDeps: {
    include: ['react-router-dom']  // Force single copy
  }
})
