import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RNC-IMAC-2.0/', // <-- Maiúsculo e com o 2.0
})
