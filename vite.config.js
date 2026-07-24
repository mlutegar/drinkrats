import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/drinkrats/',
  server: {
    port: 5185,
    host: '0.0.0.0',
  },
})
