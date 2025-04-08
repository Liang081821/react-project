import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { analyzer } from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), analyzer()],
  build: {
    sourcemap: true,

    // code-splitting 獨立打包第三方套件
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});

// #TODO: analyzer 在部署的時候會影響，要註解掉
