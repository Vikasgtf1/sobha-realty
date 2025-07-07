import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Ensure correct base path for assets
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"], // Include font files in asset processing
  build: {
    assetsDir: "assets/fonts", // Output fonts to /assets/fonts/
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.includes("helvetica/")) {
            return "assets/fonts/helvetica/[name][extname]";
          }
          if (assetInfo.name.includes("merchant/")) {
            return "assets/fonts/merchant/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  server: {
    mimeTypes: {
      woff2: "font/woff2",
      woff: "font/woff",
      ttf: "font/ttf",
    },
  },
});
