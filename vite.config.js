import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          // Split TanStack Query
          reactQuery: ["@tanstack/react-query"],
          // Split React Router
          reactRouter: ["react-router-dom"],
        },
      },
    },
  },
});
