import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/anphuc_learn_reactjs/",
  plugins: [react()],
})
