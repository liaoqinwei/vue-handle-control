import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue"],
      output:{
        dir:"./lib"
      }
    }
  },
  optimizeDeps: {
    exclude: ["vue-demi"]
  }
})
