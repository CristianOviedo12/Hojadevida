import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Añade aquí el módulo que está causando el problema
        'nombre-del-modulo'
      ],
    },
  },
})
