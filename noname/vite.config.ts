import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/noname-extension/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.indexOf('node_modules') !== -1) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
