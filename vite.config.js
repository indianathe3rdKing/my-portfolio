import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("/three/")) return "three";
            if (
              id.includes("@react-three") ||
              id.includes("three-stdlib") ||
              id.includes("maath")
            ) {
              return "react-three";
            }
            if (id.includes("react-dom")) return "react-dom";
            if (
              id.includes("framer-motion") ||
              id.includes("/motion")
            ) {
              return "motion";
            }
          }
        },
      },
    },
  },
});
